import { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card mb-3">
      <div className="card-header" role="tab">
        <button onClick={() => setIsOpen(!isOpen)} className="panel-title">
          <h6 className="mbr-fonts-style mb-0 display-7">{title}</h6>
          {isOpen ? (
            <span className="dashicons dashicons-arrow-up-alt2"></span>
          ) : (
            <span className="dashicons dashicons-arrow-down-alt2"></span>
          )}
        </button>
      </div>
      <div className={`panel-body ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
