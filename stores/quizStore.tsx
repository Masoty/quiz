'use client'

import {create} from "zustand";
import {DataInterface} from "@/components/types";


interface AnswerTypes {
    answerUser: number,
    correctAnswer: number,
}

export interface Basket {
    quiz: DataInterface[]
    answers: AnswerTypes[]
    currentQuestion: number
    setQuizList: (data: DataInterface[]) => void
    setAnswer: (value: AnswerTypes) => void
    nextQuestion: () => void
    resetQuiz: () => void
}

export const useQuizStore = create<Basket>()(
    (set) => ({
        quiz: [],
        answers: [],
        currentQuestion: 0,

        setQuizList: (data) => set(() => {
            return ({
                quiz: data,
            })
        }),

        setAnswer: (value) => set((state) => {
            return ({
                answers: [...state.answers, value]
            })
        }),

        nextQuestion: () => set((state) => {
            return ({
                currentQuestion: state.currentQuestion + 1
            })
        }),

        resetQuiz: () => set(() => {
            return ({
                answers: [],
                currentQuestion: 0,
            })
        }),

    })
)