import React, {FC} from 'react';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface CircleProps {
    status?: "true" | "error" | "neutral"
}


const Circle: FC<CircleProps> = ({ status }) => {

    if (status === "true") {
        return (
            <div className="flex bg-[#19B511] w-10 h-10 rounded-full">
                <DoneOutlineTwoToneIcon color={'success'} className="m-auto"/>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex bg-[#AC2300] w-10 h-10 rounded-full">
                <CloseRoundedIcon sx={{ color: '#FF3400' }} className="m-auto" fontSize='large'/>
            </div>
        );
    }

    if (status === "neutral") {
        return (
            <div className="flex bg-grey w-10 h-10 rounded-full">

            </div>
        );
    }

};

export default Circle;