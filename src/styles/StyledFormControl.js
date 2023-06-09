import { FormControl, styled} from "@mui/material";
const StyledFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    border-radius: 50px;
    transition: 0.5s;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #c6c7cb;
    transition: 0.5s;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #fa8d22;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root {
    color: #fa8d22;
  }
`;
export default StyledFormControl;