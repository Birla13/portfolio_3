import { DribbbleIcon, LinkedInIcon, GmailIcon } from "./Icons";

const FOOTER_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "About me", href: "/about" },
  // { label: "Licensing", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const SOCIAL_LINKS = [
    {
      icon: <DribbbleIcon />,
      label: "Dribbble",
      href: "https://dribbble.com/Deepanshi13",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deepanshibirla/",
    },
    {
      icon: <GmailIcon />,
      label: "Gmail",
      href: "mailto:deepanshi@example.com",
    },
    // { icon: <XIcon />, label: "X", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__left">
          {/* <a href="#" className="footer__brand">
            Deepanshi Birla
          </a> */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="footer__nav-link">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__right">
          {SOCIAL_LINKS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="footer__social-btn"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__divider container" />
      <div className="footer__copy container">
        Copyright {year} by Deepanshi Birla
      </div>
    </footer>
  );
}
