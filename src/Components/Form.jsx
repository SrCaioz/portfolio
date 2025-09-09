import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Form() {
	const [Value, setValue] = useState({
		Name: "",
		Email: "",
		Mensagem: "",
	});
	const [ValidInputButton, setValidInputButton] = useState(false);

	const HandleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				"https://formsubmit.co/d621facd9e7daca79cb711670136daa5",
				{
					...Value,
					_captcha: false,
					_template: "table",
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			toast.success("Mensagem enviada com sucesso!")
			setValue({Name: "", Email: "", Mensagem: ""})
		} catch (error) {
			toast.error("Mensagem não foi enviada.")
		}
	};

	const HandleChangeForm = (e) => {
		setValue({
			...Value,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		setValidInputButton(
			Value.Name.trim() !== "" &&
				Value.Email.trim() !== "" &&
				Value.Mensagem.trim() !== ""
		);
	}, [Value.Name, Value.Email, Value.Mensagem]);

	return (
		<div className="w-full md:max-w-2xl">
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={localStorage.getItem("@dark-mode-react-tailwind:theme-1.0.0")}
				transition={Bounce}
			/>

			<form onSubmit={HandleSubmit}>
				<Input
					type={"text"}
					ACom={"off"}
					label={"Nome"}
					variant={"filled"}
					Nome={"Name"}
					value={Value.Name}
					handleChange={HandleChangeForm}
				/>

				<Input
					type={"email"}
					ACom={"on"}
					label={"Email"}
					variant={"filled"}
					Nome={"Email"}
					value={Value.Email}
					handleChange={HandleChangeForm}
				/>

				<Input
					type={"text"}
					ACom={"off"}
					id={"filled-multiline-static"}
					label={"Mensagem"}
					Nome={"Mensagem"}
					rows={4}
					multiline={true}
					variant={"filled"}
					value={Value.Mensagem}
					handleChange={HandleChangeForm}
				/>

				<button
					type="submit"
					className="bg-blue w-full p-2 disabled:opacity-60 rounded-md hover:shadow-md hover:shadow-black active:scale-90 ease-in-out duration-100 cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none dark:text-white"
					disabled={!ValidInputButton}
				>
					Enviar!
				</button>
			</form>
		</div>
	);
}
