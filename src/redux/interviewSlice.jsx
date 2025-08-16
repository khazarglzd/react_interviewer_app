import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    currentIndex: 0,
    answers: {},
    status: "notStarted",
};

const interviewSlice = createSlice({
    name: "interview",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
            state.currentIndex = 0;
            state.answers = {};
            state.status = "inProgress";
        },
        setAnswer: (state, action) => {
            const { index, answer } = action.payload;
            state.answers[index] = answer;
        },
        nextQuestion: (state) => {
            if (state.currentIndex < state.questions.length - 1) {
                state.currentIndex += 1;
            }
        },
        prevQuestion: (state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
            }
        },
        passQuestion: (state) => {
            if (state.currentIndex < state.questions.length - 1) {
                state.currentIndex += 1;
            }
        },
        finishInterview: (state) => {
            state.status = "finished";
        },
        resetInterview: () => initialState,
    },
});

export const {
    setQuestions,
    setAnswer,
    nextQuestion,
    prevQuestion,
    passQuestion,
    finishInterview,
    resetInterview,
} = interviewSlice.actions;

export default interviewSlice.reducer;
