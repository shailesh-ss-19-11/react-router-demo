import axios from "axios"
import { BASEURL } from "../../AppConstants"
export const getApi = (params, success, error) => {
    axios.get(BASEURL).then((response) => {
        if (response.status === 200) {
            success(response.data)
        }
    }).catch((err) => {
        error(err)
    })
}


export const getSingeEntityApi = (id, success, error) => {
    axios.get(BASEURL + "/" + id).then((response) => {
        if (response.status === 200) {
            success(response.data)
        }
    }).catch((err) => {
        error(err)
    })
}

export const postData = (data,success,error)=>{
    axios.post(BASEURL,data).then((resp)=>{
        if(resp.status===201){
            success(resp.data)
        }
    }).catch((err)=>{
        error(err)
    })
}
