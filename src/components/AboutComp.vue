<template>
    <div class="about-me">
      <div class="left-section">
        <img :src="aboutData.image" alt="Profile Image" class="imgab">
      </div>
      <div class="right-section">
        <h2>About Me</h2>
        <p>
          {{ aboutData.description }}
        </p>
        <router-link to="/skills" class="skills-link">Explore my Skills</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
    data() {
      return {
        aboutData: {}
      };
    },
    created() {
      this.fetchAboutData();
    },
    methods: {
      async fetchAboutData() {
        try {
          const response = await fetch('https://kiara-adams.github.io/First_api/data/data.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.aboutData = data.about;
        } catch (error) {
          console.error('Error fetching about data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .about-me {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background-color:  #010005;
    color: #fff;
  }
  .imgab{
    width: 70%;
    height: 50%;
  }
  .left-section {
    flex: 1;
    margin-right: 30px;
  }
  .right-section {
    flex: 2;
    background-color: ; 
    padding: 20px;
    border-left: 2px solid #333; 
  }
  .right-section h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  .right-section p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  .skills-link {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  .skills-link:hover {
    background-color: #555;
  }
  </style>
  