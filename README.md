> [!IMPORTANT]
> 该项目为概念半成品，主要用于测试日后维护和扩展API的可行性。
> 
> 假设你觉得这个项目可行，欢迎贡献代码，让这个项目更加完善！
> 当进度足够完善时，将会发布到 npm 上。

# Bilibili-API

适用于 nodejs/browser 的 bilibili api 类型安全库

基于 `mitt` 和 `axios`

> [!NOTE]
> 这些 API 都是根据 [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/) 来的，如果有任何不匹配，欢迎开 issue 或 PR。

## 特性

- 类型安全
- 开箱即用
- 易于扩展/维护

## 安装

（尚未发布）

```bash
npm install bilibili-api
```

## 使用

简单示例

```ts
import { ApiClient } from "bilibili-api";

const client = await ApiClient.create()

client.live.emit("info/room", { room_id: 1 }).then((res) => {
  console.log(res)
})

client.video.emit("action/like/web", { bvid: "1mK4y1C7Bz", like: 1, csrf: "" }).then((res) => {
  console.log(res)
})

// 监听事件
client.live.on("info/room", (res) => {
    // res 是类型安全的
    console.log(res)
})
```

部分引入

```ts
import { LiveClient, VideoClient } from "bilibili-api"
import axiosFactory from 'axios'

// 在 nodejs 中，你需要使用外部库来支持 axios 中的 cookie
const axios = axiosFactory.create({ withCredentials: true })
const live = new LiveClient(axios)
const video = new VideoClient(axios)

// emit 键是类型安全的
live.emit("info/room", { room_id: 1 }).then((res) => {
    // res 是类型安全的
    console.log(res)
})

video
    .emit("action/like/web", { // 输入是类型安全的
        bvid: "1mK4y1C7Bz",
        like: 1,
        csrf: "",
    })
    .then((res) => {
        // res 是类型安全的
        console.log(res)
    })
// 监听事件
live.on("info/room", (res) => {
    // res 是类型安全的
    console.log(res)
})
```


## 维护/扩展/贡献

### 架构

参考：[src/schema](./src/schemas/)

以 `live/info/user` 为例：

文件：`live/info/user.ts`

```ts
// 信息来源于 https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#获取用户对应的直播间状态
export namespace User {

    export type Schema = HttpSchema<Input, Output>

    // 定义
    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld',
        params: ['mid']
    }

    // 输入架构
    type Input = {
        mid: number
    }

    // 输出架构
    type Output = V1Response<{
        roomStatus: number
        roundStatus: number
        live_status: number
        url: string
        title: string
        cover: string
        online: number
        roomid: number
        broadcast_type: number
        online_hidden: number
    }>

}
```

文件：`live/info/index.ts`
```ts
export * from './init'
export * from './room'
export * from './stream'
export * from './streamer'
export * from './user' // 已添加
```

文件：`live/index.ts`
```ts
import * as info from './info'
import { Area } from './area'
import { Stream } from './stream'
import { HttpDefine } from '@schemas/common'

export type Schema = {
    'info/init': info.Init.Schema
    'info/room': info.Room.Schema
    'info/stream': info.Stream.Schema
    'info/streamer': info.Streamer.Schema
    'info/user': info.User.Schema // 已添加
    'area': Area.Schema
    'stream': Stream.Schema
}

export type SchemaKey = keyof Schema
export const defines: Record<SchemaKey, HttpDefine> = {
    'info/init': info.Init.defines,
    'info/room': info.Room.defines,
    'info/stream': info.Stream.defines,
    'info/streamer': info.Streamer.defines,
    'info/user': info.User.defines, // 已添加
    'area': Area.defines,
    'stream': Stream.defines
}
```

添加后，类型安全现已就绪

```ts
import { LiveClient } from "bilibili-api"

const live = new LiveClient(axios)

live.emit("info/user", { mid: 1 }).then((res) => {
    // res 是类型安全的
    console.log(res)
})
```

### 客户端

参考：[src/clients](./src/clients/)

新增一个新的客户端类别时使用。例如 `schames/live`

文件：`clients/live.ts`

```ts
import { HttpDefine } from "@schemas/common"
import { defines, Schema, SchemaKey } from "@schemas/live"
import { BaseClient, RequestConfig } from "./base"

// Schema 是基于 该文件夹的架构定义的 (这里的例子为 live )
export class LiveClient extends BaseClient<Schema> {

    async emit<K extends SchemaKey, Input extends Schema[K]['input'], Output extends Schema[K]['output']>(key: K, data: Input = undefined, options: RequestConfig = {}): Promise<Output> {
        return super.emit(key, data, options)
    }

    on<K extends SchemaKey, Data extends Schema[K]['output']>(key: K, handler: (data: Data) => void) {
        super.on(key, handler)
    }

    off<K extends SchemaKey, Data extends Schema[K]['output']>(key: K, handler: (data: Data) => void) {
        super.off(key, handler)
    }

    protected get defines(): Record<keyof Schema, HttpDefine> {
        return defines
    }

}
```

文件：`index.ts`

```ts
import { LiveClient } from "@clients/live" // 已添加
import { LoginClient } from "@clients/login"
import { VideoClient } from "@clients/video"
import { AxiosInstance } from 'axios'
export class ApiClient {

    /**
     * 根据环境创建 ApiClient 实例。
     * 
     * @returns {ApiClient} 创建的 ApiClient 实例。
     */
    static create(): ApiClient {
        let create: Function
        if (typeof window === 'undefined') {
            const fromNodeJS = require('@factories/node').default
            create = fromNodeJS
        } else {
            const fromBrowser = require('@factories/browser').default
            create = fromBrowser
        }
        return create()
    }

    public constructor(axios: AxiosInstance) {
        this.login = new LoginClient(axios)
        this.video = new VideoClient(axios)
        this.live = new LiveClient(axios) // 已添加
    }

    public readonly login: LoginClient
    public readonly video: VideoClient
    public readonly live: LiveClient // 已添加

}

export {
    LiveClient, // 为部分引入而添加
    LoginClient,
    VideoClient
}
```

使用方法

```ts
import { ApiClient, LiveClient } from "bilibili-api"

// 使用 ApiClient
const api = ApiClient.create()
api.live.emit("info/user", { mid: 1 }).then((res) => {
    // res 是类型安全的
    console.log(res)
})

// 使用 LiveClient
const axios = axios.create()
const live = new LiveClient(axios)
live.emit("info/user", { mid: 1 }).then((res) => {
    // res 是类型安全的
    console.log(res)
})
```


注意事项：

- 所有实现都是从 BaseClient 预设的
- 重新声明函数只是为了类型安全

> [!NOTE] 
> 目前每个客户端的实现似乎都是一样的，只是为了类型安全，如果你有更好的想法，欢迎 PR