<template>
  <div class="home">
    <!-- start head section -->
    <div class="head">
      <div class="row">
        <div class="col-md-6 left">
          <div class="img-block">
            <div class="overlay"></div>
            <img
              alt="notFound"
              src="../assets/homepage/head-shope.jpg"
              loading="lazy"
            />
            <div class="above">
              <h1>we are PiKe Groub</h1>
              <p class="prgraph">Awesome, clean & creative</p>
              <button class="btn">Purchase Now !</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 right">
          <div class="top">
            <div class="img-block-1">
              <div class="over">
                <h1>Men</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Discover More</button>
              </div>
              <img
                alt="notFound"
                src="../assets/homepage/head-2.jpg"
                loading="lazy"
              />
              <div class="above">
                <h1>Men</h1>
                <p class="prgraph">Best clothes for men</p>
              </div>
            </div>
            <div class="img-block-2">
              <div class="over">
                <h1>Women</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Discover More</button>
              </div>
              <img
                alt="notFound"
                src="../assets/homepage/head-women.jpg"
                loading="lazy"
              />
              <div class="above">
                <h1>Women</h1>
                <p class="prgraph">Best clothes for women</p>
              </div>
            </div>
          </div>
          <div class="down">
            <div class="img-block-3">
              <div class="over">
                <h1>Kids</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Discover More</button>
              </div>
              <img
                alt="notFound"
                src="../assets/homepage/head-kide.jpg"
                loading="lazy"
              />
              <div class="above">
                <h1>kids</h1>
                <p class="prgraph">Best clothes for Kids</p>
              </div>
            </div>
            <div class="img-block-4">
              <div class="over">
                <h1>Accessories</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Discover More</button>
              </div>
              <img
                alt="notFound"
                src="../assets/homepage/head-accss.jpg"
                loading="lazy"
              />
              <div class="above">
                <h1>Accessories</h1>
                <p class="prgraph">Best trend accessories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end head section -->
    <!-- start men's sections -->
    <div id="latest" class="slide">
      <div class="container">
        <carousel />
      </div>
    </div>
    <!-- end men's sections -->
  </div>
  <!-- start explore -->
  <div class="explor">
    <div class="container">
      <div class="row">
        <div class="col-md-6 left">
          <div class="info">
            <h1>About Us & Our Skills</h1>
            <p class="first">
              You are allowed to use this HexaShop HTML CSS template. You can
              feel free to modify or edit this layout. You can convert this
              template as any kind of ecommerce CMS theme as you wish.
            </p>
            <div class="quot">
              <i class="fa-solid fa-quote-left"></i>
              <p>
                You are not allowed to redistribute this template ZIP file on
                any other website.
              </p>
            </div>
            <p class="second">
              There are 5 pages included in this HexaShop Template and we are
              providing it to you for absolutely free of charge at our
              TemplateMo website. There are web development costs for us.
            </p>
            <p class="second">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              non ea obcaecati nobis quaerat libero facilis sunt atque nisi vero
              dolorem laborum consequatur. Ratione, officia quod. Maxime dicta
              eligendi asperiores!
            </p>
          </div>
          <button>Discober Mode</button>
        </div>
        <div class="col-md-6 right">
          <div class="top">
            <div class="overr">
              <h1>Different Types</h1>
              <p>Over 304 Products</p>
            </div>
            <div class="img">
              <img src="../assets/explore-image-01.jpg" alt="" loading="lazy" />
            </div>
          </div>
          <div class="bottom">
            <div class="overr">
              <h1>Leather Bags</h1>
              <p>Lates Collection</p>
            </div>
            <div class="img">
              <img src="../assets/explore-image-02.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end explore -->

  <!-- start social -->
  <div class="social">
    <div class="container">
      <h1>Social Media</h1>
      <p>Details to details is what makes pike different.</p>
      <div class="photos">
        <div class="photo one">
          <div class="over">
            <span>Fashion</span>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <img src="../assets/social/instagram-01.jpg" alt="" loading="lazy" />
        </div>
        <div class="photo two">
          <div class="over">
            <span>New</span>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <img src="../assets/social/instagram-02.jpg" alt="" loading="lazy" />
        </div>
        <div class="photo three">
          <div class="over">
            <span>Brand</span>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <img src="../assets/social/instagram-03.jpg" alt="" loading="lazy" />
        </div>
        <div class="photo four">
          <div class="over">
            <span>Makeup</span>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <img src="../assets/social/instagram-04.jpg" alt="" loading="lazy" />
        </div>
        <div class="photo five">
          <div class="over">
            <span>Lather</span>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <img src="../assets/social/instagram-05.jpg" alt="" loading="lazy" />
        </div>
        <div class="photo sex">
          <div class="over">
            <span>Bag</span>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <img src="../assets/social/instagram-06.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  </div>

  <!-- end social -->

  <!-- start footer -->
  <my-footer />
  <!-- end footer -->
</template>

<script>
import MyFooter from "../components/footer.vue";
import carousel from "../components/carousel-men's.vue";
import $ from "jquery";

export default {
  name: "HomePage",
  components: {
    MyFooter,
    carousel,
  },
  mounted() {
    this.$nextTick(() => {
      // start header section
      $(document).ready(function () {
        $(".head button").hover(
          function () {
            $(this).css({
              backgroundColor: "#fff",
              color: "#555",
            });
          },
          function () {
            $(this).css({
              backgroundColor: "inherit",
              color: "#fff",
            });
          }
        );

        $(".img-block-1").hover(
          function () {
            $(".img-block-1 .over").fadeIn(300);
            $(".img-block-1 .above").fadeOut(100);
          },
          function () {
            $(".img-block-1 .over").fadeOut(100);
            $(".img-block-1 .above").fadeIn(300);
          }
        );

        $(".img-block-2").hover(
          function () {
            $(".img-block-2 .over").fadeIn(300);
            $(".img-block-2 .above").fadeOut(100);
          },
          function () {
            $(".img-block-2 .over").fadeOut(100);
            $(".img-block-2 .above").fadeIn(300);
          }
        );

        $(".img-block-3").hover(
          function () {
            $(".img-block-3 .over").fadeIn(300);
            $(".img-block-3 .above").fadeOut(100);
          },
          function () {
            $(".img-block-3 .over").fadeOut(100);
            $(".img-block-3 .above").fadeIn(300);
          }
        );

        $(".img-block-4").hover(
          function () {
            $(".img-block-4 .over").fadeIn(300);
            $(".img-block-4 .above").fadeOut(100);
          },
          function () {
            $(".img-block-4 .over").fadeOut(100);
            $(".img-block-4 .above").fadeIn(300);
          }
        );
        // start social section

        $(".social .photos .one").hover(
          function () {
            $(".one .over").css({
              display: "block",
              transtion: "0.3s",
              cursor: "pointer",
            });
          },
          function () {
            $(".one .over").css("display", "none");
          }
        );
        $(".social .photos .two").hover(
          function () {
            $(".two .over").css({
              display: "block",
              transtion: "0.3s",
              cursor: "pointer",
            });
          },
          function () {
            $(".two .over").css("display", "none");
          }
        );
        $(".social .photos .three").hover(
          function () {
            $(".three .over").css({
              display: "block",
              transtion: "0.3s",
              cursor: "pointer",
            });
          },
          function () {
            $(".three .over").css("display", "none");
          }
        );
        $(".social .photos .four").hover(
          function () {
            $(".four .over").css({
              display: "block",
              transtion: "0.3s",
              cursor: "pointer",
            });
          },
          function () {
            $(".four .over").css("display", "none");
          }
        );
        $(".social .photos .five").hover(
          function () {
            $(".five .over").css({
              display: "block",
              transtion: "0.3s",
              cursor: "pointer",
            });
          },
          function () {
            $(".five .over").css("display", "none");
          }
        );
        $(".social .photos .sex").hover(
          function () {
            $(".sex .over").css({
              display: "block",
              transtion: "0.3s",
              cursor: "pointer",
            });
          },
          function () {
            $(".sex .over").css("display", "none");
          }
        );
        // end social section
      });
    });

    // end header section
  },
};
</script>

<style lang="scss" scoped>
// start header section
.head {
  border-top: 2px dashed #eee;
  border-bottom: 2px dashed #eee;
  border-width: 3px;
  overflow: hidden;
  padding: 60px 0;
  margin: 30px auto;

  .left {
    float: left;
    text-align: left;
    .img-block {
      padding: 0 5px 0 20px;
      position: relative;
      height: 500px;
      img {
        height: 100%;
        width: 100%;
        z-index: auto;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 20px;
        width: calc(100% - 25px);
        height: 100%;
        background: rgb(0, 0, 0, 0.4);
        z-index: auto;
      }
      .above {
        position: absolute;
        top: 40%;
        left: 20%;
        line-height: 2.5;
        color: #fff;
        z-index: auto;
        h1 {
          font-weight: bold;
          text-transform: capitalize;
        }
        .pragraph {
          font-style: italic;
        }
        .btn {
          border: 2px solid #fff;
          padding: 10px 30px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  .right {
    float: left;
    overflow: hidden;
    h1 {
      font-weight: bold;
      font-size: 30px;
    }
    button {
      border: 2px solid #fff;
      padding: 8px 20px;
      background: none;
      color: #fff;
    }
    .top {
      height: 240px;
      overflow: hidden;
      margin-bottom: 20px;
      .img-block-1 {
        float: left;
        height: 250px;
        width: 300px;
        margin-right: 20px;
        position: relative;

        .over {
          height: 80%;
          width: 80%;
          position: absolute;
          background: rgb(0, 0, 0, 0.8);
          top: 8%;

          left: 10%;
          color: #fff;
          padding: 20px 0 0 0;
          display: none;
        }

        img {
          width: 100%;
        }
        .above {
          position: absolute;
          top: 40%;
          left: 27%;
          z-index: 3;
          color: #fff;
          text-align: center;

          .prgraph {
            font-style: italic;
            text-transform: capitalize;
          }
        }
      }
      .img-block-2 {
        float: left;
        height: 250px;
        width: 300px;
        position: relative;
        .over {
          height: 80%;
          width: 80%;
          position: absolute;
          background: rgb(0, 0, 0, 0.8);
          top: 8%;
          left: 10%;
          color: #fff;
          padding: 20px 0 0 0;
          display: none;
        }
        img {
          width: 100%;
        }
        .above {
          position: absolute;
          top: 40%;
          left: 25%;
          z-index: 3;
          color: #fff;
          text-align: center;

          .prgraph {
            font-style: italic;
            text-transform: capitalize;
          }
        }
      }
    }
    .down {
      height: 240px;
      overflow: hidden;
      .img-block-3 {
        float: left;
        height: 250px;
        width: 300px;
        margin-right: 20px;
        position: relative;
        .over {
          height: 80%;
          width: 80%;
          position: absolute;
          background: rgb(0, 0, 0, 0.8);
          top: 8%;
          left: 10%;
          color: #fff;
          padding: 20px 0 0 0;
          display: none;
        }
        img {
          width: 100%;
        }
        .above {
          position: absolute;
          top: 40%;
          left: 27%;
          z-index: 3;
          color: #fff;
          text-align: center;

          .prgraph {
            font-style: italic;
            text-transform: capitalize;
          }
        }
      }
      .img-block-4 {
        float: left;
        height: 250px;
        width: 300px;
        position: relative;
        .over {
          height: 80%;
          width: 80%;
          position: absolute;
          background: rgb(0, 0, 0, 0.8);
          top: 8%;

          left: 10%;
          color: #fff;
          padding: 20px 0 0 0;
          display: none;
        }
        img {
          width: 100%;
        }
        .above {
          position: absolute;
          top: 40%;
          left: 13%;
          z-index: 3;
          color: #fff;
          text-align: center;

          .prgraph {
            font-style: italic;
            text-transform: capitalize;
          }
        }
      }
    }
  }
  // start header section
  // start slide section
  .silde {
    margin-bottom: 30px;
  }
  // end slide section
}

// start explor section
.explor {
  padding: 50px 0;
  margin: 67px 0;
  border-top: 3px dashed #eee;
  border-bottom: 3px dashed #eee;
  .left {
    .info {
      text-align: left;
      margin-bottom: 40px;
      h1 {
        font-weight: bold;
        margin-bottom: 25px;
      }
      p {
        color: #999;
        line-height: 1.9;
        text-align: justify;
        width: 95%;
      }
      .quot {
        overflow: hidden;
        .fa-quote-left {
          float: left;
          width: 10%;
          font-size: 40px;
          color: #111;
          padding: 30px 0 0 0;
        }
        p {
          float: left;
          color: #111;
          width: 86%;
          font-style: italic;
          margin: 25px 0;
          line-height: 1.9;
        }
      }
    }
    button {
      border: 1px solid #111;
      padding: 10px 25px;
      background-color: #fff;
      margin-bottom: 30px;
      float: left;
    }
    button:hover {
      background-color: #111;
      color: #fff;
    }
  }
}
.right {
  .top {
    height: 240px;
    overflow: hidden;
    margin-bottom: 20px;
    .overr {
      background-color: rgb(248, 242, 242);
      float: left;
      width: 47%;
      height: 100%;
      color: #111;
      h1 {
        font-size: 28px;
        font-weight: bold;
        margin-top: 95px;
      }
      p {
        color: #999;
        font-style: italic;
      }
    }
    .img {
      float: right;
      width: 47%;
      img {
        width: 100%;
      }
    }
  }
  .bottom {
    height: 240px;
    overflow: hidden;

    .overr {
      background-color: rgb(248, 242, 242);
      float: right;
      width: 47%;
      height: 100%;
      color: #111;
      h1 {
        font-size: 28px;
        font-weight: bold;
        margin-top: 95px;
      }
      p {
        color: #999;
        font-style: italic;
      }
    }
    .img {
      float: left;
      width: 47%;
      img {
        width: 100%;
      }
    }
  }
}
// end explor section
// start social section
.social {
  text-align: left;
  padding-bottom: 30px;
  margin-bottom: 40px;
  border-bottom: 2px dashed #eee;
  h1 {
    font-weight: bold;
  }
  p {
    color: #999;
    font-style: italic;
  }
  .photos {
    margin: 50px 0;
    overflow: hidden;
    .photo {
      float: left;
      width: calc(100% / 6);
    }
    .one,
    .two,
    .three,
    .four,
    .five,
    .sex {
      position: relative;
    }
    .over {
      color: #fff;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgb(0, 0, 0, 0.6);
      display: none;
      span {
        position: absolute;
        bottom: 17%;
        left: 20px;
        font-weight: bold;
      }
      .fa-instagram {
        position: absolute;
        bottom: 5%;
        font-size: 20px;
        left: 20px;
      }
    }
  }
}

// end social section
</style>
