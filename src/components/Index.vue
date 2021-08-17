<template>
    <div class="parent">
        <div>
            <a @click="goListPage">列表页面</a>
        </div>
        <section class="product-area area-padding">
            <div class="container">
                <div class="row">
                    <div
                        :key="index"
                        class="col-lg-4 col-md-4 col-sm-6"
                        v-for="(product ,index) in  products"
                    >
                        <div class="single-product mt-30">
                            <img :src="product.imagename" alt="product" />
                            <a @click="goDetail(product.id)">
                                <h6 class="title">{{product.name}}</h6>
                            </a>
                            <ul>
                                <li>${{product.price}}</li>
                            </ul>
                        </div>
                        <!-- single product -->
                    </div>
                </div>
                <!-- row -->
            </div>
            <!-- container -->
        </section>
    </div>
</template>
<script>
export default {
    name: "Index",

    data() {
        return {
            products: [],
        };
    },

    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.$axios.get("/product/list").then((data) => {
                if (data.data.status == "SUCCESS") {
                    console.log(data.data.data);
                    this.products = data.data.data;
                }
            });
        },

        goListPage() {
            this.$router.push("/products");
        },
        goDetail(id) {
            this.$router.push({
                path: "/detail",
                query: {
                    id: id,
                },
            });
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