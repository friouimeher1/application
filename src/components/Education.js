import React , { Component } from 'react';

export default class  Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item">
            <h4 className="degree">{ this.props.item.degree }</h4>
          <h5 className="meta">{ this.props.item.university }</h5>
        <div className="time">{ this.props.item.period }</div>
      </div>
    );
  }
}
