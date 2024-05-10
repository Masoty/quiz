'use client'

import React, {FC} from 'react';
import {Button as ButtonMIU} from "@mui/material";

interface NextButtonProps {
    className?: string,
    onClick?: () => void,
    children: React.ReactNode
}

const Button: FC<NextButtonProps> = ({ className, onClick, children }) => {
    return (
        <ButtonMIU onClick={onClick} className={`bg-background max-w-[100px] text-[white] hover:bg-background-hover ${className}`}>
            {children}
        </ButtonMIU>
    );
};

export default Button;