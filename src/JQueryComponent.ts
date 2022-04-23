import { } from '../src/JsxJQuery';
import { JSX } from "./JsxJQuery";

type a = JSX.IntrinsicElements;

interface JQueryComponent {
    render(): JQuery<HTMLElement>
}

export declare namespace JQuery{
    export type Component = JQueryComponent
}