import './Btn.css'

export default function Btn(props) {
    return (
        <button className={props.className}><img src={props.imgSrc} alt="" />{props.content}</button>
    )
}
