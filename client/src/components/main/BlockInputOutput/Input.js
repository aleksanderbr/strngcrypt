import React, { useEffect } from 'react';
import math from '../helper/Math';
import { connect } from 'react-redux';
import { updateInput } from '../../../actions/updateInput';
import BlockheadButtons from './HeadButtons';
import AnalysisMethods from './analysis_methods_dropdowns';

const BlockInput = ({ updateInput, iocInput, input }) => {
  useEffect(() => {
    let textareaOutput = document.getElementById('userinput');
    math.autoresize(textareaOutput);
  });

  const update = (evt) => {
    if (evt.target.value === 'The quick brown fox jumps over the lazy dog.') {
      updateInput('');
    } else {
      updateInput(evt.target.value.replace(/(\r\n|\n|\r)/gm, ''));
    }
  };

  return (
    <div className='block' id='user_input'>
      <div className='block_head'>
        <div className='block_head_text'>Input</div>
        <BlockheadButtons />
      </div>
      <div className='block_body'>
        <div className='block_body_input'>
          <textarea
            name='userinput'
            id='userinput'
            value={input}
            onClick={(evt) => {
              update(evt);
              math.autoresize(evt);
            }}
            onChange={(evt) => {
              update(evt);
              math.autoresize(evt);
            }}
          />
        </div>
      </div>
      <AnalysisMethods menue={'input'} input={input} iocInput={iocInput} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.input,
  iocInput: state.ioc.input,
});

const mapActionsToProps = {
  updateInput: updateInput,
};

export default connect(mapStateToProps, mapActionsToProps)(BlockInput);