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
    this.setRem();
// 窗口大小变化时重置 rem
    window.onresize = () => {
      this.setRem();
    };
  },
  //
  methods:{
    setRem() {
  // 默认使用100px作为基准大小
  const baseSize = 192;
  const baseVal = baseSize / 1920;
  const vW = window.innerWidth; // 当前窗口的宽度
  const rem = vW * baseVal; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
  window.$size = rem / 100;
  document.documentElement.style.fontSize = rem + "px";
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
