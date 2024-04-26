import { HttpSchema, HttpDefine, BaseResponse } from "@schemas/common"


export namespace Init {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Room/room_init',
        params: ['id']
    }

    type Input = {
        id: number
    }

    type Output = BaseResponse<{
        room_id: number; // 直播间真实id
        short_id: number; // 直播间id（短号）
        uid: number; // 主播用户mid
        need_p2p: number; // 是否p2p
        is_hidden: boolean; // 是否隐藏
        is_locked: boolean; // 是否锁定
        is_portrait: boolean; // 是否竖屏
        live_status: number; // 直播状态 0：未开播, 1：直播中, 2：轮播中
        hidden_till: number; // 隐藏时间戳
        lock_till: number; // 锁定时间戳
        encrypted: boolean; // 是否加密
        pwd_verified: boolean; // 加密房间是否通过密码验证 encrypted=true时才有意义
        live_time: number; // 开播时间 未开播时为-62170012800
        room_shield: number; // 未知
        is_sp: number; // 是否为特殊直播间 0：普通直播间, 1：付费直播间
        special_type: number; // 特殊直播间标志 0：普通直播间, 1：付费直播间, 2：拜年祭直播间
    }>
}