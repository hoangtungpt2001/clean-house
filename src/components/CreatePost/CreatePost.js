import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch  } from 'react-redux';
import { addArticles } from '../../store/actions/arrticlesAction';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Typography, Box, Avatar,OutlinedInput, Select, MenuItem,Snackbar, Alert} from "@mui/material";
import StyledButton from '../../styles/StyledButton';
import StyledFormControl from '../../styles/StyledFormControl';
import './CreatePost.scss';


const CreatePost = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const { isLogin, account } = useSelector(state => state.account);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [openToast, setOpenToast] = useState(false);
  

    const today = new Date();
    const currentDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  
    const modules = {
    toolbar: [
    [{ 'header': 1 }, { 'header': 2 }],   
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // các nút tiêu đề
    ['bold', 'italic', 'underline', 'strike'],        // các nút định dạng chữ
    ['blockquote', 'code-block'],
    [{ 'align': [] }],                               // nút căn lề
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],    // các nút danh sách
    [{ 'script': 'sub'}, { 'script': 'super' }],     // các nút ký hiệu
    [{ 'indent': '-1'}, { 'indent': '+1' }],         // các nút thụt lề
    [{ 'direction': 'rtl' }],                        // nút viết từ phải sang trái
    ['link', 'image'],     
    ['clean']            
    ]
    }
    const formats = [
   'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'script', 'sub', 'super', 'align',
  'link', 'image', 'code-block'
    ]

    const categories = [
    {
      id: 1,
      name: "Dọn dẹp"
    },
    {
      id: 2,
      name: "Nấu ăn"
    },
    {
      id: 3,
      name: "Đi chợ"
    },
    {
      id: 4,
      name: "Giặt ủi"
    }
  ]
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenToast(false);
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId= user.id;
        const createdAt = currentDate;
        const categoryId = category;
        const image = imageUrl;
        const post = { userId, createdAt, categoryId, title, image, content };
        if(title === '' || category === '' || content === ''){
            setOpenToast(true);
        }
        else {
            dispatch(addArticles(post));
            // event.target.reset();
            setImageUrl("");
            setTitle("");
            setCategory("");
            setContent("");
            setOpenToast(false);
            navigate('/experience');
        }
       
    }
    
 
  return (
    <>
        {isLogin && account.roleId === 3 &&
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete='off' mb={"50px"}>
            <Box className="info" mb={4} sx={{display: { xs: "block", md: "flex"}}}>
            <Box className="author" sx={{mb: { xs: "30px", md: "0px"}}}>
                <Typography variant="body1" component="h3" sx={{ color:"#494b4c", fontWeight: "bold" }}>
                    Tác giả:
                </Typography>
                <Avatar alt="user"  src={user.avatar} sx={{ bgcolor: "#FA8D22" }} />
                <Typography className="user-name" >
                            {user.firstName} {user.lastName}
                </Typography>
            </Box>
            <Box className="date"  >
                <Typography  variant="body1" component="h3" sx={{ color:"#494b4c", fontWeight: "bold" }}>
                    Thời gian: 
                </Typography>
                <Typography className="date-text" >
                              {currentDate}
                </Typography>
            </Box>
            </Box>
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
        <Box className='category' mt={4}>
       <Typography variant="body1" component="h3" sx={{ color:"#494b4c", fontWeight: "bold" }}>
                    Loại bài viết: 
        </Typography>
        <StyledFormControl sx={{ minWidth: 270 }}>
        <Select 
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            '.MuiOutlinedInput-input': {
                padding: "5px 10px"
            }
          }}
        >
            {categories && categories.length > 0 && categories.map((category)=>{
                return (
                     <MenuItem value={category.id} key={category.id}>
                        <em>{category.name}</em>
                    </MenuItem>
                   
                )
            })}
        </Select>
         </StyledFormControl>    
        </Box>
        <Box className="image" mt={4}>
             <Typography variant="body1" component="h3" sx={{ color:"#494b4c", fontWeight: "bold" }}>
                    Hình ảnh minh họa: 
                </Typography>
            <Box>
            <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} className='image_url' />
            <img src={imageUrl} alt="" className='image_view' />
            </Box>
        </Box>
            <Typography mt={4} variant="h5" component="h3" sx={{ color:"#494b4c", fontWeight: "bold" }}>
                    Nội dung bài viết
                </Typography>
            <Box sx={{margin: " 20px 0"}} >
                <ReactQuill 
                onChange={(value) => setContent(value)}      
                value={content}
                modules={modules}
                formats={formats}
                >
                </ReactQuill>
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
        <Snackbar open={openToast} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert variant="filled" color="warning" onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            Vui lòng điền đủ thông tin
          </Alert>
        </Snackbar>
    </>
  
  )
}

export default CreatePost