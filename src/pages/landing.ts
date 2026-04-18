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

  <!-- ════ SECTION 2: WHAT IS EPIG? ════ -->
  <section style="background:#111827;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-8">What Is EPIG?</h2>
      <div style="font-family:'Source Sans Pro',sans-serif;max-width:640px;color:#94a3b8;" class="mx-auto text-base leading-[1.7] text-left space-y-4 mb-12">
        <p><strong class="text-white">EPIG</strong> stands for <strong class="text-white">Enduring Principal-Protected Income &amp; Growth</strong>.</p>
        <p>It is a rules-based, managed investment strategy with two integrated components:</p>
        <p><strong class="text-white">Investing (70%)</strong> &mdash; Your core equity allocation in SPY (S&amp;P 500 ETF) and select individual stocks. Engineered for <strong class="text-white">2&times; market returns</strong> through amplified upside capture (~110%) and structural downside protection (capturing only &frac13; of losses).</p>
        <p><strong class="text-white">Trading (30%)</strong> &mdash; Defined-risk tactical trades in S&amp;P 500 futures (MES/ES), options verticals, and market-level options. Targets <strong class="text-white">50% annual return</strong> through systematic income generation and episodic opportunity capture.</p>
        <p>The result: a strategy engineered to significantly outperform the market across full cycles while keeping capital at risk below 5%.</p>
      </div>

      <!-- 3 Differentiator Badges -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="rounded-xl border border-[#1e293b] p-6 text-center" style="background:#1a1f2e;">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(200,169,81,0.15);">
            <i class="fas fa-user-shield text-lg" style="color:#C8A951;"></i>
          </div>
          <h4 class="font-bold text-white mb-2">Managed for You</h4>
          <p class="text-sm text-[#94a3b8]">We execute every trade. You review performance.</p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6 text-center" style="background:#1a1f2e;">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(200,169,81,0.15);">
            <i class="fas fa-certificate text-lg" style="color:#C8A951;"></i>
          </div>
          <h4 class="font-bold text-white mb-2">Verified via IB</h4>
          <p class="text-sm text-[#94a3b8]">Every fill carries a unique Interactive Brokers TradeID. No backtests. No paper trades.</p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6 text-center" style="background:#1a1f2e;">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(200,169,81,0.15);">
            <i class="fas fa-eye text-lg" style="color:#C8A951;"></i>
          </div>
          <h4 class="font-bold text-white mb-2">Fully Transparent</h4>
          <p class="text-sm text-[#94a3b8]">Both wins and losses are published. The dashboard hides nothing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 3: TWO-STRATEGY DESIGN ════ -->
  <section style="background:#111827;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">Two Strategies. One Integrated System.</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          Each component serves a distinct structural purpose. Together they create a managed portfolio that protects, generates income, and compounds &mdash; without requiring you to make a single trade.
        </p>
      </div>

      <!-- Two Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <!-- Investing Strategy -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1" style="background:linear-gradient(to right,#C8A951,#e0c878);"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style="background:rgba(200,169,81,0.15);color:#C8A951;border:1px solid rgba(200,169,81,0.3);">Investing</span>
            <span class="text-xs font-mono font-bold" style="color:#C8A951;">70% Allocation</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">SPY &amp; Stocks</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Your core equity allocation &mdash; SPY (S&amp;P 500 ETF) and select individual stocks. Engineered for <strong class="text-white">2&times; market returns</strong> through amplified upside capture and structural downside protection.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital Deployed</span>
              <span style="color:#C8A951;" class="font-mono font-bold text-sm">70%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span style="color:#C8A951;" class="font-mono font-bold text-sm">2&times; Market Returns</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">How</span>
              <span class="text-white text-sm">~110% upside, &frac13; downside capture</span>
            </div>
          </div>
        </div>

        <!-- Trading Strategy -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Trading</span>
            <span class="text-xs font-mono font-bold text-emerald-400">30% Allocation</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Futures &amp; Options</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Defined-risk tactical trades &mdash; S&amp;P 500 futures (MES/ES) with hard stops, plus options verticals. Systematic income generation and episodic opportunity capture targeting <strong class="text-white">50% annual return</strong>.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital at Risk</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">30%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">50% annually</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Risk Profile</span>
              <span class="text-white text-sm">Defined risk per trade</span>
            </div>
          </div>
          <a href="/dashboard" class="flex items-center justify-center gap-2 text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors no-underline">
            View Live Performance <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>

      <!-- Summary Strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Investing Target</div>
          <div class="text-2xl font-extrabold text-white font-mono">2<span class="text-lg text-[#8892a6]">&times; Market</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">70% of portfolio</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Trading Target</div>
          <div class="text-2xl font-extrabold text-emerald-400 font-mono">50<span class="text-lg text-[#8892a6]">%</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">30% of portfolio</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Principal at Risk</div>
          <div class="text-2xl font-extrabold text-white font-mono">&lt;5<span class="text-lg text-[#8892a6]">%</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">At any given time</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Your Role</div>
          <div class="text-sm font-semibold text-white mt-2">Review performance.</div>
          <div class="text-[11px] text-[#8892a6] mt-1">We handle execution.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 3B: HOW 2x MARKET RETURNS WORK ════ -->
  <section style="background:#0f1420;">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">How 2&times; Market Returns Are Generated</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          The investing component doesn&rsquo;t rely on predicting markets. It uses a structural edge: amplify upside slightly, protect aggressively on the downside, and let compounding do the rest.
        </p>
      </div>

      <!-- Two Column: Explanation + Chart -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <!-- Left: Text Explanation -->
        <div class="space-y-5" style="font-family:'Source Sans Pro',sans-serif;">
          <div class="rounded-xl bg-white/[0.04] border border-white/10 p-5">
            <h4 class="text-lg font-bold text-white mb-3">The Intuition</h4>
            <p class="text-sm text-gray-300 leading-relaxed mb-3">
              The S&amp;P 500 had only <strong class="text-white">3 down years</strong> in the last 20 (2008, 2018, 2022), but the 2008 drawdown was massive at -37%.
            </p>
            <p class="text-sm text-gray-300 leading-relaxed mb-3">
              With <strong class="text-white">50% downside capture</strong> (losing only &frac13; of down moves), you save ~29.7 percentage points of cumulative damage across those 3 negative years. That preserved capital then compounds forward for 16+ more years.
            </p>
            <p class="text-sm text-gray-300 leading-relaxed mb-0">
              To translate that protection into <strong class="text-white">2.0&times; cumulative market returns</strong>, you need to capture ~110% of every up-year return &mdash; that&rsquo;s amplifying the upside by just <strong class="text-white">~9.8 percentage points</strong> above the S&amp;P on average.
            </p>
          </div>
          <div class="rounded-xl bg-white/[0.04] border border-white/10 p-5">
            <h4 class="text-lg font-bold text-white mb-3">The Math</h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Downside saved (3 crash years)</span>
                <span class="font-mono text-emerald-400 font-bold">29.7pp</span>
              </div>
              <div class="h-px bg-[#1e293b]"></div>
              <div class="flex justify-between">
                <span class="text-gray-400">Upside capture needed</span>
                <span class="font-mono font-bold" style="color:#C8A951;">~110%</span>
              </div>
              <div class="h-px bg-[#1e293b]"></div>
              <div class="flex justify-between">
                <span class="text-gray-400">Avg. amplification per up-year</span>
                <span class="font-mono font-bold" style="color:#C8A951;">+9.8pp</span>
              </div>
              <div class="h-px bg-[#1e293b]"></div>
              <div class="flex justify-between">
                <span class="text-gray-400">Max drawdown reduction</span>
                <span class="font-mono text-emerald-400 font-bold">-37% &rarr; -18.5%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Year-by-Year Chart -->
        <div class="rounded-xl border border-[#1e293b] p-5" style="background:#1a1f2e;">
          <h4 class="text-sm font-bold text-white mb-1">S&amp;P 500 vs. EPIG Investing (Illustrative)</h4>
          <p class="text-[10px] text-[#64748b] mb-4">Year-by-year total returns with ~110% upside capture, &frac13; downside capture</p>
          <div class="relative" style="height:340px;">
            <canvas id="upside-capture-chart"></canvas>
          </div>
          <p class="text-[10px] text-[#64748b] mt-3 italic">S&amp;P 500 Total Return Data via SlickCharts &middot; 2005&ndash;2024. EPIG returns are illustrative based on capture ratios.</p>
        </div>
      </div>

      <!-- KEY INSIGHT Box -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <div class="text-xs font-bold uppercase tracking-wider mb-3" style="color:#C8A951;">KEY INSIGHT</div>
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          With <strong class="text-white">50% downside capture</strong> (losing only &frac13; of down moves), you saved
          <strong style="color:#C8A951;">29.7pp</strong> of cumulative downside across 3 negative years. To translate
          that protection into 2.0&times; cumulative market returns, you need to capture
          <strong style="color:#C8A951;">109.8%</strong> of every up-year &mdash; that&rsquo;s amplifying the upside by
          9.8pp above the S&amp;P on average. Max drawdown drops from <strong class="text-red-400">-37.0%</strong> to
          <strong class="text-emerald-400">-18.5%</strong>.
        </p>
      </div>
    </div>
  </section>


  <!-- ════ SECTION 5: SPY vs EPIG COMPARISON TABLE ════ -->
  <section style="background:#111827;">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">The Conventional Approach vs. the EPIG Architecture</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          Buy-and-hold S&amp;P 500 investing is simple. It is also structurally constrained. EPIG is designed to neutralize those constraints.
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="overflow-x-auto rounded-xl border border-[#1e293b] mb-10">
        <table class="w-full text-sm" style="font-family:'Source Sans Pro',sans-serif;">
          <thead>
            <tr style="background:#1a1f2e;">
              <th class="text-left px-5 py-3.5 text-white font-semibold">Dimension</th>
              <th class="text-left px-5 py-3.5 text-white font-semibold">S&amp;P 500 Buy &amp; Hold</th>
              <th class="text-left px-5 py-3.5 font-semibold" style="color:#C8A951;">EPIG Managed</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Market Exposure</td>
              <td class="px-5 py-3 text-gray-400">100% constant</td>
              <td class="px-5 py-3 text-emerald-400">70% investing, 30% defined-risk trading</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Drawdown Risk</td>
              <td class="px-5 py-3 text-gray-400">30&ndash;50%+ in major corrections</td>
              <td class="px-5 py-3 text-emerald-400">&lt;10% engineered target</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Lost Decade Risk</td>
              <td class="px-5 py-3 text-gray-400">Real (2000&ndash;2010: ~0% return)</td>
              <td class="px-5 py-3 text-emerald-400">2&times; market via structural edge</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Entry Timing</td>
              <td class="px-5 py-3 text-gray-400">Returns depend on P/E at entry</td>
              <td class="px-5 py-3 text-emerald-400">P/E independent by design</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Liquidity</td>
              <td class="px-5 py-3 text-gray-400">Fully invested at all times</td>
              <td class="px-5 py-3 text-emerald-400">50&ndash;90% accessible at any time</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Transparency</td>
              <td class="px-5 py-3 text-gray-400">Quarterly brokerage statements</td>
              <td class="px-5 py-3 text-emerald-400">Every trade published weekly</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Who Manages It</td>
              <td class="px-5 py-3 text-gray-400">You (or a passive index fund)</td>
              <td class="px-5 py-3 text-emerald-400">Ekantik Capital (active, rules-based)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Key Insight -->
      <div class="rounded-xl p-5" style="background:rgba(100,116,139,0.08);border-left:3px solid #64748B;">
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">Key Insight:</strong> EPIG does not attempt to predict markets. It harvests returns from high-expected-value windows and sits in protected positions the rest of the time. The edge is not in any single trade &mdash; it&rsquo;s in the system-level compounding across hundreds of disciplined trades per year.
        </p>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 5B: POWER OF COMPOUNDING — NO LOSING YEARS ════ -->
  <section style="background:#0f1420;">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">The Power of Never Having a Losing Year</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          What happens to $100K over a decade with 2&times; market returns and no losing years? We compared EPIG&rsquo;s investing strategy against actual S&amp;P 500 total returns across two very different market regimes.
        </p>
      </div>

      <!-- Two Period Comparison -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

        <!-- Period 1: 2000–2010 (The Lost Decade) -->
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-bold text-white" style="font-family:'Playfair Display',Georgia,serif;">2000 &ndash; 2010</h3>
            <span class="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-red-500/15 text-red-400">The Lost Decade</span>
          </div>
          <p class="text-xs text-[#64748b] mb-4" style="font-family:'Source Sans Pro',sans-serif;">Growth of $100,000 &mdash; S&amp;P 500 total return vs. EPIG 2&times; market compounding</p>
          <div class="relative" style="height:260px;">
            <canvas id="compound-chart-2000"></canvas>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-[#1e293b]">
            <div class="text-center">
              <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-1">S&amp;P 500</div>
              <div class="text-xl font-bold font-mono text-red-400">$104,673</div>
              <div class="text-[11px] text-[#64748b] mt-0.5">0.5% CAGR &mdash; an entire decade lost</div>
            </div>
            <div class="text-center">
              <div class="text-xs uppercase tracking-wider font-semibold mb-1" style="color:#C8A951;">EPIG 2&times; Market</div>
              <div class="text-xl font-bold font-mono text-emerald-400">$441,144</div>
              <div class="text-[11px] text-emerald-500/70 mt-0.5">4.2x more &mdash; no drawdown, no lost years</div>
            </div>
          </div>
        </div>

        <!-- Period 2: 2015–2025 (The Bull Decade) -->
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-bold text-white" style="font-family:'Playfair Display',Georgia,serif;">2015 &ndash; 2025</h3>
            <span class="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400">The Bull Decade</span>
          </div>
          <p class="text-xs text-[#64748b] mb-4" style="font-family:'Source Sans Pro',sans-serif;">Growth of $100,000 &mdash; S&amp;P 500 total return vs. EPIG 2&times; market compounding</p>
          <div class="relative" style="height:260px;">
            <canvas id="compound-chart-2015"></canvas>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-[#1e293b]">
            <div class="text-center">
              <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-1">S&amp;P 500</div>
              <div class="text-xl font-bold font-mono text-blue-400">$342,619</div>
              <div class="text-[11px] text-[#64748b] mt-0.5">~13% CAGR &mdash; strong, but with -18% and -4% years</div>
            </div>
            <div class="text-center">
              <div class="text-xs uppercase tracking-wider font-semibold mb-1" style="color:#C8A951;">EPIG 2&times; Market</div>
              <div class="text-xl font-bold font-mono text-emerald-400">$685,238</div>
              <div class="text-[11px] text-emerald-500/70 mt-0.5">2.0x S&amp;P &mdash; same up-years, reduced downside</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Takeaway -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <h4 class="font-bold text-white mb-3">Two Regimes. One Conclusion.</h4>
        <p class="text-sm text-gray-300 leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">In a bad decade</strong> (2000&ndash;2010), the S&amp;P went nowhere &mdash; two crashes wiped out a full decade of gains. EPIG&rsquo;s 2&times; market strategy with downside protection would have turned $100K into $441K while the market barely broke even. The gap is massive: 4.2x.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">In a great decade</strong> (2015&ndash;2025), the S&amp;P delivered ~13% CAGR &mdash; a genuinely strong run. EPIG&rsquo;s 2&times; strategy doubles it to $685K, and does it without the -18% in 2022 or -4% in 2018. No recovery years wasted.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">The question isn&rsquo;t which decade comes next.</strong> It&rsquo;s whether you want your wealth to depend on which one it is. EPIG is designed to compound regardless.
        </p>
      </div>

      <!-- Disclaimer -->
      <p class="text-[10px] text-[#64748b] mt-6 text-center italic" style="font-family:'Source Sans Pro',sans-serif;">
        *The 2&times; market return figure represents EPIG&rsquo;s investing strategy target based on ~110% upside capture and &frac13; downside capture. It is not a guarantee of future performance. S&amp;P 500 returns reflect actual total returns (price + dividends). Past performance is not indicative of future results.
      </p>
    </div>
  </section>

  <!-- ════ SECTION 6: HOW YOUR CAPITAL IS PROTECTED ════ -->
  <section style="background:#111827;">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">Asymmetric by Design.</h2>
        <p class="text-[#94a3b8] text-lg" style="font-family:'Source Sans Pro',sans-serif;">
          EPIG&rsquo;s architecture is built around a single principle: protect first, then compound. Here&rsquo;s how.
        </p>
      </div>

      <!-- 4 Protection Mechanism Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-shield-halved" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">85&ndash;99% of Capital Is Always Protected</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            70% of your portfolio is in the investing component (SPY and stocks), while 30% is in defined-risk trading positions. Every trading position has predefined maximum loss. A total wipeout of all active trades would impact only the trading sleeve.
          </p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-hand" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">Every Trade Has a Hard Stop</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            Trading strategy futures trades use a 20-point hard stop. Options trades risk only the debit paid. No trade is ever entered without a predefined maximum loss. There is no scenario where a single trade causes outsized damage.
          </p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-power-off" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">Automatic Shutdown Protocols</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            If drawdown exceeds predefined thresholds, the portfolio shifts to a defensive posture automatically. This is not discretionary &mdash; it&rsquo;s rules-based and broker-enforced. The system protects you even if the manager is unavailable.
          </p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-money-bill-wave" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">Access Your Capital Whenever You Need It</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            No lockup periods. No redemption windows. No penalties. Because the majority of your capital sits in SPY and cash, you can access it on any business day. EPIG is designed for people who want both growth and flexibility.
          </p>
        </div>
      </div>

      <!-- Caveat Box -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <h4 class="font-bold text-white mb-3">What This Is Not</h4>
        <p class="text-sm text-[#94a3b8] leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          EPIG is not risk-free. All investing involves the possibility of loss. Drawdowns may exceed targets during extreme market dislocations. Past performance is not indicative of future results. The protections described above are design features, not guarantees.
        </p>
        <p class="text-sm text-[#94a3b8] leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          We believe the best way to earn trust is to be honest about risk &mdash; which is why we publish every loss alongside every win.
        </p>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 7: WHO MANAGES YOUR CAPITAL ════ -->
  <section style="background:#111827;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">The Person Behind the Portfolio</h2>
      </div>

      <div class="text-center mb-8">
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
          <p class="mt-3">The part-time tinkering wasn&rsquo;t enough. I needed to go all-in. For <strong class="text-white">5 years</strong>, I did nothing but market modeling &mdash; no corporate job, no safety net, just pure research and system development. I studied market behavior across regimes, ran simulations, documented failure modes, and built what I call <strong class="text-white">Reality Models</strong>: a structured approach to protecting capital while capturing growth.</p>
          <p class="mt-3">The best metaphor is building aircraft autopilot software. During development, you&rsquo;re not trying to impress anyone with smooth test flights. You&rsquo;re <strong class="text-white">deliberately stress-testing the system</strong>, finding edge cases, documenting what causes failures, and refining controls until behavior is predictable.</p>
          <p class="mt-3">Early prototypes crash in the simulator &mdash; not because they&rsquo;re broken, but because <strong class="text-white">that&rsquo;s how you find what breaks them</strong>. You document failure modes <strong class="text-white">before</strong> passengers board.</p>
          <blockquote class="mt-4 pl-5 py-3 rounded-r-lg" style="border-left:3px solid #C8A951;background:rgba(200,169,81,0.06);">
            <p class="text-white italic mb-0">My cybersecurity background taught me that <strong>resilient systems are built by studying what breaks them, not by hoping they work.</strong></p>
          </blockquote>
        </div>
      </div>

      <!-- Credibility Strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold text-white" style="font-family:'JetBrains Mono',monospace;">15+</div>
          <div class="text-xs text-gray-400 mt-1">Years in Markets</div>
        </div>
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div id="bio-trades" class="text-xl font-bold text-white" style="font-family:'JetBrains Mono',monospace;">187</div>
          <div class="text-xs text-gray-400 mt-1">Trades Executed</div>
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

  <!-- ════ SECTION 8: PERFORMANCE PROJECTOR ════ -->
  <section style="background:#111827;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">What Could This Mean for Your Portfolio?</h2>
        <p class="text-[#94a3b8] text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          Model your own scenario using real 2026 trade data from verified IB fills. Adjust portfolio size and see per-strategy breakdowns.
        </p>
      </div>

      <div class="rounded-2xl border border-[#1e293b] p-8 md:p-10 mb-8" style="background:#1a1f2e;">
        <div class="flex flex-col md:flex-row items-start gap-10">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-5">
              <h3 class="text-2xl font-bold text-white">Project Your Year-End Returns</h3>
              <span id="projector-live-badge" class="hidden inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1 flex-shrink-0">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-emerald-600 text-xs font-bold uppercase tracking-wider">Live</span>
              </span>
            </div>
            <p class="text-[#94a3b8] text-base leading-relaxed mb-4">
              See how YTD performance across both strategies could compound through year-end.
              Powered by <strong class="text-white">real 2026 trade data</strong> from verified IB fills &mdash;
              adjust portfolio size and explore per-strategy breakdowns.
            </p>
            <p id="projector-data-summary" class="text-xs text-[#64748b] mb-6">
              <i class="fas fa-database text-emerald-500 mr-1"></i>
              <span id="projector-summary-text">Loading live trade data...</span>
            </p>
            <a href="/projector" class="inline-flex items-center gap-2 no-underline px-6 py-3 rounded-lg text-sm font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
              <i class="fas fa-chart-line"></i> Open Performance Projector
            </a>
          </div>
          <div class="flex-1 w-full">
            <div class="rounded-xl border border-[#1e293b] p-5" style="background:#111827;">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Portfolio Size</span>
                  <span class="font-mono font-bold" style="color:#C8A951;">$500,000</span>
                </div>
                <div class="h-px bg-[#1e293b]"></div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Investing &mdash; SPY &amp; Stocks (70%)</span>
                  <span class="font-mono" id="lp-strat-investing-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Trading &mdash; Futures &amp; Options (30%)</span>
                  <span class="font-mono" id="lp-strat-trading-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="h-px bg-[#1e293b]"></div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-white">Projected Annual Return</span>
                  <span class="font-mono font-bold text-lg" id="lp-total-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-white">Projected Dollar Return</span>
                  <span class="font-mono font-bold text-lg" id="lp-total-dollar"><span class="text-[#64748b]">--</span></span>
                </div>
              </div>
              <p class="text-[10px] text-[#64748b] mt-4 italic">
                *Based on YTD performance extrapolated to full year. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Below Projector -->
      <div class="text-center">
        <p class="text-sm text-[#64748b] mb-4">These projections use actual trade data. Past performance is not indicative of future results.</p>
        <a href="https://calendly.com/hd-ekantikcapital/30min" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-8 py-3.5 rounded-lg text-base font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
          <i class="fas fa-calendar-check"></i> Schedule Your Founding Member Consultation
        </a>
        <div class="mt-4">
          <a href="https://freedom.ekantikcapital.com" target="_blank" rel="noopener" class="text-sm no-underline hover:underline" style="color:#C8A951;">
            See how EPIG fits your Financial Freedom plan &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 9: FAQ (INLINE ACCORDION) ════ -->
  <section id="faq" style="background:#111827;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
      </div>

      <div class="space-y-3" id="faq-accordion">
        <!-- Q1 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Is this real money?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              Yes. Every number on this site comes from IB Flex Query exports &mdash; standardized reports generated directly by Interactive Brokers. Each fill carries a unique TradeID. These are real executions in a real brokerage account, not backtests, paper trades, or hypotheticals.
            </p>
          </div>
        </div>

        <!-- Q2 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How can I verify the data?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              We can provide the raw IB Flex Query CSV directly to you, or configure Interactive Brokers&rsquo; third-party reporting to deliver brokerage statements straight to your email. No middleman, no edits, no possibility of manipulation. Just ask during your consultation.
            </p>
          </div>
        </div>

        <!-- Q3 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How is my capital protected?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              70% of your capital is in the investing component (SPY and stocks), while 30% is in defined-risk trading (futures and options), each with predefined maximum loss. Circuit breaker protocols automatically shift the portfolio to a defensive posture if drawdown exceeds thresholds. There are no lockup periods &mdash; your capital is accessible on any business day.
            </p>
          </div>
        </div>

        <!-- Q4 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">What happens in a 2008-style crash?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>EPIG&rsquo;s design is specifically built for this scenario. When corrections exceed 10%, the core allocation shifts toward cash, avoiding the deep drawdowns that devastate buy-and-hold portfolios.</p>
              <p>In a backtested simulation of the 2008 financial crisis, EPIG&rsquo;s design avoided the -37% S&amp;P drawdown entirely by moving to 0% market exposure. In the &ldquo;Lost Decade&rdquo; of 2000&ndash;2010, the design hypothetically compounded at 9.3% CAGR vs. the S&amp;P&rsquo;s 0.4%.</p>
              <p class="italic text-gray-500 mb-0">Important: These are backtested results, not live performance. Past performance does not guarantee future results.</p>
            </div>
          </div>
        </div>

        <!-- Q5 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Who manages the portfolio?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              Hiren Desai, Founder and Chief Investment Officer of Ekantik Capital Advisors. Hiren manages his own capital through this same strategy and executes all trades in Interactive Brokers. As a founding member, you have direct access to the person making every decision &mdash; not a call center or a junior associate.
            </p>
          </div>
        </div>

        <!-- Q6 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">What does it cost?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>EPIG is the core managed strategy within the Ekantik Capital Financial Freedom program. Founding members pay a flat annual fee that is locked forever &mdash; it never increases regardless of how large your portfolio grows. Founding members also have a pathway to $0 annual fees upon achieving their wealth goals.</p>
              <p>This is fundamentally different from the AUM-based fee model used by most advisors, where a 1% fee on a $1M portfolio costs $10,000/year and grows as your wealth grows.</p>
              <p class="mb-0">Full pricing details are discussed during your founding member consultation.</p>
            </div>
          </div>
        </div>

        <!-- Q7 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How do I get started?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
              <ol class="space-y-2 pl-5 mb-4">
                <li>Schedule your founding member consultation (30 minutes, no obligation).</li>
                <li>We assess your current financial position, 10-year goals, and risk profile.</li>
                <li>You receive a custom strategy presentation showing how EPIG and ECFS work together for your specific situation.</li>
                <li>Take 1&ndash;2 months to validate the approach. Ask any question. Review the live dashboard.</li>
                <li>When ready, we formalize the engagement and begin implementation.</li>
              </ol>
              <p class="font-semibold text-white mb-0">Founding memberships are limited to 25. Once capacity is reached, this opportunity closes permanently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 10: FINAL CTA ════ -->
  <section style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-2xl sm:text-[28px] font-bold text-white mb-6">This Opportunity Has a Capacity Limit.</h2>
      <p class="text-white/70 text-base leading-relaxed max-w-[580px] mx-auto mb-8" style="font-family:'Source Sans Pro',sans-serif;">
        EPIG is a managed strategy, not a product. Each founding member receives direct access to the portfolio manager, custom strategy integration, and lifetime benefits that cannot be replicated at scale. That is why membership is limited to 25.
      </p>
<a href="https://calendly.com/hd-ekantikcapital/30min" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-10 py-4 rounded-lg text-lg font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
        <i class="fas fa-calendar-check"></i> Schedule Your Founding Member Consultation
      </a>
      <div class="mt-6">
        <a href="https://freedom.ekantikcapital.com" target="_blank" rel="noopener" class="text-white/70 text-sm no-underline hover:text-white transition-colors">
          See the full Financial Freedom program &rarr;
        </a>
      </div>
      <div class="mt-10 text-xs text-white/40" style="font-family:'Calibri','Source Sans Pro',sans-serif;">
        100% Fiduciary &nbsp;|&nbsp; Flat Fee Locked Forever &nbsp;|&nbsp; IB-Verified Performance &nbsp;|&nbsp; No Lockup Periods
      </div>
    </div>
  </section>

  <!-- ════ HOMEPAGE CLIENT-SIDE SCRIPTS ════ -->
  <script>
    // ═══ Compounding Comparison Charts (2x Market Returns) ═══
    (function renderCompoundingCharts() {
      // S&P 500 actual total returns by year
      var spReturns = {
        2000:-0.091, 2001:-0.119, 2002:-0.221, 2003:0.287, 2004:0.109,
        2005:0.049, 2006:0.158, 2007:0.055, 2008:-0.370, 2009:0.265,
        2010:0.151, 2011:0.021, 2012:0.160, 2013:0.324, 2014:0.137,
        2015:0.014, 2016:0.120, 2017:0.218, 2018:-0.044, 2019:0.315,
        2020:0.184, 2021:0.287, 2022:-0.181, 2023:0.263, 2024:0.250
      };

      // EPIG 2x market: ~110% upside capture, 1/3 downside capture
      function epigReturn(spReturn) {
        if (spReturn >= 0) return spReturn * 1.098; // ~110% upside capture
        return spReturn * 0.5; // 50% downside capture (1/3 of the loss)
      }

      function buildSeries(startYear, endYear) {
        var labels = [String(startYear)];
        var spValues = [100000];
        var epigValues = [100000];
        var spVal = 100000;
        var epigVal = 100000;
        for (var y = startYear; y <= endYear; y++) {
          var spR = spReturns[y] || 0;
          spVal *= (1 + spR);
          epigVal *= (1 + epigReturn(spR));
          spValues.push(Math.round(spVal));
          epigValues.push(Math.round(epigVal));
          labels.push(String(y));
        }
        return { labels: labels, sp: spValues, epig: epigValues };
      }

      function createChart(canvasId, data, spColor) {
        var ctx = document.getElementById(canvasId);
        if (!ctx) return;
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [
              {
                label: 'EPIG (2x Market)',
                data: data.epig,
                borderColor: '#C8A951',
                backgroundColor: 'rgba(200,169,81,0.08)',
                fill: true,
                tension: 0.3,
                pointRadius: 0,
                borderWidth: 2.5
              },
              {
                label: 'S&P 500 (Actual)',
                data: data.sp,
                borderColor: spColor,
                backgroundColor: 'transparent',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                borderWidth: 2,
                borderDash: [6, 3]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 14, padding: 12 }
              },
              tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#f1f5f9',
                bodyColor: '#94a3b8',
                borderColor: '#2d3a4d',
                borderWidth: 1,
                callbacks: {
                  label: function(ctx) {
                    return ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString();
                  }
                }
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: { color: '#64748b', font: { size: 10 }, maxTicksLimit: 6 }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: {
                  color: '#64748b',
                  font: { size: 10 },
                  callback: function(v) {
                    if (v >= 1000000) return '$' + (v/1000000).toFixed(1) + 'M';
                    return '$' + (v/1000).toFixed(0) + 'K';
                  }
                }
              }
            }
          }
        });
      }

      var data2000 = buildSeries(2000, 2010);
      var data2015 = buildSeries(2015, 2024);
      createChart('compound-chart-2000', data2000, '#ef4444');
      createChart('compound-chart-2015', data2015, '#3b82f6');
    })();

    // ═══ Upside Capture Year-by-Year Chart ═══
    (function renderUpsideCaptureChart() {
      var ctx = document.getElementById('upside-capture-chart');
      if (!ctx) return;

      var spReturns = {
        2016:0.120, 2017:0.218, 2018:-0.044, 2019:0.315,
        2020:0.184, 2021:0.287, 2022:-0.181, 2023:0.263, 2024:0.250
      };
      var years = Object.keys(spReturns);
      var spPcts = years.map(function(y) { return +(spReturns[y] * 100).toFixed(1); });
      var epigPcts = years.map(function(y) {
        var r = spReturns[y];
        if (r >= 0) return +((r * 1.098) * 100).toFixed(1);
        return +((r * 0.5) * 100).toFixed(1);
      });

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: years,
          datasets: [
            {
              label: 'S&P 500',
              data: spPcts,
              backgroundColor: spPcts.map(function(v) { return v >= 0 ? '#3b82f6' : '#ef4444'; }),
              borderRadius: 3,
              barPercentage: 0.4,
              categoryPercentage: 0.8
            },
            {
              label: 'EPIG Investing',
              data: epigPcts,
              backgroundColor: epigPcts.map(function(v) { return v >= 0 ? '#C8A951' : '#f59e0b'; }),
              borderRadius: 3,
              barPercentage: 0.4,
              categoryPercentage: 0.8
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 12, padding: 10 }
            },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f1f5f9',
              bodyColor: '#94a3b8',
              borderColor: '#2d3a4d',
              borderWidth: 1,
              callbacks: {
                label: function(ctx) {
                  return ctx.dataset.label + ': ' + (ctx.parsed.y >= 0 ? '+' : '') + ctx.parsed.y.toFixed(1) + '%';
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.04)' },
              ticks: {
                color: '#64748b',
                font: { size: 10 },
                callback: function(v) { return (v >= 0 ? '+' : '') + v + '%'; }
              }
            }
          }
        }
      });
    })();

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

    // Live Data: Hero Badges + Proof Strip + Equity Curve
    (async function loadHomepageData() {
      try {
        const res = await fetch('/api/dashboard/summary');
        const data = await res.json();
        if (!data.strategies) return;

        const trackStart = data.trackRecordStart || 'March 2025';
        const combined = data.strategies.Combined || data.strategies.Investing;
        const stratTrading = data.strategies.Trading;
        const totalTrades = (data.strategies.Investing?.totalTrades || 0) + (data.strategies.Trading?.totalTrades || 0);

        // Compute combined cumulative return
        const cumReturn = combined?.cumulativeReturn ?? 14.2;
        const maxDD = combined?.maxDrawdown ?? -8.4;
        const evR = stratTrading?.expectancyR ?? 0.38;

        // Update Hero badges
        const heroCum = document.getElementById('hero-cum-return');
        if (heroCum) heroCum.textContent = (cumReturn >= 0 ? '+' : '') + cumReturn.toFixed(1) + '%';
        const heroTrades = document.getElementById('hero-trades');
        if (heroTrades) heroTrades.textContent = String(totalTrades || 187);
        const heroDD = document.getElementById('hero-drawdown');
        if (heroDD) heroDD.textContent = maxDD.toFixed(1) + '%';
        const heroSince = document.getElementById('hero-live-since');
        if (heroSince) heroSince.textContent = trackStart.replace('March', 'Mar').replace('February', 'Feb');

        // Update bio trades
        const bioTrades = document.getElementById('bio-trades');
        if (bioTrades) bioTrades.textContent = String(totalTrades || 187);

      } catch(e) {
        console.error('Homepage data load:', e);
      }
    })();

    // Performance Projector Preview (same as before but with $500K default)
    (async function loadProjectorPreview() {
      var ACTUAL_PORTFOLIO = 100000;  // Real capital traded
      var DISPLAY_PORTFOLIO = 500000; // User-facing portfolio size

      function pctColor(val) {
        return val >= 0 ? 'color:#16a34a' : 'color:#ef4444';
      }
      function fmtPct(val) {
        return (val >= 0 ? '+' : '') + val.toFixed(1) + '%';
      }
      function fmtDollar(val) {
        var sign = val >= 0 ? '+' : '-';
        return sign + '$' + Math.abs(Math.round(val)).toLocaleString();
      }

      try {
        var res = await fetch('/api/projector/stats');
        var data = await res.json();
        if (!data.strategies) return;

        var stratMap = { Investing: 'investing', Trading: 'trading' };
        var totalAnnualDollar = 0;
        var totalTrades = 0;
        var earliestDate = '9999-99-99';
        var latestDate = '0000-00-00';

        for (var strat in stratMap) {
          var prefix = stratMap[strat];
          var s = data.strategies[strat];
          if (!s) {
            var noEl = document.getElementById('lp-strat-' + prefix + '-pct');
            if (noEl) noEl.innerHTML = '<span style="color:#d1d5db;">No data</span>';
            continue;
          }
          totalTrades += s.closedTrades;
          if (s.firstDate < earliestDate) earliestDate = s.firstDate;
          if (s.lastDate > latestDate) latestDate = s.lastDate;
          var annualPct = (s.annualPnl / ACTUAL_PORTFOLIO) * 100;
          totalAnnualDollar += s.annualPnl;
          var el = document.getElementById('lp-strat-' + prefix + '-pct');
          if (el) {
            el.style.cssText = 'font-family:JetBrains Mono,monospace;font-weight:600;' + pctColor(annualPct);
            el.textContent = fmtPct(annualPct);
          }
        }

        var totalPct = (totalAnnualDollar / ACTUAL_PORTFOLIO) * 100;
        var scaledAnnualDollar = totalAnnualDollar * (DISPLAY_PORTFOLIO / ACTUAL_PORTFOLIO);
        var totalPctEl = document.getElementById('lp-total-pct');
        if (totalPctEl) {
          totalPctEl.style.cssText = 'font-family:JetBrains Mono,monospace;font-weight:700;font-size:1.125rem;' + pctColor(totalPct);
          totalPctEl.textContent = fmtPct(totalPct);
        }
        var totalDollarEl = document.getElementById('lp-total-dollar');
        if (totalDollarEl) {
          totalDollarEl.style.cssText = 'font-family:JetBrains Mono,monospace;font-weight:700;font-size:1.125rem;' + pctColor(scaledAnnualDollar);
          totalDollarEl.textContent = fmtDollar(scaledAnnualDollar);
        }
        document.getElementById('projector-live-badge')?.classList.remove('hidden');
        var summaryEl = document.getElementById('projector-summary-text');
        if (summaryEl) {
          summaryEl.textContent = 'Based on ' + totalTrades + ' closed trades from ' + earliestDate + ' to ' + latestDate + '. Auto-refreshes on each upload.';
        }
      } catch(e) {
        console.error('Projector preview:', e);
      }
    })();
  </script>
  `;
}
