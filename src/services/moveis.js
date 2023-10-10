import api from '../plugins/api'

class MovelService {
  async getAllMovel() {
    const response = await api.get('/moveis/')
    return response.data
  }
  async saveMovel(movel) {
    let response
    if (movel.id) {
      response = await api.put(`/moveis/${movel.id}/`, movel)
    } else {
      response = await api.post('/moveis/', movel)
    }
    return response.data
  }
  async deleteMovel(movel) {
    const response = await api.delete(`/moveis/${movel.id}/`)
    return response.data
  }
}

export default new MovelService()