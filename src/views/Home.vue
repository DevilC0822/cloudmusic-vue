<template>
  <div class="home">
    <cmheader />
    <cmswiper />
    <cmnavitem />
    <recommendlist />
    <cmbottom />
  </div>
</template>

<script>
// @ is an alias to /src

import cmheader from "../components/CMHeader.vue";
import cmswiper from "../components/CMSwiper.vue";
import cmnavitem from "../components/CMNavItem.vue";
import cmbottom from "../components/CMBottom.vue";
import recommendlist from "../components/RecommendList.vue";

export default {
  name: "Home",
  components: {
    cmheader,
    cmswiper,
    cmnavitem,
    cmbottom,
    recommendlist,
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 70px;
}
</style>
