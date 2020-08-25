### Description
Object number value inspector.

### Usage
```jsx
import { NumberValue, Radix } from 'mic-inspector';

<NumberValue value={15} />;
<NumberValue value={15} radix={Radix.Hex} />;
```

### Demo
```demo
import(usageDemo);
```

### Props
* **value** · *required* - The number value.
* **radix** · *optional* - A specific number radix, default is Radix.Decimal.
* **...props** · *extends* - PropertyValueProps

### Radix
* Import from `mic-inspector`
```js
import { Radix } from 'mic-inspector';
```

* Inspect this object.
```inline-demo
import(radixDemo);
```