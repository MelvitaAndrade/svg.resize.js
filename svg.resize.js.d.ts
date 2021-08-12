import { Element } from "@svgdotjs/svg.js";

declare module "@svgdotjs/svg.js" {
  interface Element {
    resize(enable?: boolean): this;
  }
}
