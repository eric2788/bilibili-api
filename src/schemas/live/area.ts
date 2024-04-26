import { HttpSchema, HttpDefine, BaseResponse } from "@schemas/common"


export namespace Area {

    export type Schema = HttpSchema<{}, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Area/getList',
    }

    type Output = BaseResponse<AreaRes[]>

    type AreaRes = {
        id: number
        name: string
        list: AreaList[]
    }

    type AreaList = {
        id: string // 子分区id
        parent_id: string // 父分区id
        old_area_id: string // 旧分区id
        name: string // 子分区名
        act_id: string // 0 作用尚不明确
        pk_status: string // ？？？ 作用尚不明确
        hot_status: number // 是否为热门分区 0：否, 1：是
        lock_status: string // 0 作用尚不明确
        pic: string // 子分区标志图片url
        parent_name: string // 父分区名
        area_type: number // 分区类型
    }
}