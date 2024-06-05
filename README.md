## REACT大屏布局组件


### 快速开始


App.css

```css
#root,
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
```

App.tsx

```tsx
function App() {
  return (
    <DashboardAppResponsive
      minHeight={555}
      resource={{
        A1: TestChildBase,
        A2: TestChildBase,
        A3: TestChildBase,
        B1: TestChildBase,
        B2: TestChildBase,
        C1: TestChildBase,
        C2: TestChildBase,
        C3: TestChildBase,
      }}
      layout={({ breakpoint }) => {
        if (breakpoint === "tablet" || breakpoint == "mobile") {
          return tabletLayout
        }
        return pcLayout;
      }}
    />
  )
}

export default App
```


### 使用主题预设

```tsx
import './App.css'
import { DashboardAppResponsive } from 'rc-dashboard'
import { TestChildBase } from './components/TestChildBase'
import { tabletLayout } from './utils/tabletLayout'
import { pcLayout } from './utils/pcLayout'

import { jfDarkTheme } from 'rc-dashboard/dist/themes'
import 'rc-dashboard/dist/themes/index.css'

function App() {
  return (
    <DashboardAppResponsive
      minHeight={555}
      resource={{
        A1: TestChildBase,
        A2: TestChildBase,
        A3: TestChildBase,
        B1: TestChildBase,
        B2: TestChildBase,
        C1: TestChildBase,
        C2: TestChildBase,
        C3: TestChildBase,
      }}
      layout={({ breakpoint }) => {
        if (breakpoint === "tablet" || breakpoint == "mobile") {
          return tabletLayout
        }
        return pcLayout;
      }}
      themeProvider={jfDarkTheme}

    />
  )
}

export default App
```


### 组件属性

`resoucreProps` object
透传给resource组件的属性


`minHeight`  number
组件的最小高度

`cols`  number
栅格列数,默认12,

`theme` object
组件内部使用`useTheme`获取到这个值,一般是主题预设提供

`breakpoints` object
断点,默认 `{ showroom: 2600, desktop: 1300, tablet: 500, mobile: 0,}` 

`layout`  object
布局配置  i: id , w h : 宽高 , x y: 坐标 , padding: 外边距 ,zIndex :层级

`themeProvider` object
主题预设, 内部支持组件的所有属性,和用户属性合并


`wrapperStyle` object
最外层div容器的样式

`wrapperProps` object
最外层div容器的属性

`components` object
覆盖默认组件 , 一般主题内部会提供大部分 

```
layout?: 外层容器;
content?: 内容容器;
headerWrapper?: 头部外层容器;
headerInner?: 头部内部容器;
containerWrapper?: 卡片格子容器;
```


### resource组件使用主题提供的containerWrapper

```tsx
import { ResourceChildrenProps } from "rc-dashboard"


export const TestChildBase = (props: ResourceChildrenProps) => {
    const ContainerWrapper = props.containerWrapper;
    return (
        <ContainerWrapper title="测试++">TestChildBase</ContainerWrapper>
    )
}

```