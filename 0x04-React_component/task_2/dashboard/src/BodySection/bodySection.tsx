export type BodySectionPropsType = {
    children: JSX.Element
}
const BodySection = ({children}: BodySectionPropsType) => {
    return (
        <div>
            <h2>test</h2>
            {children}
        </div>
    )
}
export default BodySection