import React from 'react';
import {useSelector} from 'react-redux';
import * as timeago from 'timeago.js'

function Profile() {
  const {state} = useSelector((state) => state.auth )
  return (
    <div>
    <div className="columns">
      <div className="column is-2">
      <img src={`https://secure.gravatar.com/avatar/${state._id}?s=164&d=identicon`} alt="profile" className="image is-128x128"  title={`${state.userName}`}/>
      </div>
      <div className="column ">
        <h1 className="title">{state.userName}</h1>
        <h4 className="icon-text">
          <span className="icon">
            <i className="fa fa-birthday-cake fa-lg" aria-hidden="true"></i>
          </span>
          {" "}
          <span>
          Member for {timeago.format(state.createAt)}
          </span>
        </h4>

        
      </div>

      
    </div>

    <div className="columns">
      <div className="column is-3">
      <h1>Stats</h1>
      <br />
      <div className="card profile_card is-shadowless">
      <nav className="level is-mobile">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tweets</p>
      <p className="title">Reputation</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Following</p>
      <p className="title">123</p>
    </div>
  </div>
  
 
</nav>
        </div>
      </div>

      <div className="column">
      <h1>Stats</h1>
      <div className="card profile_card is-shadowless">
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default Profile