import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const AppTableRow = (
    {
        onClick,
        text,
        item
    }
) => {
    return (
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
            <TableCell onClick={() => handleEditBox(item)}
                       align="center"><EditIcon color='error'/></TableCell>
        </TableRow>
    )
}

export default AppTableRow
