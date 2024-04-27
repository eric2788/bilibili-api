import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"


export namespace Medals {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals',
        params: ['page_size', 'page']
    }

    type Input = {
        page_size: number
        page: number
    }

    type Output = V1Response<{
        count: number
        items: Medal[]
        page_info: PageInfo
    }>

    type Medal = {
        can_delete: boolean
        day_limit: number
        guard_level: number
        guard_medal_title: string
        intimacy: number
        is_lighted: number // 0: 未点亮, 1: 点亮
        level: number
        medal_name: string
        medal_color_border: number
        medal_color_start: number
        medal_color_end: number
        medal_id: number
        next_intimacy: number
        today_feed: number
        roomid: number
        status: number
        target_id: number
        target_name: string
        uname: string
    }

    type PageInfo = {
        total_page: number
        cur_page: number
    }
}