import * as vue from 'vue';
import { PropType } from 'vue';
import { UseCounterOptions } from '@vueuse/core';

declare const ACounter: vue.DefineComponent<{
    as: {
        type: PropType<HTMLElement>;
        default: string;
    };
    initialValue: {
        type: NumberConstructor;
        default: number;
    };
    options: {
        type: PropType<UseCounterOptions>;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    as: {
        type: PropType<HTMLElement>;
        default: string;
    };
    initialValue: {
        type: NumberConstructor;
        default: number;
    };
    options: {
        type: PropType<UseCounterOptions>;
    };
}>>, {
    as: HTMLElement;
    initialValue: number;
}>;
declare const ACounterInc: vue.DefineComponent<{
    as: {
        type: PropType<HTMLElement>;
        default: string;
    };
    delta: {
        type: NumberConstructor;
        default: number;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    as: {
        type: PropType<HTMLElement>;
        default: string;
    };
    delta: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    as: HTMLElement;
    delta: number;
}>;
declare const ACounterDec: vue.DefineComponent<{
    as: {
        type: PropType<HTMLElement>;
        default: string;
    };
    delta: {
        type: NumberConstructor;
        default: number;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    as: {
        type: PropType<HTMLElement>;
        default: string;
    };
    delta: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    as: HTMLElement;
    delta: number;
}>;

export { ACounter, ACounterDec, ACounterInc };
