import { Route } from 'react-router-dom'

export const RouteWrapper = ({
	component: Component,
	layout: Layout,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props => (
				<Layout {...props}>
					<Component {...props} />
				</Layout>
			)}
		/>
	)
}
