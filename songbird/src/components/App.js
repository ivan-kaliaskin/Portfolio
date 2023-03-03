import getHeader from "./header/Header"
import getQuizPage from "./quizPage/QuizPage"
import getResultsPage from "./ResultsPage"

function getApp() {
    const app = document.createElement('div')
    app.classList.add('app')

    const header = getHeader()
    const quizPage = getQuizPage()
    const resultsPage = getResultsPage()
    quizPage.classList.add('visible')

    app.append(header, quizPage, resultsPage)
    return app
}
export default getApp
