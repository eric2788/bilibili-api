import { HttpSchema, HttpDefine, BaseResponse } from "@schemas/common"


export namespace Streamer {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/live_user/v1/Master/info',
        params: ['uid']
    }

    type Input = {
        uid: number
    }

    type Output = BaseResponse<StreamerRes>

    type StreamerRes = {
        info: Info // 主播信息
        exp: Exp // 经验等级
        follower_num: number // 主播粉丝数
        room_id: number // 直播间id（短号）
        medal_name: string // 粉丝勋章名
        glory_count: number // 主播荣誉数
        pendant: string // 直播间头像框url
        link_group_num: number // 0 作用尚不明确
        room_news: RoomNews // 主播公告
    }

    type Info = {
        uid: number // 主播mid
        uname: string // 主播用户名
        face: string // 主播头像url
        official_verify: OfficialVerify // 认证信息
        gender: number // 主播性别 -1：保密, 0：女, 1：男
    }

    type OfficialVerify = {
        type: number
        desc: string
    }

    type Exp = {
        master_level: {
            level: number // 主播等级
            color: number
            current: number[] // 当前经验
            next: number[] // 下一等级经验
        } // 主播等级
    }

    type RoomNews = {
        content: string
        ctime: string
        ctime_text: string
    }
}