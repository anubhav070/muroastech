import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Careers() {
  const jobs = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      description: "Lead development of enterprise applications and mentor junior developers."
    },
    {
      title: "Flutter Developer",
      department: "Mobile",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
      description: "Build beautiful cross-platform mobile applications for our clients."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Manage cloud infrastructure and automate deployment pipelines."
    },
    {
      title: "Technical Internship",
      department: "All Departments",
      location: "Mumbai, India",
      type: "Internship",
      experience: "0-1 year",
      skills: ["Any Tech Stack", "Willingness to Learn"],
      description: "Join our intensive internship program with live project experience."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-gray-900 via-[#2A478C] to-[#8C52FF] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100">
              Build your career with a company that values innovation, growth, and excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Growth Opportunities",
                description: "Work on diverse projects and continuously upgrade your skills"
              },
              {
                title: "Flexible Culture",
                description: "Hybrid work options and emphasis on work-life balance"
              },
              {
                title: "Competitive Packages",
                description: "Industry-standard salaries with performance bonuses"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all hover:border-[#2A478C]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-[#2A478C] rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-[#2A478C] to-[#8C52FF] text-white">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#2A478C] to-[#8C52FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See a Role for You?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Send us your resume anyway. We're always looking for talented people.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-10">
                Send Your Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
