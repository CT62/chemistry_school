'use client'
import './courses.css'
import Navbar from '@/components/Navbar'
import CourseCards from '@/components/CourseCards'
import { MyContextProvider } from '@/app/Context';
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Courses(){
	return(
	<>
  <MyContextProvider>
	<div className="pb-20">
		<Navbar />
	</div>
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 -space-x-52 ">
            <div className="blur-[106px] h-32 bg-cyan-500"></div>
            <div className="blur-[106px] h-56 bg-cyan-500"></div>
            <div className="blur-[106px] h-32 bg-cyan-500"></div>
        </div>
	<div className="relative py-16 text-white font-bold text-5xl flex justify-center">Courses</div>
	<div className="container mx-auto">
	<div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4" >
  <CourseCards fakeprice="125" price="75" time="6" title="Organic chemistry I" points={["intro to organic chemistry","hydrocarbons: alkanes","reactions of alkanes","structural isomers and IUPAC","chloroalkanes","alkenes","aliphatic compounds","aromatic compounds."]} titledesc='' reviewscount='19'reviews={[]} />
	<CourseCards fakeprice="175" price="125" time="10" title="Organic chemistry II" points={["alcohols","reactions of alcohols","aldehydes","ketones","carboxylic acids","esters","solubility and boiling points of homologous series","organic synthetic routes"]} titledesc='' reviewscount='16' reviews={[]} />
	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part I" points={["Atomic structure/the atom","electronic structure of the atom","ionic and covalent bonding and","stoichiometry"]} titledesc='Theory and exam questions/calculations' reviewscount='21' reviews={[]} />
	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part II/Experiment course part I" points={["acid and bases","acid-base titrations/volumetric analysis","redox volumetric","oxidation and reduction"]} titledesc='Calculation course only.' reviewscount='16'reviews={[]} />
	<CourseCards fakeprice="125" price="75" time="6" title="6th year course on fuels and thermochemistry" points={[""]} titledesc='Theory and exam questions/calculations.' reviewscount='12' reviews={[]} />
	<CourseCards fakeprice="175" price="125" time="10" title="Experiment course part II" points={["all experiments, theory and exam questions."]} titledesc='External experiment teacher.' reviewscount='11' reviews={[]} />
		<CourseCards fakeprice="85" price="35" time="3" title="Ultimate H1 Guide" points={["what comes up every year ","question by questions ","chapter by chapter ","organic chemistry essentials/must knows before sitting the LC exam"]} titledesc='' reviewscount='18' reviews={["Lena is an absolute gem when it comes to teaching chemistry. Her knack for breaking down complex topics and the genuine support she offers to students make her an outstanding educator. Truly grateful for her guidance!","Lena excels in chemistry education, not just due to her expertise but also for the remarkable support she offers students. Her skill in fostering a positive and effective learning environment is truly commendable.","Lena's online chemistry classes encourage a growth mindset. The organized curriculum, paired with Lena's teaching, creates an atmosphere that supports both academic and personal growth. This platform is great for those exploring online learning, providing a focus on growth-oriented education."]} />
	</div>
	</div>
	<div className="pt-14">
	<div className="bg-white p-6">
		<div className="text-center text-black font-bold text-3xl pb-4">Whats included in each course:</div>
			<li className="sm:flex sm:justify-center pb-2.5">Notes</li>
			<li className="sm:flex sm:justify-center pb-2.5">Exam questions & solutions</li>
			<li className="sm:flex sm:justify-center pb-2.5">Unlimited access to 1-on-1 questions and solutions by emailing/messaging me directly</li>
			<li className="sm:flex sm:justify-center pb-2.5">On demand access to recordings for the duration of your Leaving Cert</li>
			<li className="sm:flex sm:justify-center pb-2.5">Free video solutions to material covered outside of the course content</li>
			<li className="sm:flex sm:justify-center pb-2.5">Tips on how to get a H1</li>
	</div>
</div>
</MyContextProvider>
	</>
	)
}



