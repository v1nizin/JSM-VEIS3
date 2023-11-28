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
    return response.data;
    }
}