import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ImNpm } from "react-icons/im";
import { Button } from "@/components";

const Component = ({ src }: { src?: string }) => {
  const { t } = useTranslation();

  const socials = [
    { id: "linkedin", href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
    { id: "github", href: process.env.NEXT_PUBLIC_GITHUB_URL },
    { id: "npmjs", href: process.env.NEXT_PUBLIC_NPMJS_URL },
  ];

  const letsChat = (e: { preventDefault: () => void }) => {
    const subject = encodeURIComponent("Let's Have a Chat");
    const body = encodeURIComponent(
      `Hi Fin,\n\nI hope this email finds you well. My name is [Your Name] from [Company], I recently came across your website and I'd love to discuss potential projects & ideas with you.\n\nPlease let me know if you are interested in exploring this collaboration further. I am enthusiastic about the possibility of working together and making an impact in [relevant field or industry].\n\n[Additional details]\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    e.preventDefault();
  };

  const learnMore = (e: { preventDefault: () => void }) => {
    const subject = encodeURIComponent("Let's Have a Chat");
    const body = encodeURIComponent(
      `Hi Fin,\n\nI hope this email finds you well. My name is [Your Name] from [Company], I recently came across your website and I'd love to learn more about you and your work.\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    e.preventDefault();
  };

  return (
    <div className="flex flex-col drop-shadow-md">
      <div>
        {src !== "404" ? (
          <Button
            className="px-12"
            href="/about"
            size="sm"
            onClick={src == "about" ? learnMore : letsChat}
            variant="heroPrimary"
          >
            {src == "about"
              ? t("learnMore_label")
              : src == "projects"
              ? t("projectCTA_label")
              : t("letsChat_label")}
          </Button>
        ) : (
          <Button className="px-12" href="/" size="sm" variant="heroPrimary">
            🏠 {t("home_label")}
          </Button>
        )}
      </div>
      <div className="content-center">
        <span className="text-xs font-bold uppercase text-white md:mx-2">
          or
        </span>
      </div>{" "}
      <div className="space-x-2">
        {socials.map((link) => (
          <Button
            key={link.id}
            className="px-3"
            href={link.href}
            target="_blank"
            ariaLabel="Contact me"
            icon={
              link.id === "linkedin" ? (
                <FaLinkedin />
              ) : link.id === "github" ? (
                <FaGithub />
              ) : link.id === "npmjs" ? (
                <ImNpm />
              ) : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Component;
