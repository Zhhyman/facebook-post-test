import React, { Component } from 'react';
import './index.css';
import './react-bootstrap/lib/Button.js';


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
          <div className="Content-Desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, elit in laoreet suscipit, tortor lectus aliquam leo, non lacinia turpis orci vel ligula. Donec mi elit, bibendum vel arcu vulputate, posuere ultrices ipsum. Suspendisse aliquet elementum nunc ut ornare. Quisque et rutrum purus. Cras eget lectus ac ex ullamcorper tempor nec a turpis. In hac habitasse platea dictumst.
          </div> {/* Would like to make this into a link, but don't know how.  From HERE */}
          <div className="Main">
            <img className="Main_Pic"
              src="https://scontent.xx.fbcdn.net/v/t1.0-9/14449792_10157433035660048_5027347782728027455_n.jpg?oh=e6f4009cfb3196bc195e043ff44c7bdc&oe=5A0FD645"
              alt="Content's main"
            />
            <div className="Main-Title">
              <h3>Your title here</h3>
            <div className="Main-Subtitle">
              I am a subtitle!
            </div>
            <a className="Subtitle-Link"> {/* To HERE */}
              Hello!
            </a>
            <div className="btn">
              Learn More
            </div>
            </div>
          </div>
          <div className="lcs">
          Like, Comment, and Share go in here.
          </div>
        </div>
        <div className="Reaction-Bar">
          <div className="Comment-Wrapper">
            <div className="Profile">
              <img className="Profile_Pic"
                src="https://scontent.xx.fbcdn.net/v/t1.0-1/14470438_10157451332295048_6937427168734769921_n.jpg?oh=e6a98c9cbcc42368d39533f751f1817f&oe=59FF5705"
                alt="user profile pic"
              />
              <div className="AuthorInfo-name">
                YourName Here
                <a className="Comment">
                  Oh Wow!  What a comment!
                </a>
              </div>
              <div className="Post-date">
                June 19 at 10:36am
              </div>

              <div className="User-comment">
                <div className="Profile">
                  <img className="Profile_Pic"
                    src="https://scontent.xx.fbcdn.net/v/t1.0-1/14470438_10157451332295048_6937427168734769921_n.jpg?oh=e6a98c9cbcc42368d39533f751f1817f&oe=59FF5705"
                    alt="user profile pic"
                    />
                  <div className="Comment-text">
                    <form>
                      <input type="text" placeholder="Write a comment..."></input>
                    </form>
                  </div>
              </div>
              </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
