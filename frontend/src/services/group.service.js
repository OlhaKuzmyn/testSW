import {urls} from "../constants";
// import {axiosService} from "./axios.service";
import axios from "axios";

// const groupService = {
//     getAll: () => axiosService.get(urls.groups),
//     create: (group) => axiosService.post(`${urls.groups}`, group),
//     updateById: (id, updGroup) => axiosService.patch(`${urls.groups}/${id}`, updGroup),
//     deleteById: (id) => axiosService.delete(`${urls.groups}/${id}`),
// }

const groupService = {
    getAll: () => axios.get(urls.groups),
    create: (group) => axios.post(`${urls.groups}`, group),
    updateById: (id, updGroup) => axios.patch(`${urls.groups}/${id}`, updGroup),
    deleteById: (id) => axios.delete(`${urls.groups}/${id}`),
}

export {
    groupService
}