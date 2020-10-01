import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AnswerListItem from './AnswerListItem';

Enzyme.configure({ adapter: new Adapter() })

describe('CodeListItem component', () => {
  const props = {
    id: 1,
    title: 'code',
    content: 'test code',
    user_name: 'test',
    date_created: new Date(2018, 12, 15)
  }

  it('renders the AnswerListItem given props', () => {
    const wrapper = shallow(<AnswerListItem answer={props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});