import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Interesting from '../Pages/Tabs/Tags/Interesting'
import Featured from "../Pages/Tabs/Tags/Featured";
import Newest from "../Pages/Tabs/Newest";
import { useState } from 'react'

function TagsQues({id}) {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState("newest");

  const Main = () => {
    if(current === "newest"){
      return <Newest Id={id}/>
    }
    else if(current === "interesting"){
      return <Interesting />
    }
    else if(current === "featured"){
      return <Featured />
    }
    
  }

  return (
    <div className="top">
    <h1 className="title has-text-weight-bold">Questions tagged [{id}]</h1>

    <div className="card">
      <div className="post-links">
        <div className="is-flex is-justify-content-space-between p-4 b-b">
          <a
            href="#current"
            className={current == "newest" ? "tab-active" : ""}
            onClick={() => setCurrent('newest')}
          >
            Newest
          </a>
          <a
            href="#featured"
            className={current == "featured" ? "tab-active" : ""}
            onClick={() => setCurrent('featured')}
          >
            Featured
          </a>
          
          <a
            href="#interesting"
            className={current == "interesting" ? "tab-active" : ""}
            onClick={() => setCurrent('interesting')}
          >
            Interesting
          </a>
        </div>
      </div>
      <div className="p-4 mt-5">
       <Main />
      </div>
    </div>
  </div>
  )
}

export default TagsQues