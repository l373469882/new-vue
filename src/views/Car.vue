<template>
<div class="car">
    <header>
        <h4>购物车</h4>
    </header>
    <main>

    </main>
    <footer>
        <MyFooter />
    </footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
.car {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

header {
    height: 46px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

header>input {
    width: 250px;
    height: 36px;
    border: none;
    border-radius: 15px;
    padding-left: 10px;
}

main {
    flex: 1;
    overflow: auto;
}

footer {
    height: 46px;
    color: #666;
}
</style>
