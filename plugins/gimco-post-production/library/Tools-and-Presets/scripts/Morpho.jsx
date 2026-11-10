/*
    Morpho v2.1  -  by omar.visualz
    -------------------------------
    Morphs the selected layers into the LAST selected layer (the target):

      1. Wind-up : layers back away from the target and start to spin.
      2. Strike  : they speed up on a curved path and hit the target
                   center at full speed, still spinning.
      3. Swap    : hard cut. Layers disappear, target appears.
      4. Impact  : the target pops in tilted and wobbles (rotation + scale)
                   until it settles.

    Install
      - Dockable:   copy this file into  After Effects/Scripts/ScriptUI Panels/
                    restart AE, then open it from the Window menu.
      - Quick use:  File > Scripts > Run Script File...  and pick this file.

    Use
      1. Select the layers you want to morph.
      2. Select the TARGET layer LAST (Ctrl/Cmd-click it).
      3. Put the time indicator where the morph should start.
      4. Press Morph.
      Hover any field to see what it does.

    After applying
      - Impact settings are sliders on the target (Effect Controls).
      - Drag the "Morph" marker on the target layer to retime the impact.
*/

(function Morpho(thisObj) {

    var SCRIPT_NAME = "Morpho";
    var VERSION = "2.1";
    var MARKER_TAG = "Morph";
    var EXPR_TAG = "// Morpho Impact";
    var KNOWN_TAGS = ["// Morpho Impact", "// SimpleMorph Impact"];
    var SETTINGS_SECTION = "Morpho";

    // ------------------------------------------------------------------
    // Parameters shown in the panel
    //   px = mouse pixels per step when dragging
    // ------------------------------------------------------------------
    var PARAMS = {
        windup:   { label: "Wind-up",  ask: "Wind-up (frames)",        def: 10, min: 0,    max: 120, step: 1,   dec: 0, unit: "f",       pad: true, px: 4 },
        strike:   { label: "Strike",   ask: "Strike (frames)",         def: 7,  min: 1,    max: 120, step: 1,   dec: 0, unit: "f",       pad: true, px: 4 },
        curve:    { label: "Curve",    ask: "Curve (%)",               def: 20, min: -100, max: 100, step: 1,   dec: 0, unit: "%",       px: 2 },
        spin:     { label: "Spin",     ask: "Spin (degrees)",          def: 30, min: -720, max: 720, step: 1,   dec: 0, unit: "\u00B0",  px: 1 },
        back:     { label: "Back",     ask: "Back move (%)",           def: 10, min: 0,    max: 100, step: 1,   dec: 0, unit: "%",       px: 3 },
        impRot:   { label: "Rotation", ask: "Impact rotation (deg)",   def: 12, min: -90,  max: 90,  step: 1,   dec: 0, unit: "\u00B0",  px: 2 },
        impScale: { label: "Scale",    ask: "Impact scale (%)",        def: 12, min: 0,    max: 100, step: 1,   dec: 0, unit: "%",       px: 2 },
        impFreq:  { label: "Freq",     ask: "Impact frequency (Hz)",   def: 3,  min: 0.1,  max: 20,  step: 0.1, dec: 1, unit: " Hz",     px: 2 },
        impDecay: { label: "Decay",    ask: "Impact decay",            def: 4,  min: 0,    max: 30,  step: 0.1, dec: 1, unit: "",        px: 2 }
    };
    var TOGGLE_DEFS = { scaleToTarget: false, motionBlur: true };

    var S = {}; // current values

    // ------------------------------------------------------------------
    // Impact expressions (go on the target). A decaying cosine that starts
    // at full strength at the "Morph" marker and settles to the real value.
    // ------------------------------------------------------------------
    function impactExpr(lastLine) {
        return [
            EXPR_TAG + "  (sliders in Effect Controls; drag the \"" + MARKER_TAG + "\" marker to retime)",
            "var out = value;",
            "try {",
            "    var tI = -1;",
            "    for (var i = 1; i <= marker.numKeys; i++) {",
            "        if (marker.key(i).comment == \"" + MARKER_TAG + "\" && marker.key(i).time <= time) tI = marker.key(i).time;",
            "    }",
            "    if (tI >= 0) {",
            "        var t = time - tI;",
            "        var f = effect(\"Impact Frequency\")(1);",
            "        var d = effect(\"Impact Decay\")(1);",
            "        var k = Math.cos(2 * Math.PI * f * t) * Math.exp(-d * t);",
            "        " + lastLine,
            "    }",
            "} catch (err) {}",
            "out;"
        ].join("\n");
    }
    var ROT_EXPR = impactExpr("out = value + effect(\"Impact Rotation\")(1) * k;");
    var SCALE_EXPR = impactExpr("out = mul(value, 1 - effect(\"Impact Scale\")(1) / 100 * k);");

    // ------------------------------------------------------------------
    // Settings
    // ------------------------------------------------------------------
    // Reads Morpho's saved value, or the one saved by Simple Morph v2.0.
    function getSetting(key) {
        var sections = [SETTINGS_SECTION, "SimpleMorph2"];
        for (var i = 0; i < sections.length; i++) {
            try {
                if (app.settings.haveSetting(sections[i], key)) return app.settings.getSetting(sections[i], key);
            } catch (e) {}
        }
        return null;
    }

    function putSetting(key, val) {
        try { app.settings.saveSetting(SETTINGS_SECTION, key, String(val)); } catch (e) {}
    }

    function loadState() {
        var k, v;
        for (k in PARAMS) {
            if (!PARAMS.hasOwnProperty(k)) continue;
            v = parseFloat(getSetting(k));
            S[k] = isNaN(v) ? PARAMS[k].def : clampParam(k, v);
        }
        for (k in TOGGLE_DEFS) {
            if (!TOGGLE_DEFS.hasOwnProperty(k)) continue;
            v = getSetting(k);
            S[k] = (v === null) ? TOGGLE_DEFS[k] : (v === "true");
        }
    }

    function saveState() {
        var k;
        for (k in PARAMS) if (PARAMS.hasOwnProperty(k)) putSetting(k, S[k]);
        for (k in TOGGLE_DEFS) if (TOGGLE_DEFS.hasOwnProperty(k)) putSetting(k, S[k]);
    }

    function clampParam(key, v) {
        var p = PARAMS[key];
        v = Math.round(v / p.step) * p.step;
        v = Math.max(p.min, Math.min(p.max, v));
        return parseFloat(v.toFixed(p.dec));
    }

    function fmtNum(key) {
        var v = S[key], p = PARAMS[key];
        var s = (Math.abs(v - Math.round(v)) < 1e-9) ? String(Math.round(v)) : v.toFixed(p.dec);
        if (p.pad && v >= 0 && v < 10) s = "0" + s;
        return s;
    }

    function fmtFull(key) { return fmtNum(key) + PARAMS[key].unit; }

    // ------------------------------------------------------------------
    // Small helpers
    // ------------------------------------------------------------------
    function vlen(v) { return Math.sqrt(v[0] * v[0] + v[1] * v[1]); }

    function rotate2(v, deg) {
        var r = deg * Math.PI / 180;
        var c = Math.cos(r), s = Math.sin(r);
        return [v[0] * c - v[1] * s, v[0] * s + v[1] * c];
    }

    function sgn(x) { return x < 0 ? -1 : 1; }

    function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

    function copyArr(a) {
        var o = [];
        for (var i = 0; i < a.length; i++) o.push(a[i]);
        return o;
    }

    function padArr(v, n) {
        var o = [];
        for (var i = 0; i < n; i++) o.push(i < v.length ? v[i] : 0);
        return o;
    }

    function isMorphable(layer) {
        if (layer instanceof CameraLayer || layer instanceof LightLayer) return false;
        if (typeof layer.sourceRectAtTime !== "function") return false;
        return true;
    }

    function isFree(prop) {
        return prop.numKeys === 0 && !(prop.expressionEnabled && prop.expression !== "");
    }

    function isOurExpr(expr) {
        for (var i = 0; i < KNOWN_TAGS.length; i++) {
            if (expr.indexOf(KNOWN_TAGS[i]) >= 0) return true;
        }
        return false;
    }

    // ==================================================================
    // MORPH ENGINE
    // ==================================================================

    // Layer-space points -> comp-space points through a temporary null whose
    // position expression calls toComp(). Handles parents, scale, rotation.
    function compPointsViaExpression(comp, layer, pts, t) {
        var tmp = comp.layers.addNull();
        tmp.name = "__Morpho_tmp__";
        var p = tmp.property("ADBE Transform Group").property("ADBE Position");
        var out = [];
        try {
            var idx = layer.index;
            for (var i = 0; i < pts.length; i++) {
                p.expression = "var q = thisComp.layer(" + idx + ").toComp([" +
                    pts[i][0] + ", " + pts[i][1] + "]);\n[q[0], q[1]];";
                var v = p.valueAtTime(t, false);
                if (p.expressionError) throw new Error(p.expressionError);
                out.push([v[0], v[1]]);
            }
        } finally {
            tmp.remove();
        }
        return out;
    }

    // Fallback: plain transform math (ignores parents).
    function compPointsSimple(layer, pts, t) {
        var tr = layer.property("ADBE Transform Group");
        var A = tr.property("ADBE Anchor Point").valueAtTime(t, false);
        var P = tr.property("ADBE Position").valueAtTime(t, false);
        var Sc = tr.property("ADBE Scale").valueAtTime(t, false);
        var R = tr.property("ADBE Rotate Z").valueAtTime(t, false);
        var out = [];
        for (var i = 0; i < pts.length; i++) {
            var o = rotate2([(pts[i][0] - A[0]) * Sc[0] / 100, (pts[i][1] - A[1]) * Sc[1] / 100], R);
            out.push([P[0] + o[0], P[1] + o[1]]);
        }
        return out;
    }

    // Visual box of a layer in comp space: center, width, height.
    function getBox(comp, layer, t) {
        var r = layer.sourceRectAtTime(t, false);
        var pts = [[r.left, r.top], [r.left + r.width, r.top], [r.left, r.top + r.height]];
        var c;
        try {
            c = compPointsViaExpression(comp, layer, pts, t);
        } catch (e) {
            c = compPointsSimple(layer, pts, t);
        }
        var ex = [c[1][0] - c[0][0], c[1][1] - c[0][1]];
        var ey = [c[2][0] - c[0][0], c[2][1] - c[0][1]];
        return {
            center: [c[0][0] + (ex[0] + ey[0]) / 2, c[0][1] + (ex[1] + ey[1]) / 2],
            width: vlen(ex),
            height: vlen(ey)
        };
    }

    function ensureSlider(layer, name, val) {
        var fx = layer.property("ADBE Effect Parade");
        var s = fx.property(name);
        if (!s) {
            s = fx.addProperty("ADBE Slider Control");
            s.name = name;
        }
        s.property(1).setValue(val);
    }

    function easeArr(n, influence) {
        var a = [];
        for (var i = 0; i < n; i++) a.push(new KeyframeEase(0, influence));
        return a;
    }

    // inInf / outInf: influence %, or null to keep the current ease.
    function setEase(prop, k, inInf, outInf) {
        prop.setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
        try { prop.setTemporalContinuousAtKey(k, false); } catch (e0) {}
        try { prop.setTemporalAutoBezierAtKey(k, false); } catch (e1) {}
        var tries = [prop.keyInTemporalEase(k).length, 1, 2, 3];
        for (var i = 0; i < tries.length; i++) {
            try {
                var n = tries[i];
                var inE = (inInf === null) ? prop.keyInTemporalEase(k) : easeArr(n, inInf);
                var outE = (outInf === null) ? prop.keyOutTemporalEase(k) : easeArr(n, outInf);
                prop.setTemporalEaseAtKey(k, inE, outE);
                return true;
            } catch (e2) {}
        }
        return false;
    }

    // Wind-up: soft in and out. Strike: starts slow, accelerates, and
    // arrives LINEAR, so the layer hits the target at full speed.
    function applyMorphEases(prop, k0, kA, k1) {
        if (kA > 0) {
            setEase(prop, k0, null, 50);
            setEase(prop, kA, 50, 85);
        } else {
            setEase(prop, k0, null, 85);
        }
        setEase(prop, k1, null, 33.33);
        prop.setInterpolationTypeAtKey(k1, KeyframeInterpolationType.LINEAR, prop.keyOutInterpolationType(k1));
    }

    function setSpatial(prop, k, inT, outT) {
        var n = prop.keyValue(k).length;
        var curIn = prop.keyInSpatialTangent(k);
        var curOut = prop.keyOutSpatialTangent(k);
        try { prop.setSpatialAutoBezierAtKey(k, false); } catch (e0) {}
        try { prop.setSpatialContinuousAtKey(k, false); } catch (e1) {}
        prop.setSpatialTangentsAtKey(k, padArr(inT || curIn, n), padArr(outT || curOut, n));
    }

    // Instant switch: value vOff until tOn, then vOn (hold keyframes).
    function holdSwitch(prop, tBefore, vOff, tOn, vOn) {
        prop.setValueAtTime(tBefore, vOff);
        prop.setValueAtTime(tOn, vOn);
        var a = prop.nearestKeyIndex(tBefore), b = prop.nearestKeyIndex(tOn);
        prop.setInterpolationTypeAtKey(a, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
        prop.setInterpolationTypeAtKey(b, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
    }

    function setExpr(prop, expr, layerName, notes) {
        if (prop.expression !== "" && !isOurExpr(prop.expression)) {
            notes.push(layerName + ": kept your existing expression on " + prop.name + " (no impact there)");
            return;
        }
        prop.expression = expr;
    }

    // One source layer: wind-up, then strike into the target center.
    function morphLayer(comp, L, tBox, t0, tA, t1, opts, notes) {
        var fd = comp.frameDuration;
        var tr = L.property("ADBE Transform Group");
        var pos = tr.property("ADBE Position");

        if (pos.dimensionsSeparated) pos.dimensionsSeparated = false;
        if (L.parent !== null) {
            L.parent = null;
            notes.push(L.name + ": unparented");
        }

        tr = L.property("ADBE Transform Group");
        pos = tr.property("ADBE Position");
        var anc = tr.property("ADBE Anchor Point");
        var scl = tr.property("ADBE Scale");
        var rot = tr.property("ADBE Rotate Z");
        var opa = tr.property("ADBE Opacity");

        var r = L.sourceRectAtTime(t0, false);
        var c = [r.left + r.width / 2, r.top + r.height / 2];

        // Center the anchor on the content so it spins around its middle.
        if (isFree(anc) && isFree(pos)) {
            var Ac = copyArr(anc.value);
            var Pc = copyArr(pos.value);
            var Sc = scl.valueAtTime(t0, false);
            var Rc = rot.valueAtTime(t0, false);
            var o = rotate2([(c[0] - Ac[0]) * Sc[0] / 100, (c[1] - Ac[1]) * Sc[1] / 100], Rc);
            Ac[0] = c[0]; Ac[1] = c[1];
            Pc[0] += o[0]; Pc[1] += o[1];
            anc.setValue(Ac);
            pos.setValue(Pc);
        }

        var A = anc.valueAtTime(t0, true);
        var P0 = copyArr(pos.valueAtTime(t0, true));
        var S0 = copyArr(scl.valueAtTime(t0, true));
        var R0 = rot.valueAtTime(t0, true);

        // End state
        var R1 = R0 + opts.spin;
        var S1 = copyArr(S0);
        if (opts.scaleToTarget && r.width > 0.01 && r.height > 0.01) {
            var f = Math.min(tBox.width / r.width, tBox.height / r.height); // keep proportions
            S1[0] = sgn(S0[0]) * 100 * f;
            S1[1] = sgn(S0[1]) * 100 * f;
        }
        var oe = rotate2([(c[0] - A[0]) * S1[0] / 100, (c[1] - A[1]) * S1[1] / 100], R1);
        var P1 = copyArr(P0);
        P1[0] = tBox.center[0] - oe[0];
        P1[1] = tBox.center[1] - oe[1];

        // Wind-up point: a step away from the target.
        var hasWind = tA > t0 + fd / 2;
        var PA = null;
        var D0 = [P1[0] - P0[0], P1[1] - P0[1]];
        var d0 = vlen(D0);
        if (hasWind) {
            PA = copyArr(P0);
            if (d0 > 1) {
                var back = clamp(d0 * opts.back / 100, 0, 250);
                PA[0] = P0[0] - D0[0] / d0 * back;
                PA[1] = P0[1] - D0[1] / d0 * back;
            }
        }

        // ---- Position
        pos.setValueAtTime(t0, P0);
        if (PA) pos.setValueAtTime(tA, PA);
        pos.setValueAtTime(t1, P1);
        var k0 = pos.nearestKeyIndex(t0);
        var kA = PA ? pos.nearestKeyIndex(tA) : -1;
        var k1 = pos.nearestKeyIndex(t1);

        var Ps = PA ? PA : P0;
        var kS = PA ? kA : k0;
        var D = [P1[0] - Ps[0], P1[1] - Ps[1]];
        var dist = vlen(D);
        var outT = [0, 0], inT = [0, 0];
        if (dist > 0.5 && opts.curve !== 0) {
            // Positive curve bends clockwise, same as positive spin.
            var nrm = [D[1] / dist, -D[0] / dist];
            var h = (opts.curve / 100) * dist / 0.75; // arc height = curve % of distance
            outT = [D[0] / 3 + nrm[0] * h, D[1] / 3 + nrm[1] * h];
            inT = [-D[0] / 3 + nrm[0] * h, -D[1] / 3 + nrm[1] * h];
        }
        if (PA) setSpatial(pos, k0, null, [0, 0]);
        setSpatial(pos, kS, PA ? [0, 0] : null, outT);
        setSpatial(pos, k1, inT, [0, 0]);
        applyMorphEases(pos, k0, kA, k1);

        // ---- Rotation: starts during the wind-up, finishes on the hit.
        if (Math.abs(opts.spin) > 0.01) {
            rot.setValueAtTime(t0, R0);
            if (PA) rot.setValueAtTime(tA, R0 + opts.spin * 0.4);
            rot.setValueAtTime(t1, R1);
            applyMorphEases(rot, rot.nearestKeyIndex(t0), PA ? rot.nearestKeyIndex(tA) : -1, rot.nearestKeyIndex(t1));
        }

        // ---- Scale (only if "Fit target" is on)
        if (Math.abs(S1[0] - S0[0]) > 0.01 || Math.abs(S1[1] - S0[1]) > 0.01) {
            scl.setValueAtTime(t0, S0);
            if (PA) scl.setValueAtTime(tA, S0);
            scl.setValueAtTime(t1, S1);
            applyMorphEases(scl, scl.nearestKeyIndex(t0), PA ? scl.nearestKeyIndex(tA) : -1, scl.nearestKeyIndex(t1));
        }

        // ---- Hard cut: gone on the frame the target appears.
        holdSwitch(opa, t1 - fd, opa.valueAtTime(t1 - fd, true), t1, 0);

        if (opts.motionBlur) L.motionBlur = true;
    }

    // Target: hidden until the hit, then pops in with the impact wobble.
    function setupTarget(comp, target, t1, opts, notes) {
        var fd = comp.frameDuration;
        var tr = target.property("ADBE Transform Group");
        var opa = tr.property("ADBE Opacity");

        var ot = opa.valueAtTime(t1, true);
        if (ot <= 0) ot = 100;
        holdSwitch(opa, t1 - fd, 0, t1, ot);

        target.property("ADBE Marker").setValueAtTime(t1, new MarkerValue(MARKER_TAG));

        var dir = sgn(opts.spin);
        ensureSlider(target, "Impact Rotation", opts.impRot * dir);
        ensureSlider(target, "Impact Scale", opts.impScale);
        ensureSlider(target, "Impact Frequency", opts.impFreq);
        ensureSlider(target, "Impact Decay", opts.impDecay);

        // Re-fetch: adding effects can invalidate older property references.
        tr = target.property("ADBE Transform Group");
        setExpr(tr.property("ADBE Rotate Z"), ROT_EXPR, target.name, notes);
        setExpr(tr.property("ADBE Scale"), SCALE_EXPR, target.name, notes);

        if (opts.motionBlur) target.motionBlur = true;
    }

    // Returns the number of morphed layers, or -1 if nothing ran.
    function runMorph(opts) {
        var comp = app.project.activeItem;
        if (!(comp && comp instanceof CompItem)) {
            alert("Open a composition first.", SCRIPT_NAME);
            return -1;
        }
        var sel = comp.selectedLayers;
        if (sel.length < 2) {
            alert("Select at least 2 layers.\nThe LAST layer you select is the target.", SCRIPT_NAME);
            return -1;
        }
        var target = sel[sel.length - 1];
        if (!isMorphable(target)) {
            alert("The target can't be a camera or a light.", SCRIPT_NAME);
            return -1;
        }
        if (target.locked) {
            alert("The target layer is locked. Unlock it and try again.", SCRIPT_NAME);
            return -1;
        }

        var sources = [], notes = [];
        for (var i = 0; i < sel.length - 1; i++) {
            if (!isMorphable(sel[i])) { notes.push(sel[i].name + ": skipped (camera/light)"); continue; }
            if (sel[i].locked) { notes.push(sel[i].name + ": skipped (locked)"); continue; }
            sources.push(sel[i]);
        }
        if (sources.length === 0) {
            alert("Nothing to morph.\n" + notes.join("\n"), SCRIPT_NAME);
            return -1;
        }

        var fd = comp.frameDuration;
        var t0 = comp.time;
        var tA = t0 + Math.max(0, Math.round(opts.windup)) * fd;
        var t1 = tA + Math.max(1, Math.round(opts.strike)) * fd;
        var done = 0;

        app.beginUndoGroup(SCRIPT_NAME);
        try {
            var tBox = getBox(comp, target, t1);

            for (var j = 0; j < sources.length; j++) {
                try {
                    morphLayer(comp, sources[j], tBox, t0, tA, t1, opts, notes);
                    done++;
                } catch (e1) {
                    notes.push(sources[j].name + ": ERROR " + e1.toString() + (e1.line ? " (line " + e1.line + ")" : ""));
                }
            }
            if (done > 0) {
                setupTarget(comp, target, t1, opts, notes);
                if (opts.motionBlur) comp.motionBlur = true;
            }
        } catch (e) {
            alert("Error: " + e.toString() + (e.line ? "\nLine: " + e.line : ""), SCRIPT_NAME);
        } finally {
            app.endUndoGroup();
        }

        if (notes.length) alert("Done, with notes:\n\n" + notes.join("\n"), SCRIPT_NAME);
        return done;
    }

    // ==================================================================
    // PANEL UI  (standard After Effects controls only)
    // ==================================================================

    var TIPS = {
        windup: "Frames the layers back away and start spinning before the hit. 0 = no wind-up.",
        strike: "Frames for the fast move into the target.",
        curve: "How much the path bends, as % of the distance. 0 = straight, negative = bends the other way.",
        spin: "Degrees each layer rotates on the way in. Negative = other direction.",
        back: "How far the layers back away during the wind-up, as % of the distance.",
        impRot: "Degrees the target tilts when it appears, then wobbles back.",
        impScale: "How much the target squashes and pops when it appears (%).",
        impFreq: "Wobbles per second.",
        impDecay: "How fast the wobble settles. Higher = settles faster.",
        scaleToTarget: "The layers grow or shrink to the target's size on the way in.",
        motionBlur: "Turns on motion blur for the layers and the comp.",
        morph: "Select the layers, select the TARGET last (Ctrl/Cmd-click), put the time indicator where the morph starts, then press Morph.",
        reset: "Put every value back to the default."
    };

    // Plain number for the text fields (no leading zero)
    function fieldText(key) {
        var v = S[key];
        return (Math.abs(v - Math.round(v)) < 1e-9) ? String(Math.round(v)) : v.toFixed(PARAMS[key].dec);
    }

    function buildUI(thisObj) {
        loadState();

        var win = (thisObj instanceof Panel) ? thisObj :
            new Window("palette", SCRIPT_NAME + " v" + VERSION, undefined, { resizeable: true });
        win.orientation = "column";
        win.alignChildren = ["fill", "top"];
        win.spacing = 8;
        win.margins = 10;

        var head = win.add("group");
        head.orientation = "row";
        head.alignChildren = ["left", "center"];
        head.add("statictext", undefined, SCRIPT_NAME + " v" + VERSION);
        var brand = head.add("statictext", undefined, "by omar.visualz");
        brand.alignment = ["right", "center"];

        var fields = {};

        function addPanel(title) {
            var p = win.add("panel", undefined, title);
            p.orientation = "column";
            p.alignChildren = ["left", "top"];
            p.margins = [10, 15, 10, 10];
            p.spacing = 6;
            return p;
        }

        function addRow(panel) {
            var g = panel.add("group");
            g.orientation = "row";
            g.alignChildren = ["left", "center"];
            return g;
        }

        function addField(row, label, key) {
            var st = row.add("statictext", undefined, label);
            var et = row.add("edittext", undefined, fieldText(key));
            et.characters = 4;
            st.helpTip = TIPS[key];
            et.helpTip = TIPS[key];
            // Clean up the value as soon as it's typed, and remember it.
            et.onChange = function () {
                var v = parseFloat(String(et.text).replace(",", "."));
                if (!isNaN(v)) S[key] = clampParam(key, v);
                et.text = fieldText(key);
                saveState();
            };
            fields[key] = et;
        }

        var pTime = addPanel("Timing (frames)");
        var r1 = addRow(pTime);
        addField(r1, "Wind-up:", "windup");
        addField(r1, "Strike:", "strike");

        var pMove = addPanel("Motion");
        var r2 = addRow(pMove);
        addField(r2, "Curve %:", "curve");
        addField(r2, "Spin deg:", "spin");
        var r3 = addRow(pMove);
        addField(r3, "Back %:", "back");

        var pImp = addPanel("Impact on target");
        var r4 = addRow(pImp);
        addField(r4, "Rotation:", "impRot");
        addField(r4, "Scale %:", "impScale");
        var r5 = addRow(pImp);
        addField(r5, "Frequency:", "impFreq");
        addField(r5, "Decay:", "impDecay");

        var pOpt = addPanel("Options");
        var cbScale = pOpt.add("checkbox", undefined, "Shrink/grow layers to target size");
        cbScale.value = S.scaleToTarget;
        cbScale.helpTip = TIPS.scaleToTarget;
        cbScale.onClick = function () { S.scaleToTarget = cbScale.value; saveState(); };
        var cbBlur = pOpt.add("checkbox", undefined, "Motion blur");
        cbBlur.value = S.motionBlur;
        cbBlur.helpTip = TIPS.motionBlur;
        cbBlur.onClick = function () { S.motionBlur = cbBlur.value; saveState(); };

        var gBtns = win.add("group");
        gBtns.orientation = "row";
        gBtns.alignChildren = ["fill", "center"];
        var btnMorph = gBtns.add("button", undefined, "Morph");
        btnMorph.alignment = ["fill", "center"];
        btnMorph.preferredSize.height = 32;
        btnMorph.helpTip = TIPS.morph;
        var btnReset = gBtns.add("button", undefined, "Reset");
        btnReset.preferredSize.width = 60;
        btnReset.helpTip = TIPS.reset;

        var stStatus = win.add("statictext", undefined, "Select layers, target LAST, then Morph.");
        stStatus.alignment = ["fill", "top"];

        function refreshFields() {
            for (var k in fields) {
                if (fields.hasOwnProperty(k)) fields[k].text = fieldText(k);
            }
            cbScale.value = S.scaleToTarget;
            cbBlur.value = S.motionBlur;
        }

        btnMorph.onClick = function () {
            // Read every field (in case one wasn't confirmed with Enter/Tab yet).
            for (var k in fields) {
                if (!fields.hasOwnProperty(k)) continue;
                var v = parseFloat(String(fields[k].text).replace(",", "."));
                if (!isNaN(v)) S[k] = clampParam(k, v);
            }
            S.scaleToTarget = cbScale.value;
            S.motionBlur = cbBlur.value;
            refreshFields();
            saveState();

            var comp = app.project.activeItem;
            var n = runMorph(currentOpts());
            if (n > 0) {
                var sel = comp.selectedLayers;
                var tName = sel.length ? sel[sel.length - 1].name : "target";
                stStatus.text = "Done: " + n + (n === 1 ? " layer" : " layers") + " into \"" + tName + "\". Ctrl+Z to undo.";
            } else if (n === 0) {
                stStatus.text = "Nothing was morphed. Check the notes.";
            }
        };

        btnReset.onClick = function () {
            for (var k in PARAMS) {
                if (PARAMS.hasOwnProperty(k)) S[k] = PARAMS[k].def;
            }
            for (var t in TOGGLE_DEFS) {
                if (TOGGLE_DEFS.hasOwnProperty(t)) S[t] = TOGGLE_DEFS[t];
            }
            refreshFields();
            saveState();
            stStatus.text = "Values reset to default.";
        };

        win.onResizing = win.onResize = function () { this.layout.resize(); };

        if (win instanceof Window) {
            win.center();
            win.show();
        } else {
            win.layout.layout(true);
        }
        return win;
    }

    function currentOpts() {
        return {
            windup: S.windup, strike: S.strike, curve: S.curve, spin: S.spin, back: S.back,
            impRot: S.impRot, impScale: S.impScale, impFreq: S.impFreq, impDecay: S.impDecay,
            scaleToTarget: S.scaleToTarget, motionBlur: S.motionBlur
        };
    }

    buildUI(thisObj);

})(this);
