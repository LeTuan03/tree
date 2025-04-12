// MUI
import Typography from '@mui/material/Typography';
import PageHeader from '@/components/pageHeader';
import Card from '@mui/material/Card';
import ProductDetailPage from './productDetailPage';

function ProductDetail() {
	return (
		<>
			<PageHeader title="Product Detail">
				<Typography color="white">_</Typography>
			</PageHeader>
			<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
				<ProductDetailPage />
			</Card>
		</>
	);
}

export default ProductDetail;
