<template>
  <div id="app">
    <Navbar :navbar="navbarData" />
    <Home :home="homeData" />
    <About :about="aboutData" />
    <Education :education="educationData" />
    <Skills :skills="skillsData" />
    <Testimonials :testimonials="testimonialsData" />
    <Projects :projects="projectsData" />
    <Contact />
    <Footer :socialLinks="socialLinks" />
  </div>
</template>

<script>
import Navbar from './components/NavComp.vue';
import Home from './views/HomeView.vue';
import About from './components/AboutComp.vue';
import Education from './components/EducationComp.vue';
import Skills from './components/SkillsComp.vue';
import Testimonials from './components/TestimonialComp.vue';
import Projects from './components/ProjectsComp.vue';
import Contact from './components/ContactsComp.vue';
import Footer from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Education,
    Skills,
    Testimonials,
    Projects,
    Contact,
    Footer
  },
  data() {
    return {
      navbarData: {
        brand: {
          name: "Kiara Adams",
          logo: "https://kiara-adams.github.io/images/myLogo.png"
        },
        links: [
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Education", href: "#education" },
          { name: "Skills", href: "#skills" },
          { name: "Testimonials", href: "#testimonials" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" }
        ]
      },
      homeData: {
        title: "Hi, I'm Kiara Adams",
        subtitle: "An aspiring web developer.",
        socialLinks: [
          { icon: "fab fa-facebook", href: "#" },
          { icon: "fab fa-twitter", href: "#" },
          { icon: "fab fa-linkedin", href: "#" }
        ],
        profileImg: "https://kiara-adams.github.io/images/profile.jpg"
      },
      aboutData: {
        title: "About Me",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat magna.",
        image: "https://kiara-adams.github.io/images/20240422_120422.jpg"
      },
      educationData: [
        { institution: "Glendale High school", degree: "matric certificate", year: "2019-2023", description: "Matriculated Glendale in 2023" },
        { institution: "Coding Academy", degree: "Web Development Bootcamp", year: "2024", description: " A coding course focusing on fullstack development." }
      ],
      skillsData: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'GitHub', icon: 'fab fa-github' },
      ],
      testimonialsData: [
        { image: "https://kiara-adams.github.io/images/tyra.jpg", feedback: "Since meeting Kiara, she has made an impact on me as both a colleague and a friend. She is a vibrant and determined individual. I had the pleasure of experiencing these lovely attributes while collaborating with her and I know that any workplace would be lucky to have Kiara on their team.", author: "Tyra Parring" },
        { image: "https://kiara-adams.github.io/images/mo.jpg", feedback: "Kiara is very creative and hardworking. She is always bringing new ideas to the table. Kiara will always find ways to improve on a given task through her creativity, critical thinking, and will always go the extra mile. I am sure that she will be an asset to any and every company.", author: "Mohammad Mohamed" },
        { image: "https://kiara-adams.github.io/images/jordan.jpg", feedback: "Kiara is such a generous and sweet student. She is very hard-working and very persistent. To be able to work with her and experience this course with her is a blessing.", author: "Jordan Springveldt" },
        { image: "https://kiara-adams.github.io/images/i.k__4__720.png", feedback: "Working with Kiara is a breeze. She’s a great team player, always ready with amazing ideas and clear communication. Her passion for learning and tackling new challenges is infectious—she’s the kind of person you want on your web dev team, ready to dive into anything and make it shine.", author: "Chloe Smith" },
        { image: "https://kiara-adams.github.io/images/matthew.png", feedback: "Working with Kiara was a great experience. Highly recommended.", author: "Matthew Brown" },
        { image: "https://c0dingforfun.github.io/portfolioimg/Images/Me/Me.png", feedback: "Kiara is a hardworking individual that focuses on how beautiful the design of her work and has a very inviting personality that makes it easier to ask for help and team-based projects.", author: "Gwiba Mabandla" },
      ],
      projectsData: [
        { title: "Ecommerce", description: "This is my ecommerce website that I created with JavaScript, CSS, and HTML", image: "https://kiara-adams.github.io/images/ecommerce.website.js.png", hostedUrl: "https://ecommerce-website-js.vercel.app/", githubUrl: "https://github.com/kiara-adams/ecommerce-website-js.git" },
        { title: "Hulu Clone", description: "This is the Hulu clone that I created using HTML and CSS", image: "https://kiara-adams.github.io/images/hule.clone.png", hostedUrl: "https://hulu-clone-rust-five.vercel.app/", githubUrl: "https://github.com/kiara-adams/Hulu-clone.git" },
        { title: "Calculator", description: "This is a calculator that I created using HTML, CSS, and JavaScript", image: "https://kiara-adams.github.io/images/cal2.png", hostedUrl: "https://calculator2-phi.vercel.app/", githubUrl: "https://github.com/kiara-adams/calculator2.git" },
        { title: "To-Do List", description: "This is my To-Do List I created using HTML, CSS, and JavaScript", image: "https://kiara-adams.github.io/images/to-do-list.png", hostedUrl: "https://to-do-list-nine-kappa-66.vercel.app/", githubUrl: "https://github.com/kiara-adams/ToDoList.git" },
        { title: "BMI Calculator", description: "This is my BMI calculator that I created using CSS, HTML, and JavaScript", image: "https://kiara-adams.github.io/images/bmi cal.png", hostedUrl: "https://bmi-calculator-inky-delta.vercel.app/", githubUrl: "https://github.com/kiara-adams/BMI-calculator.git" },
        { title: "Temperature Calculator", description: "This is my Temperature Calculator that I created using HTML, CSS, and JavaScript", image: "https://kiara-adams.github.io/images/tempCal.png", hostedUrl: "https://temperature-tau-lovat.vercel.app/", githubUrl: "https://github.com/kiara-adams/temperature.git" }
      ],
      socialLinks: [
        { icon: "fab fa-facebook", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-linkedin", href: "#" },
        { icon: "fab fa-github", href: "#" }
      ]
    };
  }
};
</script>

<style>
/* Global styles if any */
</style>
