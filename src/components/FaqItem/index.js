// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    showAnswer: false,
  }

  onClickButton = () => {
    const {showAnswer} = this.state
    this.setState({showAnswer: !showAnswer})
  }

  renderAnswer = () => {
    const {showAnswer} = this.state
    const {content} = this.props
    const {answerText} = content

    if (showAnswer) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {showAnswer} = this.state
    const {content} = this.props
    const {questionText} = content

    const showSolution = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const alt = showAnswer ? 'minus' : 'plus'

    return (
      <li className="list-card-container">
        <div className="query">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            <img src={showSolution} alt={alt} className="button-img" />
          </button>
        </div>

        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
