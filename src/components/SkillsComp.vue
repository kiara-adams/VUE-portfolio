<template>
    <div class="skills-section" id="skills">
      <h2>My Skills</h2>
  
      <div class="skills-container">
        <div class="skills-heading" data-aos="fade-up">
          <h3>Technical Skills</h3>
        </div>
        <div v-for="(skill, index) in skills" :key="'technical-' + index" class="skill-card heart-pump" data-aos="fade-up">
          <i :class="skill.icon"></i>
          <h3>{{ skill.name }}</h3>
        </div>
  
        <div class="soft-skills" v-if="showSoftSkills" data-aos="fade-up">
          <div class="soft-skills-heading">
            <h3>Soft Skills</h3>
          </div>
          <div class="soft-skill-card" v-for="(softSkill, index) in softSkills" :key="'soft-' + index" data-aos="fade-up">
            <h3>{{ softSkill.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection',
    props: {
      skills: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        showSoftSkills: false,
        softSkills: [
          { name: 'Communication' },
          { name: 'Teamwork' },
          { name: 'Problem Solving' }
        ]
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const offset = window.innerHeight * 0.8; // Adjust as needed
  
        const skillsSection = document.getElementById('skills');
        if (skillsSection.getBoundingClientRect().top < offset) {
          this.showSoftSkills = true;
        } else {
          this.showSoftSkills = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .skills-section {
    text-align: center;
    padding: 50px;
    background-color: #010005;
    color: #fff;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .skill-card, .soft-skill-card {
    background: #220019;
    border: 1px solid #555;
    border-radius: 8px;
    padding: 20px;
    width: 150px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    margin-bottom: 20px;
  }
  
  .skill-card:hover, .soft-skill-card:hover {
    transform: scale(1.1);
  }
  
  .skill-card i {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .skill-card h3, .soft-skill-card h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  
  .skills-heading, .soft-skills-heading {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .soft-skills-heading {
    margin-top: 50px;
  }
  
  .skill-card.heart-pump {
    animation: heartPump 1s infinite alternate;
  }
  
  @keyframes heartPump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  </style>
  