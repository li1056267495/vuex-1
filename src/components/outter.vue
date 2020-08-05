<template>
  <div>
    我是其他组件拿到store数据{{ getOnum }}-----<br />
    <button @click="oadd">点击num+1</button>--<button @click="actoadd">
      点击num-1(actions)
    </button>
  </div>
</template>
<script>
export default {
  name: "outter",
  computed: {
    getOnum() {
      //   return this.$store.state.num;
      return this.$store.getters.gNum;
    }
  },
  methods: {
    oadd() {
      this.$store.commit("addNum");
    },
    actoadd() {
      this.$store.dispatch("actDeNum");
    }
  }
};
</script>
<style scoped></style>
