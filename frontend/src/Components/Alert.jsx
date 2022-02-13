import React, { useState } from "react";

function Alert({ type, message, trigger }) {
  const [show, setShow] = useState(trigger);
  return (
    <React.Fragment>
      {show && (
        <article className={`message ${type}`}>
          <div className="message-header">
            <div>Alert</div>
            <button
              className="delete"
              aria-label="delete"
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="message-body">{message}</div>
        </article>
      )}
    </React.Fragment>
  );
}

export default Alert;
