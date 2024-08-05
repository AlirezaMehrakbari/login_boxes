import axios from "axios";

export const boxesApi = axios.create({
    baseURL: 'http://192.168.1.33:70/',
});
export const getBoxes = async (url, token) => {
    const response = await axios.post(url, {
            search: [],
            orderBy: [],
            props: {},
            relations: {},
            exportColumns: []
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data.items

}
export const addBox = async (newBoxInfo, token) => {
    const response = await boxesApi.post('api/v1/boxsize', {
        ...newBoxInfo
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data

}
export const removeBox = async (boxId, token) => {
    const response = await boxesApi.delete(`api/v1/boxsize/${boxId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export const editBox = async (newBoxInfo, token) => {

    const response = await boxesApi.put('api/v1/boxsize', {
        ...newBoxInfo
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}
