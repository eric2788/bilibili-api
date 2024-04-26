import { HttpDefine } from '@schemas/common'
import * as action from './action'
import * as appeal from './appeal'

export type Schema = {
    'action/coin/app': action.AppCoin.Schema
    'action/coin/web': action.WebCoin.Schema
    'action/coined': action.Coined.Schema
    'action/dislike/app': action.AppDislike.Schema
    'action/favourite': action.Favourite.Schema
    'action/favourited': action.Favourited.Schema
    'action/like/app': action.AppLike.Schema
    'action/like/web': action.WebLike.Schema
    'action/liked': action.Liked.Schema
    'action/share/web': action.WebShare.Schema
    'action/triple/app': action.AppTriple.Schema
    'action/triple/web': action.WebTriple.Schema
    'appeal/report': appeal.Report.Schema
    'appeal/types': appeal.Types.Schema
}

export type SchemaKey = keyof Schema

export const defines: Record<SchemaKey, HttpDefine> = {
    'action/coin/app': action.AppCoin.defines,
    'action/coin/web': action.WebCoin.defines,
    'action/coined': action.Coined.defines,
    'action/dislike/app': action.AppDislike.defines,
    'action/favourite': action.Favourite.defines,
    'action/favourited': action.Favourited.defines,
    'action/like/app': action.AppLike.defines,
    'action/like/web': action.WebLike.defines,
    'action/liked': action.Liked.defines,
    'action/share/web': action.WebShare.defines,
    'action/triple/app': action.AppTriple.defines,
    'action/triple/web': action.WebTriple.defines,
    'appeal/report': appeal.Report.defines,
    'appeal/types': appeal.Types.defines
}