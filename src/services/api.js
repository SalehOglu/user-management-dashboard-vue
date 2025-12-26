import axios from 'axios'

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=50')
    return response.data.results
  } catch (error) {
    throw new Error('Failed to fetch users.' + error.message)
  }
}
