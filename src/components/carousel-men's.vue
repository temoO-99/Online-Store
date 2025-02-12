<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="body">
          <h1>Kid's Latest</h1>
          <p>Details to details is what makes Pike different.</p>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/kid-01.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/kid-02.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/kid-03.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
      </div>
      <div class="carousel-item">
        <div class="body">
          <h1>Men's Latest</h1>
          <p>Details to details is what makes Pike different.</p>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/men-01.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/men-02.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/men-03.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
      </div>
      <div class="carousel-item">
        <div class="body">
          <h1>Women's Latest</h1>
          <p>Details to details is what makes Pike different.</p>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/women-01.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/women-02.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/productspage/women-03.jpg"
            alt="Card image cap"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slide {
  // background-color: #eee;
  height: 450px;
  overflow: hidden;
  .carousel-inner {
    height: 100%;
    .carousel-item {
      height: 100%;

      .card {
        float: left;
        height: 100%;
        width: calc(100% / 3);
        border: none;
        .card-img-top {
          height: 100%;
          width: 95%;
        }
      }
    }
  }
  .body {
    h1 {
      font-weight: bold;
    }
    p {
      color: #999;
      font-style: italic;
    }
  }
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: #42b983;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 15px;
}
.carousel-control-next,
.carousel-control-prev {
  bottom: -55px;
  opacity: 0.6;
}
</style>
