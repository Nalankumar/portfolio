import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form(){
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
        	
			toast.success('Your email has been sent successfully!', {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});
        },
        (error) => {
        	
			toast.error('Your email failed to send! Kindly send it again...', {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});
        },
      );
  };

    return(
    	<div>
    		<form id="form" ref={form} onSubmit={sendEmail} className="form-control mx-[5vw] md:mx-[20vw]">
			<label className="label">Name</label>
			<input type="text" name="user_name" placeholder="Lily" required className="grow input input-bordered"/>
			<label className="label">Email</label>
			<input type="email" name="user_email" placeholder="lily@gmail.com" required className="grow input input-bordered"/>
			<label className="label">Message</label>
			<textarea name="message" placeholder="Write your message here..." required className="textarea textarea-bordered textarea-sm w-full max-w-full"></textarea>
  			<button className="btn my-[10px]" type="submit" form="form"> Contact me </button>	
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition: Bounce
				/>
			</form>
			
    	</div>
		
	);
}