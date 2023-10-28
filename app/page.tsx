import Navbar from '../components/Navbar'
import CallToAction from '../components/CallToAction'
import Profile from '../components/Profile'

export default function Home() {
  return (
	<>
	<Navbar />
	<div className="py-10">
		<CallToAction />
	</div>
	<Profile />
	</>
  )
}
