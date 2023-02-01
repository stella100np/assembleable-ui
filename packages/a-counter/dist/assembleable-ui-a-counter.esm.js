var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/index.tsx
import { h, defineComponent, provide as provide2, inject as inject2 } from "vue";

// ../../node_modules/.pnpm/vue-demi@0.13.11_vue@3.2.45/node_modules/vue-demi/lib/index.mjs
var lib_exports = {};
__export(lib_exports, {
  Vue: () => Vue,
  Vue2: () => Vue2,
  del: () => del,
  install: () => install,
  isVue2: () => isVue2,
  isVue3: () => isVue3,
  set: () => set
});
__reExport(lib_exports, vue_star);
import * as Vue from "vue";
import * as vue_star from "vue";
var isVue2 = false;
var isVue3 = true;
var Vue2 = void 0;
function install() {
}
__name(install, "install");
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
__name(set, "set");
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
__name(del, "del");

// ../../node_modules/.pnpm/@vueuse+shared@9.12.0_vue@3.2.45/node_modules/@vueuse/shared/index.mjs
var _a;
var isClient = typeof window !== "undefined";
var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function useCounter(initialValue = 0, options = {}) {
  const count = (0, lib_exports.ref)(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = /* @__PURE__ */ __name((delta = 1) => count.value = Math.min(max, count.value + delta), "inc");
  const dec = /* @__PURE__ */ __name((delta = 1) => count.value = Math.max(min, count.value - delta), "dec");
  const get = /* @__PURE__ */ __name(() => count.value, "get");
  const set2 = /* @__PURE__ */ __name((val) => count.value = Math.max(min, Math.min(max, val)), "set");
  const reset = /* @__PURE__ */ __name((val = initialValue) => {
    initialValue = val;
    return set2(val);
  }, "reset");
  return {
    count,
    inc,
    dec,
    get,
    set: set2,
    reset
  };
}
__name(useCounter, "useCounter");

// src/index.tsx
var incFnkey = Symbol("inc-key");
var decFnKey = Symbol("dev-key");
var ACounter = defineComponent({
  name: "ACounter",
  props: {
    as: {
      type: [String, Object],
      default: "div"
    },
    initialValue: {
      type: Number,
      default: 0
    },
    options: {
      type: Object
    }
  },
  setup(props, {
    slots
  }) {
    const {
      count,
      inc,
      dec,
      set: set2,
      reset
    } = useCounter(props.initialValue, props.options);
    provide2(incFnkey, inc);
    provide2(decFnKey, dec);
    return () => {
      var _a2;
      return [h("div", (_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
        count
      }))];
    };
  }
});
var ACounterInc = defineComponent({
  name: "ACounterInc",
  props: {
    as: {
      type: [String, Object],
      default: "button"
    },
    delta: {
      type: Number,
      default: 1
    }
  },
  setup(props, {
    slots
  }) {
    const inc = inject2(incFnkey);
    return () => {
      var _a2;
      return [h(props.as, {
        onClick: () => {
          inc(props.delta);
        }
      }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots))];
    };
  }
});
var ACounterDec = defineComponent({
  name: "ACounterDec",
  props: {
    as: {
      type: [String, Object],
      default: "button"
    },
    delta: {
      type: Number,
      default: 1
    }
  },
  setup(props, {
    slots
  }) {
    const dec = inject2(decFnKey);
    return () => {
      var _a2;
      return [h(props.as, {
        onClick: () => {
          dec(props.delta);
        }
      }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots))];
    };
  }
});
export {
  ACounter,
  ACounterDec,
  ACounterInc
};
