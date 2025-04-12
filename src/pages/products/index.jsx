import calcHeaderHeight from '@helpers/layoutHeight';

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import PageHeader from '@/components/pageHeader';
import ListProducts from './listProducts';
import TodoListCard from './todoListCard';
import { Pagination, Stack } from '@mui/material';

function Products() {
	return (
		<>
			<PageHeader title="Living Room">
				<Typography color="text.tertiary">85 results</Typography>
			</PageHeader>
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={4} md={3}>
					<Card
						sx={{
							position: 'sticky',
							top: `${calcHeaderHeight('nav', false) + 30}px`,
						}}
						component="aside"
					>
						<TodoListCard />
					</Card>
				</Grid>
				<Grid container item xs={12} sm={8} md={9} sx={{ p: 0 }}>
					<ListProducts />
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<Typography color="white">_</Typography>
				</Grid>
				<Grid container item xs={12} sm={8} md={9} sx={{ p: 0, display: 'flex', justifyContent: 'center' }}>
					<Pagination count={10} />
				</Grid>
			</Grid>
		</>
	);
}

export default Products;
