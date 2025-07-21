const { default: Link } = require("next/link");
import Image from "next/image";

const NavLink = ({ href, src, title, target, rel, alt }) => {
  return (
    <Link href={href} className="flex items-center gap-2 hover:underline hover:underline-offset-4" target={target} rel={rel}>
      <Image src={src} width={16} height={16} alt={alt}/>
      {title}
    </Link>
  );
};

export default NavLink;
