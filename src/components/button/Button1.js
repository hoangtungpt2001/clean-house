import React, { memo } from "react";
import './Button1.css'

    const Button1 = memo(({ label }) => {
        return (
          <button className="button-1">{label}</button>
        );
      });
    
      

export default Button1;
