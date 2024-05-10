import React from 'react';
import {useQuizStore} from "@/stores/quizStore";
import Button from "@/components/Button";

const Finish = () => {

    const answers = useQuizStore(state => state.answers)
    const resetQuiz = useQuizStore(state => state.resetQuiz)

    const correctAnswers = answers.filter(value => value.correctAnswer === value.answerUser)

    const resetQuizHandler = () => {
        resetQuiz()
    }

    return (
        <div className="flex flex-col items-center gap-2.5">
            <h2>Your correct answers {correctAnswers.length} of {answers.length}</h2>
            <Button onClick={resetQuizHandler}>Restart</Button>
        </div>
    );
};

export default Finish;