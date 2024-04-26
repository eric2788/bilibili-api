import { test, expect } from './fixtures'
import { ApiClient, LiveClient } from 'bilibili-api'
import axios from "axios";

test('test global', async () => {

    const client = await ApiClient.create()
    const res = await client.live.emit("info/room", { room_id: 1 })

    console.log(JSON.stringify(res, null, 2))

    expect(res).not.toBe(null)
    expect(res.code).toBe(0)
    expect(res.msg).toBe("ok")

})

test('test partial', async () => {

    const live = new LiveClient(axios.create())
    const res = await live.emit("info/room", { room_id: 1 })

    console.log(JSON.stringify(res, null, 2))

    expect(res).not.toBe(null)
    expect(res.code).toBe(0)
    expect(res.msg).toBe("ok")
})