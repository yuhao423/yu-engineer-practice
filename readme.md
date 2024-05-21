
### 1. pnpm 初始化

1. pnpm init 初始化

2. 新建.npmrc 文件,写入 `shamefully-hoist = true`

3. monorepo 和  `packages` 的引入

4. packages 下新建`cli-demo` 和 `create-yuyuyu`文件夹，并且`pnpm init`

   ```
   create-xxx 是用来命令行交互的，比如vite，vue等的命令行交互。
   cli-demo 就是快速创建一个工程
   本质上就是根据用户的输入来创建不同的 模板 
   ```

5. `create-yuyuyu`中的`package.json` 加入`bin`字段，去掉`main`字段，并且新建`index.js`,加入以下内容：就是变成一个脚本，让其他模块能执行。

   ```javascript
   #! /usr/bin/env node
   
   console.log("hello yuyuyu")
   
   ```


6. 在`cli-demo`中`pnpm add create-yuyuyu -w` 来引入`create-yuyuyu的模块`，是`-w` 而不是其他。最后在`package.json`文件中加入`scripts`：

   ```JSON
   scripts:{
   	"create-yuyuyu":"create-yuyuyu"
   }
   ```

### 2. 解析参数行

#### TODO:

- 引入 `typescript`；
- 引入 打包工具：`esbuild` 或者 `tsup`；
- 引入`eslint`和 `github action`工作流
