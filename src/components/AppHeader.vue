<template>
  <div class="header">
    <span class="logo col-md-3"
      ><router-link to="/"
        ><i class="fa-solid fa-basket-shopping"></i></router-link
      >PiKe</span
    >
    <ul class="nav col-md-6 text-right">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li id="latest">Latest</li>
      <li id="explore">Explore</li>
      <li id="social">Social</li>
      <li class="drop">
        <span class="name">Pages <i class="fa-solid fa-angle-down"></i> </span>
        <ul class="dropdown">
          <li>
            <!-- <router-link to="/about" tag="li">About</router-link> -->
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/product">Products</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "AppHeader",
  mounted() {
    this.$nextTick(() => {
      $(document).ready(function () {
        $(".drop").hover(
          function () {
            $(".dropdown").slideDown(300);
          },
          function () {
            $(".dropdown").slideUp(300);
          }
        );

        // start scroll
        $("#latest").click(function () {
          window.scroll({
            top: 700,
            left: 0,
            behavior: "smooth",
          });
        });
        $("#explore").click(function () {
          window.scroll({
            top: 1300,
            left: 0,
            behavior: "smooth",
          });
        });
        $("#social").click(function () {
          window.scroll({
            top: 2000,
            left: 0,
            behavior: "smooth",
          });
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #35495e;
  overflow: hidden;
  height: 80px;
  .logo {
    margin: 20px auto;
    padding: 0 20px;
    float: left;
    color: #41b883;
    font-weight: bold;
    .fa-basket-shopping {
      margin: 0 10px;
      font-size: 30px;
    }
    a {
      text-decoration: none;
      color: #41b883;
    }
  }

  .nav {
    margin: 28px auto;

    li:not(:nth-child(6)) {
      margin-right: 20px;
    }
    li {
      cursor: pointer;
      color: #999;
      font-weight: bold;
    }
    li a {
      text-decoration: none;
      color: #999;
    }
  }
  .drop {
    text-align: left;
    .dropdown {
      width: 200px;
      background-color: #ccc;
      border-radius: 5px;
      list-style: none;
      line-height: 3;
      margin: 0;
      padding: 0;
      display: none;
      position: absolute;
      z-index: 1000;
      li {
        border-bottom: 1px dashed #35495e;
        margin: 0;
        padding: 0;
      }
      li:last-child {
        border-bottom: none;
      }
      li a {
        text-decoration: none;
        color: #35495e;
        margin: 0;
        padding-left: 15px;
      }
      li:hover {
        background-color: #eee;
        transition: all 0.4s;
        padding-left: 10px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}
</style>
