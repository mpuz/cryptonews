<template>
  <div>
    <b-navbar
      :type="$colorMode.preference"
      :variant="$colorMode.preference"
      class="border-bottom text-center"
    >
      <b-navbar-brand to="/" class="p-1">
        <b-img src="~/static/beatcoin.svg" class="mainlogo" />
      </b-navbar-brand>
      <b-nav-text class="pr-2">
        <b-badge variant="none">
          <div class="small">BTCUSDT</div>
          <div class="rate">{{ rate }}</div>
        </b-badge>
      </b-nav-text>
      <b-navbar-nav class="ml-auto">
        <b-nav-form v-on:submit.prevent="">
          <b-form-input
            placeholder="Search"
            class="mr-3 rounded"
            :value="search"
            @keyup.enter="
              $router.push({
                path: '/articles/page/1',
                query: $event.target.value
                  ? { search: $event.target.value }
                  : {},
              })
            "
          ></b-form-input>
        </b-nav-form>
        <!-- <b-nav-text @click="toggleColor()">
          {{ $colorMode.preference === "dark" ? "day" : "night" }}
        </b-nav-text> -->
        <img
          @click="toggleColor()"
          src="~/static/day-and-night.svg"
          width="30px"
          class="logo mt-1"
        />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>



<script >
export default {
  data() {
    return {
      symbol: "BTCUSDT",
      search: "",
      rate: "",
      colors: ["system", "light", "dark", "sepia"],
    };
  },
  computed: {
    width() {
      return window.innerWidth;
    },
  },
  watch: {
    $route() {
      this.getRate();
    },
  },
  async mounted() {
    this.getRate();
  },
  methods: {
    toggleColor() {
      this.$nuxt.$colorMode.preference =
        this.$nuxt.$colorMode.preference === "dark"
          ? "light"
          : this.$nuxt.$colorMode.preference === "light"
          ? "sepia"
          : "dark";
    },
    async getRate() {
      let response = await this.$axios
        .get(
          `https://www.binance.com/api/v3/ticker/price?symbol=${this.symbol}`
        )
        .catch((err) => console.log(err));
      let data = response.data;
      this.rate = data.price.split(".")[0];
    },
  },
};
</script>

<style >
.mainlogo {
  width: 30px;
}
@media (max-width: 700px) {
  .mainlogo {
    width: 40px;
  }
}
.small {
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 2px;
}
.rate {
  font-size: 1.5em;
  font-family: "Montserrat";
  letter-spacing: 2px;
}
.bg-dark {
  background-color: #001021 !important;
}
.bg-sepia {
  background-color: var(--bg-secondary);
}
.border-bottom {
  border-bottom: 1px solid #58ce8757 !important;
}
.navbar-brand {
  font-size: 0.5rem !important;
}
.form-control {
  border-style: solid !important;
  border-color: var(--color-primary) !important;
  background-color: var(--bg) !important;
}
input {
  background-color: none !important;
}
</style>