<template>
  <div>
    <h1>{{ count }}</h1>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed" v-on:click="count++">
      <ion-fab-button color="secondary">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    contador: Number
  },
  data: function() {
    return {
      count: this.contador
    };
  }
};
</script>