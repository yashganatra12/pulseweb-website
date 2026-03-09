"use client";

export function BrowserMockup({
  gradient,
  title,
  children,
}: {
  gradient: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#111] rounded-md px-3 py-1 text-xs text-gray-500 max-w-xs mx-auto text-center">
            {title}
          </div>
        </div>
      </div>
      <div className={`bg-gradient-to-br ${gradient} p-6 min-h-[200px]`}>
        {children}
      </div>
    </div>
  );
}

export function PhoneMockup({
  gradient,
  children,
}: {
  gradient: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-[220px] mx-auto">
      <div className="rounded-[2rem] border-4 border-gray-700 overflow-hidden shadow-2xl bg-black">
        <div className="bg-black px-6 py-1.5 flex justify-center">
          <div className="w-20 h-5 bg-black rounded-b-2xl border-b border-x border-gray-700" />
        </div>
        <div className={`bg-gradient-to-br ${gradient} min-h-[380px] p-4`}>
          {children}
        </div>
        <div className="bg-black py-2 flex justify-center">
          <div className="w-24 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ===== UNIQUE MOCKUPS PER PROJECT ===== */

// ShopFlow - E-Commerce with product grid, cart, and search bar
export function ShopFlowMockup({ gradient }: { gradient: string }) {
  return (
    <BrowserMockup gradient={gradient} title="shopflow.store">
      <div className="space-y-3">
        {/* Nav with search */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-16 h-3 bg-white/30 rounded" />
          <div className="flex-1 bg-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-20 h-2 bg-white/15 rounded" />
          </div>
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-white/20" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400 text-[6px] text-white flex items-center justify-center">3</div>
          </div>
        </div>
        {/* Hero banner */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur flex items-center justify-between">
          <div>
            <div className="w-24 h-3 bg-white/40 rounded mb-1.5" />
            <div className="w-16 h-2 bg-white/20 rounded mb-2" />
            <div className="w-14 h-5 bg-white/30 rounded-full" />
          </div>
          <div className="w-16 h-16 rounded-lg bg-white/15 flex items-center justify-center">
            <span className="text-xl">👗</span>
          </div>
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-3 gap-2">
          {["👟", "👜", "⌚", "👕", "🕶️", "💍"].map((emoji, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-2 backdrop-blur text-center">
              <div className="w-full h-10 flex items-center justify-center text-lg mb-1">{emoji}</div>
              <div className="w-10 h-1.5 bg-white/25 rounded mx-auto mb-1" />
              <div className="w-6 h-1.5 bg-white/40 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

// HealthPulse - Health tracking with heart rate, steps, sleep
export function HealthPulseMockup({ gradient }: { gradient: string }) {
  return (
    <PhoneMockup gradient={gradient}>
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] text-white/50">Good Morning</div>
            <div className="w-16 h-2.5 bg-white/30 rounded" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/15" />
        </div>
        {/* Heart rate circle */}
        <div className="text-center py-2">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-red-400/50 border-t-red-400 flex flex-col items-center justify-center mb-1 relative">
            <span className="text-red-300 text-xs">❤️</span>
            <span className="text-white text-xl font-bold">72</span>
            <span className="text-[8px] text-white/50">BPM</span>
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: "🏃", val: "8,432", label: "Steps" },
            { icon: "🔥", val: "420", label: "Cal" },
            { icon: "😴", val: "7.5h", label: "Sleep" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-xl p-2 text-center backdrop-blur">
              <div className="text-sm mb-0.5">{s.icon}</div>
              <div className="text-[10px] text-white font-semibold">{s.val}</div>
              <div className="text-[7px] text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Weekly chart */}
        <div className="bg-white/10 rounded-xl p-3 backdrop-blur">
          <div className="text-[8px] text-white/40 mb-2">Weekly Activity</div>
          <div className="flex items-end gap-1 h-14">
            {[45, 70, 55, 85, 60, 90, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className={`w-full rounded-t ${i === 5 ? "bg-green-400/60" : "bg-white/25"}`}
                  style={{ height: `${h}%` }}
                />
                <span className="text-[6px] text-white/30">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}

// FinDash - Financial analytics with charts and data tables
export function FinDashMockup({ gradient }: { gradient: string }) {
  return (
    <BrowserMockup gradient={gradient} title="app.findash.io">
      <div className="space-y-3">
        {/* Metric cards */}
        <div className="flex gap-2">
          {[
            { label: "Revenue", val: "$2.4M", change: "+12.5%", up: true },
            { label: "Users", val: "48.2K", change: "+8.3%", up: true },
            { label: "Churn", val: "2.1%", change: "-0.4%", up: false },
          ].map((m) => (
            <div key={m.label} className="flex-1 bg-white/10 rounded-lg p-2.5 backdrop-blur">
              <div className="text-[7px] text-white/40 mb-1">{m.label}</div>
              <div className="text-sm text-white font-bold">{m.val}</div>
              <div className={`text-[8px] ${m.up ? "text-green-400" : "text-red-400"}`}>
                {m.change}
              </div>
            </div>
          ))}
        </div>
        {/* Line chart area */}
        <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
          <div className="text-[8px] text-white/40 mb-2">Revenue Trend (12M)</div>
          <svg viewBox="0 0 200 60" className="w-full h-16">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 50 Q20 45 40 40 T80 30 T120 25 T160 15 T200 8" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
            <path d="M0 50 Q20 45 40 40 T80 30 T120 25 T160 15 T200 8 V60 H0Z" fill="url(#chartGrad)" />
          </svg>
        </div>
        {/* Data table */}
        <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur">
          <div className="flex gap-2 text-[7px] text-white/30 mb-2 px-1">
            <div className="flex-1">Asset</div>
            <div className="w-12 text-right">Value</div>
            <div className="w-10 text-right">Change</div>
          </div>
          {[
            { name: "AAPL", val: "$182", ch: "+2.1%" },
            { name: "TSLA", val: "$245", ch: "-1.3%" },
            { name: "NVDA", val: "$892", ch: "+4.7%" },
          ].map((r) => (
            <div key={r.name} className="flex gap-2 text-[8px] text-white/60 px-1 py-1 border-t border-white/5">
              <div className="flex-1 font-medium text-white/80">{r.name}</div>
              <div className="w-12 text-right">{r.val}</div>
              <div className={`w-10 text-right ${r.ch.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{r.ch}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

// CloudDesk - Project management with kanban board
export function CloudDeskMockup({ gradient }: { gradient: string }) {
  return (
    <BrowserMockup gradient={gradient} title="app.clouddesk.io">
      <div className="space-y-3">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-white/20" />
            <div className="w-20 h-2.5 bg-white/30 rounded" />
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-white/15 -ml-1 border border-white/10" />
            ))}
          </div>
        </div>
        {/* Kanban columns */}
        <div className="flex gap-2">
          {[
            { title: "To Do", count: 4, items: 3, color: "bg-gray-400" },
            { title: "In Progress", count: 3, items: 2, color: "bg-blue-400" },
            { title: "Done", count: 6, items: 2, color: "bg-green-400" },
          ].map((col) => (
            <div key={col.title} className="flex-1 bg-white/5 rounded-lg p-2 backdrop-blur">
              <div className="flex items-center gap-1.5 mb-2">
                <div className={`w-2 h-2 rounded-full ${col.color}`} />
                <span className="text-[7px] text-white/50 font-medium">{col.title}</span>
                <span className="text-[7px] text-white/30 ml-auto">{col.count}</span>
              </div>
              {Array.from({ length: col.items }).map((_, i) => (
                <div key={i} className="bg-white/10 rounded p-1.5 mb-1.5">
                  <div className="w-full h-1.5 bg-white/20 rounded mb-1" />
                  <div className="w-2/3 h-1.5 bg-white/10 rounded mb-1.5" />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${["bg-red-400", "bg-yellow-400", "bg-green-400"][i % 3]}`} />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-white/15" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

// BiteSwift - Food delivery with map and order tracking
export function BiteSwiftMockup({ gradient }: { gradient: string }) {
  return (
    <PhoneMockup gradient={gradient}>
      <div className="space-y-3">
        {/* Search */}
        <div className="bg-white/10 rounded-full px-3 py-2 flex items-center gap-2 backdrop-blur">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="text-[8px] text-white/30">Search restaurants...</div>
        </div>
        {/* Map area */}
        <div className="bg-white/10 rounded-xl p-3 backdrop-blur relative h-28">
          {/* Fake map grid */}
          <div className="absolute inset-2 grid grid-cols-4 grid-rows-3 gap-px opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded-sm" />
            ))}
          </div>
          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80">
            <path d="M20 60 Q40 30 60 40 T90 20" stroke="rgba(96,165,250,0.6)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
            <circle cx="20" cy="60" r="4" fill="#4ade80" />
            <circle cx="90" cy="20" r="4" fill="#f87171" />
          </svg>
          <div className="absolute bottom-2 left-2 bg-black/40 rounded-lg px-2 py-1">
            <div className="text-[7px] text-white/70">ETA: 12 min</div>
          </div>
        </div>
        {/* Restaurant cards */}
        {[
          { name: "Pizza Palace", rating: "4.8", time: "25 min", emoji: "🍕" },
          { name: "Sushi Garden", rating: "4.6", time: "30 min", emoji: "🍣" },
        ].map((r) => (
          <div key={r.name} className="bg-white/10 rounded-xl p-2.5 backdrop-blur flex gap-2.5 items-center">
            <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
              {r.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] text-white font-medium">{r.name}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[7px] text-yellow-300">★ {r.rating}</span>
                <span className="text-[7px] text-white/30">{r.time}</span>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[8px] text-white/50">→</div>
          </div>
        ))}
        {/* Order button */}
        <div className="bg-white/25 rounded-full py-2 text-center backdrop-blur">
          <div className="text-[9px] text-white font-medium">View Cart (2 items)</div>
        </div>
      </div>
    </PhoneMockup>
  );
}

// LegalEase - Legal portal with documents and calendar
export function LegalEaseMockup({ gradient }: { gradient: string }) {
  return (
    <BrowserMockup gradient={gradient} title="portal.legalease.com">
      <div className="space-y-3">
        {/* Sidebar + Content layout */}
        <div className="flex gap-3">
          {/* Mini sidebar */}
          <div className="w-16 bg-white/5 rounded-lg p-2 space-y-2 backdrop-blur">
            {["📋", "📄", "📅", "💰", "✉️"].map((icon, i) => (
              <div key={i} className={`w-full py-1.5 rounded text-center text-sm ${i === 0 ? "bg-white/15" : ""}`}>
                {icon}
              </div>
            ))}
          </div>
          {/* Main content */}
          <div className="flex-1 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-24 h-3 bg-white/30 rounded" />
              <div className="w-16 h-5 bg-white/15 rounded-full flex items-center justify-center">
                <span className="text-[7px] text-white/50">+ New</span>
              </div>
            </div>
            {/* Document list */}
            {[
              { name: "Contract_v3.pdf", status: "Signed", statusColor: "bg-green-400" },
              { name: "NDA_2026.pdf", status: "Pending", statusColor: "bg-yellow-400" },
              { name: "Agreement.docx", status: "Review", statusColor: "bg-blue-400" },
            ].map((doc) => (
              <div key={doc.name} className="bg-white/10 rounded-lg p-2 flex items-center gap-2 backdrop-blur">
                <div className="text-sm">📄</div>
                <div className="flex-1">
                  <div className="text-[8px] text-white/70">{doc.name}</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${doc.statusColor}`} />
                  <span className="text-[7px] text-white/40">{doc.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}

// StyleStudio - Fashion website with editorial layout
export function StyleStudioMockup({ gradient }: { gradient: string }) {
  return (
    <BrowserMockup gradient={gradient} title="stylestudio.fashion">
      <div className="space-y-3">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="w-20 h-3 bg-white/40 rounded font-bold" />
          <div className="flex gap-3">
            {["Shop", "Look", "About"].map((l) => (
              <span key={l} className="text-[8px] text-white/40">{l}</span>
            ))}
          </div>
        </div>
        {/* Hero image area */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur text-center relative overflow-hidden">
          <div className="text-3xl mb-1">✨</div>
          <div className="text-[10px] text-white/60 font-medium tracking-widest uppercase mb-1">Spring Collection</div>
          <div className="text-[16px] text-white font-bold mb-2">ELEGANCE REDEFINED</div>
          <div className="w-20 h-5 bg-white/20 rounded-full mx-auto flex items-center justify-center">
            <span className="text-[7px] text-white/70">Shop Now →</span>
          </div>
        </div>
        {/* Product showcase */}
        <div className="grid grid-cols-3 gap-2">
          {["👗", "👠", "💎"].map((emoji, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-2 backdrop-blur text-center">
              <div className="text-xl mb-1">{emoji}</div>
              <div className="w-10 h-1.5 bg-white/20 rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

// EduSpark - Online learning with video player and course list
export function EduSparkMockup({ gradient }: { gradient: string }) {
  return (
    <BrowserMockup gradient={gradient} title="learn.eduspark.io">
      <div className="space-y-3">
        {/* Video player */}
        <div className="bg-black/30 rounded-lg aspect-video flex items-center justify-center relative">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
            <span className="text-white/70 ml-0.5">▶</span>
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[35%] h-full bg-blue-400 rounded-full" />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[6px] text-white/30">12:34</span>
              <span className="text-[6px] text-white/30">35:20</span>
            </div>
          </div>
        </div>
        {/* Course progress */}
        <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[8px] text-white/60 font-medium">Course Progress</div>
            <div className="text-[8px] text-green-400">68%</div>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="w-[68%] h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
          </div>
        </div>
        {/* Lesson list */}
        {[
          { title: "Variables & Types", done: true },
          { title: "Functions & Scope", done: true },
          { title: "Async Programming", done: false, active: true },
        ].map((l) => (
          <div key={l.title} className={`bg-white/10 rounded-lg p-2 flex items-center gap-2 backdrop-blur ${l.active ? "border border-white/20" : ""}`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] ${l.done ? "bg-green-400/30 text-green-400" : "bg-white/10 text-white/30"}`}>
              {l.done ? "✓" : "○"}
            </div>
            <div className="text-[8px] text-white/60 flex-1">{l.title}</div>
            {l.active && <div className="text-[7px] text-blue-300">Playing</div>}
          </div>
        ))}
      </div>
    </BrowserMockup>
  );
}

// Blog banner SVG mockups
export function BlogBanner({
  gradient,
  icon,
  elements,
}: {
  gradient: string;
  icon: string;
  elements: string[];
}) {
  const iconMap: Record<string, string> = {
    globe: "🌐",
    code: "⚡",
    smartphone: "📱",
    trending: "📈",
    palette: "🎨",
    cloud: "☁️",
    search: "🔍",
  };

  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-8 min-h-[200px] flex items-center justify-center relative overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
      </div>
      {/* Floating elements */}
      <div className="absolute top-6 right-8 flex gap-2">
        {elements.slice(0, 2).map((el) => (
          <span key={el} className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white/60 font-mono">
            {el}
          </span>
        ))}
      </div>
      <div className="absolute bottom-6 left-8 flex gap-2">
        {elements.slice(2).map((el) => (
          <span key={el} className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white/60 font-mono">
            {el}
          </span>
        ))}
      </div>
      {/* Center icon */}
      <div className="text-center relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 border border-white/20">
          <span className="text-3xl">{iconMap[icon] || "📝"}</span>
        </div>
      </div>
    </div>
  );
}
