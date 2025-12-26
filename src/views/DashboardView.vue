<script setup>
import { ref } from 'vue'
import UserModal from '../components/UserModal.vue'
const isModalOpen = ref(false)

const openUserModal = () => {
  isModalOpen.value = true
}
const closeUserModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="dashboard-page fade-in">
    <div class="container">
      <header class="page-header">
        <div>
          <h1>Global User Management</h1>
          <p>Real-time directory of all active system users</p>
        </div>
        <button class="glass-button refresh-btn">Refresh Users</button>
      </header>

      <div class="controls-card glass-panel">
        <div class="search-container">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" stroke-width="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" />
          </svg>
          <input type="text" class="search-input" placeholder="Search by name..." />
        </div>
      </div>

      <div class="table-container glass-panel">
        <table class="user-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="user-row">
              <td>
                <img src="../assets/avatar.png" alt="User Avatar" class="user-avatar" />
              </td>
              <td>
                <div class="name-cell">Zairo</div>
              </td>
              <td>test@gmail.com</td>
              <td>Cairo</td>
              <td>Egypt</td>
              <td>
                <button class="view-btn" @click="openUserModal">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pagination">
        <button class="page-btn" disabled>Previous</button>
        <span class="page-info">Page 1 of 5</span>
        <button class="page-btn">Next</button>
      </div>
    </div>

    <div v-if="isModalOpen">
      <user-modal
        :isModalOpen="isModalOpen"
        @closeUserModal="closeUserModal"
        @click.self="closeUserModal"
      />
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  padding: 40px 20px;
  max-width: 1300px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.page-header p {
  color: var(--text-secondary);
}

.controls-card {
  padding: 20px;
  margin-bottom: 25px;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.03);
  padding: 0 15px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.search-icon {
  width: 18px;
  height: 18px;
  color: var(--text-secondary);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 12px 0;
  color: white;
  outline: none;
}

.table-container {
  overflow-x: auto;
  min-height: 400px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.user-table th {
  padding: 20px;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid var(--border-color);
}

.user-table td {
  padding: 15px 20px;
  border-bottom: 1px solid var(--border-color);
}

.user-row:hover {
  background: rgba(255, 255, 255, 0.02);
}

.user-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
}

.name-cell {
  display: flex;
  flex-direction: column;
}

.first-name {
  font-weight: 600;
}

.username {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.view-btn {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.view-btn:hover {
  background: var(--primary-color);
  color: white;
}

.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  gap: 20px;
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.pagination {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.page-btn {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-btn:not(:disabled):hover {
  border-color: var(--primary-color);
}
</style>
