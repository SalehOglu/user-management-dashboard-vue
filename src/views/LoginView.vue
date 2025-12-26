<script setup>
import LoginCard from '../components/LoginCard.vue'
</script>

<template>
  <main>
    <div class="login-page">
      <div class="login-card glass-panel fade-in">
        <div class="login-header">
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access the dashboard</p>
        </div>
        <LoginCard />
        <div class="login-footer">
          <p>Demo Account: <span>q@quantum.io</span> / <span>qTask123#</span></p>
        </div>
      </div>
    </div>
  </main>
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
