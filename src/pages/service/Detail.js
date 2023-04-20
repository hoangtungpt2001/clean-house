import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Zoom from "react-img-zoom";
const Detail = () => {
  const { id } = useParams();
  const [personnel, setPersonnel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [oder, setOder] = useState(true);

  // useEffect(() => {
  //   const getPersonnel = async () => {
  //     setLoading(true);

  //     const response = await fetch(`http://localhost:3001/api/users/${id}`);

  //     setPersonnel(await response.json());
  //     setLoading(false);
  //   };

  //   getPersonnel();
  // }, []);
  const { users } = useSelector(state => state.users);
  console.log('check user:',users)
  const Loading = () => {
    return <div>...</div>;
  };
  const ShowPersonnel = () => {
    return (
      <>
        {/* <div className="col-md-4 mb-4 d-flex flex-wrap" >
          <img
            src={personnel.avatar}
            alt={personnel.title}
            height="400px"
            width="356px"
            style={{borderRadius:'5px'}}
          />
          <div className="d-flex"  >
            <img
              src={personnel.avatar}
              alt=""
              height="95px"
              width="95px"
              className="px-2 py-2 "
              st~yle={{marginLeft:'45px',borderRadius:"50%"}}
            ></img>
            <img
              src={personnel.avatar}
              alt=""
              height="95px"
              width="95px"
              className="px-2  py-2"
              style={{borderRadius:"50%",marginLeft:'-50px'}}
            ></img>
            <img
              src={personnel.avatar}
              alt=""
              height="95px"
              width="95px"
              className="px-2  py-2"
              style={{borderRadius:"50%",marginLeft:'-50px'}}
            ></img>
            <img
              src={personnel.avatar}
              alt=""
              height="95px"
              width="95px"
              className="px-2  py-2"
              style={{borderRadius:"50%",marginLeft:'-50px'}}
            ></img>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <h4 className="text-uppercase text-black-50">
            {" "}
            {personnel.category}
          </h4>
          <h1 className="display-5"> {personnel.title}</h1>
          <h3 className="display-6 fw-bold my-4"> ${personnel.price}</h3>
          <p className="lead"> {personnel.description}</p>
          <button className="btn btn-outline-dark "> Liên Hệ</button>
        </div>
        <div
          className="col-md-4 mb-4"
          style={{
            border: "2px solid #ff69b4",
            height: "300px",
            borderRadius: "5px",
          }}
        >
             <i className="fa fa-heart " > cdsadsal;fsalfp</i>
             <br/>
             <i className="fa fa-heart "> cdsadsal;fsalfp</i>
        </div> */}
        <div className="main-product-wrapper py-2 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-4">
                <div className="main-product-image">
                  <img src={personnel.avatar} alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3 className="title">{personnel.firstName} {personnel.lastName}</h3>
                  </div>
                  <div className="border-bottom py-3">
                    <p className="price">${personnel.price}/Giờ</p>
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
                      <p className="product-data">3-4 Giờ</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Dụng cụ:</h3>{" "}
                      <p className="product-data">Có</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Công việc:</h3>{" "}
                      <p className="product-data">cai j do</p>
                    </div>
                    <div className=".d-flex align-items-center gap-30">
                      <button type="button" className="btn btn-outline-success">
                        Thuê Dịch Vụ
                      </button>
                      <button type="button" className="btn btn-outline-danger mx-2">
                        Liên Hệ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
           
            <div className="col-4">
              <div className="main-product-image">
                <img src={personnel.avatar} alt="" />
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
                  <p>{personnel.description}</p>
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
                    {oder && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href=""
                        >
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
                      <button type="button" className="btn btn-outline-secondary">Gửi</button>
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
  return (
    <div>
      <Layout>
      <div className="form-tong">
        <div className="container mt-4">
          <div className="row">{loading ? <Loading /> : <ShowPersonnel />}</div>
        </div>
        </div>
      </Layout>
    </div>
  );
};

export default Detail;
