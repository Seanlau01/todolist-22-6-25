import {createStore} from 'vuex'

export default createStore({
    state:{
       list:[
        {
            title:'记笔记',
            complete:false
        },
        {
            title:'跟练代码',
            complete:false
        },
        {
            title:'读记笔记',
            complete:false
        },
        {
            title:'写博客',
            complete:false
        }
      ]
    },
    mutations:{
      init(state){
        if(localStorage.getItem('listJSON')===null){
          localStorage.setItem('listJSON',JSON.stringify(state.list))
        }else{
          state.list=JSON.parse(localStorage.getItem('listJSON'))
        }
      },
      addTodo(state,payload){
        state.list.push(payload)
        localStorage.setItem('listJSON',JSON.stringify(state.list))
      },
      delTodo(state,payload){
        state.list.splice(payload,1)
        localStorage.setItem('listJSON',JSON.stringify(state.list))
      },
      clearTodo(state,payload){
        state.list=payload
        localStorage.setItem('listJSON',JSON.stringify(state.list))
      }
    },
    actions:{
     
    },
    modules:{

    }
})