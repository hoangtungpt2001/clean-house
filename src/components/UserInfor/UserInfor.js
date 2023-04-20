import React, { useState,useEffect  } from 'react';
import {useSelector, useDispatch  } from 'react-redux';
import { editUser } from '../../store/actions/getUserAction';
import {Typography, Box, Avatar,Grid, Select, MenuItem,Snackbar, Alert,Button, OutlinedInput,TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio  } from "@mui/material";

import StyledButton from '../../styles/StyledButton';
import StyledFormControl from '../../styles/StyledFormControl';
import ServiceInfo from './ServiceInfor';
import "./UserInfor.scss"

const UserInfor = () => {
    const dispatch = useDispatch();
    const [isUser, setUser] = useState(true);
    const [isService, setService] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [openToast, setOpenToast] = useState(false);
    const { user, roles } = useSelector(state => state.user);
    const { account } = useSelector(state => state.account);
    const roleUser = roles ? roles.find((s) => s.id === account.roleId) : {};
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [phone, setPhone] = useState(user.phone);
    const [birthday, setBirthday] = useState(user.birthday);
    const [gender, setGender] = useState(user.gender);
    const [address, setAddress] = useState(user.address);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState(user.avatar);
  
    const handleInfor = () =>{
       setUser(true);
       setService(false);
    }
     const handleService = () =>{
        setUser(false);
        setService(true);
        setEdit(false);
    }
     const handleClickEditUser = () =>{
        setEdit(true);
        setUser(false);
        setService(false);
    }
    const  handleCancleEditUser = () =>{
        setEdit(false);
        setUser(true);
    }
   
    const handleSubmit = () =>{
        const updatedUser = {
        firstName,
        lastName,
        phone, 
        birthday,
        gender,
        address,
        email,
        avatar
        };
        dispatch(editUser(user.id, updatedUser));
        setEdit(false);
        setUser(true);
        setOpenToast(true);
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenToast(false);
    };
  return (
    <> 
        <Box className="user" mb={"50px"}>
             <Grid container columnSpacing={2} rowSpacing={4}>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box className="user-info">
                            <Avatar alt="avatar" src={user.avatar} className='user-avatar' />
                            <Box className="user-group">
                                <Typography variant="h5" component="h3" className="user-name">
                                {user.firstName} {user.lastName}
                                </Typography>
                                <Typography variant="body1" component="h4" className="user-role">
                                    {roleUser.name}
                                </Typography>
                            </Box>
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <Box className="user-detail">
                                {account.roleId === 3 && 
                                <Box className="user-nav">
                                    <Button variant="text" className={isUser ? "user-button active" : "user-button" } onClick={handleInfor} >Thông tin cá nhân</Button>
                                    <Button variant="text" className={isService ? "user-button active" : "user-button" } onClick={handleService}>Dịch vụ cung cấp</Button>
                                </Box>
                                }
                                 {isUser && 
                                    <Box className="user-content">
                                        <Box className="user-item"> 
                                            <Typography variant="body1" component="p" className="user-title">
                                            Họ và tên: 
                                            </Typography>
                                            <Typography variant="body1" component="p" className="user-value">
                                           {user.firstName} {user.lastName}
                                            </Typography>
                                        </Box>
                                        <Box className="user-item"> 
                                            <Typography variant="body1" component="p" className="user-title">
                                            Ngày sinh:
                                            </Typography>
                                            <Typography variant="body1" component="p" className="user-value">
                                           {user.birthday} 
                                            </Typography>
                                        </Box>
                                         <Box className="user-item"> 
                                            <Typography variant="body1" component="p" className="user-title">
                                            Giới tính:
                                            </Typography>
                                            <Typography variant="body1" component="p" className="user-value">
                                           {user.gender} 
                                            </Typography>
                                        </Box>
                                        <Box className="user-item"> 
                                            <Typography variant="body1" component="p" className="user-title">
                                            Số điện thoại:
                                            </Typography>
                                            <Typography variant="body1" component="p" className="user-value">
                                           {user.phone} 
                                            </Typography>
                                        </Box>
                                         <Box className="user-item"> 
                                            <Typography variant="body1" component="p" className="user-title">
                                            Email:
                                            </Typography>
                                            <Typography variant="body1" component="p" className="user-value">
                                          {user.email}
                                            </Typography>
                                        </Box>
                                        <Box className="user-item"> 
                                            <Typography variant="body1" component="p" className="user-title">
                                           Địa chỉ:
                                            </Typography>
                                            <Typography variant="body1" component="p" className="user-value">
                                          {user.address} 
                                            </Typography>
                                        </Box>
                                        <StyledButton sx={{width: "150px"}} onClick={handleClickEditUser}>
                                            Chỉnh sửa
                                        </StyledButton>
                                    </Box>
                                }
                                {isEdit && 
                                 <Box component="form" onSubmit={handleSubmit} noValidate autoComplete='off' className="user-edit">
                                        <Box className="user-input">
                                         <Typography variant="body1" component="p" className="input-label">
                                                Ảnh đại diện: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <Box className="input-image">
                                        <Avatar alt="avatar" src={avatar} className='image_view' />
                                        <OutlinedInput 
                                        size='small'
                                        value={avatar}
                                        type='text'
                                        className="input-link"
                                        onChange={(event) => setAvatar(event.target.value)}
                                        />
                                        </Box>
                                        </StyledFormControl>
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Họ: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <OutlinedInput 
                                        size='small'
                                        value={firstName}
                                        type='text'
                                        autoFocus
                                        className="input-value"
                                        onChange={(event) => setFirstName(event.target.value)}
                                        />
                                         </StyledFormControl>
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Tên: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <OutlinedInput 
                                        size='small'
                                        value={lastName}
                                        type='text'
                                        className="input-value"
                                        onChange={(event) => setLastName(event.target.value)}
                                        />
                                         </StyledFormControl>
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Ngày sinh: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <OutlinedInput 
                                        size='small'
                                        value={birthday}
                                        type='text'
                                        className="input-value"
                                        onChange={(event) => setBirthday(event.target.value)}
                                        />
                                         </StyledFormControl>
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Giới tính: 
                                        </Typography>
                                        <FormControl className="input-value">
                                        <RadioGroup
                                             
                                            row
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={gender}
                                            onChange={(event) => setGender(event.target.value)}
                                        >
                                            <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                                            <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
                                            <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
                                        </RadioGroup>
                                        </FormControl>
                                    
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Số điện thoại: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <OutlinedInput 
                                        size='small'
                                        value={phone}
                                        type='text'
                                        className="input-value"
                                        onChange={(event) => setPhone(event.target.value)}
                                        />
                                         </StyledFormControl>
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Email: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <OutlinedInput 
                                        size='small'
                                        value={email}
                                        type='text'
                                        className="input-value"
                                        onChange={(event) => setEmail(event.target.value)}
                                        />
                                         </StyledFormControl>
                                    </Box>
                                    <Box className="user-input">
                                        <Typography variant="body1" component="p" className="input-label">
                                                Địa chỉ: 
                                        </Typography>
                                         <StyledFormControl sx={{
                                         minWidth: 270,
                                        '.MuiOutlinedInput-root': {
                                                borderRadius: "5px"
                                            }
                                        }}>
                                        <OutlinedInput 
                                        size='small'
                                        value={address}
                                        type='text'
                                        className="input-value"
                                        onChange={(event) => setAddress(event.target.value)}
                                        />
                                         </StyledFormControl>
                                    </Box>
                                
                                    <Box className="user-input">
                                    <StyledButton type="submit">
                                        Lưu thay đổi
                                    </StyledButton>
                                    <StyledButton onClick={handleCancleEditUser}>
                                        Hủy
                                    </StyledButton>
                                    </Box>
                                </Box>
                                    
                                }
                                {isService && 
                                   <ServiceInfo/>
                                }
                            </Box>
                        </Grid>
            </Grid>
             <Snackbar open={openToast} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thay đổi thông tin thành công
            </Alert>
            </Snackbar>
        </Box> 
    </>
  
  )
}

export default UserInfor