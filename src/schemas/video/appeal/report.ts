import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";


export namespace Report {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.bilibili.com/x/web-interface/appeal/v2/submit',
        contentType: 'multipart/form-data'
    }

    type Input = {
        csrf: string
        aid: number
        tid: string
        desc: string
        attach?: string
        buid: string
        Buid: string
    }

    type Output = V1Response

}