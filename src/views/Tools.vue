<template>
  <div id="tools">
    <cmheader class="pc-show"></cmheader>
    tools
    <cmbottom />
  </div>
</template>

<script>
import cmheader from "../components/CMHeader.vue";
import cmbottom from "../components/CMBottom.vue";

export default {
  components: {
    cmheader,
    cmbottom,
  },
};
</script>


<style scoped>
#tools {
  min-height: 100%;
}
</style>
