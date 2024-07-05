<template>
    <section id="education" class="section education">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="timeline">
          <div v-for="(item,index) in education" :key="index" class="timeline-item" @mouseover="animateItem($event)">
            <div class="timeline-content">
              <h3 class="item-title">{{ item.institution }}</h3>
              <p class="item-details">{{ item.degree }} - {{ item.year }}</p>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="cv-download">
          <button @click="downloadCV" class="btn">Download CV</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EducationComp',
    props: {
      education: {
        type: Array,
        required: true
      }
    },
    methods: {
      downloadCV() {
        // Replace with your CV download logic
        window.open('/path-to-your-cv.pdf', '_blank');
      },
      animateItem(event) {
        event.target.classList.add('animated', 'pulse');
        setTimeout(() => {
          event.target.classList.remove('animated', 'pulse');
        }, 1000);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles for Education Section */
  .education {
    background-color:  #010005; /* Soft gradient */
    color: #333;
    padding: 80px 0;
    text-align: center;
  }
  
  .section-title {
    font-size: 3rem;
    margin-bottom: 40px;
    color: #ffffff; /* Dark grey */
  }
  
  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .timeline-item {
    position: relative;
    background-color: #fff; /* White background */
    color: #333;
    padding: 30px;
    margin-bottom: 40px;
    border-radius: 12px;
    width: 80%;
    max-width: 800px;
    text-align: left;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .timeline-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .timeline-content {
    position: relative;
    z-index: 1;
  }
  
  .item-title {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #555; /* Darker grey */
  }
  
  .item-details {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 5px;
  }
  
  .item-description {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .btn {
    background-color: #333; /* Dark grey */
    color: #fff;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #555; /* Darker grey */
  }
  
  /* Animation */
  .animated {
    animation-duration: 0.5s;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  