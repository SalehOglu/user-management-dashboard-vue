<script setup>
import Navbar from './components/NavbarCom.vue'
</script>

<template>
  <div class="app-container">
    <Navbar v-if="$route.name !== 'login'" />
    <main :class="{ 'with-navbar': $route.name !== 'login' }">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  padding-bottom: 40px;
}

main.with-navbar {
  padding-top: 80px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
