<script setup></script>

<template>
  <div class="app-container">
    <transition name="fade" mode="out-in">
      <router-view v-slot="{ Component }">
        <main :class="{ 'with-navbar': $route.name !== 'login' }">
          <component :is="Component" />
        </main>
      </router-view>
    </transition>
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
