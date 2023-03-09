<template>
  <div class="movies-list">
    <div class="movie" v-for="movie in movies" :key="movie.imdbID">
      <!-- <router-link :to="'/movie/' + movie.imdbID" class="movie-link"> -->

      <img class="product-image" :src="movie.Poster" alt="Movie Poster" />

      <div class="detail">
        <h3 class="title">{{ movie.Title }}</h3>
        <hr class="devider" />
        <div class="details-btn-div">
          <p class="year">{{ movie.Year }}</p>
          <button class="details-btn">Details</button>
        </div>
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["movies"],
};
</script>

<style scoped>
.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
  top: 100px;
  justify-content: center;
}
.movie {
  display: flex;
  flex-direction: row;
  color: black;
  padding: 16px 8px;
}
.movie > div {
  background-color: #fff;
}

.product-image {
  width: 200px;
  height: 275px;
}
.detail {
  width: 300px;
}
hr.devider {
  border-top: 1px solid #bbb;
}
.title {
  padding-bottom: 200px;
}
.details-btn-div {
  display: flex;
  /* flex-direction: row; */
}
.details-btn {
  width: 100%;
  max-width: 100px;
  background-color: #1637f5;
  height: 35px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  transition: 0.4s;
  border-radius: 3px;
}
.year {
  color: #aaa;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 150px;
}
</style>
