<template>
    <div class="home">
        <nav-header @addItem="addItem"></nav-header>
        <nav-main :list="list" @del="del"></nav-main>
        <nav-footer :list="list" @clear="clear"></nav-footer>
    </div>
</template>
<script>
import NavHeader from '@/components/NavHeader/NavHeader'
import NavMain from '@/components/NavMain/NavMain'
import NavFooter from '@/components/NavFooter/NavFooter'
import {defineComponent,ref,computed} from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
    name:'Home',
    components:{
       NavHeader,
       NavMain,
       NavFooter
    },
    setup(){
        let store=useStore()
        let list=computed(()=>{
            return store.state.list
        })
        store.commit('init')
        let value=ref('')
        let addItem=(val)=>{
            value.value=val
            let flag=true
            list.value.map(item=>{
                if(item.title===value.value){
                    flag=false
                    alert('task is existed')
                }
            })
            if(flag){
                store.commit('addTodo',{
                                title:value.value,
                                complete:false
                            })
            }
           
        }
        let del=(val)=>{
            store.commit('delTodo',val)
        }
        let clear=(val)=>{
            store.commit('clearTodo',val)
        }
        return {
            store,
            list,
            value,
            addItem,
            del,
            clear
        }
    }
})
</script>
<style scoped lang="scss">
    .home {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
</style>