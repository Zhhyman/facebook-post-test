import React, { Component } from 'react';
import './index.css';
import Time from 'react-time';
import Moment from 'react-moment';
import 'moment-timezone';
import globe from './globe.png'

export default class Post extends Component {
  render() {
    let now = new Date("2018");
    let wasDate = new Date("Mon June 19 2017 10:36")
    let postedDate = new Date("Thu Apr 20 2017 10:55:59 UTC+0500");
    let dateToFormat = new Date('1976-04-19T12:59-0500');

    if (now < new Date("2017")) {
      return (
        <Moment date={'June 1 2017'} format="MMMM d YYYY" />
      )
    }

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
               <Moment date={'June 8 2017'} format="MMMM d" /> <img src={globe} width="12px" height="12px" />
            </div>
          </div>
        </div>
        <div className="Content">
          <div className="Content-Desc">
            Torem apsum bolor lit emet, ionsectetur sdipiscing tlit. ahasellus bltrices, llit en laoreet suscipit, tortor lectus aliquam leo, non lacinia turpis orci vel ligula. Donec mi elit, bibendum vel arcu vulputate, posuere ultrices ipsum. Suspendisse aliquet elementum nunc ut ornare. Quisque et rutrum purus. Cras eget lectus ac ex ullamcorper tempor nec a turpis. In hac habitasse platea dictumst.
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
                <Moment date={'June 1 2017 03:11'} format="MMMM d [at]  H:MMa" />
              </div>


        </div>
      </div>
    </div>
  </div>
    );
  }
}
