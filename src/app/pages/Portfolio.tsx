import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Portfolio() {
  const caseStudies = [
    {
      id: "retail-inventory",
      title: "E-commerce Inventory Transformation",
      client: "RetailMax India",
      challenge: "Manual inventory tracking causing 35% stock wastage",
      solution: "Custom inventory system with real-time tracking and AI forecasting",
      result: "40% reduction in waste, ₹2Cr annual savings",
      image: "https://images.unsplash.com/photo-1613203713323-feb0a4b6fb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGxhcHRvcCUyMG1vY2t1cHxlbnwxfHx8fDE3NzYzMzc4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Inventory", "AI", "Web App"]
    },
    {
      id: "food-delivery",
      title: "Restaurant Management Platform",
      client: "FoodHub Chain",
      challenge: "Disconnected systems across 50+ locations",
      solution: "Unified cloud platform with mobile POS integration",
      result: "60% faster order processing, 25% revenue increase",
      image: "https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2h8ZW58MXx8fHwxNzc2MzM3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Restaurant", "Mobile App", "Cloud"]
    },
    {
      id: "healthcare-app",
      title: "Patient Management System",
      client: "MediCare Hospitals",
      challenge: "Paper-based records and appointment chaos",
      solution: "Digital health records with appointment scheduling",
      result: "100% digital records, 80% reduction in wait times",
      image: "https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBnbGFzc3xlbnwxfHx8fDE3NzYzMzc4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Healthcare", "SaaS", "Mobile"]
    },
    {
      id: "logistics-tracking",
      title: "Real-time Logistics Tracker",
      client: "ShipFast Logistics",
      challenge: "No visibility into shipment status",
      solution: "GPS-enabled tracking with customer notifications",
      result: "95% on-time delivery, 50% fewer support calls",
      image: "https://images.unsplash.com/photo-1761599821310-da0d6356b4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGluZyUyMGJhY2tncm91bmQlMjBkYXJrfGVufDF8fHx8MTc3NjMzNzgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Logistics", "Real-time", "GPS"]
    },
    {
      id: "education-platform",
      title: "Online Learning Platform",
      client: "EduTech Academy",
      challenge: "Need for scalable online education system",
      solution: "LMS with live classes, assignments, and analytics",
      result: "10,000+ active students, 4.8/5 rating",
      image: "https://images.unsplash.com/photo-1555432783-9aed44ab60a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVuZ2luZWVycyUyMHdvcmtpbmclMjBsYXB0b3BzfGVufDF8fHx8MTc3NjMzNzgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["EdTech", "Video", "Analytics"]
    },
    {
      id: "fintech-app",
      title: "Digital Payment Solution",
      client: "PayEasy Financial",
      challenge: "Complex payment workflows",
      solution: "Unified payment gateway with instant settlements",
      result: "₹100Cr+ processed monthly, 99.9% uptime",
      image: "https://images.unsplash.com/photo-1759771963975-8a4885446f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNEJTIwdGVjaCUyMG5ldHdvcmslMjBibHVlJTIwcHVycGxlfGVufDF8fHx8MTc3NjMzNzgxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["FinTech", "Payments", "Security"]
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
              Real Projects, Real Impact
            </h1>
            <p className="text-xl text-blue-100">
              Case studies showcasing how we've transformed businesses across industries
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/portfolio/${study.id}`} className="group block h-full">
                  <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="text-sm text-[#8C52FF] font-semibold mb-2">{study.client}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2A478C] transition-colors">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Challenge</div>
                          <div className="text-gray-700">{study.challenge}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Result</div>
                          <div className="text-gray-900 font-semibold">{study.result}</div>
                        </div>
                      </div>

                      <div className="flex items-center text-[#2A478C] font-medium group-hover:gap-2 transition-all">
                        View Case Study
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Write Your Success Story
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Ready to transform your business with custom software?
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-10">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
