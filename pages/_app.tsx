import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'antd/dist/antd.css'
const MyApp = ({ Component, pageProps }: AppProps) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Component {...pageProps} />
)

export default MyApp
