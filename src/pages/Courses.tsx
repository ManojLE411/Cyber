import { Link } from 'react-router-dom';
import { Code, Database, Shield, Cloud, Server, Cpu, Check, Star, Users, Clock, Award } from 'lucide-react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      title: "Data Science Certification",
      subTitle: "Data Science Course Training",
      icon: Database,
      theme: "blue",
      isBestSeller: true,
      stats: {
        trained: "11,200+",
        placement: "97.3%",
        hours: "160",
        rating: 4.8,
        reviews: 1000
      },
      features: [
        "Live Projects / Internship",
        "Placement Assistance",
        "Python, R, Tableau, ML",
        "Jumbo Pass Access"
      ]
    },
    {
      title: "Amazon Web Services (AWS)",
      subTitle: "AWS Solutions Architect",
      icon: Cloud,
      theme: "amber",
      isBestSeller: false,
      stats: {
        trained: "6,200+",
        placement: "95.5%",
        hours: "60",
        rating: 4.7,
        reviews: 3049
      },
      features: [
        "Classroom / Online Training",
        "Live AWS Console Access",
        "3 Real-time Projects",
        "Certification Support"
      ]
    },
    {
      title: "Full Stack Developer",
      subTitle: "Java / Python Full Stack",
      icon: Code,
      theme: "teal",
      isBestSeller: true,
      stats: {
        trained: "8,500+",
        placement: "98.1%",
        hours: "120",
        rating: 4.9,
        reviews: 2292
      },
      features: [
        "React, Spring Boot / Django",
        "System Design Interview Prep",
        "5+ Capstone Projects",
        "Job Guarantee Program"
      ]
    },
    {
      title: "Cybersecurity Expert",
      subTitle: "Ethical Hacking & VAPT",
      icon: Shield,
      theme: "indigo",
      isBestSeller: false,
      stats: {
        trained: "4,100+",
        placement: "92.0%",
        hours: "80",
        rating: 4.8,
        reviews: 1540
      },
      features: [
        "CEH & CompTIA Aligned",
        "Kali Linux Labs",
        "Bug Bounty Hunting",
        "SOC Analyst Training"
      ]
    },
    {
      title: "AI & Deep Learning",
      subTitle: "Artificial Intelligence Course",
      icon: Cpu,
      theme: "rose",
      isBestSeller: true,
      stats: {
        trained: "3,800+",
        placement: "94.5%",
        hours: "100",
        rating: 4.9,
        reviews: 890
      },
      features: [
        "Neural Networks & NLP",
        "Computer Vision with OpenCV",
        "Generative AI / LLMs",
        "Research Paper Implementation"
      ]
    },
    {
      title: "DevOps Engineering",
      subTitle: "Master CI/CD & Cloud",
      icon: Server,
      theme: "cyan",
      isBestSeller: false,
      stats: {
        trained: "5,300+",
        placement: "96.2%",
        hours: "70",
        rating: 4.7,
        reviews: 1205
      },
      features: [
        "Docker & Kubernetes",
        "Jenkins & Terraform",
        "Ansible Automation",
        "Linux Administration"
      ]
    }
  ];

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'blue': return { header: 'bg-[#3b82f6]', text: 'text-[#3b82f6]', light: 'bg-blue-50' };
      case 'amber': return { header: 'bg-[#f59e0b]', text: 'text-[#f59e0b]', light: 'bg-amber-50' };
      case 'teal': return { header: 'bg-[#0f766e]', text: 'text-[#0f766e]', light: 'bg-teal-50' };
      case 'indigo': return { header: 'bg-[#4f46e5]', text: 'text-[#4f46e5]', light: 'bg-indigo-50' };
      case 'rose': return { header: 'bg-[#e11d48]', text: 'text-[#e11d48]', light: 'bg-rose-50' };
      case 'cyan': return { header: 'bg-[#0891b2]', text: 'text-[#0891b2]', light: 'bg-cyan-50' };
      default: return { header: 'bg-slate-700', text: 'text-slate-700', light: 'bg-slate-50' };
    }
  };

  return (
    <div className="bg-white min-h-screen font-serif">
      {/* Hero */}
      <div className="relative bg-slate-900 py-20 text-white border-b border-slate-800 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80" 
            alt="Courses Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-gray-400">
            Upskill with industry-leading certification programs designed for your career growth.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const styles = getThemeStyles(course.theme);
            
            return (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col relative">
                
                {/* Best Seller Ribbon */}
                {course.isBestSeller && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="bg-white text-slate-800 text-[10px] font-bold px-2 py-1 shadow-md absolute top-2 left-2 rounded-sm border border-gray-200 z-20">
                      Best Seller
                    </div>
                    <div className="w-0 h-0 border-t-[60px] border-t-white/30 border-r-[60px] border-r-transparent absolute top-0 left-0"></div>
                  </div>
                )}

                {/* Header */}
                <div className={`${styles.header} p-6 h-40 relative flex items-center justify-between`}>
                  <div className="w-2/3 pr-2">
                     <h3 className="text-white text-xl font-bold leading-tight shadow-black drop-shadow-md">
                       {course.title}
                     </h3>
                     <p className="text-white/80 text-xs mt-2 uppercase tracking-wide font-medium">Certification Training</p>
                  </div>
                  <div className="w-1/3 flex justify-end">
                     <course.icon className="h-16 w-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                     <course.icon className="h-12 w-12 text-white absolute right-6 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">{course.subTitle}</h4>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-amber-500 mr-2 shrink-0 stroke-[3]" />
                      <span className="font-semibold text-slate-700 mr-1">{course.stats.trained}</span> Professionals Trained
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-amber-500 mr-2 shrink-0 stroke-[3]" />
                      <span className="font-semibold text-slate-700 mr-1">{course.stats.placement}</span> Placement Record
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-amber-500 mr-2 shrink-0 stroke-[3]" />
                      <span className="font-semibold text-slate-700 mr-1">{course.stats.hours} Hours</span> Of Training
                    </div>
                    
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-amber-500 mr-2 shrink-0 stroke-[3]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Rating & Actions */}
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center mb-4">
                       <div className="flex text-amber-400 mr-2">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.stats.rating) ? 'fill-current' : 'text-gray-300'}`} />
                         ))}
                       </div>
                       <span className="text-sm font-bold text-slate-700">{course.stats.rating}</span>
                       <span className="text-xs text-gray-400 ml-1">({course.stats.reviews.toLocaleString()})</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Link 
                        to="/contact" 
                        className="flex items-center justify-center border border-slate-300 text-slate-700 py-2 rounded text-sm font-semibold hover:bg-slate-50 transition-colors"
                      >
                        Download Brochure
                      </Link>
                      <Link 
                        to="/contact" 
                        className={`flex items-center justify-center text-white py-2 rounded text-sm font-semibold transition-colors ${styles.header} opacity-90 hover:opacity-100`}
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Section */}
        <div className="mt-20 border-t border-gray-200 pt-12">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                 <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
                 <h4 className="font-bold text-2xl text-slate-900">50,000+</h4>
                 <p className="text-sm text-gray-500">Learners</p>
              </div>
              <div>
                 <Award className="h-10 w-10 text-secondary mx-auto mb-3" />
                 <h4 className="font-bold text-2xl text-slate-900">200+</h4>
                 <p className="text-sm text-gray-500">Corporate Partners</p>
              </div>
              <div>
                 <Clock className="h-10 w-10 text-secondary mx-auto mb-3" />
                 <h4 className="font-bold text-2xl text-slate-900">100%</h4>
                 <p className="text-sm text-gray-500">Practical Training</p>
              </div>
              <div>
                 <Star className="h-10 w-10 text-secondary mx-auto mb-3" />
                 <h4 className="font-bold text-2xl text-slate-900">4.8/5</h4>
                 <p className="text-sm text-gray-500">Average Rating</p>
              </div>
           </div>
        </div>

        {/* CTA Section */}
        <div className="courses-cta">
          <h3 className="courses-cta-title">Ready to Start Learning?</h3>
          <p className="courses-cta-text">
            Join thousands of learners and transform your career with our industry-aligned certification courses.
          </p>
          <Link to="/contact" className="courses-cta-button">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;