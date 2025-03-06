import React from 'react';
import { Brain, Target, Lightbulb, Users, Award, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EDUTOU Skill Academy</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            We're on a mission to revolutionize education through AI-driven learning, 
            real-world execution, and industry-aligned mentorship.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We empower individuals with fluid, evolving skills that stay relevant
                in an ever-changing world. Our focus is on real-world execution, AI-
                driven learning paths, and industry-aligned mentorship to create
                unstoppable innovators.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We envision a world where education is limitless, decentralized by
                offering AI-personalized learning, rapid skill acquisition. Our goal
                is to create a generation of agile thinkers, problem solvers, and
                self-sustaining professionals who lead the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                EDUTOU Skill Academy was born from a simple observation: traditional education is failing to keep pace with the rapidly evolving demands of the modern workplace.
              </p>
              <p className="text-gray-700 mb-6">
                Our founders, a team of educators, technologists, and industry leaders, came together with a shared vision: to create a learning experience that combines cutting-edge technology with practical, real-world skills development.
              </p>
              <p className="text-gray-700">
                Since our founding, we've helped thousands of students transform their careers and lives through our innovative approach to education. We're not just another academy – we're building the future of learning.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="EDUTOU team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at EDUTOU
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible in education, embracing new technologies and methodologies.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration and peer learning, fostering a supportive community of lifelong learners.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We hold ourselves and our students to the highest standards, striving for excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts guiding EDUTOU's mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="CEO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Dr. Alex Morgan</h3>
              <p className="text-indigo-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former EdTech researcher with a passion for democratizing education through technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="CTO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Sarah Chen</h3>
              <p className="text-indigo-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                AI specialist with extensive experience developing adaptive learning systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="COO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Michael Rodriguez</h3>
              <p className="text-indigo-600 mb-3">Chief Learning Officer</p>
              <p className="text-gray-600 text-sm">
                Former tech industry executive with a focus on skills-based hiring and workforce development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;