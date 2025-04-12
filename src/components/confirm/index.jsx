import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({
	open,
	handleClose,
	content = 'Bạn có chắc chắc muốn xóa bản ghi này?',
	title = 'Xác Nhận',
}) {
	return (
		<Dialog
			maxWidth="xs"
			fullWidth
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{content}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Disagree</Button>
				<Button onClick={handleClose} autoFocus>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
}
