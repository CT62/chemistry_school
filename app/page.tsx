import Navbar from '../components/Navbar'
import CallToAction from '../components/CallToAction'
import Profile from '../components/Profile'

export default function Home() {
  return (
	<>
  <div className="pb-10">
	<Navbar />
  </div>
	<CallToAction />
	<Profile />
	</>
  )
}
