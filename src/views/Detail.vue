<template>
<div>
    <dl>
        <dt>
            <img :src="item.url" alt="">
        </dt>
        <dd>
            <p> {{item.title}} </p>
            <p> {{item.price}} </p>
            <button @click="add">加入购物车</button>
        </dd>
    </dl>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex';

export default {
    created() {
        this.$http.get(`/api/getData?id=${this.$route.params.id}`).then(result => {
            console.log(result)
            this.item = result.data
        })
    },
    data() {
        return {
            item: {}
        }
    },
    methods: {
        ...mapMutations(['ADD_CAR_DATA']),
        add() {
            this.ADD_CAR_DATA(this.item)
        }
    }
}
</script>

<style>
dl {
    margin: 10px;
    display: block;
}

dt {
    width: 100%;
    height: 300px;
}

img {
    width: 100%;
    height: 300px;
}

dd>p {
    line-height: 40px;
}
</style>
