import axios from "axios";
export default class MoveisApi {
  async BuscaTodosOsMoveis() {
    const response = await axios.get(
      "https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/"
    );
    return response.data;
  }
  async BuscarMoveis(id) {
    const response = await axios.get(
      `https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/${id}`
    );
}
    async adicionarMovel(movel) {
      const response = await axios.post("https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/", movel);
      return response.data;
    }
    async excluirMovel(id) {
      const response = await axios.delete(`https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/${id}`);
      return response.data;
    }
    async atualizarMovel(movel) {
      const response = await axios.put(
        `https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/${movel.id}`,
        movel
      );  
    return response.data;
    }
}

