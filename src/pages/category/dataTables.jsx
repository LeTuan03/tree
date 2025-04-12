import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import CardHeader from '@/components/cardHeader';
import DataTable from '@/components/dataTable';

import employeesData from '@/_mocks/employees';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import CategoryDialog from './CategoryDialog';
import { useState } from 'react';
import AlertDialog from '@/components/confirm';

function DataTables() {
	return <ScrolDataTableSection />;
}

const getHeadCells = [
	{
		id: 'id',
		numeric: false,
		disablePadding: false,
		label: 'STT',
	},
	{
		id: 'name',
		numeric: false,
		disablePadding: false,
		label: 'Nombre',
	},
	{
		id: 'position',
		numeric: false,
		disablePadding: false,
		label: 'Position',
	},
	{
		id: 'email',
		numeric: false,
		disablePadding: false,
		label: 'Email',
	},
	{
		id: 'salary',
		numeric: true,
		disablePadding: false,
		label: 'Salary',
	},
	{
		id: 'options',
		numeric: true,
		disablePadding: false,
		label: 'Opciones',
	},
];
function ScrolDataTableSection() {
	const [state, setState] = useState({
		openDialog: false,
		openAlert: false,
		item: null,
	});

	const handleOpenDialog = () => {
		setState({ ...state, openDialog: true });
	};

	const handleOpenAlert = () => {
		setState({ ...state, openAlert: true });
	};

	const handleClose = () => {
		setState({ ...state, openDialog: false, openAlert: false });
	};
	return (
		<>
			<Card component="section" type="section">
				<CardHeader>
					<Button variant="contained" disableElevation endIcon={<AddIcon />} onClick={handleOpenDialog}>
						Add new
					</Button>
				</CardHeader>
				<DataTable
					tableContainerProps={{ sx: { height: '50vh', overflow: 'auto' } }}
					stickyHeader
					headCells={getHeadCells}
					rows={employeesData.slice(0, 27)}
					emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
					render={(row) => (
						<TableRow hover tabIndex={-1} key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row?.position}</TableCell>
							<TableCell align="left">{row?.email}</TableCell>
							<TableCell align="right">${row.salary.toLocaleString()}</TableCell>
							<TableCell align="right">
								<Tooltip title="Edit" arrow>
									<IconButton
										aria-label="edit"
										color="warning"
										size="small"
										sx={{ fontSize: 2 }}
										onClick={(e) => {
											e.stopPropagation();
											handleOpenDialog();
										}}
									>
										<ModeEditOutlineOutlinedIcon fontSize="medium" />
									</IconButton>
								</Tooltip>

								<Tooltip title="Delete" arrow>
									<IconButton
										aria-label="edit"
										color="error"
										size="small"
										sx={{ fontSize: 2 }}
										onClick={(e) => {
											e.stopPropagation();
											handleOpenAlert();
										}}
									>
										<DeleteOutlineOutlined fontSize="medium" />
									</IconButton>
								</Tooltip>
							</TableCell>
						</TableRow>
					)}
				/>
			</Card>
			{state.openDialog && <CategoryDialog open={state.openDialog} handleClose={handleClose} />}
			{state.openAlert && <AlertDialog open={state.openAlert} handleClose={handleClose} />}
		</>
	);
}

export default DataTables;
