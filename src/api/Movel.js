import axios from "axios";

const API_BASE_URL = "https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/";

export default class MoveisApi {
  async buscaTodosOsMoveis() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar todos os móveis:", error);
      throw error; // Rejoga o erro para que o chamador possa lidar com isso
    }
  }

  async buscarMovel(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar móvel com ID ${id}:`, error);
      throw error;
    }
  }

  async adicionarMovel(movel) {
    try {
      const response = await axios.post(API_BASE_URL, movel);
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar móvel:", error);
      throw error;
    }
  }

  async excluirMovel(id) {
    try {
      const response = await axios.delete(`${API_BASE_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir móvel com ID ${id}:`, error);
      throw error;
    }
  }

  async atualizarMovel(movel) {
    try {
      const response = await axios.put(`${API_BASE_URL}${movel.id}`, movel);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar móvel com ID ${movel.id}:`, error);
      throw error;
    }
  }
}
