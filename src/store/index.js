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
      addTodo(state,payload){
        state.list.push(payload)
      },
      delTodo(state,payload){
        state.list.splice(payload,1)
      },
      clearTodo(state,payload){
        state.list=payload
      }
    },
    actions:{
     
    },
    modules:{

    }
})