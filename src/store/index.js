import { createStore } from 'vuex';

// const HostedData = "https://kiara-adams.github.io/data/"

export default createStore({
  state: {
    navbar: {
      brand: {
        name: "Kiara Adams",
        logo: "https://kiara-adams.github.io/images/myLogo.png"
      },
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    home: {
      title: "Hi, I'm Kiara Adams",
      subtitle: "An aspiring web developer.",
      socialLinks: [
        { icon: "fab fa-facebook", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-linkedin", href: "" },
        { icon: "fab fa-github", href: "https://github.com/kiara-adams" }
      ],
      profileImg: "https://kiara-adams.github.io/images/20240422_120422.jpg"
    },
    about: {
      title: "About Me",
      description: "As an aspiring web developer, I'm deeply passionate about coding and creating digital experiences. But beyond lines of code, my heart lies in the world of art. Drawing, painting, and designing are not just hobbies for me—they're a part of who I am. I see my creative side as a powerful asset that enhances my web development projects. Whether I'm sketching out wireframes or crafting intricate designs, I bring my unique artistic perspective to every aspect of my work. It's this fusion of technology and creativity that fuels my passion and drives me to constantly push the boundaries of what's possible in the digital realm.",
      image: "https://kiara-adams.github.io/images/20240422_120422.jpg"
    },
    education: [
      {
        institution: "XYZ University",
        degree: "Bachelor of Science in Computer Science",
        year: "2020 - 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis risus sed libero sodales bibendum."
      },
      {
        institution: "ABC High School",
        degree: "High School Diploma",
        year: "2016 - 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis risus sed libero sodales bibendum."
      }
    ],
    skills: [
      { name: "HTML", icon: "fab fa-html5 fa-7x", color: "#612E65" },
      { name: "CSS", icon: "fab fa-css3-alt fa-7x", color: "#734C9A" },
      { name: "Bootstrap", icon: "fab fa-bootstrap fa-7x", color: "#653E7A" }
    ],
    testimonials: [
      {
        image: "https://kiara-adams.github.io/images/",
        feedback: "Kiara is an exceptional developer with a keen eye for detail. Her work ethic and creativity are unmatched.",
        author: "John Doe"
      },
      {
        image: "https://kiara-adams.github.io/images/",
        feedback: "Working with Kiara has been a fantastic experience. She always goes above and beyond.",
        author: "Jane Smith"
      }
    ],
    projects: [
      {
        name: "Project Name 1",
        image: "https://kiara-adams.github.io/images/",
        description: "Project description...",
        hostedLink: "#",
        githubLink: "#"
      },
      {
        name: "Project Name 2",
        image: "https://kiara-adams.github.io/images/",
        description: "Project description...",
        hostedLink: "#",
        githubLink: "#"
      }
    ],
    contact: {
      info: {
        email: "kiara.adams@example.com",
        phone: "(123) 456-7890",
        location: "City, Country"
      },
      form: {
        fields: [
          { type: "text", name: "name", placeholder: "Your Name" },
          { type: "email", name: "email", placeholder: "Your Email" },
          { type: "textarea", name: "message", placeholder: "Your Message", rows: 5 }
        ],
        submitText: "Send Message"
      }
    },
    footer: {
      text: "&copy; 2023 Kiara Adams. All Rights Reserved."
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {}
});
