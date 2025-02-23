import React from 'react';
import { Github, Linkedin, Mail, Database, Brain, LineChart, Code, ExternalLink, Award, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Data Science & Analytics Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300">
            Transforming Data into Actionable Insights
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/wawi-m" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/wawitimamwangi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:wawigladys@gmail.com" className="text-white hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                alt="Professional headshot"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl font-bold">About Me</h2>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                As a Data Scientist and Analytics professional, I bring a unique blend of technical expertise and business acumen to every project. With over 5 years of experience in transforming complex data into actionable insights, I've helped organizations make data-driven decisions that drive growth and innovation.
              </p>
              <p className="text-slate-300 text-lg mb-6">
                My expertise spans machine learning, statistical analysis, and full-stack development, allowing me to build end-to-end solutions that deliver real business value. Passionate about environmentally sustainable innovative solutions to local socio-economic problems, and staying at the forefront of technology and sharing knowledge with the data science community.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Download CV
                </button>
                <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                  View Publications
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-700 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
              <Database className="w-12 h-12 mb-6 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Data Engineering</h3>
              <p className="text-slate-300">Expert in data pipeline development, ETL processes, and database optimization</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
              <Brain className="w-12 h-12 mb-6 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-slate-300">Implementing predictive models and deep learning solutions</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
              <LineChart className="w-12 h-12 mb-6 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Data Visualization</h3>
              <p className="text-slate-300">Creating interactive dashboards and meaningful visual insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors">
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Data Scientist</h3>
                  <p className="text-slate-400 mb-4">Datacamp</p>
                  <p className="text-sm text-slate-500">Issued: February 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors">
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Software Engineering Certificate</h3>
                  <p className="text-slate-400 mb-4">Amazon Web Services</p>
                  <p className="text-sm text-slate-500">Issued: February 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors">
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">AWS Certified Cloud Practioner</h3>
                  <p className="text-slate-400 mb-4">Amazon Web Services</p>
                  <p className="text-sm text-slate-500">Issued: August 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="Machine Learning Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Predictive Analytics Dashboard</h3>
                <p className="text-slate-300 mb-4">
                  Built an end-to-end ML pipeline for predictive maintenance using Python and React
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80" 
                alt="Data Analysis Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Market Analysis Platform</h3>
                <p className="text-slate-300 mb-4">
                  Developed a real-time market analysis tool using React and Python
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            Interested in collaboration? Let's discuss how we can work together.
          </p>
          <a 
            href="mailto:wawigladys@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p>© 2024 Gladys Mwangi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;