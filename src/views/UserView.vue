<template>
  <b-container>
    <b-row class="my-1">
      <b-col>
        <label for="userid">아이디 : </label>
      </b-col>
      <b-col>
        <b-form-input id="userid" placeholder="Enter your id "></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="userpass">비밀번호 : </label>
      </b-col>
      <b-col>
        <b-form-input
          id="userpass"
          placeholder="Enter your password "
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col><b-button>로그인</b-button></b-col>
    </b-row>
    <b-row>
      <b-col
        ><b-button
          ><router-link to="/regist">회원가입</router-link></b-button
        ></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
