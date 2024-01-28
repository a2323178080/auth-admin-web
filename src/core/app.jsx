import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'
import { AuthProvider } from '@/core/hooks/use-auth'
import { Routes } from '@/core/routes'
import { HttpProvider } from '@/core/hooks/http/use-http'
import '@/core/style/app.scss'
import '@/core/lib/dev-log'
import moment from 'moment'
import 'moment/dist/locale/zh-tw'
import '../../src/i18n'

moment.locale('zh-tw')

export const App = () => {
	return (
		<Router>
			<AuthProvider>
				<HttpProvider>
					<Routes />
				</HttpProvider>
			</AuthProvider>
		</Router>
	)
}

const root = createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>
)
