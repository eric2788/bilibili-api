import { HttpDefine } from "@schemas/common"
import { defines, Schema, SchemaKey } from "@schemas/live"
import { BaseClient, RequestConfig } from "./base"

export class LiveClient extends BaseClient<Schema> {

    async emit<K extends SchemaKey, Input extends Schema[K]['input'], Output extends Schema[K]['output']>(key: K, data: Input = undefined, options: RequestConfig = {}): Promise<Output> {
        return super.emit(key, data, options)
    }

    on<K extends SchemaKey, Data extends Schema[K]['output']>(key: K, handler: (data: Data) => void) {
        super.on(key, handler)
    }

    off<K extends SchemaKey, Data extends Schema[K]['output']>(key: K, handler: (data: Data) => void) {
        super.off(key, handler)
    }

    protected get defines(): Record<keyof Schema, HttpDefine> {
        return defines
    }
    
}