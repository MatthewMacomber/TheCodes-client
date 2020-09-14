import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import textImage from 'text-to-image';
import {NiceDate, Hyph} from '../Utils/Utils';
import './AnswerListItem.css';

export default class AnswerListItem extends Component {
  state = {
    answerImage: ''
  };

  setAnswerImage = answerImage => {
    this.setState({answerImage})
  };

  componentDidMount() {
    const {answer} = this.props;
    textImage.generate(answer.content, {
      maxWidth: 300,
      customHeight: 180,
      fontSize: 50,
      lineHeight: 55,
      textAlign: 'start',
      bgColor: 'lightgrey',
      textColor: 'black'
    })
      .then(this.setAnswerImage);
  };
  
  render() {
    const {answer} = this.props;
    let answerImage = this.state.answerImage;
    return  (
      <Link to={`/answer/${answer.id}`} className='AnswerListItem'>
        <img class="image" src={answerImage} alt={answer.content}/>
        <div className='overlay'>
          <header className='AnswerListItem__header'>
            <h2 className='AnswerListItem__header'>
              Answer for code id: {answer.code_id}
            </h2>
            <NiceDate date={answer.date_created} />
          </header>
          <h3>{answer.correct ? <>Correct</> : <>Wrong</>}</h3>
          <footer>
            Answer ID <Hyph /> {answer.id}
          </footer>
        </div>
      </Link>
    );
  };
};