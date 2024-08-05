import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import {Button, Drawer} from "@mui/material";
import AppTextInput from "../../appTextInput";
import {EditableBox} from "../_types/editableBox.type.ts";


type TableBoxProps = {
    list: any[],
    editModal: boolean,
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>,
    editableBox: EditableBox,
    setEditableBox: React.Dispatch<React.SetStateAction<{}>>,
    handleRemoveBox: (boxId: string) => void,
    handleOpenEditModal:(boxInfo)=>void,
    handleEditBox : ()=>void
}
const TableBox:React.FC<TableBoxProps> = ({
                      list,
                      editModal,
                      setEditModal,
                      editableBox,
                      setEditableBox,
                      handleRemoveBox,
                      handleOpenEditModal,
                      handleEditBox
                  }) => {
    return (
        <>
            <TableContainer component={Paper}
                            sx={{margin: '2rem auto', border: '1px solid #1976d2', width: '90%', borderRadius: '1rem'}}>
                <Table sx={{width: '100%', margin: 'auto',}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">نام باکس</TableCell>
                            <TableCell align="center">عرض</TableCell>
                            <TableCell align="center">ارتفاع</TableCell>
                            <TableCell align="center">حذف</TableCell>
                            <TableCell align="center">ویرایش</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list?.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row" align='center'>
                                    {item.name}
                                </TableCell>
                                <TableCell align="center">{item.width ? item.width : 'وجود ندارد'}</TableCell>
                                <TableCell align="center">{item.height ? item.height : 'وجود ندارد'}</TableCell>
                                <TableCell onClick={() => handleRemoveBox(item.guidRow)}
                                           align="center"><DeleteForeverIcon color='error'/></TableCell>
                                <TableCell onClick={() => handleOpenEditModal(item)}
                                           align="center"><EditIcon color='error'/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Drawer
                open={editModal}
                onClose={() => setEditModal(false)}
                anchor={'bottom'}
                sx={{
                    '& .MuiPaper-root': {
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '0.5rem',
                        padding: '1rem',
                        borderTopLeftRadius: '1rem',
                        borderTopRightRadius: '1rem'
                    }
                }}>
                <AppTextInput
                    label={'اسم باکس'}
                    name={'boxName'}
                    value={editableBox?.name || ''}
                    onClick={() => {
                    }}
                    onChange={(e) => {
                        setEditableBox({...editableBox, name: e.target.value})
                    }}
                    placeholder={'test...'}
                />
                <AppTextInput
                    label={'عرض باکس'}
                    name={'boxWidth'}
                    value={editableBox?.width || ''}
                    onClick={() => {
                    }}
                    onChange={(e) => {
                        setEditableBox({...editableBox, width: e.target.value.replace(/[^0-9]/g, "")});
                    }}
                    placeholder={'14'}
                />
                <AppTextInput
                    label={'ارتفاع باکس'}
                    name={'boxHeight'}
                    value={editableBox?.height || ''}
                    onClick={() => {
                    }}
                    onChange={(e) => {
                        setEditableBox({...editableBox, height: e.target.value.replace(/[^0-9]/g, "")});
                    }}
                    placeholder={'14'}
                />
                <Button variant="contained" onClick={handleEditBox}>ثبت</Button>
            </Drawer>
        </>
    )
}

export default TableBox
