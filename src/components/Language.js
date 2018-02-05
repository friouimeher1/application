import React , { Component } from 'react';

export default class  Language extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-unstyled interests-list">
            <li>{ this.props.item.name} <span className="lang-desc">({ this.props.item.details})</span></li>
        </ul>
    );
  }
}
