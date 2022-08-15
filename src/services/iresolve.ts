import { api } from 'boot/axios'

const controller = 'api/iresolve/'

const getAll = () => api.get(controller)

export {
  getAll
}
