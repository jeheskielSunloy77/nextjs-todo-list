import { WithClassNameComponent } from '@utils/globalInterfaces'

const Container = ({ className, children }: WithClassNameComponent) => (
	<div className={className + ' container mx-auto'}>{children}</div>
)

export default Container
