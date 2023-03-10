import { Cover, TableWrapper } from './index.styles';

function Table({ tableKey, customClass, addMainInput, centerInput, main }) {
  const onChangeMainInput = ({ target }) => {
    addMainInput(target.dataset.index, target.innerText);
  };

  const onClickSpan = (/** @type {ClickEvent}*/ e) => {
    if (e.target === e.currentTarget) {
      e.target.querySelector('span').focus();
    }
  };

  const onPreventTab = (e) => {
    if (e.key === 'Tab') e.preventDefault();
  };

  const onPreventShiftTab = (e) => {
    if (e.key === 'Tab' && e.shiftKey) e.preventDefault();
  };

  const onPreventStylePaste = (e) => {
    const pasted = { content: '' };
    if (window.clipboardData && window.clipboardData.getData) {
      pasted.content = window.clipboardData.getData('Text');
    } else if (e.clipboardData && e.clipboardData.getData) {
      pasted.content = e.clipboardData.getData('text/plain');
    }

    e.target.textContent = pasted.content;
    e.preventDefault();

    return false;
  };

  return (
    <TableWrapper centerInput={centerInput} main={main}>
      <Cover main={main} centerInput={centerInput} />
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input first-first'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={0}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 1' : ''}
            onKeyDown={onPreventShiftTab}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input first-second'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={1}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 2' : ''}
          />
        </div>

        <div onClick={onClickSpan} className='hide-input first-third'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={2}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 3' : ''}
          />
        </div>
      </div>
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input second-first'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={3}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 4' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input second-second'>
          <span
            contentEditable={main ? true : false}
            onPaste={onPreventStylePaste}
            data-index={8}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            readOnly={main ? false : true}
            data-placeholder={main ? 'main goal' : `subgoal ${tableKey}`}
          >
            {centerInput}
          </span>
        </div>
        <div onClick={onClickSpan} className='hide-input second-third'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={4}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 5' : ''}
          />
        </div>
      </div>
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input third-first'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={5}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 6' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input third-second'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={6}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 7' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input third-third'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={7}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : null}
            autoComplete='off'
            data-placeholder={main ? 'subgoal 8' : ''}
            onKeyDown={onPreventTab}
          />
        </div>
      </div>
    </TableWrapper>
  );
}

export default Table;
