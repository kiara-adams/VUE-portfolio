<template>
    <section id="projects" class="section projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="project-cards">
          <div v-for="(project, index) in projects" :key="index"
               class="card"
               @mouseover="handleHover(index, true)"
               @mouseleave="handleHover(index, false)"
               ref="projectCards">
            <div class="card__inner">
              <div class="card__image">
                <img :src="project.image" alt="Project Image">
              </div>
              <div class="card__content">
                <h3 class="card__title">{{ project.title }}</h3>
                <p class="card__description">{{ project.description }}</p>
                <div class="card__links">
                  <a :href="project.hostedUrl" target="_blank" class="card__button">Hosted Work</a>
                  <a :href="project.githubUrl" target="_blank" class="card__button secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsComp',
    props: {
      projects: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleHover(index, isMouseOver) {
        const cardRef = this.$refs.projectCards[index];
        if (cardRef) {
          if (isMouseOver) {
            cardRef.classList.add('hovered');
          } else {
            cardRef.classList.remove('hovered');
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .section {
    padding: 60px 0;
    background-color: #010005;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    box-shadow: rgb(26, 26, 106);
  }
  
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #fff; 
  }
  
  .project-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    position: relative;
    width: 300px;
    height: auto; 
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(118, 17, 139, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .card__inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .card__image img {
    width: 100%;
    height: 200px; 
    object-fit:cover; 
  }
  
  .card__content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(22, 5, 37, 0.9);
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding and border are included in element's total width and height */
  }
  
  .card.hovered {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .card.hovered .card__content {
    transform: translateY(0);
  }
  
  .card__title {
    margin: 0;
    font-size: 18px;
    color: #f7f2f2;
    font-weight: bold;
  }
  
  .card__description {
    margin: 10px 0;
    font-size: 14px;
    color: #f7f7f7;
  }
  
  .card__links {
    margin-top: 10px;
  }
  
  .card__button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    transition: background-color 0.3s ease-in-out;
  }
  
  .card__button:hover {
    background-color: #333;
  }
  
  .secondary {
    background-color: transparent;
    border: 1px solid #777;
    color: #777;
  }
  
  .secondary:hover {
    background-color: #777;
    color: #fff;
  }
  </style>
  