<template>
  <div class="home">
    <main-page></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  name: "HomeView",
  components: {
    MainPage,
  },
};
</script>
