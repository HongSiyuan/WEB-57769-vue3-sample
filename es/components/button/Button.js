import { defineComponent as e, openBlock as t, createElementBlock as o } from "vue";
const p = /* @__PURE__ */ e({
  __name: "Button",
  props: {
    block: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(n) {
    return (r, l) => (t(), o("div", null, "button..."));
  }
});
export {
  p as default
};
