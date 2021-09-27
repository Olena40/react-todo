


import React from "react";
import { FcPlus } from "react-icons/fc";


function Input({ handleInput, handleSubmit, value }) {
	return (
		<form id="form">
			<div>
				<input
					id="inp"
					type="text"
					value={value}
					onChange={handleInput}
					style={{border: '2px solid', width: '17%', height: '15px'}}
				/>
				<button
					type="submit"
					style={{ backgroundColor: "green" }}
					value={value}
					onClick={handleSubmit}
				>
					<FcPlus size={12}> </FcPlus>
				</button>
			</div>

	
		</form>
	);


export default Input;
