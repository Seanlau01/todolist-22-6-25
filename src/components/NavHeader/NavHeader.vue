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
        margin-bottom:20px;
    }
</style>