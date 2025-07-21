import React from 'react';
import { Calendar, Bell } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Annual Convocation 2024',
      date: '2024-03-15',
      description: 'Join us for the annual convocation ceremony celebrating our graduates.',
    },
    {
      id: 2,
      title: 'New Academic Session',
      date: '2024-06-01',
      description: 'Admissions open for the new academic session 2024-25.',
    },
    {
      id: 3,
      title: 'Cultural Festival',
      date: '2024-02-20',
      description: 'Inter-college cultural festival showcasing student talents.',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Bell className="text-orange-500 mr-3" size={24} />
        <h2 className="text-2xl font-bold text-red-900">Announcements</h2>
      </div>
      
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-l-4 border-orange-500 pl-4 py-2">
            <div className="flex items-center mb-2">
              <Calendar className="text-gray-500 mr-2" size={16} />
              <span className="text-sm text-gray-500">
                {new Date(announcement.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="font-bold text-red-900 mb-1">{announcement.title}</h3>
            <p className="text-gray-600 text-sm">{announcement.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="#" 
          className="text-orange-500 hover:text-red-900 font-medium transition-colors duration-200"
        >
          View All Announcements →
        </a>
      </div>
    </div>
  );
};

export default Announcements;