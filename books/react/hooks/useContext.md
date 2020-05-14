```tsx
import React, { createContext, useContext, useState } from 'react';
import { DepsTest } from './deps-test';
import { Demo } from '@/demos';

const ctx = createContext({
  a: 1,
  b: 2
})


function X({ k }): React.ReactElement {
  const [v, setV] = useState(1)
  console.log(useContext(ctx));

return <button onClick={() => { setV(v + 1) }}>{k}</button>;
};

export function UseCallbackTest(): React.ReactElement {
  return (
    <div>
      <Demo title='useCallback 只会在 依赖项（deps） 发生变化时，才会更新、改变'>
        <DepsTest />
      </Demo>
      <X k={99999}/>
      <ctx.Provider value={{a: 9,b:8 }}>
        <X k={123}/>
        <ctx.Provider value={{a: 55,b:66 }}>
          <X k={455}/>
        </ctx.Provider>
      </ctx.Provider>
    </div>
  );
}
```