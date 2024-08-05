import style from './home.module.css'
import {Button} from "@mui/material";
import AppTextInput from "../appTextInput";
import CircularProgress from '@mui/material/CircularProgress';
import TableBox from "./tableBox";
import useHomePage from "./_hooks/useHomePage.ts";
import {setUserLogOut} from "../../redux/slices/AuthSlide.ts";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const {
        boxName,
        setBoxName,
        boxWidth,
        setBoxWidth,
        boxHeight,
        setBoxHeight,
        editableBox,
        setEditableBox,
        editModal,
        setEditModal,
        data,
        isLoading,
        handleAddBox,
        handleEditBox,
        handleRemoveBox,
        handleOpenEditModal,
        userInfo,
        dispatch
    } = useHomePage()
    const navigate = useNavigate()
    if (!userInfo.isLoggedIn) {
        return <p className={style.loginError}>دسترسی شما مجاز نیست...</p>
    }


    return (
        <>
            <div className={style.header}>
                <button className={style.logOutButton} onClick={() => {
                    dispatch(setUserLogOut())
                    navigate('/')
                }}>خروج از حساب کاربری</button>
                    </div>
                    <div className={style.container}>
                    <p className={style.title}> باکس های شما</p>
                    <div className={style.inputWrapper}>
                        <AppTextInput
                            label={'اسم باکس'}
                            name={'boxName'}
                            value={boxName}
                            onClick={() => {
                            }}
                            onChange={(e) => {
                                setBoxName(e.target.value)
                            }}
                            placeholder={'test...'}
                        />
                        <AppTextInput
                            label={'عرض باکس'}
                            name={'boxWidth'}
                            value={boxWidth}
                            onClick={() => {
                            }}
                            onChange={(e) => {
                                setBoxWidth(e.target.value.replace(/[^0-9]/g, ""));
                            }}
                            placeholder={'14'}
                        />
                        <AppTextInput
                            label={'ارتفاع باکس'}
                            name={'boxHeight'}
                            value={boxHeight}
                            onClick={() => {
                            }}
                            onChange={(e) => {
                                setBoxHeight(e.target.value.replace(/[^0-9]/g, ""));
                            }}
                            placeholder={'14'}
                        />
                        <Button variant="contained" onClick={handleAddBox}>اضافه کردن</Button>
                    </div>
                    {isLoading ?
                        <CircularProgress/>
                        :
                        <TableBox
                            list={data}
                            handleRemoveBox={handleRemoveBox}
                            editableBox={editableBox}
                            editModal={editModal}
                            setEditModal={setEditModal}
                            handleEditBox={handleEditBox}
                            handleOpenEditModal={handleOpenEditModal}
                            setEditableBox={setEditableBox}
                        />
                    }
            </div>
        </>
    )
}

export default Home
