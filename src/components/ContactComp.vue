<template>
    <section id="contact" class="section contact">
      <div class="container">
        <div class="contact-content">
          <div v-if="loading" class="spinner-container">
            <Spinner />
          </div>
          <div v-else class="contact-info">
            <h2>{{ animatedText }}</h2>
            <p>If you have any questions or just want to get in touch, feel free to send me an email or reach out on social media.</p>
            <p><strong>Email:</strong> kiara.adams.032006@gamil.com</p>
            <p><strong>Address:</strong><br>Rocklands <br>Mitchells plain, Cape Town </p>
            <div class="social-icons">
              <a href="https://instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://facebook.com/yourprofile" target="_blank"><i class="fab fa-facebook"></i></a>
              <!-- Add more icons as needed -->
            </div>
          </div>
          <div class="divider"></div> <!-- Centered divider line -->
          <div class="contact-form" v-if="!loading">
            <form
              action="https://formspree.io/f/xwpekwlk"
              method="POST"
              @submit.prevent="validateForm"
            >
              <div class="form-group">
                <label class="label" for="name">Name</label>
                <input type="text" id="name" v-model="name" class="form-control" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <label class="label" for="email">Email</label>
                <input type="email" id="email" v-model="email" class="form-control" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <label class="label" for="message">Message</label>
                <textarea id="message" v-model="message" rows="10" class="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import Spinner from '@/components/SpinnerComp.vue'; // Adjust the path based on your project structure
  
  export default {
    name: 'ContactComp',
    components: {
      Spinner
    },
    data() {
      return {
        name: '',
        email: '',
        message: '',
        animatedText: '',
        loading: false // Flag to indicate loading state
      };
    },
    created() {
      this.typeWriterEffect("Let's Talk");
    },
    methods: {
      validateForm() {
        // Validate form inputs before submission
        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!namePattern.test(this.name)) {
          alert('Name should only contain letters.');
          return;
        }
  
        if (!emailPattern.test(this.email)) {
          alert('Please enter a valid email address.');
          return;
        }
  
        // Set loading state before form submission
        this.loading = true;
  
        // Simulate form submission delay (remove this in real use)
        setTimeout(() => {
          this.submitForm();
        }, 1500); // Simulate delay of 1.5 seconds
      },
      submitForm() {
        // Implement form submission logic here (e.g., using Formspree)
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          message: this.message
        });
  
        // Reset the form and loading state after submission
        this.name = '';
        this.email = '';
        this.message = '';
        this.loading = false; // Turn off loading state
      },
      typeWriterEffect(text) {
        // Typewriter effect for the heading
        let i = 0;
        const speed = 50; // Speed of typing in milliseconds
        const self = this;
        function typeWriter() {
          if (i < text.length) {
            self.animatedText += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          } else {
            setTimeout(() => {
              self.animatedText = ''; // Clear text after animation completes
              i = 0; // Reset index for repeating animation
              typeWriter(); // Start again
            }, 2000); // Wait 2 seconds before clearing
          }
        }
        typeWriter();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles for ContactComp.vue */
  .contact {
    background-color: #010005; /* Soothing dark green background */
    color: #ddd;
    padding: 60px 0;
    text-align: center;
  }
  
  .contact-content {
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .contact-info {
    max-width: 400px;
    text-align: left;
  }
  
  .contact-info h2 {
    margin-bottom: 10px;
    font-size: 2.5rem;
    color: #fff;
  }
  
  .contact-info p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #aaa;
  }
  
  .divider {
    width: 2px; /* Adjust thickness of the divider line */
    background-color: #fff; /* White divider line */
    height: 100%; /* Full height of the content */
    margin: 0 40px; /* Adjust spacing around the divider */
  }
  
  .contact-form {
    max-width: 600px;
    text-align: left;
    margin-top: 40px; /* Adjust top margin */
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: none; /* Remove border */
    border-bottom: 1px solid #555; /* Add bottom border */
    background-color: transparent; /* Transparent background */
    color: #ddd; /* Text color */
    outline: none; /* Remove default input focus outline */
    resize: vertical; /* Allow vertical resizing of textarea */
  }
  
  .btn-primary {
    background-color: #01050f;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #7f178d;
  }
  
  .social-icons {
    text-align: center; /* Center icons horizontally */
    margin-top: 20px;
  }
  
  .social-icons a {
    color: #ddd;
    font-size: 1.5rem;
    margin: 0 10px; /* Adjust margin for spacing */
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #7f178d;
  }
  
  .label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .spinner-container {
    height: 200px; /* Adjust height to center vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  