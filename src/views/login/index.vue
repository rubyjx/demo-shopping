<template>
  <div class="login">
    <Form :model="form" class="login-form">
      <FormItem>
        <Divider type="vertical" /> <span class="login-title">登录</span>
      </FormItem>
      <FormItem>
        <Input
          prefix="ios-person-outline"
          type="text"
          placeholder="请输入账号"
          v-model="form.username"
        />
      </FormItem>
      <FormItem>
        <Input
          prefix="ios-lock-outline"
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        />
      </FormItem>
      <FormItem>
        <Button class="login-button" @click="login">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { codeLogin } from "@/api/login";
export default {
  name: "LoginIndex",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await codeLogin(this.username, this.password);
        console.log("登录成功", response);
        this.$store.commit("login", response.data.data.token);
        this.$Message.success("登录成功");
        this.$router.push("/layout");
        // 在此处处理登录成功后的逻辑，比如跳转页面或存储 token
      } catch (error) {
        this.$Message.error("密码或账号错误！");
        console.error("登录失败", error);
      }
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  width: 100%;
  padding: 300px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  padding: 20px 100px;
  width: 500px;
  height: auto;
  background: rgba(22, 98, 183, 0.8);
  border-radius: 16px;

  .login-title {
    font-size: 14px;
    color: white;
  }

  .login-button {
    width: 100%;
    height: 40px;
    border-radius: 8px;
  }
}
</style>
