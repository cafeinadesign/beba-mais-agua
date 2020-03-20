<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <p>
      <button v-on:click="count++">(+)</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    contador: Number
  },
  data: function() {
    return {
      count: this.contador
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
