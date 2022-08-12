import { WithClassNameComponent } from '@utils/globalInterfaces'
import Container from './Container'

const Card = ({ children, className }: WithClassNameComponent) => (
	<Container
		className={
			className + ' bg-gray-50 dark:bg-gray-800 shadow-xl p-4 rounded-xl'
		}
	>
		{children}
	</Container>
)

export default Card
