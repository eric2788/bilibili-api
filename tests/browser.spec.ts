import { test, expect } from './fixtures'

test('test simple', async ({ page, modules }) => {
    await modules['client'].loadToPage()
    const res = await page.evaluate(async () => {

        const { ApiClient } = window as any
        const client = await ApiClient.create()

        return client.live.emit("info/room", { room_id: 1 })

    })

    console.log(JSON.stringify(res, null, 2))

    expect(res).not.toBe(null)
    expect(res.code).toBe(0)
    expect(res.msg).toBe("ok")
})


test('test partial', async ({ page, modules }) => {

    await modules['client'].loadToPage()
    await modules['axios'].loadToPage()

    const res = await page.evaluate(async () => {
        const { LiveClient, axios } = window as any
        const live = new LiveClient(axios.create())

        return await live.emit("info/room", { room_id: 1 })
    })

    console.log(JSON.stringify(res, null, 2))

    expect(res).not.toBe(null)
    expect(res.code).toBe(0)
    expect(res.msg).toBe("ok")
})

