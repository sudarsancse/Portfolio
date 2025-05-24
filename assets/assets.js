import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import certificate_icon from "./certificate-icon.png";
import certificate_dark from "./certificate-dark-icon.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import website from "./world-wide-web.png";
import python from "./python.png";
import backend from "./backend.png";
import responsive_design from "./responsive-design.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import postmen from "./postman-icon.png";
import docker from "./docker-icon.png";
import node_js from "./nodejs.png";

export const assets = {
  node_js,
  docker,
  postmen,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  certificate_icon,
  certificate_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  website,
  python,
  backend,
  responsive_design,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Real-Estate",
    description: "Web Design",
    bgImage: "/work-1.png",
    link: "https://real-estate-gvqm.onrender.com/",
  },
  {
    title: "Snake-game",
    description: "Python Gaming",
    bgImage: "/work-2.png",
    link: "https://github.com/sudarsancse/100-Days-Of-Python/tree/main/Day%2020-21",
  },
  {
    title: "E-Commerces site",
    description: "Web Design",
    bgImage: "/work-3.png",
    link: "https://github.com/sudarsancse/ECommerces",
  },
  {
    title: "Turtle Racing game",
    description: "Python Code",
    bgImage: "/work-4.png",
    link: "https://github.com/sudarsancse/100-Days-Of-Python/tree/main/Day%2023",
  },
];

export const serviceData = [
  {
    icon: assets.website,
    title: "Web design",
    description:
      "Web development is the process of building, programming, and maintaining websites and web applications.",
    link: "",
  },
  {
    icon: assets.python,
    title: "Python Programming",
    description:
      "Python programming involves writing, testing, and debugging code in Python for various applications, including data analysis, web development, and automation.",
    link: "",
  },
  {
    icon: assets.backend,
    title: "Backend Developer",
    description:
      "Backend development focuses on server-side logic, databases, APIs, and the infrastructure that powers web applications.",
    link: "",
  },
  {
    icon: assets.responsive_design,
    title: "Responsive Design",
    description:
      "Responsive design ensures that web applications look and function seamlessly across various devices and screen sizes, from desktops to mobile phones.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, React Js, Next Js, Python, Express, Tailwind CSS, Bootstrap CSS, MongoDB, Node.js, Rest Api,",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: (
      <>
        B.Tech in Computer Science (CITNC)
        <br />
        Diploma in Computer Science and Technology (SCP)
      </>
    ),
  },
  {
    icon: assets.certificate_icon,
    iconDark: assets.certificate_dark,
    title: "Certificates",
    description: (
      <>
        Microsoft Azure Fundamentals (Azure)
        <br />
        Full Stack Web Development (Udemy)
        <br />
        Python Programming - Udemy (Ongoing)
      </>
    ),
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
  assets.postmen,
  assets.docker,
  assets.node_js,
];
