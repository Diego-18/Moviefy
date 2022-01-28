<template>
  <div class="ModalMovies" id="ModalMovies">
    <div
      class="modal fade"
      id="ModalDetails"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" :value="title"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">footer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Movies from "@/services/Movies";

export default {
  name: "ModalMovie",
  data() {
    return {
      title: "",
      year: "",
      rated: "",
      runtime: "",
      genre: "",
      director: "",
      writer: "",
      actors: "",
      plot: "",
      language: "",
      country: "",
      poster: "",
      movieDetails: [],
    };
  },
  methods: {
    getMovieDetails(mbdid) {
      Movies.getMovieDetails(mbdid).then((response) => {
        this.title = response.data.Title;
        this.year = response.data.Year;
        this.rated = response.data.Rated;
        this.runtime = response.data.Runtime;
        this.genre = response.data.Genre;
        this.director = response.data.Director;
        this.writer = response.data.Writer;
        this.actors = response.data.Actors;
        this.plot = response.data.Plot;
        this.language = response.data.Language;
        this.country = response.data.Country;
        this.poster = response.data.Poster;
      });
    },
  },
  created() {
    this.getMovieDetails("tt0107290");
  },
};
</script>

<style>
.modal-content {
  color: #000;
}

.card-body {
  padding-bottom: 2rem !important;
}
</style>