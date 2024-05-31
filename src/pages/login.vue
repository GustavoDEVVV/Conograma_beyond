<template>
    <div class="about">

    <div class="img">
        <img :src="imagemSrc" alt="">
    </div>

    <div class="main_login">
        <v-card style="background-color: transparent; 
        box-shadow: none; 
        border: 2px solid orange;
        border-radius: 1rem; width: 20rem; margin-top: 5rem;" class="mx-auto" max-width="500">

            <v-card-title style="margin-left: 34%; color: orange; font-size: 1.9rem; font-family: Arial, Helvetica, sans-serif;">Login</v-card-title>
            <v-card-text>
                <v-form>
            <v-card-title style="margin-left: 5%; color: orange; font-size: 1.2rem; font-family: Arial, Helvetica, sans-serif; margin-bottom: 0px; padding: 0%;">Email</v-card-title>

                    <v-text-field style="font-family: Arial, Helvetica, sans-serif; color: orange; margin-top: 0; padding: 0; " v-model="email" required></v-text-field>

            <v-card-title style="margin-left: 5%; color: orange; font-size: 1.2rem; font-family: Arial, Helvetica, sans-serif; margin-bottom: 0px; padding: 0%;">Senha</v-card-title>

                    <v-text-field style="font-family: Arial, Helvetica, sans-serif; color: rebeccapurple; margin-top: 0; padding: 0;"
                    v-model="password"
                    label=""
                    type="password"
                    required
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <button @click="createAcc">Criar conta</button>
                <v-spacer></v-spacer>
                <button @click="login">Login</button>
            </v-card-actions>
        </v-card>
    </div>

    <div class="img2">
        <img :src="imgSrc" alt="">
    </div>

    </div>
</template>

<style scoped>

    .img img{
        width: 20rem;
        margin: 10rem 5rem;
    }

    .main_login{
        width: 2rem;
        margin: 0;
        padding: 0;
        border: 0;
    }

    .img2 img{
        width: 20rem;
        margin: 8rem 25rem;
    }

    button{
        background-color: rebeccapurple; 
        width: 44%;
        height: 40px;
        border: 2px solid orange;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        border-radius: 1rem;
        transition: 0.5s;
        color: aliceblue; 
    }

    button:hover{
        background-color: rgba(255, 255, 255, 0.38);
        border: solid orange;
    }

    .about{
        display: flex;

    }

    label{
        color: rebeccapurple;
    }
</style>

<script>

export default {
    data(){
        return{
            imagemSrc: require('@/assets/logo_setas.png'),
            imgSrc: require('@/assets/mensagem_figuras.png'),
            email: "",
            password: "",
        };
    },
    methods: {
        login(){
            this.$store.dispatch("login",{
                email: this.email,
                password: this.password,
            });
            this.$router.push("/");
        },
        createAcc(){
            this.$store.dispatch("create", {
                email: this.email,
                password: this.password,
            });
        },
    },
};


</script>