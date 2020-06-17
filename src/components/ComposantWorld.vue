<template>
  <div class="hello">
    <h1> {{ msg }}</h1>
          
  <button :style="{'backgroundColor': couleur}" @click="$emit('Btn')">{{ btn }}</button>
  </div>


</template>

<script>
export default {
  name: 'ComposantWorld',
  props: {
    msg: String,
    btn: String,
    couleur: String
  },
   methods: {
        action() {
        }
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
button{
  background-color:#5fac64;
  font-weight: bold;
  color: black;
  height:40px;
  width:150px;
  border: 3px solid #5fac64;
}

button{
  background-color:#5fac64;
  font-weight: bold;
  color: black;
  height:40px;
  width:150px;
  border: 3px solid #5fac64;

 
}

a[data-v-45c09359] {
    color: black;
    text-decoration: none;
}

</style>
