import { Project } from "@/types";

function mshot(url: string, width = 1200) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

export const projects: Project[] = [
  {
    title: "GLE5",
    description:
      "Join thousands of happy customers who own their dream products through our easy EMI plan.",
    image: mshot("https://www.gle5.com/"),
    tech: ["EMI Selling Platform"],
    live: "https://www.gle5.com/",
  },
  {
    title: "Dazzle Lighting",
    description:
      "Welcome to Dazzle Lighting Solutions — your trusted source for premium LED lighting solutions that combine style, performance, and efficiency.",
    image: mshot("https://www.dazzlelighting.in/"),
    tech: ["Lighting Company"],
    live: "https://www.dazzlelighting.in/",
  },
  {
    title: "Shivshakti India Plywood",
    description:
      "Trusted by 500+ plywood manufacturers, saw mills, and wood processing industries. We deliver innovative, durable, and efficient woodworking machinery that maximizes your production capacity.",
    image: mshot("https://www.shivshaktiindiaplywood.com/"),
    tech: ["Plywood Company"],
    live: "https://www.shivshaktiindiaplywood.com/",
  },
  {
    title: "Prisha Entertainment",
    description:
      "Delivering high-quality electrical control panels, automation solutions, and industrial electrical services tailored for diverse industrial needs across India.",
    image: mshot("https://www.prishaent.com/"),
    tech: ["Electric Control Panel"],
    live: "https://www.prishaent.com/",
  },
  {
    title: "Akash Ladder",
    description:
      "Akash Ladder is India trusted manufacturer of high-quality ladders for industrial, commercial, and household use. Built for safety, designed for durability.",
    image: mshot("https://www.akashladder.in/"),
    tech: ["Ladder Company"],
    live: "https://www.akashladder.in/",
  },
  {
    title: "Rivers Aviation Academy",
    description:
      "From Cabin Crew excellence to MBA in Aviation Management. We shape the future leaders of the global aviation industry.",
    image: mshot("https://www.riversaviationacademy.co.in/"),
    tech: ["Aviation Company"],
    live: "https://www.riversaviationacademy.co.in/",
  },
  {
    title: "Maniik Enterprises",
    description:
      "Reliable, cost-effective and professional IT, networking, web development, digital marketing, and facility management services for commercial & industrial clients.",
    image: mshot("https://www.maniikenterprises.com/"),
    tech: ["IT & Facility Services"],
    live: "https://www.maniikenterprises.com/",
  },
];

