<template>
    <div>
        <h1>{{ name }}</h1>
        <input v-model="name" />
        <button @click="onClick">Click me</button>
    </div>
</template>

<script>
export default {
data(){
    return{
        name:"Awesome "
    };
},
methods:{
    onClick() {
        alert(this.name)
    }
}
    
};
</script>

<style lang="less" scoped>

</style>