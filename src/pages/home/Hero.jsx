import DashboardPreview from "../../components/landingpage/DashboardPreview";
import { ArrowRight, Play, Sparkles, Zap, GitBranch } from "lucide-react"
export default function Hero() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8 animate-in fade-in-50 slide-in-from-bottom-3 duration-1000">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">AI-Powered Documentation Generator</span>
            <div className="text-sm bg-blue-100 p-0 rounded-full text-blue-700 hover:bg-blue-100">
              New
            </div>
          </div>
        <h1 className="text-5xl  font-bold mb-4">
          Transform Your Code Into Documentation
        </h1>
        <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
          AutoDocGen uses advanced AI to automatically generate comprehensive,
          professional documentation from your GitHub, AWS, GCP, and Azure
          repositories. Save weeks of manual work with intelligent code analysis
          and beautiful formatting.
        </p>
        
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in-50 slide-in-from-bottom-6 duration-1000 delay-600">
            <button             
              className=" flex bg-black rounded-full text-white px-4 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "/login")}
            >
              Start Generating Docs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button              
              className="flex px-4 py-4 rounded-full text-lg font-semibold border-2 hover:bg-slate-50 group bg-transparent"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

      {/* Dashboard Preview */}
      <DashboardPreview />
    </div>
  );
}
