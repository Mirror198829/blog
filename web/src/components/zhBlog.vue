<!-- 
- @author:CaoJing
- @create:2018/9/30
- github:https://github.com/Mirror198829
-->
<template>
  <div class="blogWrap">
    <h2 class="blogTitle">什么白酒才是纯粮食酒？</h2>
    <div class="blogMain">
      <div class="blogContent">
        浑沌七日死： 当然有啊，我以前在深圳搬砖的时候，前后的工友都是捉摸不透的。可能你前面那个美工，拿着10000元和你喜笑颜颜感叹生活不易，都是混一口饭吃…<span class="readAll">阅读全文</span>
      </div>
    </div>
    <div class="blogActions">
      <el-button type="primary" plain size="mini" icon="el-icon-caret-top">赞同 1.8K</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-caret-bottom"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhBlog',
  data () {
    return {
      
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
@import '../less/index.less';
@borderColor:#f1f3f7;
@fontColor:#1a1a1a;
.blogWrap{width:100%;border-bottom: 1px solid @borderColor;padding:20px;box-sizing: border-box;
  .blogTitle{font-size:18px;color:@fontColor;font-weight:600;}
  .blogMain{
    .blogContent{line-height: 1.6;font-size: 15px;color:@fontColor;margin-top:9px;
      .readAll{color:#175199;margin-left:4px}
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
