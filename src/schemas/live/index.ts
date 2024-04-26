import * as info from './info'
import { Area } from './area'
import { Stream } from './stream'
import { HttpDefine } from '@schemas/common'

export type Schema = {
    'info/init': info.Init.Schema
    'info/room': info.Room.Schema
    'info/stream': info.Stream.Schema
    'info/streamer': info.Streamer.Schema
    'info/user': info.User.Schema
    'area': Area.Schema
    'stream': Stream.Schema
}

export type SchemaKey = keyof Schema

export const defines: Record<SchemaKey, HttpDefine> = {
    'info/init': info.Init.defines,
    'info/room': info.Room.defines,
    'info/stream': info.Stream.defines,
    'info/streamer': info.Streamer.defines,
    'info/user': info.User.defines,
    'area': Area.defines,
    'stream': Stream.defines
}