import React from 'react'

function Alert({type , message}) {
  return (
    <article className="message is-danger">
  <div className="message-header">
    <p>Danger</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</article>
  )
}

export default Alert