import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import PageHeader from '@/components/pageHeader';

import DataTabled from './dataTables';

function CategoryPage() {
	return (
		<>
			<PageHeader title="Manage Category">
				<Typography color="white">_</Typography>
			</PageHeader>

			<Stack spacing={5}>
				<DataTabled />
			</Stack>
		</>
	);
}

export default CategoryPage;
