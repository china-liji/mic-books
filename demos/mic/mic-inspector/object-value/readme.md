### Description
Object value inspector.

### Usage
```jsx
import { ObjectValue } from 'mic-inspector';

<ObjectValue value={anyObject} />;
<ObjectValue value={anyObject} preview maxPropertyLength={5} />;
```

### Demo
```demo
import(usageDemo);
```

### Props
* **value** · *required* - Any object that you want to inspect.
* **preview** · *optional* - A boolean represents whether enable the preview mode. In preview mode, the property will not show sub properties.
* **maxPropertyLength** · *optional* - A number represents the length of object properties to preview.
* **...props** · *extends* - PropertyValueProps