import './Text.css'

export default function Text(props) {
    return (
        <div class='text-box'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}
