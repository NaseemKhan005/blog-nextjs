import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <BsFacebook />,
      url: "https://www.facebook.com/profile.php?id=100017192357822",
    },
    {
      id: 1,
      icon: <AiFillGithub />,
      url: "https://github.com/NaseemKhan005",
    },
    {
      id: 1,
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/naseem-khan-275275258/",
    },
    {
      id: 1,
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/naseem_khan005",
    },
  ];
  const date = new Date().getFullYear();
  return (
    <div className="flexBetween mt-10 border-t py-8 flex-col sm:flex-row text-center gap-2">
      <div>
        <p>© {date} Naseem Khan - All rights reserved</p>
      </div>

      <div className="flexCenter gap-2 text-xl">
        {socialIcons.map(({ id, icon, url }) => (
          <Link
            href={url}
            key={id}
            className="cursor-pointer hover:-translate-y-1 transition-all text-neutral-600"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
