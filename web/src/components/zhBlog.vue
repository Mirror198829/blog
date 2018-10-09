<!-- 
- @author:CaoJing
- @create:2018/10/08
- github:https://github.com/Mirror198829
-->
<template>
  <div class="blogWrap">
    <h2 class="blogTitle">{{blogDetail.title}}</h2>
    <div class="blogMain">
      <div class="blogContent">
        {{blogDetail.detail}}<span class="readAll">阅读全文</span>
      </div>
    </div>
    <div class="blogActions">
      <el-button type="primary" plain size="mini" icon="el-icon-caret-top">赞同 {{blogDetail.agree}}K</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-caret-bottom"></el-button>
      <div class="action">
        <i class="fa fa-comment"></i>
        <span>{{comment}}条评论</span>
      </div>
      <div class="action">
        <i class="fa fa-send"></i>
        <span>分享</span>
      </div>
      <div class="action">
        <i class="fa fa-star"></i>
        <span>收藏</span>
      </div>
      <div class="action">
        <i class="fa fa-heart"></i>
        <span>感谢</span>
      </div>
      <div class="action">
       <svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
        <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path>
       </svg>
      </div>
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
  computed:{
    comment(){
      let comment = this.blogDetail.comment
      return toThousands(comment)
      function toThousands(num) {
           var result = [ ], counter = 0;
           num = (num || 0).toString().split('');//把数字打成数组
           for (var i = num.length - 1; i >= 0; i--) {
               counter++;
               result.unshift(num[i]);
               if (!(counter % 3) && i != 0) { result.unshift(','); }
           }
           return result.join('');
       }  
    },
    agreeNum(){

    }
  },
  methods:{

  },
  props:{
    blogDetail:{
      type:Object,
      require:true
    }
  },
  mounted(){},
  created(){}
}
</script>
<style lang="less">
  .el-button--mini,.el-button--mini.is-round{padding:7px !important;}
</style>
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
  .blogActions{display: flex;height:28px;align-items: center;margin-top:10px;
    .action{color:#8590a6;font-size:14px;cursor: pointer;margin-left:24px;display: flex;align-items: center;
      &:hover{color:#5b6478;}
      i{margin-right:5px;}
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
