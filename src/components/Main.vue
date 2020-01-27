<template>
  <div id="cadastro">
        <div id="login-sucess" v-if="login">
            <strong>Login realizado com sucesso!</strong><br>
        </div>

        <div id="login-fail" v-if="wrong_user">
            <strong>Usuário ou senha não encontrados :(</strong><br>
        </div>
        <form id="form" name="form">
        <div id="formulario" v-if="seen">
            <label for="">Usuário</label>
            <input type="text" name="user" id="user" v-model="user">
        </div>

        <div id="formulario" v-if="seen">
            <label for="">Password</label>
            <input type="password" name="password" id="password" v-model="password" >
        </div>

        <div id="formulario" v-if="seen">
            <label for="">Comentários</label>
            <textarea name="comment" cols="30" rows="10" id="comment" v-model="comment"></textarea>
        </div>

        <div id="input_block" v-if="seen">

            <div id="formulario">
                <label for="">Escolha</label>
                <select name="select" id="select" v-model="select">
                    <option value="Escolha" selected>Escolha</option> 
                    <option value="Masculino" >Masculino</option>
                    <option value="Feminino" >Feminino</option>
                    </select>          
            </div>
    
            <div id="formulario">
                <label for="">Check Box</label>
                <input type="checkbox" name="check">
            </div>

            <div id="formulario">
                <label for="">Você gostaria de trabalhar?</label><br><br>
                <input type="radio" name="radio" v-model="radio1" value="Sim" id="radio1">Sim<br>
                <input type="radio" name="radio" v-model="radio2" value="Claro" id="radio2">Claro<br>
                <input type="radio" name="radio" v-model="radio3" value="obvio que sim ne brow" id="radio3">obvio que sim ne brow<br>
            </div>

            <div id="buttones">
                <button v-on:click.prevent="validaForm" id="submitbutton" type="submit">Submeter</button>
                <button type="reset" id="resetbutton">Reset</button>
            </div>

        </div>

        <div id="show-message" v-if="dados">
            <span>Seus Dados<br></span>
            <br>
            <strong>Usuário:</strong>
            <p>{{user}}</p>
            <strong>Password:</strong>
            <p>Senha Criptografada: {{criptpassword}}</p>
            <strong>Comentário:</strong>
            <p>{{comment}}</p>
            <p>----------</p>
            <strong>Você quer trabalhar? - Opções Escolhidas</strong>
            <div id="options" v-bind:key="option.id" v-for="option in options">
                <p>{{option}}</p>
            </div>
            <strong>Sexo</strong>
            <p>{{select}}</p>            
        </div>

    </form>
  </div>
</template>

<script>
/* eslint-disable no-console */ 
String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
};

const {users}=require('../utils/autenticacao.json');

export default {
    data(){
      return{
          user: '',
          password: '',
          comment: '',
          criptpassword: '',
          seen: true,
          dados: false,
          login:false,
          wrong_user: false,
          options: [],
          radio1: '',
          radio2: '',
          radio3: '',
          select: '',
          }
    },
    methods:{
        validaForm(){
            if(!this.comment || !this.user || !this.password){
                alert("Você precisa preencher todos os dados!");
                return false;
            }
            else{
                this.seen=false;
                this.dados=true;
                this.criptpassword=this.password.hashCode();
                this.autentic();
            }
        },
        autentic(){
          for(let i=0;i<users.length;i++){              
            if(this.user==users[i].login && this.criptpassword==users[i].criptpassword){
                console.log("Login realizado com sucesso");
                this.login=true;
                return true;
            }
          }
          this.wrong_user=true;
          console.log("Usuário ou senha não encontrados!")
          return false;
        },
    },
    watch:{
        login(e){
            console.log(e);
        },
        radio1(e){
            this.options.push(e)
            console.log(e);
        },
        radio2(e){
            this.options.push(e)
            console.log(e);
        },
        radio3(e){
            this.options.push(e)
            console.log(e);
        },
        select(e){
            console.log(e);
        }
    },
  }
/* eslint-enable no-console */

</script>

<style scoped>
form{
    margin-top: 30px;
    margin: 0 auto;
}

#formulario {
    margin: 0 auto;
    /*padding: 20 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start; */
    margin-top: 10px;
    display: grid;
    flex-direction: inherit;
    justify-content: center;
    align-items: center;

    width: 300px;
    background: #FFF;
    box-shadow: 0 0 14px;
    border-radius: 2px;
    padding: 30px 20px;
}

#buttones {
    margin: 0 auto;
    display: flex;
    flex-direction: inherit;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 30px 20px;
}

#formulario label{
    color: rgb(48, 44, 44);
    font-size: 14px;
    font-weight: bold;
    display: flex;
}

#formulario input{
    margin-top: 10px;
    color: rgba(57, 0, 245, 0.911);
}

#input_block #formulario{
    margin-top: 20px;
    display: grid;
    /* gap: 20px; */
    grid-template-columns: 1fr 1fr;
} 

#cadastro button{
    margin: 0 auto;
    background: blue;
    font-size: 14px;
    color: #FFF;
    padding: 10px 15px;
    border-radius: 5px;
    border:0;
    font-weight: bold;
    cursor: pointer;

}

#cadastro button:hover{
    margin: 0 auto;
    background: rgb(79, 79, 231);
    font-size: 14px;
    color: #FFF;
    padding: 10px 15px;
    border-radius: 5px;
    border:0;
    font-weight: bold;
    cursor: pointer;

}


#cadastro #resetbutton{
    grid-template-columns: 1fr 1fr;
}

#login-sucess{
    font-size: 20px;
    margin-top: 10px;
    color: red;
    width: 30%;
    margin-left: 20px;
    margin: auto 0;
}

#login-fail{
    font-size: 20px;
    margin-top: 10px;
    color: red;
    width: 30%;
    margin-left: 20px;
    margin: auto 0;
    display: flex;
}

#show-message{
    margin-left: 20px;
    display: grid;
}

#show-message strong{
      color: rgba(19, 174, 179, 0.37);
      margin-bottom: 20px;
      margin-left: 20px;
      font-size: 24px;
}

#show-message span{
    color: rgba(57, 0, 245, 0.911);
    font-weight: 900;
    margin-bottom: 20px;
    font-size: 44px;
}


#show-message table{
    margin-bottom: 20px;
    margin-left: 20px;
}

#show-message p{
    color: #FFF;
    margin-bottom: 20px;
    margin-left: 20px;
}
</style>