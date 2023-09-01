import {useState} from 'react'
import './App.css'
import LanguageCards from './components/LanguageCards'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [activeId, setActiveId] = useState(languageGreetingsList[0].buttonText)

  const filteredLanguage = () => {
    const language = languageGreetingsList.filter(
      eachItem => eachItem.buttonText === activeId,
    )
    return language
  }

  return (
    <div className="bg-container">
      <h1 className="title">Multilingual Greetings</h1>
      <ul className="buttons-container">
        {languageGreetingsList.map(eachItem => {
          const isActive = activeId === eachItem.buttonText
          const activeBtn = isActive ? 'active-language-btn' : 'language-btn'
          return (
            <li className="button-item" key={eachItem.id}>
              <button
                onClick={() => setActiveId(eachItem.buttonText)}
                type="button"
                className={activeBtn}
              >
                {eachItem.buttonText}
              </button>
            </li>
          )
        })}
      </ul>
      <LanguageCards greetings={filteredLanguage()} />
    </div>
  )
}

export default App
