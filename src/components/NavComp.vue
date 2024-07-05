<template>
    <nav class="navbar">
      <div class="brand">
        <img :src="navbar.brand.logo" alt="Logo" class="logo">
        <span class="name">{{ navbar.brand.name }}</span>
      </div>
      <ul class="links">
        <li v-for="link in navbar.links" :key="link.name">
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    props: {
      navbar: Object  
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0e0011;
    color: #fff;
    padding: 10px 20px;
  }
  
  .brand {
    display: flex;
    align-items: center;
  }
  
  .brand .logo {
    width: 40px; /* Adjust size as needed */
    height: auto;
    margin-right: 10px;
  }
  
  .brand .name {
    font-size: 1.2rem;
  }
  
  .links {
    list-style: none;
    display: flex;
    align-items: center;
  }
  
  .links li {
    position: relative;
    margin-right: 20px;
  }
  
  .links a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    position: relative;
    z-index: 1;
  }
  
  .links a::before,
  .links a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s ease;
    opacity: 0;
    transform: scaleX(0);
  }
  
  .links a::before {
    top: -4px;
    left: 0;
    transform-origin: left center;
  }
  
  .links a::after {
    bottom: -4px;
    left: 0;
    transform-origin: right center;
  }
  
  .links a:hover::before,
  .links a:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
  
  .links a:hover {
    color: #fff;
  }
  </style>
  