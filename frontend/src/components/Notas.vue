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
    <h2>
      <img src="../assets/handshake.svg" alt="Aperto de mãos." />
      Notas Fiscais
    </h2>
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
        <td>
          {{
            Number(nota.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </td>
        <td>{{ nota.orderStatus }}</td>
        <td><button class="button" disabled>Dados do cedente</button></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
#notas-painel {
  padding: 5%;
}

tr th, td {
  padding: 2.5px;
  width: 120px;
  height: 20px;
  font-size: 14px;
}

td .button {
  border-width: 1px;
  border-radius: 25px;
}
</style>
