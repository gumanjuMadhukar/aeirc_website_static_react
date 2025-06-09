// export interface Service { ... }
// export const services: Service[] = [ ... ];


export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  delay: string;
}

export const services: Service[] = [
  {
    id: "1",
    icon: "fa-solid fa-computer",
    title: "Computer-Based Test (CBT) Services",
    description:
      "AEIRC is Nepal’s premier and most trusted provider of secure, scalable, and reliable computer-based testing solutions.",
    detail: "This is the full detail about CBT services offered by AEIRC...",
    delay: "0.1s",
  },
  {
    id: "2",
    icon: "fa-solid fa-server",
    title: "Server Infrastructure & Hosting",
    description:
      "Our solid server infrastructure underpins secure and effective client operations.",
    detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.3s",
  },
   {
    id: "3",
    icon: "fa-globe",
    title: "Software Application and Development",
    description:
      "The organization is into dedicated software development, providing customized high-impact solutions to various industries.",
       detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.5s",
  },
  {
    id: "4",
    icon: "fa-book-open",
    title: "IT Consulting & Infrastructure Services",
    description:
      "AEIRC provides fully integrated IT consulting and infrastructure services.",
       detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.7s",
  },
  {
    id: "5",
    icon: "fa-globe",
    title: "Server Infrastructure & Hosting",
    description:
      "AEIRC provides fully integrated IT consulting and infrastructure services to aid the acceleration of digital transformation.",
       detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.3s",
  },
  {
    id: "6",
    icon: "fa-notes-medical",
    title: "Telemedicine & Health Technology",
    description:
      "AEIRC leads in health technology and provides unique solutions to improve healthcare access and outcomes.",
       detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.3s",
  },
  {
    id: "7",
    icon: "fa-solid fa-robot",
    title: "AI & Robotics Education",
    description:
      "AEIRC is pioneering AI and robotics education to prepare the next generation for a technology-driven future",
       detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.7s",
  },
  {
    id: "8",
    icon: "fa-solid fa-magnifying-glass",
    title: "Research, Innovation & Capacity Building",
    description:
      "AEIRC is committed to advancing research and fostering innovation.",
       detail:
      "More about AEIRC’s server infrastructure, scalability and security standards...",
    delay: "0.7s",
  },
];
