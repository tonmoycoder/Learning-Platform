import React from 'react';
import Pdf from "react-to-pdf";


const ref = React.createRef();


const ReactPdf = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Download Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1 className='mt-5'>Download course guideline in PDF 🙄</h1>
      </div>
    </div>
  );
};

export default ReactPdf;