import React, {Component} from 'react';
import RequestApiService from '../../services/requests-api-service';
import {Section} from '../../components/Utils/Utils';
import RequestListItem from '../../components/RequestListItem/RequestListItem';

export default class RequestListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  state =  {
    requestList: [],
    error: null
  };

  setError = error => {
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  setRequestList = requestList => {
    this.setState({requestList});
  };

  componentDidMount() {
    this.clearError();
    RequestApiService.getRequests()
      .then(res => this.setRequestList(res))
      .catch(this.setError);
  };

  renderRequests() {
    const requestList = this.state.requestList;
    return requestList.map(request =>
      <RequestListItem
        key={request.id}
        request={request}
      />
    );
  };

  render() {
    const {error} = this.state;
    return (
      <Section list className='RequestListPage'>
        <p>Request List:</p>
        {error ? <p className='red'>There was an error, please try again</p> : this.renderRequests()}
      </Section>
    );
  };
};