<template>
  <div class="about">
  
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg=" page securisé - About "/>

    
  </div>
</template>

<script>

  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'About',
    components: {
      HelloWorld
    },
   
    data () {
      return {
      }
    }
}

</script>

<style>

  .form-example{
    margin-top: 40px;
    border: 3px solid #5fac64;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 5px;
  }

  .form-example1{
    margin-top:10px
  }

</style>