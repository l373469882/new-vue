<template>
<dl @click="goDetail(item.id)">
    <dt>
        <img :src="item.url" alt="">
    </dt>
    <dd>
        <p> {{item.title}} </p>
        <p> {{item.price}} </p>
    </dd>
</dl>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        goDetail(id) {
            this.$router.push(`/detail/${this.item.id}`)
        }
    }
}
</script>

<style>
dl {
    display: flex;
    margin: 5px;
}

dt {
    margin: 5px;
}

dd {
    margin: 5px;
}
</style>
