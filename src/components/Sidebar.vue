<template>
    <aside :class="`${isOpen && 'is-expanded'}`">
      <div class="logo">
       <h3>МУП "Водоканал"</h3>
      </div>
      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="toggleMenu">
          <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
      </div>
      <div class="menu">
        <LinkItem class="button" to="/profile">
          <span class="material-icons">home</span>
          <span class="text">Главная</span>
        </LinkItem>
        <LinkItem class="button" to="/profile">
          <span class="material-icons">cloud</span>
          <span class="text">Счетчики</span>
        </LinkItem>
        <LinkItem class="button" to="/profile">
          <span class="material-icons">credit_card</span>
          <span class="text">Оплата</span>
        </LinkItem>
        <LinkItem class="button" to="/profile">
          <span class="material-icons">article</span>
          <span class="text">Квитанции</span>
        </LinkItem>
        <LinkItem class="button" to="/profile">
          <span class="material-icons">settings</span>
          <span class="text">Настройки</span>
        </LinkItem>
        <LinkItem class="button" to="/profile">
          <span class="material-icons">logout</span>
          <span class="text">Выйти</span>
        </LinkItem>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import LinkItem from './items/LinkItem.vue'
  
  const isOpen = ref(false)
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  </script>
  
  <style scoped lang="scss">


  aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: width 0.2s ease-out;
  
    .logo {
      margin-bottom: 1rem;
      img {
        width: 2rem;
      }
    }
  
    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
  
      position: relative;
      top: 0;
      transition: 0.2s ease-out;
  
      .menu-toggle {
        transition: 0.2s ease-out;
  
        .material-icons {
          font-size: 2rem;
          color: var(--light);
        }
  
        &:hover {
          .material-icons {
            color: var(--primary);
            transform: translateX(0.5rem);
          }
        }
      }
    }
  
    h3,
    .button .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }
  
    .menu {
      margin: 0 -1rem;
  
      .button {
        display: flex;
        align-items: center;
        text-decoration: none;
  
        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;
  
        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: 0.2s ease-out;
        }
  
        .text {
          color: var(--light);
          transition: 0.2s ease-out;
        }
  
        &:hover {
          .material-icons,
          .text {
            color: var(--primary);
          }
        }
      }
    }
  
    &.is-expanded {
      width: var(--sidebar-width);
  
      .menu-toggle-wrap {
        top: -3rem;
  
        .menu-toggle {
          transform: rotate(180deg);
        }
      }
  
      h3,
      .button .text {
        opacity: 1;
      }
  
      .button {
        .material-icons {
          margin-right: 1rem;
        }
      }
    }
  
    @media (max-width: 768px) {
      position: fixed;
      z-index: 99;
    }
  }
  </style>
  