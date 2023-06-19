import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";

export const routes = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "How it works",
    path: "#how",
  },
  {
    name: "About Us",
    path: "#about",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

export const analytics = [
  {
    name: "Access the grants",
    desc: "Apply",
    link:"https://www.makeinroads.org/get-involved/grants",
  },
  {
    name: "Support Inroads",
    desc: "Donate",
    link:"https://www.makeinroads.org/get-involved/donate",
  },
  {
    name: "Be a member",
    desc: "Join",
    link:"https://www.makeinroads.org/get-involved/join-inroads",
  },
];

export const features = [
  "Hitamo",
  "Amahitamo Yawe",
  "Umubiri Wawe",
  "Ejo Hazaza Hawe",
];

export const controls = [
  {
    name: "Structured Reports",
    icon: SiGooglepodcasts,
  },
  {
    name: "Cloud System",
    icon: AiFillCloud,
  },
  {
    name: "24/7 Support",
    icon: AiOutlineClockCircle,
  },
];
