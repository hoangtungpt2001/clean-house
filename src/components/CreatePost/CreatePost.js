import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Typography, Box, Avatar,OutlinedInput} from "@mui/material";
import StyledButton from '../../styles/StyledButton';
import StyledFormControl from '../../styles/StyledFormControl';
import './CreatePost.scss';

const CreatePost = () => {
    const { user } = useSelector(state => state.user);
    const { isLogin, account } = useSelector(state => state.account);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState("");
    const today = new Date();
  const currentDate = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
    const modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
        {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ]
    }
    const formats = [
    'header', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
    }

 
  return (
    <>
        {isLogin && account.roleId === 3 &&
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete='off'>
            <StyledFormControl fullWidth variant='outlined' >
                <OutlinedInput
                size='small'
                value={title}
                type='text' 
                placeholder="Tiêu đề bài viết"
                autoFocus
                onChange={(event) => setTitle(event.target.value)}
                />
            </StyledFormControl>
            <Box className="info">
            <Box className="author"  mt={4}>
                <Typography variant="body1" component="h3" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                    Tác giả:
                </Typography>
                <Avatar alt="user"  src={user.avatar} sx={{ bgcolor: "#FA8D22" }} />
                <Typography className="user-name" sx={{ display: { xs: "none", sm: "block" } }}>
                            {user.firstName} {user.lastName}
                </Typography>
            </Box>
            <Box className="date"  mt={4}>
                <Typography  variant="body1" component="h3" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                    Thời gian: 
                </Typography>
            {currentDate}
            </Box>
            </Box>
            <Typography mt={4} variant="h5" component="h3" sx={{ color:"#fa8d22", fontWeight: "bold" }}>
                    Nội dung bài viết
                </Typography>
            <Box sx={{margin: " 20px 0"}} >
                <ReactQuill 
                onChange={(value) => setContent(value)}
                value={content}
                modules={modules}
                formats={formats}
                />
            </Box>
            <StyledButton
                size='large'
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2,}}
                >
                Đăng bài
                </StyledButton>
        </Box>
        }
    </>
  
  )
}

export default CreatePost