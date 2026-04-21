import { useMemo, useState } from "react";
const SHEETS_URL = "https://script.google.com/macros/s/AKfycby0dbq9PDsbXN9z_Psv9yjCLGb14YYqGMO4kNVDtgLNJWY0o0sK_X5OUECbEzg-gdBO/exec";

async function sendToSheets(data) {
  try {
    const res = await fetch(SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Sheets response:", result);

    if (result.success) {
      alert("Saved successfully");
    } else {
      alert("Save failed");
      console.error(result);
    }
  } catch (err) {
    console.error("Error sending to Sheets:", err);
    alert("Error sending data");
  }
}
// ─── Brand colours from Te Whare Ruruhau o Meri Trust guidelines ─────────────
// Primary:  #95C43F (green), #0DACBA (teal)
// Support:  #F37128 (orange), #456779 (steel blue), #F2F2EA (off-white), #D4CAAE (sand)
// Typography: Museo / Helvetica → closest web-safe fallback: Georgia (headings), system-ui (body)

const LOGO_B64 = "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";

// ─── Data ────────────────────────────────────────────────────────────────────
const emojiScale = [
  { value: 1, emoji: "😟", label: "Struggling" },
  { value: 2, emoji: "🙁", label: "Not great" },
  { value: 3, emoji: "😐", label: "Okay" },
  { value: 4, emoji: "🙂", label: "Good" },
  { value: 5, emoji: "😄", label: "Strong" },
];

const orgOptions = ["Health", "Education", "Social services", "Justice", "Community organisation", "Other"];
const STEPS_PUBLIC = ["who", "hauora", "steps", "safety", "prize"];
const STEPS_ORG = ["who", "organisation", "prize"];

// ─── Primitive components ─────────────────────────────────────────────────────
function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white shadow-sm ring-1 ring-[#D4CAAE]/40 ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: "#95C43F" }}>{eyebrow}</p>
      )}
      <h2 className="font-serif text-2xl font-bold leading-snug" style={{ color: "#456779" }}>{title}</h2>
      {subtitle && <p className="mt-2 text-sm leading-relaxed text-stone-500">{subtitle}</p>}
    </div>
  );
}

function FieldLabel({ children, helper }) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-semibold" style={{ color: "#456779" }}>{children}</label>
      {helper && <p className="mt-0.5 text-xs text-stone-400">{helper}</p>}
    </div>
  );
}

function Select({ value, onChange, options, placeholder = "Select one" }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none rounded-xl border bg-[#F2F2EA] px-4 py-3 text-sm outline-none transition focus:bg-white focus:ring-2"
      style={{ borderColor: "#D4CAAE", color: "#456779" }}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

function Textarea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full resize-none rounded-xl border bg-[#F2F2EA] px-4 py-3 text-sm outline-none transition placeholder:text-stone-300 focus:bg-white focus:ring-2"
      style={{ borderColor: "#D4CAAE", color: "#456779" }}
    />
  );
}

function TextInput({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border bg-[#F2F2EA] px-4 py-3 text-sm outline-none transition placeholder:text-stone-300 focus:bg-white focus:ring-2"
      style={{ borderColor: "#D4CAAE", color: "#456779" }}
    />
  );
}

// ─── Progress bar ────────────────────────────────────────────────────────────
function ProgressBar({ current, total, label }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-1.5 flex items-center justify-between text-xs" style={{ color: "#456779" }}>
        <span className="font-semibold">{label}</span>
        <span className="opacity-60">{current} of {total}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "#D4CAAE" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: "#95C43F" }}
        />
      </div>
    </div>
  );
}

// ─── Audience selection cards ─────────────────────────────────────────────────
function AudienceCard({ value, selected, onClick, icon, title, description }) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className="group relative flex w-full flex-col items-start gap-3 rounded-2xl border-2 p-5 text-left transition-all duration-200"
      style={{
        borderColor: selected ? "#95C43F" : "#D4CAAE",
        background: selected ? "#F2F2EA" : "white",
        boxShadow: selected ? "0 4px 12px rgba(149,196,63,0.15)" : undefined,
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl transition"
        style={{ background: selected ? "rgba(149,196,63,0.15)" : "#F2F2EA" }}
      >
        {icon}
      </div>
      <div>
        <p className="font-bold" style={{ color: selected ? "#95C43F" : "#456779" }}>{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-stone-500">{description}</p>
      </div>
      {selected && (
        <span
          className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
          style={{ background: "#95C43F" }}
        >✓</span>
      )}
    </button>
  );
}

// ─── Emoji question ───────────────────────────────────────────────────────────
function EmojiQuestion({ icon, title, description, value, onChange }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-2xl">{icon}</span>
        <div>
          <p className="font-bold" style={{ color: "#456779" }}>{title}</p>
          <p className="text-xs leading-relaxed text-stone-400">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {emojiScale.map((item) => {
          const active = value === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className="flex flex-col items-center gap-1.5 rounded-xl border py-3 text-center transition-all duration-150"
              style={{
                borderColor: active ? "#95C43F" : "#D4CAAE",
                background: active ? "rgba(149,196,63,0.08)" : "white",
                boxShadow: active ? "0 2px 8px rgba(149,196,63,0.2)" : undefined,
              }}
            >
              <span className="text-2xl leading-none">{item.emoji}</span>
              <span className="text-[10px] font-semibold leading-tight" style={{ color: active ? "#95C43F" : "#456779", opacity: active ? 1 : 0.5 }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Safety help checkboxes ───────────────────────────────────────────────────
const safetyOptions = ["People", "Clear boundaries", "Support services", "Culture and connection", "Environment", "Other"];

function SafetyCheckboxes({ selected = [], onToggle }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {safetyOptions.map((item) => {
        const checked = (selected || []).includes(item);

        return (
          <label
            key={item}
            className="flex items-center gap-3 rounded-xl border px-4 py-4 text-sm"
            style={{
              borderColor: checked ? "#0DACBA" : "#D4CAAE",
              background: checked ? "rgba(13,172,186,0.07)" : "white",
              color: "#456779",
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(item)}
              className="h-5 w-5"
            />
            <span>{item}</span>
          </label>
        );
      })}
    </div>
  );
}

// ─── Nav buttons ──────────────────────────────────────────────────────────────
function NavButtons({ onNext, onBack, canNext, showBack = true, nextLabel = "Continue →" }) {
  return (
    <div className="flex gap-3 pt-2">
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border px-5 py-3 text-sm font-bold transition hover:bg-[#F2F2EA]"
          style={{ borderColor: "#D4CAAE", color: "#456779" }}
        >
          ← Back
        </button>
      )}
      <button
        type="button"
        onClick={canNext ? onNext : undefined}
        disabled={!canNext}
        className="flex-1 rounded-xl px-5 py-3.5 text-sm font-bold text-white transition"
        style={{
          background: canNext ? "#95C43F" : "#D4CAAE",
          cursor: canNext ? "pointer" : "not-allowed",
          boxShadow: canNext ? "0 4px 14px rgba(149,196,63,0.3)" : undefined,
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

// ─── Steps ───────────────────────────────────────────────────────────────────
function StepWho({ form, setField, onNext }) {
  const canProceed = form.audience !== "" && (form.audience === "public" || form.organisationType !== "");
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Step 1"
        title="Nō hea koe? — Who are you?"
        subtitle="Pick the option that best matches you. You'll see different questions depending on your path."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <AudienceCard value="public" selected={form.audience === "public"} onClick={(v) => setField("audience", v)}
          icon="🏡" title="Community member" description="I'm sharing my personal hauora and wellbeing experience." />
        <AudienceCard value="organisation" selected={form.audience === "organisation"} onClick={(v) => setField("audience", v)}
          icon="🏢" title="Organisation / agency" description="I work in a service, organisation, or sector role." />
      </div>
      {form.audience === "organisation" && (
        <div className="mt-2">
          <FieldLabel>What type of organisation are you from?</FieldLabel>
          <Select value={form.organisationType} onChange={(v) => setField("organisationType", v)} options={orgOptions} />
        </div>
      )}
      <NavButtons onNext={onNext} canNext={canProceed} showBack={false} />
    </div>
  );
}

// ─── Shared helpers ──────────────────────────────────────────────────────────
function scoreColor(s) {
  if (!s || s <= 2) return "#F37128";
  if (s === 3) return "#0DACBA";
  return "#95C43F";
}
function scoreLabel(s) {
  if (!s || s < 1) return "Struggling";
  return ["","Struggling","Not great","Okay","Good","Strong"][s] || "";
}

// ─── Radar Chart ─────────────────────────────────────────────────────────────
// Mobile-first: generous padding so labels never clip on narrow screens.
// Canvas 360×360. Chart zone maxR=88. Label zone 30px beyond that on all sides.
// Axes: Wairua=top, Hinengaro=right, Whānau=bottom, Tinana=left (cardinal diamond).
function RadarChart({ tinana, hinengaro, wairua, whanau }) {
  const VW = 360, VH = 360;
  const cx = VW / 2, cy = VH / 2;
  const maxR = 88; // chart radius — labels live outside this

  const axes = [
    { key: "wairua",    label: "Taha Wairua",    sub: "Spiritual",       icon: "✨", angle: -90 },
    { key: "hinengaro", label: "Taha Hinengaro",  sub: "Mental",          icon: "🧠", angle:   0 },
    { key: "whanau",    label: "Taha Whānau",     sub: "Family & social", icon: "🤝", angle:  90 },
    { key: "tinana",    label: "Taha Tinana",      sub: "Physical",        icon: "💪", angle: 180 },
  ];
  const scoreMap = { wairua, hinengaro, whanau, tinana };

  function polar(angleDeg, r) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function polyPoints(map) {
    return axes.map(a => {
      const v = map[a.key] || 0;
      const pt = polar(a.angle, (v / 5) * maxR);
      return `${pt.x},${pt.y}`;
    }).join(" ");
  }

  function ringPoints(level) {
    return axes.map(a => {
      const pt = polar(a.angle, (level / 5) * maxR);
      return `${pt.x},${pt.y}`;
    }).join(" ");
  }

  const hasAny = tinana || hinengaro || wairua || whanau;
  const userPoly  = hasAny ? polyPoints(scoreMap) : null;
  const maxPoly   = polyPoints({ wairua:5, hinengaro:5, whanau:5, tinana:5 });

  const lowestKey = hasAny
    ? axes.reduce((b, a) => (!b || (scoreMap[a.key]||0) < (scoreMap[b]||0)) ? a.key : b, null)
    : null;

  const allVals = [tinana, hinengaro, wairua, whanau].filter(Boolean);
  const avg = allVals.length ? (allVals.reduce((a,b)=>a+b,0)/allVals.length) : 0;
  const avgStr = avg ? avg.toFixed(1) : null;
  const avgColor = avg >= 4 ? "#95C43F" : avg >= 3 ? "#0DACBA" : "#F37128";

  // Label placement: each axis has a fixed anchor zone well outside the chart
  // Top/bottom: centred. Left/right: flush to edge with enough x padding.
  function labelAnchor(angle) {
    if (angle === 0)   return "start";
    if (angle === 180) return "end";
    return "middle";
  }
  // Extra Y shift so top label clears the icon, bottom label has room below
  function labelDY(angle) {
    if (angle === -90) return -14;
    if (angle ===  90) return  18;
    return 0;
  }

  return (
    <div className="w-full select-none" style={{ touchAction: "manipulation" }}>
      <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full" style={{ display: "block" }}>
        <defs>
          <radialGradient id="rg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#243b4a" />
            <stop offset="100%" stopColor="#152430" />
          </radialGradient>
          <filter id="glw" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Clip to keep everything tidy */}
          <clipPath id="chartClip">
            <rect x="0" y="0" width={VW} height={VH} rx="16" />
          </clipPath>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width={VW} height={VH} fill="url(#rg)" rx="16" />

        {/* Grid rings — alternating fills for easy reading */}
        {[1,2,3,4,5].map(lv => (
          <polygon key={lv} points={ringPoints(lv)}
            fill={lv % 2 === 0 ? "rgba(255,255,255,0.03)" : "none"}
            stroke={lv === 5 ? "rgba(149,196,63,0.22)" : "rgba(255,255,255,0.07)"}
            strokeWidth={lv === 5 ? 1.5 : 1}
          />
        ))}

        {/* Axis spokes */}
        {axes.map(a => {
          const end = polar(a.angle, maxR);
          return (
            <line key={a.key} x1={cx} y1={cy} x2={end.x} y2={end.y}
              stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          );
        })}

        {/* Spoke tick marks at each ring */}
        {axes.map(a =>
          [1,2,3,4,5].map(lv => {
            const tp  = polar(a.angle, (lv/5)*maxR);
            const p1  = polar(a.angle + 90, 3.5);
            const p2  = polar(a.angle - 90, 3.5);
            return (
              <line key={`${a.key}-${lv}`}
                x1={tp.x + p1.x - cx} y1={tp.y + p1.y - cy}
                x2={tp.x + p2.x - cx} y2={tp.y + p2.y - cy}
                stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
            );
          })
        )}

        {/* Ring level numbers along top (Wairua) axis — sit just right of spoke */}
        {[1,2,3,4].map(lv => {
          const pt = polar(-90, (lv/5)*maxR);
          return (
            <text key={lv} x={pt.x + 7} y={pt.y + 4}
              fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="system-ui" fontWeight="600">
              {lv}
            </text>
          );
        })}

        {/* Max ring "5" label */}
        {(() => { const pt = polar(-90, maxR); return (
          <text x={pt.x + 7} y={pt.y + 4}
            fill="rgba(149,196,63,0.6)" fontSize="9" fontFamily="system-ui" fontWeight="700">5</text>
        ); })()}

        {/* Perfect-5 dashed outline */}
        <polygon points={maxPoly}
          fill="rgba(149,196,63,0.04)"
          stroke="rgba(149,196,63,0.3)"
          strokeWidth="1.5" strokeDasharray="6 4" strokeLinejoin="round"
        />

        {/* User score polygon */}
        {userPoly && (
          <>
            <polygon points={userPoly} fill="rgba(13,172,186,0.18)" stroke="none" />
            <polygon points={userPoly}
              fill="rgba(13,172,186,0.06)"
              stroke="#0DACBA" strokeWidth="2.5" strokeLinejoin="round"
              filter="url(#glw)"
            />
          </>
        )}

        {/* Per-axis: score dot + label block */}
        {axes.map(a => {
          const val    = scoreMap[a.key];
          const color  = scoreColor(val);
          const isLow  = a.key === lowestKey && val > 0 && val <= 2;
          const dotPt  = polar(a.angle, val ? (val/5)*maxR : 0);
          // Icon sits at maxR + 16, label block starts at maxR + 30
          const iconPt  = polar(a.angle, maxR + 16);
          const lbPt    = polar(a.angle, maxR + 34);
          const anchor  = labelAnchor(a.angle);
          const dy      = labelDY(a.angle);

          return (
            <g key={a.key}>
              {/* Warning ring on lowest score */}
              {isLow && (
                <circle cx={dotPt.x} cy={dotPt.y} r="13"
                  fill="none" stroke="#F37128" strokeWidth="1.5"
                  strokeDasharray="4 2" opacity="0.5" />
              )}

              {/* Score dot */}
              {val > 0 && (
                <circle cx={dotPt.x} cy={dotPt.y} r="7"
                  fill={color} stroke="#152430" strokeWidth="2.5" />
              )}

              {/* Large tap-friendly icon */}
              <text x={iconPt.x} y={iconPt.y + 6}
                textAnchor="middle" fontSize="18" dominantBaseline="auto">
                {a.icon}
              </text>

              {/* Score pill — floated to whichever side has space */}
              {val > 0 && (() => {
                // Pill sits beside icon: right for right-axis, left for left-axis, above/below for top/bottom
                const offX = a.angle === 0 ? 20 : a.angle === 180 ? -20 : 0;
                const offY = a.angle === -90 ? -16 : a.angle === 90 ? 18 : 1;
                const px = iconPt.x + offX, py = iconPt.y + offY;
                return (
                  <g>
                    <rect x={px-13} y={py-9} width="26" height="16" rx="8"
                      fill={color} />
                    <text x={px} y={py+4} textAnchor="middle"
                      fill="white" fontSize="9" fontWeight="800" fontFamily="system-ui">
                      {val}/5
                    </text>
                  </g>
                );
              })()}

              {/* Dimension name + sub-label */}
              <text x={lbPt.x} y={lbPt.y + dy}
                textAnchor={anchor}
                fill={val ? color : "rgba(255,255,255,0.35)"}
                fontSize="9.5" fontWeight="700" fontFamily="system-ui">
                {a.label}
              </text>
              <text x={lbPt.x} y={lbPt.y + dy + 12}
                textAnchor={anchor}
                fill="rgba(255,255,255,0.38)"
                fontSize="8" fontFamily="system-ui">
                {a.sub}
              </text>
            </g>
          );
        })}

        {/* Centre average circle */}
        {avgStr && (
          <g>
            <circle cx={cx} cy={cy} r="24" fill="rgba(0,0,0,0.55)" />
            <circle cx={cx} cy={cy} r="24" fill="none" stroke={avgColor} strokeWidth="2" />
            <text x={cx} y={cy - 4} textAnchor="middle"
              fill={avgColor} fontSize="13" fontWeight="800" fontFamily="system-ui">{avgStr}</text>
            <text x={cx} y={cy + 10} textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize="7.5" fontFamily="system-ui">avg</text>
          </g>
        )}
      </svg>
    </div>
  );
}

// ─── Whare silhouette ─────────────────────────────────────────────────────────
function WhareSilhouette({ tinana, hinengaro, wairua, whanau }) {
  const lc = scoreColor(tinana), rc = scoreColor(hinengaro);
  const avg = ((tinana||0)+(hinengaro||0)+(wairua||0)+(whanau||0))/4;
  const roofColor = avg >= 3.5 ? "#95C43F" : avg >= 2.5 ? "#0DACBA" : "#F37128";
  return (
    <svg viewBox="0 0 80 60" width="72" height="54">
      <rect x="8"  y="28" width="8" height="24" fill={lc} rx="1.5" />
      <rect x="64" y="28" width="8" height="24" fill={rc} rx="1.5" />
      <rect x="16" y="32" width="48" height="20" fill="white" fillOpacity="0.88" />
      <rect x="34" y="42" width="12" height="10" rx="1" fill="#D4CAAE" />
      <polygon points="40,4 74,32 6,32" fill={roofColor} />
      <polygon points="40,4 74,32 6,32" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      <circle cx="40" cy="4" r="3" fill={roofColor} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    </svg>
  );
}

// ─── Hauora: one-at-a-time sub-steps ────────────────────────────────────────
const hauoraQuestions = [
  { key: "tinana",    icon: "💪", title: "Taha Tinana",    subtitle: "Physical wellbeing", description: "Think about your sleep, energy levels, movement, and overall health. How is your body feeling right now?" },
  { key: "hinengaro", icon: "🧠", title: "Taha Hinengaro", subtitle: "Mental & emotional", description: "Think about your stress levels, your thoughts, and how you're coping day to day. How is your mind feeling?" },
  { key: "wairua",    icon: "✨", title: "Taha Wairua",    subtitle: "Spiritual wellbeing", description: "Think about your sense of purpose, identity, and what grounds you. How connected do you feel to yourself and what matters?" },
  { key: "whanau",    icon: "🤝", title: "Taha Whānau",   subtitle: "Family & social",    description: "Think about your relationships — whānau, friends, community. How supported and connected do you feel?" },
];

function StepHauora({ form, setField, onNext, onBack }) {
  const [subStep, setSubStep] = useState(0); // 0-3 = questions, 4 = result
  const q = hauoraQuestions[subStep];
  const currentVal = subStep < 4 ? form[q?.key] : null;
  const allAnswered = hauoraQuestions.every(({ key }) => form[key] > 0);

  // Move to next sub-step automatically when answer chosen (with short delay)
  function handleSelect(val) {
    setField(q.key, val);
    setTimeout(() => setSubStep(s => s + 1), 380);
  }

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow={subStep < 4 ? `Question ${subStep + 1} of 4` : "Your whare"}
        title="Te Whare Tapa Whā"
        subtitle={subStep < 4 ? "One question at a time. Be honest — there are no wrong answers." : "This is what your whare looks like today."}
      />

      {/* Progress tabs — mobile: icon + tick only; sm+: show label text */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: "touch" }}>
        {hauoraQuestions.map((hq, i) => {
          const done = form[hq.key] > 0;
          const active = i === subStep;
          return (
            <button
              key={hq.key}
              type="button"
              onClick={() => setSubStep(i)}
              className="flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition-all"
              style={{
                background: active ? "#95C43F" : done ? "rgba(149,196,63,0.12)" : "#F2F2EA",
                color: active ? "white" : done ? "#95C43F" : "#D4CAAE",
                border: active ? "2px solid #95C43F" : "2px solid transparent",
                minHeight: "36px",
              }}
            >
              <span className="text-base leading-none">{done && !active ? "✓" : hq.icon}</span>
              <span className="hidden sm:inline leading-tight">{hq.title.split(" ").slice(1).join(" ")}</span>
            </button>
          );
        })}
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => setSubStep(4)}
          className="flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition-all"
          style={{
            background: subStep === 4 ? "#0DACBA" : allAnswered ? "rgba(13,172,186,0.12)" : "#F2F2EA",
            color: subStep === 4 ? "white" : allAnswered ? "#0DACBA" : "#D4CAAE",
            border: subStep === 4 ? "2px solid #0DACBA" : "2px solid transparent",
            minHeight: "36px",
          }}
        >
          🏠<span className="hidden sm:inline ml-1">Result</span>
        </button>
      </div>

      {/* Question card */}
      {subStep < 4 && (
        <Card className="overflow-hidden">
          {/* Coloured top band */}
          <div className="px-4 py-5 sm:px-6" style={{ background: "linear-gradient(135deg, #1a2f3a, #456779)" }}>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{q.icon}</span>
              <div>
                <p className="font-serif text-xl font-bold text-white">{q.title}</p>
                <p className="text-sm" style={{ color: "#95C43F" }}>{q.subtitle}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{q.description}</p>
          </div>

          {/* Emoji selector */}
          <div className="p-5">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "#456779" }}>
              How does this feel right now?
            </p>
            <div className="grid grid-cols-5 gap-1.5">
              {emojiScale.map((item) => {
                const active = currentVal === item.value;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleSelect(item.value)}
                    className="flex flex-col items-center justify-center gap-1 rounded-2xl border-2 text-center transition-all duration-150 active:scale-95"
                    style={{
                      borderColor: active ? "#95C43F" : "#D4CAAE",
                      background: active ? "rgba(149,196,63,0.1)" : "white",
                      transform: active ? "scale(1.05)" : "scale(1)",
                      boxShadow: active ? "0 4px 16px rgba(149,196,63,0.25)" : undefined,
                      minHeight: "72px",
                      padding: "10px 4px",
                    }}
                  >
                    <span className="text-2xl leading-none">{item.emoji}</span>
                    <span className="text-[11px] font-bold leading-tight" style={{ color: active ? "#95C43F" : "#456779" }}>
                      {item.value}
                    </span>
                    <span className="text-[9px] leading-tight text-stone-400 text-center px-0.5">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Auto-advance hint */}
            <p className="mt-4 text-center text-xs text-stone-400">
              {currentVal ? `You selected ${emojiScale.find(e=>e.value===currentVal)?.label} — tap next or choose again` : "Tap to select"}
            </p>

            {/* Manual next */}
            {currentVal > 0 && (
              <button
                type="button"
                onClick={() => setSubStep(s => Math.min(s + 1, 4))}
                className="mt-3 w-full rounded-xl py-3 text-sm font-bold text-white transition"
                style={{ background: "#95C43F" }}
              >
                {subStep < 3 ? `Next — ${hauoraQuestions[subStep + 1].title} →` : "See your whare →"}
              </button>
            )}
          </div>
        </Card>
      )}

      {/* Result: radar + follow-up question */}
      {subStep === 4 && (() => {
        const vals = { tinana: form.tinana, hinengaro: form.hinengaro, wairua: form.wairua, whanau: form.whanau };
        const allSet = Object.values(vals).every(v => v > 0);
        const avg = allSet ? Object.values(vals).reduce((a,b)=>a+b,0) / 4 : 0;
        const isBalanced = allSet && avg >= 4;

        // Find lowest scoring dimension
        const lowestEntry = allSet
          ? Object.entries(vals).reduce((best,[k,v]) => (!best || v < best[1]) ? [k,v] : best, null)
          : null;
        const lowestKey = lowestEntry?.[0];

        const dimMeta = {
          tinana:    { icon: "💪", label: "Taha Tinana",    sub: "Physical",   question: "What is one thing you could do today for your physical wellbeing?", placeholder: "e.g. go for a walk, drink more water, rest properly…" },
          hinengaro: { icon: "🧠", label: "Taha Hinengaro", sub: "Mental",     question: "What is one thing you could do today for your mental wellbeing?",   placeholder: "e.g. take a break, talk to someone, journal your thoughts…" },
          wairua:    { icon: "✨", label: "Taha Wairua",    sub: "Spiritual",  question: "What is one thing you could do today to feel more grounded?",       placeholder: "e.g. spend time in nature, pray, do something meaningful…" },
          whanau:    { icon: "🤝", label: "Taha Whānau",    sub: "Social",     question: "What is one thing you could do today to feel more connected?",      placeholder: "e.g. call someone you love, check in with whānau, reach out…" },
        };

        const focusMeta = lowestKey ? dimMeta[lowestKey] : null;
        const followUpKey = isBalanced ? "balanceSecret" : "focusAction";

        return (
          <Card className="overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#95C43F" }}>Your result</p>
                <p className="font-serif text-xl font-bold" style={{ color: "#456779" }}>Te Whare Tapa Whā</p>
              </div>
              <WhareSilhouette tinana={form.tinana} hinengaro={form.hinengaro} wairua={form.wairua} whanau={form.whanau} />
            </div>

            {/* Radar chart */}
            <div className="px-3 pb-1">
              <RadarChart tinana={form.tinana} hinengaro={form.hinengaro} wairua={form.wairua} whanau={form.whanau} />
            </div>

            {/* Legend */}
            <div className="mx-4 mb-3 flex items-center gap-5 rounded-xl px-4 py-2" style={{ background: "#F2F2EA" }}>
              <span className="flex items-center gap-2 text-xs" style={{ color: "#456779" }}>
                <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "#0DACBA" }} />
                Your hauora
              </span>
              <span className="flex items-center gap-2 text-xs" style={{ color: "#456779" }}>
                <span className="inline-block h-px w-5" style={{ borderTop: "2px dashed rgba(149,196,63,0.7)" }} />
                Balanced (5/5)
              </span>
              <span className="ml-auto text-xs font-bold" style={{ color: "#456779" }}>
                Tap a card to edit ↓
              </span>
            </div>

            {/* Score chips — large tap targets for mobile */}
            <div className="grid grid-cols-2 gap-2 px-4 pb-4">
              {hauoraQuestions.map(({ key, icon, title, subtitle }) => {
                const val = form[key];
                const color = scoreColor(val);
                const isLowest = key === lowestKey && !isBalanced;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSubStep(hauoraQuestions.findIndex(q => q.key === key))}
                    className="flex flex-col rounded-xl border-2 text-left transition-all active:scale-[0.97]"
                    style={{
                      padding: "12px",
                      minHeight: "90px",
                      borderColor: isLowest ? "#F37128" : (val ? color : "#D4CAAE"),
                      background: isLowest ? "rgba(243,113,40,0.05)" : (val ? "white" : "#F2F2EA"),
                      boxShadow: isLowest ? "0 0 0 3px rgba(243,113,40,0.12)" : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl leading-none">{icon}</span>
                      <div className="flex items-center gap-1.5">
                        {isLowest && (
                          <span className="rounded-full px-2 py-0.5 text-[9px] font-bold text-white" style={{ background: "#F37128" }}>
                            focus
                          </span>
                        )}
                        <span className="text-lg font-bold leading-none" style={{ color }}>{val ? `${val}/5` : "—"}</span>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold leading-tight" style={{ color: "#456779" }}>{title}</p>
                    <p className="text-[9px] text-stone-400 mb-2.5 leading-tight">{subtitle}</p>
                    <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: "#F2F2EA" }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: val ? `${(val/5)*100}%` : "0%", background: color }} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── Divider + follow-up question ── */}
            {allSet && (
              <div className="mx-4 mb-5">
                <div className="border-t pt-4" style={{ borderColor: "#D4CAAE" }}>

                  {isBalanced ? (
                    // ── WELL BALANCED: celebrate + ask their secret ──
                    <div className="space-y-3">
                      <div className="flex gap-3 rounded-xl px-4 py-3 ring-1"
                        style={{ background: "rgba(149,196,63,0.07)", borderColor: "#95C43F" }}>
                        <span className="text-2xl mt-0.5">🌟</span>
                        <div>
                          <p className="font-bold text-sm" style={{ color: "#95C43F" }}>Ka rawe! Tino pai rawa atu!</p>
                          <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#456779" }}>
                            Your whare is standing strong. You're well-balanced across all four dimensions — that's something to be proud of.
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-1.5" style={{ color: "#456779" }}>
                          🤔 What is one thing you do that helps keep you balanced?
                        </label>
                        <p className="text-xs text-stone-400 mb-2">Share your wisdom — this could help others in our community.</p>
                        <textarea
                          rows={3}
                          value={form.balanceSecret || ""}
                          onChange={e => setField("balanceSecret", e.target.value)}
                          placeholder="e.g. I make sure I get outside every day, stay connected to my whānau, keep a routine…"
                          className="w-full resize-none rounded-xl border bg-[#F2F2EA] px-4 py-3 text-sm outline-none transition placeholder:text-stone-300 focus:bg-white focus:ring-2"
                          style={{ borderColor: "#D4CAAE", color: "#456779" }}
                        />
                      </div>
                    </div>
                  ) : (
                    // ── NEEDS WORK: focus on lowest, ask one action ──
                    focusMeta && (
                      <div className="space-y-3">
                        <div className="flex gap-3 rounded-xl px-4 py-3 ring-1"
                          style={{ background: "rgba(243,113,40,0.06)", borderColor: "#F37128" }}>
                          <span className="text-2xl mt-0.5">{focusMeta.icon}</span>
                          <div>
                            <p className="font-bold text-sm" style={{ color: "#F37128" }}>
                              Let's focus on {focusMeta.label}
                            </p>
                            <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#456779" }}>
                              This looks like the area that needs some aroha right now. Small steps count.
                            </p>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: "#456779" }}>
                            💡 {focusMeta.question}
                          </label>
                          <p className="text-xs text-stone-400 mb-2">Just one small thing. It doesn't have to be big.</p>
                          <textarea
                            rows={3}
                            value={form.focusAction || ""}
                            onChange={e => setField("focusAction", e.target.value)}
                            placeholder={focusMeta.placeholder}
                            className="w-full resize-none rounded-xl border bg-[#F2F2EA] px-4 py-3 text-sm outline-none transition placeholder:text-stone-300 focus:bg-white focus:ring-2"
                            style={{ borderColor: "#D4CAAE", color: "#456779" }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </Card>
        );
      })()}

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={subStep === 0 ? onBack : () => setSubStep(s => s - 1)}
          className="rounded-xl border px-5 py-3 text-sm font-bold transition hover:bg-[#F2F2EA]"
          style={{ borderColor: "#D4CAAE", color: "#456779" }}>
          ← Back
        </button>
        {subStep === 4 && (
          <button type="button" onClick={onNext} disabled={!allAnswered}
            className="flex-1 rounded-xl px-5 py-3.5 text-sm font-bold text-white transition"
            style={{ background: allAnswered ? "#95C43F" : "#D4CAAE", cursor: allAnswered ? "pointer" : "not-allowed",
              boxShadow: allAnswered ? "0 4px 14px rgba(149,196,63,0.3)" : undefined }}>
            Next — One small step →
          </button>
        )}
        {subStep < 4 && (
          <button type="button" onClick={() => setSubStep(4)}
            className="flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition"
            style={{ background: "#F2F2EA", color: "#456779", border: "1px solid #D4CAAE" }}>
            Skip to result →
          </button>
        )}
      </div>
    </div>
  );
}

function StepSteps({ form, setField, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="Step 3" title="One small step" subtitle="You don't have to have it all figured out. Just one thing." />
      <Card className="divide-y" style={{ borderColor: "#D4CAAE" }}>
        <div className="p-5 space-y-1.5">
          <FieldLabel helper="e.g. go for a walk, call someone, rest properly, eat well">What is one thing you could do today to improve your hauora?</FieldLabel>
          <Textarea value={form.improveHauora} onChange={(v) => setField("improveHauora", v)} placeholder="Your whakaaro here…" />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel>Which area does this support most?</FieldLabel>
          <Select value={form.supportArea} onChange={(v) => setField("supportArea", v)} options={["Taha tinana", "Taha hinengaro", "Taha wairua", "Taha whānau"]} />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel helper="Small beats perfect.">What is one small step you will take today?</FieldLabel>
          <TextInput value={form.nextStep} onChange={(v) => setField("nextStep", v)} placeholder="My step today…" />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel>What might get in the way?</FieldLabel>
          <Select value={form.barrier} onChange={(v) => setField("barrier", v)} options={["Time", "Stress", "Money", "Support", "Motivation", "Not sure", "Other"]} />
        </div>
      </Card>
      <NavButtons onNext={onNext} onBack={onBack} canNext={true} nextLabel="Next — Safety check-in" />
    </div>
  );
}

function StepSafety({ form, setField, onNext, onBack }) {
const toggleSafetyHelp = (item) => {
  const current = form.safetyHelp || [];

  setField(
    "safetyHelp",
    current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item]
  );
};
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="Step 4" title="Your community & safety"
        subtitle="These questions help us understand what safety looks like for people in our community. There are no wrong answers." />
      <div className="flex gap-3 rounded-xl px-4 py-3.5 ring-1" style={{ background: "rgba(13,172,186,0.06)", borderColor: "#0DACBA" }}>
        <span className="text-lg">🕊️</span>
        <p className="text-xs leading-relaxed" style={{ color: "#456779" }}>
          This section is about your community, not personal details. Answer only what feels right for you.
        </p>
      </div>
      <Card className="divide-y" style={{ borderColor: "#D4CAAE" }}>
        <div className="p-5 space-y-1.5">
          <FieldLabel>Where do you feel most safe?</FieldLabel>
          <Select value={form.safePlace} onChange={(v) => setField("safePlace", v)} options={["Home", "Work", "Community spaces", "Online", "Other"]} />
        </div>
        <div className="p-5 space-y-3">
  <FieldLabel helper="Select all that apply.">
    What helps create safety?
  </FieldLabel>

  <div className="relative z-10">
    <SafetyCheckboxes
      selected={form.safetyHelp || []}
      onToggle={toggleSafetyHelp}
    />
  </div>
</div>
        <div className="p-5 space-y-1.5">
          <FieldLabel>What is one thing that would improve safety in your community?</FieldLabel>
          <Textarea value={form.improveSafety} onChange={(v) => setField("improveSafety", v)} placeholder="Your whakaaro here…" />
        </div>
      </Card>
      <NavButtons onNext={onNext} onBack={onBack} canNext={true} nextLabel="Last step — Prize draw" />
    </div>
  );
}

function StepOrganisation({ form, setField, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="Step 2 of 3" title="Sector insights"
        subtitle="A quick check on awareness and what is helping or blocking the work." />
      <Card className="divide-y" style={{ borderColor: "#D4CAAE" }}>
        <div className="p-5 space-y-1.5">
          <FieldLabel>Have you heard of Te Aorerekura?</FieldLabel>
          <Select value={form.heardAorerekura} onChange={(v) => setField("heardAorerekura", v)} options={["Yes", "No", "Not sure"]} />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel helper="Select the option that best matches your understanding.">What do you think the goal of Te Aorerekura is?</FieldLabel>
          <Select value={form.aorerekuraGoal} onChange={(v) => setField("aorerekuraGoal", v)} options={[
            "Slow family violence and sexual violence", "Make family violence and sexual violence worse",
            "Make family violence and sexual violence better", "Eliminate family violence and sexual violence", "Not sure"]} />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel>In your view, is the current system making things better, worse, or staying much the same?</FieldLabel>
          <Select value={form.systemView} onChange={(v) => setField("systemView", v)} options={["Making things better", "Making things worse", "Not changing much", "Not sure"]} />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel>What is one thing that would strengthen safety outcomes in your work?</FieldLabel>
          <Textarea value={form.agencyStrengthen} onChange={(v) => setField("agencyStrengthen", v)} placeholder="What would help your work or response…" />
        </div>
        <div className="p-5 space-y-1.5">
          <FieldLabel>What is one barrier you face when trying to keep whānau safe?</FieldLabel>
          <Textarea value={form.agencyBarrier} onChange={(v) => setField("agencyBarrier", v)} placeholder="Be straight about it…" />
        </div>
      </Card>
      <NavButtons onNext={onNext} onBack={onBack} canNext={true} nextLabel="Last step — Prize draw" />
    </div>
  );
}

function StepPrize({ form, setField, onBack }) {
  const [submitted, setSubmitted] = useState(false);

  async function handleFinalSubmit() {
    if (!form.name || !form.contact || !form.consent) {
      alert("Please enter your name, contact details, and tick the consent box.");
      return;
    }

    await sendToSheets({
      respondentType: form.respondentType || "",
      hauoraTinana: form.hauoraTinana || "",
      hauoraHinengaro: form.hauoraHinengaro || "",
      hauoraWairua: form.hauoraWairua || "",
      hauoraWhanau: form.hauoraWhanau || "",
      answers: form
    });

    setSubmitted(true);
  }
  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl" style={{ background: "rgba(149,196,63,0.15)" }}>🎉</div>
        <h2 className="font-serif text-2xl font-bold" style={{ color: "#456779" }}>Tino pai! Ka rawe!</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-500">
          Your survey is complete. If you entered the prize draw, we'll be in touch. Ngā mihi nui.
        </p>
        <a href="https://www.facebook.com/TeWhareRuruhauOMeriTrust" target="_blank" rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition"
          style={{ background: "#456779" }}>
          Follow Te Whare on Facebook →
        </a>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="Optional" title="Go in the draw 🎁"
        subtitle="This part is completely optional. Leave your details to go in the prize draw." />
      <div className="grid grid-cols-3 gap-2">
        {[{ prize: "$100", label: "Fuel voucher", emoji: "⛽" }, { prize: "$50", label: "Woolworths", emoji: "🛒" }, { prize: "$50", label: "Woolworths", emoji: "🛒" }].map((p, i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-3 ring-1" style={{ background: "rgba(243,113,40,0.07)", borderColor: "#F37128" }}>
            <span className="text-lg">{p.emoji}</span>
            <div>
              <p className="text-sm font-bold" style={{ color: "#F37128" }}>{p.prize}</p>
              <p className="text-xs" style={{ color: "#456779" }}>{p.label}</p>
            </div>
          </div>
        ))}
      </div>
      <Card className="p-5 space-y-4">
        <div className="space-y-1.5">
          <FieldLabel>Name</FieldLabel>
          <TextInput value={form.name} onChange={(v) => setField("name", v)} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <FieldLabel helper="We'll only use this to contact you if you win.">Email or phone</FieldLabel>
          <TextInput value={form.contact} onChange={(v) => setField("contact", v)} placeholder="Email or phone number" />
        </div>
        <label className="flex cursor-pointer items-start gap-3 rounded-xl px-4 py-3.5 ring-1" style={{ background: "#F2F2EA", borderColor: "#D4CAAE" }}
          onClick={() => setField("consent", !form.consent)}>
          <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border text-white transition"
            style={{ borderColor: form.consent ? "#95C43F" : "#D4CAAE", background: form.consent ? "#95C43F" : "transparent" }}>
            {form.consent && <span className="text-[10px]">✓</span>}
          </span>
          <span className="text-xs leading-relaxed" style={{ color: "#456779" }}>
            I agree to be contacted about this competition. My information will only be used for this purpose.
          </span>
        </label>
      </Card>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={onBack} className="rounded-xl border px-5 py-3 text-sm font-bold transition"
          style={{ borderColor: "#D4CAAE", color: "#456779" }}>← Back</button>
        <button type="button" onClick={handleFinalSubmit}
          className="flex-1 rounded-xl px-5 py-3.5 text-sm font-bold text-white transition"
          style={{ background: "#95C43F", boxShadow: "0 4px 14px rgba(149,196,63,0.3)" }}>
          {form.name && form.contact && form.consent ? "Submit survey & enter draw 🎉" : "Submit survey (skip draw)"}
        </button>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ audience, averageScore, scores }) {
  const hasAnyScore = scores && (scores.tinana || scores.hinengaro || scores.wairua || scores.whanau);
  return (
    <aside className="space-y-4">
      <Card className="p-5">
        <h3 className="font-serif font-bold" style={{ color: "#456779" }}>How it works</h3>
        <ol className="mt-4 space-y-4 text-sm">
          {["Choose community member or organisation.", "Answer the questions that match your path.", "Leave your details to go in the draw."].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#95C43F" }}>{i + 1}</span>
              <span style={{ color: "#456779" }}>{step}</span>
            </li>
          ))}
        </ol>
      </Card>
      {audience === "public" && hasAnyScore && (
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif font-bold text-sm" style={{ color: "#456779" }}>Your whare</h3>
            <WhareSilhouette tinana={scores.tinana} hinengaro={scores.hinengaro} wairua={scores.wairua} whanau={scores.whanau} />
          </div>
          <RadarChart tinana={scores.tinana} hinengaro={scores.hinengaro} wairua={scores.wairua} whanau={scores.whanau} />
          {averageScore && (
            <div className="mt-2 flex items-center justify-between border-t pt-2" style={{ borderColor: "#D4CAAE" }}>
              <span className="text-xs text-stone-400">Average</span>
              <span className="font-bold text-sm" style={{ color: "#95C43F" }}>{averageScore} / 5</span>
            </div>
          )}
        </Card>
      )}
      <Card className="p-5">
        <h3 className="font-serif font-bold" style={{ color: "#456779" }}>Prize pool</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center gap-2" style={{ color: "#456779" }}><span>⛽</span> $100 fuel voucher</li>
          <li className="flex items-center gap-2" style={{ color: "#456779" }}><span>🛒</span> 2 × $50 Woolworths vouchers</li>
        </ul>
      </Card>
      <Card className="p-5">
        <h3 className="font-serif font-bold" style={{ color: "#456779" }}>Follow Te Whare</h3>
        <p className="mt-1.5 text-xs text-stone-400">Stay connected with our mahi.</p>
        <a href="https://www.facebook.com/TeWhareRuruhauOMeriTrust" target="_blank" rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition"
          style={{ background: "#456779" }}>
          Open Facebook →
        </a>
      </Card>
    </aside>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function SVCompetitionLandingPage() {
  const [form, setForm] = useState({
    audience: "", organisationType: "",
    tinana: 0, hinengaro: 0, wairua: 0, whanau: 0, focusAction: "", balanceSecret: "",
    improveHauora: "", supportArea: "", nextStep: "", barrier: "",
    safePlace: "", safetyHelp: [], improveSafety: "",
    heardAorerekura: "", aorerekuraGoal: "", systemView: "",
    agencyStrengthen: "", agencyBarrier: "",
    name: "", contact: "", consent: false,
  });
  const [step, setStep] = useState("who");
  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const averageScore = useMemo(() => {
    const scores = [form.tinana, form.hinengaro, form.wairua, form.whanau].filter(Boolean);
    if (!scores.length) return null;
    return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
  }, [form]);

  const steps = form.audience === "organisation" ? STEPS_ORG : STEPS_PUBLIC;
  const currentIndex = steps.indexOf(step);
  const goNext = () => setStep(steps[currentIndex + 1]);
  const goBack = () => setStep(steps[currentIndex - 1]);

  const stepLabel = { who: "Who are you?", hauora: "Te Whare Tapa Whā", steps: "One small step", safety: "Safety check-in", organisation: "Sector insights", prize: "Prize draw" }[step] || step;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#F2F2EA" }}>
      {/* ── Header ── */}
      <header style={{ background: "#1a2f3a" }} className="px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <img
            src={`data:image/jpeg;base64,${LOGO_B64}`}
            alt="Te Whare Ruruhau o Meri Trust"
            className="h-12 w-auto md:h-14"
            style={{ mixBlendMode: "screen" }}
          />
          <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/60 md:block">
            Walking alongside whānau
          </span>
        </div>
      </header>

      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden px-4 py-8 md:px-8 md:py-14" style={{ background: "linear-gradient(135deg, #456779 0%, #0DACBA 100%)" }}>
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-2 border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-80 w-80 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: "rgba(149,196,63,0.25)", color: "#95C43F" }}>
              Hauora Survey + Prize Draw
            </div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
              What does your hauora look like today?
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Quick check-in. Quick whakaaro. Go in the draw to win one of three prizes.
            </p>
            <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              Main prize: $100 fuel voucher · 2 × $50 Woolworths vouchers
            </p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto max-w-5xl px-3 py-5 sm:px-4 sm:py-8 md:px-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main form */}
          <main className="md:col-span-2">
            {step !== "prize" && <ProgressBar current={currentIndex + 1} total={steps.length} label={stepLabel} />}
            <Card className="p-4 sm:p-6 md:p-7">
              {step === "who" && <StepWho form={form} setField={setField} onNext={goNext} />}
              {step === "hauora" && <StepHauora form={form} setField={setField} onNext={goNext} onBack={goBack} />}
              {step === "steps" && <StepSteps form={form} setField={setField} onNext={goNext} onBack={goBack} />}
              {step === "safety" && <StepSafety form={form} setField={setField} onNext={goNext} onBack={goBack} />}
              {step === "organisation" && <StepOrganisation form={form} setField={setField} onNext={goNext} onBack={goBack} />}
              {step === "prize" && <StepPrize form={form} setField={setField} onBack={goBack} />}
            </Card>
          </main>

          {/* Sidebar — hidden on mobile, shown on md+ */}
          <div className="hidden md:block">
            <div className="sticky top-6">
              <Sidebar audience={form.audience} averageScore={averageScore} scores={{ tinana: form.tinana, hinengaro: form.hinengaro, wairua: form.wairua, whanau: form.whanau }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-4 border-t px-4 py-6 text-center text-xs" style={{ borderColor: "#D4CAAE", color: "#456779" }}>
        © Te Whare Ruruhau o Meri Trust · Walking alongside whānau
      </footer>
    </div>
  );
}
