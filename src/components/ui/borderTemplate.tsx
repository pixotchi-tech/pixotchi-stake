import React from 'react';

interface BorderTemplateProps {
  children: React.ReactNode;
  extraClasses?: string; // Optional vertical margin
  extraClasses2?: string 
}

const BorderTemplate: React.FC<BorderTemplateProps> = ({ children, extraClasses = '', extraClasses2 = '' }) => (
  <div className={`flex flex-col p-2 ${extraClasses} `}>
    <div className={`flex flex-col justify-items-left bg-[#DDDDDD] p-1 ${extraClasses2}
                  border-t-4 border-t-white 
                  border-r-4 border-[#878787]
                  border-b-4 border-[#878787]
                  border-l-4 border-l-white`}>
      {children}
    </div>
  </div>
);

export { BorderTemplate };
