import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";


const socials = [
{ icon: <FaGithub />, path: "https://github.com/makaveli2P" },
{ icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/dhruvagarwal0/" },
// { icon: <FaYoutube />, path: "" },
// { icon: < FaTwitter />, path: "" },
];

const Social = ({containerStyles, iconStyles}) => {
return (
  <div className= {containerStyles}>
    {socials.map((item, index) => {
      return(
      <Link target="_blank" key = {index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
    );
    })}
</div>
);
};
export default Social;