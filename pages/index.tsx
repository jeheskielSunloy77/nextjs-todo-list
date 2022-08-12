import Container from '@components/Container'
import { supabase } from '@utils/supabase'
import { Button, List } from 'antd'

const App = ({ notes }: { notes: Notes[] }) => (
	<Container className='p-10'>
		<Button type='primary'>New Note</Button>
		<List
			className='demo-loadmore-list'
			itemLayout='horizontal'
			dataSource={notes}
			renderItem={(item) => (
				<List.Item
					actions={[
						<Button key='openButton' type='primary'>
							Open
						</Button>,
						<Button key='deleteButton' type='primary' danger>
							Delete
						</Button>,
					]}
				>
					<List.Item.Meta description={item.content.substring(0, 100) + '...'} />
				</List.Item>
			)}
		/>
	</Container>
)
interface Notes {
	id: number
	content: string
	createdAt: string
}

// make a getserversideprops function
export const getServerSideProps = async () => {
	const { data, error } = await supabase.from('notes').select('*')
	if (error) throw error

	return {
		props: {
			notes: data,
		},
	}
}

export default App
