(function () {
  "use strict";

  const D = window.REPORT_DATA;
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  const compact = (value, limit = 150) => {
    const text = String(value || "");
    return text.length > limit ? text.slice(0, limit - 1) + "..." : text;
  };
  const splitList = (value) => String(value || "")
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);
  const chips = (items, limit = 5) => items.slice(0, limit)
    .map((item) => `<span class="mini-chip">${escapeHtml(item)}</span>`)
    .join("");

  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const video = document.querySelector(".hero__video");
  if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.pause();
    video.removeAttribute("autoplay");
  }

  if (D) {
    renderPrompts();
    renderCompetitors();
    renderConfidence();
    renderSources();
    renderRisks();
    renderTickets();
  }

  function renderPrompts() {
    const target = $("#promptRows");
    if (!target) return;
    target.innerHTML = D.prompts.map((p) => {
      const isGoogle = p.prompt_id.startsWith("G20-");
      return `
        <tr>
          <td><span class="row-id ${isGoogle ? "row-id--google" : ""}">${escapeHtml(p.prompt_id)}</span></td>
          <td>
            <strong>${escapeHtml(p.prompt_text)}</strong>
            <div class="row-sub">${escapeHtml(p.buyer_segment)} / ${escapeHtml(p.persona)}</div>
          </td>
          <td>
            <span class="mini-chip">${escapeHtml(p.intent || p.prompt_category)}</span>
            <div class="row-sub">${escapeHtml(p.funnel_stage)} / ${escapeHtml(p.use_case)}</div>
          </td>
          <td>${chips(splitList(p.competitor_set), 4) || '<span class="row-sub">none primary</span>'}</td>
          <td>
            ${escapeHtml(p.notes)}
            <div class="row-sub">${escapeHtml(compact(p.expected_ideal_answer, 120))}</div>
          </td>
        </tr>
      `;
    }).join("");
  }

  function renderCompetitors() {
    const target = $("#competitorGrid");
    if (!target) return;
    target.innerHTML = D.competitors.slice(0, 18).map((c) => `
      <article class="competitor-card reveal">
        <div class="competitor-card__top">
          <h3>${escapeHtml(c.name)}</h3>
          <span>${c.count} lane${c.count === 1 ? "" : "s"}</span>
        </div>
        <p>Appears in: ${escapeHtml(c.prompts.join(", "))}</p>
        <div class="mini-chip-row">${chips(c.lanes, 4)}</div>
      </article>
    `).join("");
  }

  function renderConfidence() {
    const target = $("#confidenceGrid");
    if (!target) return;
    target.innerHTML = D.confidence.map((f) => `
      <article class="finding-card reveal">
        <div class="finding-card__meta">
          <span class="row-id">${escapeHtml(f.finding_id)}</span>
          <span class="confidence confidence--${escapeHtml(f.confidence_label)}">${escapeHtml(f.confidence_label)}</span>
        </div>
        <h3>${escapeHtml(f.finding)}</h3>
        <p>${escapeHtml(f.client_reporting_language)}</p>
        <small>${escapeHtml(f.primary_evidence)}</small>
      </article>
    `).join("");
  }

  function renderSources() {
    const target = $("#sourceRows");
    if (!target) return;
    target.innerHTML = D.sources.map((s) => `
      <article class="source-row reveal">
        <div class="source-score source-score--${escapeHtml(s.label)}">${escapeHtml(s.score)}/4</div>
        <div>
          <div class="source-row__head">
            <h3>${escapeHtml(s.source_group)}</h3>
            <span>${escapeHtml(s.label.replaceAll("_", " "))}</span>
          </div>
          <p>${escapeHtml(s.rationale)}</p>
          <div class="row-sub">Observed in: ${escapeHtml(s.observed_in)}</div>
          <div class="row-sub">Next action: ${escapeHtml(s.next_action)}</div>
        </div>
      </article>
    `).join("");
  }

  function renderRisks() {
    const target = $("#riskRows");
    if (!target) return;
    target.innerHTML = D.risks.map((r) => `
      <article class="risk-row reveal">
        <div>
          <span class="row-id">${escapeHtml(r.risk_id)}</span>
          <span class="severity severity--${escapeHtml(r.severity)}">${escapeHtml(r.severity)} / ${escapeHtml(r.priority)}</span>
        </div>
        <div>
          <h3>${escapeHtml(r.claim_type.replaceAll("_", " "))}</h3>
          <p>${escapeHtml(r.business_risk)}</p>
          <div class="row-sub">Evidence: ${escapeHtml(r.prompt_id)} / ${escapeHtml(r.surface)} / ${escapeHtml(r.cited_source)}</div>
          <div class="row-sub">Recommended fix: ${escapeHtml(r.recommended_fix)}</div>
        </div>
      </article>
    `).join("");
  }

  function renderTickets() {
    const target = $("#ticketRows");
    if (!target) return;
    target.innerHTML = D.tickets.map((t) => `
      <article class="ticket-row reveal">
        <div class="ticket-row__num">${escapeHtml(t.id)}</div>
        <div>
          <div class="ticket-row__head">
            <h3>${escapeHtml(t.title)}</h3>
            <span>${escapeHtml(t.priority)}</span>
          </div>
          <p>${escapeHtml(t.impact)}</p>
          <div class="row-sub">Affected: ${escapeHtml(t.affected)}</div>
          <div class="row-sub">Fix: ${escapeHtml(t.fix)}</div>
          <div class="mini-chip-row">${chips(t.criteria || [], 4)}</div>
        </div>
      </article>
    `).join("");
  }

  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((node) => observer.observe(node));
    } else {
      reveals.forEach((node) => node.classList.add("is-visible"));
    }
  };
  reveal();
})();
