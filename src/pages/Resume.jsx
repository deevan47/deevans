import resume from "../assets/Deevankumar_Gaddala.pdf";
import backgroundVideo from "../assets/background.mp4";
import GradientLayout from "../components/color";


export default function Resume() {
  return (
    <GradientLayout>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video (plays in an infinite loop) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional dark overlay for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5" />

      {/* Foreground Content */}
      <div className="relative z-10 prose dark:prose-invert max-w-xl mx-auto text-center py-10 text-white">
  <h1>Resume</h1>
  <p className="text-white font-semibold">You can download my resume using the link below:</p>
  <a
    href={resume}
    className="inline-block mt-4 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition"
    download
  >
    Download Resume (PDF)
  </a>
</div>

    </div></GradientLayout>
  );
}
