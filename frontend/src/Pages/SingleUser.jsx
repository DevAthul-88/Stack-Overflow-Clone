import React from 'react'
import ProfileAction from '../redux/Profile/action';
import Alert from '../Components/Alert'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Loader from '../Components/Loader/Loader'
import {Helmet} from 'react-helmet'
import * as timeago from 'timeago.js'

function SingleUser({id}) {
  const dispatch = useDispatch()
  const {loading , error , profile} = useSelector((state) => state.profile)

  useEffect(() => {
    dispatch(ProfileAction(id))
  },[])

  return (
    <div>
      {profile == null ? <div className='is-flex is-justify-content-center'>
        <Loader />
      </div> : (<div>
      {loading  ? (<div className='is-flex is-justify-content-center'>
        <Loader />
      </div>) : (<div>
        {error ? <Alert type={'is-danger'} trigger={true} message={error}/> : (<div>
          <Helmet>
        <title>{`User ${profile.userName} - Stack Overflow`}</title>
      </Helmet>

      <div className="columns">
        <div className="column is-2">
          <img
            src={`https://secure.gravatar.com/avatar/${profile._id}?s=164&d=identicon`}
            alt="profile"
            className="image is-128x128"
            title={`${profile.userName}`}
          />
        </div>
        <div className="column ">
          <h1 className="title">{profile.userName}</h1>
          <h4 className="icon-text">
            <span className="icon">
              <i className="fa fa-birthday-cake fa-lg" aria-hidden="true"></i>
            </span>{" "}
            <span>Member for {timeago.format(profile.createdAt)}</span>
          </h4>
        </div>
      </div>

      <div className="columns">
        <div className="column is-4">
          <h1>Stats</h1>
          <div className="card profile_card is-shadowless mt-4 p-4">
            <nav className="level  is-mobile">
              <div className="level-item">
                <div>
                  <p className="heading">Reputation</p>
                  <p className="is-size-5">{profile.reputation}</p>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <p className="heading">Questions</p>
                  <p className="is-size-5">0</p>
                </div>
              </div>
            </nav>

            <nav className="level is-mobile">
              <div className="level-item">
                <div>
                  <p className="heading">Answers</p>
                  <p className="is-size-5">{profile.reputation}</p>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="column">
          <h1>About</h1>
          <div className="card profile_card is-shadowless p-4 mt-4">
            {profile.about == null ? (
              <div>
                <h3 className="has-text-centered">
                This user hasn’t a about section. 
                </h3>
              </div>
            ) : (
              <h1>{profile.about}</h1>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h1>Posts</h1>

        <div className="card p-4 is-shadowless profile_card mt-4">
          <h1>This user hasn’t posted yet.</h1>
        </div>

      </div>
        </div>)}
      </div>)}
    </div>)}
    </div>
  )
}

export default SingleUser