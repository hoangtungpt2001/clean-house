import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { fecthService } from "../../store/actions/serviceAction";
import { fecthAllUser, fecthUserById } from "../../store/actions/getUserAction";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const ShowPersonnel = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(true);
  console.log("id", typeof id);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log("check user:", users);
  const { services } = useSelector((state) => state.services);
  console.log("check service:", services);
  const service = services.find((item) => item.id === parseInt(id));
  const personnel = users.find((item) => item.id === service.userId);
  console.log("check service1111:", service);

  useEffect(() => {
    dispatch(fecthService());
    dispatch(fecthAllUser());
  }, [dispatch]);

  console.log("personnel", personnel);

  return (
    <>
      <div className="main-product-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <div className="main-product-image">
                <img src={personnel?.avatar} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    {personnel?.firstName} {personnel?.lastName}
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">{service?.cost}/Giờ</p>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom">
                  <h3>Dịch vụ vệ sinnh gồm: </h3>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Nhân viên: </h3>{" "}
                    <p className=" product-data">1</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Thời gian làm: </h3>{" "}
                    <p className="product-data">{service?.workingTime}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Dụng cụ:</h3>{" "}
                    <p className="product-data">Có</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Công việc:</h3>{" "}
                    <p className="product-data">{service?.name}</p>
                  </div>
                  <div className=".d-flex align-items-center gap-30">
                    <button type="button" className="btn btn-outline-success">
                      Thuê Dịch Vụ
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger mx-2">
                      Liên Hệ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="main-product-details">
                
                
                <div className="border-bottom">
                  <h3>Cam Kết: </h3>
                  <div className="d-flex gap-10 align-items-center my-2">
                    
                  <AttachMoneyIcon/><p className="product-data">Thái độ hòa nhã, thật thà, nhanh nhẹn, khỏe mạnh, tận tụy với công việc.</p>
                  </div>
                  <br/>
                  <div className="d-flex gap-10 align-items-center my-2">
                    
                  <AttachMoneyIcon/><p className="product-data">100% được đào tạo cơ bản, có dụng cụ, có đồng phục và chất tẩy rửa an toàn</p>
                  </div>
                  <br/>
                  <div className="d-flex gap-10 align-items-center my-2">
                    
                  <AttachMoneyIcon/><p className="product-data">Làm việc theo quy trình tiêu chuẩn</p>
                  </div>
                  <br/>
                  <div className="d-flex gap-10 align-items-center my-2">
                    
                  <AttachMoneyIcon/><p className="product-data">Tổ chức sắp xếp khóa học bài bản</p>
                  </div>
                  
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="description1111">
                <p>{service?.task}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <selection id="review" className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Review</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Customer Reviews</h4>
                  </div>
                  {order && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-secondary">
                        Gửi
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Ngoc Tung</h6>
                    </div>
                    <p className="mt-3">bạn nay don dep sach se</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </selection>
    </>
  );
};
const Detail = () => {
  const [loading, setLoading] = useState(false);
  const Loading = () => {
    return <div>...</div>;
  };

  return (
    
      <Layout>
        <div className="form-tong">
          <div className="container mt-4">
            <div className="row">
              {loading ? <Loading /> : <ShowPersonnel />}
            </div>
          </div>
        </div>
      </Layout>
    
  );
};

export default Detail;
