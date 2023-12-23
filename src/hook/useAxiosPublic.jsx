import axios from "axios";


const axiosPublic=axios.create({
    baseURL:'https://taskmanagement-backend.vercel.app/',
    withCredentials:false
})

const useAxiosPublic=()=>{
    return axiosPublic;
}

export default useAxiosPublic;