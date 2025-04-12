import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

// Icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';

import CardHeader from '@/components/cardHeader';

function ProductCard() {
	return (
		<CardHeader size="large" title="Featured products just for you" sx={{ paddingTop: '50px' }}>
			<Grid container spacing={7} alignItems="stretch" alignContent="stretch" mb={5} mt={0}>
				<Grid item xs={12} sm={6} md={4}>
					<PriceCard icon={StarBorderIcon} type="Basico" price="0.0" main />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<PriceCard icon={StarIcon} type="Basico" price="5.99" main />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<PriceCard icon={StarsIcon} type="Basico" price="23.99" main />
				</Grid>
			</Grid>
		</CardHeader>
	);
}

function PriceCard(props) {
	const { type, icon: Icon, price, upgradeAccount, main } = props;

	return (
		<Stack
			component={Card}
			height="100%"
			p={3}
			direction="column"
			spacing={2}
			sx={{
				overflow: 'visible',
				transition: 'all 0.5s',
				position: 'relative',
				border: main ? 2 : 0,
				borderColor: main ? 'primary.main' : 'border',
				'&:hover': {
					transform: 'translateY(-10px)',
				},
			}}
		>
			<Box
				height={80}
				width={80}
				position="absolute"
				top={-10}
				left={-10}
				sx={{
					display: 'grid',
					placeItems: 'center',
					overflow: 'hidden',
					'&::before': {
						position: 'absolute',
						content: "'Best Value'",
						fontSize: 8,
						width: '150%',
						height: 30,
						display: 'grid',
						placeItems: 'center',
						textTransform: 'uppercase',
						color: 'cuaternary.contrastText',
						fontWeight: 'bold',
						bgcolor: 'cuaternary.main',
						transform: 'rotate(-45deg) translateY(-15px)',
						letterSpacing: '.1em',
						boxShadow: 27,
					},
					'&::after': {
						content: "''",
						position: 'absolute',
						bottom: 0,
						left: 0,
						zIndex: -1,
						width: 10,
						height: 10,
						bgcolor: 'cuaternary.dark',
						boxShadow: (theme) => `71px -70px ${theme.palette.cuaternary.dark}`,
					},
				}}
			/>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Avatar
					sx={{
						backgroundColor: 'cuaternary.main',
					}}
				>
					<Icon />
				</Avatar>
				<Typography
					fontSize="20px"
					textAlign="center"
					fontWeight="400"
					borderBottom={2}
					borderColor="secondary.main"
				>
					{type}
				</Typography>
			</Stack>
			<Stack alignItems="center">
				<Avatar
					sx={{
						backgroundColor: 'transparent',
						borderRadius: 0,
						width: '100%',
						height: '100%',
					}}
					src="https://aurora.themewagon.com/assets/product_2-GhlVuMAM.webp"
					alt='"product"'
				/>
			</Stack>

			<Typography textAlign="center" variant="h1" component="h5">
				${price}
			</Typography>
			<Divider variant="middle" />
			<Button variant="contained" onClick={upgradeAccount}>
				Add to card
			</Button>
		</Stack>
	);
}

export default ProductCard;
