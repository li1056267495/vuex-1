<template>
  <div>
    <span>我是父组件</span>
    ----{{ getMsg }} <br />
    我是父组件中拿到store数据{{ getCount }}-----<br />
    <button @click="padd">点击num+1</button>--<button @click="actpadd">
      点击num-1(actions)
    </button>
    <hr />
    <son :faMsg="faMsg" @handle="getsonMsg"></son>
  </div>
</template>
<script>
import son from "./son";
export default {
  data() {
    return {
      faMsg: "我是父组件里的内容",
      getMsg: ""
    };
  },
  name: "parent",
  components: {
    son
  },
  methods: {
    getsonMsg(value) {
      this.getMsg = value;
    },
    padd() {
      this.$store.commit("addNum");
    },
    actpadd() {
      this.$store.dispatch("actDeNum");
    }
  },
  computed: {
    getCount() {
      return this.$store.getters.gNum;
    }
  }
};
</script>
<style scoped></style>
