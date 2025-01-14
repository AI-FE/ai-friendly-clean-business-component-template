# React 业务组件生成提示词

请根据以下需求生成一个完整的 React 业务组件：

[在这里描述设计稿或自然语言需求]

## 技术要求

- 使用 React + TailwindCSS + Ant Design (antd) 技术栈
- TypeScript 类型定义
- 组件必须是纯展示组件，所有数据操作通过 props 暴露给外部
- 遵循前后端状态分离原则

## 文件结构要求

请生成以下文件结构：

1. `[ComponentName]/[ComponentName].tsx` - 主组件文件
   - 使用函数式组件
   - 从 interface.ts 导入类型定义
   - 实现组件的 UI 和交互逻辑
2. `[ComponentName]/interface.ts` - 类型定义文件
   - 定义组件的 props 接口
   - 定义组件内部使用的类型
3. `[ComponentName]/helpers.ts` - 工具函数文件
   - 抽离可复用的业务逻辑
   - 纯函数实现，不包含副作用
4. `[ComponentName]/index.ts` - 导出文件
   - 导出主组件
   - 导出相关类型定义
5. `[ComponentName]/[ComponentName].stories.tsx` - Storybook 文件
   - 包含组件的基础用法示例
   - 展示不同 props 组合的效果

## Props 设计要求

- 所有异步操作（如数据获取、提交）都通过回调函数形式的 props 暴露
- 使用 TypeScript 为所有 props 提供完整的类型定义
- props 命名要符合业务语义
- 必要时提供默认值

## 样式要求

- 优先使用 TailwindCSS 类名
- 合理使用 Ant Design 组件
- 遵循响应式设计原则
- 注意组件间距和对齐

## 代码规范

- 使用 ESLint 推荐配置
- 组件和函数使用 PascalCase 命名
- props 和变量使用 camelCase 命名
- 代码需要适当的注释说明

请根据以上要求，生成完整的组件代码。生成的代码应当：

1. 可以直接运行
2. 包含必要的类型定义
3. 包含基础的错误处理
4. 提供清晰的 props 文档
