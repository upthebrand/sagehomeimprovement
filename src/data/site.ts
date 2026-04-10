export const siteName = 'Sage Home Improvements';

/**
 * GTM container ID (`GTM-…`). Used when `PUBLIC_GTM_CONTAINER_ID` / `GTM_CONTAINER_ID` are unset at build time.
 * Netlify env vars still override this when set (see `GoogleTagManager.astro`).
 */
export const gtmContainerId = 'GTM-KMNK6CCC';

/** Public contact email (also used in schema.org). */
export const siteEmail = 'terry@sagehomeimprove.com';

export const sitePhone = {
	tel: '14109787243',
	display: '(410) 978-SAGE (7243)',
} as const;

/** E.164 for structured data (tel link uses digits only). */
export const sitePhoneE164 = '+14109787243';

/**
 * Link to the Google reviews listing for Sage Home Improvements.
 * Paste the Google Business Profile "reviews" link here.
 */
export const googleReviewsUrl =
	'https://www.google.com/search?q=' + encodeURIComponent('Sage Home Improvements Perry Hall reviews');
