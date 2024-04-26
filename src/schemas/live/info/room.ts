import { BaseResponse, HttpDefine, HttpSchema } from "@schemas/common"

export namespace Room {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Room/get_info',
        params: ['room_id']
    }

    type Input = {
        room_id: number
    }

    type Output = BaseResponse<InfoRes>

    type InfoRes = {
        uid: number // 主播mid
        room_id: number // 直播间长号
        short_id: number // 直播间短号，为0时无短号
        attention: number // 关注数量
        online: number // 观看人数
        is_portrait: boolean // 是否竖屏
        description: string // 描述
        live_status: number // 直播状态 0：未开播, 1：直播中, 2：轮播中
        area_id: number // 分区id
        parent_area_id: number // 父分区id
        parent_area_name: string // 父分区名称
        old_area_id: number // 旧版分区id
        background: string // 背景图片链接
        title: string // 标题
        user_cover: string // 封面
        keyframe: string // 关键帧，用于网页端悬浮展示
        is_strict_room: boolean // 未知
        live_time: string // 直播开始时间，格式YYYY-MM-DD HH:mm:ss
        tags: string // 标签，','分隔
        is_anchor: number // 未知
        room_silent_type: string // 禁言状态
        room_silent_level: number // 禁言等级
        room_silent_second: number // 禁言时间，单位是秒
        area_name: string // 分区名称
        pardants: string // 未知
        area_pardants: string // 未知
        hot_words: string[] // 热词
        hot_words_status: number // 热词状态
        verify: string // 未知
        new_pendants: Pendants // 头像框\大v
        up_session: string // 未知
        pk_status: number // pk状态
        pk_id: number // pk id
        battle_id: number // 未知
        allow_change_area_time: number
        allow_upload_cover_time: number
        studio_info: StudioInfo
    }

    type Pendants = {
        frame: Frame
        mobile_frame: Frame
        badge: Badge
        mobile_badge: Badge
    }

    type Frame = {  
        name: string
        value: string
        position: number
        desc: string
        area: number
        area_old: number
        bg_color: string
        bg_pic: string
        use_old_area: boolean
    }

    type Badge = {
        name: string
        position: number
        value: string
        desc: string
    }

    type StudioInfo = {
        status: number
        master_list: any[]
    }
}