import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading1 from "../../components/Loading/Loading";
import { fecthCatories, fecthService } from "../../store/actions/serviceAction";
import { NavLink } from "react-router-dom";
import { fecthAllUser } from "../../store/actions/getUserAction";

const Personnel1 = ({value1}) => {
  const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  // let componentMounted = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthService());
    dispatch(fecthAllUser());
    dispatch(fecthCatories());
  }, [dispatch]);
  
  const { users } = useSelector((state) => state.users);
  console.log("check user:", users);
  const { services } = useSelector((state) => state.services);
  console.log("check service:", services);
  const { categories } = useSelector((state) => state.services);
  console.log("check category:",categories );
  
  
  const category = categories.find((item) => item?.id === value1)
  const test1 =  services.filter(item => item?.categoryId === category?.id )
  console.log("tesst1", test1 )
  const Loading = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading1 />
      </div>
    );
  };
  
  const ShowPersonnels = () => {
    return (
      <>
   
        
    
        {test1 && test1.length > 0 && test1.map((item) => {
            
            const user = users.find((user) => user.id === item.userId);
            
            
            console.log("user:", user);
            return (
              <>
                <div className=" col-md-3 mb-4" key={item.id}>
                  <div className="card h-100 text-center p-4">
                    <img
                      src={user?.avatar}
                      className="card-img-top"
                      alt=""
                      height="250px"
                    />

                    <div className="card-body">
                      <h5 className="card-title-bm-0">
                        {" "}
                        {user?.firstName} {user?.lastName}
                      </h5>
                      <p className="card-text lead fw-bold">${item.cost}</p>
                      <NavLink
                        to={`/service/${item.id}`}
                        className="btn btn-outline-dark"
                      >
                        {" "}
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  };
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fl-bolder text-center">........ </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowPersonnels />}
        </div>
      </div>
    </div>
  );
};

export default Personnel1;
