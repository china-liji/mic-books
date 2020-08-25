### Description
A `react` DOM inspector which a most similar of `Chorme DevTools` inspector.

### Usage
```jsx
import { DomInspector } from 'mic-inspector';

<DomInspector dom={document} />
```

### Demo
```demo
import(usageDemo);
```

### Props
* **dom** · *required* - A specific node name to inspect.
* **expandLevel* · *optional* - An integer specifying to which level the tree should be initially expanded.
* **...props** · *extends* - HTMLProps&lt;HTMLDivElement&gt;