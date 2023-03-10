<template>
  <div>
    <header>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <h2 class="header-title">OMDB Search</h2>
      <form @submit.prevent="SearchMovies()" class="search-box">
        <h3>Search a movie</h3>
        <input
          type="text"
          placeholder="What are you looking for?"
          v-model="search"
          class="search-input"
        />
        <input class="submit-btn" type="submit" value="Search" />
      </form>
    </header>
    <!-- <h1>{{ counterStore.counter }}</h1> -->
    <MoviesList :movies="movies" />
  </div>

  <!-- <RouterView /> -->
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { defineComponent } from "vue";
import { ref } from "vue";

// import env from "@/env.js";

import MoviesList from "./components/movies/movies-list.vue";

export default defineComponent({
  components: {
    MoviesList,
  },
  setup() {
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != "") {
        axios
          .get(`http://www.omdbapi.com/?apikey=5822391f&s=${search.value}`)
          // get(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)

          .then((res) => {
            movies.value = res.data.Search;
            search.value = "";
            console.log(movies);
          });
      }
    };

    return {
      search,
      movies,
      SearchMovies,
    };
  },
});
</script>
<style scoped>
header {
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 1px;
  height: 50px;
  display: flex;
  align-items: center;
  outline: #111111;
  box-shadow: 0 0 15px 0 rgb(58, 57, 57);
}
header > h2 {
  padding-left: 150px;
}
.search-box {
  display: flex;
  position: absolute;
  right: 200px;
  align-items: center;
}
.search-input {
  appearance: none;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #e4e0e0;
  width: 200px;
  font-size: 16px;
  transition: 0.4s;
  height: 30px;
}

.submit-btn {
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
.submit-btn:active {
  background-color: #3b8070;
}
.search-input::placeholder {
  color: #f3f3f3;
}

.search-input:focus {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #141414;
  font-weight: 600;
  font-size: 18px;
  width: 160px;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 800px) {
  /* header {
    background-color: rgb(235, 232, 227);
    position: fixed;
    left: 0;
    right: 0;
    top: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
    width: 50%;
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
