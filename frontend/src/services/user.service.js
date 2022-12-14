import {urls} from "../constants";
// import {axiosService} from "./axios.service";
import axios from "axios";

// const userService = {
//     getAll: () => axiosService.get(urls.users),
//     addUser: (user, group_id) => axiosService.post(`${urls.groups}/${group_id}/user`, user),
//     updateById: (user_id, updUser, group_id) => axiosService.patch(`${urls.users}/${user_id}/update_user/${group_id}`, updUser),
//     deleteById: (id) => axiosService.delete(`${urls.users}/${id}`),
//
// }

const userService = {
    getAll: () => axios.get(urls.users),
    addUser: (user, group_id) => axios.post(`${urls.groups}/${group_id}/user`, user),
    updateById: (user_id, updUser, group_id) => axios.patch(`${urls.users}/${user_id}/update_user/${group_id}`, updUser),
    deleteById: (id) => axios.delete(`${urls.users}/${id}`),

}

export {
    userService
}