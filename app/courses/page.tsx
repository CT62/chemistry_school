'use client'
import Navbar from '@/components/Navbar'
import CourseCards from '@/components/CourseCards'

export default function Courses(){
	return(
	<div className="bg-[#1e42b0]">
	<div className="pb-20">
		<Navbar />
	</div>
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 -space-x-52">
            <div className="blur-[106px] h-32 bg-cyan-300"></div>
            <div className="blur-[106px] h-56 bg-cyan-400"></div>
            <div className="blur-[106px] h-32 bg-cyan-300"></div>
  </div>
	<div className="relative py-16 font-bold text-5xl flex justify-center text-white">Courses</div>
	<div className="container mx-auto">
	<div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4" >
  <CourseCards fakeprice="125" price="75" time="6" title="Organic chemistry I" points={["intro to organic chemistry","hydrocarbons: alkanes","reactions of alkanes","structural isomers and IUPAC","chloroalkanes","alkenes","aliphatic compounds","aromatic compounds."]} reviewsCount='19' stars={4.5} courseID="1" />

    <CourseCards fakeprice="175" price="125" time="10" title="Organic chemistry II" points={["alcohols","reactions of alcohols","aldehydes","ketones","carboxylic acids","esters","solubility and boiling points of homologous series","organic synthetic routes"]} reviewsCount='16' stars={4.0} courseID="2" />

	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part I" points={["Atomic structure/the atom","electronic structure of the atom","ionic and covalent bonding and","stoichiometry"]} titledesc='Theory and exam questions/calculations' reviewsCount='21' stars={5.0} courseID="3"/>

	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part II/Experiment course part I" points={["acid and bases","acid-base titrations/volumetric analysis","redox volumetric","oxidation and reduction"]} titledesc='Calculation course only.' reviewsCount='16' stars={4.5} courseID="4" />

	<CourseCards fakeprice="125" price="75" time="6" title="6th year course on fuels and thermochemistry" points={[""]} titledesc='Theory and exam questions/calculations.' reviewsCount='12' stars={5.0} courseID="5" />

	<CourseCards fakeprice="175" price="125" time="10" title="Experiment course part II" points={["all experiments, theory and exam questions."]} titledesc='External experiment teacher.' reviewsCount='11' stars={4.5} courseID="6" />

		<CourseCards fakeprice="85" price="35" time="3" title="Ultimate H1 Guide" points={["what comes up every year ","question by questions ","chapter by chapter ","organic chemistry essentials/must knows before sitting the LC exam"]}  reviewsCount='18' stars={4.5} courseID="7"/>

	</div>
	</div>
  <div className="pt-24">
	<div className="pt-12 pb-4 bg-white">
		<div className="text-center text-black font-bold text-3xl pb-4">Whats included in each course:</div>
			<li className="sm:flex sm:justify-center pb-2.5">Notes</li>
			<li className="sm:flex sm:justify-center pb-2.5">Exam questions & solutions</li>
			<li className="sm:flex sm:justify-center pb-2.5">Unlimited access to 1-on-1 questions and solutions by emailing/messaging me directly</li>
			<li className="sm:flex sm:justify-center pb-2.5">On demand access to recordings for the duration of your Leaving Cert</li>
			<li className="sm:flex sm:justify-center pb-2.5">Free video solutions to material covered outside of the course content</li>
			<li className="sm:flex sm:justify-center pb-2.5">Tips on how to get a H1</li>
	</div>
	</div>
  </div>
	)
}



