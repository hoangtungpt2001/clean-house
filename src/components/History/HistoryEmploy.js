import React, {useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthStatus, fecthService, fecthOrder, updateOrderStatusId } from '../../store/actions/serviceAction';
import { fecthAllUser } from '../../store/actions/getUserAction';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Rating,Button, Select, MenuItem,Modal,Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow:' 0px 0px 10px rgba(0, 0, 0, 0.5)',
  borderRadius: '5px!important',
  padding: '30px'
};

const HistoryEmploy = () => {
  const dispatch = useDispatch();
  const { statuses, services, orders } = useSelector(state => state.services);
  const { users } = useSelector(state => state.users);
  const {isLogin,account} = useSelector((state) => state.account);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
        dispatch(fecthStatus());
        dispatch(fecthService());
        dispatch(fecthOrder());
        dispatch(fecthAllUser());
    }, [dispatch]);

    const slicedStatus = statuses.slice(0, 7);
   
    const currentOrder = useMemo(() => orders
    ? orders.filter((order) => (order.statusId !== 7 && order.statusId !== 8 && order.workerId === account.userId) )
    : [], [orders, account.userId]);
    const historyOrder = useMemo(() => orders
    ? orders.filter((order) => ((order.statusId === 7 || order.statusId === 8) && order.workerId === account.userId))
    : [], [orders, account.userId]);
   

  const progressInitialValue = useMemo(() => {
  if (currentOrder && currentOrder.length > 0 && statuses && statuses.length > 0) {
    let initialStatusId = '';
    for (let i = 0; i < currentOrder.length; i++) {
      const order = currentOrder[i];
      const status = statuses.find((s) => s.id === order.statusId);
      if (status) {
        initialStatusId = status.id;
        break;
      }
    }
    return initialStatusId;
  }
  return '';
}, [currentOrder, statuses]);

    const [progress, setProgress] = useState(progressInitialValue);
    const handleChange = (event, orderId) => {
      const newStatusId = event.target.value;
      dispatch(updateOrderStatusId(orderId, newStatusId));
      setProgress(newStatusId);
      dispatch(fecthOrder());
    };
    const handleCancleSerrvice = (event, orderId) =>{
      dispatch(updateOrderStatusId(orderId, 8));
      dispatch(fecthOrder());
      handleClose()
  }
  return (
    <>
     {isLogin && account.roleId === 3 && 
      <>
      
     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Hiện tại
    </Typography>
     <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow >
            <TableCell   >Tên khách hàng</TableCell>
             <TableCell  >Tên dịch vụ</TableCell>
            <TableCell  >Thời gian đăng ký</TableCell>
            <TableCell  >Tiến độ</TableCell>
            <TableCell  >Được đánh giá</TableCell>
            <TableCell  >Hủy nhận việc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
         {currentOrder && currentOrder.length > 0 && currentOrder.map((item)=>{
            const service = services ? services.find((service) => service.id === item.serviceId) : {};
            const user = users ?  users.find((user) => user.id === item.customerId) : {};
            
            return ( 
              <TableRow key={item.id}>
                <TableCell component="th" >
                    {user.firstName} {user.lastName}
                </TableCell>
                <TableCell > {service.name}</TableCell>
                <TableCell >{item.date}</TableCell>
                <TableCell style={{ width: "250px" }} >
      
                  <Select
                      value={progress}
                      variant="standard"
                      label="Tiến độ"
                      onChange={(event) => handleChange(event,item.id)}
                      sx={{
                        borderColor: "#fa8d22", width: "100%",
                          '&:before': {
                            borderBottom: 'none', // bỏ gạch dưới trước khi Select được chọn
                          },
                          '&:after': {
                            borderBottom: 'none', // bỏ gạch dưới sau khi Select được chọn
                          },
                          '&:hover:not(.Mui-disabled):before': {
                            borderBottom: 'none', // bỏ gạch dưới khi Select được hover
                          },
                          '& .MuiInputBase-input': {
                            textDecoration: 'none', // bỏ gạch dưới của input trong Select
                          },
                        '& .MuiSelect-select': {
                          height: '20px',
                        },
                      }}
                  >
                      {slicedStatus && slicedStatus.length > 0 && slicedStatus.map((i) => (
                          <MenuItem
                          key={i.id}
                          value={i.id}
                         
                          >
                          {i.name}
                          </MenuItem>
                      ))}
                  </Select>
              
                  </TableCell> 
                  <TableCell  >
                    <Rating name="read-only" value={item.rating} readOnly />
                  </TableCell>
                  <TableCell >
                     {progress === 1 ? 
                  <Button variant="outlined" onClick={handleOpen}
                    sx={{color:"#fa8d22", 
                    borderColor: "#fa8d22",
                    "&:hover": {
                            borderColor: "#fa8d22",
                            backgroundColor: "rgba(250, 141, 34,0.1)"
                            }
                    }}> <CloseIcon/></Button>
                    :
                    <Button variant="outlined" disabled
                    sx={{color:"#fa8d22", 
                    borderColor: "#fa8d22",
                    "&:hover": {
                            borderColor: "#fa8d22",
                            backgroundColor: "rgba(250, 141, 34,0.1)"
                            }
                    }}> <CloseIcon/></Button>
                }
                  </TableCell>
                   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 300}}>
            <Typography variant="h5" component="h3" sx={{textAlign: "center",color: "#fa8d22", marginBottom: "20px"}}>
                                Xác nhận hủy công việc?
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <Button variant="outlined" onClick={(event) => handleCancleSerrvice(event, item.id)}
                    sx={{color:"#fa8d22", 
                    borderColor: "#fa8d22",
                    "&:hover": {
                            borderColor: "#fa8d22",
                            backgroundColor: "rgba(250, 141, 34,0.1)"
                            }
                    }}>Xác nhận hủy</Button>
                  <Button variant="outlined" onClick={handleClose}
                        sx={{color:"#fa8d22", 
                        borderColor: "#fa8d22",
                        "&:hover": {
                                borderColor: "#fa8d22",
                                backgroundColor: "rgba(250, 141, 34,0.1)"
                                }
                        }}>Không</Button>
                </Box>
            </Box>
          </Modal> 
              </TableRow>
              
             )
          })}
           
        </TableBody>
      </Table>
    </TableContainer>
    
   
    
     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Đã hoàn thành
    </Typography>
    <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
           <TableCell >Tên khách hàng</TableCell>
           <TableCell >Tên dịch vụ</TableCell>
            <TableCell >Thời gian đăng ký</TableCell>
            <TableCell >Tiến độ</TableCell>
            <TableCell >Được đánh giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyOrder && historyOrder.length > 0 && historyOrder.map((item)=>{
            const service = services ? services.find((service) => service.id === item.serviceId) : {};
            const user = users ? users.find((user) => user.id === item.customerId) : {};
            const status = statuses ?  statuses.find((status) => status.id === item.statusId) : {};
            return ( 
                <TableRow key={item.id}>
                  <TableCell component="th" >
                    {user.firstName} {user.lastName}
                  </TableCell>
                   <TableCell >{service.name}</TableCell>
                  <TableCell >{item.date}</TableCell>
                  <TableCell >{status.name}</TableCell>
                  <TableCell >
                    <Rating name="read-only" value={item.rating} readOnly />
                    </TableCell>
            </TableRow>

               )
          })}
        </TableBody>
      </Table>
    </TableContainer>
      </>
     }
 
    </>
  
  )
}

export default HistoryEmploy