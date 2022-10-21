import { defineComponent as o, createVNode as r, createTextVNode as t } from "vue";
const l = {
  size: {
    type: String
  },
  block: {
    type: Boolean
  }
}, s = o({
  name: "Alert",
  props: l,
  setup(e) {
    return () => r("div", {
      class: "alert"
    }, [t("alert... size: "), e.size, t("block: "), e.block]);
  }
});
export {
  l as alertProps,
  s as default
};
