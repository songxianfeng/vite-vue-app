<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>


<script>
  import { RouterView } from 'vue-router'
  export default {
    name: 'app',
  }
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
