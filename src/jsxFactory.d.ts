declare namespace JSX {
    type Element = JQuery<HTMLElement>;
    interface IntrinsicElements {
      [eleName: string]: any;
    }
  }