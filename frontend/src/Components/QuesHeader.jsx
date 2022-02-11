import React from 'react'
import {Link} from 'wouter'

function QuesHeader() {
  return (
    <div className="top">
    <h1 className="title has-text-weight-bold">
      Top Questions
    </h1>

    <div className="card">
      <div className="post-links">
        <div className="is-flex is-justify-content-space-between p-4">
          <a href="">Newest</a>
          <a href="">Featured</a>
          <a href="">Unanswered </a>
          <a href="">Interesting</a>
        </div>
      </div>
    </div>

  </div>
  )
}

export default QuesHeader