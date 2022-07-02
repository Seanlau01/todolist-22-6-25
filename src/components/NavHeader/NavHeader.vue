<template>
    <div>
        <input 
        placeholder="请输入任务名称" 
        v-model="value" 
        @keydown.enter="addItem()"/>
    </div>
</template>
<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name:'navHeader',
    emits:['addItem'],
    setup(props,ctx){
        let value=ref('')
        let addItem=()=>{
           ctx.emit('addItem',value.value)
           value.value=''
        }
        return {
           value,
           addItem
        }
    }
})
</script>
<style lang="scss" scoped>
    input {
        height:40px;
        line-height:40px;
        width:200px;
        border:1px solid #ECECEC;
        margin-top:100px;
        padding-left:18px;
        font-size:16px;
        outline:none;
        box-shadow:0px 0px 2px 1px #E4E4E5;
        border-radius:20px;
       &:focus {
        border:1px solid #409EFF;
       }
    }
</style>
