<template>
  <div>
    <header>
      <img
        src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg"
        alt="Cashforce logo"
      />
    </header>
    <main class="container">
      <aside id="aside-img">
        <img src="../assets/handshake.svg" alt="Ícone de aperto de mãos" />
        Notas Fiscais
      </aside>
      <NotasFiscais></NotasFiscais>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NotasFiscais from "@/components/Notas.vue";

@Options({
  components: {
    NotasFiscais,
  },
})
export default class Page extends Vue {}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  background-color: #fbfdfe;
  overflow: hidden;
}

header {
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: start;
}

header img {
  width: 12vw;
  margin-left: 3vw;
}

main.container {
  margin: 1vh 3vw;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
}

#aside-img {
  width: 10vw;
  margin-top: 2vh;
  margin-right: 5vw;
  height: 10vh;
  color: #00ad8c;
}
</style>
