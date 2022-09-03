import {urls} from "../constants";
import {axiosService} from "./axios.service";

const groupUserService = {
    getGroups: () => axiosService.get(urls.groups),
    createGroup: (group) => axiosService.post(`${urls.groups}`, group),
    updateGroupById: (id, updGroup) => axiosService.patch(`${urls.groups}/${id}`, updGroup),
    deleteGroupById: (id) => axiosService.delete(`${urls.groups}/${id}`),
    getUsers: () => axiosService.get(urls.users),
    deleteUserById: (id) => axiosService.delete(`${urls.users}/${id}`),
    addUser: (user, group_id) => axiosService.post(`${urls.groups}/${group_id}/user`),

}

export {
    groupUserService
}