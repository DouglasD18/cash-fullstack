<template>
  <div id="content">
    <header>
      <img
        src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg"
        alt="Cashforce logo"
      />
    </header>
    <main class="container">
      <aside id="aside-img">
        <img src="../assets/handshake.svg" alt="Ícone de aperto de mãos" />
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
div#content {
  width: 0;
  height: 0;
  position: absolute;
}

header {
  position: fixed;
  height: 10%;
  width: 100%;
  padding: 1%;
}

header img {
  width: 20%;
}

main.container {
  margin: 3%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

aside#aside-img {
  width: 100%;
}

aside#aside-img img {
  width: 30px;
}
</style>
