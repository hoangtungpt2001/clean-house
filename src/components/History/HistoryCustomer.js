import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Rating, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const HistoryCustomer = () => {

    
 
  return (
    <>
     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Hiện tại
    </Typography>
     <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
            <TableCell>Tên dịch vụ</TableCell>
            <TableCell>Tên người làm</TableCell>
            <TableCell>Thời gian đăng kí</TableCell>
            <TableCell>Tiến độ</TableCell>
            <TableCell>Đánh giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell component="th" >
              Dịch vụ định kỳ
              </TableCell>
              <TableCell >Lê Thị Tâm</TableCell>
              <TableCell >03-4-2023</TableCell>
              <TableCell >
                Chuẩn bị đến nơi
                </TableCell> 
              <TableCell  >
              <Rating name="read-only" value="0" readOnly />
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Button variant="outlined" 
    sx={{color:"#fa8d22", 
    borderColor: "#fa8d22",
    marginBottom: "20px",
    ":hover": {
             borderColor: "#fa8d22",
             backgroundColor: "rgba(250, 141, 34,0.1)"
            }
    }}> <CloseIcon/>
        Hủy dịch vụ</Button>

     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Đã đăng ký
    </Typography>
    <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
            <TableCell>Tên dịch vụ</TableCell>
            <TableCell>Tên người làm</TableCell>
            <TableCell>Thời gian đăng kí</TableCell>
            <TableCell>Tiến độ</TableCell>
            <TableCell>Đánh giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell component="th" >
              Dịch vụ định kỳ
              </TableCell>
              <TableCell >Lê Thị Tâm</TableCell>
              <TableCell >01-02-2023</TableCell>
              <TableCell >Đã hoàn thành</TableCell>
              <TableCell >
               <Rating name="read-only" value="5" readOnly />
                </TableCell>
            </TableRow>
             <TableRow>
              <TableCell component="th" >
              Dịch vụ tổng vệ sinh
              </TableCell>
              <TableCell >Lê Thị Nguyệt</TableCell>
              <TableCell >10-10-2022</TableCell>
              <TableCell >Đã hoàn thành</TableCell>
              <TableCell >
                 <Rating name="read-only" value="5" readOnly />
                </TableCell>
            </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>
    </>
  
  )
}

export default HistoryCustomer