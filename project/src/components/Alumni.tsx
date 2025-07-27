import React, { useState, useEffect } from 'react';
import { Quote, Award, Briefcase, GraduationCap } from 'lucide-react';

const Alumni = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Medical Officer',
      college: 'KLEU Medical College',
      year: '2010',
      testimonial: 'The education I received here shaped my career and instilled values that guide me every day.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      achievement: 'Leading cardiac surgeon with 500+ successful operations',
    },
    {
      id: 2,
      name: 'Priya Shetty',
      position: 'Software Engineer',
      college: 'Engineering College',
      year: '2015',
      testimonial: 'USAMEC provided me with not just technical knowledge but also the confidence to excel.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      achievement: 'Senior Tech Lead at Fortune 500 company',
    },
    {
      id: 3,
      name: 'Prof. Anand Rao',
      position: 'Research Scientist',
      college: 'Science College',
      year: '2008',
      testimonial: 'The research foundation I built here led me to groundbreaking discoveries in my field.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      achievement: 'Published 50+ research papers in international journals',
    },
    {
      id: 4,
      name: 'Meera Nair',
      position: 'Entrepreneur',
      college: 'Management College',
      year: '2012',
      testimonial: 'The entrepreneurial spirit fostered here helped me build a successful business empire.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      achievement: 'Founded 3 successful startups, employing 1000+ people',
    },
    {
      id: 5,
      name: 'Dr. Suresh Hegde',
      position: 'Civil Servant',
      college: 'Arts College',
      year: '2005',
      testimonial: 'The values and ethics taught here guide my public service every day.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150',
      achievement: 'IAS officer serving rural development for 15+ years',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Alumni Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Celebrating the achievements of our distinguished alumni who are making a difference worldwide
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-red-900 mb-2">{currentTestimonial.name}</h3>
              <p className="text-orange-500 font-medium mb-1">{currentTestimonial.position}</p>
              <p className="text-sm text-gray-600 mb-2">{currentTestimonial.college}</p>
              <p className="text-sm text-gray-500">Class of {currentTestimonial.year}</p>
            </div>
            
            <div className="md:w-2/3">
              <Quote className="text-orange-500 mb-4" size={40} />
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{currentTestimonial.testimonial}"
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="text-orange-500 mr-2" size={20} />
                  <h4 className="font-bold text-red-900">Key Achievement</h4>
                </div>
                <p className="text-gray-700">{currentTestimonial.achievement}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;