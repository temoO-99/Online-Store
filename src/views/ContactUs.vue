<template>
  <div class="contact">
    <div class="top">
      <div class="info">
        <h1>Contact Us</h1>
        <p>Awesome, clean & creative.</p>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="container">
      <div class="row">
        <div class="map col-md-6">
          <div style="width: 100%">
            <iframe
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=El-Tahrir%20Square,%20Qasr%20Ad%20Dobarah,%20Qasr%20El%20Nil,%20Cairo%20Governorate+(Pike)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="400"
            >
            </iframe>
          </div>
        </div>
        <div class="submit col-md-6">
          <h1>Say Hello. Don't Be Shy!</h1>
          <p>Details to details is what makes pike different.</p>
          <form class="sub">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea cols="30" rows="10" placeholder="Your message"></textarea>
            <button class="btn">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <myfooter />
</template>

<script>
import myfooter from "../components/footer.vue";
export default {
  name: "ContactUs",
  components: {
    myfooter,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 30px;
  margin-top: 50px;
  border-top: 2px dashed #eee;
  color: #fff;
  .top {
    background-image: url("../assets/aboutpage/header.jpg");
    background-size: cover;
    height: 400px;
    position: relative;
    margin: 0 0 50px 0;
    .info {
      position: absolute;
      top: 40%;
      left: 43%;
      h1 {
        font-size: bold;
      }
      p {
        font-style: italic;
      }
    }
  }
}
.bottom {
  padding: 50px 0 30px 0;
  margin-bottom: 50px;
  border-bottom: 2px dashed #eee;
  .map iframe {
    box-shadow: 1px 1px 5px #222;
  }
  .submit {
    text-align: left;
    padding-left: 20px;
    h1 {
      font-weight: bold;
    }
    p {
      color: #999;
      font-style: italic;
    }
    input:first-of-type {
      margin-right: 10%;
    }
    input {
      height: 35px;
      width: 45%;
    }
    input,
    textarea:focus {
      outline: none;
    }
    input,
    textarea::placeholder {
      font-style: italic;
      padding-left: 10px;
    }
    textarea {
      margin: 30px 0;
      width: 100%;
      max-width: 100%;
      height: 161px;
      max-height: 190px;
    }
    .btn {
      background-color: #444;
      color: #fff;
      border: 1px solid #444;
      cursor: pointer;
    }
    .btn:hover {
      color: #444;
      background-color: #fff;
      transition: all 0.3s;
    }
  }
}
</style>
