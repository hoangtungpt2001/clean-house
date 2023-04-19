import React from "react";
import Layout from '../components/layout/Layout';
import {
  Box,
  Typography,
  Container
} from "@mui/material";


const PrivacyPolicy = () => {
    return (
        <Layout>
             <Container maxWidth="lg" >
                <Typography variant="h4" component="h1" sx={{color: "#444444"}} mt={"50px"} >
                                 THÔNG BÁO VỀ QUYỀN RIÊNG TƯ CỦA BẠN
                    </Typography>
                <Box mt={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                  THU THẬP THÔNG TIN CÁ NHÂN
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                  Thông tin Cá nhân là thông tin về bạn mang tính nhận dạng, bao gồm nhưng không giới hạn tên, số chứng minh thư nhân dân, số giấy khai sinh, số hộ chiếu, quốc tịch, địa chỉ, số điện thoại, số fax, thông tin ngân hàng, thông tin thẻ tín dụng, dân tộc, giới tính, ngày sinh, tình trạng hôn nhân, tình trạng cư trú, nền tảng giáo dục, tình trạng tài chính, sở thích cá nhân, địa chỉ thư điện tử (email) của bạn, nghề nghiệp, định danh của bạn trong House Cleaning, thông tin của bạn trong House Cleaning, ngành làm việc của bạn, bất kỳ thông tin nào về bạn mà bạn đã cung cấp cho House Cleaning trong các đơn đăng ký hoặc bất kỳ đơn tương tự nào và/hoặc bất kỳ thông tin nào về bạn đã được hoặc sẽ được House Cleaning thu thập, lưu trữ, sử dụng và xử lý theo thời gian và bao gồm các thông tin cá nhân nhạy cảm như các dữ liệu về sức khỏe, tôn giáo hoặc tín ngưỡng tương tự khác.
                    </Typography>
                </Box>
                <Box mt={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                  MỤC ĐÍCH SỬ DỤNG THÔNG TIN
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                  Để trả lời các câu hỏi, bình luận và phản hồi của người dùng; Để phục vụ mục đích quản lý nội bộ như kiểm toán, phân tích dữ liệu, lưu trữ cơ sở dữ liệu; Để phục vụ mục đích phát hiện, ngăn chặn và truy tố tội phạm; Để giúp House Cleaning tuân thủ các nghĩa vụ theo quy định của pháp luật;
                    </Typography>
                </Box>
                <Box mt={6} mb={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                 THỜI GIAN LƯU TRỮ THÔNG TIN
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                  Dữ liệu cá nhân của người dùng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự người dùng đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân của người dùng sẽ được bảo mật trên máy chủ của House Cleaning.
                    </Typography>
                </Box>
            </Container>
    
        
        </Layout>
    )
}
export default PrivacyPolicy;