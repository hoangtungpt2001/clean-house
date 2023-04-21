import React, { memo } from "react";
import './Button2.css'

    const Button1 = memo(({ label }) => {
        return (
          <button className="button-2"><span>{label}</span></button>
        );
      });
    
      

export default Button1;
