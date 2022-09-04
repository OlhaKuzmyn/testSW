import {urls} from "../constants";
import {axiosService} from "./axios.service";

const groupService = {
    getAll: () => axiosService.get(urls.groups),
    create: (group) => axiosService.post(`${urls.groups}`, group),
    updateById: (id, updGroup) => axiosService.patch(`${urls.groups}/${id}`, updGroup),
    deleteById: (id) => axiosService.delete(`${urls.groups}/${id}`),
}

export {
    groupService
}