import { LiveClient } from "@clients/live"
import { LoginClient } from "@clients/login"
import { VideoClient } from "@clients/video"
import { AxiosInstance } from 'axios'

import '@extensions'

export class ApiClient {

    /**
     * Creates an instance of the ApiClient based on the environment.
     * 
     * @returns {ApiClient} The created instance of the ApiClient.
     */
    static async create(): Promise<ApiClient> {
        let create: Function
        if (typeof window === 'undefined') {
            create = (await import('@factories/node')).default
        } else {
            create = (await import('@factories/browser')).default
        }
        return create()
    }

    public constructor(axios: AxiosInstance) {
        this.login = new LoginClient(axios)
        this.video = new VideoClient(axios)
        this.live = new LiveClient(axios)
    }

    public readonly login: LoginClient
    public readonly video: VideoClient
    public readonly live: LiveClient

}


export {
    LiveClient,
    LoginClient,
    VideoClient
}