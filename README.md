# Bilibili-API

type-safe nodejs/browser library for bilibili api

based on `mitt` and `axios`

> [!NOTE]
> Those APIs are all according to [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/), if there are any mismatch, feel free to open an issue or PR.

## Install

(not published yet)

```bash
npm install bilibili-api
```

## Usage

Simple

```js
import { LiveClient, VideoClient } from "bilibili-api"

// in nodejs, you will have to use external library for cookie support in axios
const axios = axios.create({ withCredentials: true })
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

