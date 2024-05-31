<template>
    <div class="main_btn">
      <button @click="logout">Sign Out
        <v-icon color="#663399">mdi-logout</v-icon>
    </button>
    </div>
  </template>
  
  <script>
  import { getAuth, signOut } from "firebase/auth";
  
  export default {
    methods: {
      logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
          this.$router.push('/');
        }).catch((error) => {
          console.error("Error signing out: ", error);
        });
      }
    }
  }
  </script>
  
  <style>

    .main_btn button{
        font-family: "Reddit Sans", sans-serif;
        color: rebeccapurple;
        margin-left: 5vh;
        transition: 0.3s;
    }

    .main_btn button:hover{
        text-decoration: underline;
        color: orange;
    }

    .main_btn .v-icon{
        margin-left: 0.4vh;
        margin-bottom: 0.4vh;
    }
  </style>
  