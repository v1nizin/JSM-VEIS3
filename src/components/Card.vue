  <script setup>
  import axios from "axios";
  import { ref, onMounted } from "vue";

  const moveis = ref([]);

  const buscarMovel = async () => {
    try {
      const resposta = await axios.get(
        "https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/"
      );
      moveis.value = resposta.data;
    } catch (erro) {
      console.error(erro);
    }
  };

  onMounted(async () => {
    await buscarMovel();
  });
  </script>

  <template>
    <h1 class="h12"> Produtos Cadastrados</h1>
    <div class="card">
      <div class="grid grid-cols-3 gap-4 mb-4 mt-5">
        <div
          v-for="movel in moveis"
          :key="movel.id"
          class="flex items-center justify-center h-30 rounded  dark:bg-gray-800"
        >
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure class="w-56">
              <img :src="movel.foto?.url" alt="Capa do Livro" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                {{ movel.nome || "Título não disponível" }}
              </h2>
              <p>R${{ movel.preco || "Título não disponível" }}</p>
              <div class="card-actions justify-end">
                <div class="router">
                  <RouterLink :to="`/visualizar/${movel.id}`">
                    <button class="btn btn-primary">Visualizar</button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <style>

  .h12 {

    font-size: 35px;
    text-align: center;
  }


  .card {
    margin-left: 1vh;
    height: 25vh;
    width: 180vh;
    position: relative;
    
  }

  button {
    margin-top: -5.8px;
  }

  </style>
