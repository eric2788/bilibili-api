
export interface CommonResponse<T = {}> {
    code: number
    message: string
    data?: T
}

export interface V1Response<T = {}> extends CommonResponse<T> {
    ttl: number
}

export interface BaseResponse<T = {}> extends CommonResponse<T> {
    msg: string
}