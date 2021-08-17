<template>
    <div class="parent">
        <div :key="index" class="row justify-content-center" v-for="(product,index) in products">
            <div class="col-lg-3 col-md-4 col-sm-9">
                <div class="product-list-thumb mt-30">
                    <img :src="product.imagename" alt="product" />
                </div>
            </div>
            <div class="col-lg-6 col-md-8 col-sm-9">
                <div class="product-list-content mt-30">
                    <h5 class="title">{{product.name}}</h5>
                    <span>${{product.price}}</span>
                </div>
            </div>
        </div>
        <span :key="n+100" @click="getPage(n)" v-for="n in totalPage">
            <a>{{ n }}</a>
        </span>
    </div>
</template>

<script>
export default {
    name: "ProductList",
    data() {
        return {
            products: [],
            totalPage: 1,
            currentPageNo: 1,
        };
    },

    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.$axios
                .get("/product/page?currentPageNo=" + this.currentPageNo)
                .then((data) => {
                    if (data.data.status == "SUCCESS") {
                        console.log(data.data.data);
                        this.products = data.data.data.list;
                        this.totalPage = data.data.data.totalPage;
                    }
                });
        },

        getPage(pageNo) {
            console.log("pageNo", pageNo);
            this.currentPageNo = pageNo;
            this.getProducts();
        },
    },
};
</script>

<style>
body {
    background-image: url("");
}
.parent {
    margin-top: 100px;
}
</style>