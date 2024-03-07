

<template>
<div class="box" @scroll="Handscroll" ref="box">
  <!-- 虚拟列表 -->
  <div class="list-all" :style="{ height: totalHeight + 'px' } ">
<!--    真实-->
    <div  ref=“excursion“ :style="{top:excursionTop+'px',position:'relative'}" style="height: 50px;width: 100%;line-height: 50px" v-for="(item,index) in visibleItems" :key="index">{{item}}</div>
  </div>
</div>
</template>
<script >
export default {
  data(){
    return{
      items: [], // 所有数据
      visibleItems: [], // 可见的数据项
      itemHeight: 50, // 列表项高度
      visibleCount: 0, // 可见的列表项数量
      startIndex: 0, // 开始渲染的列表项索引
      totalHeight:0 //虚拟列表高度
    }
  },
  computed:{
    excursionTop() {

      return this.startIndex * this.itemHeight;
    }
  },
  mounted() {

    // 计算可见的列表项数量
    this.visibleCount = Math.ceil(
      this.$refs.box.clientHeight / this.itemHeight
    );
    this.init();
    this.updateVisibleItems();

  },

  methods:{
    init(){
      for(let i=1 ;i<=10000;i++){
        this.items.push(i)
      }
      this.totalHeight = this.items.length * this.itemHeight;
    },
    Handscroll(){
      //获取滚动条位置
       let scrollTop= this.$refs.box.scrollTop;
      this.startIndex = Math.floor(scrollTop / this.itemHeight);
      // 更新可见的列表项
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      // 根据开始索引和可见列表项数量切片获取可见的数据项
      this.visibleItems = this.items.slice(
        this.startIndex,
        this.startIndex + this.visibleCount
      );
    }
  }
}
</script>
<style scoped lang="scss">
.box{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
   height: 300px;
  width: 300px;
  overflow-y: scroll;
  background-color: yellow;
  .list-all{
    height: 300px;
    width: 200px;
    margin-left: 50px;
    text-align: center;
  }
}
</style>
