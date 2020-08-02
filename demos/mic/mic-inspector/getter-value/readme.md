### Description
Object getter value inspector.

### Usage
```jsx
import { GetterValue } from 'mic-inspector';

const { get } = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

<GetterValue value={get} owner={document.body} />;
<GetterValue value={get} owner={null} />;
```

### Demo
```demo
import(usageDemo);
```

### Props
* **value** · *required* - A specific method that will be called by click this component, and display the returned value.
* **owner** · *required* - A specific object that will be used as the 'this' in the getter method.
* **...props** · *extends* - PropertyValueProps

### GetterStatus
* Import from `mic-inspector`.
```js
import { GetterStatus } from 'mic-inspector';
```

* Inspect this object.
```inspector
inspect(getterStatusProps);
```