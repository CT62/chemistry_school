'use client'
import './courses.css'
import Navbar from '@/components/Navbar'
import CourseCards from '@/components/CourseCards'

export default function Courses(){
	return(
	<>
	<div className="pb-20">
		<Navbar />
	</div>
  <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 -space-x-52">
            <div className="blur-[106px] h-32 bg-cyan-500"></div>
            <div className="blur-[106px] h-56 bg-cyan-500"></div>
            <div className="blur-[106px] h-32 bg-cyan-500"></div>
  </div>
	<div className="relative py-16 text-white font-bold text-5xl flex justify-center">Courses</div>
	<div className="container mx-auto">
	<div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4" >
  <CourseCards fakeprice="125" price="75" time="6" title="Organic chemistry I" points={["intro to organic chemistry","hydrocarbons: alkanes","reactions of alkanes","structural isomers and IUPAC","chloroalkanes","alkenes","aliphatic compounds","aromatic compounds."]} reviewsCount='19'reviews={["Chemistry School of Growth has been a crucial support system for me. The tips provided have made a big impact on my study routine.","Lena Kadri's online sessions are a game-changer. I can't believe I'm saying this, but I'm starting to enjoy chemistry. Lena keeps it simple, and it makes a huge difference."]} stars={4.5}
  names={["Barret Croft","Dara Murphy"]} />

	<CourseCards fakeprice="175" price="125" time="10" title="Organic chemistry II" points={["alcohols","reactions of alcohols","aldehydes","ketones","carboxylic acids","esters","solubility and boiling points of homologous series","organic synthetic routes"]} reviewsCount='16' reviews={["I've found Lena's online sessions at Chemistry School of Growth to be instrumental in my comprehension of challenging chemistry concepts. The explanations are clear, and Lena's approach instills a sense of confidence in navigating complex material.","Props to Lena for making chem less of a headache. Her online tutoring is helping me survive this class. No fancy stuff, just good teaching that makes sense."]} names={["Lily Walker","David Wilson"]} stars={4.0} />

	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part I" points={["Atomic structure/the atom","electronic structure of the atom","ionic and covalent bonding and","stoichiometry"]} titledesc='Theory and exam questions/calculations' reviewsCount='21' reviews={[]} names={[]} stars={5.0}/>

	<CourseCards fakeprice="175" price="125" time="10" title="5th year revision course part II/Experiment course part I" points={["acid and bases","acid-base titrations/volumetric analysis","redox volumetric","oxidation and reduction"]} titledesc='Calculation course only.' reviewsCount='16'reviews={["I'm so grateful for the Chemistry School of Growth. The study tips have been a lifesaver during exam season."]} names={["Winnifred Mark"]} stars={3.5} />

	<CourseCards fakeprice="125" price="75" time="6" title="6th year course on fuels and thermochemistry" points={[""]} titledesc='Theory and exam questions/calculations.' reviewsCount='12' reviews={["Lena's guidance has been instrumental in my academic success. The Chemistry School of Growth is the secret weapon every chemistry student needs!","Chemistry School of Growth has a unique way of breaking down complex topics, making them easier to grasp. Lena's teaching is great.","Chemistry School of Growth is more than a grinds service; it's a supportive community that encourages growth and understanding in chemistry."]} names={["Ethan Smith","Matt Williams","Sinead O'Connor"]} stars={4.0} />

	<CourseCards fakeprice="175" price="125" time="10" title="Experiment course part II" points={["all experiments, theory and exam questions."]} titledesc='External experiment teacher.' reviewsCount='11' reviews={["Lena's teaching at Chemistry School of Growth is both approachable and comprehensive. The clarity she brings to complex topics has been a game changer for me."]} names={["Sophia Slade"]} stars={4.5} />

		<CourseCards fakeprice="85" price="35" time="3" title="Ultimate H1 Guide" points={["what comes up every year ","question by questions ","chapter by chapter ","organic chemistry essentials/must knows before sitting the LC exam"]}  reviewsCount='18' reviews={["Lena is an absolute gem when it comes to teaching chemistry. Her knack for breaking down complex topics and the genuine support she offers to students make her an outstanding educator. Truly grateful for her guidance!","Lena excels in chemistry education, not just due to her expertise but also for the remarkable support she offers students. Her skill in fostering a positive and effective learning environment is truly commendable.","Lena's online chemistry classes encourage a growth mindset. The organized curriculum, paired with Lena's teaching, creates an atmosphere that supports both academic and personal growth. This platform is great for those exploring online learning, providing a focus on growth-oriented education."]} names={["Sadhbh MacMathan","Sigmund Park","Dana Bourke"]} stars={4.5}/>

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
	</>
	)
}



