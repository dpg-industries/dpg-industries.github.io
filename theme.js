/* ─── Curious Chimp — Theme Toggle ─────────────────────────────
   Shared across all pages. Load with <script src="theme.js"></script>
   at the bottom of <body>.
─────────────────────────────────────────────────────────────── */

(function () {
  const html = document.documentElement;

  /* Restore saved preference immediately (no flash) */
  const saved = localStorage.getItem('cc-theme') || 'light';
  html.setAttribute('data-theme', saved);

  /* Wire up the toggle button once the DOM is ready */
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('cc-theme', next);
    });
  });
})();
