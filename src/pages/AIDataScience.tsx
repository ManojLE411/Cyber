import { Link } from 'react-router-dom';
import { Brain, Database, MessageSquare, Eye, Bot, BarChart, ArrowRight, Cpu, Layers } from 'lucide-react';

const AIDataScience = () => {
  const services = [
    {
      title: "Machine Learning Models",
      description: "Develop custom algorithms tailored to solve specific business challenges, from recommendation engines to fraud detection systems.",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage historical data to forecast future trends, customer behaviors, and market shifts to make proactive decisions.",
      icon: BarChart,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Natural Language Processing",
      description: "Empower applications to understand, interpret, and generate human language for chatbots, sentiment analysis, and text extraction.",
      icon: MessageSquare,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Computer Vision Systems",
      description: "Implement advanced image and video analysis for automated quality control, facial recognition, and surveillance systems.",
      icon: Eye,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "AI Automation",
      description: "Combine Artificial Intelligence with process automation to streamline workflows, reduce manual effort, and increase operational efficiency.",
      icon: Bot,
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      title: "Big Data Analytics",
      description: "Process, analyze, and visualize massive datasets to uncover hidden patterns, correlations, and actionable business insights.",
      icon: Database,
      color: "text-rose-500",
      bg: "bg-rose-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="AI & Data Science Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-secondary text-sm font-medium mb-6">
            <Cpu className="h-4 w-4 mr-2" />
            <span>Next-Gen Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI & Data Science Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help organizations harness the power of data and AI to improve insights, automation, and decision-making. Transform raw data into competitive advantage.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Driven by Data, Powered by Intelligence</h2>
          <p className="text-lg text-gray-600">
            In today's digital economy, data is the new oil. At KOLMAG, we not only help you mine this resource but refine it into intelligent actions. Our team of data scientists and AI engineers build robust solutions that integrate seamlessly into your existing ecosystem.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Capabilities</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary">
              <div className={`h-14 w-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack / Approach */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our AI Solutions?</h2>
              <ul className="space-y-6">
                {[
                  { title: "Customized Models", desc: "We don't just use off-the-shelf APIs. We train models specifically on your data for higher accuracy." },
                  { title: "Scalable Architecture", desc: "Our solutions are built to handle growing data volumes and real-time processing requirements." },
                  { title: "Ethical AI", desc: "We prioritize transparency, fairness, and security in all our algorithmic implementations." }
                ].map((item, idx) => (
                  <li key={idx} className="flex">
                    <div className="shrink-0 h-10 w-10 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary mr-4 border border-gray-100">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Technologies We Leverage</h3>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'PyTorch', 'Python', 'Scikit-learn', 'OpenCV', 'Pandas', 'Keras', 'Apache Spark', 'AWS SageMaker', 'Azure AI'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                 <p className="text-sm text-gray-500 italic">
                   "We integrate the latest frameworks to ensure your solution is future-proof."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-secondary to-cyan-700 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how data science can solve your most complex challenges and drive growth.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIDataScience;