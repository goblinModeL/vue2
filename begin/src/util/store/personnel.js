
export const store1=({
  namespaced: true,
  state:{
    user:'',
    STATE_USER:false
  },
  mutations:{
    setUser(state,user){
      state.user=user
      state.STATE_USER=true
    },
     clearUser(state){
       state.user=''
       state.STATE_USER=false
     }
  } ,
  actions:{
    AsetUser({commit},da){
      commit('setUser',da)
    },
    AclearUser({commit}){
      commit('clearUser')
    },
  }
})

