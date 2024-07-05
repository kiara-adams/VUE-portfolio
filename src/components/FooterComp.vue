<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p>&copy; 2024 Kiara Adams. All rights reserved.</p>
          </div>
          <div class="col-md-6">
            <div class="social-icons">
              <a v-for="(link, index) in socialLinks" :key="index" :href="link.href"><i :class="link.icon"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    props: {
      socialLinks: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color:#010c0f;
    color: #ddd;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer p {
    margin-bottom: 10px;
  }
  
  .social-icons {
    margin-top: 10px;
  }
  
  .social-icons a {
    color: #ddd;
    font-size: 1.2rem;
    margin: 0 10px;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #4d0d55;
  }
  </style>
  