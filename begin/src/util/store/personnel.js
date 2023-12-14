
export const store1=({
  namespaced: true,
  state:{
    user:'',

  },
  mutations:{
    setUser(state,user){
      state.user=user
    },
     clearUser(state){
       state.user=''
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

