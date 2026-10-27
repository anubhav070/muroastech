import { motion } from "motion/react";
import { Link } from "react-router";
import { Code, Calendar, Award, Target, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function DiplomaTrack() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-[#2A478C] to-[#8C52FF] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Foundation Track
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Diploma Internship Program
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Build strong fundamentals and real-world experience perfect for diploma students
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-8">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum Highlights</h2>
              <div className="space-y-6">
                {[
                  { phase: "Month 1-2", title: "Web Fundamentals", topics: "HTML5, CSS3, JavaScript, Git" },
                  { phase: "Month 3-4", title: "Modern Frontend", topics: "React.js, Responsive Design, APIs" },
                  { phase: "Month 5-6", title: "Backend & Projects", topics: "Node.js Basics, Database, 2 Live Projects" }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-[#2A478C] pl-6 py-2">
                    <div className="text-sm text-gray-500">{item.phase}</div>
                    <div className="text-xl font-semibold text-gray-900">{item.title}</div>
                    <div className="text-gray-600">{item.topics}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Calendar className="w-6 h-6" />, title: "Duration", desc: "3-6 months (Flexible)" },
                { icon: <Code className="w-6 h-6" />, title: "Projects", desc: "2-3 Live Client Projects" },
                { icon: <Award className="w-6 h-6" />, title: "Certificate", desc: "Industry-recognized" },
                { icon: <Target className="w-6 h-6" />, title: "Outcome", desc: "Job-ready portfolio" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-[#2A478C] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#2A478C] to-[#8C52FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-blue-100 mb-10">Limited seats. Apply now!</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-10">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
