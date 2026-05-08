import { DribbbleIcon, LinkedInIcon, GmailIcon } from "./Icons";

export default function SocialIcons({ dark = false }) {
  const SOCIALS = [
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
      href: "mailto:deepsbirla13@gmail.com",
    },
  ];

  return (
    <div className="social-icons hide">
      {SOCIALS.map(({ icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`social-icon-btn${dark ? " social-icon-btn--dark" : ""}`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
