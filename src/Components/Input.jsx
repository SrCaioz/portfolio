import { TextField } from "@mui/material";

export default function Input({ type, ACom, id, label, variant, Nome, value, handleChange, rows, multiline, error, helperText }) {
	return (
		<>
			<TextField
                type={type}
				autoComplete={ACom}
				id={id}
				label={label}
				variant={variant}
				name={Nome}
                value={value}
                onChange={handleChange}
				rows={rows}
				multiline={multiline}
				className="w-full dark:bg-white rounded-md"
				margin="normal"
				error={error}
				helperText={helperText}
			/>
		</>
	);
}
