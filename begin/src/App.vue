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
  },
  //
  methods:{
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
