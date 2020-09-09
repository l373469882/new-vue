<template>
<div class="foot">
    <router-link to="/index" tag="b">首页</router-link>
    <router-link to="/car" tag="b">购物车</router-link>
    <router-link to="/my" tag="b">我的</router-link>
</div>
</template>

<style>
.foot {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
