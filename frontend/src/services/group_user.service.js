import {urls} from "../constants";
import {axiosService} from "./axios.service";

const groupUserService = {
    getGroups: () => axiosService.get(urls.groups),
    getUsers: () => axiosService.get(urls.users),
}

export {
    groupUserService
}