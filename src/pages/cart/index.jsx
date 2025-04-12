import { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, Divider, Grid, Checkbox } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const initialCart = [
	{
		id: 1,
		title: 'VINGLI 56" Modern Sofa, Small Corduroy Couch Deep Seat',
		price: 259,
		originalPrice: 440,
		quantity: 1,
		image: 'https://content.cylindo.com/api/v2/4916/products/P0001-01/frames/4/P0001-01.webp?size=768&feature=UPHOLSTERY:JP041&feature=LEGS:JS482&feature=ARM%20TYPE:WIDE%20TRACK%20ARM',
		size: 'S',
		color: 'Black, White',
		remaining: 2,
		discountPercent: 40,
	},
	{
		id: 2,
		title: 'Fabric Recliner Chair Single Sofa',
		price: 109,
		originalPrice: 400,
		quantity: 1,
		image: 'https://content.cylindo.com/api/v2/4916/products/P0001-01/frames/4/P0001-01.webp?size=768&feature=UPHOLSTERY:JP041&feature=LEGS:JS482&feature=ARM%20TYPE:WIDE%20TRACK%20ARM',
		size: 'S',
		color: 'White Chocolate',
		remaining: 4,
		discountPercent: 20,
	},
];

export default function Cart() {
	const [cartItems, setCartItems] = useState(initialCart);
	const [coupon, setCoupon] = useState('TAKE100');
	const [discount, setDiscount] = useState(100);

	const handleQuantityChange = (id, delta) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === id
					? {
							...item,
							quantity: Math.max(1, item.quantity + delta),
					  }
					: item,
			),
		);
	};

	const handleRemove = (id) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const total = subtotal - discount;

	useEffect(() => {
		setDiscount(100);
	}, []);
	return (
		<Box p={4}>
			<Typography variant="h5" color="green" fontWeight="bold" mb={2}>
				Excellent choices!
			</Typography>

			<Box display="flex" gap={2} mb={2}>
				<Button variant="outlined">← Continue shopping</Button>
				<Button variant="outlined">♡ Move all items into wishlist</Button>
			</Box>
			<Divider />
			<Grid container spacing={2} mt={3}>
				<Grid item xs={12} md={8}>
					{cartItems.map((item) => (
						<Box key={item.id} p={2} mb={2} border="1px solid #eee" borderRadius={2}>
							<Grid container spacing={2} alignItems="center">
								<Grid item xs={1}>
									<Checkbox defaultChecked />
								</Grid>
								<Grid item xs={2}>
									<img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: 8 }} />
								</Grid>
								<Grid item xs={9}>
									<Typography fontWeight="bold">{item.title}</Typography>
									<Typography variant="caption" color="error">
										{item.remaining} remaining
									</Typography>
									<Typography variant="body2">
										<strong>Size:</strong> {item.size} &nbsp;&nbsp; <strong>Color:</strong>{' '}
										{item.color}
									</Typography>

									<Box display="flex" alignItems="center" gap={2} mt={1}>
										<Typography>
											<s style={{ color: '#999' }}>${item.originalPrice.toFixed(2)}</s>{' '}
											<strong>${item.price.toFixed(2)}</strong>
										</Typography>
										<Typography fontSize={12} color="green">
											Save {item.discountPercent}%
										</Typography>

										<Box display="flex" alignItems="center" ml={4}>
											<IconButton onClick={() => handleQuantityChange(item.id, -1)}>
												<RemoveIcon />
											</IconButton>
											<Typography>{item.quantity}</Typography>
											<IconButton onClick={() => handleQuantityChange(item.id, 1)}>
												<AddIcon />
											</IconButton>
										</Box>

										<Button color="error" onClick={() => handleRemove(item.id)}>
											Remove
										</Button>
									</Box>
									<Box display="flex" gap={2} mt={1}>
										<Button variant="text">Edit</Button>
										<Button variant="text">Move to wishlist</Button>
									</Box>
								</Grid>
							</Grid>
						</Box>
					))}
				</Grid>
				<Grid item xs={12} md={4}>
					<Box border="1px solid #eee" borderRadius={2} p={3}>
						<TextField
							fullWidth
							label="Enter a coupon or a reward code"
							value={coupon}
							onChange={(e) => setCoupon(e.target.value)}
							variant="outlined"
							sx={{ mb: 2 }}
						/>
						<Typography variant="body2" mb={1}>
							You have applied coupon <strong>{coupon}</strong> <br />
							Which saves you <strong>${discount.toFixed(2)}</strong>
						</Typography>

						<Divider sx={{ my: 2 }} />

						<Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
						<Typography>
							Shipping cost: <strong>TBA</strong>
						</Typography>
						<Typography variant="caption" color="text.secondary">
							You are only <strong>$20</strong> away from free shipping
						</Typography>
						<Typography color="error">Discount: -${discount.toFixed(2)}</Typography>

						<Typography variant="h6" mt={2}>
							Total: <strong>${total.toFixed(2)}</strong>
						</Typography>

						<Typography color="green" fontSize={14} mt={1}>
							Yay! You saved 30% in total
						</Typography>

						<Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
							Checkout as guest
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
