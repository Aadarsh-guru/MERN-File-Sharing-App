import axios from 'axios'


export const uploadFile = async(data)=>{
    try {
        const response = await axios.post('http://localhost:8000/upload',data)
        return response.data;
    } catch (error) {
        console.log(`error while calling upload file api`, error.message);
        return error.message
    }
}