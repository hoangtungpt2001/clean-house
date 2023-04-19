import React from "react";
import Layout from '../components/layout/Layout';
import {
  Box,
  Typography,
  Container
} from "@mui/material";


const TermsOfUse = () => {
    return (
        <Layout>
             <Container maxWidth="lg" >
                <Typography variant="h4" component="h1" sx={{color: "#444444"}} mt={"50px"} >
                                 ĐIỀU KHOẢN SỬ DỤNG
                    </Typography>
                <Box mt={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                  TÀI KHOẢN NGƯỜI DÙNG
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                  Để sử dụng hầu hết các khía cạnh của Dịch vụ, bạn phải đăng ký và duy trì hoạt động một tài khoản Dịch vụ người dùng cá nhân (“Tài khoản”). Bạn phải đủ 18 tuổi trở lên, hoặc đủ tuổi trưởng thành theo pháp lý trong khu vực tài phán của mình (nếu tuổi trưởng thành khác 18 tuổi), để có được một Tài khoản. Việc đăng ký tài khoản yêu cầu bạn phải gửi cho House Cleaning các thông tin cá nhân nhất định, chẳng hạn như tên, địa chỉ, số điện thoại di động của bạn và tuổi tác, cũng như tối thiểu một phương thức thanh toán hợp lệ (hoặc thẻ tín dụng hoặc đối tác thanh toán được chấp thuận). Bạn đồng ý duy trì thông tin chính xác, đầy đủ và cập nhật trong Tài khoản của bạn. Việc bạn không duy trì thông tin Tài khoản chính xác, đầy đủ và cập nhật, bao gồm đưa phương thức thanh toán không hợp lệ hoặc hết hạn sử dụng vào trong hồ sơ, có thể dẫn đến việc bạn sẽ không có quyền truy cập và sử dụng Dịch vụ hoặc chấm dứt Thỏa thuận này giữa bạn và House Cleaning. Bạn chịu trách nhiệm đối với tất cả các hoạt động diễn ra trong Tài khoản của bạn, và bạn đồng ý duy trì tính an ninh và bảo mật của tên người dùng và mật khẩu Tài khoản của bạn tại mọi thời điểm. Trừ trường hợp được House Cleaning cho phép bằng văn bản, bạn chỉ có thể sở hữu một Tài khoản.
                    </Typography>
                </Box>
                <Box mt={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                  YÊU CẦU VÀ ỨNG XỬ CỦA NGƯỜI DÙNG
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                 Các dịch vụ không được cấp cho người dùng dưới 18 tuổi. Bạn không thể uỷ quyền cho bên thứ ba sử dụng Tài khoản của bạn, và bạn không được phép cho người dưới 18 tuổi nhận các dịch vụ vận chuyển hoặc hậu cần từ Nhà cung cấp Bên Thứ ba trừ khi họ đi cùng bạn. Bạn không được chuyển nhượng hoặc chuyển giao Tài khoản của mình cho bất kỳ cá nhân hoặc thực thể pháp lý nào khác. Bạn đồng ý tuân thủ tất cả các luật áp dụng khi sử dụng các Dịch vụ, và bạn chỉ có thể sử dụng Dịch vụ cho các mục đích hợp pháp. Khi sử dụng các dịch vụ, bạn không được gây phiền toái, khó chịu, bất tiện, hoặc thiệt hại tài sản, cho các Nhà cung cấp Bên Thứ ba hoặc bất kỳ bên nào khác. Trong một số trường hợp bạn có thể được yêu cầu cung cấp giấy tờ chứng minh quyền truy cập hoặc sử dụng dịch vụ, và bạn đồng ý rằng bạn có thể bị từ chối truy cập hoặc sử dụng Dịch vụ nếu bạn từ chối cung cấp giấy tờ chứng minh.
                    </Typography>
                </Box>
                <Box mt={6} mb={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                 TRUY CẬP MẠNG VÀ THIẾT BỊ
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                  Bạn chịu trách nhiệm về việc truy cập mạng dữ liệu cần thiết để sử dụng các Dịch vụ. Mạng dữ liệu di động của bạn và mức phí nhắn tin và có thể áp dụng nếu bạn truy cập hoặc sử dụng các Dịch vụ từ một thiết bị không dây được kích hoạt và bạn phải chịu trách nhiệm về mức giá và phí này. Bạn chịu trách nhiệm thu thập và cập nhật phần cứng tương thích hoặc các thiết bị cần thiết để truy cập và sử dụng các Dịch vụ và Ứng dụng này và bất kỳ bản cập nhật nào. bTaskee không đảm bảo rằng các Dịch vụ, hoặc bất kỳ phần nào trong đó, sẽ hoạt động trên bất kỳ phần cứng hoặc các thiết bị cụ thể nào. Ngoài ra, các Dịch vụ có thể bị trục trặc và chậm trễ vốn thường gặp trong việc sử dụng Internet và các phương tiện liên lạc điện tử.
                    </Typography>
                </Box>
            </Container>
    
        
        </Layout>
    )
}
export default TermsOfUse;