<template>
  <nav class="navbar glass-panel">
    <div class="nav-content">
      <div class="nav-logo">
        <span class="logo-text">Quantum</span>
      </div>
      <div class="nav-links">
        <a href="./dashboard" class="nav-link">Dashboard</a>
        <a href="./profile" class="nav-link">Profile</a>
      </div>
      <div class="nav-actions">
        <span class="user-greeting">Hi, User</span>
        <button class="logout-btn">Logout</button>
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

.logo-text {
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 20px;
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
</style>
