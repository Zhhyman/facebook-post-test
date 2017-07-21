import React  from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

export class Time extends React.Component {
    render() {
      let unixTimestamp = 1500648247;

      return(
        <Moment unix tz="America/Los_Angeles">{unixTimestamp}</Moment>
      );
    }
}
