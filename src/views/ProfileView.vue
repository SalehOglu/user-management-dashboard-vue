<template>
  <div class="profile-page fade-in">
    <div class="container--small">
      <header class="page-header">
        <h1>Account Settings</h1>
        <p>Manage your personal information and preferences</p>
      </header>

      <div class="profile-card glass-panel">
        <div class="profile-avatar-section">
          <div class="avatar-large">A</div>
          <div class="profile-meta">
            <h2>AbdAllah</h2>
            <p>Frontend developer • Admin</p>
          </div>
        </div>

        <!-- <div v-if="message.text" :class="['alert', message.type]">
          {{ message.text }}
        </div> -->

        <form class="profile-form">
          <div class="form-row">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="glass-input" required />
            </div>

            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" class="glass-input" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="glass-input" required />
            </div>

            <div class="form-group">
              <label>Job Title</label>
              <input type="text" class="glass-input" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Years of Experience</label>
              <input type="number" class="glass-input" />
            </div>

            <div class="form-group">
              <label>Working Hours</label>
              <input type="text" class="glass-input" placeholder="e.g. 9:00 AM - 5:00 PM" />
            </div>
          </div>

          <div class="form-group">
            <label>Address</label>
            <textarea class="glass-input textarea" rows="2"></textarea>
          </div>

          <div class="form-actions">
            <button type="button" class="glass-button">Edit Profile</button>
            <template> </template>
            <template>
              <button type="submit" class="glass-button">Save Changes</button>
              <button type="button" class="cancel-btn">Cancel</button>
            </template>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  padding: 40px 20px;
}

.container--small {
  max-width: 600px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 30px;
  text-align: center;
}

.profile-card {
  padding: 40px;
}

.profile-avatar-section {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
}

.avatar-large {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.profile-meta h2 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.profile-meta p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.textarea {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

.hint {
  display: block;
  margin-top: 5px;
  font-size: 0.75rem;
  opacity: 0.6;
}

.form-actions {
  margin-top: 10px;
  display: flex;
  gap: 15px;
}

.cancel-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
}

.cancel-btn:hover {
  background: rgba(255, 255, 255, 0.05);
}

.alert {
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 25px;
  font-size: 0.9rem;
}

.alert.success {
  background: rgba(76, 175, 80, 0.1);
  color: #81c784;
  border: 1px solid #4caf50;
}

.alert.error {
  background: rgba(255, 82, 82, 0.1);
  color: #ff5252;
  border: 1px solid #ff5252;
}
</style>
