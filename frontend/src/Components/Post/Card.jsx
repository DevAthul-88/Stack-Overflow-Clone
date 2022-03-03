import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'wouter'


function Card({Data}) {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <div>
      {Data.map((e, index) => {
        return (
          <div key={index} className="">
            <h1 className="title is-size-5 mb-1">
              <Link href={`/question/${e._id}`} >
              {e.title}
              </Link>
            </h1>
            
             <div className="is-flex is-justify-content-space-between">
             {e.completed && (
               <div>
               <h4 className="subtitle   is-light" style={{fontSize:"10px"}}>
                {e.completed ? <div><span className="gray">answered on {e.createdAt}</span> {" "} </div>: null}
              </h4>
               </div>
             )}
             <div>
            {userInfo !== undefined && userInfo !== null ?  <Link href={userInfo._id == e.id ? "/profile" : `/users/${e.id}`} >
             <a className="blue_text" >
                {e.userName}
              </a>
             </Link> : <Link href={`/users/${e.id}`} >
             <a className="blue_text" >
                {e.userName}
              </a>
             </Link>}
             </div>
             </div>

            <div>
              <div className="is-flex is-justify-content-space-between mt-4">
                  <div >
                  <div className="is-flex ">
                {e.tags.map((es, index) => {
                  return <div className="tag post_tag is-medium" key={index}>
                    <Link href={`/tags/${es}`}>
                    {es}
                    </Link>
                  </div>;
                })}
              </div>
                  </div>
                  <div>
                      <div className="tag ml-2 is-medium">
                          {e.upVote.length} Votes
                      </div>
                      <div className="tag is-success is-light is-medium">
                          {e.answer.length} Answers
                      </div>
                      
                  </div>
              </div>
            </div>
            <hr className="hr_post"/>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
