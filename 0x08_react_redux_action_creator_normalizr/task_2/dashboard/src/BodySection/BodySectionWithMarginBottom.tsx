import BodySection, { BodySectionPropsType } from "./BodySection"

const BodySectionWithMarginBottom = ({ title, children }: BodySectionPropsType) => {
    return (
        <div className='mb-10'>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    )
}
export default BodySectionWithMarginBottom