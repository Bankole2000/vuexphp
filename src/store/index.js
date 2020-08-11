import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        title: "Munich Meetup",
        id: 1,
        description: "lorem ipsum dolor sit amet",
        date: "2020-08-17",
        color: "#1F7087",
        postedBy: "Foster the People"
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        title: "Berlin Meetup",
        id: 2,
        description: "lorem ipsum dolor sit amet",
        date: "2020-08-17",
        color: "#282828",
        postedBy: "Ellie Goulding"
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        title: "London Meetup",
        id: 3,
        description: "lorem ipsum dolor sit amet",
        date: "2020-08-17",
        color: "#385F73",
        postedBy: "Super Boy"
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "Paris Meetup",
        id: 4,
        description: "lorem ipsum dolor sit amet",
        date: "2020-08-17",
        color: "#952175",
        postedBy: "Jack the Nice guy"
      }
    ],
    user: {
      id: "",
      registeredMeetups: []
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date ? payload.date : Date.now().toString(),
        color: payload.color,
        postedBy: payload.postedBy ? payload.postedBy : "Guest User",
        id: payload.id ? payload.id : Date.now()
      };

      // Reach out to storage (firebase || mysql) and store data
      commit("createMeetup", meetup);
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    }
  },
  modules: {}
});
