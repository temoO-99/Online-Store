<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h1>Shopping & Categories</h1>
          <ul>
            <li>Men's Shopping</li>
            <li>Women's Shopping</li>
            <li>Kid's Shopping</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h1>Useful Links</h1>
          <ul>
            <li>Homepage</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h1>Help & Information</h1>
          <ul>
            <li>Help</li>
            <li>FAQ's</li>
            <li>Shipping</li>
            <li>Tracking ID</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="copy">
        <p>Copyright <span>&#169;</span> 2022 | BY HATEM</p>
        <div class="icon">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-behance"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 40px;
  background-color: #222;
  padding: 50px 0;
  color: #fff;
  text-align: left;
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
  ul {
    line-height: 2.5;
  }
  li {
    width: fit-content;
  }
  li:hover {
    color: #999;
    cursor: pointer;
  }
  .copy {
    text-align: center;
    line-height: 2;
    span {
      color: #42b983;
    }
  }
  .fa-facebook-f {
    color: #fff;
    font-size: 25px;
    margin: 0 25px 0 30px;
  }
  .fa-facebook-f:hover {
    color: rgb(153, 26, 26);
    cursor: pointer;
    transition: 0.3s;
  }
  .fa-twitter {
    color: #fff;
    font-size: 25px;
    margin-right: 25px;
  }
  .fa-twitter:hover {
    color: rgb(153, 26, 26);
    cursor: pointer;
    transition: 0.3s;
  }
  .fa-linkedin-in {
    color: #fff;
    font-size: 25px;
    margin-right: 25px;
  }
  .fa-linkedin-in:hover {
    color: rgb(153, 26, 26);
    cursor: pointer;
    transition: 0.3s;
  }
  .fa-behance {
    color: #fff;
    font-size: 25px;
    margin-right: 25px;
  }
  .fa-behance:hover {
    color: rgb(153, 26, 26);
    cursor: pointer;
    transition: 0.3s;
  }
}
</style>
