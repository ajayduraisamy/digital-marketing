import { FaChartLine, FaBullhorn, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGoogleads, SiHootsuite, SiMailchimp, SiCanva, SiSemrush, SiHubspot } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "SEO & SEM Campaign Project",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343387/eng_doufvw.jpg",
    description:
      "Hands-on project to design and execute SEO and Google Ads campaigns. Learn keyword research, on-page optimization, ad creation, and performance tracking using analytics tools.",
    technologies: [SiSemrush, SiGoogleads, FaChartLine],
    githubLinks: [
      {
        label: "Resources",
        url: "#",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 2,
    name: "Social Media Marketing Project",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343388/ai-agent_vzocoi.jpg",
    description:
      "Create and manage social media campaigns across Facebook, Instagram, and LinkedIn. Learn content scheduling, audience targeting, and engagement strategies using tools like Hootsuite and Canva.",
    technologies: [FaFacebook, FaInstagram, SiHootsuite, SiCanva, FaBullhorn],
    githubLinks: [
      {
        label: "Resources",
        url: "#",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 3,
    name: "Email & Automation Marketing Project",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343388/attentance_aj2csl.jpg",
    description:
      "Design effective email marketing campaigns, automate workflows, and measure results using tools like Mailchimp and HubSpot. Learn segmentation, A/B testing, and conversion optimization.",
    technologies: [SiMailchimp, SiHubspot, FaEnvelope],
    githubLinks: [
      {
        label: "Resources",
        url: "#",
      },
    ],
    liveDemoLinks: [],
  },
];

export default projects;
