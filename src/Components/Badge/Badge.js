import "./Badge.css";
export default function Badge(props){
    return(
        <>
            <div className={`custom-badge ${props.customBadgeName}`}>
                <p>{props.text}</p>
            </div>
        </>
    )
}