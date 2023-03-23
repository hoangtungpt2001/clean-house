import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Person2Icon from '@mui/icons-material/Person2';
import LockIcon from '@mui/icons-material/Lock';
import { Link, Box,Container, OutlinedInput, InputAdornment, IconButton, FormHelperText, Alert,Snackbar } from "@mui/material";
import StyledFormControl from '../../styles/StyledFormControl';
import StyledButton from '../../styles/StyledButton';
import Logo from '../../assets/images/logo.svg'



import './Login.scss';
// import { CenterFocusStrong } from '@mui/icons-material';


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorName, setErrorName] = useState(false);
    const [errorPasswordEmpty, setErrorPasswordEmpty] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    // const [open, setOpen] = useState(true);
    //toast
    const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });
    const handleClose = () => {
      setState({ open: false });
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
        if(username === ''){
          setErrorName(true);
        } else {
          setErrorName(false);
        }
        if(password === ''){
          setErrorPasswordEmpty(true)
        } else {
          setErrorPasswordEmpty(false)
        }
        if(username && password && password.length < 6){
            setErrorPassword(true)
          }
      if(username && password && password.length > 6){
          console.log('name:',username, 'pass:',password);
          setErrorName(false);
          setErrorPassword(false);
          setErrorPasswordEmpty(false);
          setUsername("");
          setPassword("");
          setIsLogin(true);
        }
    }
    return (
      
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
              <Link href="#" variant="body2" underline="hover" sx={{color: "#141a46"}}>
                    Chưa có tài khoản? Đăng ký
              </Link>
            </Box>
          </Box>
        </Box>
        {isLogin && 
        <Snackbar open={state.open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  sx={{width: '300px'}}>
        <Alert onClose={handleClose} severity="success" color="warning" variant="filled">
          Đăng nhập thành công!
        </Alert>
      </Snackbar>}
      </Container>
    );
}

export default Login;