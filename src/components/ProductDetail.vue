<template>
    <div>
        <div>
            <div class="navigation navigation-2 navigation-page fixed-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="index.html">
                                    <img alt="Logo" src="assets/images/logo.png" />
                                </a>
                                <!-- Logo -->

                                <button
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    class="navbar-toggler"
                                    data-target="#navbarSupportedContent"
                                    data-toggle="collapse"
                                    type="button"
                                >
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                </button>
                                <!-- navbar-toggler -->

                                <div
                                    class="collapse navbar-collapse sub-menu-bar"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="about-us.html">About Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="product-list.html">Product List</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="product-grid.html">Product Grid</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="product-details.html">Product Details</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="contact-us.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- navbar collapse -->
                                <div class="navbar-icon d-none d-sm-block">
                                    <ul>
                                        <li>
                                            <a class="search-open" href="#">
                                                <i class="pe-7s-search"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                @click="showCart"
                                                class="shopping-cart-open"
                                                href="#"
                                            >
                                                <i class="pe-7s-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <!-- navbar -->
                        </div>
                    </div>
                    <!-- row -->
                </div>
                <!-- container -->
            </div>
        </div>
        <section class="product-details-area pt-30 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-5">
                        <div class="product-details-thumb mt-35">
                            <img :src="product.imagename" alt="product details" />
                            <!-- 
                        <img src="assets/images/product-details-thumb-1.jpg" alt="product details">
                        <img src="assets/images/product-details-thumb-1.jpg" alt="product details">
                        <img src="assets/images/product-details-thumb-1.jpg" alt="product details">
                        <img src="assets/images/product-details-thumb-1.jpg" alt="product details">
                            -->
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7">
                        <div class="product-details-content mt-30">
                            <div class="product-details-title">
                                <h4 class="title">{{ product.name}}</h4>
                            </div>

                            <div class="product-details-con">
                                <span>${{ product.price}}</span>
                            </div>

                            <div class="product-details-weight d-flex align-items-center">
                                <span>Weight (kg)</span>
                                <ul>
                                    <li>
                                        <p>0.5</p>
                                    </li>
                                    <li>
                                        <p>1</p>
                                    </li>
                                    <li>
                                        <p>1.5</p>
                                    </li>
                                    <li>
                                        <p>2</p>
                                    </li>
                                    <li>
                                        <p>3</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-details-cart d-flex align-items-center">
                                <div class="product-quantity" id="quantity">
                                    <button @click="minus" class="sub" id="sub" type="button">-</button>
                                    <input id="1" type="text" v-model="num" />
                                    <button @click="add" class="add" id="add" type="button">+</button>
                                </div>
                                <div class="add-cart">
                                    <a @click="addToCart">Add to cart</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "ProductDetail",
    data() {
        return {
            product: {},
            num: 0,
        };
    },

    created() {
        const pid = this.$route.query.id;
        console.log(pid);
        this.getProductById(pid);
    },

    methods: {
        getProductById(id) {
            this.$axios.get("/product/detail?id=" + id).then((data) => {
                console.log(data.data.data);
                this.product = data.data.data;
            });
        },
        minus() {
            console.log("this.num", this.num);
            this.num > 0 ? this.num-- : this.num;
        },
        add() {
            this.num++;
        },
        addToCart() {
            const userid = localStorage.getItem("userId");
            if (!userid) {
                this.$router.push("/login");
            }

            const data = {
                userid: 16,
                num: this.num,
                pid: this.product.id,
            };

            this.$axios.post("/cart/add/", data).then((res) => {
                console.log(res.data);
            });
        },
        showCart() {
            //判断一下要不要去登录
            const userid = localStorage.getItem("userId");
            if (!userid) {
                this.$router.push("/login");
            }
            this.$router.push("/cart");
        },
    },
};
</script>

<style>
</style>