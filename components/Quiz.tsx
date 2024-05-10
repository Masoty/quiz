'use client'

import React from 'react';
import Questions from "@/components/Questions";
import AnswerItem from "@/components/AnswerItem";
import Circle from "@/components/Circle";
import {useQuizStore} from "@/stores/quizStore";
import Button from "@/components/Button";

const Quiz = () => {

    const quiz = useQuizStore(state => state.quiz)
    const answers = useQuizStore(state => state.answers)
    const nextQuestion = useQuizStore(state => state.nextQuestion)
    const currentQuestion = useQuizStore(state => state.currentQuestion)
    const setAnswer = useQuizStore(state => state.setAnswer)


    const answerItemHandler = (index: number) => {
        if (!answers[currentQuestion]) {
            setAnswer({
                answerUser: index,
                correctAnswer: quiz[currentQuestion].answers.findIndex(value => value.isCorrect)
            })
        }
    }

    const nextHandler = () => {
        if (answers.length === currentQuestion) {
            return alert("Answer this question to continue")
        }

        nextQuestion()
    }

    return (
        <>
            <Questions numberQuestion={currentQuestion + 1} allQuestion={quiz.length}/>

            <span className="text-2xl font-medium my-3">{quiz[currentQuestion].question}</span>

            <div className="flex flex-col gap-2">
                {quiz[currentQuestion].answers.map((item, index) => {
                    let type = 'neutral'

                    if (answers[currentQuestion] && (answers[currentQuestion].correctAnswer === index || answers[currentQuestion].answerUser === index)) {
                        if (answers[currentQuestion].correctAnswer === index && answers[currentQuestion].answerUser === index) {
                            type = 'true'
                        } else if (answers[currentQuestion].correctAnswer === index) {
                            type = 'true'
                        } else {
                            type = 'error'
                        }
                    }

                    // @ts-ignore
                    return <AnswerItem key={index} text={item.text} type={type} onClick={()=>answerItemHandler(index)}/>
                })}
            </div>

            <Button onClick={nextHandler} className='mt-4'>Next</Button>

            <div className="flex gap-2 mt-2">
                {quiz.map((value, index) => {
                    if (answers[index] !== undefined) {
                        if (answers[index].answerUser === answers[index].correctAnswer) {
                            return <Circle key={index} status='true'/>
                        } else {
                            return <Circle key={index} status='error'/>
                        }
                    } else {
                        return <Circle key={index} status='neutral'/>
                    }
                })}
            </div>

        </>
    );
};

export default Quiz;