import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Code, Cpu, Award, Building2, Brain, Users, Clock } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: "Enterprise-Grade Standards",
      desc: "We follow industry-leading architectural patterns and coding standards to build robust, scalable, and maintainable systems for global enterprises.",
      icon: Building2
    },
    {
      title: "Security-First Approach",
      desc: "Security is embedded at every stage of our development lifecycle (DevSecOps) to ensure maximum data protection and compliance.",
      icon: ShieldCheck
    },
    {
      title: "Advanced AI & Cloud",
      desc: "Leveraging cutting-edge AI models and cloud-native technologies (AWS, Azure) to drive innovation and operational efficiency.",
      icon: Brain
    },
    {
      title: "Academic & Industry Integration",
      desc: "Bridging the gap between academic learning and real-world corporate requirements through our unique talent development model.",
      icon: Users
    },
    {
      title: "Quality & On-Time Delivery",
      desc: "Rigorous testing methodologies and agile project management ensure timely delivery without compromising on software quality.",
      icon: Clock
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-primary py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Cyber Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Engineering Secure, Intelligent & <span className="text-secondary">Future-Ready</span> Digital Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Empowering enterprises with cutting-edge software engineering, cybersecurity services, and AI-driven solutions while shaping industry-ready engineering talent.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/services"
                className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all"
              >
                Explore Services
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white flex items-center hover:text-secondary">
                Contact Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">About KOLMAG</h2>
              <p className="text-lg text-gray-600 mb-6">
                KOLMAG Cyber Technologies Pvt Ltd is a next-generation technology company offering enterprise-level software development, robust cybersecurity services, and advanced AI & Data Science solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With a strong commitment to quality and innovation, we deliver secure, scalable, and high-performance digital systems that meet the demands of the modern world.
              </p>
              <Link to="/about" className="text-secondary font-semibold hover:text-cyan-700">Read More &rarr;</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-secondary">
                <ShieldCheck className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold text-slate-900">Cybersecurity</h3>
                <p className="text-sm text-gray-500 mt-2">VAPT & Threat Intel</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-secondary">
                <Code className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold text-slate-900">Development</h3>
                <p className="text-sm text-gray-500 mt-2">Web & Mobile Apps</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-secondary">
                <Cpu className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold text-slate-900">AI & Data</h3>
                <p className="text-sm text-gray-500 mt-2">ML & Analytics</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-secondary">
                <Award className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold text-slate-900">Training</h3>
                <p className="text-sm text-gray-500 mt-2">Projects & Internships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Divisions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Key Divisions</h2>
            <p className="mt-4 text-lg text-gray-600">Bridging the gap between industry needs and technological innovation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Services</h3>
              <ul className="space-y-3">
                {['Software Development', 'Cybersecurity & VAPT', 'Cloud & DevOps', 'Web & Mobile Applications', 'AI & Data Science Solutions'].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-secondary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                 <Link to="/services" className="text-secondary font-medium hover:text-cyan-700">View Services &rarr;</Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Training & Talent Development</h3>
              <ul className="space-y-3">
                {['B.Tech Final Year Projects', 'AI, ML, Cybersecurity Courses', 'Industrial Internships', 'Full Stack Development', 'Academic Collaboration'].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-accent rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                 <Link to="/training" className="text-accent font-medium hover:text-amber-600">View Programs &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Updated UI */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               We combine technical expertise with a commitment to excellence, ensuring your business stays ahead of the curve.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-xl border border-slate-700 transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-xl hover:shadow-cyan-500/10 group">
                 <div className="flex items-start mb-4">
                   <div className="bg-slate-900 p-3 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                     <feature.icon className="h-6 w-6" />
                   </div>
                 </div>
                 <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                   {feature.desc}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;