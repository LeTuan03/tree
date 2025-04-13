import { Link as RouterLink, useMatch } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export function NavItem({ Icon, title, showExpand = false, selected = false, layout = 'horizontal' }) {
	if (layout === 'vertical') {
		return (
			<Stack
				width="100%"
				direction="row"
				p={1.5}
				border={1}
				borderLeft={0}
				borderColor="border"
				alignItems="center"
				alignContent="center"
				justifyContent="center"
				spacing={0.5}
				title={title}
				sx={{
					justifyContent: showExpand && 'space-between',
				}}
			>
				<Box alignItems="center" sx={{ display: 'flex' }}>
					{Icon && (
						<Icon
							sx={{
								fontSize: 18,
								color: (theme) =>
									selected ? theme.palette.primary.contrastText : theme.palette.primary[300],
							}}
						/>
					)}
					<Typography
						pt={0.2}
						display={{
							xs: 'none',
							md: 'inline',
						}}
						textTransform="uppercase"
						fontWeight="500"
						fontSize="13px"
						color={selected ? 'primary.contrastText' : 'text.tertiary'}
						ml={0.5}
					>
						{title}
					</Typography>
				</Box>
				{showExpand && (
					<ExpandMoreIcon
						fontSize="small"
						sx={{
							color: selected ? 'primary.contrastText' : 'text.secondary',
							fontSize: 17,
						}}
					/>
				)}
			</Stack>
		);
	}

	return (
		<Stack
			width="100%"
			direction="row"
			p={1.5}
			border={1}
			borderLeft={0}
			borderColor="border"
			alignItems="center"
			alignContent="center"
			justifyContent="center"
			spacing={0.5}
			title={title}
		>
			{Icon && (
				<Icon
					sx={{
						fontSize: 18,
						color: (theme) => (selected ? theme.palette.primary.contrastText : theme.palette.primary[300]),
					}}
				/>
			)}
			<Typography
				pt={0.2}
				display={{
					xs: 'none',
					md: 'inline',
				}}
				textTransform="uppercase"
				fontWeight="500"
				fontSize="13px"
				color={selected ? 'primary.contrastText' : 'text.tertiary'}
			>
				{title}
			</Typography>
			{showExpand && (
				<ExpandMoreIcon
					fontSize="small"
					sx={{
						color: selected ? 'primary.contrastText' : 'text.secondary',
						fontSize: 17,
					}}
				/>
			)}
		</Stack>
	);
}

export function NavItemButton({ children, selected, sx, ...rest }) {
	return (
		<ButtonBase
			sx={{
				flexGrow: 1,
				...(selected && {
					backgroundImage: (theme) =>
						`linear-gradient(90deg, ${theme.palette.primary[300]} 0%,${theme.palette.primary.dark} 100% )`,
					// bgcolor: selected ? '#000' : 'transparent',
				}),
				'&:hover': {
					bgcolor: (theme) => alpha(theme.palette.primary.light, 0.1),
				},
				...sx,
			}}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
}
export function NavLink({ href, Icon, title, layout }) {
	const match = useMatch({
		path: href,
	});

	return (
		<NavItemButton
			selected={match}
			component={RouterLink}
			to={href}
			sx={{ width: layout === 'vertical' ? '100%' : null }}
		>
			<NavItem Icon={Icon} title={title} selected={match} layout={layout} />
		</NavItemButton>
	);
}

export default NavLink;
