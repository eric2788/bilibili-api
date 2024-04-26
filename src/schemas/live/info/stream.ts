import { HttpDefine, HttpSchema, V1Response } from "@schemas/common"


export namespace Stream {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo',
        params: [
            'room_id',
            'protocol',
            'format',
            'codec',
            'qn',
            'platform',
            'ptype',
            'dolby',
            'panoroma'
        ]
    }

    type Input = {
        room_id: number
        protocol: string
        format: string
        codec: string
        qn: number
        platform: string
        ptype: number
        dolby: number
        panoroma: number
    }

    type Output = V1Response<StreamResponse>

    type StreamResponse = {
        room_id: number
        short_id: number
        uid: number
        is_hidden: boolean
        is_locked: boolean
        is_portrait: boolean
        live_status: number
        hidden_till: number
        lock_till: number
        encrypted: boolean
        pwd_verified: boolean
        live_time: number
        room_shield: number
        all_special_types: any[]
        playurl_info: {
            conf_json: string
            playurl: {
                cid: number
                g_qn_desc: GQnDesc[]
                stream: Stream[]
                p2p_data: P2pData
                dolby_qn: any
            }
        }
    }

    type GQnDesc = {
        qn: number
        desc: string
        hdr_desc: string
        attr_desc: any
    }

    type Stream = {
        protocol_name: string
        format: Format[]
    }

    type Format = {
        format_name: string
        codec: Codec[]
    }

    type Codec = {
        codec_name: string
        current_qn: number
        accept_qn: number[]
        base_url: string
        url_info: UrlInfo[]
        hdr_qn: any
        dolby_type: number
        attr_name: string
    }

    type UrlInfo = {
        host: string
        extra: string
        stream_ttl: number
    }

    type P2pData = {
        p2p: boolean
        p2p_type: number
        m_p2p: boolean
        m_servers: any
    }
}