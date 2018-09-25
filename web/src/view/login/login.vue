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
        <figure class="back"  v-if="!isFlip">
          <div class="lgMain">
            <div class="title">
              <h1>知乎</h1>
              <h5>登录知乎，发现更大的世界</h5>
            </div>
            <el-form>
              <el-form-item>
                <el-input v-model="loginForm.username" @keyup.enter.native="$refs.passwordinput.focus()" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="loginForm.password" @keyup.enter.native="onLoginBtnClick" ref="passwordinput" placeholder="请输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="loginBtn"  @mousedown.prevent="getInfo()">登 &nbsp &nbsp陆</el-button>
              </el-form-item>
            </el-form>           
            <p class="info">二维码登陆 · 海外手机登录 · 社交账号登录</p>
          </div>
          <div class="lgFooter">
            没有帐号？<a href="javascript:void(0)" class="rotateTxt" @click="isFlip=!isFlip">注册</a>
          </div>
        </figure>
        <figure class="front" v-if="isFlip">
          <div class="lgMain">
            <div class="title">
              <h1>知乎</h1>
              <h5>注册知乎，发现更大的世界</h5>
            </div>
            <el-form :model="registForm" :rules="registRules" ref="registForm">
              <el-form-item prop="username">
                <el-input v-model="registForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registForm.password" ref="passwordinput" placeholder="请输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registForm.password" ref="passwordinput" placeholder="请再次输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="loginBtn" @click='submitRegistForm("registForm")'>注 &nbsp &nbsp册</el-button>
              </el-form-item>
            </el-form>          
            <p class="info">注册即代表同意《知乎协议》《隐私政策》</p>
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
    return {
      isFlip:true,
      registForm:{
        username:'',
        password:''
      },
      loginForm:{
        username:'',
        password:''
      },
      registRules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password:[
          {required:true,message:'密码不得为空',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitRegistForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
       this.$refs[formName].resetFields();
    },
    getInfo(){
      alert(123)
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
            h1{color:@theme;font-weight:400;font-size:50px;line-height:2;}
            h5{color:@theme;font-weight:400;font-size:22px;margin-bottom:40px;}
            .info{flex:1;color:#8590a6;font-size:14px;display: flex;justify-content: center;align-items: center;}
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
