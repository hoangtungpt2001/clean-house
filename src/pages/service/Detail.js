import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Detail = () => {
  const { id } = useParams();
  const [personnel, setPersonnel] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPersonnel = async () => {
      setLoading(true);
      // const response =await fetch('http://fakestoreapi.com/products');
      const response = await fetch(`http://localhost:3001/api/users/${id}`);

      setPersonnel(await response.json());
      setLoading(false);
    };

    getPersonnel();
  }, []);

  const Loading = () => {
    return <div>...</div>;
  };
  const ShowPersonnel = () => {
    return (
      <>
        <div className="col-md-4 mb-4 d-flex flex-wrap" >
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
              style={{marginLeft:'45px',borderRadius:"50%"}}
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
        </div>
      </>
    );
  };
  return (
    <div>
      <Layout>
        <div className="container mt-4">
          <div className="row">{loading ? <Loading /> : <ShowPersonnel />}</div>
        </div>
      </Layout>
      d
    </div>
  );
};

export default Detail;
