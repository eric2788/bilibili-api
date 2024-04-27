import * as info from './info'
import * as manage from './manage'
import * as silent from './silent'
import * as user from './user'
import { Area } from './area'
import { StreamVideo } from './stream.video'
import { HttpDefine } from '@schemas/common'
import { StreamMessage } from "./stream.message"

export type Schema = {
    'info/init': info.Init.Schema
    'info/room': info.Room.Schema
    'info/stream': info.Stream.Schema
    'info/streamer': info.Streamer.Schema
    'info/user': info.User.Schema
    'manage/live/start': manage.LiveStart.Schema
    'manage/live/stop': manage.LiveStop.Schema
    'manage/update/news': manage.UpdateNews.Schema
    'manage/update/title': manage.UpdateTitle.Schema
    'manage/update/tag': manage.UpdateTag.Schema
    'slient/list': silent.List.Schema
    'slient/mute': silent.Mute.Schema
    'slient/unmute': silent.UnMute.Schema
    'user/medals': user.Medals.Schema
    'user/sign': user.Sign.Schema
    'user/sign/info': user.SignInfo.Schema
    'user/sign/info/lastMonth': user.SignInfoLastMonth.Schema
    'user/medal/wear': user.MedalWear.Schema
    'area': Area.Schema
    'stream/message': StreamMessage.Schema
    'stream/video': StreamVideo.Schema
}

export type SchemaKey = keyof Schema

export const defines: Record<SchemaKey, HttpDefine> = {
    'info/init': info.Init.defines,
    'info/room': info.Room.defines,
    'info/stream': info.Stream.defines,
    'info/streamer': info.Streamer.defines,
    'info/user': info.User.defines,
    'manage/live/start': manage.LiveStart.defines,
    'manage/live/stop': manage.LiveStop.defines,
    'manage/update/news': manage.UpdateNews.defines,
    'manage/update/title': manage.UpdateTitle.defines,
    'manage/update/tag': manage.UpdateTag.defines,
    'slient/list': silent.List.defines,
    'slient/mute': silent.Mute.defines,
    'slient/unmute': silent.UnMute.defines,
    'user/medals': user.Medals.defines,
    'user/sign': user.Sign.defines,
    'user/sign/info': user.SignInfo.defines,
    'user/sign/info/lastMonth': user.SignInfoLastMonth.defines,
    'user/medal/wear': user.MedalWear.defines,
    'area': Area.defines,
    'stream/message': StreamMessage.defines,
    'stream/video': StreamVideo.defines
}