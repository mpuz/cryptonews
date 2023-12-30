<template>
  <div>
    <div class="sticky-top">
      <Header />
    </div>
    <Nuxt />


    <div>
      <Footer />
    </div>
  </div>
</template>

<style>
/* html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */

body {
  height: 100%;
  display: flex;
  flex-direction: column;
}




p {
  margin-bottom: 0 !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.content {
  margin-left: 15rem !important;
  margin-right: 15rem !important;
  flex-grow: 1;

}

@media (max-width: 1400px) {
  .content {
    margin-left: 10rem !important;
    margin-right: 10rem !important;
    flex-grow: 1;

  }
}

@media (max-width: 1100px) {
  .content {
    margin-left: 7rem !important;
    margin-right: 7rem !important;
    flex-grow: 1;

  }
}

@media (max-width: 700px) {
  .content {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    flex-grow: 1;

  }
}

.rounded {
  border-radius: 1rem !important;
}
</style>
