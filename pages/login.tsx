import { Button, Form, Input } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { NextPage } from 'next'

const Login: NextPage = () => {
	const signIn = (formData: FormData) => {
		console.log(formData)
	}

	return (
		<div className='sm:flex h-screen'>
			<div className='hidden sm:block sm:w-[35%] bg-gray-100 centerAll p-8 space-y-4'>
				<h1 className='text-2xl font-bold'>
					Deserunt mollit ad velit excepteur aliquip nisi labore velit in sunt
					commodo fugiat et esse.
				</h1>
				<p>
					Consectetur elit eiusmod velit voluptate proident adipisicing pariatur
					incididunt nulla. Sunt dolore officia consectetur dolore sit reprehenderit
					pariatur eu excepteur nisi id consectetur sint. Ut pariatur laboris
					pariatur veniam non irure anim labore Lorem id deserunt.
				</p>
			</div>
			<div className='centerAll sm:block sm:w-[65%] m-auto p-8 sm:p-48'>
				<LoginForm signIn={signIn} />
			</div>
		</div>
	)
}

const LoginForm = ({ signIn }: { signIn: (formData: FormData) => void }) => {
	const [form] = Form.useForm()

	return (
		<Form onFinish={signIn} form={form}>
			<Form.Item name='email'>
				<Input
					type='email'
					placeholder='Email'
					required
					className='block w-full px-4 py-2 mt-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
				/>
			</Form.Item>
			<Form.Item name='password'>
				<Input
					type='password'
					placeholder='Password'
					required
					className='block w-full px-4 py-2 mt-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
				/>
			</Form.Item>
			<ButtonGroup className='flex gap-1'>
				<Button
					type='primary'
					htmlType='submit'
					className='w-full px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
				>
					Sign In With Email
				</Button>
				<Button
					type='primary'
					htmlType='submit'
					className='w-full px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
				>
					Sign In With Google
				</Button>
			</ButtonGroup>
		</Form>
	)
}

interface FormData {
	email: string
	password: string
}

export default Login
