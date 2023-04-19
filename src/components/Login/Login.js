import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/actions/loginAction';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Person2Icon from '@mui/icons-material/Person2';
import LockIcon from '@mui/icons-material/Lock';
import { Link, Box, Container, OutlinedInput, InputAdornment, IconButton, FormHelperText,Typography, Modal, Snackbar,
  Alert } from "@mui/material";
import StyledFormControl from '../../styles/StyledFormControl';
import StyledButton from '../../styles/StyledButton';

import Logo from '../../assets/images/logo-final.png'



import './Login.scss';

import Register from '../Register/Register';

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorName, setErrorName] = useState(false);
    const [errorNameLen, setErrorNameLen] = useState(false);
    const [errorPasswordEmpty, setErrorPasswordEmpty] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [openToast, setOpenToast] = useState(true);
   

    const dispatch = useDispatch();
    const {error} = useSelector((state) => state.account);

     const handleRegisterOpen = () => {
        props.onClose();
        props.registerOpen();
  };

    //show/hide password
    const handleChangeShowPass = () => {
        setShowPass(!showPass);
    }
    
    const handleKeyPress = (event) => {
    const pattern = /^[A-Za-z0-9]+$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  const handleSubmit = (e) => {
        e.preventDefault();
        //check username empty
        if(username === ''){
          setErrorName(true);
        } else {
          setErrorName(false);
        }
        //check password empty
        if(password === ''){
          setErrorPasswordEmpty(true)
        } else {
          setErrorPasswordEmpty(false)
        }
         if(username.lenght > 0 && (username.length < 6 || username.length > 30)){
            setErrorNameLen(true)
          }
        //check password < 6
        if(username && password && password.length < 6){
            setErrorPassword(true)
          }
        
         if(username && password && password.length >= 6){
          if(error){
          setOpenToast(true)
        }
          setErrorName(false);
          setErrorNameLen(false)
          setErrorPassword(false);
          setErrorPasswordEmpty(false);
          setUsername("");
          setPassword("");
          
          dispatch(loginAction(username, password));
      }
    }
    
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
   
    setOpenToast(false);
  };
    return (
      <>
     
       
 
      <Container component="main" maxWidth="xs" className='modal' >

        <Box className="modal-content">
          <Box align='center' mb={2} > 
            <img src={Logo} alt="logo" className="logo"/>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete='off'>
            <StyledFormControl fullWidth variant='outlined' >
              <OutlinedInput
              size='small'
              id='username' 
              value={username}
              type='text' 
              placeholder="Tên đăng nhập"
              autoFocus
              onKeyPress={handleKeyPress}
              startAdornment={
                <InputAdornment position="start">
                    <Person2Icon/>
                </InputAdornment>
              }
              onChange={(event) => setUsername(event.target.value)}
              />
              {errorName && <FormHelperText error={true} >Bạn phải nhập tên tài khoản!!!</FormHelperText>}
              {errorNameLen && <FormHelperText error={true} >Tên tài khoản phải từ 6 đến 30 ký tự!!!</FormHelperText>}
            </StyledFormControl>
             <StyledFormControl fullWidth  sx={{mt:3}} >
              <OutlinedInput 
              size='small'
              id='password'  
              type={showPass ? "text" :  "password" }
              placeholder="Mật khẩu"
              value={password}
              startAdornment={
                <InputAdornment position="start">
                    <LockIcon/>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton 
                    aria-label="tongle password"
                    sx={{marginRight: 2}}
                    onClick={handleChangeShowPass}
                  >
                     {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
               onChange={(event) => setPassword(event.target.value)}
               error={errorPassword}
              />
              {errorPassword ? <FormHelperText error={true} >Mật khẩu phải có ít nhất 6 ký tự!!!</FormHelperText> : null}
              {errorPasswordEmpty ? <FormHelperText error={true}>Bạn phải nhập mật khẩu!!!</FormHelperText> : null}
            </StyledFormControl>
            <Box align='right' mt={2}>
              <Link href="#" variant="body2" underline="hover" sx={{color: "#141a46"}}>
                    Quên mật khẩu?
              </Link>
            </Box>
            <StyledButton
              size='large'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,}}
            >
              Đăng nhập
            </StyledButton>
            <Box align='center' mt={2}>
              <Typography  variant="body2" underline="hover" sx={{color: "#141a46", cursor: "pointer"}} onClick={handleRegisterOpen} >
                    Chưa có tài khoản? Đăng ký
              </Typography>
            </Box>
          </Box>
        </Box>
       
      {props.registerState &&  <Modal
                      open={props.registerState}
                      onClose={handleRegisterOpen}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                          <Register />
                      </Box>
                    </Modal>}
        {error && 
         <Snackbar open={openToast} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Vui lòng nhập lại!
        </Alert>
      </Snackbar>
        }
      </Container>
       </>
    );
}

export default Login;