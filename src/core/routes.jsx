import { lazy } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { withTitle } from '@/core/components/routes/with-funcs/with-title'
import { withSuspenseRoute } from '@/core/components/routes/with-suspense-route'
import { RouteWrapper } from '@/core/components/routes/route-wrapper'
import { LayoutFallback } from '@/core/components/fallback/layout-fallback'
import { CardWrap } from '@/core/components/card-wrap'
import { withSuspensePrivateRoute } from '@/core/components/routes/with-suspense-private-route'
import { Layout } from '@/core/components/layout'
import { withSideKey } from '@/core/components/routes/with-funcs/with-side-key'

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>

			<RouteWrapper
				path={'/login'}
				exact
				component={withSuspenseRoute(
					lazy(() => import('@/pages/login')),
					LayoutFallback,
				)}
				layout={CardWrap}
			/>
			<RouteWrapper
				path={'/agents'}
				exact
				component={withSuspenseRoute(
					lazy(() => import('@/pages/agents')),
					LayoutFallback,
				)}
				layout={Layout}
			/>
			<RouteWrapper
				path={'/authroizationList/:id'}
				exact
				component={withSuspenseRoute(
					lazy(() => import('@/pages/authroizationList')),
					LayoutFallback,
				)}
				layout={Layout}
			/>
			<RouteWrapper
				path={'/quantityInformation/:id'}
				exact
				component={withSuspenseRoute(
					lazy(() => import('@/pages/quantity-information')),
					LayoutFallback,
				)}
				layout={Layout}
			/>

			<RouteWrapper
				component={withSuspenseRoute(
					lazy(() => import('@/core/components/not-found')),
					LayoutFallback,
					withTitle('找不到頁面'),
				)}
				layout={CardWrap}
			/>

		</Switch>

	)
}
