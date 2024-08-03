export default function Form(){
    return(
		<div id="contact" className="form-control mx-[5vw] md:mx-[20vw]">
			<label className="label">Name</label>
			<input t ype="text" className="grow input input-bordered"/>
			<label className="label">Email</label>
			<input t ype="text" className="grow input input-bordered"/>
			<label className="label">Message</label>
			<textarea placeholder="Write your message here..." className="textarea textarea-bordered textarea-sm w-full max-w-full"></textarea>
  			<button className="btn my-[10px]">Contact me</button>
		</div>
	);
}