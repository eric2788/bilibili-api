import { HttpDefine, HttpSchema, V1Response } from "@schemas/common"


export namespace Types {

    export type Schema = HttpSchema<never, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.bilibili.com/x/web-interface/archive/appeal/tags'
    }

    type Output = V1Response<{
        tid: number
        business: number
        weight: number
        round: number
        state: number
        name: string
        remark: string
        ctime: string
        mtime: string
        controls: unknown[] | null
    }[]>
}