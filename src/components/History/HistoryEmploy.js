import React, {useState} from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Rating,Button, Select, MenuItem} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const HistoryEmploy = () => {

  const [progress, setProgress] = useState('');

  const handleChange = (event) => {
    setProgress(event.target.value);
  };
  const names = [
  'Chưa xác nhận',
  'Đã xác nhận',
  'Đang trên đường',
  'Đang làm',
  'Đã hoàn thành'
];
  return (
    <>
     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Hiện tại
    </Typography>
     <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
            <TableCell>Tên khách hàng</TableCell>
            <TableCell>Thời gian đăng ký</TableCell>
            <TableCell>Tiến độ</TableCell>
            <TableCell>Được đánh giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell >Gao trắng</TableCell>
              <TableCell >11-04-2023</TableCell>
              <TableCell >
                <Select
                    value={progress}
                    label="Tiến độ"
                    onChange={handleChange}
                    sx={{borderColor: "#fa8d22"}}
                >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        >
                        {name}
                        </MenuItem>
                    ))}
                 
                </Select>
                
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
    }}><CloseIcon/>
        Hủy nhận việc</Button>
    
     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Đã hoàn thành
    </Typography>
    <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
           <TableCell>Tên khách hàng</TableCell>
            <TableCell>Thời gian đăng ký</TableCell>
            <TableCell>Tiến độ</TableCell>
            <TableCell>Được đánh giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell component="th" >
             Gao đỏ
              </TableCell>
              <TableCell >01-02-2023</TableCell>
              <TableCell >Đã hoàn thành</TableCell>
              <TableCell >
                 <Rating name="read-only" value="5" readOnly />
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" >
             Gao vàng
              </TableCell>
              <TableCell >20-12-2023</TableCell>
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

export default HistoryEmploy