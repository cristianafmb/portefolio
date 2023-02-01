import React, { useState } from 'react';
import { send } from 'emailjs-com';

import '../../styles/app.scss';

const About = ({ data }) => {
	const [ toSend, setToSend ] = useState({
		from_name: '',
		from_email: '',
		message: '',
		from_company: ''
	});

	const [ sucess, setSuccess ] = useState(false);
	const [ error, setError ] = useState(false);

	var errorsToShow = Array();

	function checkValues() {
		if (toSend.from_company === '') {
			errorsToShow.push(data.inputs.company);
		}
		if (toSend.from_name === '') {
			errorsToShow.push(data.inputs.name);
		}
		if (toSend.from_email === '') {
			errorsToShow.push(data.inputs.email);
		}
		if (toSend.message === '') {
			errorsToShow.push(data.inputs.message);
		}
		return errorsToShow.length;
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if (checkValues() > 0) {
			setError(true);
		} else {
			send('service_jn4uu0s', 'template_5ql8slh', toSend, 'NdTcXF9EUKq2BkALT')
				.then((response) => {
					setSuccess(true);
					console.log('SUCCESS!', response.status, response.text);
				})
				.catch((err) => {
					setError(true);
					console.log('FAILED...', err);
				});
		}
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<div className="margin-container  fullscreen ml-auto mr-auto">
			{/**<div className="  m-auto width-80 fullscreen container-form">
			</div>*/}

			<section className="bg3">
				<div className="container">
					<form>
						<h2 className="dsMedium white title text-center mb-5 "> {data.title}</h2>
						<h2 className="dsMedium white title text-center mb-5 "> {data.subtitle}</h2>
						<div className="grid container-two-columns">
							<input
								type="text"
								name="from_name"
								placeholder={data.inputs.name}
								value={toSend.from_name}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="from_company"
								placeholder={data.inputs.company}
								value={toSend.from_company}
								onChange={handleChange}
							/>
						</div>

						<input
							type="email"
							name="from_email"
							placeholder={data.inputs.email}
							value={toSend.from_email}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="message"
							placeholder={data.inputs.message}
							value={toSend.message}
							onChange={handleChange}
						/>
						<div class="container-btn-submit">
							<a href="#" class="button" type="submit" onClick={onSubmit}>
								<div class="button__line" />
								<div class="button__line" />
								<span class="button__text dsMedium">{data.btnText}</span>
								<div class="button__drow1" />
								<div class="button__drow2" />
							</a>
						</div>
					</form>

					<div className="drops">
						<div className="drop drop-1" />
						<div className="drop drop-2" />
						<div className="drop drop-3" />
						<div className="drop drop-4" />
						<div className="drop drop-5" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
