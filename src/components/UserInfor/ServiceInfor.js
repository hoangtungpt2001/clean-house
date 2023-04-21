import React, { useState,useEffect  } from 'react';
import {useSelector, useDispatch  } from 'react-redux';
import { fecthService } from '../../store/actions/serviceAction';
import { fecthOrder, removeService, editService, createService, fecthCatories } from '../../store/actions/serviceAction';
import {Typography, Box, Avatar,Grid, Select, MenuItem,Snackbar, Alert,Button, OutlinedInput,TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio  } from "@mui/material";

import StyledButton from '../../styles/StyledButton';
import StyledFormControl from '../../styles/StyledFormControl';
import "./UserInfor.scss"

const ServiceInfo = () => {
    const [openToastDelete, setOpenToastDelete] = useState(false);
    const [openToastEdit, setOpenToastEdit] = useState(false);
    const [openToastPost, setOpenPost] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthService());
        dispatch(fecthOrder());
        dispatch(fecthCatories());
    }, [dispatch]);
    const { services, orders, categories } = useSelector(state => state.services);
    const { user } = useSelector(state => state.user);
    const userService = services ? services.filter(service => service.userId === user.id) : [];
    const [editingService, setEditingService] = useState(null);
    const handleEdit = (service) => {
        setEditingService(service);
    };
    const handleDelete = (serviceId) => {
        dispatch(removeService(serviceId, user.id));
        setOpenToastDelete(true)
    };
    const handleAddService = () => {
        setIsAdd(true)
    };
    const handleSubmitEdit = (service) => {
    dispatch(editService(editingService.id,service));
    setEditingService(null);
   setOpenToastEdit(true)
    };
     const handleSubmitPost = (service) => {
    const userId= user.id;
    const name = service.name;
    const workingTime = service.workingTime;
    const cost = service.cost;
    const task = service.task;
    const categoryId=service.categoryId;
    const post = { userId, name, workingTime, cost, task, categoryId};
    console.log('check post:', post)
    dispatch(createService(post));
    setIsAdd(false)
    setOpenPost(true)
    };
    const handleCancleEdit = () => {
        setEditingService(false)
    }
     const handleCanclePost = () => {
        setIsAdd(false)
    }
    
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenToastEdit(false)
       setOpenToastDelete(false)
       setOpenPost(false)
    };
  return (
    <Box>
       
        {isAdd ?
         <ServiceCreate onSubmit={handleSubmitPost} onClose={handleCanclePost} category={categories}/>
         :
         <StyledButton variant='outline' onClick={handleAddService} sx={{ marginTop: "20px"}} >Thêm dịch vụ
        </StyledButton>
        }
      {editingService ? (
        <ServiceForm service={editingService} onSubmit={handleSubmitEdit} onClose={handleCancleEdit} category={categories}/>
      ) : (
        <ServiceList services={userService} onEdit={handleEdit} onMove={handleDelete} orders={orders} category={categories} />
      )}

       <Snackbar open={openToastDelete} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Xóa dịch vụ thành công
            </Alert>
        </Snackbar>
        <Snackbar open={openToastEdit} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thay đổi thông tin thành công
            </Alert>
        </Snackbar>
        <Snackbar open={openToastPost} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thêm dịch vụ thành công
            </Alert>
        </Snackbar>
    </Box>
  
  )
}
function ServiceCreate({ onSubmit, onClose, category }) {
  const [name, setName] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  const [cost, setCost] = useState("");
  const [task, setTask] = useState("");
  const [categoryId, setCategoryId] = useState("");  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, workingTime, cost, task,categoryId });

  };

  return (
     <Box component="form" onSubmit={handleSubmit} noValidate autoComplete='off' className="service-content">
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Tên dịch vụ: 
                </Typography>
                    <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    name='name'
                    value={name}
                    type='text'
                    autoFocus
                    className="input-value"
                    onChange={(e) => setName(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Phân loại
                </Typography>
                <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <Select
                     className="input-value"
                      value={categoryId}
                      variant="outlined"
                      label="Phân loại"
                      onChange={(e) => setCategoryId(e.target.value)}
                      input={<OutlinedInput  size='small' />}
                      inputProps={{ 'aria-label': 'Without label' }}
                  >
                      {category && category.length > 0 && category.map((i) => (
                          <MenuItem
                          key={i.id}
                          value={i.id}
                          >
                          {i.name}
                          </MenuItem>
                      ))}
                  </Select>
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Thời gian hoàn thành: 
                </Typography>
                 <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    name='workingTime'
                    value={workingTime}
                    type='text'
                    className="input-value"
                    onChange={(e) => setWorkingTime(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Phí dịch vụ: 
                </Typography>
                <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    name='cost'
                    value={cost}
                    type='text'
                    className="input-value"
                    onChange={(e) => setCost(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Công việc: 
                </Typography>
                <StyledFormControl fullWidth sx={{
                           
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    value={task}
                    name='task'
                    type='text'
                    fullWidth
                    className="input-value"
                    multiline
                    onChange={(e) => setTask(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-button"> 
                <StyledButton type="submit">
                    Thêm
                </StyledButton>
                <StyledButton onClick={()=>onClose()} >
                    Hủy
                </StyledButton>
            </Box>              
        </Box>
   
  );
}
function ServiceForm({ service, onSubmit, onClose, category }) {
  const [name, setName] = useState(service.name || "");
  const [workingTime, setWorkingTime] = useState(service.workingTime || "");
  const [cost, setCost] = useState(service.cost || "");
  const [task, setTask] = useState(service.task || "");
  const [categoryId, setCategoryId] = useState(service.categoryId ||"");  

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, workingTime, cost, task });

  };

  return (
     <Box component="form" onSubmit={handleSubmit} noValidate autoComplete='off' className="service-content">
        <Typography variant="body1" component="p" className="service-heading">
            {name} 
        </Typography>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Tên dịch vụ: 
                </Typography>
                    <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    name='name'
                    value={name}
                    type='text'
                    autoFocus
                    className="input-value"
                    onChange={(e) => setName(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
             <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Phân loại
                </Typography>
                <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <Select
                     className="input-value"
                      value={categoryId}
                      variant="outlined"
                      label="Phân loại"
                      onChange={(e) => setCategoryId(e.target.value)}
                      input={<OutlinedInput  size='small' />}
                      inputProps={{ 'aria-label': 'Without label' }}
                  >
                      {category && category.length > 0 && category.map((i) => (
                          <MenuItem
                          key={i.id}
                          value={i.id}
                          >
                          {i.name}
                          </MenuItem>
                      ))}
                  </Select>
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Thời gian hoàn thành: 
                </Typography>
                 <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    name='workingTime'
                    value={workingTime}
                    type='text'
                    className="input-value"
                    onChange={(e) => setWorkingTime(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Phí dịch vụ: 
                </Typography>
                <StyledFormControl sx={{
                    minWidth: 270,
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    name='cost'
                    value={cost}
                    type='text'
                    className="input-value"
                    onChange={(e) => setCost(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-item"> 
                <Typography variant="body1" component="p" className="service-title">
                Công việc: 
                </Typography>
                <StyledFormControl fullWidth sx={{
                           
                    '.MuiOutlinedInput-root': {
                            borderRadius: "5px"
                        }
                    }}>
                    <OutlinedInput 
                    size='small'
                    value={task}
                    name='task'
                    type='text'
                    fullWidth
                    className="input-value"
                    multiline
                    onChange={(e) => setTask(e.target.value)}
                    />
                </StyledFormControl>
            </Box>
            <Box className="service-button"> 
                <StyledButton type="submit">
                    Lưu chỉnh sửa
                </StyledButton>
                <StyledButton onClick={()=>onClose()} >
                    Hủy
                     {/* onClick={handleCancleEdit} */}
                </StyledButton>
            </Box>              
        </Box>
   
  );
}

function ServiceList({ services, onEdit,onMove, orders, category}) {
    console.log('ctegory:',category)
  return (
    <>
      {services.map((service) => {
        const isServiceIdExistInOrders = orders.filter(order => order.serviceId === service.id).length > 0;
        const type = category ? category.find((i) => i.id === service.categoryId) : {};
        
          return (
            <Box className="service-content" key={service.id}>
                <Typography variant="body1" component="p" className="service-heading">
                    {service.name} 
                </Typography>
                <Box className="service-item"> 
                    <Typography variant="body1" component="p" className="service-title">
                        Phân loại: 
                    </Typography>
                    <Typography variant="body1" component="p" className="service-value">
                        {type?.name} 
                    </Typography>
                </Box>
                <Box className="service-item"> 
                    <Typography variant="body1" component="p" className="service-title">
                        Thời gian hoàn thành: 
                    </Typography>
                    <Typography variant="body1" component="p" className="service-value">
                        {service.workingTime} 
                    </Typography>
                </Box>
                <Box className="service-item"> 
                    <Typography variant="body1" component="p" className="service-title">
                        Phí dịch vụ: 
                    </Typography>
                    <Typography variant="body1" component="p" className="service-value">
                        {service.cost} 
                    </Typography>
                </Box>
                <Box className="service-item"> 
                    <Typography variant="body1" component="p" className="service-title">
                        Công việc: 
                    </Typography>
                    <Typography variant="body1" component="p" className="service-value">
                        {service.task} 
                    </Typography>
                </Box>
                <Box className="service-button"> 
                    <StyledButton  onClick={() => onEdit(service)}>
                            Chỉnh sửa dịch vụ
                    </StyledButton>
                    {isServiceIdExistInOrders ?
                    <StyledButton  disabled>
                            Xóa dịch vụ
                    </StyledButton>
                    :
                    <StyledButton  onClick={() => onMove(service.id)} >
                        Xóa dịch vụ
                    </StyledButton>
                    }
                    </Box>
                </Box>
          )
    })}
      
      
    </>
  );
}
export default ServiceInfo