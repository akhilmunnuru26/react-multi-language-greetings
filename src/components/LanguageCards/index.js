import './index.css'

const LanguageCards = props => {
  const {greetings} = props
  const {imageAltText, imageUrl} = greetings[0]

  return (
    <div className="list-item">
      <img src={imageUrl} alt={imageAltText} className="greeting-image" />
    </div>
  )
}

export default LanguageCards
