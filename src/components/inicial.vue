<template>
      <div class="Main">
        
        <div class="texto">
          <h1 class="titulo">Seja Bem-vindo ao seu conograma!</h1>
            <p class="texto1">Vamos organizar sua vida e seus planos aqui!
              <br>
              Venha fazer parte do nosso time
            </p>
          </div>

          <div class="icon">
          <img :src="imageSrc" alt="">
          </div>
    </div>
</template>

<style>

.Main{
  display: flex;
}

.icon{
  width: 5%;
  height: 0;
}

.icon img{
  width: 20rem;
  margin: 0 20rem;
  padding: 0;
  border: 0;
}

.titulo h1{
    font-size: 2.5rem;
    color: orange;
    line-height: 3;
}

.texto{

  margin: 3vh;
  margin-top: 10vh;
}

.texto1{
  font-size: 1rem;
}

.texto1::first-letter{
  font-size: 5rem;
  letter-spacing: -5px;
  color: orange;
}
</style>

<script>
  export default{
    data(){
      return{
        imageSrc:require('@/assets/mensagem_figuras.png')
      }
    }
  }
</script>