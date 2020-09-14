import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import textImage from 'text-to-image';
import {NiceDate, Hyph} from '../Utils/Utils';
import './CodeListItem.css';

export default class CodeListItem extends Component {
  state = {
    codeImage: ''
  };

  setCodeImage = codeImage => {
    this.setState({codeImage})
  };

  componentDidMount() {
    const {code} = this.props;
    textImage.generate(code.content, {
      maxWidth: 300,
      customHeight: 180,
      fontSize: 50,
      lineHeight: 55,
      textAlign: 'start',
      bgColor: 'lightgrey',
      textColor: 'black'
    })
      .then(this.setCodeImage);
  };

  render() {
    const {code} = this.props;
    let codeImage = this.state.codeImage;
    return (
      <Link to={`/code/${code.id}`} className='CodeListItem'>
        <img className="image" src={codeImage} alt={code.content}/>
        <div className="overlay after">
          <header className='CodeListItem__header'>
            <h2 className='CodeListItem__heading'>
              {code.title}
            </h2>
            <CodeDate code={code} />
          </header>
          <footer className='CodeListItem__footer'>
            {code.user_name && <>
              Created by
              <Hyph />
              <CodeAuthor code={code} />
            </>}
          </footer>
        </div>
      </Link>
    );
  };
};

function CodeDate({code}) {
  return (
    <span className='CodeListItem__date'>
      <NiceDate
        date={code.date_created}
      />
    </span>
  );
};

function CodeAuthor({code}) {
  return (
    <span className='CodeListItem__author'>
      {code.user_name}
    </span>
  );
};
