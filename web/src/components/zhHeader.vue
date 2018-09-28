<!-- 
- @author:CaoJing
- @create:2018/9/25
- @last edit:2018/9/28
- github:https://github.com/Mirror198829
-->
<template>
  <header id="topHeader">
    <div class="header appHeader">
      <div class="headerLeft">
        <strong>知 乎</strong>
        <nav>
          <a href="#">首页</a>
          <a href="#">发现</a>
          <a href="#">话题</a>
        </nav>
        <div class="searchBtn">
          <el-input placeholder='黎曼猜想证明现场' size="small" suffix-icon="el-icon-search"></el-input>
        </div>
        <div>
          <el-button type='primary' size="small">提问</el-button>
        </div>
      </div>
      <div class="headerRight">
        <i class="popover fa fa-bell iconR"></i>
        <i class="msg fa fa-wechat iconR"></i>
        <i class="user iconR">
          <img @click="showUserDetail = !showUserDetail" src="https://avatars0.githubusercontent.com/u/12668121?s=40&v=4">
          <ul class="userDetail" v-if="showUserDetail">
            <li class="menuItem">
              <i class="fa fa-user menuIcon"></i>
              <span>{{$store.getters.userName}}</span>
            </li>
            <li class="menuItem">
              <i class="fa fa-cog menuIcon"></i>
              <span>设置</span>
            </li>
            <li class="menuItem" @click="exitPage">
              <i class="fa fa-power-off menuIcon"></i>
              <span>退出</span>
            </li>
          </ul>
        </i>
      </div>
    </div>
    <div class="header pageHeader"></div>
  </header>
</template>

<script>
export default {
  name: 'zhHeader',
  data () {
    return {
      showUserDetail:false
    }
  },
  methods:{
    exitPage(){   
      this.$router.push({name:'Login'})
      this.$store.commit('exitPage')
    }
  },
  mounted(){
    
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../less/index.less';
@headerH:52px;
@baseTheme:#fff;
@centerW:1000px;
@paddingW:16px;
header{background-color: @baseTheme;height:@headerH;width:100%;box-shadow: 1px 1px 3px rgba(26,26,26,.1);position: relative;z-index: 10;
    .header{height: 100%;width: @centerW;padding:0 @paddingW;margin:0 auto;}
    .appHeader{height: 100%;display: flex;justify-content: space-between;
      .headerLeft{height:100%;display: flex;align-items: center;
        strong{color:@theme;font-size:30px;font-weight:400;margin-right:25px;}
        nav{font-size:15px;
          a{color:@fontColor;margin-right:26px;
            &:hover{color:@theme;}
          }
        }
        .searchBtn{margin-right:20px;}
      }
      .headerRight{height: 100%;display: flex;align-items: center;
        .iconR{margin-left:40px;color:#8590a6;font-size:20px;cursor: pointer;}
        .user{border-radius:2px;width: 30px;height:30px;position: relative;
          img{width: 30px;height:30px;border-radius:5px;}
          @userPadding:5px;
          @borderW:8px;
          .userDetail{position: absolute;top:50px;right:0;padding:@userPadding 0px;background-color: #fff;box-shadow:0 5px 20px rgba(26,26,26,.1);
            &:before {content: '';display: inline-block;border:@borderW solid transparent;border-bottom-color:#fff;top:-@userPadding - @borderW - 2px;right:9px;position: absolute;z-index: 1000}
            .menuItem{width:78px;padding: 0 20px;height: 36px;font-size:14px;display: flex;align-items: center;color:@fontColor;font-style:normal;cursor: pointer;
              &:hover{background-color: #f6f6f6}
              .menuIcon{margin-right:6px;}
            }
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
