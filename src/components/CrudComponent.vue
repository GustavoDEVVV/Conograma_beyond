<template>
  <div class="card">
    <h2>Cronograma de Tarefas</h2>
    
      <div class="topo">
        <input type="text" v-model="novaTarefa.descricao" placeholder="  Adicione sua Tarefa">
        <select v-model="novaTarefa.prioridade">
          <option value="comeco">Qual prioridade da sua tarefa?</option>
          <option value="alta">Alta Prioridade</option>
          <option value="baixa">Baixa Prioridade</option>
        </select>
        <button @click="adicionarTarefa">Adicionar Tarefa</button>
      </div>
  
      
      <div class="card_meio" v-if="tarefas.length > 0">
        <h3>Tarefas</h3>
        <ul>
          <li v-for="(tarefa, index) in tarefas" :key="index">
            {{ tarefa.descricao }}
            <span v-if="tarefa.prioridade === 'alta'" style="color: red">(Prioritária)</span>
            <span v-else style="color: green">(Não Prioritária)</span>
            <button id="editar" @click="editarTarefa(index)">Editar</button>
            <button id="excluir" @click="excluirTarefa(index)">Excluir</button>
          </li>
        </ul>
      </div>
  
      <div class="resultado" v-if="updateResultado">
        <p>{{ updateResultado }}</p>
      </div>
  </div>
      
</template>

<script>

import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';
import { db } from '@/firebase/firebase'

export default {
  data() {
    return {
      tarefas: [],
      novaTarefa: {
        descricao: '',
        prioridade: 'comeco'
      },
      tarefaEditando: null,
      updateResultado: ''
    };
  },
  methods: {
    async adicionarTarefa() {
      this.tarefas.push({ ...this.novaTarefa });
      this.updateResultado = 'Tarefa adicionada com sucesso.';
      console.log(this.novaTarefa);
      await addDoc(collection(db, 'tarefas'), this.novaTarefa)
    },
    async getDocsfirestore(){
      const querySnapshot = await getDocs(collection(db, 'tarefas'))
      querySnapshot.forEach((doc) => {
        const data = {descricao:doc.descricao, ...doc(data)}
        this.tarefas.push(data)
      })
    },
    editarTarefa(tarefa) {
      this.tarefaEditando = tarefa;
      this.updateResultado = '';
    },
    salvarEdicao() {
      this.tarefas[this.tarefaEditando] = { ...this.novaTarefa };
      this.novaTarefa.descricao = '';
      this.tarefaEditando = null;
      this.updateResultado = 'Tarefa atualizada com sucesso.';
    },
    async excluirTarefa(index) {
      this.tarefas.splice(index, 1);
      this.updateResultado = 'Tarefa excluída com sucesso.';
      await deleteDoc(doc(db, 'tarefas', this.tarefa.id))
      this.getDocsfirestore()
    }
  }
};
</script>

<style scoped>

.card{

  border: 3px solid orange;
  background-color: white;
  width: 140vh;
  margin-left: 33vh;
  box-shadow: 5px 5px 15px rgba(255, 136, 0, 0.757);
  border-radius: 2rem;
}

.topo{
  margin-top: 32px;
}

h2{
  color: rebeccapurple;
  text-align: center;
  font-family: "Reddit Sans", sans-serif;
  align-items: center;
  margin-top: 20px;
}

input{

  background-color: rebeccapurple;
  border-radius: 2rem;
  width: 50vh;
  height: 32px;
  font-size: 0.9rem;
  text-align: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  color: aliceblue;
  margin-bottom: 15px;
  margin-left: 20px;
  transition: 1s;
}

input::placeholder{

  color: aliceblue;
  margin: 4px;
}

select{

  margin-right: 12px;
  margin-left: 12px;
  background-color: rebeccapurple;
  color: aliceblue;
  font-size: 0.9rem;
  height: 32px;
  font-family: "Raleway", sans-serif;
  width: 26%;
  margin-left: 10vh;
  text-align: center;
  align-items: center;
  border-radius: 1.3rem;
  transition: 1s;
}

select:hover{
  background-color: rgba(102, 51, 153, 0.58);
}

select option{
  border-radius: 1rem;
  animation: 9s;
}

button{

  height: 32px;
  background-color: orange;
  margin-left: 8vh;
  color: aliceblue;
  font-size: 0.9rem;
  font-family: "Raleway", sans-serif;
  border-radius: 1.3rem;
  width: 15%;
  transition: 0.5s;
}


button:hover{
  background-color: transparent;
  color: orange;
  border: 2px solid orange;
}

.card_meio{

  width: 90vh;
  border: 2px solid rebeccapurple;
  border-radius: 1rem;
  margin-top: 32px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  margin-left: 25vh;
  text-decoration: none;
  color: rebeccapurple;
  margin-bottom: 12px;
  font-size: 1.5rem;
}

.card_meio span{

  font-size: 0.9rem;
  font-family: "Raleway", sans-serif;
}

.card_meio ul li{
  margin-bottom: 9px;
  margin-top: 19px;
  list-style-type: none;
  margin-left: 2vh;

}

.card_meio h3{

  color: orange;
  text-align: center;
  font-family: "Reddit Sans", sans-serif;
  align-items: center;
}

.card_meio #editar{
   margin-left: 12px;
   color: aliceblue;
   font-size: 0.9rem;
   font-family: "Raleway", sans-serif;
   width: 12%;
   background-color: orange;
   border: 2px solid orange;
   transition: 0.5s;
}

.card_meio #excluir{
  width: 12%;
  color: aliceblue;
  margin-left: 22px;
  font-family: "Raleway", sans-serif;
  font-size: 0.9rem;
  background-color: orange;
  border: 2px solid orange;
  transition: 0.5s;
}

.card_meio #excluir:hover{
  background-color: aliceblue;
  color: orange;
}

.card_meio #editar:hover{
  background-color: aliceblue;
  color: orange;
}

.resultado{
  width: 40%;
  color: rebeccapurple;
  font-size: 1.5rem;
  text-align: center;
  margin-left: 43vh;
  align-items: center;
  font-family: "Reddit Sans", sans-serif;
}


</style>
