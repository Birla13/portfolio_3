/**
 * Site-wide content: navigation, contact details and social links.
 * Edit here once and every page picks it up.
 */

export const SITE_NAME = "Deepanshi Birla";

export const EMAIL = "deepsbirla13@gmail.com";

export const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1WBdP6vvq6CRw_SfYYYMsrVAlaW0YV-gJ/view";

/**
 * Pages shown in the header and footer navigation.
 * Use `to` for a page on this site, or `href` for an external link (opens in a new tab).
 */
export const NAV_LINKS = [
  { label: "Projects", to: "/projects" },
  { label: "Resume", href: RESUME_PDF_URL },
  { label: "About me", to: "/about" },
];

/** Social profiles. `icon` matches an export name in components/Icons.jsx. */
export const SOCIAL_LINKS = [
  { label: "Dribbble", icon: "dribbble", href: "https://dribbble.com/Deepanshi13" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/deepanshibirla/",
  },
  { label: "Gmail", icon: "gmail", href: `mailto:${EMAIL}` },
];
