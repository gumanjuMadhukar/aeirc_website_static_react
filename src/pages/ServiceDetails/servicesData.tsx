export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  lists: string[],
  // delay: string;
}

export const services: Service[] = [
  {
    id: "Computer-Based Test Services",
    icon: "fa-solid fa-computer",
    title: "Computer-Based Test (CBT) Services",
    description:
      "AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions.",
    detail: "AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions capable of accommodating more than 2,000 candidates per day in its three soundproof air-conditioned CBT exam labs. Our CBT solutions include",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.1s",
  },
  {
    id: "Server-Hosting",
    icon: "fa-solid fa-server",
    title: "Server Infrastructure & Hosting",
    description:
      "Our solid server infrastructure underpins secure and effective client operations.",
    detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.3s",
  },
  {
    id: "Application-Development",
    icon: "fa-globe",
    title: "Software Application and Development",
    description:
      "The organization is into dedicated software development, providing customized high-impact solutions to various industries.",
    detail:
      "AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions capable of accommodating more than 2,000 candidates per day in its three soundproof air-conditioned CBT exam labs. Our CBT solutions include",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    //  delay: "0.5s",
  },
  {
    id: "IT-Infrastructure Services",
    icon: "fa-book-open",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC provides fully integrated IT consulting and infrastructure services.",
    detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.7s",
  },
  {
    id: "Infrastructure-Hosting",
    icon: "fa-globe",
    title: "Server Infrastructure & Hosting",
    description:
      "AEIRC provides fully integrated IT consulting and infrastructure services to aid the acceleration of digital transformation.",
    detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.3s",
  },
  {
    id: "Telemedicine-Health",
    icon: "fa-notes-medical",
    title: "Telemedicine & Health Technology",
    description:
      "AEIRC leads in health technology and provides unique solutions to improve healthcare access and outcomes.",
    detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.3s",
  },
  {
    id: "AI-Robotics",
    icon: "fa-solid fa-robot",
    title: "AI & Robotics Education",
    description:
      "AEIRC is pioneering AI and robotics education to prepare the next generation for a technology-driven future",
    detail:
      "More about AEIRC server infrastructure, scalability and security standards...",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.7s",
  },
  {
    id: "Research-Innovation-Capacity",
    icon: "fa-solid fa-magnifying-glass",
    title: "Research, Innovation & Capacity Building",
    description:
      "AEIRC is committed to advancing research and fostering innovation.",
    detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    lists:[
    "Secure testing environment",
    "Scalable infrastructure",
    "Real-time result processing",
    "Candidate identity verification",
  ],
    // delay: "0.7s",
  },
];
