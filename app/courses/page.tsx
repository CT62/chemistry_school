import './courses.css'
import Navbar from '@/components/Navbar'
import CourseCards from '@/components/CourseCards'
export default function Courses(){
	return(
	<>
	<div className="pb-20">
		<Navbar />
	</div>
	<div className="py-10 text-white font-extrabold text-5xl flex justify-center">Courses</div>
	
	<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
	</>
	)
}
