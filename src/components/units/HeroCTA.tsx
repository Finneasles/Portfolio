import { Button } from "@/components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

const Component = () => {
  const socials = [
    { id: "linkedin", href: "https://www.linkedin.com/in/fin-a-aa4475267/" },
    { id: "github", href: "https://github.com/finneasles/" },
    { id: "npmjs", href: "https://www.npmjs.com/~finneas28" },
  ];
  return (
    <div className="flex flex-col drop-shadow-md">
      <div>
        <Button
          className="px-6"
          href="/about"
          size="sm"
          onClick={(e) => {
            const subject = encodeURIComponent("Let's Have a Chat");
            const body = encodeURIComponent(
              `Hi there,%0D%0A%0D%0AI came across your website and I'd love to discuss ideas with you and have a chat.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`
            );
            window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            e.preventDefault();
          }}
          variant="heroPrimary"
        >
          👋 Let&apos;s Chat
        </Button>
      </div>
      <div className="content-center py-2">
        <span className="my-2 h-[32px] text-xs font-bold uppercase text-white md:mx-2 md:my-0">
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
