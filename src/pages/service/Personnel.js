import React, { useEffect, useState } from 'react'
import Button1 from '../../components/button/Button1'
import Button2 from '../../components/button/Button2'
import Loading1 from '../../components/Loading/Loading'
import { NavLink } from 'react-router-dom'




const Personnel = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
      const getPersonnels = async () => {
        setLoading(true)
        // const response =await fetch('http://fakestoreapi.com/products');
        const response =await fetch('http://localhost:3001/api/users');
        if(componentMounted){
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter)

        }
        return () => {
          componentMounted= false;
        }
      }
    getPersonnels();
    }, [])
    const Loading = ()=> {
      return(
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loading1 />
      </div>
      )
    }
    const filterPersonnel = (cat)=>{
      const updateList = data.filter((x) => x.gender ===cat);
      setFilter(updateList);
    }
    const ShowPersonnels = ()=> {
      return(
      <>
      <div className='buttons d-flex justify-content-center mb-4 pb-5'>
        <button  className='btn btn-outline-dark me-2' onClick={()=> setFilter(data)}>All</button>
        <button className='btn btn-outline-dark me-2' onClick={()=> filterPersonnel('Nam')}>Nam</button>
        <button className='btn btn-outline-dark me-2' onClick={()=> filterPersonnel('Nữ')}>Nữ</button>
        
      </div>
      {filter.map((personnels) => {
        return(
          <>
            <div className=' col-md-3 mb-4'>
              <div className='card h-100 text-center p-4' key={personnels.id}>
                <img src={personnels.avatar} className='card-img-top' alt={personnels.title} height="250px"/>
                <div className='card-body'>
                  <h5 className='card-title-bm-0'> {personnels.title.substring(0,12)}</h5>
                  <p className='card-text lead fw-bold'>
                    ${personnels.price}
                  </p>
                  <NavLink to={`/service/${personnels.id}`} className='btn btn-outline-dark'> Chi Tiết</NavLink>
                </div>
              </div>
            </div>
          </>
        )
      })}
      </>
      )
    }
  return (
    <div>
        <div className='container '>
          <div className='row'>
            <div className='col-12 mb-5'>
              <h1 className='display-6 fl-bolder text-center'>........ </h1>
              <hr/>
              
            </div>
          </div>
          <div className='row justify-content-center'>
            {loading? <Loading/> : <ShowPersonnels/>}
          </div>
        </div>
    </div>
  )
}

export default Personnel