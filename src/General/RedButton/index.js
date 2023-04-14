import "./index.css"

export function RedButton(props) {
    return (
        <div className="red-button">
            <props.Component className="red-button-icon" />
            <span className="red-button-text">{props.text}</span>
        </div>
    );
}