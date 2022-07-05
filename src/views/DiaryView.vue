<template>
  <b-container class="today-diary mt-3">
    <b-row>
      <b-col>오늘의 일기</b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-form-input
          v-model="title"
          placeholder="제목을 입력하세요"
        ></b-form-input>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="내용을 입력하세요"
          rows="20"
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button>등록</b-button>
        <b-button>취소</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
};
</script>

<style></style>
