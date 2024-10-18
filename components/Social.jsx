import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook} from "react-icons/fa";

const socials =[
{icon: < FaFacebookF/>,path:"https://www.facebook.com/knowledge.matambura?mibextid=ZbWKwL"},
{icon: < FaLinkedinIn/>,path:"https://www.linkedin.com/in/knowledge-matambura"},
{icon: < FaYoutube/>,path:"https://www.youtube.com/@lifetracer4842"},
{icon: < FaTwitter/>,path:"https://x.com/cullestkid_zw"},
];
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
            );})}
    </div>
  )
}

export default Social;