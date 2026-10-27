import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export function BlogPost() {
  const { id } = useParams();

  return (
    <div className="pt-20">
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/insights" className="inline-flex items-center text-gray-600 hover:text-[#2A478C] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-[#2A478C] rounded-full text-sm font-semibold mb-6">
              Mobile Development
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flutter vs React Native: Which Should You Choose in 2026?
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Amit Sharma
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                April 10, 2026
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                8 min read
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1555432783-9aed44ab60a9?w=1200"
              alt="Article"
              className="w-full rounded-2xl shadow-xl mb-12"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                After building over 20 production apps using both Flutter and React Native, we've gained deep insights into the strengths and trade-offs of each framework. Here's what you need to know.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Comparison</h2>
              <p className="text-gray-700 mb-6">
                Flutter compiles to native ARM code, giving it a slight edge in performance-critical applications. React Native uses a JavaScript bridge, which can introduce latency in complex animations and heavy computations.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Developer Experience</h2>
              <p className="text-gray-700 mb-6">
                React Native wins for developers with a web background. If your team knows React, the learning curve is minimal. Flutter requires learning Dart, but the hot reload and widget-based architecture make development incredibly fast once you're up to speed.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recommendation</h2>
              <p className="text-gray-700 mb-6">
                For consumer-facing apps with complex UI and animations, we recommend Flutter. For enterprise apps where you already have a React web app and want to share logic, React Native is the better choice.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-[#2A478C] mt-12">
                <p className="text-lg text-gray-800 mb-2">
                  <strong>Pro Tip:</strong> Don't let framework wars distract you. Both are excellent choices. Focus on your team's expertise and project requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
