import YouTubePlayer from "@/components/YouTubePlayer";
export default function CoursePage(){
  return(
    <div className="bg-white">
      <div className="flex justify-center text-2xl font-bold py-6">
        Organic chemistry I
      </div>
      <div className="pl-6 flex justify-start">
        <YouTubePlayer videoId="PmvLB5dIEp8" />
      </div>
    </div>
  )
}
