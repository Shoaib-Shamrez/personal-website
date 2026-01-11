import React from 'react';
import type { Certification } from '@/data/resume/Certification';

interface CertificationProps {
  data: Certification;
  last: boolean;
}

const Certification: React.FC<CertificationProps> = ({ data, last }) => (
  <li className={`certification-container ${last ? '' : 'border-b'} p-4`}>
    <div className="flex justify-between items-start mb-2">
      <h4 className="certification-title text-lg font-semibold">{data.title}</h4>
      {data.category && (
        <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
          {data.category}
        </span>
      )}
    </div>
    <p className="text-gray-600">{data.date}</p>
    <p className="certification-issuer text-gray-700 font-medium">{data.university}</p>
    {data.number && <p className="certification-number text-gray-500">{data.number}</p>}
    {data.link && data.link !== '#' && (
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-2 block"
      >
        View Certificate
      </a>
    )}
  </li>
);

export default Certification;
