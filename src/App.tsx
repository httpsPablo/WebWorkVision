import React, { useState } from 'react';
import { Menu, X, Bot, BookOpen, Wrench, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does WebWorkVision offer?",
      answer: "We offer three main services: WebWorkVision AI for artificial intelligence solutions, WebWorkVision Blog for trending content, and WebWorkVision Tools for specialized online tools."
    },
    {
      question: "How can I access WebWorkVision AI?",
      answer: "You can access our AI services by contacting us through the form on this page or sending an email to webworkvision@gmail.com. We offer personalized plans according to your needs."
    },
    {
      question: "Is the blog content free?",
      answer: "Yes, our blog offers free content about the latest trends in technology, education, fitness, law and legality. We also have premium subscriptions for exclusive content and deeper analysis."
    },
    {
      question: "Can I request custom tools?",
      answer: "Absolutely. Our WebWorkVision Tools team can develop custom online tools according to your specific requirements. Contact us to discuss your project."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we provide complete technical support for all our services. You can contact us by email or through our support ticket system."
    },
    {
      question: "What are the delivery times?",
      answer: "Delivery times vary by project. For simple AI services: 24-48 hours. Custom tools: 1-4 weeks. We will provide you with a detailed timeline in the initial consultation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-emerald-600">
              WebWorkVision
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors">FAQ</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to
            <span className="text-emerald-600 block mt-2">WebWorkVision</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive technology partner. We offer advanced artificial intelligence solutions, 
            specialized content about the latest trends, and innovative online tools 
            to drive solutions for the entire internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
              Explore Services
            </a>
            <a href="#contact" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our ecosystem of technological solutions designed to transform your online experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WebWorkVision AI */}
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Bot className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">WebWorkVision AI</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionize your workflow with our cutting-edge artificial intelligence solutions. 
                We offer complete content generation services, from professional images to 
                persuasive and creative texts.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">AI image generation using DALL-E and Midjourney models</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Creation of texts optimized for marketing and SEO</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Intelligent chatbots and personalized virtual assistants</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Explore AI
              </button>
            </div>

            {/* WebWorkVision Blog */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">WebWorkVision Blog</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your reliable source of updated information about the most relevant trends in the digital world. 
                Stay up to date with expert content and deep analysis in multiple high-demand sectors.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Technology trends: AI, blockchain, web development</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Digital education: e-learning, edtech, innovative methodologies</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fitness and wellness: nutrition, workouts, wellness tech</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Law and legality trends: legal tech, compliance, regulations</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Read Blog
              </button>
            </div>

            {/* WebWorkVision Tools */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">WebWorkVision Tools</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Boost your productivity with our suite of specialized online tools. 
                From advanced calculators to automatic generators, we have the perfect solution 
                to optimize your work processes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Content generators: QR codes, automatic generators</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Specialized calculators for finance and conversions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Online timers and productivity tools</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Link shorteners and URL management tools</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                View Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About WebWorkVision</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                WebWorkVision was born from the vision of providing comprehensive services of all kinds to the online world. 
                We are dedicated to offering solutions that facilitate online accessibility and improve the digital experience 
                for users around the world. Our focus is on creating tools, content, and AI services that make the internet 
                more accessible and functional for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We seek online feasibility in everything we do, ensuring that our services are accessible, efficient, and 
                useful for the global digital community. From artificial intelligence to specialized tools and trending content, 
                we work to make the internet a better place for everyone.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                  <div className="text-gray-600">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your online experience? We're here to help you take the next step
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <form action="https://formsubmit.co/webworkvision@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://webworkvision.com/thanks" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service of Interest</label>
                  <select 
                    name="service" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="">Select a service</option>
                    <option value="WebWorkVision AI">WebWorkVision AI</option>
                    <option value="WebWorkVision Blog">WebWorkVision Blog</option>
                    <option value="WebWorkVision Tools">WebWorkVision Tools</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-vertical"
                    placeholder="Tell us about your project or needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">webworkvision@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">Temporarily disabled</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-emerald-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-emerald-600 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="bg-emerald-50 p-6 rounded-b-lg border-t">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">WebWorkVision</h3>
              <div className="text-gray-300">
                <p>© 2025 WebWorkVision</p>
                <p>All rights reserved</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">WebWorkVision AI</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">WebWorkVision Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">WebWorkVision Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 mb-4 md:mb-0">
                WebWorkVision - Technological innovation for your digital growth
              </p>
              <div className="flex space-x-6">
                <a href="mailto:webworkvision@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Email
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Phone
                </a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;