import {
  h,
  defineComponent,
  PropType,
  computed,
  ComputedRef,
  Fragment,
  provide,
  InjectionKey,
  Ref,
  inject,
} from "vue";
import { useCounter } from '@vueuse/core'
import type { UseCounterOptions } from "@vueuse/core";

const incFnkey: InjectionKey<(delta?: number) => number> = Symbol('inc-key')
const decFnKey: InjectionKey<(delta?: number) => number> = Symbol('dev-key')


export const ACounter = defineComponent({
  name: "ACounter",
  props: {
    as: {
      type: [String, Object] as PropType<HTMLElement>,
      default: "div",
    },
    initialValue: {
      type: Number,
      default: 0
    },
    options: {
      type: Object as PropType<UseCounterOptions>
    }
  },
  setup(props, { slots }) {
    const { count, inc, dec, set, reset } = useCounter(props.initialValue, props.options)
    provide(incFnkey, inc)
    provide(decFnKey, dec)

    return () => [
      h('div', slots.default?.({ count })),
    ]

  }
});

export const ACounterInc = defineComponent({
  name: "ACounterInc",
  props: {
    as: {
      type: [String, Object] as PropType<HTMLElement>,
      default: "button",
    },
    delta: {
      type: Number,
      default: 1
    },
  },
  setup(props, { slots }) {
    const inc = inject(incFnkey)!

    return () => [
      h(props.as, {
        onClick: () => {
          inc(props.delta)
        }
      }, slots.default?.()),
    ]
  }
})

export const ACounterDec = defineComponent({
  name: "ACounterDec",
  props: {
    as: {
      type: [String, Object] as PropType<HTMLElement>,
      default: "button",
    },
    delta: {
      type: Number,
      default: 1
    },
  },
  setup(props, { slots }) {
    const dec = inject(decFnKey)!

    return () => [
      h(props.as, {
        onClick: () => {
          dec(props.delta)
        }
      }, slots.default?.()),
    ]
  }
})
