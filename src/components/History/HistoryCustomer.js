import React,{ useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthStatus, fecthService, fecthOrder, editOrderRating,updateOrderStatusId } from '../../store/actions/serviceAction';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Rating, Button, Modal,Box} from "@mui/material";
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

const HistoryCustomer = () => {
  const dispatch = useDispatch();
  const { statuses, services, orders } = useSelector(state => state.services);
  const { users } = useSelector(state => state.users);
  const {isLogin,account} = useSelector((state) => state.account);
  const [open, setOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const handleOpen = (id) => {
    setOpen(true);
    setItemId(id)
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
        dispatch(fecthStatus());
        dispatch(fecthService());
        dispatch(fecthOrder());
    }, [dispatch]);
  
    const currentOrder = useMemo(() => orders
      ? orders.filter((order) => (order.statusId !== 7 && order.statusId !== 8 && order.customerId === account.userId) )
      : [], [orders, account.userId]);
    const historyOrder = useMemo(() => orders
      ? orders.filter((order) => ((order.statusId === 7 || order.statusId === 8) && order.customerId === account.userId))
      : [], [orders, account.userId]);

    const [value, setValue] = useState(0);
    const handleRating = (event, orderId,newValue) => {
      setValue(newValue);
      dispatch(editOrderRating(orderId, newValue));
      
    }
    const handleCancleSerrvice = (orderId) =>{
      dispatch(updateOrderStatusId(orderId, 8));
      handleClose();
  }
  return (
    <>
    {isLogin && account.roleId === 2 && 
    <>
     <Typography mb={"50px"} variant="h5" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                Hiện tại
    </Typography>
     <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
            <TableCell >Tên dịch vụ</TableCell>
            <TableCell >Tên người làm</TableCell>
            <TableCell >Số điện thoại</TableCell>
            <TableCell >Thời gian đăng kí</TableCell>
            <TableCell >Tiến độ</TableCell>
            <TableCell >Đánh giá</TableCell>
            <TableCell >Hủy dịch vụ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentOrder && currentOrder.length > 0 && currentOrder.map((item)=>{
            const service = services ? services.find((service) => service.id === item.serviceId) : {};
            const user = users ? users.find((user) => user.id === item.workerId) : {};
            const status = statuses ?  statuses.find((status) => status.id === item.statusId) : {};
            return (
              <TableRow key={item.id}>
                <TableCell component="th" >
                {service?.name}
                </TableCell>
                <TableCell >
                  {user?.firstName} {user?.lastName}
                </TableCell>
                <TableCell >
                  {user?.phone}
                </TableCell>
                <TableCell >{item.date}</TableCell>
                <TableCell >
                  {status?.name}
                  </TableCell> 
                <TableCell  >
                  <Rating name="read-only" value={item.rating} readOnly />
                </TableCell>
                <TableCell  >
                  {status?.id === 1 ? 
                  <Button variant="outlined" onClick={()=>handleOpen(item.id)}
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
                                Xác nhận hủy dịch vụ?
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <Button variant="outlined" onClick={() => handleCancleSerrvice(itemId)}
                    sx={{color:"#fa8d22", 
                    borderColor: "#fa8d22",
                    "&:hover": {
                            borderColor: "#fa8d22",
                            backgroundColor: "rgba(250, 141, 34,0.1)"
                            }
                    }}>Xác nhận hủy  </Button>
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
                Đã đăng ký
    </Typography>
    <TableContainer >
      <Table sx={{ minWidth: 650, marginBottom: "50px" }} aria-label="simple table" >
        <TableHead sx={{backgroundColor: "rgba(250, 141, 34,0.6)"}}>
          <TableRow>
            <TableCell >Tên dịch vụ</TableCell>
            <TableCell >Tên người làm</TableCell>
            <TableCell >Số điện thoại</TableCell>
            <TableCell >Thời gian đăng kí</TableCell>
            <TableCell >Tiến độ</TableCell>
            <TableCell >Đánh giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {historyOrder && historyOrder.length > 0 && historyOrder.map((item)=>{
            const service = services ? services.find((service) => service.id === item.serviceId) : {};
            const user = users ?  users.find((user) => user.id === item.workerId) : {};
            const status = statuses ?  statuses.find((status) => status.id === item.statusId) : {};
            return (
            <TableRow key={item.id}>
              <TableCell component="th" >
               {service.name}
              </TableCell>
              <TableCell >{user.firstName} {user.lastName}</TableCell>
               <TableCell >
                  {user.phone}
                </TableCell>
              <TableCell >{item.date}</TableCell>
              <TableCell >{status.name}</TableCell>
              <TableCell >
                {status.id === 7 &&
                 item.rating === 0 ?
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event,newValue) => handleRating(event,item.id, newValue)}
                  />
                  :
                    <Rating name="read-only" value={item.rating} readOnly />
                }
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

export default HistoryCustomer