import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setUserLogin} from "../../../redux/slices/AuthSlide.ts";
import {toast} from "react-toastify";

const useLogin = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordIsVisible,setPasswordIsVisible] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleRegister = () => {
        const userData = {
            userName,
            password,
            captcha: "",
            verificationCode: "",
            applicationId: 3
        }
        axios.post('http://192.168.1.33:75/Account/Login', {
            ...userData
        })
            .then(res => {
                dispatch(setUserLogin({
                    token: res.data.token,
                    userId: res.data.userId,
                    userGuidRow: res.data.userGuidRow,
                    shouldChangePassword:  res.data.shouldChangePassword,
                }))
                navigate('/home')
            })
            .catch(() => toast.error('.نام کاربری یا رمزعبور شما اشتباه است'))
            .finally(()=>{
                setUserName('')
                setPassword('')
            })
    }
    return {userName,password,handleRegister,dispatch,setPassword,setUserName,passwordIsVisible,setPasswordIsVisible}
}

export default useLogin
