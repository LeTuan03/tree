import { Outlet, useLocation } from 'react-router-dom';
import withScrollTopFabButton from '@hocs/withScrollTopFabButton';
import WidthPageTransition from '@hocs/widthPageTransition';

import { useSelector } from '@/store';
import { selectThemeConfig } from '@/store/theme/selectors';
// MUI
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import navItems from './navItems';

// Components
import Footer from '@/components/footer';
import MainHeader from '@/components/mainHeader';
import Navbar from '@/components/navbar';
import { Grid } from '@mui/material';

function FabButton() {
	return (
		<Fab size="small" aria-label="scroll back to top" color="primary">
			<KeyboardArrowUpIcon />
		</Fab>
	);
}
function AdminLayout({ container = 'lg', pb = true }) {
	const location = useLocation();
	const { pageTransitions } = useSelector(selectThemeConfig);
	const { stickyHeader } = useSelector(selectThemeConfig);

	return (
		<Box display="flex" minHeight="100vh" flexDirection="column">
			<MainHeader />
			<Grid container spacing={2}>
				<Grid item xs={12} md={2}>
					<Navbar navItems={navItems} position={stickyHeader ? 'sticky' : 'static'} layout="vertical" />
				</Grid>
				<Grid item xs={12} md={10}>
					<Box
						component="main"
						sx={{
							flex: '1 0 auto',
							...(pb && {
								pb: 5,
								pr: 1,
							}),
						}}
					>
						{pageTransitions ? (
							<WidthPageTransition location={location.key}>
								<Outlet />
							</WidthPageTransition>
						) : (
							<Outlet />
						)}
					</Box>
				</Grid>
			</Grid>
			{withScrollTopFabButton(FabButton)}
			<Footer />
		</Box>
	);
}

export default AdminLayout;
