<template>
  <div id="nav">
    <appheader />
    <router-view />
    <div id="icon">
      <i class="fa-solid fa-circle-chevron-up"></i>
    </div>
  </div>
</template>

<script>
import appheader from "./components/AppHeader.vue";
import $ from "jquery";
export default {
  name: "app",
  components: {
    appheader,
  },
  mounted() {
    this.$nextTick(() => {
      $(document).ready(function () {
        $("#icon").click(function () {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
      });
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.fa-circle-chevron-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #42b983;
  cursor: pointer;
}

#nav {
  padding: 0;

  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
