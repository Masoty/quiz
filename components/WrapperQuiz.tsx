'use client'

import React, {FC, useEffect} from 'react';
import {DataInterface} from "@/components/types";
import {useQuizStore} from "@/stores/quizStore";
import Quiz from "@/components/Quiz";
import {Box} from "@mui/material";
import Finish from "@/components/Finish";

interface QuizWrapperInterface {
    data: DataInterface[]
}

const WrapperQuiz: FC<QuizWrapperInterface> = ({ data }) => {

    // Нужен для инициализации вопросов

    const setQuiz = useQuizStore(state => state.setQuizList)
    const quiz = useQuizStore(state => state.quiz)
    const currentQuestion = useQuizStore(state => state.currentQuestion)

    useEffect(() => {
        setQuiz(data)
    }, []);

    if (quiz.length === 0) {
        return <></>
    }

    return (
        <Box className="flex flex-col bg-red-500 w-[500px] mx-auto my-auto py-[30px] px-[20px] bg-[white] rounded">
            {currentQuestion !== quiz.length ? <Quiz/> : <Finish/>}
        </Box>
    );
};

export default WrapperQuiz;