import { createSlice } from "@reduxjs/toolkit";
import questionBank from "../data/questionsBank";

const interviewSlice = createSlice({
    name: "interview",
    initialState: {
        questions: [],
        currentIndex: 0,
        answers: {},
        status: "idle",
        counts: {},
        level: null,
    },
    reducers: {
        startInterview: (state, action) => {
            const { level, counts } = action.payload;

            state.level = level;
            state.counts = counts;
            state.currentIndex = 0;
            state.answers = {};
            state.status = "inProgress";

            let selected = [];

            Object.entries(counts).forEach(([category, count]) => {
                const allQuestions = questionBank[category]?.[level] || [];
                const chosen = allQuestions.slice(0, count);
                selected = [...selected, ...chosen];
            });

            state.questions = selected;
        },
        setAnswer: (state, action) => {
            state.answers[action.payload.index] = action.payload.answer;
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
            state.currentIndex = Math.min(
                state.currentIndex + 1,
                state.questions.length - 1
            );
        },
        finishInterview: (state) => {
            state.status = "finished";
        },
    },
});

export const {
    startInterview,
    setAnswer,
    nextQuestion,
    prevQuestion,
    passQuestion,
    finishInterview,
} = interviewSlice.actions;

export default interviewSlice.reducer;
