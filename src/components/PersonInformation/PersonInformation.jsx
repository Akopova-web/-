import './PersonInformation.css'
export const PersonInformation = (props) => {
    let item = props.row;
    return <div className='personInformation'>
        <p>Выбран пользователь <b>{item.firstName + ' ' + item.lastName}</b></p>
        <p>Описание:</p>
        <textarea>
            {item.description}
        </textarea>
        <p>Адрес проживания: <b>{item.address.streetAddress}</b></p>
        <p>Город: <b>{item.address.city}</b></p>
        <p>Провинция/штат: <b>{item.address.state}</b></p>
        <p>Индекс: <b>{item.address.zip}</b></p>
    </div>
}