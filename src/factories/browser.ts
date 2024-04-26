import { ApiClient } from "@index";
import axiosFactory from 'axios';

function fromBrowser(): ApiClient {
    return new ApiClient(axiosFactory.create({ withCredentials: true }))
}

export default fromBrowser