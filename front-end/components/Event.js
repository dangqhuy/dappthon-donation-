import * as React from 'react'
import { Link } from 'react-router-dom'
var distanceInWordsToNow = require('date-fns/distance_in_words_to_now')
const Event = (props) => {
  return (
    <tbody>
    <tr>
        <td><span className="">{props.requestKey}</span></td>
        <td>{props.name}</td>
        <td>
          {props.company}</td>
        <td>
          {distanceInWordsToNow(props.created)} ago</td>
        <td>
          {props.expire}</td>
        <td>
          <span className="status-icon bg-success"></span> {props.status} </td>
        <td>${props.target}</td>
        <td>${props.balance}</td>
        <td className="text-right">
          <Link to={`/events/${props.requestKey}`} className="btn btn-secondary btn-sm">Detail</Link>
        </td>
      </tr>
    </tbody>
  )
}

export default Event;