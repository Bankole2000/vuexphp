<template>
  <v-bottom-navigation
    grow
    style="height: max-content; position: absolute; bottom: 0;"
    dark
    shift
    :value="activeBtn"
    color="orange lighten-1"
  >
    <v-btn text value="recent" class="pa-4">
      <span>Recent</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "BottomNav",
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>
<style scoped>
.v-btn {
  height: 64px !important;
}
</style>
