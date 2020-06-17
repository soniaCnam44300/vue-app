<template>

  <div class="login">
  
    <img alt="Vue logo" src="../assets/logo.png">
    <loginWorld msg="Se connecter pour accéder au information"/>

        <form>
            <div class="form-example" id="main">
                <div class="form-example1">
                <label class="label" for="name"> Pseudo: </label>
                <input class="input" type="text" v-model="name" name="name" id="name" required style="margin-left: 40px;">
            </div>
            <div class="form-example1">
                <label class="label" for="password"> Mot de Passe: </label>
                <input class="input" type="password" v-model="password" name="password" id="password" required>
            </div>
            <div class="form-example1">
                <input class='bouton' type="submit" v-on:click="connect()" value="Valider">
            </div>
            </div>  
        </form>
    
  </div>
</template>

<script>

  // @ is an alias to /src
  import LoginWorld from '@/components/LoginWorld.vue'

  export default {
    name: 'Login',
    components: {
      LoginWorld
    },
   
    data () {
      return {
          password:'admin',
          name:'admin'
          
      }
    },
    methods: {
        connect() {
            
            if((this.name ==='admin')&&(this.password ==='admin')){
                
               this.$router.push({ 
                    name: 'About', 
                    query: { 
                        login : this.name,
                        password : this.password,
                } 
               
                });
               
            }else{
                alert('faux')
            }
          
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
.bouton{
    height: 30px;
    width: 150px;
    border-radius: 5px;
    margin-top:15px;
    }
 
 .bouton:hover{
     background-color:#b7c3b2;
 }
  
</style>