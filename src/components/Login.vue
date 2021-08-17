<template>
    <div>
        <div class="agileheader">
            <h1></h1>
        </div>
        <!--//header-->
        <!--main-->
        <div class="main-w3l">
            <div class="w3layouts-main">
                <h2>立即登录</h2>
                <input name="email" required type="email" v-model="email" value="E-MAIL" />
                <input name="password" required type="password" v-model="password" />
                <span>
                    <input type="checkbox" />记住我
                </span>
                <h6>
                    <a href="#">忘记密码?</a>
                </h6>
                <div class="clear"></div>
                <input @click="login" name="login" type="submit" value="登录" />
                <p>
                    还没有账号 ?
                    <a @click="register" href="#">立即注册</a>
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
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
            message: "",
        };
    },

    methods: {
        login() {
            this.$axios
                .post("/user/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((data) => {
                    console.log(data);
                    if (data.data.status == "SUCCESS") {
                        // 将userid存起来
                        localStorage.setItem("userId", data.data.data.id);
                        this.$router.push("/index");
                    }
                });
        },

        register() {
            this.$router.push("/register");
        },
    },
};
</script>

<style>
@import "../assets/login/css/style.css";
</style>