import { PhotoCamera } from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import Layout from "../components/layout/Layout";
import "../styles/InFor.css"

const InFor = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [items, setItems] = useState([
    {
      name: "tung",
      birth: "29/06/2001",
      sex: "Male",
      phone: "0383442828",
      address: "27 Nguyen Nhac",
      email: "hoangtungpt2001@gmail.com",
      image: "../img/images.jpeg",
    },
  ]);

  const Item = ({
    index,
    name,
    birth,
    sex,
    phone,
    address,
    email,
    image,
    onSave,
  }) => {
    //upload file
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    //name
    const [editingName, setEditingName] = useState(false);
    const [valueName, setValueName] = useState(name);
    //birth
    const [editingBirth, setEditingBirth] = useState(false);
    const [valueBirth, setValueBirth] = useState(birth);
    //sex
    const [editingSex, setEditingSex] = useState(false);
    const [valueSex, setValueSex] = useState(sex);
    //phone
    const [editingPhone, setEditingPhone] = useState(false);
    const [valuePhone, setValuePhone] = useState(phone);
    //address
    const [editingAddress, setEditingAddress] = useState(false);
    const [valueAddress, setValueAddress] = useState(address);
    //email
    const [editingEmail, setEditingEmail] = useState(false);
    const [valueEmail, setValueEmail] = useState(email);
    //avatar and upload button state
    const [hovered, setHovered] = useState(false);

    //name
    const handleEditName = () => {
      setEditingName(true);
      setValueName(name);
    };

    const handleSaveName = () => {
      setEditingName(false);
      onSave(index, valueName, 0);
    };

    const handleChangeName = (event) => {
      setValueName(event.target.value);
    };

    //birth
    const handleEditBirth = () => {
      setEditingBirth(true);
      setValueBirth(birth);
    };

    const handleSaveBirth = () => {
      setEditingBirth(false);
      onSave(index, valueBirth, 1);
    };

    const handleChangeBirth = (event) => {
      setValueBirth(event.target.value);
    };

    //phone

    const handleEditPhone = () => {
      setEditingPhone(true);
      setValuePhone(phone);
    };
    //
    const handleSavePhone = () => {
      setEditingPhone(false);
      onSave(index, valuePhone, 3);
    };

    const handleChangePhone = (event) => {
      setValuePhone(event.target.value);
    };
    //sex
    const handleEditSex = () => {
      setEditingSex(true);
      setValueSex(sex);
    };

    const handleSaveSex = () => {
      setEditingSex(false);
      onSave(index, valueSex, 2);
    };

    const handleChangeSex = (event) => {
      setValueSex(event.target.value);
    };

    //address
    const handleEditAddress = () => {
      setEditingAddress(true);
      setValueAddress(address);
    };

    const handleSaveAddress = () => {
      setEditingAddress(false);
      onSave(index, valueAddress, 4);
    };

    const handleChangeAddress = (event) => {
      setValueAddress(event.target.value);
    };

    //email
    const handleEditEmail = () => {
      setEditingEmail(true);
      setValueEmail(email);
    };

    const handleSaveEmail = () => {
      setEditingEmail(false);
      onSave(index, valueEmail, 5);
    };

    const handleChangeEmail = (event) => {
      setValueEmail(event.target.value);
    };

    //handle mouse me enter to image
    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    return (
      <div className="todo">
        <div className="todo1">
          <div
            className="avatar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* {!hovered ? (
              <Avatar
                alt="Remy Sharp"
                src={image}
                sx={{ width: 200, height: 200, position: "relative " }}
              />
            ) : (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ bottom: 0, right: 0 }}
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera
                  style={{ width: 200, height: 200, position: "relative " }}
                />
              </IconButton>
            )} */}





            
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleFileChange}
              id={`input-${index}`}
            />
            <label htmlFor={`input-${index}`}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                sx={{ bottom: 0, right: 0 }}
              >
                {selectedFile ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={URL.createObjectURL(selectedFile)}
                    sx={{ width: 200, height: 200, position: "relative " }}
                  />
                ) : ( 
                  
                  <Avatar
                alt="Remy Sharp"
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/219661063_848059222777564_2365981233942222749_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IqsQrxw6se8AX_LwChl&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAXe7fnNPlwGdOkEDByIqshB1jKEvVEbaYE7n7h9gz2-w&oe=642929AF"
                sx={{ width: 200, height: 200, position: "relative " }}
              />
                )}
              </IconButton>
            </label>
          </div>
          <div className="todo2">
            <div>
              {editingName ? (
                <input
                  type="text"
                  value={valueName}
                  onChange={handleChangeName}
                />
              ) : (
                <span>{name}</span>
              )}
              <button className="edit" onClick={handleEditName}>
                Edit
              </button>
              {editingName && (
                <button className="save" onClick={handleSaveName}>
                  Save
                </button>
              )}
            </div>

            <div>
              {editingBirth ? (
                <TextField
                  id="standard-password-input"
                  name="date"
                  type="date"
                  defaultValue={valueBirth}
                  onChange={handleChangeBirth}
                  autoComplete="current-password"
                  variant="standard"
                  sx={{
                    marginLeft: "80px",
                    marginTop: "10px",
                  }}
                />
              ) : (
                <span>{birth}</span>
              )}
              <button className="edit" onClick={handleEditBirth}>
                Edit
              </button>
              {editingBirth && (
                <button className="save" onClick={handleSaveBirth}>
                  Save
                </button>
              )}
            </div>

            <div>
              {editingSex ? (
                <FormControl>
                  <RadioGroup
                    name="gender"
                    defaultValue={"male"}
                    onChange={handleChangeSex}
                  >
                    <FormControlLabel
                      value={"male"}
                      label="Nam"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      value={"female"}
                      label="Nữ"
                      control={<Radio />}
                    />
                  </RadioGroup>
                </FormControl>
              ) : (
                <span className="spanSex">{sex}</span>
              )}
              <button className="edit" onClick={handleEditSex}>
                Edit
              </button>
              {editingSex && (
                <button className="save" onClick={handleSaveSex}>
                  Save
                </button>
              )}
            </div>

            <div>
              {editingPhone ? (
                <input
                  type="text"
                  value={valuePhone}
                  onChange={handleChangePhone}
                />
              ) : (
                <span>{phone}</span>
              )}
              <button className="edit" onClick={handleEditPhone}>
                Edit
              </button>
              {editingPhone && (
                <button className="save" onClick={handleSavePhone}>
                  Save
                </button>
              )}
            </div>

            <div>
              {editingAddress ? (
                <input
                  type="text"
                  value={valueAddress}
                  onChange={handleChangeAddress}
                />
              ) : (
                <span>{address}</span>
              )}
              <button className="edit" onClick={handleEditAddress}>
                Edit
              </button>
              {editingAddress && (
                <button className="save" onClick={handleSaveAddress}>
                  Save
                </button>
              )}
            </div>

            <div>
              {editingEmail ? (
                <div>
                  <TextField
                    id="standard-password-input"
                    name="email"
                    label="email"
                    type="email"
                    defaultValue={valueEmail}
                    onChange={handleChangeEmail}
                    autoComplete="current-password"
                    variant="standard"
                    sx={{
                      marginLeft: "80px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              ) : (
                <span>{email}</span>
              )}
              <button className="edit" onClick={handleEditEmail}>
                Edit
              </button>
              {editingEmail && (
                <button className="save" onClick={handleSaveEmail}>
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSaveItem = (index, name, tt) => {
    const newItems = [...items];
    if (tt === 0) {
      newItems[index].name = name;
      setItems(newItems);
      return;
    }
    if (tt === 1) {
      newItems[index].birth = name;
      setItems(newItems);
      return;
    }
    if (tt === 2) {
      newItems[index].sex = name;
      setItems(newItems);
      return;
    }
    if (tt === 3) {
      if (/^\d{10}$/.test(name)) {
        newItems[index].phone = name;
        setItems(newItems);
        return;
      } else {
        alert("Phone invalid!!!");
        return;
      }
    }
    if (tt === 4) {
      newItems[index].address = name;
      setItems(newItems);
      return;
    }
    if (tt === 5) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
        newItems[index].email = name;
        setItems(newItems);
        return;
      } else {
        alert("Email invalid!!!");
        return;
      }
      // let tt1 = 0;
      // newItems.forEach((obj) => {
      //   for (const key in obj) {
      //     if (tt1 === tt) {
      //       //định dạng email
      //       if (key === "email") {
      //         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
      //           obj[key] = name;
      //           setItems(newItems);
      //           return;
      //         } else {
      //           alert("Email invalid!!!");
      //           return;
      //         }
      //       if()

      //       }
      //       obj[key] = name;
      //       setItems(newItems);
      //       return;
      //     }
      //     tt1++;
      // }
      // });

      // Call API to update user data on server
    }
  };
  return (
    <Layout>
      <FormGroup>
        <fieldset>
          <legend>Thông Tin Cơ Bản</legend>
          {items.map((item, i) => (
            <Item key={i} index={i} {...item} onSave={handleSaveItem} />
          ))}
        </fieldset>
      </FormGroup>
    </Layout>
  );
};

export default InFor;
