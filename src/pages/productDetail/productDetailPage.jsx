import {
	Box,
	Typography,
	Grid,
	Button,
	MenuItem,
	Select,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	IconButton,
	CardMedia,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const images = [
	'https://images.eq3.com/image-service/b626ed6f-2f09-46ab-b5fe-7ef266804cb3/Salema%20Sofa-Aspen%20Dusk-Onyx-Front-View.jpg_ORIGINAL.jpg',
	'https://content.cylindo.com/api/v2/4916/products/31127-S3/frames/4/31127-S3.webp?size=768&feature=UPHOLSTERY:JI728&feature=LEGS:H1083',
	'https://images.eq3.com/image-service/b626ed6f-2f09-46ab-b5fe-7ef266804cb3/Salema%20Sofa-Aspen%20Dusk-Onyx-Front-View.jpg_ORIGINAL.jpg',
	'https://images.eq3.com/image-service/b626ed6f-2f09-46ab-b5fe-7ef266804cb3/Salema%20Sofa-Aspen%20Dusk-Onyx-Front-View.jpg_ORIGINAL.jpg',
	'https://images.eq3.com/image-service/b626ed6f-2f09-46ab-b5fe-7ef266804cb3/Salema%20Sofa-Aspen%20Dusk-Onyx-Front-View.jpg_ORIGINAL.jpg',
];

export default function ProductDetailPage() {
	const [currentImage, setCurrentImage] = useState(0);
	const handleAddToCart = () => {};
	const handlePrev = () => {
		setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};
	const handleNext = () => {
		setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};
	return (
		<Box p={4}>
			<Grid container spacing={4}>
				{/* Left: Image Gallery */}
				<Grid item xs={12} md={6}>
					<Box position="relative">
						<CardMedia
							component="img"
							image={images[currentImage]}
							alt="Product Image"
							sx={{ borderRadius: 2, height: 500, objectFit: 'cover' }}
						/>
						<IconButton
							onClick={handlePrev}
							sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)' }}
						>
							<ArrowBack />
						</IconButton>
						<IconButton
							onClick={handleNext}
							sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)' }}
						>
							<ArrowForward />
						</IconButton>
					</Box>

					{/* Thumbnails */}
					<Box mt={2} display="flex" gap={1} overflow="auto" pb={1}>
						{images.map((img, i) => (
							<CardMedia
								key={i}
								component="img"
								image={img}
								onClick={() => setCurrentImage(i)}
								sx={{
									width: 80,
									height: 80,
									borderRadius: 1,
									cursor: 'pointer',
									border: currentImage === i ? '2px solid #1976d2' : '1px solid #ccc',
								}}
							/>
						))}
					</Box>
				</Grid>
				{/* Right: Product Info */}
				<Grid item xs={12} md={6}>
					<Typography variant="h5" fontWeight="bold">
						SALEMA SOFA - ONLINE EXCLUSIVE
					</Typography>
					<Box display="flex" gap={2} alignItems="center" mt={1}>
						<Typography variant="h6" color="primary">
							$1,469.40
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
							$2,449.00
						</Typography>
						<Typography variant="body2" color="error">
							Save $979.60 (40% off)
						</Typography>
					</Box>

					{/* Dropdown */}
					<Typography mt={2} fontWeight="medium">
						COVER OPTION
					</Typography>
					<Select fullWidth defaultValue="Aspen Dusk" sx={{ my: 1 }}>
						<MenuItem value="Aspen Dusk">Aspen Dusk</MenuItem>
						<MenuItem value="Onyx">Onyx</MenuItem>
					</Select>

					{/* Quantity + Wishlist + Buttons */}
					<Box mt={2} display="flex" gap={2}>
						<Select defaultValue={1} sx={{ width: 80 }}>
							{[1, 2, 3, 4].map((qty) => (
								<MenuItem key={qty} value={qty}>
									{qty}
								</MenuItem>
							))}
						</Select>

						<Button fullWidth variant="contained" color="primary" onClick={handleAddToCart}>
							Add To Cart
						</Button>

						<IconButton>
							<FavoriteBorderIcon />
						</IconButton>
					</Box>

					{/* Accordions */}
					<Box mt={3}>
						{['Details', 'Measurements', 'Care Instructions', 'Shipping', 'Warranty'].map((label, i) => (
							<Accordion key={i}>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography>{label}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
