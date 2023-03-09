<template>
  <img class="product-image" :src="movie.Poster" alt="Movie Poster" />

  <div class="detail-view" v-if="movieDeatil">
    <h3>{{ movie.Title }}</h3>
    <div>
      <p>Plot: {{ movieDeatil.Plot }}</p>
      <p>Actors: {{ movieDeatil.Actors }}</p>
    </div>
    <hr class="devider" />
    <div class="details-btn-div">
      <p class="year">{{ movie.Year }}</p>
      <!-- <button class="details-btn" @click="movieDeatilHandler()">Details</button> -->
    </div>
  </div>
  <div class="detail" v-else>
    <h3 class="title">{{ movie.Title }}</h3>
    <hr class="devider" />
    <div class="details-btn-div">
      <p class="year">{{ movie.Year }}</p>
      <button class="details-btn" @click="movieDeatilHandler()">Details</button>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
export default defineComponent({
  props: {
    movie: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const movie = props.movie;
    const id = props.id;
    const movieDeatil = ref();
    const movieDeatilHandler = async () => {
      await axios
        .get(`http://www.omdbapi.com/?apikey=5822391f&i=${id}&plot=full`)

        .then((response) => {
          console.log(response.data);

          movieDeatil.value = response.data;
        });
      console.log(movie);
    };

    // const onMethods = { moviedetail };
    return {
      movieDeatil,
      movieDeatilHandler,
      movie,
    };
  },
});
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

.product-image {
  width: 200px;
  height: 275px;
}
.detail {
  width: 300px;
}
.detail-view {
  width: 815px;
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
  