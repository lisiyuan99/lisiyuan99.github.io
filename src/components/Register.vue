<template>
    <div>
        <div class="agileheader">
            <h1></h1>
        </div>
        <!--//header-->
        <!--main-->
        <div class="main-w3l">
            <div class="w3layouts-main">
                <h2>立即注册</h2>
                <form action="#" method="post">
                    <input
                        :v-model="email"
                        name="Email"
                        onblur="if (this.value == '') {this.value = 'E-Mail';}"
                        onfocus="this.value = '';"
                        required
                        type="email"
                        value="E-MAIL"
                    />
                    <input
                        :v-model="password"
                        name="Password"
                        onblur="if (this.value == '') {this.value = 'password';}"
                        onfocus="this.value = '';"
                        required
                        type="password"
                    />

                    <div class="clear"></div>
                    <input @click="register" name="register" type="submit" value="注 册" />
                </form>
                <p>
                    <a @click="login" href="#">去登录</a>
                </p>
            </div>
        </div>
        <!--//main-->
        <!--footer-->
        <div class="footer-w3l"></div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        register() {
            this.$axios
                .post("/user/register", {
                    email: this.email,
                    password: this.password,
                })
                .then((data) => {
                    console.log(data);
                    if (data.data.status == "SUCCESS") {
                        this.$router.push("/login");
                    }
                });
        },

        login() {
            this.$router.push("/login");
        },
    },

    components: {},
};
</script>

<style >
@import "../assets/login/css/style.css";
</style>
