<!-- 
- @author:CaoJing
- @create:2018/9/25
- @last edit:2018/9/28
- github:https://github.com/Mirror198829
-->
<template>
  <div class="home">
    <zh-header></zh-header>
    <div class="main">
      <router-view class="routerBody"></router-view>
    </div>
  </div>
</template>

<script>
import zhHeader from '@/components/zhHeader'
export default {
  name: '',
  data () {
    return {
    }
  },
  components:{
    zhHeader
  },
  methods:{
  },
  mounted(){
    
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
.home{width:100%;height:100%;background-color: rgb(246, 246, 246);min-width: @centerW + @paddingW + @paddingW;display: flex;flex-direction: column;
  .main{width:100%;flex:1;padding-top:10px;overflow-y: auto;overflow-x: hidden;
    .routerBody{width:@centerW;margin:0 auto;padding:0 @paddingW;}
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
