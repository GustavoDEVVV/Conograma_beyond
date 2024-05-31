<template>

<div class="main">

  <div class="app">
    <v-toolbar style="background-color: aliceblue">
      <button id="home" @click="goTo('/')">
        <img :src="imageSrc" alt="">
      </button>
      <button id="atividades" @click="goTo('/atividades')">Atividades</button>
      <button id="calendario" @click="goTo('/calendario')">Calendario</button>
      <button id="inical" @click="goTo('/login')">Login</button>
      <button_Out />
    </v-toolbar>            
    <router-view></router-view>
  </div>
</div>
</template>

<style scoped>

#home img{
  width: 10rem;
  margin: 0 0 0 0;
  padding: 0;
  border: 0;
}

#home{

  width: 10%;
}

#atividades{
  color: rebeccapurple;
  margin-left: 10vh;
  font-family: "Reddit Sans", sans-serif;
  gap: 10rem;
  transition: 0.3s;
}

#calendario{
  color: rebeccapurple;
  margin-left: 5vh;
  font-family: "Reddit Sans", sans-serif;
  gap: 10rem;
  transition: 0.3s;
}

#inical{
  color: rebeccapurple;
  margin-left: 5vh;
  font-family: "Reddit Sans", sans-serif;
  gap: 10rem;
  transition: 0.3s;
}

#atividades:hover{

  text-decoration: underline;
  color: orange;
}

#calendario:hover{

text-decoration: underline;
color: orange;
}

#inical:hover{

text-decoration: underline;
color: orange;
}
</style>


<script>

  import button_Out from '@/components/button_Out.vue';

  export default{
    data(){
      return{
        imageSrc: require('@/assets/logo.png')
      }
    },
        methods: {
          goTo(path){
            this.$router.push(path)
          }
        },
        components: {
          button_Out
        }
      };
  
</script>