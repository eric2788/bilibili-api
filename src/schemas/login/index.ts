import * as cookie from "./cookie-refresh"
import * as qrcode from "./qrcode"
import { Logout } from './logout'
import { HttpDefine } from "@schemas/common"

export type Schema = {
    'cookie/refresh': cookie.Refresh.Schema
    'cookie/required': cookie.Required.Schema
    'qrcode/apply/tv': qrcode.ApplyTv.Schema
    'qrcode/apply/web': qrcode.ApplyWeb.Schema
    'qrcode/scan/tv': qrcode.ScanTv.Schema
    'qrcode/scan/web': qrcode.ScanWeb.Schema
    'logout': Logout.Schema
}

export type SchemaKey = keyof Schema

export const defines: Record<SchemaKey, HttpDefine> = {
    'cookie/refresh': cookie.Refresh.defines,
    'cookie/required': cookie.Required.defines,
    'qrcode/apply/tv': qrcode.ApplyTv.defines,
    'qrcode/apply/web': qrcode.ApplyWeb.defines,
    'qrcode/scan/tv': qrcode.ScanTv.defines,
    'qrcode/scan/web': qrcode.ScanWeb.defines,
    'logout': Logout.defines
}