<!-- 
- @author:CaoJing
- @create:2018/9/25
- github:https://github.com/Mirror198829
-->
<template>
  <div class="home">
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
            <img src="https://pic4.zhimg.com/ccc6ed02d8dd330fcd0163d4bbb9abaf_is.jpg">
          </i>
        </div>
      </div>
      <div class="header pageHeader"></div>
    </header>
    <div class="main">
      <div class="routerBody">123123123</div>
      <router-view class="routerBody"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods:{
    optimizeFixed(){
      $(document).on('scroll', function () {
         $('#topHeader').scrollLeft($(document).scrollLeft())
       })
    }
  },
  mounted(){
    this.optimizeFixed() //解决fixed布局bug
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../less/index.less';
@headerH:52px;
@baseTheme:#fff;
@centerW:1000px;
@paddingW:16px;
.home{width:100%;min-height:100%;background-color: rgb(246, 246, 246);min-width: @centerW + @paddingW + @paddingW;
  header{background-color: @baseTheme;height:@headerH;position:fixed;top:0;width:100%;box-shadow: 0 1px 3px rgba(26,26,26,.1);overflow: hidden;
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
        .iconR{margin-left:40px;color:#8590a6;font-size:20px;}
        .user{border-radius:2px;overflow: hidden;width: 30px;height:30px;}
      }
    }
  }
  .main{width:100%;min-height: 100%;box-sizing: border-box;padding-top:@headerH + 10px;
    .routerBody{width:@centerW;background-color: @baseTheme;margin:0 auto;height:1300px;padding:0 @paddingW;}
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
