import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";
import useSWR, {mutate} from "swr";
import {toast} from "react-toastify";
import {EditableBox} from "../_types/editableBox.type.ts";
import {addBox, editBox, getBoxes, removeBox} from "../_api/boxesApi.ts";


const useHomePage = () => {
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()
    const [boxName, setBoxName] = useState('')
    const [boxWidth, setBoxWidth] = useState('')
    const [boxHeight, setBoxHeight] = useState('')
    const [editableBox, setEditableBox] = useState<EditableBox>({})
    const [editModal, setEditModal] = useState(false)
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR(`http://192.168.1.33:70/api/v1/boxsize/getlist?Limit=${200}`, (url) => getBoxes(url, userInfo.token))
    const handleAddBox = async () => {
        if (!boxName || !boxWidth || !boxHeight) {
            toast('.مقادیر را کامل وارد کنید')
            return
        }
        let newBoxInfo = {
            name: boxName,
            width: boxWidth,
            height: boxHeight,
            depth: 0,
            order: 0
        }
        try {
            await addBox(newBoxInfo, userInfo.token)
            toast('.با موفقیت اضافه شد')
            setBoxName('')
            setBoxHeight('')
            setBoxWidth('')
            mutate()
        } catch (error) {
            toast.error(error.response.data.message)
        }
        setEditableBox({})

    }
    const handleRemoveBox = async (boxId) => {
        try {
            await removeBox(boxId, userInfo.token)
            toast.success('باکس شما با موفقیت حذف شد.')
            mutate()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    const handleEditBox = async () => {
        let newBoxInfo = {
            guidRow: editableBox.guidRow,
            name: editableBox.name,
            width: editableBox.width,
            height: editableBox.height,
            depth: editableBox.depth,
            order: 0
        }

        try {
            await editBox(newBoxInfo, userInfo.token)
            setEditableBox({})
            setEditModal(false)
            mutate()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    const handleOpenEditModal = (selectedBoxInfo) => {
        setEditModal(true)
        setEditableBox(selectedBoxInfo)
    }

    return {
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
    }
}

export default useHomePage
