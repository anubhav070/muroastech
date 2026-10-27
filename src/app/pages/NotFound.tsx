import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#2A478C] to-[#8C52FF] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-2xl"
      >
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            404
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-blue-100 mb-10">
          Looks like this page took a wrong turn in the code. Let's get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-8">
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white text-lg px-8"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <Link to="/services" className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
            <div className="font-semibold mb-1">Services</div>
            <div className="text-blue-200">Explore our solutions</div>
          </Link>
          <Link to="/internship" className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
            <div className="font-semibold mb-1">Internships</div>
            <div className="text-blue-200">Join our programs</div>
          </Link>
          <Link to="/contact" className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
            <div className="font-semibold mb-1">Contact</div>
            <div className="text-blue-200">Get in touch</div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
