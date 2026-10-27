import { motion } from "motion/react";
import { Link } from "react-router";
import { Code, Smartphone, Database, Globe, Cloud, Cpu, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Applications",
      description: "Build scalable, high-performance web applications using MERN stack, Python Django, or Next.js tailored to your business needs.",
      features: [
        "Responsive & Progressive Web Apps",
        "Real-time Data Processing",
        "API Integration & Development",
        "Cloud-Native Architecture"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter that deliver native performance on iOS and Android from a single codebase.",
      features: [
        "Flutter Specialist Team",
        "Native Performance",
        "Offline-First Architecture",
        "App Store Deployment"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Enterprise Inventory Systems",
      description: "Complete SAAS solutions for inventory management with real-time tracking, automated workflows, and detailed analytics.",
      features: [
        "Real-time Stock Tracking",
        "Automated Invoicing",
        "WhatsApp Integration",
        "Multi-location Support"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Bespoke Web Solutions",
      description: "Custom-built websites and web platforms that reflect your brand identity and drive business growth.",
      features: [
        "Custom CMS Development",
        "E-commerce Platforms",
        "Corporate Websites",
        "SEO Optimization"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions on AWS, Google Cloud, or Azure with automated deployment and monitoring.",
      features: [
        "Cloud Migration Services",
        "DevOps & CI/CD",
        "Infrastructure as Code",
        "24/7 Monitoring"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "End-to-end consulting to modernize your business processes and technology stack for the digital age.",
      features: [
        "Process Automation",
        "Legacy System Modernization",
        "Technology Consulting",
        "Training & Support"
      ],
      color: "from-violet-500 to-violet-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#2A478C] to-[#8C52FF] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Software Services That Drive Growth
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              From concept to deployment, we build premium software solutions that transform businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-br ${service.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver future-proof solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "Node.js", "Flutter", "Python", "AWS", "Firebase", "MongoDB", "PostgreSQL", "Next.js", "TypeScript", "Docker", "Kubernetes"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="font-semibold text-gray-800">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and business goals" },
              { step: "02", title: "Design", desc: "Creating wireframes and UI/UX designs" },
              { step: "03", title: "Development", desc: "Agile development with regular updates" },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2A478C] to-[#8C52FF] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2A478C] to-[#8C52FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Schedule a free consultation to discuss your project
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#2A478C] hover:bg-gray-100 text-lg px-10">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
