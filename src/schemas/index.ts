import * as video from './video'
import * as login from './login'

export type Schema = {
    video: video.VideoSchema
    login: login.LoginSchema
}

export type SchemaKey = keyof Schema

export const defines = {
    video: video.defines,
    login: login.defines
}