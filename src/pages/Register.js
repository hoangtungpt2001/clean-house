import {
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Box, margin, padding } from "@mui/system";
import React, { useState } from "react";


const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nameLogin:"",
    email: "",
    password: "",
    repass: "",
    number:"",
    terms: false,
    register: "",
    gender:"male",
    date:"",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          width: 500,
          height: 700,
          backgroundColor: "white",

          margin: "69px 50px 75px 200px",
          borderRadius: 10,
        }}
        onSubmit={handleSubmit}
      >
        
        <TextField
          id="standard-password-input"
          name="name"
          label="Họ Và Tên"
          type="text"
          value={inputs.name}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
          
        />
        <br />
        <TextField
          id="standard-password-input"
          name="nameLogin"
          label="Tên Đăng Nhập"
          type="text"
          value={inputs.nameLogin}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
          
        />
        <br />
        <TextField
          id="standard-number"
          name="number"
          label="Số Điện Thoại"
          type="number"
          onChange={handleChange}
          
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
        />
        <br />
        <TextField
          id="standard-password-input"
          name="email"
          label="email"
          type="email"
          value={inputs.email}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
          
        />
        <br />
        <TextField
          id="standard-password-input"
          name="password"
          label="Password"
          type="password"
          value={inputs.password}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
          
        />
        <br />
        <TextField
          id="standard-password-input"
          name="repass"
          label="RePass"
          type="password"
          value={inputs.repass}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
          
        />
        <br />
        <TextField
          id="standard-password-input"
          name="date"
          
          type="date"
          value={inputs.date}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}
          
        />
        <br />
        <FormControl>
            <FormLabel></FormLabel>
            <RadioGroup name="gender" defaultValue={'male'} onChange={handleChange} sx={{
          marginLeft: "80px", 
          marginTop: "10px"  ,
        }}> 
                <FormControlLabel 
                value={'male'} 
                label="Nam" 
                control={<Radio />} 

                />
                <FormControlLabel 
                value={'female'} 
                label="Nữ" 
                control={<Radio />} 
                    
                />
            </RadioGroup>
        </FormControl>
        <br/>

        {/* <FormGroup>
          <FormControlLabel
            label="lưu mật khẩu"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup> */}
        <br />
        <FormControl sx={{
          width: "50%",
          marginLeft: "80px", 
          marginTop: "10px"  ,

        }}>
          <InputLabel id="menu">đăng kí</InputLabel>
          <Select name="register" value={inputs.register}
            onChange={handleChange}>
            
            <MenuItem value={"registerToDo"}>Đăng kí làm giúp việc</MenuItem>
            <MenuItem value={"registerToRent"}>Đăng kí thuê giúp việc</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button type="submit"> Submit</Button>
      </Box>
    </div>
  );
};

export default Register;
