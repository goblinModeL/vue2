<template>

 <transition name="All">
   <router-view />
 </transition>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      name:'',
      mesName:'',
      mesAge:'',
    }
  },
  mounted(){
    // 初始化
    // this.setRem();
// 窗口大小变化时重置 rem
    window.onresize = () => {
      // this.setRem();
    };
  },
  //
  methods:{
    setRem() {
      // // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
      // const scale = document.documentElement.clientWidth / 1920
      // // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
      // document.documentElement.style.fontSize = 16 * Math.min(scale, 2) + 'px'
}

}
}
</script>
<Style>

.el-message {
  z-index: 99999999 !important;
}
.fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s;/* 根据需要设置动画持续时间和其他属性 */
}
.fade-enter, .fade-leave-to, .slide-enter, .slide-leave-to {
  opacity: 0;

}

</Style>
