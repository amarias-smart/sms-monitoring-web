import { api } from 'boot/axios'

const controller = 'api/esc/'

const getAll = () => api.get(controller)

export {
  getAll
}
