import "./type-badge.scss"
const TypeBadge = ({children,className = ""}) =>{
    return (
        <span className={`type-badge ${className}`}>{children}</span>
    )
}
export default TypeBadge