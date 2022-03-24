<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Graphic />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Graphic from '@/components/Graphic.vue'; // @ is an alias to /src

@Options({
  components: {
    Graphic,
  },
})
export default class HomeView extends Vue {}
</script>
