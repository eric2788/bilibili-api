import axiosFactory from 'axios'
import { LiveClient, VideoClient } from "bilibili-api"

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