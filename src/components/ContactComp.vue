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
            </div>
          </div>
          <div class="divider"></div> 
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
  import Spinner from '@/components/SpinnerComp.vue'; 
  
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
        loading: false 
      };
    },
    created() {
      this.typeWriterEffect("Let's Talk");
    },
    methods: {
      validateForm() {
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
  
        this.loading = true;
  
        setTimeout(() => {
          this.submitForm();
        }, 1500); 
      },
      submitForm() {
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          message: this.message
        });
  
        this.name = '';
        this.email = '';
        this.message = '';
        this.loading = false; 
      },
      typeWriterEffect(text) {
     
        let i = 0;
        const speed = 50; 
        const self = this;
        function typeWriter() {
          if (i < text.length) {
            self.animatedText += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          } else {
            setTimeout(() => {
              self.animatedText = ''; 
              i = 0; 
              typeWriter(); 
            }, 2000); 
          }
        }
        typeWriter();
      }
    }
  };
  </script>
  
  <style scoped>

  .contact {
    background-color: #010005; 
    color: #ddd;
    padding: 60px 0;
    text-align: center;
  }
  
  .contact-content {
    display: flex;
    justify-content: center;
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
    width: 2px; 
    background-color: #fff; 
    height: 100%; 
    margin: 0 40px; 
  }
  
  .contact-form {
    max-width: 600px;
    text-align: left;
    margin-top: 40px; 
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: none; 
    border-bottom: 1px solid #555; 
    background-color: transparent; 
    color: #ddd; 
    outline: none; 
    resize: vertical; 
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
    text-align: center; 
    margin-top: 20px;
  }
  
  .social-icons a {
    color: #ddd;
    font-size: 1.5rem;
    margin: 0 10px; 
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
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  