<template>
 <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure class="w-56">
            <img :src="movel.foto.url" alt="Capa do Livro" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ movel.nome || "Título não disponível" }}
               <h2>Quantidade:{{ movel.quantidade }}</h2>
            </h2>
            <p>Preço: R${{ movel.preco || "Título não disponível" }}</p>
          </div>
          <div>
            
          </div>
          </div>

               
      
      <h2>Quantidade:{{ movel.quantidade }}</h2>

      <p>Cor:{{ movel.cor }}</p>
      <p>Fornecedor{{ movel.fornecedor }}</p>
      <p>Categoria:{{ movel.categoria }}</p>
</template>