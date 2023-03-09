<template>
  <div class="movies-list">
    <div class="movie" v-for="movie in movies" :key="movie.imdbID">
      <MovieCard :movie="movie" :id="movie.imdbID" />
    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from "./movie-card.vue";
export default {
  props: ["movies"],
  components: {
    MovieCard,
  },
};
</script>

<style scoped>
.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
  padding-top: 100px;
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
</style>
