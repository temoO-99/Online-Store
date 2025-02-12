<template>
  <div class="product">
    <!-- start header section -->
    <div class="header">
      <div class="info">
        <h1>Check Our Products</h1>
        <p>Awesome, Clean & Creative</p>
      </div>
    </div>
    <!-- end header section -->
    <!-- start our products -->
    <div class="our-products">
      <div class="container">
        <h1>Our Latest Products</h1>
        <p>Check out all of our products</p>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/men-01.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <span>$120.00</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/men-02.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
              <span>$80.00</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/men-03.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <span>$190.00</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/women-01.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
              <span>$100.00</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/women-02.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <span>$200.00</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/women-03.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <span>$150.00</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/kid-01.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <span>$130.00</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/kid-02.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <span>$90.00</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <img
                src="../assets/productspage/kid-03.jpg"
                alt=""
                loading="lazy"
              />
              <div class="rate">
                <h2>Classic Spring</h2>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
              <span>$100.00</span>
            </div>
          </div>
        </div>
        <div class="count">
          <ul>
            <li>1</li>
            <li class="active">2</li>
            <li>3</li>
            <li>4</li>
            <li>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end our products -->
  </div>
  <!-- start footer -->
  <my-footer></my-footer>
  <!-- end footer -->
</template>

<script>
import MyFooter from "../components/footer.vue";
import $ from "jquery";
export default {
  name: "ProductList",
  components: {
    MyFooter,
  },
  mounted() {
    this.$nextTick(() => {
      $(document).ready(function () {
        $(".count li").click(function () {
          $(this).addClass("active").siblings("li").removeClass("active");
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.product {
  border-top: 2px dashed #eee;
  border-bottom: 2px dashed #eee;
  margin-top: 40px;

  // start header
  .header {
    background-image: url("../assets/productspage/products-page-heading.jpg");
    background-size: cover;
    height: 400px;
    margin: 40px 0;
    position: relative;
    .info {
      position: absolute;
      top: 38%;
      left: 36%;
      color: #fff;
      h1 {
        font-weight: bold;
      }
      p {
        font-style: italic;
      }
    }
  }
  // end header
  // start our products
  .our-products {
    margin: 60px 0;
    padding: 30px 0;
    h1 {
      font-weight: bold;
    }
    p {
      font-style: italic;
      color: #999;
      margin: 10px 0 50px 0;
    }
    .box {
      padding: 3px;
      text-align: left;
      margin-bottom: 30px;
      img {
        width: 100%;
      }
      .rate {
        overflow: hidden;
        margin: 10px 0 5px 0;
        h2 {
          float: left;
          font-size: 26px;
        }
        .icon {
          float: right;
        }
      }
      span {
        font-weight: bold;
        color: #999;
        font-size: 20px;
      }
    }
    .count {
      padding-top: 30px;
      ul {
        list-style: none;
        padding-left: 0;
        li {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 2px solid #333;
          line-height: 40px;
        }
        li.active {
          background-color: #333;
          color: #fff;
        }
        li:hover {
          background-color: #333;
          color: #fff;
          cursor: pointer;
          transition: 0.3s;
        }
        li:not(:nth-child(5)) {
          margin-right: 20px;
        }
      }
    }
  }
  // end our products
}
</style>
