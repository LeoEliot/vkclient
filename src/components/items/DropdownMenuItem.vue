<template>
    <div class="dropdown" @click="toggleDropdown">
      <button class="dropdown-button">{{ selectedOption }}</button>
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        selectedOption: 'Select an option',
        options: ['Option 1', 'Option 2', 'Option 3']
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style>
  .dropdown {
    position: relative;
    display: inline-block;
    width: 200px;
  }
  
  .dropdown-button {
    width: 100%;
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  
  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-menu li:hover {
    background-color: #f1f1f1;
  }
  </style>