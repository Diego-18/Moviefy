<template>
  <div class="container">
    <h1>Movies</h1>
    <p>
      This is an application where you will have a list of the most popular
      movies of the cinema.
    </p>
    <div class="">
      <!-- <div class="row"> -->
      <CardMovies />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import CardMovies from "@/components/CardMovies";

export default {
  name: "Movies",
  components: {
    CardMovies,
  },
};
</script>

<style>
.container {
  color: #fff;
  padding: 2rem;
}

.container__card {
  margin: 1rem 0rem;
}
</style>