import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NiceDate, Hyph} from '../Utils/Utils';
import './AnswerListItem.css';

export default class AnswerListItem extends Component {
  render() {
    const {answer} = this.props;
    return  (
      <Link to={`/answer/${answer.id}`} className='AnswerListItem'>
        <img class="image" src="http://via.placeholder.com/300x200"/>
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
    )
  }
}