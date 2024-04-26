# Bilibili-API

type-safe nodejs/browser library for bilibili api

based on `mitt` and `axios`

> [!NOTE]
> Those APIs are all according to [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/), if there are any mismatch, feel free to open an issue or PR.

## Features

- type-safe
- simple to use
- easy to extend/maintain

## Install

(not published yet)

```bash
npm install bilibili-api
```

## Usage

### Simple

```ts
import { ApiClient } from "bilibili-api";

const client = await ApiClient.create()

client.live.emit("info/room", { room_id: 1 }).then((res) => {
  console.log(res)
})

client.video.emit("action/like/web", { bvid: "1mK4y1C7Bz", like: 1, csrf: "" }).then((res) => {
  console.log(res)
})
```

### Partial

```js
import { LiveClient, VideoClient } from "bilibili-api"
import axiosFactory from 'axios'

// in nodejs, you will have to use external library for cookie support in axios
const axios = axiosFactory.create({ withCredentials: true })
const live = new LiveClient(axios)
const video = new VideoClient(axios)

// the emit key is type-safe
live.emit("info/room", { room_id: 1 }).then((res) => {
  // res is type-safe
  console.log(res)
})

video
  .emit("action/like/web", { // input is type-safe
    bvid: "1mK4y1C7Bz",
    like: 1,
    csrf: "",
  })
  .then((res) => {
    // res is type-safe
    console.log(res)
  })

// listen to events
live.on("info/room", (res) => {
  // res is type-safe
  console.log(res)
})
```

## Maintain/Extend/Contribute

### Schemas

ref: [src/schema](./src/schemas/)

taking `live/info/user` as an example:

file: `live/info/user.ts`
```ts
// information from https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/live/info.md#获取用户对应的直播间状态
export namespace User {

    export type Schema = HttpSchema<Input, Output>
    
    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld',
        params: ['mid']
    }

    type Input = {
        mid: number
    }

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

file: `live/info/index.ts`
```ts
export * from './init'
export * from './room'
export * from './stream'
export * from './streamer'
export * from './user' // added
```

file: `live/index.ts`
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
    'info/user': info.User.Schema // added
    'area': Area.Schema
    'stream': Stream.Schema
}

export type SchemaKey = keyof Schema

export const defines: Record<SchemaKey, HttpDefine> = {
    'info/init': info.Init.defines,
    'info/room': info.Room.defines,
    'info/stream': info.Stream.defines,
    'info/streamer': info.Streamer.defines,
    'info/user': info.User.defines, // added
    'area': Area.defines,
    'stream': Stream.defines
}
```

after adding, type-safe is now ready
```ts
import { LiveClient } from "bilibili-api"

const live = new LiveClient(axios)

live.emit("info/user", { mid: 1 }).then((res) => {
  // res is type-safe
  console.log(res)
})
```


### Clients

ref: [src/clients](./src/clients/)

e.g. `LiveClient`

file: `clients/live.ts`
```ts
import { HttpDefine } from "@schemas/common"
import { defines, Schema, SchemaKey } from "@schemas/live"
import { BaseClient, RequestConfig } from "./base"

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

file: `index.ts`
```ts
import { LiveClient } from "@clients/live" // added
import { LoginClient } from "@clients/login"
import { VideoClient } from "@clients/video"
import { AxiosInstance } from 'axios'
export class ApiClient {

    /**
     * Creates an instance of the ApiClient based on the environment.
     * 
     * @returns {ApiClient} The created instance of the ApiClient.
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
        this.live = new LiveClient(axios) // added
    }

    public readonly login: LoginClient
    public readonly video: VideoClient
    public readonly live: LiveClient // added

}


export {
    LiveClient, // added for partial
    LoginClient,
    VideoClient
}

```

usage
```ts
import { ApiClient, LiveClient } from "bilibili-api"

// use with ApiClient
const api = ApiClient.create()
api.live.emit("info/user", { mid: 1 }).then((res) => {
  // res is type-safe
  console.log(res)
})

// use with LiveClient
const live = new LiveClient(axios)
live.emit("info/user", { mid: 1 }).then((res) => {
  // res is type-safe
  console.log(res)
})
```


Notices:
- all implementations are preset from `BaseClient`
- redeclare function just for type-safe

> [!NOTE]
> currently implementation for each client seems to be the same just for type-safe, feel free to PR if you have better ideas