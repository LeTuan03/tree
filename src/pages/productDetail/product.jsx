import { useState } from 'react';
import { Grid, Typography, Button, Select, MenuItem, Tabs, Tab, Box, Paper, Card, Stack } from '@mui/material';

function Product() {
	const [tab, setTab] = useState(0);
	const [size, setSize] = useState('');
	const [color, setColor] = useState('');

	const handleAddToCart = () => {
		console.log('Đã thêm vào giỏ hàng!');
	};

	const handleBuyNow = () => {
		console.log('Tiến hành mua ngay!');
	};

	return (
		<Box p={4}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<img
						src="https://images.eq3.com/image-service/b626ed6f-2f09-46ab-b5fe-7ef266804cb3/Salema%20Sofa-Aspen%20Dusk-Onyx-Front-View.jpg_ORIGINAL.jpg"
						alt="Product"
						style={{ width: '100%', borderRadius: 8 }}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant="h4" gutterBottom>
						Tên sản phẩm
					</Typography>
					<Typography variant="h5" color="primary" gutterBottom>
						1.000.000₫
					</Typography>
					<Typography variant="body1" paragraph>
						Mô tả ngắn về sản phẩm này. Rất tuyệt vời, rất đẹp, nên mua liền tay!
					</Typography>
					<Box my={2}>
						<Typography variant="subtitle1">Màu sắc:</Typography>
						<Select value={color} onChange={(e) => setColor(e.target.value)} displayEmpty fullWidth>
							<MenuItem value="">Chọn màu</MenuItem>
							<MenuItem value="red">Đỏ</MenuItem>
							<MenuItem value="blue">Xanh</MenuItem>
							<MenuItem value="black">Đen</MenuItem>
						</Select>
					</Box>
					<Box my={2}>
						<Typography variant="subtitle1">Kích cỡ:</Typography>
						<Select value={size} onChange={(e) => setSize(e.target.value)} displayEmpty fullWidth>
							<MenuItem value="">Chọn size</MenuItem>
							<MenuItem value="S">S</MenuItem>
							<MenuItem value="M">M</MenuItem>
							<MenuItem value="L">L</MenuItem>
						</Select>
					</Box>
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={3}>
						<Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ flex: 1 }}>
							Thêm vào giỏ hàng
						</Button>
						<Button variant="outlined" color="error" onClick={handleBuyNow} sx={{ flex: 1 }}>
							Mua ngay
						</Button>
					</Stack>
				</Grid>
			</Grid>
			<Box mt={6}>
				<Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
					<Tab label="Mô tả" />
					<Tab label="Đánh giá" />
				</Tabs>
				<Card elevation={2} sx={{ p: 3, mt: 2 }}>
					{tab === 0 && (
						<Typography>
							Đây là mô tả chi tiết của sản phẩm. Bao gồm thông số kỹ thuật, chất liệu, v.v.
						</Typography>
					)}
					{tab === 1 && <Typography>Người dùng đánh giá: Sản phẩm tuyệt vời, rất đáng tiền!</Typography>}
				</Card>
			</Box>
		</Box>
	);
}

export default Product;
