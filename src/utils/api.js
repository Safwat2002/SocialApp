import axios from "axios"

export const getImage = async (imgId) => {
    try{
        const res = await axios.get(`/imgs/image/${imgId}`, {
            responseType:'blob'
        })

        return res.data
    }catch(err){
        return err.message
    }
}