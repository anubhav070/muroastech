import { motion } from "motion/react";
import { Link } from "react-router";
import { Cpu, Calendar, Award, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function EngineeringTrack() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-[#8C52FF] to-[#2A478C] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Advanced Track
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Engineering Internship Program
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Production-grade full-stack development with system design and cloud architecture
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#8C52FF] hover:bg-gray-100 text-lg px-8">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Curriculum</h2>
              <div className="space-y-6">
                {[
                  { phase: "Month 1-3", title: "Full-Stack Mastery", topics: "MERN Stack, Flutter, TypeScript" },
                  { phase: "Month 4-6", title: "Architecture & Cloud", topics: "System Design, AWS, Docker, CI/CD" },
                  { phase: "Month 7-12", title: "Production Projects", topics: "5+ Real Client Projects, Team Leadership" }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-[#8C52FF] pl-6 py-2">
                    <div className="text-sm text-gray-500">{item.phase}</div>
                    <div className="text-xl font-semibold text-gray-900">{item.title}</div>
                    <div className="text-gray-600">{item.topics}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Calendar className="w-6 h-6" />, title: "Duration", desc: "6-12 months" },
                { icon: <Cpu className="w-6 h-6" />, title: "Projects", desc: "5+ Production Apps" },
                { icon: <Award className="w-6 h-6" />, title: "Certification", desc: "Advanced Certificate" },
                { icon: <Briefcase className="w-6 h-6" />, title: "Placement", desc: "Job Guarantee Support" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center text-[#8C52FF] flex-shrink-0">
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

      <section className="py-24 bg-gradient-to-r from-[#8C52FF] to-[#2A478C]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Launch Your Tech Career</h2>
          <p className="text-xl text-purple-100 mb-10">Limited seats for serious engineers</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#8C52FF] hover:bg-gray-100 text-lg px-10">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
