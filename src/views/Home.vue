<template>
  <div class="ion-text-center">
    <img alt="Vue logo" src="../assets/logo.png" class="ion-padding">
    <HelloWorld v-bind:contador="0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
