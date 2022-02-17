import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AskQuestion() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1 className="title">Ask a public question</h1>
      
      <div className="box">
        <label className='label'>Title</label>
        <label htmlFor="">Be specific and imagine you’re asking a question to another person</label>
        <input type="text" className="input mt-2 ques_input" placeholder='e.g How to center a div in css?'/>
      
      <label className="label mt-5">Question</label>
      <label>Include all the information someone would need to answer your question</label>
      <ReactQuill theme="snow" value={value} onChange={setValue} className="mt-2"/>
      
      <label className="label mt-4">Tags</label>
      <label>Add up to 5 tags to describe what your question is about</label>
      <input type="text" className="input mt-2 ques_input" placeholder="e.g (xml asp.net php html)"/>
      </div>
      <button className=" nav-btn">Submit</button>
      </div>
  )
}

export default AskQuestion