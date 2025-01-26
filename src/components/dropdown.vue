<template>
  <div class="drop">
    <span class="name">Pages <i class="fa-solid fa-angle-down"></i></span>
    <ul class="dropdown">
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/product">Products</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact Us</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
$(document).ready(function () {
  $(".drop").hover(
    function () {
      $(".dropdown").slideDown(500);
    },
    function () {
      $(".dropdown").slideUp(500);
    }
  );
});

export default {
  name: "dropdown",
};
</script>

<style lang="scss" scoped>
.drop {
  text-align: left;
  .dropdown {
    background-color: #ccc;
    border-radius: 3px;
    list-style: none;
    line-height: 2;
    margin: 10px auto;
    padding-left: 0;
    display: none;
    li a {
      text-decoration: none;
    }
    li:hover {
      background-color: #fff;
      transition: 0.6s;
      padding: 0 3px;
      cursor: pointer;
    }
  }
}
</style>
