import { CgPerformance } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { FaChartLine, FaBullhorn } from "react-icons/fa6";
import {
  SiGoogleads,
  SiMailchimp,
  SiHootsuite,
  SiSemrush,
  SiCanva,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb"; // can reuse as generic tool icon

const expertise = [
  {
    id: 1,
    title: "SEO & SEM",
    icons: [SiSemrush, CgPerformance, SiGoogleads],
    description:
      "Learn how to optimize websites for search engines (SEO) and run paid search campaigns (SEM) to increase organic and paid traffic. Focus on keyword research, on-page optimization, and analytics-driven strategies.",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    icons: [SiHootsuite, FaBullhorn],
    description:
      "Master social media platforms like Facebook, Instagram, LinkedIn, and Twitter to engage audiences, build brand awareness, and create effective content campaigns with measurable results.",
  },
  {
    id: 3,
    title: "Email & Content Marketing",
    icons: [SiMailchimp, SiCanva],
    description:
      "Learn to design compelling email campaigns, craft content marketing strategies, and utilize marketing automation tools to nurture leads and increase conversions.",
  },
  {
    id: 4,
    title: "Analytics & Performance Optimization",
    icons: [CgPerformance, SiGoogleads],
    description:
      "Measure and optimize marketing performance using analytics tools. Learn A/B testing, conversion tracking, ROI analysis, and performance improvement strategies for digital campaigns.",
  },
  {
    id: 5,
    title: "Marketing Tools & Workflow",
    icons: [SiGoogleads, TbBrandVscode, FaTools],
    description:
      "Get hands-on with essential marketing tools such as Google Ads, Canva, Hootsuite, and automation platforms. Learn workflow optimization and campaign management best practices.",
  },
];

export default expertise;
