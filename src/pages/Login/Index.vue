<template>
  <div class="login-page">
    <div class="header-top">
      <p class="header-text">TODO</p>
    </div>
    <div class="login-content">
      <van-form class="login-form" @submit="onLogin" @failed="onFailed">
        <van-field
          v-model="loginState.loginName"
          name="username"
          label="用户名"
          :rules="[{ required: true, message: '请输入账户' }]"
          placeholder="请输入账户"
        />
        <van-field
          v-model="loginState.loginPass"
          type="password"
          name="password"
          label="密码"
          :rules="[{ required: true, message: '请输入密码' }]"
          placeholder="请输入密码"
        />
        <div style="margin: 16px 0;">
          <van-button round block type="primary" native-type="submit">
              提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/store/login/user';
import { Toast } from 'vant';

const loginState = reactive({
  loginName: '',
  loginPass: ''
});

const useStore = useUserStore();
const onLogin = async (values) => {
  console.log('submit', values);
  if (!values || values.errors) return;
  try {
    const result = await useStore.Login({
      loginName: values.username,
      loginPass: values.password
    });
    if (result.token) {
      Toast.success('登录成功');
      console.log(result);
      setTimeout(() => {
        //  跳转主页
      }, 1000);
    }
  } catch (err) {
    Toast(err.message);
  }
};
const onFailed = (errorInfo) => {
  console.log('failed', errorInfo);
};
</script>

<style lang='scss' scoped>
.login-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #35a9f7;
  .header-top {
    display: flex;
    justify-content: center;
    margin: 5vh 0;
    font-size: 10vw;
    .header-text {
      color: white;
      font-weight: bold;
      text-shadow: 1vw 1vw 4vw black;
    }
  }
  .login-content {
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 5vh 0;
    .login-form {
      width: 90%;
      van-field {
        height: 25px;
      }
    }
  }
}
</style>