<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const email = ref('q@quantum.io')
const password = ref('qTask123#')

const handleSubmit = async () => {
  const success = await auth.login(email.value, password.value)
  if (success) {
    router.push('/dashboard')
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        v-model="email"
        class="glass-input"
        placeholder="name@company.com"
        required
      />
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input
        type="password"
        v-model="password"
        class="glass-input"
        placeholder="••••••••"
        required
      />
    </div>

    <div class="error-message" v-if="auth.error">
      {{ auth.error }}
    </div>

    <button type="submit" class="glass-button login-btn" :disabled="auth.loading">
      {{ auth.loading ? 'Logging in...' : 'Login' }}
    </button>
  </form>
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
