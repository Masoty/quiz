import React, {FC} from 'react';

interface AnswerItemProps {
    text: string,
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void,
    type?: 'true' | 'error' | 'neutral'
}


const AnswerItem: FC<AnswerItemProps> = ({text, onClick, type}) => {
    let addClassNames = "bg-grey hover:bg-grey-hover"

    if (type === "true") {
        addClassNames = "bg-[green]"
    } else if (type === "error") {
        addClassNames = "bg-[red]"
    }

    return (
        <div onClick={onClick} className={"rounded px-3 py-2 cursor-pointer " + addClassNames}>
            <span>{text}</span>
        </div>
    );
};

export default AnswerItem;