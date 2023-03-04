import React from "react";

export const Services = () => {


return (
	<div className="services">
		<h1>Services</h1>

	</div>
);
};

export const ServicesOne = () => {
	const [formStatus, setFormStatus] = React.useState('Send')
	const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, cust_add, cust_loc,contact_n, phone, email, comment } = e.target.elements
    let conFom = {
		name:  name.value,
		cust_add:  cust_add.value,
		cust_loc:  cust_loc.value,
		contact_n:  contact_n.value,
		phone:  phone.value,
		email:  email.value,
		comment:  comment.value
    }
    console.log(conFom)
  }
return (
	<div className="services">
		{/* <h1>Customers</h1> */}
		<div className="container mt-5">
            <h2 className="mb-3">Add a Customer</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                <label className="form-label" htmlFor="name">
                    Customer Name
                </label>
                <input className="form-control" type="text" id="name" required />
                </div>
				<div className="mb-3">
                <label className="form-label" htmlFor="cust_add">
                    Customer Address
                </label>
                <input className="form-control" type="text" id="cust_add" required />
                </div>
				<div className="mb-3">
                <label className="form-label" htmlFor="cust_loc">
                    Customer Location
                </label>
                <input className="form-control" type="text" id="cust_loc" required />
                </div>
				<div className="mb-3">
                <label className="form-label" htmlFor="contact_n">
                    Contact Name
                </label>
                <input className="form-control" type="text" id="contact_n" required />
                </div>
				<div className="mb-3">
                <label className="form-label" htmlFor="phone">
                    Phone Number
                </label>
                <input className="form-control" type="text" id="phone" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="comment">
                    Comments
                </label>
                <textarea className="form-control" id="comment" required />
                </div>
                <button className="btn btn-danger" type="submit">
                {formStatus}
                </button>
            </form>
        </div>
	</div>
);
};

export const ServicesTwo = () => {
	const [formStatus, setFormStatus] = React.useState('Send')
	const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
}
return (
	<div className="services">
		<div className="container mt-5">
            <h2 className="mb-3">Add a Service</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                <label className="form-label" htmlFor="name">
                    Customer Name
                </label>
                <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Contact 
                </label>
                <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="message">
                    Service Date
                </label>
                <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit">
                {formStatus}
                </button>
            </form>
        </div>
	</div>
);
};

export const ServicesThree = () => {
return (
	<div className="services">
		<h1>Reports</h1>
		
	</div>
);
};
