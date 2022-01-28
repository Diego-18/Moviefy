<template>
  <input
    type="text"
    v-model="search"
    class="form-control"
    @keypress="getMovies(this.search)"
    placeholder="Search..."
  />
  <div class="container">
    <div class="row">
      <template v-if="search != ''">
        <div
          class="col-xs-8 col-sm-10 col-md-6 col-lg-4 col-xl-4"
          v-for="(item, index) in movies"
          :key="index"
        >
          <div class="card cstm__card">
            <img
              :src="item.Poster"
              class="card-img-top cstm__img__card"
              :alt="item.Title"
            />
            <div class="card-body" style="padding: 0px !important">
              <h5 class="card-title pt-3">
                {{ item.Title }} ({{ item.Type }})
              </h5>
              <p class="card-text">{{ item.Year }}</p>
            </div>
            <!-- <div class="card-footer">
              <a
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#ModalDetails"
                @click="setId(item.imdbID)"
              >
                Details
              </a>
            </div> -->
          </div>
        </div>
        <ModalMovies />
      </template>
      <template v-else>
        <div class="col-12">
          <div class="alert alert-info m-5" role="alert">
            <strong>Info!</strong> Search for a movie.
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Movies from "@/services/Movies";
import ModalMovies from "@/components/ModalMovies";

export default {
  name: "CardMovies",
  components: {
    ModalMovies,
  },
  data() {
    return {
      movies: null,
      search: "",
      id: "",
    };
  },
  methods: {
    getMovies(search) {
      Movies.getMovies(search).then((response) => {
        this.movies = response.data.Search;
      });
    },
    setId(id) {
      this.id = id;
      console.log(this.id);
    },
  },
};
</script>

<style>
.cstm__img__card {
  height: 15rem;
  width: 15rem;
}

.cstm__card {
  height: 25rem;
  width: 15rem;
  color: #404040;
  box-shadow: #000 0px 0px 10px;
  border: 2px solid transparent;
  align-items: center;
  margin: 1rem 0rem;
}

.card-footer {
  background-color: #fff;
  border-top: 1px solid #dee2e6;
  padding: 1rem;
}

.card-title {
  font-size: 1rem;
}

.alert {
  width: 20rem;
}
</style>