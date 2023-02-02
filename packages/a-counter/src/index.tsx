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
  reactive,
} from "vue";
import { useCounter } from '@vueuse/core'
import type { UseCounterOptions, } from "@vueuse/core";

interface ICounter {
  initialValue?: number,
  options?: UseCounterOptions
}

export const ACounter = defineComponent<ICounter>({
  name: "ACounter",
  setup(props, { slots }) {
    const _data = useCounter(props.initialValue, props.options)
    const data = reactive(_data)

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  }
});
