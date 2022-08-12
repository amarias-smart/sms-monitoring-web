import { api } from 'boot/axios'

const controller = 'api/smpp/'

const getAll = () => api.get(controller)

export {
  getAll
}
