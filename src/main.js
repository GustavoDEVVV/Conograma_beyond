import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../routes/router'
import "vuetify/dist/vuetify.min.css";
import {auth} from '../src/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations:{
    setUser(state, payload){
      state.user = payload;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    create({commit}, payload){
      const {email, password} = payload;
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Usuário criado!", result);
      })
      .catch((error) => {
        alert(error);
      });
    },
    // eslint-disable-next-line no-unused-vars
    login({commit}, payload){
      const {email,password} = payload;
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Usuário logado!", result);
        commit("setUser", result.user);
      })
      .catch((error) => {
        alert(error);
      });
    },
  },
});

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
