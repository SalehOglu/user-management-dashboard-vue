<script setup></script>

<template>
  <div class="login-page">
    <div class="login-card glass-panel fade-in">
      <div class="login-header">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access the dashboard</p>
      </div>
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
      <div class="login-footer">
        <p>Demo Account: <span>q@quantum.io</span> / <span>qTask123#</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top right, #1a1a3a, #0f0f23);
}

.login-card {
  width: 100%;
  max-width: 450px;
  padding: 40px;
}

.login-header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #fff, #a5a5a5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-header p {
  color: var(--text-secondary);
  margin-bottom: 30px;
}

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

.login-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.login-footer span {
  color: var(--primary-color);
  font-weight: 600;
}
</style>
