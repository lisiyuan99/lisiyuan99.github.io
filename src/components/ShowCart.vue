<template>
    <div class="parent">
        <div class="wrapper">
            <div :key="index" class="cart_item" v-for="(item,index) in cart.list">
                <img :src="item.product.imagename" class="item_image" />
                <div class="content">
                    <p>{{item.product.name}}</p>
                    <p>数量:{{item.num}}</p>
                    <p>${{item.totalPrice}}</p>
                </div>
            </div>
        </div>
        <div>总价:${{cart.totalPrice}}</div>
    </div>
</template>

<script>
export default {
    name: "ShowCart",
    data() {
        return {
            cart: {},
        };
    },
    created() {
        const userid = localStorage.getItem("userId");
        if (!userid) {
            this.$router.push({
                path: "/login",
            });
        } else {
            this.$axios.get("/cart/showCart/?userid=" + userid).then((res) => {
                console.log(res.data);
                this.cart = res.data.data;
            });
        }
    },
};
</script>

<style >
.parent {
    margin-top: 30px;
    margin-left: 200px;
}
.wrapper {
    display: flex;
    flex-direction: column;
}
.cart_item {
    display: flex;
    margin-bottom: 10px;
}
.item_image {
    width: 150px;
    height: 150px;
}
</style>
