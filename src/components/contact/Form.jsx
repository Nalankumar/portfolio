import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

    return(
		<form id="form" ref={form} onSubmit={sendEmail} className="form-control mx-[5vw] md:mx-[20vw]">
			<label className="label">Name</label>
			<input type="text" name="user_name" placeholder="Lily" className="grow input input-bordered"/>
			<label className="label">Email</label>
			<input type="text" name="user_email" placeholder="lily@gmail.com" className="grow input input-bordered"/>
			<label className="label">Message</label>
			<textarea name="message" placeholder="Write your message here..." className="textarea textarea-bordered textarea-sm w-full max-w-full"></textarea>
  			<button className="btn my-[10px]" type="submit" form="form"> Concact me</button>
		</form>
	);
}