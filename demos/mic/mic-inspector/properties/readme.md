### Description
Object properties inspector.

### Usage
```jsx
import { Properties } from 'mic-inspector';

<Properties owner={anyObject} />
```

### Demo
```demo
import(usageDemo);
```

### Props
* **owner** · *required* - An object that provides the properties to inspect.
* **preview** · *optional* - A boolean represents whether enable the preview mode. In preview mode, the property can not expand and show sub properties of an object.
* **...props** · *extends* - HTMLProps&lt;HTMLSpanElement&gt;