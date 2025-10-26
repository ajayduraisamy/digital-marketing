import ResumeViewer from "@/components/ResumeViewer";
export const metadata = {
  title: "Resume | Nelson Vaz",
  description:
    "Explore the professional resume of Nelson Vaz, a passionate Embedded Firmware Developer.",
  robots: "index, follow",
  canonical: "https://nelson-vaz-p.vercel.app/resume",
  openGraph: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resume",
    url: "https://nelson-vaz-p.vercel.app/resume",
    
    description:
      "Explore the professional resume of Nelson Vaz, a passionate Embedded Firmware Developer.",
  },
};
export default function Resume() {
  return (
    <div className="grid w-full pt-16 md:pt-5 overflow-auto bg-background place-items-center">
      <ResumeViewer
        file="/resume/Nelson-vaz.pdf"
        downloadName="Nelson-vaz-Resume"
      />
    </div>
  );
}
