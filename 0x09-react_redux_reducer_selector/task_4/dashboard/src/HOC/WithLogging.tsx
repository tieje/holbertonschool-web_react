// Reference
// https://github.com/ChrisDobby/ts-higher-order-components/blob/master/src/components/withThings.tsx
import React, { useEffect } from 'react'
function WithLogging<T>(OriginalComponent: React.ComponentType<T>, props?: T): JSX.Element {
    const NewComponent = ({ props }: { props?: T }) => {
        useEffect(() => {
            console.log('Component' + OriginalComponent.displayName + ' is mounted')
        }, [])
        return (<OriginalComponent {...props as T} />)
    }
    NewComponent.displayName = `WithLogging(${OriginalComponent.displayName})`
    return (<NewComponent props={props} />)
    // HOC as a class
    /*
    return (
        class extends React.Component<T> {
            async componentDidMount() {
                console.log(OriginalComponent.displayName)
            }
            render() {
                return (
                    <OriginalComponent {...this.props as T} />
                )
            }
        }
    )*/
}
export default WithLogging