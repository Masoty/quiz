import React, {FC} from 'react';

interface QuestionsProps {
    numberQuestion: number
    allQuestion: number
}

const Questions: FC<QuestionsProps> = ({numberQuestion, allQuestion}) => {
    return (
        <div className="border-b border-b-grey">
            <span className="text-1xl font-medium text-background">Question {numberQuestion} of {allQuestion}</span>
        </div>
    );
};

export default Questions;