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
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
<CourseCards title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry"]} />
	
	</div>
	</div>

	</>
	)
}
