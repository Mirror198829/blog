<!-- 
- @author:CaoJing
- @create:2018/9/28
- @last edit:2018/9/28
- github:https://github.com/Mirror198829
-->
<template>
  <div class="homePage">
    <div class="pageLeft">123</div>
    <div class="pageRight">
      <div class="card global">
        <li class="globalWriteItem" v-for="item in globalWriteLst">
          <i class="fa globalWriteItemIcon" :class="item.icon"></i>
          <span>{{item.txt}}</span>
        </li>
      </div>
      <div class="card category">
        <li class='categoryItem' v-for="item in categoryLst" @mouseover="item.isHover = true" @mouseout='item.isHover = false'>
          <i class="fa" :class="item.icon" :style="{color:item.color}"></i>
          <span :style="{color:item.isHover?item.color:'#8590a6'}">{{item.txt}}</span>
        </li>
      </div>
      <div class="sideBar">
        <li class="sideBarItem" v-for="item in sideBarLst">
          <div class="sideBarItemLeft">
            <i class="fa" :class="item.icon"></i>
            <span>{{item.txt}}</span>
          </div>
          <div v-if="item.tag" class="tag">{{item.tag}}</div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      globalWriteLst:[
        {icon:'fa-file-text-o',txt:'写回答'},
        {icon:'fa-edit',txt:'写文章'},
        {icon:'fa-tablet',txt:'写想法'}
      ],
      categoryLst:[
        {icon:'fa-star',txt:'Live',color:'rgb(255, 207, 0)',isHover:false},
        {icon:'fa-book',txt:'书店',color:'rgb(67, 212, 128)',isHover:false},
        {icon:'fa-recycle',txt:'圆桌',color:'rgb(0, 132, 255)',isHover:false},
        {icon:'fa-pencil',txt:'专栏',color:'rgb(15, 136, 235)',isHover:false},
        {icon:'fa-money',txt:'付费咨询',color:'rgb(84, 120, 240)',isHover:false},
      ],
      sideBarLst:[
        {icon:'fa-star',txt:'我的收藏',tag:''},
        {icon:'fa-question-circle',txt:'我关注的问题',tag:'12'},
        {icon:'fa-user-plus',txt:'我的邀请',tag:'37'},
        {icon:'fa-tty',txt:'社区服务中心',tag:''},
        {icon:'fa-cc',txt:'版权服务中心',tag:''},
        {icon:'fa-pencil-square',txt:'公共编辑动态',tag:''}
      ]
    }
  },
  components:{
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
@boundaryW:10px;
.homePage{display: flex;
  .pageLeft{background-color: #fff;margin-right:@boundaryW;width: 690px;}
  .pageRight{flex:1;
    .card{width:100%;background-color: #fff;box-sizing:border-box;padding:0 5px;display: flex;margin-bottom: @boundaryW;
    }
    .global{justify-content: space-between;
      .globalWriteItem{display: flex;flex-direction:column;flex:1;padding:23px 0;text-align:center;cursor: pointer;
        .globalWriteItemIcon{color:#8590a6;margin-bottom:6px;font-size:18px;}
        span{color:#444;}
      }
    }
    .category{flex-wrap:wrap;width: 100%;padding-bottom:25px;
      .categoryItem{display: flex;flex-direction: column;width: calc(100% / 3);text-align:center;padding-top:25px;cursor: pointer;
        i{font-size:20px;}
        span{font-size:15px;margin-top:10px;transition: all .2s;}
      }
    }
    .sideBar{background-color: #fff;padding:5px 0;
      .sideBarItem{display: flex;justify-content: space-between;height:40px;align-items: center;padding:0 20px;cursor: pointer;font-size:14px;color:#8590a6;
        &:hover{background-color: #f6f6f6}
        &:hover .tag{background-color: #fff;}
        i{margin-right:10px;}
        .tag{padding:5px;background-color:  #f6f6f6;font-size:12px;}
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
