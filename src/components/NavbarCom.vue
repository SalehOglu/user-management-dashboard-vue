<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

const isMenuOpen = ref(false)
const auth = useAuthStore()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const router = useRouter()
const handleLogout = () => {
  auth.logout()
  router.push('/')
}
</script>

<template>
  <nav class="navbar glass-panel">
    <div class="nav-content">
      <div class="nav-logo">
        <span class="logo-text">Quantum</span>
      </div>

      <button class="menu-btn" @click="toggleMenu">☰</button>

      <div class="nav-links" :class="{ open: isMenuOpen }">
        <div class="mobile-actions">
          <span class="user-greeting">Hi, {{ auth.user.name.split(' ')[0] }}</span>
        </div>

        <router-link to="./dashboard" class="nav-link" active-class="active">Dashboard</router-link>
        <router-link to="./profile" class="nav-link" active-class="active">Profile</router-link>
        <button class="logout-btn mob" @click="handleLogout">Logout</button>
      </div>

      <div class="nav-actions desktop">
        <span class="user-greeting">Hi, {{ auth.user.name.split(' ')[0] }}</span>
        <button class="logout-btn" @click="handleLogout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 15px;
  left: 20px;
  right: 20px;
  height: 60px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 12px;
}

.nav-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

/* ---------- LOGO ---------- */
.logo-text {
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  text-transform: uppercase;
  user-select: none;
}

/* ---------- NAV LINKS ---------- */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links.open {
  background: #000;
  pointer-events: auto;
  transform: translateY(0);
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition);
  padding: 8px 12px;
  border-radius: 6px;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  color: var(--text-primary);
  background: rgba(102, 126, 234, 0.2);
}

/* ---------- NAV ACTIONS ---------- */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-greeting {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.logout-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.logout-btn:hover {
  background: var(--error-color);
  border-color: var(--error-color);
}
.logout-btn.mob {
  display: none;
}

/* ---------- MOBILE ACTIONS ---------- */
.mobile-actions {
  display: none;
}

/* ---------- HAMBURGER BUTTON ---------- */
.menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.6rem;
  cursor: pointer;
}

/* ---------- MEDIA QUERIES ---------- */
@media (max-width: 768px) {
  /* Navbar adjustments */
  .navbar {
    height: auto;
    padding: 10px 16px;
  }

  /* Hamburger button */
  .menu-btn {
    display: block;
  }

  /* Mobile nav links */
  .nav-links {
    position: absolute;
    top: 70px;
    left: 20px;
    right: 20px;

    flex-direction: column;
    background: rgba(0, 0, 0, 0.85);
    padding: 20px;
    border-radius: 12px;

    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: 0.25s ease;
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    max-width: 200px;
    margin-left: auto;
    gap: 0;
  }

  /* Hide desktop-only actions */
  .nav-actions.desktop {
    display: none;
  }

  .logout-btn.mob {
    display: block;
  }
  /* Show mobile actions */
  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
  }
  .user-greeting {
    text-align: center;
    font-size: 18px;
    color: var(--text-primary);
    margin-bottom: 10px;
  }
}
</style>
