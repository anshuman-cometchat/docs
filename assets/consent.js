/* ------------------------------------------------------------------ */
/* Consent gating for analytics                                       */
/*                                                                    */
/* Default-deny Google Consent Mode v2 before GTM loads, restore any  */
/* prior choice from localStorage, and bridge the existing HubSpot    */
/* cookie banner to consent updates. Pairs with the removal of        */
/* `integrations.gtm` from docs.json — this script is the sole loader */
/* of GTM-59ZJRV2 on docs.cometchat.com, so GA4 (G-M5KZ2NFCYL) cannot */
/* fire `collect` requests until the user clicks Accept All.          */
/* ------------------------------------------------------------------ */
(function initConsentGate() {
    // Prevent double-initialization on client-side navigation. Critical:
    // re-running gtag('consent','default') after a prior 'update' would
    // silently reset a previously-granted state back to denied.
    try {
        if (window.__ccConsentGateInitialized__) return;
        window.__ccConsentGateInitialized__ = true;
    } catch (_) { return; }

    var GTM_ID = 'GTM-59ZJRV2';
    var STORAGE_KEY = 'cc_consent';

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    // 1) Default-deny BEFORE GTM loads. GA4 in GTM respects Consent Mode v2
    //    automatically, so this alone blocks the analytics.google.com/g/collect
    //    hit pre-consent. wait_for_update gives the banner 500ms to send an
    //    explicit choice before any deferred tags evaluate.
    gtag('consent', 'default', {
        ad_storage:         'denied',
        ad_user_data:       'denied',
        ad_personalization: 'denied',
        analytics_storage:  'denied',
        wait_for_update:    500
    });

    function applyConsent(granted) {
        var v = granted ? 'granted' : 'denied';
        gtag('consent', 'update', {
            ad_storage:         v,
            ad_user_data:       v,
            ad_personalization: v,
            analytics_storage:  v
        });
        try { window.localStorage.setItem(STORAGE_KEY, v); } catch (_) {}
    }

    // 2) Restore previously-recorded choice on return visits.
    try {
        var saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === 'granted') applyConsent(true);
        else if (saved === 'denied') applyConsent(false);
    } catch (_) {}

    // 3) Bridge the cookie banner via DOM click events. We intentionally do
    //    NOT use HubSpot's _hsp.addPrivacyConsentListener: it fires immediately
    //    on registration with HubSpot's *implicit* consent state, which on
    //    domains where HubSpot decides no banner is needed (e.g. preview
    //    deployments) means allowed:true — auto-granting without any user
    //    action. Listening for actual button clicks is the only way to gate
    //    consent on user intent.
    function classifyClick(target) {
        if (!target || !target.closest) return null;

        // HubSpot stock banner selectors (id-based, most reliable when present)
        if (target.closest('#hs-eu-confirmation-button, [data-hs-eu-confirmation-button]')) return true;
        if (target.closest('#hs-eu-decline-button, [data-hs-eu-decline-button]'))           return false;

        // Text-based fallback for any banner whose buttons match the
        // visible labels rendered today.
        var btn = target.closest('button, [role="button"]');
        if (!btn) return null;
        var txt = (btn.textContent || '').trim().toLowerCase();
        if (txt === 'accept all' || txt === 'accept all cookies' || txt === 'allow all') return true;
        if (txt === 'decline all' || txt === 'reject all' || txt === 'decline')          return false;
        return null;
    }

    document.addEventListener('click', function (e) {
        var result = classifyClick(e.target);
        if (result === true)  applyConsent(true);
        if (result === false) applyConsent(false);
    }, true);

    // 4) Load GTM AFTER default-deny is registered.
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0];
        var j = d.createElement(s);
        var dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        if (f && f.parentNode) {
            f.parentNode.insertBefore(j, f);
        } else {
            (d.head || d.documentElement).appendChild(j);
        }
    })(window, document, 'script', 'dataLayer', GTM_ID);
})();
