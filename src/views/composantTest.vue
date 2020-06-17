<template>

  <div class="login">
  
    <img alt="Vue logo" src="../assets/logo.png">
    <ComposantWorld msg="Bienvenue sur la page Composant" btn="Bouton dans composant" couleur='red' v-on:Btn="action()"/>


    <div><h3> Hello cette page</h3></div>
  </div>
</template>

<script>

  // @ is an alias to /src
  import ComposantWorld from '@/components/ComposantWorld.vue'

  export default {
    name: '',
    components: {
      ComposantWorld
    },
   
    data () {
      return {          
      }
    },
    methods: {
        action: function () {
            alert('ok')
        }
    }


   }

</script>

<style>

  .form-example{
    margin-top: 40px;
    border: 3px solid #5fac64;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 5px;
  }

  .form-example1{
    margin-top:10px;
  }

  .label{
      float:left;
  }

</style>