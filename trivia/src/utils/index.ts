interface Answers {
    correct_answer: string,
    incorrect_answers: Array<string>
}

export const getAnswers = (questions: Array<Answers>, currentQuestion: number) => {
    var answers: Array<string> = []
    if (questions.length > 0) {
        answers = [questions[currentQuestion].correct_answer, ...questions[currentQuestion].incorrect_answers].sort(() => Math.random() - 0.5)
    }
    return answers
}

