import React from "react";

interface IProps {
    children: any;
    customStyle?: Object;
    onClick?: any;

}


const Button = ({ children, customStyle, onClick }: IProps) => {

    return (
        <button  style={{ padding: "10px", backgroundColor: "#ccc", ...customStyle }} onClick={onClick}
        >
            {children}
        </button>
    )
};


export default Button