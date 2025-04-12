import useIntervalCounter from '@hooks/useIntervalCounter';
// MUI
import Typography from '@mui/material/Typography';
import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import { data1 } from '../componentsPages/carousel/data';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Slider from '@/components/slider';
import PopularProductsSection from './popularProductsSection';
import ProductCard from './productCard';

function Home() {
	return (
		<>
			<PageHeader title="Home">
				<Typography color="white">_</Typography>
			</PageHeader>
			<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
				<Stack spacing={2}>
					<LargeAutoSlider />
					<PopularProductsSection />
					<ProductCard />
				</Stack>
			</Card>
		</>
	);
}

function LargeAutoSlider() {
	const data = data1;
	const { count: activeSlideIndex } = useIntervalCounter({ max: data.length, time: 6000 });

	return (
		<Card type="none">
			<Slider activeSlideIndex={activeSlideIndex} dataLength={data.length}>
				{data.map((data, i) => (
					<Slider.Slide index={i} key={i}>
						<Box position="relative" maxHeight={500}>
							<Box
								component="img"
								sx={{
									height: '100%',
									width: '100%',
									objectFit: 'cover',
								}}
								src={data.imgPath}
								alt={data.label}
							/>
							<Typography
								variant="subtitle1"
								position="absolute"
								bottom={0}
								left={0}
								right={0}
								bgcolor="primary.main"
								color="primary.contrastText"
								p={2}
								sx={{
									transition: 'opacity 0.4s 0.4s',
									opacity: activeSlideIndex === i ? 1 : 0,
								}}
							>
								{data.label}
							</Typography>
							<Typography
								variant="subtitle1"
								position="absolute"
								left={0}
								width="30%"
								bgcolor="#0009"
								color="#fff"
								p={2}
								sx={{
									transition: 'all 0.5s 0.9s',
									opacity: activeSlideIndex === i ? 1 : 0,
									bottom: activeSlideIndex === i ? 55 : 0,
								}}
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa quae assumenda
								quod et saepe perspiciatis accusantium at quo tempora!
								{data.label}
							</Typography>
						</Box>
					</Slider.Slide>
				))}
			</Slider>
		</Card>
	);
}

export default Home;
