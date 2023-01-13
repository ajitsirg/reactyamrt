import axios from "axios";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/AuthContext";
const useRegistrationFormValidation = () => {
	const {setUser} = useContext(UserContext);
	const [passErr, setPassErr] = useState("");
	const [phoneErr, setPhoneErr] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const baseUrl = new URL("http://13.127.79.250");
	function handleFormSubmit(e) {
		e.preventDefault();
		const first_name = e.target.name.value;
		const email = e.target.email.value;
		const phone = e.target.phone.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPass.value;
		const data = {username: phone, email, password, confirm_password: confirmPassword, first_name: first_name, last_name: first_name};
		if (phone.includes("+", " ", "(", ")", "-")) {
			setPhoneErr("Please don't use  space or any special characters!");
		} else if (phone.length !== 10) {
			setPhoneErr("Your number must be 10 digit! ");
		} else {
			setPhoneErr("");
		}
		if (password === confirmPassword) {
			setPassErr("");
		} else {
			setPassErr("Password didn't match");
		}
		axios
			.post(baseUrl.origin.concat("/auth/registration/"), data)
			.then((res) => {
				if (res.status === 201) {
					setLoading(false);
					setUser(data);
					navigate("/verify-otp");
				}
			})
			.catch((err) => console.log(err));
	}
	return {phoneErr, loading, passErr, handleFormSubmit};
};

export default useRegistrationFormValidation;
