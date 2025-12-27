import axios from 'axios'

const VALID_EMAIL = 'q@quantum.io'
const VALID_PASSWORD = 'qTask123#'

export const mockLogin = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    return {
      access: 'fake-token' + Date.now(),
      refresh: 'fake-refresh' + Date.now(),
      user: {
        id: 1,
        name: 'AbdAllah Saleh',
        phone: '+1234567890',
        email: VALID_EMAIL,
        jobTitle: 'Frontend Developer',
        yearsOfExperience: 5,
        workingHours: '8 AM - 4 PM',
        address: '123 St, Cairo City, Egypt',
      },
    }
  } else {
    throw new Error('Invalid email or password.')
  }
}

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=50')
    return response.data.results
  } catch (error) {
    throw new Error('Failed to fetch users.' + error.message)
  }
}

export const updateProfile = async (profileData) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Simulate success
  return {
    success: true,
    data: profileData,
  }
}
