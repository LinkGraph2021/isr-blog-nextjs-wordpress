import { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card mb-3">
      <div className="card-header" role="tab">
        <button onClick={() => setIsOpen(!isOpen)} className="panel-title">
          <h6 className="mbr-fonts-style mb-0 display-7">{title}</h6>
        </button>
      </div>
      {isOpen && <div className="panel-body">{children}</div>}
    </div>
  );
}

export default Accordion;
