import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";
import { useContext } from "react";



const axiosSecure = axios.create({
    baseURL:'https://taskmanagement-backend.vercel.app/',
     withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        //  console.log(config)
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            logout()
            navigate('/login')


        }
        return Promise.reject(error);
    })


    return axiosSecure;
}

export default useAxiosSecure;