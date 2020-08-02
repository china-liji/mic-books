### Description
Object string value inspector.

### Usage
```jsx
import { StringValue } from 'mic-inspector';

<StringValue value='abc' />
<StringValue value='abc' before='`' after='`' />
```

### Demo
```demo
import(usageDemo);
```

### Props
* **value** · *required* - A specific string.
* **before** · *optional* - A string represents the start tag of this string value.
* **after** · *optional* - A string represents the end tag of this string value.
* **...props** · *extends* - PropertyValueProps