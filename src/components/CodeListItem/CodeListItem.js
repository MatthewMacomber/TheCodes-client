import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NiceDate, Hyph} from '../Utils/Utils';

export default class CodeListItem extends Component {
  render() {
    const {code} = this.props;
    return (
      <Link to={`/code/${code.id}`} className='CodeListItem'>
        <header className='CodeListItem__header'>
          <h2 className='CodeListItem__heading'>
            {code.title}
          </h2>
          <CodeDate code={code} />
        </header>
        <footer className='CodeListItem__footer'>
          {code.author.id && <>
            <Hyph />
            <CodeAuthor code={code} />
          </>}
        </footer>
      </Link>
    )
  }
}

function CodeDate({code}) {
  return (
    <span className='CodeListItem__date'>
      <NiceDate
        date={code.date_created}
      />
    </span>
  )
}

function CodeAuthor({code}) {
  return (
    <span className='CodeListItem__author'>
      {code.author.full_name}
    </span>
  )
}
