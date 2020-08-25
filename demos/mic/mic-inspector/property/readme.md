### Description
Object property inspector.

### Usage
```jsx
import { Property, NamedDescriptor } from 'mic-inspector';

const descriptor = new NamedDescriptor(window, 'window.location', location);

<Property name='object' value={anyObject} preview defaultExpand isNonenumerable={false} />
<Property descriptor={descriptor} />
```

### Demo
```demo
import(usageDemo);
```

### Props
* **name** · *optional* - Property name.
* **value** · *optional* - Property value.
* **descriptor** · *optional* - Property descriptor.
* **defaultExpand** · *optional* - A boolean represents whether this property should be expand by default
* **isNonenumerable** · *optional* - A boolean represents whether the object property is non-enumerable.
* **preview** · *optional* - A boolean represents whether enable the preview mode. In preview mode, the property can not expand and show sub properties of an object.
* **separator** · *optional* - A string represents the separator between property name and property value, default value is ':'.
* **...props** · *extends* - HTMLProps&lt;HTMLSpanElement&gt;