interface Props{
	title: string,
	points: string[],
}




export default function CourseCards({title,points}:Props){
	points.map((item, index) => (
		console.log(item)
	));
	return(
		<div className="bg-white rounded overflow-hidden shadow-lg">
  	<div className="px-6 py-4">
  	  <div className="font-extrabold text-2xl mb-2">{title}</div>
  	  <ul className="text-gray-700 text-base list-disc font-bold text-xl">
		{points.map((point,index) =>(
			<li key={index}>{point}</li>
		))}
  	  </ul>
	  </div>
 	 <div className="px-6 pt-4 pb-2">
  	  <button className="inline-block bg-cyan-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Add to cart</button>
  	</div>
	</div>	
    )
}



