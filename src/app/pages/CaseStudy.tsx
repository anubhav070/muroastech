import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export function CaseStudy() {
  const { id } = useParams();

  // Mock data - in real app would fetch based on ID
  const study = {
    title: "E-commerce Inventory Transformation",
    client: "RetailMax India",
    industry: "Retail & E-commerce",
    duration: "4 months",
    team: "5 engineers",
    challenge: "RetailMax was struggling with manual inventory tracking across 20+ retail locations, leading to 35% stock wastage, frequent stockouts, and inability to forecast demand accurately. Their legacy system couldn't provide real-time visibility.",
    solution: "We developed a comprehensive cloud-based inventory management system with AI-powered demand forecasting, real-time stock tracking, automated reordering, and WhatsApp notifications for critical alerts. The system integrated seamlessly with their existing POS systems.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TensorFlow", "WhatsApp API"],
    results: [
      "40% reduction in inventory waste",
      "₹2 Crore annual cost savings",
      "95% reduction in stockouts",
      "Real-time visibility across all locations",
      "Automated reordering saving 20 hours/week"
    ],
    testimonial: "Tech Innovation delivered beyond our expectations. The system has transformed how we manage inventory and has directly impacted our bottom line. The ROI was achieved in just 6 months.",
    testimonialAuthor: "Rajesh Kumar, CEO, RetailMax India",
    image: "https://images.unsplash.com/photo-1613203713323-feb0a4b6fb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGxhcHRvcCUyMG1vY2t1cHxlbnwxfHx8fDE3NzYzMzc4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <div className="pt-20">
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-[#2A478C] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm text-[#8C52FF] font-semibold mb-4">{study.client}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {study.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 text-sm text-gray-600 mb-12 pb-12 border-b border-gray-200">
              <div>
                <div className="font-semibold text-gray-900">Industry</div>
                {study.industry}
              </div>
              <div>
                <div className="font-semibold text-gray-900">Duration</div>
                {study.duration}
              </div>
              <div>
                <div className="font-semibold text-gray-900">Team Size</div>
                {study.team}
              </div>
            </div>

            <img
              src={study.image}
              alt={study.title}
              className="w-full rounded-2xl shadow-2xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-12">{study.challenge}</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 mb-8">{study.solution}</p>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-700 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
              <div className="space-y-4 mb-12">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{result}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-l-4 border-[#2A478C]">
                <div className="text-2xl text-gray-700 italic mb-6">
                  "{study.testimonial}"
                </div>
                <div className="font-semibold text-gray-900">{study.testimonialAuthor}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#2A478C] to-[#8C52FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can transform your business
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-10">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
