<template>
  <div class="about">
    <!-- start header section -->
    <div class="header">
      <div class="container">
        <div class="words">
          <h1>About Our Company</h1>
          <p>Awesome, clean & creative</p>
        </div>
      </div>
    </div>
    <!-- end header section -->
    <!-- start section us -->
    <div class="us">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img">
              <img src="../assets/aboutpage/skill.jpg" alt="Not Found" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="info">
              <h1>About Us & Our Skills</h1>
              <p class="first">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quos officia aspernatur tempora! Ipsum molestiae.
              </p>
              <div class="quot">
                <i class="fa-solid fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  quos officia aspernatur tempora! Ipsum molestiae.
                </p>
              </div>
              <p class="second">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                non ea obcaecati nobis quaerat libero facilis sunt atque nisi
                vero dolorem laborum consequatur. Ratione, officia quod. Maxime
                dicta eligendi asperiores!
              </p>
            </div>
            <div class="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-behance"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section us -->
    <!-- start our team -->
    <div class="our-team">
      <div class="container">
        <h1>Our Amazing Team</h1>
        <p>Details to details is what makes pike different.</p>
        <div class="row">
          <div class="col-md-4">
            <div class="img" id="1">
              <img
                src="../assets/aboutpage/team-member-01.jpg"
                alt="Not Found"
              />
              <div class="over">
                <div class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-behance"></i>
                </div>
              </div>
            </div>
            <div class="info">
              <h2>Ragnar Lodbrok</h2>
              <span>Product Caretaker</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img" id="2">
              <img
                src="../assets/aboutpage/team-member-02.jpg"
                alt="Not Found"
              />
              <div class="over">
                <div class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-behance"></i>
                </div>
              </div>
            </div>
            <div class="info">
              <h2>Ragnar Lodbrok</h2>
              <span>Product Caretaker</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img" id="3">
              <img
                src="../assets/aboutpage/team-member-03.jpg"
                alt="Not Found"
              />
              <div class="over">
                <div class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-behance"></i>
                </div>
              </div>
            </div>
            <div class="info">
              <h2>Ragnar Lodbrok</h2>
              <span>Product Caretaker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end our team -->
    <!-- start our services -->
    <div class="our-services">
      <div class="container">
        <h1>Our Services</h1>
        <p>Details to details is what makes pike different.</p>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <h2>Synther Vaporware</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sed minus voluptatibus esse suscipit vel, libero perspiciatis at
                provident velit eum, cum atque tempora quo nobis nisi aperiam
                recusandae incidunt.
              </p>

              <img src="../assets/aboutpage/service-01.jpg" alt="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <h2>Locavore Squidward</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sed minus voluptatibus esse suscipit vel, libero perspiciatis at
                provident velit eum, cum atque tempora quo nobis nisi aperiam
                recusandae incidunt.
              </p>

              <img src="../assets/aboutpage/service-02.jpg" alt="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <h2>Health Gothfam</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sed minus voluptatibus esse suscipit vel, libero perspiciatis at
                provident velit eum, cum atque tempora quo nobis nisi aperiam
                recusandae incidunt.
              </p>

              <img src="../assets/aboutpage/service-03.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end our services -->
  </div>
  <!-- start footer -->
  <myfooter />
  <!-- start footer -->
</template>

<script>
import myfooter from "../components/footer.vue";
import $ from "jquery";
export default {
  name: "AboutPage",
  components: {
    myfooter,
  },
  mounted() {
    this.$nextTick(() => {
      $(document).ready(function () {
        // start our-team section
        $(".our-team #1").hover(
          function () {
            $(".our-team #1 .over").css({
              display: "block",
              cursor: "pointer",
              transition: "0.5s",
            });
          },
          function () {
            $(".our-team .img .over").css("display", "none");
          }
        );
        $(".our-team #2").hover(
          function () {
            $(".our-team #2 .over").css({
              display: "block",
              cursor: "pointer",
              transition: "0.5s",
            });
          },
          function () {
            $(".our-team .img .over").css("display", "none");
          }
        );
        $(".our-team #3").hover(
          function () {
            $(".our-team #3 .over").css({
              display: "block",
              cursor: "pointer",
              transition: "0.5s",
            });
          },
          function () {
            $(".our-team .img .over").css("display", "none");
          }
        );
        // end our-team section
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.about {
  border-top: 2px dashed #eee;
  border-bottom: 2px dashed #eee;
  margin-top: 40px;
  padding-bottom: 40px;
  .header {
    background-image: url("../assets/aboutpage/header.jpg");
    background-size: cover;
    height: 400px;
    margin: 40px 0;
    position: relative;
    .words {
      position: absolute;
      color: #fff;
      top: 38%;

      left: 37%;
      h1 {
        font-weight: bold;
      }
      p {
        font-style: italic;
      }
    }
  }
  // end sectoin header
  // start section us
  .us {
    padding: 30px 0;
    border-bottom: 2px dashed #eee;

    .info {
      margin-left: 30px;
      text-align: left;
      border-bottom: 2px dashed #eee;
      h1 {
        font-weight: bold;
      }
      p {
        color: #999;
        line-height: 1.9;
        text-align: justify;
      }
      .quot {
        overflow: hidden;
        .fa-quote-left {
          float: left;
          width: 10%;
          font-size: 40px;
          color: #111;
          padding: 5px 0 0 0;
        }
        p {
          float: left;
          color: #111;
          width: 90%;
        }
      }
    }
    .icons {
      padding: 30px 0 0 30px;
      overflow: hidden;
      text-align: left;
      .fa-facebook-f {
        width: 15px;
        height: 15px;
        padding: 15px;
        background-color: #35495e;
        color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .fa-facebook-f:hover {
        color: #35495e;
        background-color: #eee;
        cursor: pointer;
        transition: 0.5s;
      }
      .fa-twitter {
        width: 15px;
        height: 15px;
        padding: 15px;
        background-color: #35495e;
        color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .fa-twitter:hover {
        color: #35495e;
        background-color: #eee;
        cursor: pointer;
        transition: 0.5s;
      }
      .fa-linkedin-in {
        width: 15px;
        height: 15px;
        padding: 15px;
        background-color: #35495e;
        color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .fa-linkedin-in:hover {
        color: #35495e;
        background-color: #eee;
        cursor: pointer;
        transition: 0.5s;
      }
      .fa-behance {
        width: 15px;
        height: 15px;
        padding: 15px;
        background-color: #35495e;
        color: #fff;
        border-radius: 50%;
      }
      .fa-behance:hover {
        color: #35495e;
        background-color: #eee;
        cursor: pointer;
        transition: 0.5s;
      }
    }
  }
  // end section us
  // start section team
  .our-team {
    padding: 40px 0;
    h1 {
      font-weight: bold;
    }
    p {
      font-style: italic;
      color: #999;
      margin-top: 20px;
    }
    .row {
      margin-top: 60px;
      .col-md-4 {
        .img {
          position: relative;
          .over {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgb(0, 0, 0, 0.9);
            z-index: 3;
            display: none;
            .icon {
              position: absolute;
              top: 40%;
              left: 20%;
            }
            .fa-facebook-f {
              width: 15px;
              height: 15px;
              padding: 15px;
              background-color: #fff;
              color: #222;
              border-radius: 50%;
              margin-right: 10px;
            }
            .fa-facebook-f:hover {
              color: #fff;
              background-color: #333;
              cursor: pointer;
              transition: 0.4s;
              font-weight: bolder;
            }
            .fa-twitter {
              width: 15px;
              height: 15px;
              padding: 15px;
              background-color: #fff;

              color: #222;
              border-radius: 50%;
              margin-right: 10px;
            }
            .fa-twitter:hover {
              color: #fff;
              background-color: #333;
              cursor: pointer;
              transition: 0.4s;
              font-weight: bolder;
            }
            .fa-linkedin-in {
              width: 15px;
              height: 15px;
              padding: 15px;
              background-color: #fff;

              color: #222;
              border-radius: 50%;
              margin-right: 10px;
            }
            .fa-linkedin-in:hover {
              color: #fff;
              background-color: #333;
              cursor: pointer;
              transition: 0.4s;
              font-weight: bolder;
            }
            .fa-behance {
              width: 15px;
              height: 15px;
              padding: 15px;
              background-color: #fff;

              color: #222;
              border-radius: 50%;
              margin-right: 10px;
            }
            .fa-behance:hover {
              color: #fff;
              background-color: #333;
              cursor: pointer;
              transition: 0.4s;
              font-weight: bolder;
            }
          }
          img {
            width: 100%;
            height: 100%;
          }
        }

        .info {
          margin-top: 20px;
          h2 {
            font-weight: bold;
          }
          span {
            font-style: italic;
            color: #999;
          }
        }
      }
    }
  }

  // end section team
  // start our-services
  .our-services {
    margin: 40px 0;
    padding-top: 50px;
    border-top: 2px dashed #eee;

    h1 {
      font-weight: bold;
    }
    p {
      font-style: italic;
      color: #999;
      margin: 20px 0 40px 0;
    }
    .col-md-4 {
      .box {
        box-shadow: 1px 1px 5px #ccc;
        border: 1px solid #eee;
        padding: 30px 15px;
        h2 {
          font-weight: bold;
        }
        p {
          text-align: justify;
        }
      }
    }
  }
  // end our-services
}
</style>
