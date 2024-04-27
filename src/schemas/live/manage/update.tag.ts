import { HttpSchema, HttpDefine,  BaseResponse } from "@schemas/common"

export namespace UpdateTag {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/room/v1/Room/update',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        add_tag: string
        del_tag: string
        csrf: string
        csrf_token: string
    }

    type Output = BaseResponse<TagResponse>

    type TagResponse = {
        audit_info: AuditInfo
        sub_session_key: string
    }

    type AuditInfo = {
        audit_title_reason: string
        audit_title_status: number
        update_title: string
    }
    
}