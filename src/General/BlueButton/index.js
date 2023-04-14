import "./index.css"

export function BlueButton(props) {
    return (
        <div className="blue-button">
            <props.Component className="blue-button-icon" />
            <span className="blue-button-text">{props.text}</span>
        </div>
    );
}