import style from "./login.module.css";
import Layout from "../layout";
import {Button, InputAdornment} from "@mui/material";
import useLogin from "./_hooks/useLogin.ts";
import TextField from "@mui/material/TextField";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [rtlPlugin],
    });
    const {
        password,
        userName,
        handleRegister,
        setPassword,
        setUserName,
    } = useLogin()
    return (
        <div className={style.container}>
            <p className={style.title}>ورود / ثبت نام</p>
            <Layout>
                مشخصات خود را وارد کنید
                <CacheProvider value={cacheRtl}>
                    <TextField
                        sx={{width: '100%'}}
                        label={'نام کاربری'}
                        name={'userName'}
                        value={userName}
                        onClick={() => {
                        }}
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                        placeholder={'test@gmail.com'}
                    />
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityIcon />
                                </InputAdornment>
                            )
                        }}
                        sx={{width: '100%'}}
                        label={'رمز عبور'}
                        name={'userName'}
                        value={password}
                        type={'password'}
                        onClick={() => {
                        }}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        placeholder={'123'}
                    />
                </CacheProvider>
                <Button variant="contained" onClick={handleRegister}>ورود</Button>
            </Layout>
        </div>
    )
}

export default Login
