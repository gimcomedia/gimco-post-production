"""PreToolUse hook: ask before any MCP tool that spends paid credits.

The plugin's hooks.json runs this on every mcp__ tool call. It never blocks: a tool that spends
credits gets "ask" (Claude Code shows the question), and anything else passes silently.

Which servers count is in credit_guard.json next to this file:
  - "match": text that appears in the server part of the tool name. Claude Code in a terminal names
    claude.ai connectors by name (mcp__claude_ai_Higgsfield__...), and the desktop app names them by
    the connector's id (mcp__440323b2-...__...), so a service lists both.
  - "spend": tool names that always spend (for servers whose tools are known).
  - "free": tool names that never spend, beyond the lookup words below.
A tool on a listed server spends unless its name is a lookup (get, list, search, cost, status...).
If the hook itself fails it lets the call through: it is a reminder, not a lock.
"""
import json
import os
import re
import sys

LOOKUP = re.compile(
    r"(^|_)(get|list|search|find|show|read|view|wait|status|check|balance|credits?|cost|costs|price|"
    r"pricing|quote|estimate|simulate|describe|inspect|metadata|models?|presets?|history|account|"
    r"profile|preferences|notifications|guides?|lineage|usage|explore|options|settings|doctor|help)(_|$)"
)


def load_config():
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "credit_guard.json")
    with open(path, encoding="utf-8") as f:
        return json.load(f)["services"]


def main():
    try:
        data = json.load(sys.stdin)
        services = load_config()
    except Exception:
        return 0
    m = re.match(r"mcp__(.+?)__(.+)$", data.get("tool_name", ""))
    if not m:
        return 0
    server, tool = m.group(1).lower(), m.group(2)
    service = next((s for s in services if any(k.lower() in server for k in s["match"])), None)
    if not service:
        return 0
    if tool in service.get("free", []):
        return 0
    if tool not in service.get("spend", []) and LOOKUP.search(tool.lower()):
        return 0
    reason = f"الأداة دي بتصرف كريدت: `{tool}` على {service['name']}. توافق؟"
    out = json.dumps({"hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "ask",
        "permissionDecisionReason": reason,
    }}, ensure_ascii=False)
    # Bytes, not print(): the Windows console code page can't encode Arabic and the hook would die silently.
    sys.stdout.buffer.write(out.encode("utf-8"))
    sys.stdout.flush()
    return 0


if __name__ == "__main__":
    sys.exit(main())
