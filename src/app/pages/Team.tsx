import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export function Team() {
  const leadership: TeamMember[] = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      bio: "15+ years in enterprise software, ex-TCS. Passionate about building scalable solutions and nurturing tech talent.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
      email: "arjun@techinnovation.in"
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      bio: "IIT Delhi alumna with expertise in AI/ML and cloud architecture. Led tech teams at multiple startups.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
      email: "priya@techinnovation.in"
    },
    {
      name: "Vikram Singh",
      role: "Head of Education",
      bio: "Former professor with 10+ years teaching experience. Designed our industry-leading internship curriculum.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "vikram@techinnovation.in"
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Sneha Reddy",
      role: "Senior Full Stack Developer",
      bio: "5+ years building scalable web applications. Specializes in React and Node.js ecosystems.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Rahul Verma",
      role: "Mobile App Developer",
      bio: "Expert in React Native and Flutter. Delivered 20+ mobile apps across iOS and Android.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Anjali Deshmukh",
      role: "UI/UX Designer",
      bio: "Design thinking enthusiast. Creates beautiful, user-centric interfaces that convert.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Karthik Nair",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure specialist. AWS and Azure certified with expertise in CI/CD pipelines.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Neha Gupta",
      role: "QA Lead",
      bio: "Quality assurance expert ensuring bug-free, reliable software delivery every time.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Amit Kumar",
      role: "Senior Mentor",
      bio: "Guides our interns through real-world projects. Passionate about teaching and knowledge sharing.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      linkedin: "#"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2A478C] via-[#1a2d5a] to-[#8C52FF]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              The brilliant minds behind Tech Innovation's success—engineers, designers, and mentors committed to excellence
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-[#2A478C] text-sm font-semibold mb-4">
              Leadership
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionaries driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#2A478C] font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="w-9 h-9 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-[#2A478C] hover:from-[#2A478C] hover:to-[#8C52FF] hover:text-white transition-all"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="w-9 h-9 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-[#2A478C] hover:from-[#2A478C] hover:to-[#8C52FF] hover:text-white transition-all"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-9 h-9 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-[#2A478C] hover:from-[#2A478C] hover:to-[#8C52FF] hover:text-white transition-all"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-[#2A478C] text-sm font-semibold mb-4">
              Core Team
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented professionals delivering world-class solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#8C52FF] font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center text-[#2A478C] hover:text-[#8C52FF] text-sm font-medium transition-colors"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-r from-[#2A478C] via-[#6b3acc] to-[#8C52FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              We're always looking for talented individuals who share our passion for technology and innovation
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-white text-[#2A478C] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
