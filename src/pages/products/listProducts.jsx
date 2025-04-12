import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';
import { Avatar, Grid } from '@mui/material';

function ListProducts() {
	return (
		<Stack spacing={6}>
			<ChangePlanSection />
		</Stack>
	);
}

const plansData = [
	{
		type: 'Standard1',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '0.00',
		Icon: StarBorderIcon,
	},
	{
		type: 'Standard2',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '4.99',
		Icon: StarIcon,
		using: true,
	},
	{
		type: 'Standard3',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '29.99',
		Icon: StarsIcon,
	},
	{
		type: 'Standard4',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '0.00',
		Icon: StarBorderIcon,
	},
	{
		type: 'Standard5',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '4.99',
		Icon: StarIcon,
		using: true,
	},
	{
		type: 'Standard6',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '29.99',
		Icon: StarsIcon,
	},
	{
		type: 'Standard3',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '29.99',
		Icon: StarsIcon,
	},
	{
		type: 'Standard4',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '0.00',
		Icon: StarBorderIcon,
	},
	{
		type: 'Standard5',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '4.99',
		Icon: StarIcon,
		using: true,
	},
	{
		type: 'Standard6',
		name: 'T- CAP  2 Seat Cotton Sofa',
		cost: '29.99',
		Icon: StarsIcon,
	},
];

function ChangePlanSection() {
	return (
		<Card sx={{ width: '100%', m: 1 }}>
			<Grid container item>
				{plansData.map(({ cost, using, name }) => (
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
						py={3}
						sx={{
							cursor: 'pointer',
							bgcolor: 'background.paper',
							transition: '0.1s all',
							borderColor: 'primary.300',
							borderRadius: '10px',
							'&:hover': {
								boxShadow: '0px 10px 30px -15px #0003',
							},
							mb: 1,
							p: 1,
						}}
					>
						<Stack>
							<Avatar
								sx={{
									backgroundColor: 'transparent',
									borderRadius: 0,
									width: '100%',
									height: '240px',
								}}
								src="https://aurora.themewagon.com/assets/product_2-GhlVuMAM.webp"
								alt='"product"'
							/>
							<Typography variant="h3" align="center">
								${cost}
							</Typography>
							<Typography align="center" variant="subtitle1" textTransform="uppercase">
								{name}
							</Typography>
							{using && (
								<Typography align="center" variant="caption" color="success.main">
									Save 50%
								</Typography>
							)}
						</Stack>
					</Grid>
				))}
			</Grid>
		</Card>
	);
}

export default ListProducts;
