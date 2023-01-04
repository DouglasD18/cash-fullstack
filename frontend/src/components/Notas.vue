<script lang="ts">
import { defineComponent } from "vue";
import api from "@/services/api";
import INotaFiscal from "../interfaces/index";

export default defineComponent({
  name: "NotasFiscais",
  data() {
    return {
      notas: <INotaFiscal[]> [],
    }
  },
  methods: {
    fetchNotas() { 
      api.get("/notas").then((response) => {
        this.notas = response.data;
        console.log(response);
      });
    }
  },
  mounted() {
    this.fetchNotas()
  }
});
</script>

<template>
  <div id="notas-painel">
    <h3>
      <img src="../assets/handshake.svg" alt="Aperto de mãos." />
      Notas Fiscais
    </h3>
    <p>Vizualize as notas fiscais que você tem.</p>
    <table>
      <tr>
        <th>NOTAS FISCAIS</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
        <th></th>
      </tr>
      <tr v-for="(nota, i) in notas" :key="i">
        <td>{{ nota.orderNumber }}</td>
        <td>{{ nota.buyerName }}</td>
        <td>{{ nota.providerName }}</td>
        <td>{{ nota.emissionDate }}</td>
        <td class="green">
          {{
            Number(nota.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </td>
        <td class="green">{{ nota.orderStatus.toUpperCase() }}</td>
        <td><button class="button" disabled>Dados do cedente</button></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
img {
  width: 1.3em;
}

p {
  color: #a1a8b8;
}

#notas-painel {
  width: 75vw;
  height: 100vh;
  font-size: large;
  background-color: #ffffff;
}

tr {
  height: 60px;
  border: 1px solid #a1a8b8;
}

th, td {
  padding: 5px;
  font-size: 12px;
  text-align: center;
}

th {
  color: #a1a8b8;
}
td.green {
  color: #00ad8c;
}

td .button {
  height: 30px;
  width: 130px;
  padding: 2px;
  border: solid 1px;
  border-radius: 25px;
  box-sizing: border-box;
  background-color: #fbfdfe;
  color: #a1a8b8;
}
</style>
