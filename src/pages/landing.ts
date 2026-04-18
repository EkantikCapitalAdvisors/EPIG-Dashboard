export function landingPage(): string {
  return `
  <!-- ════ SECTION 1: HERO — THE VEHICLE, IN DEVELOPMENT ════ -->
  <section class="relative overflow-hidden" style="background:#111827;">
    <div class="absolute inset-0" style="background:radial-gradient(ellipse at 50% 0%, rgba(200,169,81,0.05) 0%, transparent 70%);"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center relative">
      <!-- Architecture pill badge -->
      <div class="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full" style="background:rgba(200,169,81,0.08);border:1px solid rgba(200,169,81,0.35);">
        <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#C8A951;box-shadow:0 0 6px rgba(200,169,81,0.8);"></span>
        <span class="text-[11px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Ekantik Architecture &middot; Layer 4</span>
      </div>

      <h1 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;letter-spacing:0.01em;" class="text-4xl sm:text-5xl lg:text-[54px] text-white mb-5 leading-[1.08]">
        The Vehicle &mdash; In Development.
      </h1>

      <p style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;font-style:italic;font-weight:400;" class="text-lg sm:text-[22px] mb-10 max-w-[640px] mx-auto leading-snug">
        The Doubling Engine, engineered for managed capital. Built on a barbell architecture.
      </p>

      <div style="font-family:'Source Sans Pro',sans-serif;max-width:640px;" class="mx-auto space-y-4 mb-10 text-white/80 text-base sm:text-[17px] leading-relaxed">
        <p>
          EPIG is the managed-strategy layer of the Ekantik Architecture. When activated, it will deploy a three-layer portfolio &mdash; structural floor, tactical income, convexity sleeve &mdash; backed by full fiduciary infrastructure.
        </p>
        <p>
          Activation is gated on the Proof layer completing its 100-trade consistency proof. You can watch The Proof in real time.
        </p>
        <p class="text-white/60 text-[15px]">
          This page documents the architecture being built. It does not currently accept capital, enroll founding members, or offer managed relationships.
        </p>
      </div>

      <!-- Three CTAs: primary Watch The Proof, outlines for Doctrine and Waitlist -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
          <i class="fas fa-chart-line"></i> Watch The Proof
          <i class="fas fa-arrow-right text-xs opacity-70"></i>
        </a>
        <a href="https://doubles.ekantikcapital.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold border border-white/30 text-white hover:bg-white/5 transition-all">
          <i class="fas fa-book-open"></i> Read The Doctrine
          <i class="fas fa-arrow-right text-xs opacity-60"></i>
        </a>
        <a href="#waitlist" class="inline-flex items-center gap-2 no-underline px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold border transition-all" style="border-color:rgba(200,169,81,0.6);color:#C8A951;">
          <i class="fas fa-envelope-open-text"></i> Join The Waitlist
          <i class="fas fa-arrow-right text-xs opacity-70"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 2: THE BARBELL ARCHITECTURE ════ -->
  <section style="background:#0f1420;border-top:1px solid #1e293b;">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">The Design</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white mb-4 leading-tight">
          A Barbell Applied to Managed Capital.
        </h2>
        <p class="text-[#94a3b8] text-lg leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          Most of the capital defensive. A small sleeve precisely sized for asymmetric opportunity. Nothing in the middle.
        </p>
      </div>

      <!-- Opening paragraph -->
      <div class="max-w-3xl mx-auto mb-12 space-y-4 text-[#cbd5e1] text-base leading-[1.75]" style="font-family:'Source Sans Pro',sans-serif;">
        <p>
          EPIG is built on a <strong class="text-white">barbell structure</strong> &mdash; a portfolio design principle articulated by <em class="text-white">Nassim Taleb</em> in which the vast majority of capital is structurally defensive while a small, precisely-sized allocation captures asymmetric opportunity.
        </p>
        <p>
          The barbell deliberately avoids the middle &mdash; moderate-risk positions that offer neither full protection nor meaningful upside. EPIG is the barbell applied to managed capital.
        </p>
      </div>

      <!-- Before / After Comparison Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <!-- LEFT: Fully Invested S&P (Reference) -->
        <div class="rounded-2xl border overflow-hidden" style="background:#1a1f2e;border-color:rgba(239,68,68,0.25);">
          <div class="px-6 py-4" style="background:rgba(239,68,68,0.08);border-bottom:1px solid rgba(239,68,68,0.2);">
            <div class="text-[11px] font-bold uppercase tracking-[0.2em] mb-1" style="color:#fca5a5;font-family:'Source Sans Pro',sans-serif;">Reference</div>
            <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">Fully Invested S&amp;P</h3>
            <p class="text-[13px] text-[#94a3b8] mt-1">Traditional Buy &amp; Hold</p>
          </div>
          <div class="p-6 space-y-4" style="font-family:'Source Sans Pro',sans-serif;">
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#ef4444;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">Always in the market</strong> &mdash; full exposure to all phases.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#ef4444;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">Full drawdowns</strong> during corrections (30&ndash;50%+).</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#ef4444;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">No cash cushion</strong> for opportunistic deployment.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#ef4444;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed">Returns <strong class="text-white">dependent on entry P/E</strong> of the S&amp;P.</p>
            </div>
            <div class="pt-4 mt-2 border-t border-[#1e293b] space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs uppercase tracking-wider text-[#94a3b8]">Market Exposure</span>
                <span class="text-sm font-semibold text-white">100% constant</span>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-xs uppercase tracking-wider text-[#94a3b8]">Risk Profile</span>
                  <span class="text-[11px] font-bold uppercase tracking-wider" style="color:#fca5a5;">High</span>
                </div>
                <div class="w-full h-1.5 rounded-full" style="background:#1e293b;">
                  <div class="h-full rounded-full" style="width:92%;background:linear-gradient(to right,#ef4444,#f87171);"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: EPIG Architecture (Design) -->
        <div class="rounded-2xl border overflow-hidden" style="background:#1a1f2e;border-color:rgba(200,169,81,0.32);">
          <div class="px-6 py-4" style="background:rgba(200,169,81,0.08);border-bottom:1px solid rgba(200,169,81,0.25);">
            <div class="text-[11px] font-bold uppercase tracking-[0.2em] mb-1" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">EPIG Architecture &middot; Design</div>
            <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">Selective Exposure</h3>
            <p class="text-[13px] text-[#94a3b8] mt-1">Barbell applied to managed capital</p>
          </div>
          <div class="p-6 space-y-4" style="font-family:'Source Sans Pro',sans-serif;">
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">95&ndash;99% of principal</strong> designed to remain fully secured.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">1&ndash;3% VaR overlay</strong> &mdash; precisely controlled exposure.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">Selectivity over constant exposure</strong> &mdash; quality over quantity.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <p class="text-sm text-[#cbd5e1] leading-relaxed"><strong class="text-white">Circuit breakers &amp; auto-shutdown</strong> protections built in.</p>
            </div>
            <div class="pt-4 mt-2 border-t border-[#1e293b] space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs uppercase tracking-wider text-[#94a3b8]">Market Exposure</span>
                <span class="text-sm font-semibold text-white">0% default &rarr; brief, capped spikes</span>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-xs uppercase tracking-wider text-[#94a3b8]">Risk Profile</span>
                  <span class="text-[11px] font-bold uppercase tracking-wider" style="color:#10b981;">Low</span>
                </div>
                <div class="w-full h-1.5 rounded-full" style="background:#1e293b;">
                  <div class="h-full rounded-full" style="width:18%;background:linear-gradient(to right,#10b981,#34d399);"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Closing quotation bar -->
      <div class="rounded-xl p-6 sm:p-7 text-center" style="background:rgba(200,169,81,0.05);border:1px solid rgba(200,169,81,0.2);border-left:3px solid #C8A951;">
        <p class="text-base sm:text-lg text-[#e2e8f0] leading-relaxed italic max-w-3xl mx-auto" style="font-family:'Playfair Display',Georgia,serif;">
          By harvesting only high-expectancy windows &mdash; and otherwise sitting in cash or Treasury bills &mdash; the design aims to out-compound a constant S&amp;P allocation across cycles while keeping principal structurally defended.
        </p>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 3: NEVER LOSE MONEY — THE FOUR PRINCIPLES ════ -->
  <section style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Never Lose Money</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white mb-4 leading-tight">
          The Four Principles Underneath The Design.
        </h2>
        <p class="text-[#94a3b8] text-lg leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          Every investment decision runs through these four filters.
        </p>
      </div>

      <!-- 2x2 Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <!-- Risk Management -->
        <div class="rounded-2xl border border-[#1e293b] p-7" style="background:#1a1f2e;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.3);">
              <i class="fas fa-shield-halved text-lg" style="color:#C8A951;"></i>
            </div>
            <div>
              <div class="text-[10px] font-bold uppercase tracking-[0.22em] mb-0.5" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Principle 1</div>
              <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">Risk Management</h3>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            Pre-committed caps and limits to prevent catastrophic loss. Stop-losses, circuit breakers, and hard stops enforced at <strong class="text-white">trade, day, and week</strong> scope.
          </p>
        </div>

        <!-- Position Sizing -->
        <div class="rounded-2xl border border-[#1e293b] p-7" style="background:#1a1f2e;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.3);">
              <i class="fas fa-scale-balanced text-lg" style="color:#C8A951;"></i>
            </div>
            <div>
              <div class="text-[10px] font-bold uppercase tracking-[0.22em] mb-0.5" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Principle 2</div>
              <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">Position Sizing</h3>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            Every position sized <strong class="text-white">proportionally to capital, edge confidence, and volatility</strong>. Never risk too much on any single bet.
          </p>
        </div>

        <!-- Expected Value -->
        <div class="rounded-2xl border border-[#1e293b] p-7" style="background:#1a1f2e;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.3);">
              <i class="fas fa-calculator text-lg" style="color:#C8A951;"></i>
            </div>
            <div>
              <div class="text-[10px] font-bold uppercase tracking-[0.22em] mb-0.5" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Principle 3</div>
              <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">Expected Value</h3>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            Positive average return per unit of risk. Expected value is calculated <strong class="text-white">before every position</strong>; if EV is negative or unclear, no position is taken.
          </p>
        </div>

        <!-- Positive Expectancy -->
        <div class="rounded-2xl border border-[#1e293b] p-7" style="background:#1a1f2e;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.3);">
              <i class="fas fa-chart-line text-lg" style="color:#C8A951;"></i>
            </div>
            <div>
              <div class="text-[10px] font-bold uppercase tracking-[0.22em] mb-0.5" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Principle 4</div>
              <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">Positive Expectancy</h3>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            Every bet requires a <strong class="text-white">structural edge</strong> that tilts odds in your favor. Only execute when mathematical advantage is demonstrable.
          </p>
        </div>
      </div>

      <!-- Closing line -->
      <p class="text-center text-[#94a3b8] text-base sm:text-lg italic leading-relaxed max-w-3xl mx-auto" style="font-family:'Playfair Display',Georgia,serif;">
        These four principles, applied together, define the architecture. The doctrine at
        <a href="https://doubles.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">doubles.ekantikcapital.com</a>
        explains why they compound. The Proof layer at
        <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">10x.ekantikcapital.com</a>
        demonstrates whether they execute.
      </p>
    </div>
  </section>

  <!-- ════ SECTION 4: THE THREE-LAYER DESIGN SPECIFICATIONS ════ -->
  <section style="background:#0f1420;border-top:1px solid #1e293b;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Engineering Specification</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white mb-4 leading-tight">
          The Three-Layer Design.
        </h2>
        <p class="text-[#94a3b8] text-lg leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          What EPIG is engineered to become when The Vehicle activates.
        </p>
      </div>

      <!-- Opening paragraph -->
      <div class="max-w-3xl mx-auto mb-12 text-[#cbd5e1] text-base leading-[1.75]" style="font-family:'Source Sans Pro',sans-serif;">
        <p>
          EPIG deploys the barbell through three distinct layers, each with defined role, risk budget, and contribution profile. The specifications below describe <strong class="text-white">how the system is designed</strong> &mdash; not how any individual account will perform. Performance depends on the operator&rsquo;s adherence to the design, which is what the Proof layer is currently validating.
        </p>
      </div>

      <!-- Three layer cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
        <!-- LAYER A — Structural Floor (blue) -->
        <div class="rounded-2xl border overflow-hidden flex flex-col" style="background:#1a1f2e;border-color:rgba(59,130,246,0.3);">
          <div class="px-6 py-4" style="background:rgba(59,130,246,0.08);border-bottom:1px solid rgba(59,130,246,0.25);">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#93c5fd;font-family:'Source Sans Pro',sans-serif;">Layer A</span>
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style="background:rgba(59,130,246,0.15);color:#93c5fd;">Defensive End</span>
            </div>
            <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">The Structural Floor</h3>
            <p class="text-[13px] text-[#94a3b8] mt-1" style="font-family:'Source Sans Pro',sans-serif;">The defensive end of the barbell</p>
          </div>
          <div class="p-6 flex-1 flex flex-col" style="font-family:'Source Sans Pro',sans-serif;">
            <div class="space-y-4 mb-5">
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Allocation</div>
                <div class="text-white text-[15px] font-semibold">70&ndash;85% of capital</div>
              </div>
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Instruments</div>
                <div class="text-[#cbd5e1] text-sm leading-relaxed">SPY, high-quality equities, cash equivalents</div>
              </div>
            </div>
            <div class="rounded-lg p-4 mb-5" style="background:rgba(59,130,246,0.05);border:1px solid rgba(59,130,246,0.15);">
              <div class="text-[10px] font-bold uppercase tracking-wider mb-3" style="color:#93c5fd;">Design Specs</div>
              <div class="space-y-2 text-[13px]">
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Expected Value</span>
                  <span class="font-mono font-semibold text-white">1.0</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Bets / Year</span>
                  <span class="font-mono font-semibold text-white">5&ndash;15</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Risk / Bet</span>
                  <span class="font-mono font-semibold text-white">0.5&ndash;1%</span>
                </div>
              </div>
            </div>
            <div class="mt-auto pt-4 border-t border-[#1e293b] text-center">
              <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Contribution to total return</div>
              <div class="text-2xl font-bold" style="color:#93c5fd;font-family:'JetBrains Mono',monospace;">~25%</div>
            </div>
          </div>
        </div>

        <!-- LAYER B — Income Engine (orange) -->
        <div class="rounded-2xl border overflow-hidden flex flex-col" style="background:#1a1f2e;border-color:rgba(251,146,60,0.32);">
          <div class="px-6 py-4" style="background:rgba(251,146,60,0.08);border-bottom:1px solid rgba(251,146,60,0.25);">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#fdba74;font-family:'Source Sans Pro',sans-serif;">Layer B</span>
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style="background:rgba(251,146,60,0.15);color:#fdba74;">Frequent-edge Tactical</span>
            </div>
            <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">The Income Engine</h3>
            <p class="text-[13px] text-[#94a3b8] mt-1" style="font-family:'Source Sans Pro',sans-serif;">The frequent-edge tactical layer</p>
          </div>
          <div class="p-6 flex-1 flex flex-col" style="font-family:'Source Sans Pro',sans-serif;">
            <div class="space-y-4 mb-5">
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Allocation</div>
                <div class="text-white text-[15px] font-semibold">3&ndash;5% of capital</div>
              </div>
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Instruments</div>
                <div class="text-[#cbd5e1] text-sm leading-relaxed">S&amp;P 500 intraday futures and options</div>
              </div>
            </div>
            <div class="rounded-lg p-4 mb-5" style="background:rgba(251,146,60,0.05);border:1px solid rgba(251,146,60,0.18);">
              <div class="text-[10px] font-bold uppercase tracking-wider mb-3" style="color:#fdba74;">Design Specs</div>
              <div class="space-y-2 text-[13px]">
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Expected Value</span>
                  <span class="font-mono font-semibold text-white">0.25&ndash;0.5</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Bets / Year</span>
                  <span class="font-mono font-semibold text-white">~150</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Risk / Bet</span>
                  <span class="font-mono font-semibold text-white">0.5%</span>
                </div>
              </div>
            </div>
            <div class="mt-auto pt-4 border-t border-[#1e293b] text-center">
              <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Contribution to total return</div>
              <div class="text-2xl font-bold" style="color:#fdba74;font-family:'JetBrains Mono',monospace;">~50%</div>
            </div>
          </div>
        </div>

        <!-- LAYER C — Convexity Sleeve (green) -->
        <div class="rounded-2xl border overflow-hidden flex flex-col" style="background:#1a1f2e;border-color:rgba(16,185,129,0.32);">
          <div class="px-6 py-4" style="background:rgba(16,185,129,0.08);border-bottom:1px solid rgba(16,185,129,0.25);">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#6ee7b7;font-family:'Source Sans Pro',sans-serif;">Layer C</span>
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style="background:rgba(16,185,129,0.15);color:#6ee7b7;">Asymmetric End</span>
            </div>
            <h3 class="text-xl font-bold text-white leading-tight" style="font-family:'Playfair Display',Georgia,serif;">The Convexity Sleeve</h3>
            <p class="text-[13px] text-[#94a3b8] mt-1" style="font-family:'Source Sans Pro',sans-serif;">The asymmetric-upside end of the barbell</p>
          </div>
          <div class="p-6 flex-1 flex flex-col" style="font-family:'Source Sans Pro',sans-serif;">
            <div class="space-y-4 mb-5">
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Allocation</div>
                <div class="text-white text-[15px] font-semibold">3&ndash;5% of capital</div>
              </div>
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Instruments</div>
                <div class="text-[#cbd5e1] text-sm leading-relaxed">Asymmetric equity positions at correction levels</div>
              </div>
            </div>
            <div class="rounded-lg p-4 mb-5" style="background:rgba(16,185,129,0.05);border:1px solid rgba(16,185,129,0.18);">
              <div class="text-[10px] font-bold uppercase tracking-wider mb-3" style="color:#6ee7b7;">Design Specs</div>
              <div class="space-y-2 text-[13px]">
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Expected Value</span>
                  <span class="font-mono font-semibold text-white">0.6</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Bets / Year</span>
                  <span class="font-mono font-semibold text-white">30&ndash;50</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#94a3b8]">Risk / Bet</span>
                  <span class="font-mono font-semibold text-white">0.5%</span>
                </div>
              </div>
            </div>
            <div class="mt-auto pt-4 border-t border-[#1e293b] text-center">
              <div class="text-[10px] font-bold uppercase tracking-wider text-[#64748b] mb-1">Contribution to total return</div>
              <div class="text-2xl font-bold" style="color:#6ee7b7;font-family:'JetBrains Mono',monospace;">~25%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- DESIGN TARGETS — WHEN ACTIVATED block -->
      <div class="max-w-4xl mx-auto rounded-2xl overflow-hidden" style="background:#0a0e17;border:1px solid rgba(200,169,81,0.5);box-shadow:0 0 0 1px rgba(200,169,81,0.1);">
        <div class="px-6 sm:px-8 py-5 text-center" style="background:rgba(200,169,81,0.08);border-bottom:1px solid rgba(200,169,81,0.25);">
          <div class="text-[11px] font-bold uppercase tracking-[0.28em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Design Targets &mdash; When Activated</div>
        </div>
        <div class="px-6 sm:px-10 py-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-8" style="font-family:'Source Sans Pro',sans-serif;">
            <div class="flex justify-between items-baseline gap-4 pb-3 border-b border-[#1e293b]">
              <span class="text-[13px] text-[#94a3b8]">Net CAGR target</span>
              <span class="font-mono font-bold text-white text-base">26%</span>
            </div>
            <div class="flex justify-between items-baseline gap-4 pb-3 border-b border-[#1e293b]">
              <span class="text-[13px] text-[#94a3b8]">Max capital at risk</span>
              <span class="font-mono font-bold text-white text-base">&lt;5% at any given time</span>
            </div>
            <div class="flex justify-between items-baseline gap-4 pb-3 border-b border-[#1e293b]">
              <span class="text-[13px] text-[#94a3b8]">Total bets per year</span>
              <span class="font-mono font-bold text-white text-base">150&ndash;200</span>
            </div>
            <div class="flex justify-between items-baseline gap-4 pb-3 border-b border-[#1e293b]">
              <span class="text-[13px] text-[#94a3b8]">Principal always secure</span>
              <span class="font-mono font-bold text-white text-base">95&ndash;99%</span>
            </div>
            <div class="flex justify-between items-baseline gap-4 pb-3 sm:col-span-2">
              <span class="text-[13px] text-[#94a3b8]">Market exposure</span>
              <span class="font-mono font-bold text-white text-base">0% default &rarr; brief, capped spikes</span>
            </div>
          </div>
          <p class="text-[13px] text-[#94a3b8] leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            These are <strong class="text-white">design specifications of the architecture</strong>, not projections of what any individual account will produce. Design targets describe the system; outcomes depend on the operator&rsquo;s adherence, which is what the Proof layer is currently validating.
          </p>
          <div class="text-center">
            <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline text-sm font-semibold" style="color:#C8A951;">
              Watch adherence in real time <i class="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 5: THE SCALE FRAMEWORK ════ -->
  <section style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Institutional Criteria</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white mb-4 leading-tight">
          The SCALE Framework.
        </h2>
        <p class="text-[#e2e8f0] text-lg leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          How institutional allocators evaluate managed strategies.
        </p>
        <p class="text-[#94a3b8] text-[15px] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          EPIG is engineered to satisfy all five attributes. The Proof layer is validating whether the design holds in execution.
        </p>
      </div>

      <!-- Opening paragraph -->
      <div class="max-w-3xl mx-auto mb-10 text-[#cbd5e1] text-base leading-[1.75]" style="font-family:'Source Sans Pro',sans-serif;">
        <p>
          Institutional allocators use a five-attribute framework &mdash; <strong class="text-white">SCALE</strong> &mdash; to evaluate managed investment strategies. EPIG&rsquo;s architecture is engineered to satisfy all five. Whether execution delivers on the design is what the Proof layer at
          <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">10x.ekantikcapital.com</a>
          is currently testing.
        </p>
      </div>

      <!-- SCALE Rows -->
      <div class="rounded-2xl overflow-hidden border border-[#1e293b] mb-10" style="background:#1a1f2e;">
        <!-- S — SCALABLE CAPACITY -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-7 border-b border-[#1e293b]">
          <div class="flex md:flex-col items-center gap-4 md:gap-2 md:w-44 flex-shrink-0">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.35);">
              <span class="text-[28px] font-bold" style="color:#C8A951;font-family:'Playfair Display',Georgia,serif;">S</span>
            </div>
            <div class="md:text-center">
              <div class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Scalable</div>
              <div class="text-[13px] font-semibold text-white uppercase tracking-wider">Capacity</div>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed flex-1" style="font-family:'Source Sans Pro',sans-serif;">
            Performance and slippage <strong class="text-white">designed to remain stable</strong> as account size 10-folds. S&amp;P 500 futures are the most liquid instruments globally.
          </p>
        </div>

        <!-- C — CONTROLLED RISK -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-7 border-b border-[#1e293b]">
          <div class="flex md:flex-col items-center gap-4 md:gap-2 md:w-44 flex-shrink-0">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.35);">
              <span class="text-[28px] font-bold" style="color:#C8A951;font-family:'Playfair Display',Georgia,serif;">C</span>
            </div>
            <div class="md:text-center">
              <div class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Controlled</div>
              <div class="text-[13px] font-semibold text-white uppercase tracking-wider">Risk</div>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed flex-1" style="font-family:'Source Sans Pro',sans-serif;">
            Max drawdown, volatility, and tail loss <strong class="text-white">pre-defined</strong>. 0.5&ndash;1% risk per position, scaled with profits. Principal preservation is the first principle.
          </p>
        </div>

        <!-- A — ABSOLUTE RETURNS -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-7 border-b border-[#1e293b]">
          <div class="flex md:flex-col items-center gap-4 md:gap-2 md:w-44 flex-shrink-0">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.35);">
              <span class="text-[28px] font-bold" style="color:#C8A951;font-family:'Playfair Display',Georgia,serif;">A</span>
            </div>
            <div class="md:text-center">
              <div class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Absolute</div>
              <div class="text-[13px] font-semibold text-white uppercase tracking-wider">Returns</div>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed flex-1" style="font-family:'Source Sans Pro',sans-serif;">
            <strong class="text-white">Designed to deliver positive returns</strong> across market regimes &mdash; not dependent on market direction. Multi-regime resilience is a design objective, not a claim.
          </p>
        </div>

        <!-- L — LIQUIDITY -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-7 border-b border-[#1e293b]">
          <div class="flex md:flex-col items-center gap-4 md:gap-2 md:w-44 flex-shrink-0">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.35);">
              <span class="text-[28px] font-bold" style="color:#C8A951;font-family:'Playfair Display',Georgia,serif;">L</span>
            </div>
            <div class="md:text-center">
              <div class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Liquidity</div>
              <div class="text-[13px] font-semibold text-white uppercase tracking-wider">&nbsp;</div>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed flex-1" style="font-family:'Source Sans Pro',sans-serif;">
            Primarily in cash, <strong class="text-white">deployed opportunistically</strong> into S&amp;P 500 futures with controlled overnight exposure. No lock-up periods.
          </p>
        </div>

        <!-- E — EVIDENCE -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-7">
          <div class="flex md:flex-col items-center gap-4 md:gap-2 md:w-44 flex-shrink-0">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.12);border:1px solid rgba(200,169,81,0.35);">
              <span class="text-[28px] font-bold" style="color:#C8A951;font-family:'Playfair Display',Georgia,serif;">E</span>
            </div>
            <div class="md:text-center">
              <div class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Evidence</div>
              <div class="text-[13px] font-semibold text-white uppercase tracking-wider">&nbsp;</div>
            </div>
          </div>
          <p class="text-[#cbd5e1] text-[15px] leading-relaxed flex-1" style="font-family:'Source Sans Pro',sans-serif;">
            <strong class="text-white">Real-time trade logs and broker statements.</strong> Every fill timestamped and verifiable. The Proof layer publishes adherence and execution data live.
          </p>
        </div>
      </div>

      <!-- Closing line + CTA -->
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-[#cbd5e1] text-base leading-relaxed mb-6" style="font-family:'Source Sans Pro',sans-serif;">
          A strategy that passes the SCALE test covers what institutional allocators rank highest: capacity to grow, risk you can live with, returns worth paying for, friction-free access, and verifiable proof. EPIG is being engineered to pass all five. The Proof layer is where <em class="text-white">&ldquo;engineered to pass&rdquo;</em> becomes <em class="text-white">&ldquo;demonstrably passing.&rdquo;</em>
        </p>
        <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-6 py-3 rounded-lg text-sm font-semibold border transition-all" style="border-color:rgba(200,169,81,0.6);color:#C8A951;">
          See the Proof layer <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 6: WHAT'S BEING BUILT / NOT HAPPENING / MUST BE TRUE ════ -->
  <section style="background:#0f1420;border-top:1px solid #1e293b;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Status Transparency</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white mb-4 leading-tight">
          Where The Vehicle Stands Today.
        </h2>
        <p class="text-[#94a3b8] text-lg leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          What is actively being built, what is explicitly not happening, and what must be true before activation.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5" style="font-family:'Source Sans Pro',sans-serif;">
        <!-- COLUMN 1: WHAT'S BEING BUILT NOW -->
        <div class="rounded-2xl border overflow-hidden flex flex-col" style="background:#1a1f2e;border-color:rgba(200,169,81,0.32);">
          <div class="px-6 py-5" style="background:rgba(200,169,81,0.08);border-bottom:1px solid rgba(200,169,81,0.25);">
            <div class="flex items-center gap-3 mb-1">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(200,169,81,0.18);border:1px solid rgba(200,169,81,0.4);">
                <i class="fas fa-hammer text-xs" style="color:#C8A951;"></i>
              </div>
              <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;">In Progress</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white leading-tight mt-2" style="font-family:'Playfair Display',Georgia,serif;">What&rsquo;s Being Built Now</h3>
          </div>
          <ul class="p-6 space-y-3 flex-1 list-none m-0">
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>Legal and compliance infrastructure <span class="text-[#94a3b8]">(RIA registration process)</span></span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>E&amp;O insurance and custodian relationships</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>The three-layer portfolio architecture <span class="text-[#94a3b8]">(shown above)</span></span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>Founding member terms, documentation, and onboarding process</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>The edge validation at the Proof layer <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">(10x.ekantikcapital.com)</a></span>
            </li>
          </ul>
        </div>

        <!-- COLUMN 2: WHAT'S NOT HAPPENING YET -->
        <div class="rounded-2xl border overflow-hidden flex flex-col" style="background:#1a1f2e;border-color:rgba(239,68,68,0.28);">
          <div class="px-6 py-5" style="background:rgba(239,68,68,0.07);border-bottom:1px solid rgba(239,68,68,0.22);">
            <div class="flex items-center gap-3 mb-1">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.35);">
                <i class="fas fa-ban text-xs" style="color:#fca5a5;"></i>
              </div>
              <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#fca5a5;">Not Yet</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white leading-tight mt-2" style="font-family:'Playfair Display',Georgia,serif;">What&rsquo;s Not Happening Yet</h3>
          </div>
          <ul class="p-6 space-y-3 flex-1 list-none m-0">
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span>Capital is <strong class="text-white">not</strong> being accepted</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span>Founding member enrollment is <strong class="text-white">not</strong> open</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span><strong class="text-white">No</strong> managed relationships are currently active</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span><strong class="text-white">No</strong> performance is being solicited or promoted</span>
            </li>
          </ul>
        </div>

        <!-- COLUMN 3: WHAT MUST BE TRUE -->
        <div class="rounded-2xl border overflow-hidden flex flex-col" style="background:#1a1f2e;border-color:rgba(59,130,246,0.3);">
          <div class="px-6 py-5" style="background:rgba(59,130,246,0.07);border-bottom:1px solid rgba(59,130,246,0.22);">
            <div class="flex items-center gap-3 mb-1">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(59,130,246,0.16);border:1px solid rgba(59,130,246,0.38);">
                <i class="fas fa-key text-xs" style="color:#93c5fd;"></i>
              </div>
              <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#93c5fd;">Activation Gates</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white leading-tight mt-2" style="font-family:'Playfair Display',Georgia,serif;">What Must Be True Before The Vehicle Activates</h3>
          </div>
          <ul class="p-6 space-y-3 flex-1 list-none m-0">
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-check text-[11px] mt-[5px] flex-shrink-0" style="color:#93c5fd;"></i>
              <span>The 100-trade consistency proof at the Proof layer completes</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-check text-[11px] mt-[5px] flex-shrink-0" style="color:#93c5fd;"></i>
              <span>Setup Quality and Risk Discipline gates pass at thresholds</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-check text-[11px] mt-[5px] flex-shrink-0" style="color:#93c5fd;"></i>
              <span>RIA registration completes and compliance infrastructure is live</span>
            </li>
            <li class="flex items-start gap-3 text-[#cbd5e1] text-[14.5px] leading-relaxed">
              <i class="fas fa-check text-[11px] mt-[5px] flex-shrink-0" style="color:#93c5fd;"></i>
              <span>Founding member documentation and legal structure is in place</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 7: WHY THE DELAY? ════ -->
  <section style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">On Integrity</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white leading-tight">
          Why The Delay?
        </h2>
      </div>

      <div class="space-y-5 text-[#cbd5e1] text-base sm:text-[17px] leading-[1.8] mb-12" style="font-family:'Source Sans Pro',sans-serif;">
        <p>
          Most managed-strategy products launch on backtest data and marketing. Founding members are solicited before the infrastructure to serve them is in place. Results are promised before the execution is proven.
        </p>
        <p class="text-white font-semibold" style="font-family:'Playfair Display',Georgia,serif;font-style:italic;">
          Ekantik is doing the opposite.
        </p>
        <p>
          The Vehicle will not open until three things are simultaneously true: <strong class="text-white">the edge is validated live</strong>, <strong class="text-white">the operator has proven adherence</strong>, and <strong class="text-white">the fiduciary infrastructure is fully operational</strong>. None of these can be rushed. All of them can be watched.
        </p>
        <p>
          The radical-transparency commitment that defines the Ekantik Architecture applies to this page too. It is easier to market a ready-made product than to document a product being built. We are doing the harder thing on purpose.
        </p>
      </div>

      <!-- Pull quote: The delay is the integrity. -->
      <figure class="relative rounded-2xl px-6 sm:px-12 py-10 sm:py-12 text-center" style="background:radial-gradient(ellipse at 50% 0%, rgba(200,169,81,0.08) 0%, rgba(200,169,81,0.02) 70%);border:1px solid rgba(200,169,81,0.32);">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full" style="background:#111827;border:1px solid rgba(200,169,81,0.35);">
          <span class="text-[10px] font-bold uppercase tracking-[0.28em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Pull Quote</span>
        </div>
        <blockquote class="m-0">
          <p style="font-family:'Playfair Display',Georgia,serif;font-weight:400;font-style:italic;color:#C8A951;" class="text-3xl sm:text-[42px] leading-[1.15] mb-0">
            The delay is the integrity.
          </p>
        </blockquote>
      </figure>
    </div>
  </section>

  <!-- ════ SECTION 8: WHAT THIS IS NOT ════ -->
  <section style="background:#0f1420;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Honest Framing</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white leading-tight">
          What This Is Not.
        </h2>
      </div>

      <div class="rounded-2xl p-6 sm:p-8" style="background:rgba(200,169,81,0.05);border-left:3px solid #C8A951;border-top:1px solid rgba(200,169,81,0.18);border-right:1px solid rgba(200,169,81,0.18);border-bottom:1px solid rgba(200,169,81,0.18);">
        <div class="space-y-4 text-[#cbd5e1] text-base sm:text-[17px] leading-[1.8]" style="font-family:'Source Sans Pro',sans-serif;">
          <p>
            EPIG is <strong class="text-white">not risk-free</strong>. All investing involves the possibility of loss. Drawdowns may exceed targets during extreme market dislocations. Past performance is not indicative of future results. The protections described above are <strong class="text-white">design features, not guarantees</strong>.
          </p>
          <p>
            We believe the best way to earn trust is to be honest about risk &mdash; which is why the Proof layer publishes every loss alongside every win.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 9: THE PERSON BEHIND THE PORTFOLIO ════ -->
  <section style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">The Operator</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white leading-tight">
          The Person Behind the Portfolio.
        </h2>
      </div>

      <div class="text-center mb-10">
        <h3 class="text-2xl font-bold text-white mb-1" style="font-family:'Playfair Display',Georgia,serif;">Hiren Desai</h3>
        <p class="text-gray-400" style="font-family:'Source Sans Pro',sans-serif;">Founder &amp; Chief Investment Officer, Ekantik Capital Advisors LLC</p>
      </div>

      <div style="font-family:'Source Sans Pro',sans-serif;" class="space-y-6 text-gray-300 text-base leading-[1.7] mb-12">
        <!-- The Question That Started It All -->
        <div class="rounded-xl bg-white/[0.04] border border-white/10 p-6">
          <h4 class="text-lg font-bold text-white mb-4" style="font-family:'Playfair Display',Georgia,serif;">The Question That Started It All</h4>
          <p>I wasn&rsquo;t working in finance. I was a management consultant at Deloitte focused on <strong class="text-white">cybersecurity</strong> &mdash; analyzing risk, designing resilient systems, and documenting failure modes.</p>
          <p class="mt-3">But I became obsessed with a personal question that had nothing to do with my day job:</p>
          <blockquote class="my-4 pl-5 py-3 rounded-r-lg" style="border-left:3px solid #C8A951;background:rgba(200,169,81,0.06);">
            <p class="text-white italic mb-0">Is there a way to invest without losing money in downturns, while still capturing upside when markets rise?</p>
          </blockquote>
          <p>I looked everywhere. Mutual funds gave me market beta with fees. Hedge funds promised alpha but came with hidden drawdowns. Systematic strategies either chased returns and accepted volatility, or preserved capital and gave up growth.</p>
          <p class="mt-3">No one seemed to be engineering a system with <strong class="text-white">risk control as the foundation, not an afterthought.</strong></p>
          <p class="mt-3">I couldn&rsquo;t find what I was looking for. So I started building it myself &mdash; nights and weekends at Deloitte, while still working in cybersecurity. What began as curious part-time exploration became an obsession I couldn&rsquo;t ignore.</p>
        </div>

        <!-- The All-In Decision -->
        <div class="rounded-xl bg-white/[0.04] border border-white/10 p-6">
          <h4 class="text-lg font-bold text-white mb-4" style="font-family:'Playfair Display',Georgia,serif;">The All-In Decision</h4>
          <p>In 2008, I made the decision: <strong class="text-white">I quit Deloitte to pursue this full-time.</strong></p>
          <p class="mt-3">The part-time tinkering wasn&rsquo;t enough. I needed to go all-in. For <strong class="text-white">5 years</strong>, I did nothing but market modeling &mdash; no corporate job, no safety net, just pure research and system development. I studied market behavior across regimes, ran simulations, documented failure modes, and built what I call <strong class="text-white">reality models</strong>: a structured approach to protecting capital while capturing growth.</p>
          <p class="mt-3">The best metaphor is building aircraft autopilot software. During development, you&rsquo;re not trying to impress anyone with smooth test flights. You&rsquo;re <strong class="text-white">deliberately stress-testing the system</strong>, finding edge cases, documenting what causes failures, and refining controls until behavior is predictable.</p>
          <p class="mt-3">Early prototypes crash in the simulator &mdash; not because they&rsquo;re broken, but because <strong class="text-white">that&rsquo;s how you find what breaks them</strong>. You document failure modes <strong class="text-white">before</strong> passengers board.</p>
          <blockquote class="mt-4 pl-5 py-3 rounded-r-lg" style="border-left:3px solid #C8A951;background:rgba(200,169,81,0.06);">
            <p class="text-white italic mb-0">My cybersecurity background taught me that <strong>resilient systems are built by studying what breaks them, not by hoping they work.</strong></p>
          </blockquote>
        </div>
      </div>

      <!-- Credibility Strip -->
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold text-white" style="font-family:'JetBrains Mono',monospace;">15+</div>
          <div class="text-xs text-gray-400 mt-1">Years in Markets</div>
        </div>
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold text-white">100%</div>
          <div class="text-xs text-gray-400 mt-1">Fiduciary</div>
        </div>
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold" style="color:#C8A951;">&#10003;</div>
          <div class="text-xs text-gray-400 mt-1">Skin in the Game</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 10: FREQUENTLY ASKED QUESTIONS ════ -->
  <section id="faq" style="background:#0f1420;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Questions</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white leading-tight">
          Frequently Asked Questions.
        </h2>
      </div>

      <div class="space-y-3" id="faq-accordion-v2">
        <!-- Q1 (NEW): Why can't I invest yet? -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Why can&rsquo;t I invest yet?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>Three conditions must be true before The Vehicle activates:</p>
              <ol class="space-y-2 pl-5 list-decimal">
                <li>The 100-trade consistency proof at the Proof layer completes and Setup Quality / Risk Discipline gates pass at threshold. Watch progress at <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">10x.ekantikcapital.com</a>.</li>
                <li>Ekantik Capital Advisors completes RIA registration with the appropriate regulators, secures E&amp;O insurance, and establishes custodian relationships.</li>
                <li>Founding member documentation &mdash; subscription agreements, fee structures, performance reporting protocols &mdash; is finalized and ready for onboarding.</li>
              </ol>
              <p class="mb-0">None of these can be rushed. The page will open when all three are true. The waitlist is how you&rsquo;ll be notified.</p>
            </div>
          </div>
        </div>

        <!-- Q2 (UPDATED): Is this real money? (references Proof layer) -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Is this real money?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>Edge validation happens at the Proof layer &mdash; not here. <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">10x.ekantikcapital.com</a> publishes every fill from a live Interactive Brokers account, with each trade carrying a unique IB TradeID. All data comes from IB Flex Query exports &mdash; standardized reports generated directly by Interactive Brokers. Real executions in a real brokerage account; no backtests, no paper trades, no hypotheticals.</p>
              <p class="mb-0">This page (epig) documents the <em>architecture</em> being built. That page (10x) documents the <em>execution</em> being proven.</p>
            </div>
          </div>
        </div>

        <!-- How can I verify the data? -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How can I verify the data?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              The Proof layer at <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="no-underline hover:underline" style="color:#C8A951;">10x.ekantikcapital.com</a> publishes every trade with its IB TradeID. Raw IB Flex Query CSVs can be provided directly, or Interactive Brokers&rsquo; third-party reporting can be configured to deliver brokerage statements straight to your email. No middleman, no edits, no possibility of manipulation.
            </p>
          </div>
        </div>

        <!-- How is capital protected? -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How is capital protected?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              When activated, 70&ndash;85% of capital is designed to sit in the structural floor (SPY, high-quality equities, cash equivalents), with a 1&ndash;3% VaR overlay deployed only when expectancy is positive. Every position has a pre-defined maximum loss. Circuit breakers enforced at trade, day, and week scope shift the portfolio to a defensive posture automatically. No lockup periods.
            </p>
          </div>
        </div>

        <!-- What happens in a 2008-style crash? -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">What happens in a 2008-style crash?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>The design is specifically built for this scenario. When corrections exceed defined thresholds, the structural floor shifts toward cash and Treasury bills, avoiding the deep drawdowns that devastate buy-and-hold portfolios. Market exposure defaults to 0%; exposure is deployed only in brief, capped spikes when expectancy is positive.</p>
              <p class="italic text-gray-500 mb-0">These are design specifications of the architecture, not projections of what any individual account will produce. Whether the design holds in execution is what the Proof layer is currently validating.</p>
            </div>
          </div>
        </div>

        <!-- Who is the operator? -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Who will operate the strategy?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              Hiren Desai, Founder and Chief Investment Officer of Ekantik Capital Advisors. Hiren manages his own capital through the same architecture and executes every trade personally in Interactive Brokers. When The Vehicle activates, founding members will have direct access to the operator making every decision &mdash; not a call center or a junior associate.
            </p>
          </div>
        </div>

        <!-- What about fees? -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">What will it cost?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              Fee structures are part of the founding member documentation currently being finalized. Complete terms will be provided to waitlist members for review before activation. This page does not publish pricing while the infrastructure is still being built.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 11: THE WAITLIST ════ -->
  <section id="waitlist" style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">Status Marker</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-[40px] text-white leading-tight">
          The Waitlist.
        </h2>
      </div>

      <div class="space-y-5 text-[#cbd5e1] text-base sm:text-[17px] leading-[1.8] mb-10" style="font-family:'Source Sans Pro',sans-serif;">
        <p>
          When The Vehicle activates, founding members will be onboarded in the order the waitlist was joined.
        </p>
        <p>
          The waitlist does not accept capital. It collects contact information so we can notify you when activation conditions are met. You are free to leave or join at any time. <strong class="text-white">No commitment is implied.</strong>
        </p>
      </div>

      <!-- Waitlist Form -->
      <div class="rounded-2xl p-6 sm:p-8 mb-10" style="background:#1a1f2e;border:1px solid rgba(200,169,81,0.32);">
        <form id="waitlist-form" class="space-y-4" novalidate>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="wl-name" class="block text-[11px] font-bold uppercase tracking-[0.18em] mb-2" style="color:#94a3b8;font-family:'Source Sans Pro',sans-serif;">Name <span class="text-[#64748b] font-normal normal-case tracking-normal">(optional)</span></label>
              <input type="text" id="wl-name" name="name" autocomplete="name" class="w-full px-4 py-3 rounded-lg text-[15px] text-white placeholder-[#64748b] outline-none transition-colors" style="background:#0f1420;border:1px solid #1e293b;font-family:'Source Sans Pro',sans-serif;" placeholder="Your name">
            </div>
            <div>
              <label for="wl-email" class="block text-[11px] font-bold uppercase tracking-[0.18em] mb-2" style="color:#94a3b8;font-family:'Source Sans Pro',sans-serif;">Email <span style="color:#C8A951;">*</span></label>
              <input type="email" id="wl-email" name="email" required autocomplete="email" class="w-full px-4 py-3 rounded-lg text-[15px] text-white placeholder-[#64748b] outline-none transition-colors" style="background:#0f1420;border:1px solid #1e293b;font-family:'Source Sans Pro',sans-serif;" placeholder="you@example.com">
            </div>
          </div>
          <div>
            <label for="wl-note" class="block text-[11px] font-bold uppercase tracking-[0.18em] mb-2" style="color:#94a3b8;font-family:'Source Sans Pro',sans-serif;">Note <span class="text-[#64748b] font-normal normal-case tracking-normal">(optional)</span></label>
            <textarea id="wl-note" name="note" rows="3" class="w-full px-4 py-3 rounded-lg text-[15px] text-white placeholder-[#64748b] outline-none transition-colors resize-none" style="background:#0f1420;border:1px solid #1e293b;font-family:'Source Sans Pro',sans-serif;" placeholder="Anything you'd like us to know"></textarea>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p class="text-[12px] text-[#64748b] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
              We&rsquo;ll notify you when The Vehicle activates. No drip sequences.
            </p>
            <button type="submit" id="wl-submit" class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-[14px] font-semibold transition-all cursor-pointer border-0" style="background:#C8A951;color:#1B2A4A;">
              <span id="wl-submit-label">Join The Waitlist</span>
              <i class="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          <div id="wl-message" class="hidden rounded-lg px-4 py-3 text-sm" style="font-family:'Source Sans Pro',sans-serif;"></div>
        </form>
      </div>

      <!-- What joining means / does NOT mean -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="rounded-xl p-6" style="background:#0f1420;border:1px solid #1e293b;">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-check text-[13px]" style="color:#C8A951;"></i>
            <h4 class="text-sm font-bold uppercase tracking-[0.18em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">What joining means</h4>
          </div>
          <ul class="space-y-2.5 list-none m-0 p-0 text-[14.5px] text-[#cbd5e1] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            <li class="flex items-start gap-3">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>You&rsquo;ll be notified when The Vehicle activates</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>You&rsquo;ll have priority to review founding member documentation</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-[7px] inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C8A951;"></span>
              <span>You can watch the Proof layer progress in the meantime</span>
            </li>
          </ul>
        </div>
        <div class="rounded-xl p-6" style="background:#0f1420;border:1px solid #1e293b;">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-xmark text-[13px]" style="color:#fca5a5;"></i>
            <h4 class="text-sm font-bold uppercase tracking-[0.18em]" style="color:#fca5a5;font-family:'Source Sans Pro',sans-serif;">What it does NOT mean</h4>
          </div>
          <ul class="space-y-2.5 list-none m-0 p-0 text-[14.5px] text-[#cbd5e1] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            <li class="flex items-start gap-3">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span>You are enrolled in any product</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span>You have committed any capital</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-xmark text-[11px] mt-[5px] flex-shrink-0" style="color:#fca5a5;"></i>
              <span>You have any preferential terms</span>
            </li>
          </ul>
        </div>
      </div>

      <p class="text-center text-[#94a3b8] text-base italic mt-10" style="font-family:'Playfair Display',Georgia,serif;">
        The waitlist is a status-marker, not a sales funnel.
      </p>
    </div>
  </section>

  <!-- ════ SECTION 12: THE EKANTIK ARCHITECTURE FOOTER ════ -->
  <section style="background:#0a0e17;border-top:1px solid #1e293b;">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full" style="background:rgba(200,169,81,0.06);border:1px solid rgba(200,169,81,0.22);">
          <span class="text-[10px] font-bold uppercase tracking-[0.22em]" style="color:#C8A951;font-family:'Source Sans Pro',sans-serif;">The Map</span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;letter-spacing:0.01em;" class="text-2xl sm:text-[32px] text-white leading-tight">
          The Ekantik Architecture.
        </h2>
      </div>

      <div class="rounded-2xl overflow-hidden" style="background:#111827;border:1px solid #1e293b;">
        <!-- Row 1: The Doctrine -->
        <a href="https://doubles.ekantikcapital.com" target="_blank" rel="noopener" class="flex items-center gap-4 px-5 sm:px-7 py-5 no-underline transition-colors border-b border-[#1e293b] hover:bg-white/[0.02]" style="font-family:'Source Sans Pro',sans-serif;">
          <div class="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);">
            <i class="fas fa-check text-[11px]" style="color:#10b981;"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline flex-wrap gap-2">
              <span class="text-white font-semibold text-[15px] sm:text-base" style="font-family:'Playfair Display',Georgia,serif;">The Doctrine</span>
              <span class="text-[10px] font-bold uppercase tracking-[0.18em]" style="color:#10b981;">Active</span>
            </div>
          </div>
          <span class="hidden sm:inline text-[13px] text-[#94a3b8] font-mono">doubles.ekantikcapital.com</span>
          <i class="fas fa-arrow-up-right-from-square text-[11px] flex-shrink-0" style="color:#64748b;"></i>
        </a>

        <!-- Row 2: The Proof -->
        <a href="https://10x.ekantikcapital.com" target="_blank" rel="noopener" class="flex items-center gap-4 px-5 sm:px-7 py-5 no-underline transition-colors border-b border-[#1e293b] hover:bg-white/[0.02]" style="font-family:'Source Sans Pro',sans-serif;">
          <div class="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);">
            <i class="fas fa-check text-[11px]" style="color:#10b981;"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline flex-wrap gap-2">
              <span class="text-white font-semibold text-[15px] sm:text-base" style="font-family:'Playfair Display',Georgia,serif;">The Proof</span>
              <span class="text-[10px] font-bold uppercase tracking-[0.18em]" style="color:#10b981;">Active</span>
            </div>
          </div>
          <span class="hidden sm:inline text-[13px] text-[#94a3b8] font-mono">10x.ekantikcapital.com</span>
          <i class="fas fa-arrow-up-right-from-square text-[11px] flex-shrink-0" style="color:#64748b;"></i>
        </a>

        <!-- Row 3: The Research -->
        <a href="https://alpha.ekantikcapital.com" target="_blank" rel="noopener" class="flex items-center gap-4 px-5 sm:px-7 py-5 no-underline transition-colors border-b border-[#1e293b] hover:bg-white/[0.02]" style="font-family:'Source Sans Pro',sans-serif;">
          <div class="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);">
            <i class="fas fa-check text-[11px]" style="color:#10b981;"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline flex-wrap gap-2">
              <span class="text-white font-semibold text-[15px] sm:text-base" style="font-family:'Playfair Display',Georgia,serif;">The Research</span>
              <span class="text-[10px] font-bold uppercase tracking-[0.18em]" style="color:#10b981;">Active</span>
            </div>
          </div>
          <span class="hidden sm:inline text-[13px] text-[#94a3b8] font-mono">alpha.ekantikcapital.com</span>
          <i class="fas fa-arrow-up-right-from-square text-[11px] flex-shrink-0" style="color:#64748b;"></i>
        </a>

        <!-- Row 4: The Vehicle (you are here) -->
        <div class="flex items-center gap-4 px-5 sm:px-7 py-5" style="background:rgba(200,169,81,0.05);font-family:'Source Sans Pro',sans-serif;">
          <div class="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0" style="background:rgba(200,169,81,0.18);border:1px solid rgba(200,169,81,0.55);">
            <span class="inline-block w-2 h-2 rounded-full" style="background:#C8A951;box-shadow:0 0 8px rgba(200,169,81,0.7);"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline flex-wrap gap-2">
              <span class="text-white font-semibold text-[15px] sm:text-base" style="font-family:'Playfair Display',Georgia,serif;">The Vehicle</span>
              <span class="text-[10px] font-bold uppercase tracking-[0.18em]" style="color:#C8A951;">In Development</span>
              <span class="text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded" style="color:#1B2A4A;background:#C8A951;">You Are Here</span>
            </div>
          </div>
          <span class="hidden sm:inline text-[13px] font-mono" style="color:#C8A951;">epig.ekantikcapital.com</span>
        </div>
      </div>

      <!-- Closing triptych -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center" style="font-family:'Playfair Display',Georgia,serif;">
        <p class="text-[15px] italic" style="color:#C8A951;">The delay is the integrity.</p>
        <p class="text-[15px] italic text-[#e2e8f0]">The architecture is the doctrine.</p>
        <p class="text-[15px] italic text-[#94a3b8]">The Vehicle is the compounding engine.</p>
      </div>
    </div>
  </section>

  <!-- ════ PAGE SCRIPTS ════ -->
  <script>
    // FAQ Accordion
    function toggleFaq(btn) {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !answer.classList.contains('hidden');
      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => { i.classList.remove('fa-minus'); i.classList.add('fa-plus'); });
      // Toggle current
      if (!isOpen) {
        answer.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    }

    // Waitlist form — POST /api/leads/subscribe
    (function initWaitlistForm() {
      const form = document.getElementById('waitlist-form');
      if (!form) return;
      const btn = document.getElementById('wl-submit');
      const label = document.getElementById('wl-submit-label');
      const msgBox = document.getElementById('wl-message');

      function showMessage(text, kind) {
        if (!msgBox) return;
        msgBox.className = 'rounded-lg px-4 py-3 text-sm';
        msgBox.style.fontFamily = "'Source Sans Pro',sans-serif";
        if (kind === 'success') {
          msgBox.style.background = 'rgba(16,185,129,0.08)';
          msgBox.style.border = '1px solid rgba(16,185,129,0.35)';
          msgBox.style.color = '#6ee7b7';
        } else {
          msgBox.style.background = 'rgba(239,68,68,0.08)';
          msgBox.style.border = '1px solid rgba(239,68,68,0.35)';
          msgBox.style.color = '#fca5a5';
        }
        msgBox.textContent = text;
      }

      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('wl-email').value.trim();
        if (!email || email.indexOf('@') === -1) {
          showMessage('Please enter a valid email address.', 'error');
          return;
        }
        if (btn) btn.disabled = true;
        if (label) label.textContent = 'Joining\u2026';
        try {
          const res = await fetch('/api/leads/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
          });
          if (!res.ok) throw new Error('Request failed');
          showMessage("You're on the waitlist. We'll notify you when The Vehicle activates. No commitment is implied.", 'success');
          form.reset();
        } catch (err) {
          showMessage('Something went wrong. Please try again or email info@ekantikcapital.com.', 'error');
        } finally {
          if (btn) btn.disabled = false;
          if (label) label.textContent = 'Join The Waitlist';
        }
      });
    })();

  </script>
  `;
}
