export const ModeSelector = props => {
    const littleUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    return <div>
        <button onClick={()=>{props.onSelect(littleUrl)}}>32 элемента</button>
        <button onClick={()=>{props.onSelect(bigUrl)}}>1000 элементов</button>
    </div>
}