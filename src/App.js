import React, { Component } from 'react';
import './index.css';
import './Profile-info.js';


export default class Post extends Component {
  render() {
    return (
      <div className="Post">
        <div className="Post-info">
          <div className="Profile">
            <img className="Profile_Pic"
              src="https://scontent.xx.fbcdn.net/v/t1.0-1/14470438_10157451332295048_6937427168734769921_n.jpg?oh=e6a98c9cbcc42368d39533f751f1817f&oe=59FF5705"
              alt="user profile pic"
            />
            <div className="AuthorInfo-name">
              YourName Here
            </div>
            <div className="Post-date">
              June 19 at 10:36am
            </div>
          </div>
        </div>
        <div className="Content">
        </div>
        <div className="Reaction-Bar">
          
        </div>
      </div>
    );
  }
}
