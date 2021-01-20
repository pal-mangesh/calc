import React from "react";
import { Interface } from "readline";

interface IProps {
    value?: string;
}

const Input = ({ value }: IProps) => {
    return (
        <>
            {value}
        </>
    )
};


export default Input
