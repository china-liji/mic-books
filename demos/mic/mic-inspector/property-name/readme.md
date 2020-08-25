### Description
Object property name inspector.

### Usage
```jsx
import { PropertyName } from 'mic-inspector';

<PropertyName name='abc' />;
<PropertyName name={Symbol('abc')} dimmed />;
<PropertyName name={0} type={DescriptorNameType.Index} />;
```

### Demo
```demo
import(usageDemo);
```

### Props
* **name** · *required* - Property name.
* **dimmed** · *optional* - A boolean represents whether the font color should be dimmed.
* **separator** · *optional* - A string represents the separator between property name and property value, default value is ':'.
* **type** · *optional* - Property name type, only for query this component in css.
* **...props** · *extends* - HTMLProps&lt;HTMLSpanElement&gt;