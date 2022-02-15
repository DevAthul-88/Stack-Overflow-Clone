import React from 'react'
import ProfileAction from '../redux/Profile/action';
import Alert from '../Components/Alert'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Loader from '../Components/Loader/Loader'

function SingleUser({id}) {
  const dispatch = useDispatch()
  const {loading , error} = useSelector((state) => state.profile)

  useEffect(() => {
    dispatch(ProfileAction(id))
  },[])

  return (
    <div>
      {loading  ? (<div className='is-flex is-justify-content-center'>
        <Loader />
      </div>) : (<div>
        {error ? <Alert type={'is-danger'} trigger={true} message={error}/> : (<div>
          
        </div>)}
      </div>)}
    </div>
  )
}

export default SingleUser