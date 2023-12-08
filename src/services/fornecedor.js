import api from '../plugins/api'

class FornecedorService {
  async getAllFornecedores() {
    const response = await api.get('/fornecedores/')
    return response.data
  }
  async saveFornecedor(fornecedor) {
    let response
    if (fornecedor.id) {
      response = await api.put(`/fornecedores/${fornecedor.id}/`, fornecedor)
    } else {
      response = await api.post('/fornecedores/', fornecedor)
    }
    return response.data
  }
  async deleteFornecedor(fornecedor) {
    const response = await api.delete(`/fornecedores/${fornecedor.id}/`)
    return response.data
  }
}

export default new FornecedorService()