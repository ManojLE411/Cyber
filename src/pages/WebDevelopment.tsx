import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Globe, ShoppingCart, Layout, Layers, ArrowRight, Code } from 'lucide-react';

const WebDevelopment = () => {
  const solutions = [
    {
      title: "Business Websites",
      desc: "Professional, responsive, and SEO-optimized websites that establish your digital presence and credibility.",
      icon: Globe
    },
    {
      title: "Admin Dashboards",
      desc: "Powerful, data-driven control panels to manage your business operations, users, and analytics efficiently.",
      icon: Layout
    },
    {
      title: "E-commerce Platforms",
      desc: "Secure online stores with integrated payment gateways, inventory management, and seamless user checkout experiences.",
      icon: ShoppingCart
    },
    {
      title: "Android/iOS Apps",
      desc: "Native mobile applications designed for high performance and optimal user experience on specific platforms.",
      icon: Smartphone
    },
    {
      title: "Cross-platform Apps",
      desc: "Cost-effective mobile solutions using Flutter or React Native to deploy on both iOS and Android from a single codebase.",
      icon: Layers
    },
    {
      title: "Custom Web Applications",
      desc: "Tailor-made web software to automate complex business processes and solve unique operational challenges.",
      icon: Monitor
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80" 
            alt="Web Development Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-secondary text-sm font-medium mb-6">
            <Code className="h-4 w-4 mr-2" />
            <span>Digital Experiences</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web & Mobile App Development</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We build user-friendly, high-performance applications that engage users and drive business growth across all devices.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From simple landing pages to complex enterprise mobile apps, we deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-secondary group">
              <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mb-6 text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technologies We Use</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We stay ahead of the curve by leveraging the most modern, secure, and scalable technologies in the industry. Our full-stack expertise ensures your project is built on a solid foundation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React.js & Next.js", "Node.js & Express", "Flutter & React Native", "Python & Django", "PostgreSQL & MongoDB", "AWS & Firebase"
                ].map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-secondary rounded-full"></div>
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {/* Visual representation of tech stack */}
               <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                 <h4 className="font-bold text-lg text-secondary">Frontend</h4>
                 <p className="text-sm text-gray-400 mt-2">React, Angular, Vue</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                 <h4 className="font-bold text-lg text-secondary">Backend</h4>
                 <p className="text-sm text-gray-400 mt-2">Node, Python, Java</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                 <h4 className="font-bold text-lg text-secondary">Mobile</h4>
                 <p className="text-sm text-gray-400 mt-2">Flutter, iOS, Android</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                 <h4 className="font-bold text-lg text-secondary">Database</h4>
                 <p className="text-sm text-gray-400 mt-2">SQL, NoSQL, Graph</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Have an App Idea?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's turn your vision into a reality. Contact us for a free consultation and project estimation.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;