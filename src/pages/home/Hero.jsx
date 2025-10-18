import DashboardPreview from "../../components/landingpage/DashboardPreview";
export default function Hero() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm font-semibold tracking-wider mb-4">
          AI-Powered Documentation Generator
        </p>
        <h1 className="text-5xl  font-bold mb-4">
          Transform Your Code Into Documentation
        </h1>
        <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
          AutoDocGen uses advanced AI to automatically generate comprehensive,
          professional documentation from your GitHub, AWS, GCP, and Azure
          repositories. Save weeks of manual work with intelligent code analysis
          and beautiful formatting.
        </p>
        <button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2">
          Start Generating Docs
        </button>
      </div>

      {/* Dashboard Preview */}
      <DashboardPreview />
    </div>
  );
}
