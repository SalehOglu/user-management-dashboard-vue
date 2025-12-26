<script setup>
defineProps({
  isModalOpen: {
    type: Boolean,
  },
  selectedUser: {
    type: [Object, Boolean],
  },
})
const emit = defineEmits(['closeUserModal'])
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content glass-panel fade-in">
      <button class="close-btn" @click="emit('closeUserModal')">&times;</button>
      <div class="modal-header" v-if="selectedUser">
        <div>
          <img :src="selectedUser.picture.large" class="modal-avatar" />
        </div>
        <h2>{{ selectedUser.name.first }} {{ selectedUser.name.last }}</h2>
        <p class="modal-role">System Administrator</p>
      </div>
      <div class="modal-body" v-if="selectedUser">
        <div class="info-grid">
          <div class="info-item">
            <label>Email</label>
            <p>{{ selectedUser.email }}</p>
          </div>

          <div class="info-item">
            <label>Phone</label>
            <p>{{ selectedUser.phone }}</p>
          </div>

          <div class="info-item">
            <label>Address</label>
            <p>{{ selectedUser.location.city }}</p>
          </div>

          <div class="info-item">
            <label>Country</label>
            <p>{{ selectedUser.location.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  width: 100%;
  max-width: 500px;
  padding: 40px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.close-btn:hover {
  background: #5d5959;
  border-color: #5d5959;
}

.modal-header {
  text-align: center;
  margin-bottom: 30px;
}

.modal-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid var(--primary-color);
  padding: 5px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-item label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 5px;
}
</style>
