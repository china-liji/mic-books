### Description
A `react` inspector which a most similar of `Chorme DevTools` inspector.

### Usage
```jsx
import { Inspector } from 'mic-inspector';

<Inspector name='name' data={anyObject} />;
<Inspector name='name' data={anyObject} isNonenumerable defaultExpand />;
```

### Demo
```demo
import(usageDemo);
```

### Props
* **name** · *required* - A specific property name to display.
* **data** · *required* - Any type data that you want to inspect.
* **isNonenumerable** · *optional* - A boolean represents whether the object property is non-enumerable.
* **defaultExpand** · *optional* - A boolean represents whether this property should be expand by default
* **...props** · *extends* - HTMLProps&lt;HTMLDivElement&gt;