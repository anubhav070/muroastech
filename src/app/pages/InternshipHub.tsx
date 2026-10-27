import { motion } from "motion/react";
import { Link } from "react-router";
import { GraduationCap, Code, Award, Users, Clock, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export function InternshipHub() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555432783-9aed44ab60a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVuZ2luZWVycyUyMHdvcmtpbmclMjBsYXB0b3BzfGVufDF8fHx8MTc3NjMzNzgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#2A478C]/70 to-[#8C52FF]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Premium Internship Programs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Don't Just Learn.<br />
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Build Real Products.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Industry-certified programs with live project experience, senior mentorship, and guaranteed skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#tracks">
                <Button size="lg" className="bg-gradient-to-r from-[#2A478C] to-[#8C52FF] hover:opacity-90 text-white text-lg px-8">
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white text-lg px-8">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students Trained" },
              { number: "95%", label: "Completion Rate" },
              { number: "50+", label: "Live Projects" },
              { number: "20+", label: "Industry Partners" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#2A478C] to-[#8C52FF] bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experience, real projects, real career growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Live Project Experience",
                description: "Work on actual client projects, not dummy assignments. Build your portfolio with real work."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Certification",
                description: "Receive certificates recognized by leading tech companies and boost your resume."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Senior Mentorship",
                description: "Learn from experienced engineers with 10+ years in the industry through 1-on-1 guidance."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Schedule",
                description: "Choose between full-time and part-time tracks that fit your college schedule."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Placement Assistance",
                description: "Resume building, interview prep, and connections to our hiring partner network."
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Stipend Opportunities",
                description: "Top performers receive stipends and full-time job offers based on performance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-[#2A478C] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section id="tracks" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Track
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized programs designed for diploma and engineering students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Diploma Track */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/internship/diploma" className="block group">
                <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border-2 border-blue-100 hover:border-[#2A478C] transition-all hover:shadow-2xl">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#2A478C] to-[#8C52FF] text-white rounded-full text-sm font-semibold mb-6">
                    Diploma Students
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Foundation Track
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    Perfect for diploma students looking to build strong fundamentals and hands-on experience.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "3-6 month duration",
                      "Web Development (HTML, CSS, JavaScript)",
                      "React.js & Backend Basics",
                      "2-3 Live Projects",
                      "Industry Certificate"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-[#2A478C] font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Engineering Track */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/internship/engineering" className="block group">
                <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-10 border-2 border-purple-100 hover:border-[#8C52FF] transition-all hover:shadow-2xl">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8C52FF] to-[#2A478C] text-white rounded-full text-sm font-semibold mb-6">
                    Engineering Students
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Advanced Track
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    Designed for engineering students ready to work on complex, production-grade applications.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "6-12 month duration",
                      "Full-stack Development (MERN/Flutter)",
                      "Cloud, DevOps & System Design",
                      "5+ Production Projects",
                      "Job Placement Support"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-[#8C52FF] font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              What our interns say about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Diploma Graduate → Software Engineer",
                text: "The internship gave me real project experience. I got placed at a top startup with a 6 LPA package!"
              },
              {
                name: "Priya Patel",
                role: "Engineering Student",
                text: "Working on live projects taught me more than 4 years of college. The mentorship was incredible."
              },
              {
                name: "Amit Kumar",
                role: "Full Stack Developer",
                text: "From zero to deploying production apps in 6 months. Best decision of my career!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#2A478C] to-[#8C52FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Limited seats available. Apply now to secure your spot.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-10">
                Apply for Internship
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
