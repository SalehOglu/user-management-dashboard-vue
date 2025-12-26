<script setup></script>

<template>
  <div class="login-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="glass-input" placeholder="name@company.com" />
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input type="password" class="glass-input" placeholder="••••••••" />
    </div>
    <button type="submit" class="glass-button login-btn">Sign In</button>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 500;
}

.error-message {
  color: var(--error-color);
  font-size: 0.85rem;
  padding: 10px;
  background: rgba(255, 82, 82, 0.1);
  border-radius: 6px;
  border-left: 3px solid var(--error-color);
}

.login-btn {
  width: 100%;
  height: 48px;
  font-size: 1rem;
  margin-top: 10px;
}
</style>
