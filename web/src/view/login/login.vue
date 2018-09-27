<!-- 
- @author:CaoJing
- @create:2018/9/20
- @lastEdit:2018/9/25
- github:https://github.com/Mirror198829
-->
<template>
  <div class="loginPage">
    <div class="loginBox">
     <section class="container">
      <div id="card">
        <figure class="front"  v-if="isFlip">
          <div class="lgMain">
            <div class="title">
              <h1>知乎</h1>
              <h5>登录知乎，发现更大的世界</h5>
            </div>
            <el-form :rules="loginRules" :model="loginForm" ref="loginForm" style="position: relative;">
              <p class="errTip" v-if="showErrMsg">用户名或者密码有错</p>
              <el-form-item prop="name">
                <el-input v-model="loginForm.name" placeholder="请输入用户名" @focus="showErrMsg = false"></el-input>
              </el-form-item>

              <el-form-item prop="pass">
                <el-input v-model="loginForm.pass" placeholder="请输入密码" type="password" @focus="showErrMsg = false"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="loginBtn"  @click="submitForm('loginForm')" :loading="loginForm.isLoading">登 &nbsp &nbsp录</el-button>
              </el-form-item>
            </el-form>           
            <p class="info">二维码登陆 · 海外手机登录 · 社交账号登录</p>
          </div>
          <div class="lgFooter">
            还没有帐号？<a href="javascript:void(0)" class="rotateTxt" @click="isFlip=!isFlip;registerSuccess=false;resetForm('loginForm')">注册</a>
          </div>
        </figure>
        <figure class="back" v-if="!isFlip">
          <div class="lgMain">
            <div class="title">
              <h1>知乎</h1>
              <h5 v-show="!registerSuccess">注册知乎，发现更大的世界</h5>
            </div>
            <el-form v-show="!registerSuccess" :rules="registRules" :model="registForm" ref="registForm">
              <el-form-item prop="username">
                <el-input v-model="registForm.username" placeholder="请输入注册用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registForm.password" ref="passwordinput" placeholder="请输入注册密码" type="password"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input v-model="registForm.checkPass" ref="passwordinput" placeholder="请再次输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button :loading="registForm.isLoading" type="primary" class="loginBtn" @click='submitForm("registForm")'>注 &nbsp &nbsp册</el-button>
              </el-form-item>
            </el-form>          
            <p v-show="!registerSuccess" class="info">注册即代表同意《知乎协议》《隐私政策》</p>
            <div class="successBox" v-if="registerSuccess">
              <h4>
                <i class="el-icon-success"></i>
                <span>恭喜您注册成功!</span>
              </h4>
              <p>您可以在知乎疑难解惑</p>
              <p>您可以在知乎进行信息查询</p>
              <p>您可以在知乎发表信息</p>
              <p>您可以在知乎寻找大牛交流</p>
              <p>知乎一下，您就知道。。。</p>
            </div>
          </div>
          <div class="lgFooter">
            已有帐号？<a href="javascript:void(0)" class="rotateTxt" @click="isFlip=!isFlip;resetForm('registForm')">登录</a>
          </div>
        </figure>
      </div>
      </section> 
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registForm.checkPass !== '') {
          this.$refs.registForm.validateField('checkPass');
        }
        callback();
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    let validateHasName = (rule, value, callback) => {
      this.$http.get(`api/user/size?name=${this.registForm.username}`)
      .then(res=>{
         let hasName = res.data
         if(hasName){
          callback(new Error('用户名已经存在'))          
         }else{
          callback()
         }
      })
    }
    return {
      showErrMsg:false,
      isFlip:true,
      registerSuccess:false,
      registForm:{
        username:'',
        password:'',
        checkPass:'',
        isLoading:false
      },
      loginForm:{
        name:'',
        pass:'',
        isLoading:false
      },
      registRules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {pattern: /^[a-zA-Z\d\u4e00-\u9fa5]{1,10}$/,message: '只能输入3-10位字母或数字',trigger:'blur'},
          {validator:validateHasName,trigger:'blur'}
        ],
        password:[
          {required:true,message:'密码不得为空',trigger:'blur'},
          {validator: validatePass, trigger: 'blur' },
          {pattern: /^[a-zA-Z\d]{1,8}$/,message: '只能输入不超过8位字母或数字',trigger:'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur' },
          {pattern: /^[a-zA-Z\d]{1,8}$/,message: '只能输入不超过8位字母或数字',trigger:'blur'}
        ]
      },
      loginRules:{
        name:[
          {required:true,message:'请输入登录用户名',trigger:'blur'},
          {pattern: /^[a-zA-Z\d\u4e00-\u9fa5]{1,10}$/,message: '只能输入3-10位字母或数字',trigger:'blur'}
        ],
        pass:[
          {required:true,message:'登录密码不得为空',trigger:'blur'},
          {pattern: /^[a-zA-Z\d]{1,8}$/,message: '只能输入不超过8位字母或数字',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this[formName].isLoading = true
          let userInfo = this[formName]
          if(formName == 'registForm'){
            this.$http.post('api/user/register', {
              name: userInfo.username,
              pass: userInfo.password
            })
            .then( res=>{            
              setTimeout(()=>{
                this.registerSuccess = true
                this.resetForm(formName)
              },2000)
            })
          }else{
            this.$http.post('api/user/login',{
              name: userInfo.name,
              pass: userInfo.pass
            })
            .then(res=>{
              let status = res.data
              if(status){
                setTimeout(()=>{
                  let name = userInfo.name
                  this.$store.commit('saveUserName',name)
                  this.$router.push({name:'Home'})
                },2000)
              }else{
                this.resetForm(formName) 
                this.showErrMsg = true
              }
            })
          }         
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
       this.$refs[formName].resetFields()
       this[formName].isLoading = false
    }
  },
  mounted(){},
  created(){}
}
</script>
<style lang="less">
  .loginPage .el-form-item:last-child{margin-bottom:0px}
  // .loginPage .el-form-item__content{position: static;}
  // .loginPage .el-input{position: static;}
</style>
<style  scoped lang="less">
@import '../../less/index.less';
@containerH:530px;
@containerW:430px;
.loginPage{
  height: 100%;background:#b8e5f8 url('../../assets/login/bg.png');background-repeat: no-repeat;background-size: cover;text-align:center;min-height:@containerH + 40px;min-width:@containerW + 20px;
  .loginBox{display: flex;justify-content: center;height: 100%;align-items: center;
    .container { width: @containerW;height:@containerH;
      #card {width: 100%;height: 100%;
        figure {width: 100%;height: 100%;display: flex;flex-direction: column;
          .lgMain{flex:1;display: flex;flex-direction:column;box-sizing: border-box;padding:0 40px;
            .errTip{font-size:12px;color:#f56c6c;text-align: left;position: absolute;top:-22px;}
            h1{color:@theme;font-weight:400;font-size:50px;line-height:2;}
            h5{color:@theme;font-weight:400;font-size:22px;margin-bottom:40px;}
            .info{flex:1;color:#8590a6;font-size:14px;display: flex;justify-content: center;align-items: center;}
            .successBox{flex:1;margin-top:40px;padding:0 40px;
              h4{font-size:25px;font-weight:400;display: flex;justify-content: center;align-items:center;margin-bottom:20px;
                i{color:#28b541;font-size:40px;margin-right:15px;}
              }
              p{font-weight:300;text-align:left;line-height:2;text-indent:2em;font-size:14px;}
            }
          }
          .loginBtn{width: 100%;margin-top:10px;background-color: @theme;}
          .lgFooter{height: 58px;line-height:58px;background-color:#f6f6f6;color:#1a1a1a; 
            .rotateTxt{color:@theme;}
          }
        }
        .front {background: #fff;backface-visibility:hidden;}
        .back {background-color: #fff;}  
        &.flipped {display: block;
        }    
      } 
    }
  }
}
 

// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
