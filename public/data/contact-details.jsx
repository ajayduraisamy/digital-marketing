import { FaPhoneSquareAlt, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "example.com",
    link: "mailto:example.com",
    icon: MdEmail,
  },
  {
    id: 2,
    type: "Phone",
    value: "+91 4456766",
    link: "tel:+4456766",
    icon: FaPhoneSquareAlt,
  },
  {
    id: 3,
    type: "GitHub",
    value: "GitHub",
    link: "https://github.com/",
    icon: FaGithub,
  },
  {
    id: 4,
    type: "Instagram",
    value: "Instagram",
    link: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

export default contactDetails;
