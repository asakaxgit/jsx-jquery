export interface Foo {
  executeDependency: Function;
}

export class MyLibrary implements Foo {
  executeDependency():number {

    return Math.floor(Math.random() * 10 + 1);
  }
}

export default MyLibrary;
