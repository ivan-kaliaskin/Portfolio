// import penguin from './assets/images/penguin.jpg'
import '../src/styles/main.scss'
import getApp from './components/App'
import elements from './constants/elements'
import setPageContent from './functions/setContent/setPageContent'


const body = document.getElementById('body')
body.append(getApp())
body.classList.add('theme-main')
elements.body = body

setPageContent(0)