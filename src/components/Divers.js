import React , { Component } from 'react';

export default class  Divers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-unstyled interests-list">
            <li>{ this.props.item}</li>
        </ul>
    );
  }
}
