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

  let institutionInfo = {
    description: `${institution.name} is one of our premier educational institutions, committed to providing quality education and fostering academic excellence.`,
    established: '1985',
    location: 'Udupi, Karnataka',
    phone: '+91 820 2570000',
    email: `info@${institution.name.toLowerCase().replace(/\s+/g, '')}.edu.in`,
    programs: ['Undergraduate Programs', 'Postgraduate Programs', 'Research Programs'],
    facilities: ['Modern Classrooms', 'Well-equipped Labs', 'Library', 'Sports Complex'],
  };

  // Custom details for Poornaprajna PU College Adamaru
  if (institution.name === 'Poornaprajna PU College Adamaru') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['HEPS', 'HEBA', 'ESBA', 'BASCs', 'PCMB', 'PCMS', 'PCMCs'],
    };
  }

  // Custom details for Poornaprajna College Udupi
  if (institution.name === 'Poornaprajna College Udupi') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['BA', 'B.Sc', 'B.Com', 'B.B.A.', 'M.Com', 'M.Sc'],
    };
  }

  // Custom details for Poornaprajna Evening College Udupi
  if (institution.name === 'Poornaprajna Evening College Udupi') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['BCA', 'BA', 'BCom', 'MCom'],
    };
  }

  // Custom details for PPEC Sadashivanagar(Pre-Primary , Primary & High School)
  if (institution.name === 'PPEC Sadashivanagar(Pre-Primary , Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['Nursery-Grade 10'],
    };
  }

  // Custom details for PPEC Sangameshwarpet
  if (institution.name === 'PPEC SPET(Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['Nursery-Grade 10'],
    };
  }

  // Custom details for PPEC Yelahanka (Pre-primary ,Primary & High School)
  if (institution.name === 'PPEC Yelahanka (Pre-primary ,Primary & High School)') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['Nursery-Grade 10'],
    };
  }

  // Custom details for Poornaprajna Institute of Scientific Research
  if (institution.name === 'Poornaprajna Institute of Scientific Research') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['Biological Science', 'Theoretical Science', 'Materials Science & Catalysis', 'Center for Foundational Study'],
    };
  }

  // Custom details for PPEC SKNagar
  if (institution.name === 'PPEC SKNagar') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['Nursery - Grade 10'],
    };
  }

  // Custom details for Poornaprajna PU College, Udupi
  if (institution.name === 'Poornaprajna PU College, Udupi') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['BAECs', 'BASCs', 'BASE', 'BASM', 'PCMB', 'PCMCs', 'PCMS'],
    };
  }

  // Custom details for Poornaprajna Institute of Management
  if (institution.name === 'Poornaprajna Institute of Management') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['MBA', 'MCA', 'BBA (Logistic & Supply Chain Management)', 'Poornaprajna Visiting Fellow Programme'],
    };
  }

  // Custom details for PPEC Delhi
  if (institution.name === 'PPEC Delhi') {
    institutionInfo = {
      ...institutionInfo,
      programs: ['Nursery to Grade 10', 'PUC(Science, Commerce, Humanities)'],
    };
  }

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
              {institution.name === 'Poornaprajna PU College Adamaru' ? (
                <a href="mailto:principalpuc@poornaprajnaadamaru.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'PPEC Sadashivanagar(Pre-Primary , Primary & High School)' ? (
                <a href="mailto:ssng.support@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'Poornaprajna PU College, Udupi' ? (
                <a href="mailto:office.udupi@ppuc.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'PPEC SKNagar' ? (
                <a href="mailto:office.sknagar@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'Poornaprajna Institute of Scientific Research' ? (
                <a href="mailto:info@ppisr.res.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'PPEC Indiranagar' ? (
                <a href="mailto:contact.indiranagar@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'Poornaprajna Institute of Management' ? (
                <a href="mailto:office@pim.ac.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'Poornaprajna Evening College Udupi' ? (
                <a href="mailto:sppecudupi@gmail.com" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'PPEC Yelahanka (Pre-primary ,Primary & High School)' ? (
                <a href="mailto:contact.yelahanka@ppec.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'Poornaprajna College Udupi' ? (
                <a href="mailto:office@ppc.edu.in" className="text-blue-600 hover:underline">MAIL</a>
              ) : institution.name === 'PPEC Delhi' ? (
                <a href="mailto:ppps2009@gmail.com" className="text-blue-600 hover:underline">MAIL</a>
              ) : (
                <a href={`mailto:${institutionInfo.email}`} className="text-blue-600 hover:underline">{institutionInfo.email}</a>
              )}
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
    </div>
  );
};

export default InstitutionDetails;