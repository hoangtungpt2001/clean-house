import React, { useState,useEffect  } from 'react';
import {useSelector, useDispatch  } from 'react-redux';
import { fecthService } from '../../store/actions/serviceAction';
import { fecthOrder, removeService } from '../../store/actions/serviceAction';
import {Typography, Box, Avatar,Grid, Select, MenuItem,Snackbar, Alert,Button, OutlinedInput,TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio  } from "@mui/material";

import StyledButton from '../../styles/StyledButton';
import StyledFormControl from '../../styles/StyledFormControl';
import "./UserInfor.scss"

const ServiceInfo = () => {
    const [openToastDelete, setOpenToastDelete] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthService());
        dispatch(fecthOrder());
    }, [dispatch]);
    const { user } = useSelector(state => state.user);
    const { services, orders } = useSelector(state => state.services);
    const userService = services ? services.filter(service => service.userId === user.id) : [];
    console.log('check service:',userService)
    const handleClickEditService = () => {
        
    }
    const handleClickDeleteService = (serviceId) => {
        dispatch(removeService(serviceId))
        setOpenToastDelete(true);
    }
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenToastDelete(false);
    };
  return (
    <> 
         <Snackbar open={openToastDelete} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Xóa dịch vụ thành công
            </Alert>
            </Snackbar>
        <Box className="service" mb={"50px"} mt={"50px"}>
            {userService && userService.length > 0 && userService.map((item) => {
                 const isServiceIdExistInOrders = orders.filter(order => order.serviceId === item.id).length > 0;
               
                return (
                <Box className="service-content" key={item.id}>
                    <Typography variant="body1" component="p" className="service-heading">
                        {item.name} 
                    </Typography>
                    <Box className="service-item"> 
                        <Typography variant="body1" component="p" className="service-title">
                        Thời gian hoàn thành: 
                        </Typography>
                        <Typography variant="body1" component="p" className="service-value">
                        {item.workingTime} 
                        </Typography>
                    </Box>
                    <Box className="service-item"> 
                        <Typography variant="body1" component="p" className="service-title">
                        Phí dịch vụ: 
                        </Typography>
                        <Typography variant="body1" component="p" className="service-value">
                        {item.cost} 
                        </Typography>
                    </Box>
                    <Box className="service-item"> 
                        <Typography variant="body1" component="p" className="service-title">
                        Công việc: 
                        </Typography>
                        <Typography variant="body1" component="p" className="service-value">
                        {item.task} 
                        </Typography>
                    </Box>
                     <Box className="service-button"> 
                       <StyledButton  onClick={handleClickEditService}>
                                            Chỉnh sửa dịch vụ
                        </StyledButton>
                        {isServiceIdExistInOrders ?
                        <StyledButton  disabled>
                                            Xóa dịch vụ
                        </StyledButton>
                        :
                        <StyledButton  onClick={() => handleClickDeleteService(item.id)} >
                                            Xóa dịch vụ
                        </StyledButton>
                        }
                    </Box>
                </Box>
                )
            })}
             {/* <Snackbar open={openToast} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thay đổi thông tin thành công
            </Alert>
            </Snackbar> */}
        </Box> 
    </>
  
  )
}

export default ServiceInfo