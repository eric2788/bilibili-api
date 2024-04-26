import { ApiClient } from "bilibili-api";

const client = await ApiClient.create()

client.live.emit("info/room", { room_id: 1 }).then((res) => {
  console.log(res)
})

client.video.emit("action/like/web", { bvid: "1mK4y1C7Bz", like: 1, csrf: "" }).then((res) => {
  console.log(res)
})