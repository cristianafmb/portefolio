import React, { useState } from 'react';
import { send } from 'emailjs-com';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../../styles/app.scss';

const About = ({ data }) => {
	const [toSend, setToSend] = useState({
		from_name: null,
		from_email: null,
		message: null,
		from_company: null
	});

	const [messageToShow, setMessageToShow] = useState([]);
	const [errorsToShow, setErrorsToShow] = useState([]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	var aux = []

	function checkValues() {

		setErrorsToShow([])
		
		aux = []

		if (!toSend.from_company) {
			aux.push(data.inputs.company)
		}
		if (!toSend.from_name) {
			aux.push(data.inputs.name)
		}
		if (!toSend.from_email) {
			aux.push(data.inputs.email)
		}
		if (!toSend.message) {
			aux.push(data.inputs.message)
		}
		setErrorsToShow(aux);
		return aux.length;
	}

	var lengthErrors
	
	const onSubmit = (e) => {
		e.preventDefault()
		setErrorsToShow([])
		lengthErrors = checkValues()
		console.log(lengthErrors)

		if (lengthErrors > 0) {
			setShow(true);
			if (lengthErrors == 1) {
				setMessageToShow(data.error.singular)
			} else {
				setMessageToShow(data.error.plural)
			}
		} else {
			setShow(true);
					setMessageToShow(data.sucess.text)
					setErrorsToShow([])

			send('service_jn4uu0s', 'template_5ql8slh', toSend, 'NdTcXF9EUKq2BkALT')
				.then((response) => {
					setShow(true);
					setMessageToShow(data.sucess.text)
					setErrorsToShow([])
					setToSend({
						from_name: '',
						from_email: '',
						message: '',
						from_company: ''
					})
				})
				.catch((err) => {
					setShow(true);
					setMessageToShow(data.sucess.text)
					setErrorsToShow([])
					setToSend({
						from_name: '',
						from_email: '',
						message: '',
						from_company: ''
					})
				});
		}
	}


	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>

				</Modal.Header>

				<Modal.Body>
					<h3>{messageToShow}</h3>
					<p>
						{errorsToShow.join(', ')}
					</p>
				</Modal.Body>

			</Modal>
			<div className="margin-container  fullscreen ml-auto mr-auto">

				<section className="bg3">
					<div className="container">
						<form id="form">
							<h2 className="dsMedium white title text-center mb-5 "> {data.title}</h2>
							<h2 className="dsMedium white title text-center mb-5 "> {data.subtitle}</h2>
							<div className="grid container-two-columns">
								<input
									type="text"
									name="from_name"
									placeholder={data.inputs.name}
									value={toSend.from_name}
									onChange={handleChange}
									required
								/>
								<input
									type="text"
									name="from_company"
									placeholder={data.inputs.company}
									value={toSend.from_company}
									onChange={handleChange}
									required
								/>
							</div>

							<input
								type="email"
								name="from_email"
								placeholder={data.inputs.email}
								value={toSend.from_email}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="message"
								placeholder={data.inputs.message}
								value={toSend.message}
								onChange={handleChange}
								required
							/>
							<div className="container-btn-submit">
								<a href="#" className="button" type="submit" onClick={onSubmit}>
									<div className="button__line" />
									<div className="button__line" />
									<span className="button__text dsMedium">{data.btnText}</span>
									<div className="button__drow1" />
									<div className="button__drow2" />
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
		</>
	);
};

export default About;
