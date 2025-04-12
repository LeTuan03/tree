// MUI
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const STATS_DATA = [
	{
		id: 1,
		color: 'cuaternary.main',
		name: 'Total downloads',
		image: 'https://aurora.themewagon.com/assets/category_3-l8x2Bulg.webp',
	},
	{
		id: 2,
		color: 'tertiary.400',
		name: 'Total bookmarks',
		image: 'https://aurora.themewagon.com/assets/category_3-l8x2Bulg.webp',
	},
	{
		id: 3,
		color: 'secondary.main',
		name: 'Total uploads',
		image: 'https://aurora.themewagon.com/assets/category_3-l8x2Bulg.webp',
	},
	{
		id: 4,
		color: 'success.main',
		name: 'Total analytics',
		image: 'https://aurora.themewagon.com/assets/category_3-l8x2Bulg.webp',
	},
];

function StatsSection() {
	return (
		<section>
			<Grid container spacing={2}>
				{STATS_DATA.map((stat) => (
					<Grid item xs={12} sm={6} md={3} key={stat.id}>
						<StatSection statData={stat} />
					</Grid>
				))}
			</Grid>
		</section>
	);
}

function StatSection({ statData }) {
	const { name, image } = statData;

	return (
		<Card sx={{ padding: 0 }}>
			<Stack spacing={1} alignItems="center">
				<img src={image} alt='"start"' style={{ width: '100%', height: '200px' }} />
				<span>
					<Typography variant="body2" color="text.secondary">
						{name}
					</Typography>
				</span>
			</Stack>
		</Card>
	);
}

export default StatsSection;
