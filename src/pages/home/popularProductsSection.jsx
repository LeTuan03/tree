import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import CardHeader from '@/components/cardHeader';
import StatsSection from './statsSection';

function PopularProductsSection() {
	return (
		<section>
			<Header />
			<StatsSection />
		</section>
	);
}
function Header() {
	return (
		<CardHeader
			size="large"
			title="Popular categories"
			sx={{ paddingTop: '50px' }}
			subtitle={
				<>
					<CalendarMonthOutlinedIcon fontSize="small" /> January 01, 2023 - January 31, 2023
				</>
			}
		>
			<Stack direction="row" alignItems="center" spacing={1}>
				<Button variant="contained" size="medium" color="primary">
					Top Rated Products
				</Button>
				<Button variant="contained" size="medium" color="primary">
					View All Products
				</Button>
			</Stack>
		</CardHeader>
	);
}

export default PopularProductsSection;
