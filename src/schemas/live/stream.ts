import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";


export namespace Stream {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Room/playUrl',
        params: [
            'cid',
            'platform',
            'quality',
            'qn'
        ]
    }

    type Input = {
        cid: number
        platform: string
        quality: number
        qn: string
    }

    type Output = V1Response<Response>

    type Response = {
        current_quality: number
        accept_quality: string[]
        current_qn: number
        quality_description: QualityDescription[]
        durl: Durl[]
    }

    type QualityDescription = {
        qn: number
        desc: string
    }

    type Durl = {
        url: string
        length: number
        order: number
        stream_type: number
        p2p_type: number
    }
}