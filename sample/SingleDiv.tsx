import type { JQuery } from '../src/JQueryComponent';
import { JsxJQuery } from '../src/JsxJQuery';

export class SingleDiv implements JQuery.Component {
  render(): JQuery<HTMLElement> {
    return <div>
            
        </div>;
  }
} 