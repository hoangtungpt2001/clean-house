import React, { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fecthService } from "../../store/actions/serviceAction";
import { fecthAllUser } from "../../store/actions/getUserAction";

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
  return (
    <>
      <div className="main-product-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="main-product-details">
                <div className="border-bottom pb-4">
                  <section>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-12 col-xl-10">
                          <div className="card shadow-0 border rounded-3">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 ">
                                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                    <Avatar
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
                                      alt="mèo"
                                      src={personnel?.avatar}
                                    />
                                    <a href="#!">
                                      <div className="hover-overlay">
                                        <div
                                          className="mask"
                                          style={{
                                            backgroundColor:
                                              " rgba(253, 253, 253, 0.15)",
                                          }}
                                        ></div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-start justify-content-center">
                                  <h5>
                                    {personnel?.firstName} {personnel?.lastName}
                                  </h5>
                                  <div className="d-flex flex-row">
                                    <div className="text-danger mb-1 me-2">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                  <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                                    <h4 className="mb-1 me-1 text-center">
                                      {service?.cost} /Giờ
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="border-bottom mt-3">
                  <form>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Họ</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Họ "
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Tên</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Tên"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress">Địa Chỉ</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="VD: 27 Nguyễn Nhạc..."
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Addres</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                          <option defaultValue={"0"}>Choose...</option>
                          <option value={"0"}>0</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary my-3">
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
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
          <div className="row">{loading ? <Loading /> : <ShowPersonnel />}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
