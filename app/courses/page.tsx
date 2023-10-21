import './courses.css'
import Navbar from '@/components/Navbar'
import CourseCards from '@/components/CourseCards'
export default function Courses(){
	return(
	<>
	<div className="pb-20">
		<Navbar />
	</div>
	<div className="py-16 text-white font-bold text-5xl flex justify-center">Courses</div>
	<div className="container mx-auto">
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards time="10" title="5th year revision course part II/Experiment course part I (calculation course only)" points={["acid and bases, ","acid-base titrations/volumetric analysis, ","redox volumetric,","oxidation and reduction"]} />
<CourseCards title="5th year revision course part II/Experiment course part I (calculation course only)" points={["acid and bases, ","acid-base titrations/volumetric analysis, ","redox volumetric,","oxidation and reduction"]} />
<CourseCards title="Experiment course part II (external experiment teacher)" points={["all experiments, theory and exam questions."]} />	
	</div>
	</div>

	</>
	)
}
