<template>
  <section id="home" class="section home">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="content" v-if="homeData">
            <h1 class="typewriter">{{ homeData.title }}</h1>
            <p class="typewriter-sub">{{ homeData.subtitle }}</p>
            <div class="social-icons">
              <a v-for="link in homeData.socialLinks" :key="link.icon" :href="link.href">
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6" v-if="homeData">
          <div class="profile-img-wrapper">
            <!-- <img :src="homeData.profileImg" alt="Kiara Adams" class="profile-img"> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeComp',
  data() {
    return {
      homeData: null
    };
  },
  created() {
    this.fetchHomeData();
  },
  methods: {
    async fetchHomeData() {
      try {
        const response = await fetch('https://kiara-adams.github.io/First_api/data/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.homeData = data.home;
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    }
  }
};
</script>

<style scoped>   
/* Home Section styles */
#home {
  position: relative;
  background-color: rgb(28, 1, 30);
  background-image: url('https://kiara-adams.github.io/images/7566038-hd_1366_720_25fps-ezgif.com-video-to-gif-converter.gif');
  background-size: cover;
  background-position: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s ease-in-out;
  height: 100vh;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content {
  position: relative;
  z-index: 2;
  text-align: left;
  padding-right: 40px;
  color: #fff;
}

.profile-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-img {
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  animation: slideInLeft 1.5s ease-in-out;
  z-index: 2;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  z-index: 2;
}

.social-icons a {
  color: #fff;
  font-size: 1.2rem;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #4d0d55;
}

.typewriter {
  overflow: hidden; 
  border-right: .15em solid rgb(149, 71, 151); 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation: 
    typing 3.5s steps(40, end), 
    blink-caret .75s step-end infinite;
  font-size: 2.5rem; /* Adjust this value for larger font size */
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }                                 
  50% { border-color: rgb(175, 75, 186); }
}

.typewriter-sub {
  overflow: hidden; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation: 
    typing 4.5s steps(40, end), 
    blink-caret .75s step-end infinite;
  font-size: 1.5rem; /* Adjust this value for larger font size */
}


</style>