import axios from "axios"
export const getApi = (BASEURL,params, success, error) => {
    axios.get(BASEURL).then((response) => {
        if (response.status === 200) {
            success(response.data)
        }
    }).catch((err) => {
        error(err)
    })
}


export const getSingeEntityApi = (BASEURL,id, success, error) => {
    axios.get(BASEURL + "/" + id).then((response) => {
        if (response.status === 200) {
            success(response.data)
        }
    }).catch((err) => {
        error(err)
    })
}

export const postData = (BASEURL,data,success,error)=>{
    axios.post(BASEURL,data).then((resp)=>{
        if(resp.status===201){
            success(resp.data)
        }
    }).catch((err)=>{
        error(err)
    })
}
