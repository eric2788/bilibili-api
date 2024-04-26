import { ApiClient } from "@index"
import axiosFactory from 'axios'
import { wrapper } from "axios-cookiejar-support"
import { CookieJar } from "tough-cookie"

function fromNodeJS(): ApiClient {
    const jar = new CookieJar()
    const ins = wrapper(axiosFactory.create({
        jar,
        withCredentials: true
    }))
    return new ApiClient(ins)
}

export default fromNodeJS