import { createSlice } from "@reduxjs/toolkit";
import questionBank from "../data/questionsBank";

const initialState = {
    questions: [],
    currentIndex: 0,
    answers: {},
    status: "idle",
    counts: {},
    level: null,
    score: 0,
    total: 0,
    categoryScores: {},
};

const interviewSlice = createSlice({
    name: "interview",
    initialState,
    reducers: {
        startInterview: (state, action) => {
            const { level, counts } = action.payload;

            state.level = level;
            state.counts = counts;
            state.currentIndex = 0;
            state.answers = {};
            state.status = "inProgress";
            state.score = 0;
            state.total = 0;
            state.categoryScores = {};

            let selected = [];

            Object.entries(counts).forEach(([category, count]) => {
                const allQuestions = questionBank[category]?.[level] || [];
                const chosen = allQuestions.slice(0, count);
                selected = [...selected, ...chosen];


                state.categoryScores[category] = { correct: 0, total: count };
            });

            state.questions = selected;
            state.total = selected.length;
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
            state.currentIndex = Math.min(
                state.currentIndex + 1,
                state.questions.length - 1
            );
        },

        finishInterview: (state) => {
            state.status = "finished";
            let score = 0;


            Object.keys(state.categoryScores).forEach((cat) => {
                state.categoryScores[cat].correct = 0;
            });


            state.questions.forEach((q, idx) => {
                const userAnswer = state.answers[idx];
                if (userAnswer && userAnswer === q.answer) {
                    score += 1;
                    if (state.categoryScores[q.category]) {
                        state.categoryScores[q.category].correct += 1;
                    }
                }
            });

            state.score = score;
        },

        resetInterview: () => initialState,
    },
});

export const {
    startInterview,
    setAnswer,
    nextQuestion,
    prevQuestion,
    passQuestion,
    finishInterview,
    resetInterview,
} = interviewSlice.actions;

export default interviewSlice.reducer;
