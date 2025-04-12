import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CategoryDialog({ open, handleClose }) {
	const handleSubmit = async () => {
		handleClose();
	};
	return (
		<Dialog
			maxWidth="lg"
			fullWidth
			open={open}
			onClose={handleClose}
			PaperProps={{
				component: 'form',
				onSubmit: (event) => {
					event.preventDefault();
					handleSubmit();
					// const formData = new FormData(event.currentTarget);
					// const formJson = Object.fromEntries(formData.entries());
					// const email = formJson.email;
					// console.log(email);
				},
			}}
		>
			<DialogTitle>Add/Update</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					required
					margin="dense"
					id="name"
					name="email"
					label="Email Address"
					type="email"
					fullWidth
					variant="standard"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button type="submit">Save</Button>
			</DialogActions>
		</Dialog>
	);
}
