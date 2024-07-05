<template>
    <section id="testimonials" class="section testimonials">
      <div class="container">
        <h2 class="section-title">Testimonials</h2>
        <div class="testimonial-cards">
          <div v-for="(testimonial, index) in displayedTestimonials" :key="index" class="testimonial-card">
            <div class="card-content">
              <div class="card-circle">
                <img :src="testimonial.image" alt="Testimonial Image">
              </div>
              <div class="card-description">
                <p>{{ testimonial.feedback }}</p>
                <p class="author">- {{ testimonial.author }}</p>
              </div>
            </div>
          </div>
        </div>
        <button v-if="showButton" @click="toggleMore" class="see-more-button">
          {{ showAll ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsComp',
    props: {
      testimonials: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        showAll: false,
        displayedTestimonials: [],
        itemsToShow: 3
      };
    },
    computed: {
      showButton() {
        return this.testimonials.length > this.itemsToShow;
      }
    },
    methods: {
      toggleMore() {
        this.showAll = !this.showAll;
        if (this.showAll) {
          this.displayedTestimonials = this.testimonials;
        } else {
          this.displayedTestimonials = this.testimonials.slice(0, this.itemsToShow);
        }
      }
    },
    mounted() {
      this.displayedTestimonials = this.testimonials.slice(0, this.itemsToShow);
    }
  };
  </script>
  
  <style scoped>
  
    .section-title {
      text-align: center;
      font-size:xx-large; 
    }
    .container {
      background-color: #010005;
      color: #fff;
    }
    .testimonial-cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    
    .testimonial-card {
      width: calc(33.33% - 20px); 
      margin-bottom: 30px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 0px 10px rgba(146, 152, 222, 0.3);
      transition: transform 0.3s ease;
    }
    
    .testimonial-card:hover {
      transform: translateY(-5px);
    }
    
    .card-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px; 
      width: 120px;
      border-radius: 50%; 
      overflow: hidden;
      margin: 0 auto; 
      border: 2px solid #007bff; 
      
    }
    
    .card-circle img {
      max-width: 100%;
      height: auto;
      border-radius: 50%;
    }
    
    .card-description {
      padding: 20px;
    }
    
    .card-description p {
      margin-bottom: 10px;
    }
    
    .card-description .author {
      margin-top: 0;
      color: #ffffff;
    }
    
    .see-more-button {
      display: block;
      margin: 20px auto;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .see-more-button:hover {
      background-color: #0056b3;
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding and border are included in element's total width and height */
  }
  </style>
  