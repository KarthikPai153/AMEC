import React from 'react';
import { ExternalLink, Clock, MapPin, Phone, Mail } from 'lucide-react';

interface Institution {
  id: number;
  name: string;
  website: string;
  available: boolean;
}

interface InstitutionDetailsProps {
  institution: Institution | null;
}

const InstitutionDetails: React.FC<InstitutionDetailsProps> = ({ institution }) => {
  if (!institution) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-bold text-red-900 mb-4">Select an Institution</h3>
        <p className="text-gray-600">Click or hover over a segment on the wheel to view institution details.</p>
      </div>
    );
  }

  const institutionInfo = {
    description: `${institution.name} is one of our premier educational institutions, committed to providing quality education and fostering academic excellence.`,
    established: '1985',
    location: 'Udupi, Karnataka',
    phone: '+91 820 2570000',
    email: `info@${institution.name.toLowerCase().replace(/\s+/g, '')}.edu.in`,
    programs: ['Undergraduate Programs', 'Postgraduate Programs', 'Research Programs'],
    facilities: ['Modern Classrooms', 'Well-equipped Labs', 'Library', 'Sports Complex'],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-red-900">{institution.name}</h2>
        {institution.available ? (
          <a
            href={institution.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Visit Website
            <ExternalLink size={16} className="ml-2" />
          </a>
        ) : (
          <span className="inline-flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg">
            <Clock size={16} className="mr-2" />
            Coming Soon
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-6">{institutionInfo.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-bold text-red-900 mb-2">Established</h4>
          <p className="text-gray-600">{institutionInfo.established}</p>
        </div>
        <div>
          <h4 className="font-bold text-red-900 mb-2">Location</h4>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-1" />
            {institutionInfo.location}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-bold text-red-900 mb-2">Contact</h4>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2" />
              {institutionInfo.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <Mail size={16} className="mr-2" />
              {institutionInfo.email}
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-red-900 mb-2">Programs</h4>
          <ul className="text-gray-600 space-y-1">
            {institutionInfo.programs.map((program, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                {program}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-red-900 mb-2">Facilities</h4>
        <div className="grid grid-cols-2 gap-2">
          {institutionInfo.facilities.map((facility, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              {facility}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstitutionDetails;