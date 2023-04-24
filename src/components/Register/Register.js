import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import "./Register.scss";
import React, { useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import StyledFormControl from "../../styles/StyledFormControl";
import StyledButton from "../../styles/StyledButton";
import Logo from "../../assets/images/logo-final.png";
import Person2Icon from "@mui/icons-material/Person2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount, addNewUser } from "../../store/actions/authAction";
const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthday: "",
    gender: "Nam",
    email: "",
    address: "",
    avatar: "",
  });
  const [account, setAccount] = useState({
    username: "",
    password: "",
    roleId: 2,
    userId: null,
  });
  const [rePassword, setRePassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordEmpty, setErrorPasswordEmpty] = useState(false);
  const handleChangeShowPass = (password) => {
    password ? setShowPass(!showPass) : setShowRePass(!showRePass);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   //check username empty
  //   if (username === "") {
  //     setErrorName(true);
  //   } else {
  //     setErrorName(false);
  //   }
  //   //check password empty
  //   if (password === "") {
  //     setErrorPasswordEmpty(true);
  //   } else {
  //     setErrorPasswordEmpty(false);
  //   }
  //   if (username.lenght > 0 && (username.length < 6 || username.length > 30)) {
  //     setErrorNameLen(true);
  //   }
  //   //check password < 6
  //   if (username && password && password.length < 6) {
  //     setErrorPassword(true);
  //   }

  //   if (username && password && password.length >= 6) {
  //     if (error) {
  //       setOpenToast(true);
  //     }
  //     setErrorName(false);
  //     setErrorNameLen(false);
  //     setErrorPassword(false);
  //     setErrorPasswordEmpty(false);
  //     setUsername("");
  //     setPassword("");

  //     dispatch(loginAction(username, password));
  //   }
  // };

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
    console.log("account", account);

    const addUser = async () => {
      await dispatch(addNewUser({ user, account }));
      // dispatch(addNewAccount({ ...account, userId: state.auth.user.id }));
    };
    addUser();
    // setAccount({ ...account, userId: state.auth.user.id });
    // dispatch(addNewAccount({ ...account, userId: state.auth.user.id }));
    console.log("user new: ", state.auth.user);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const addUser = async () => {
  //     await dispatch(addNewUser(user));
  //     await dispatch(addNewAccount({ ...account, userId: state.auth.user.id }));
  //     console.log("user new: ", state.auth.user.id);
  //   };
  //   addUser();
  // };
  return (
    <Box className="modal-register">
      <Box align="center" mb={2}>
        <img src={Logo} alt="logo" className="logo" />
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="modal-content"
      >
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="username"
            value={account.username}
            type="text"
            placeholder="Username"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <Person2Icon />
              </InputAdornment>
            }
            onChange={(event) =>
              setAccount({ ...account, username: event.target.value })
            }
          />
        </StyledFormControl>

        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="firstName"
            value={user.firstName}
            type="text"
            placeholder="Tên"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <Person2Icon />
              </InputAdornment>
            }
            onChange={(event) =>
              setUser({ ...user, firstName: event.target.value })
            }
          />
          {/* {errorName && (
                <FormHelperText error={true}>
                  Bạn phải nhập tên tài khoản!!!
                </FormHelperText>
              )}
              {errorNameLen && (
                <FormHelperText error={true}>
                  Tên tài khoản phải từ 6 đến 30 ký tự!!!
                </FormHelperText>
              )} */}
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="lastName"
            value={user.lastName}
            type="text"
            placeholder="Họ"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <Person2Icon />
              </InputAdornment>
            }
            onChange={(event) =>
              setUser({ ...user, lastName: event.target.value })
            }
          />
          {/* {errorName && (
              <FormHelperText error={true}>
                Bạn phải nhập tên tài khoản!!!
              </FormHelperText>
            )}
            {errorNameLen && (
              <FormHelperText error={true}>
                Tên tài khoản phải từ 6 đến 30 ký tự!!!
              </FormHelperText>
            )} */}
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="email"
            value={user.email}
            type="email"
            placeholder="Email"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="phone"
            value={user.phone}
            type="text"
            placeholder="Số điện thoại"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            }
            onChange={(event) =>
              setUser({ ...user, phone: event.target.value })
            }
          />
          {/* {errorName && (
              <FormHelperText error={true}>
                Bạn phải nhập tên tài khoản!!!
              </FormHelperText>
            )}
            {errorNameLen && (
              <FormHelperText error={true}>
                Tên tài khoản phải từ 6 đến 30 ký tự!!!
              </FormHelperText>
            )} */}
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="birthday"
            value={user.birthday}
            name="date"
            type="date"
            placeholder="Ngày sinh"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>
            }
            onChange={(event) =>
              setUser({ ...user, birthday: event.target.value })
            }
          />
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="address"
            value={user.address}
            name="Address"
            type="text"
            placeholder="Địa chỉ"
            autoFocus
            // onKeyPress={handleKeyPress}
            startAdornment={
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            }
            onChange={(event) =>
              setUser({ ...user, address: event.target.value })
            }
          />
        </StyledFormControl>

        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="Mật khẩu"
            value={account.password}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="tongle password"
                  sx={{ marginRight: 2 }}
                  onClick={handleChangeShowPass}
                >
                  {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) =>
              setAccount({ ...account, password: event.target.value })
            }
            error={errorPassword}
          />
          {errorPassword ? (
            <FormHelperText error={true}>
              Mật khẩu phải có ít nhất 6 ký tự!!!
            </FormHelperText>
          ) : null}
          {errorPasswordEmpty ? (
            <FormHelperText error={true}>
              Bạn phải nhập mật khẩu!!!
            </FormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <OutlinedInput
            size="small"
            id="repassword"
            type={showRePass ? "text" : "password"}
            placeholder="Nhập lại mật khẩu"
            value={rePassword}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="tongle password"
                  sx={{ marginRight: 2 }}
                  onClick={() => handleChangeShowPass(false)}
                >
                  {showRePass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) => setRePassword(event.target.value)}
            error={errorPassword}
          />
          {errorPassword ? (
            <FormHelperText error={true}>
              Mật khẩu phải có ít nhất 6 ký tự!!!
            </FormHelperText>
          ) : null}
          {errorPasswordEmpty ? (
            <FormHelperText error={true}>
              Bạn phải nhập mật khẩu!!!
            </FormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledFormControl variant="outlined" sx={{ mt: 2 }}>
          <Select
            size="small"
            id="role"
            value={account.roleId}
            name="role"
            autoFocus
            // onKeyPress={handleKeyPress}

            onChange={(event) =>
              setAccount({ ...account, roleId: event.target.value })
            }
          >
            <MenuItem value={2}>Khách hàng</MenuItem>
            <MenuItem value={3}>Cộng tác viên</MenuItem>
          </Select>
        </StyledFormControl>
        <FormControl>
          <RadioGroup
            name="gender"
            defaultValue={user.gender}
            onChange={(event) =>
              setUser({ ...user, gender: event.target.value })
            }
            sx={{
              marginLeft: "80px",
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel value={"Nam"} label="Nam" control={<Radio />} />
            <FormControlLabel value={"Nữ"} label="Nữ" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <StyledButton
          size="large"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Đăng ký
        </StyledButton>
      </Box>
    </Box>
  );
};
export default Register;
