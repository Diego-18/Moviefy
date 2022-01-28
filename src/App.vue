<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="./assets/logo.png" alt="logo" width="40" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Movies">Movies</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #404040;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

h1 {
  font-family: "Sedgwick Ave", cursive;
  text-shadow: #000 0px 0px 10px;
}

.navbar {
  box-shadow: #000 0px 0px 10px;
}

.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>
