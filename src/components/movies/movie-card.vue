<template>
  <img class="product-image" :src="movie.Poster" alt="Movie Poster" />

  <div class="detail-view" v-if="movieDeatil && id == OMDBStroe.movieId">
    <h3>{{ movie.Title }}</h3>
    <div>
      <span>Plot:</span>
      <p>{{ movieDeatil.Plot }}</p>
      <span>Actors:</span>
      <p>{{ movieDeatil.Actors }}</p>
      <span>Ratings:</span>
      <div v-for="(rating, index) in movieDeatil.Ratings" :key="index">
        <p>-{{ rating.Source }}: {{ rating.Value }}</p>
      </div>
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
import { ref, defineComponent } from "vue";
import { useOMDBStore } from "../../stores/store";
import axios from "axios";
import env from "@/env";

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
    const OMDBStroe = useOMDBStore();
    const movie = props.movie;
    const id = props.id;
    const movieDeatil = ref();

    const movieDeatilHandler = async () => {
      OMDBStroe.addData(id);
      await axios
        .get(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${id}&plot`)

        .then((response) => {
          console.log(response.data);

          movieDeatil.value = response.data;
        });
      console.log(movie);
    };

    return {
      movieDeatil,
      movieDeatilHandler,
      movie,
      id,
      OMDBStroe,
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
.detail-view > div > span {
  font-size: 13px;
}
hr.devider {
  border-top: 1px solid #bbb;
}
.title {
  padding-bottom: 200px;
}
.details-btn-div {
  display: flex;
  height: 45px;
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

@media only screen and (max-width: 900px) {
  .detail-view {
    width: 300px;
  }
  .product-image {
    width: 225px;
    height: 300px;
  }
  .detail {
    width: 300px;
  }

  .year {
    color: #aaa;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 150px;
  }
}
@media only screen and (max-width: 500px) {
  .detail-view {
    width: 225px;
  }
  .product-image {
    width: 150px;
    height: 275px;
  }
  .detail {
    width: 225px;
  }

  .year {
    color: #aaa;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 100px;
  }
}
</style>
  