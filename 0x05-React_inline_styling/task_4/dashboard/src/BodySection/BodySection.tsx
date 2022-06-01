import { BODY_SECTION_TEST_IDS } from "../Variables/TestIds"

export type BodySectionPropsType = {
    title?: string
    children?: JSX.Element
}
const BodySection = ({ title, children }: BodySectionPropsType) => {
    return (
        <div
            data-testid={BODY_SECTION_TEST_IDS.bodySection}
        >
            <h2>{title}</h2>
            {children}
        </div>
    )
}
export default BodySection