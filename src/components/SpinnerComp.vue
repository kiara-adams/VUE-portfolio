
<template>
    <div class="spinner">
      <div class="spinner-icon"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComp'
  }
  </script>
  
  <style scoped>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px; 
  }
  
  .spinner-icon {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #333; 
    border-radius: 50%;
    animation: spin 1s linear infinite; 
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  