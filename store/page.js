const axios = require("axios");
const https = require("https");

// At request level
// const agent = new https.Agent({ ca: "Lets_Encrypt_nep.dowork.kz.pem" });
const agent = new https.Agent({
  rejectUnauthorized: false,
});
export const state = () => ({
  data: [],
  about_page: {},
  main_page: {},
  contacts_page: {},
});

export const mutations = {
  setData(state, data) {
    // state.data = data ? data : [];
    state.data = Object.assign(data);
    if (state.data.length > 1) {
      console.log("4ina4", data, "4ina");
      state.about_page = state.data[0];
      state.main_page = state.data[1];
      state.contacts_page = state.data[2];
    }

    // console.log("4ina4", state.main_page, "4ina");
  },
};

export const actions = {
  async fetchData({ commit }) {
    let url = process.server
      ? "https://nep.dowork.kz/api/pages?populate=*"
      : "/api/pages?populate=*";
    // let url = "http://0.0.0.0:1337/api/pages?[populate]=*";
    await this.$axios
      .$get(url, { httpsAgent: agent })
      .then((response) => {
        // console.log(response.data[0].attributes, ".data[0].attributes");
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        commit("setData", data);
      });
  },
};
