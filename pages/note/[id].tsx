import { supabase } from '@utils/supabase'
import { GetServerSidePropsContext } from 'next'

const note = ({ noteData }: { noteData: any }) => (
	<div>note content: {noteData.content}</div>
)

export const getServerSideProps = async ({
	params,
}: GetServerSidePropsContext) => {
	const { data, error } = await supabase
		.from('notes')
		.select('content,created_at')
		.eq('id', params?.id)
	if (error) throw error

	return {
		props: {
			noteData: data[0],
		},
	}
}

export default note
