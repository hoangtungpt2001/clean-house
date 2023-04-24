import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Container, Grid } from "@mui/material";
import "./Footer.scss";
import logo from "../../assets/images/logo-final.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          className="footer-content"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              component="h5"
              mb={2}
              className="footer-heading"
            >
              Về chúng tôi
            </Typography>
            <ul className="footer-link">
              <li>
                <Link to={"/introduce"}>Giới thiệu</Link>
              </li>
              <li>
                <Link to={"/terms-of-use"}>Điều khoản sử dụng</Link>
              </li>
              <li>
                <Link to={"/privacy-policy"}>Chính sách bảo mật</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              component="h5"
              mb={2}
              className="footer-heading"
            >
              Dịch vụ
            </Typography>
            <ul className="footer-link">
              <li>
                <Link to={"/service"}>Giúp việc nhà theo giờ</Link>
              </li>
              <li>
                <Link to={"/service"}>Tổng vệ sinh</Link>
              </li>
              <li>
                <Link to={"/service"}>Đi chợ</Link>
              </li>
              <li>
                <Link to={"/service"}>Nấu ăn gia đình</Link>
              </li>
              <li>
                <Link to={"/service"}>Giặt ủi</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
export default Footer;
