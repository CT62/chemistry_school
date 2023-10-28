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
	<CourseCards fakeprice="175" price="125" time="10" title="Organic chemistry II" points={["alcohols,","reactions of alcohols,","aldehydes,","ketonesm,","carboxylic acids,","esters,","solubility and boiling points of homologous series,","organic synthetic routes."]} />
	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part II/Experiment course part I (calculation course only)" points={["acid and bases, ","acid-base titrations/volumetric analysis, ","redox volumetric,","oxidation and reduction."]} />
	<CourseCards fakeprice="125" price="75" time="6" title="6th year course on fuels and thermochemistry (Theory and exam questions/calculations)" points={[""]} />
	<CourseCards fakeprice="175" price="125" time="10" title="Experiment course part II (external experiment teacher)" points={["all experiments, theory and exam questions."]} />
	<CourseCards fakeprice="125" price="75" time="6" title="Organic chemistry I" points={["intro to organic chem","hydrocarbons: alkanes","reactions of alkanes","structural isomers and IUPAC","chloroalkanes","alkenes","aliphatic compounds","aromatic compounds."]} />
	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part I (Theory and exam questions/calculations)" points={["Atomic structure/the atom, ","electronic structure of the atom, ","ionic and covalent bonding and ","stoichiometry."]} />
	<CourseCards fakeprice="85" price="35" time="3" title="Ultimate H1 Guide" points={["what comes up every year,","question by questions,","chapter by chapter,","organic chemistry essentials/must knows before sitting the LC exam!"]} />
	</div>
	</div>
	<div className="pt-14">
	<div className="bg-white p-6">
		<div className="text-black font-bold text-3xl pb-4 flex justify-center ">Whats included in each course: </div>
			<li className="flex justify-center pb-2.5">Notes</li>
			<li className="flex justify-center pb-2.5">Exam questions & solutions</li>
			<li className="flex justify-center pb-2.5">Unlimited access to 1-on-1 questions and solutions by emailing/messaging me directly</li>

			<li className="flex justify-center pb-2.5">On demand access to recordings for the duration of your Leaving Cert</li>
			<li className="flex justify-center pb-2.5">Free video solutions to material covered outside of the course content</li>
			<li className="flex justify-center pb-2.5">Tips on how to get a H1</li>
	
	</div>
	</div>
	</>
	)
}

