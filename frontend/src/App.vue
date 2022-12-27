<template>
  <Page></Page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Page from "./components/Page.vue";

@Options({
  components: {
    Page,
  },
})
export default class App extends Vue {}
</script>
