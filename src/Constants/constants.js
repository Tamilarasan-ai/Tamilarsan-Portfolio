/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	
	calculator,
	cssIcon,
	
	figmaIcon,
	gitIcon,
	githubIcon,
	htmlIcon,

	jsIcon,
	memoryGame,
	nodeIcon,
	pawsitivePrototype,
	mongIcon,
	reactIcon,
	viteIcon,
	ardIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,

	
	gitIcon,
	githubIcon,

	viteIcon,
	nodeIcon,
	
	figmaIcon,
	avatar,
	ardIcon,
	mongIcon,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hello there, I'm so happy you are here! (:",

		"My name is Tamilarasan, I'm 20 and a third year Mechanical and Mechatronics Engineering student based in Coimbatore. I have a strong passion for the technologies related to the Fullstack and AI.",

		"Outside of my regular activities, I'm into drawing Portraits whenever I have some free time. I'm also a huge cinephile and enjoy playing Basketfull for fun.",
		"I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
	],
};

export const navLinks = [
	
	{
		id: "about",
		title: "About",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "projects",
		title: "Projects",
	},
	
	{
		id: "contact",
		title: "Contact",
	},
];
 
const resume = [
	{
		href:"https://drive.google.com/file/d/1UFUP3EBQTrumxoUxTvPWfSrwO_8wRQqh/view?usp=sharing"
	}
]

const projects = [



	{
		name: "Business-Portfolio",
		description:
			"An Chit fund Business portfolio to showcase their business and other functionality featured with an Dashboard",
		image: memoryGame,
		source_code_link: "https://github.com/RatheeshCoder/chit-fund",
		demo_link: "https://chit-fund-abua.vercel.app/",
	},
	{
		name: "Scrapy Home",
		description:
			" web platform designed to transform the scrap materials industry. Addressing the industry's longstanding challenges of fragmentation, inefficiency, and lack of transparency, this innovative solution serves as a centralized marketplace connecting scrap buyers and sellers.",
		image: pawsitivePrototype,
		source_code_link: "https://github.com/Tamilarasan-ai/Scrapy-Homes.git",
		demo_link:
			"",
	},
	{
		name: "Notching Machine",
		description:
			"A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
		image: calculator,
		source_code_link: "",
		demo_link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7087418495465893888",
	},
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
	},
	
	{
		id: "figma",
		title: "Figma",
		icon: figmaIcon,
		description:
			"In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "psql",
		title: "MongoDB",
		icon: mongIcon,
		description:
			"I have a strong command of MongoDB, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity.",
	},
	{
		id: "vite",
		title: "Vite",
		icon: viteIcon,
		description:
			"I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Vebrose.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
	},
	
	{
		id: "raspi",
		title: "Ardiuno",
		icon:ardIcon,
		description:
			"To monitor and Prediction based problem solving methodolgy using IOT An arduino control board is an user friendly keyway.",
	},
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
