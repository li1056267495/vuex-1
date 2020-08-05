<template>
  <div>
    <span>我是子组件</span>
    -----{{ faMsg }}
    <br />
    我是子组件拿到store数据{{ getNum }}
    <button @click="sendSonmsg">点击发送子组件信息</button><br />------
    <button @click="sadd">点击num+1</button>--<button @click="actsadd">
      点击num-1（actions）
    </button>
  </div>
</template>
<script>
export default {
  name: "son",
  data() {
    return {
      sonMsg: "我是子组件里的内容"
    };
  },
  props: {
    faMsg: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendSonmsg() {
      this.$emit("handle", this.sonMsg);
    },
    sadd() {
      this.$store.commit("addNum");
    },
    actsadd() {
      this.$store.dispatch("actDeNum");
    }
  },
  computed: {
    getNum() {
      return this.$store.getters.gNum;
    }
  }
};
</script>
<style scoped></style>
