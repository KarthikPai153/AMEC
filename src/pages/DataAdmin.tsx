import React, { useState } from 'react';
import { alumni as alumniData, announcements as announcementsData, about as aboutData } from '../data/staticData';

const DataAdmin = () => {
  const [alumni, setAlumni] = useState(alumniData);
  const [announcements, setAnnouncements] = useState(announcementsData);
  const [about, setAbout] = useState(aboutData);

  // Mock update functions
  const updateAlumni = (index: number, field: string, value: string) => {
    const updated = alumni.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setAlumni(updated);
  };
  const updateAnnouncement = (index: number, field: string, value: string) => {
    const updated = announcements.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setAnnouncements(updated);
  };
  const updateAboutTeam = (index: number, field: string, value: string) => {
    const updated = about.managementTeam.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setAbout({ ...about, managementTeam: updated });
  };
  const updateAboutMilestone = (index: number, field: string, value: string) => {
    const updated = about.milestones.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setAbout({ ...about, milestones: updated });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Data Admin Panel</h1>
      {/* Alumni Section */}
      <section className="bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Alumni</h2>
        {alumni.map((a, i) => (
          <div key={a.id} className="mb-4 border-b pb-4">
            <input className="border p-1 mr-2" value={a.name} onChange={e => updateAlumni(i, 'name', e.target.value)} />
            <input className="border p-1 mr-2" value={a.position} onChange={e => updateAlumni(i, 'position', e.target.value)} />
            <input className="border p-1 mr-2" value={a.college} onChange={e => updateAlumni(i, 'college', e.target.value)} />
            <input className="border p-1 mr-2" value={a.year} onChange={e => updateAlumni(i, 'year', e.target.value)} />
            <input className="border p-1 mr-2" value={a.image} onChange={e => updateAlumni(i, 'image', e.target.value)} />
            <input className="border p-1 mr-2" value={a.achievement} onChange={e => updateAlumni(i, 'achievement', e.target.value)} />
            <textarea className="border p-1 w-full mt-2" value={a.testimonial} onChange={e => updateAlumni(i, 'testimonial', e.target.value)} />
          </div>
        ))}
      </section>
      {/* Announcements Section */}
      <section className="bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        {announcements.map((a, i) => (
          <div key={a.id} className="mb-4 border-b pb-4">
            <input className="border p-1 mr-2" value={a.title} onChange={e => updateAnnouncement(i, 'title', e.target.value)} />
            <input className="border p-1 mr-2" value={a.date} onChange={e => updateAnnouncement(i, 'date', e.target.value)} />
            <input className="border p-1 mr-2" value={a.description} onChange={e => updateAnnouncement(i, 'description', e.target.value)} />
          </div>
        ))}
      </section>
      {/* About Section */}
      <section className="bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4">About - Management Team</h2>
        {about.managementTeam.map((m, i) => (
          <div key={i} className="mb-4 border-b pb-4">
            <input className="border p-1 mr-2" value={m.name} onChange={e => updateAboutTeam(i, 'name', e.target.value)} />
            <input className="border p-1 mr-2" value={m.position} onChange={e => updateAboutTeam(i, 'position', e.target.value)} />
            <input className="border p-1 mr-2" value={m.image} onChange={e => updateAboutTeam(i, 'image', e.target.value)} />
            <input className="border p-1 mr-2" value={m.description} onChange={e => updateAboutTeam(i, 'description', e.target.value)} />
          </div>
        ))}
        <h2 className="text-2xl font-bold mb-4 mt-8">About - Milestones</h2>
        {about.milestones.map((m, i) => (
          <div key={i} className="mb-4 border-b pb-4">
            <input className="border p-1 mr-2" value={m.year} onChange={e => updateAboutMilestone(i, 'year', e.target.value)} />
            <input className="border p-1 mr-2" value={m.event} onChange={e => updateAboutMilestone(i, 'event', e.target.value)} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataAdmin; 