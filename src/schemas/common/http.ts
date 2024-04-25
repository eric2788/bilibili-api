

export type HttpSchema<Input, Output> = {
    input: Input
    output: Output
}

export type HttpDefine = {
    method: HttpMethods
    url: string
    contentType?: HttpContentType
    params?: string[] // query string from input
}


export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'


export type HttpContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data'