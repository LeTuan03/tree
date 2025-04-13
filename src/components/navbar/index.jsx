// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// Icons
import NavLinks from './navLinks';

function Navbar({ navItems, position = 'sticky', layout = 'horizontal' }) {
	return (
		<AppBar position={position} elevation={26} sx={{ borderLeft: 0, borderRight: 0 }}>
			<Box bgcolor="background.paper" py={2}>
				<Container maxWidth="lg">
					<NavLinks navItems={navItems} layout={layout} />
				</Container>
			</Box>
		</AppBar>
	);
}

export default Navbar;
