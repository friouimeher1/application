import React , { Component } from 'react';

export default class  Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

        <div className="item">
            <span className="project-title">
              <a href="#hook">{ this.props.item.years }</a>

          </span> <br/>- <span className="project-tagline">
              <b>  Sujet :{ this.props.item.sujet }</b>
            <p>-Outil : { this.props.item.outil}</p>
              </span>

        </div>

    );
  }
}
