import { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import { Divider, Slider } from '@mui/material';
import CardHeaderNoUpperCase from '@/components/cardHeaderNoUpperCase';

function TodoListCard() {
	return (
		<>
			<CardHeaderNoUpperCase
				title="Availability"
				size="small"
				sx={{
					mb: 1,
				}}
			/>
			<FormGroup>
				<TodoItem text="In stock" defaultChecked />
				<TodoItem text="Low Stock" />
				<TodoItem text="Out of stock" defaultChecked />
			</FormGroup>
			<Divider sx={{ borderColor: 'primary.light', my: 2 }} />
			<CardHeaderNoUpperCase
				title="Material"
				size="small"
				sx={{
					mb: 1,
				}}
			/>
			<FormGroup>
				<TodoItem text="Cotton" defaultChecked />
				<TodoItem text="Upholstered" />
				<TodoItem text="Metal" defaultChecked />
				<TodoItem text="Wood" />
			</FormGroup>
			<Divider sx={{ borderColor: 'primary.light', my: 2 }} />
			<CardHeaderNoUpperCase
				title="Price"
				size="small"
				sx={{
					mb: 1,
				}}
			/>
			<Slider
				defaultValue={8000}
				aria-label="Default"
				valueLabelDisplay="on"
				step={1000}
				marks={[{ value: 10000, label: '10k' }]}
				min={0}
				max={10000}
				sx={{
					'& .MuiSlider-thumb': {
						height: 25,
						width: 25,
						backgroundColor: 'primary.main',
						border: '7px solid #fff',
						boxShadow: 2,
						'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
							boxShadow: 4,
						},
					},
					mt: 4,
				}}
			/>
		</>
	);
}

function TodoItem(props) {
	const { defaultChecked = false, text, color = 'primary' } = props;
	const [checked, setChecked] = useState(defaultChecked);
	return (
		<FormControlLabel
			control={
				<Checkbox
					onChange={(e) => setChecked(e.target.checked)}
					defaultChecked={defaultChecked}
					value={checked}
					size="small"
					sx={{
						p: 0.5,
						px: 1,
					}}
					color={color}
				/>
			}
			label={text}
		/>
	);
}

export default TodoListCard;
