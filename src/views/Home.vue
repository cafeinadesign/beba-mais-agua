<template>
  <div class="ion-text-center ion-padding">
    <img alt="Vue logo" src="../assets/logo.png" height="100">
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
