<template>
  <div class="hello">
    <input type="text" name="username" placeholder="用户名" v-model="username"/>
    <input type="text" name="pass" placeholder="密码" v-model="password"/>
    <button @click="register">立即注册</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    register(){
      this.$http.post('http://localhost:8081/api/user/register',{
        password:this.password,
        username:this.username
      }).then(res=>{
        alert('注册成功')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
