import Form from "./Form";

export default function Contact(){
	return(
		<div className="h-[100dvh] w-full bg-base-100 flex justify-evenly flex-col items-center">
			<h1 className="font-bold text-[1.5rem] lg:text-[2.5rem]">Contact me</h1>	
			<div>

				<Form />
			</div>
			
		</div>
		
	);
}