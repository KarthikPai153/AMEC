import React, { useState } from 'react';
import RouletteWheel from './RouletteWheel';
import InstitutionDetails from './InstitutionDetails';
import Gallery from './Gallery';
import Alumni from './Alumni';
import { useLanguage } from '../contexts/LanguageContext';

const institutions = [
  { id: 1, name: 'Medical College', website: 'https://example.com', available: true },
  { id: 2, name: 'Engineering College', website: '', available: false },
  { id: 3, name: 'Arts College', website: 'https://example.com', available: true },
  { id: 4, name: 'Commerce College', website: '', available: false },
  { id: 5, name: 'Law College', website: 'https://example.com', available: true },
  { id: 6, name: 'Nursing College', website: '', available: false },
  { id: 7, name: 'Pharmacy College', website: 'https://example.com', available: true },
  { id: 8, name: 'Dental College', website: '', available: false },
  { id: 9, name: 'Teacher Training', website: 'https://example.com', available: true },
  { id: 10, name: 'Management College', website: '', available: false },
  { id: 11, name: 'Science College', website: 'https://example.com', available: true },
  { id: 12, name: 'Technology Institute', website: '', available: false },
  { id: 13, name: 'Research Center', website: 'https://example.com', available: true },
  { id: 14, name: 'Sports Academy', website: '', available: false },
  { id: 15, name: 'Fine Arts College', website: 'https://example.com', available: true },
  { id: 16, name: 'Music College', website: '', available: false },
  { id: 17, name: 'Agriculture College', website: 'https://example.com', available: true },
  { id: 18, name: 'Veterinary College', website: '', available: false },
  { id: 19, name: 'Architecture College', website: 'https://example.com', available: true },
  { id: 20, name: 'Design Institute', website: '', available: false },
  { id: 21, name: 'Hospitality College', website: 'https://example.com', available: true },
  { id: 22, name: 'Aviation Academy', website: '', available: false },
  { id: 23, name: 'Maritime College', website: 'https://example.com', available: true },
  { id: 24, name: 'Culinary Institute', website: '', available: false },
];

const Institutions = () => {
  const [selectedInstitution, setSelectedInstitution] = useState<typeof institutions[0] | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('institutions.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('institutions.subtitle')}
          </p>
        </div>
      </section>

      {/* Interactive Wheel Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-4">{t('institutions.explorer.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('institutions.explorer.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <RouletteWheel 
                institutions={institutions}
                onInstitutionSelect={setSelectedInstitution}
              />
            </div>
            
            <div>
              <InstitutionDetails institution={selectedInstitution} />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <Gallery />

      {/* Alumni Success Stories */}
      <Alumni />
    </div>
  );
};

export default Institutions;