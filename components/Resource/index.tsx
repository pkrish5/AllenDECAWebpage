import React from 'react';

interface Resource {
  title: string;
  description: string;
  link: string;
}

const resources: Resource[] = [
  {
    title: 'The Official DECA Site ',
    description: 'This website has everything you need to know about deca and is one of the best resources out there for DECA',
    link: 'https://www.deca.org/',
  },
  {
    title: 'Texas Deca Website',
    description: 'Here are some resources directly from texas deca that help with all aspects of competition',
    link: 'https://www.texasdeca.org/competition-resources',
  },
  {
    title: 'Competitive Events',
    description: 'Find the right event for you',
    link: 'https://www.deca.org/compete',
  },
  {
    title: 'Performance Indicators',
    description: 'Study these to help your roleplay skills for the competition!',
    link: 'https://www.deca.org/advisor-resources/performance-indicators-marketing#:~:text=DECA%20uses%20seven%20lists%20of,marketing%20and%20personal%20financial%20literacy.',
  },
  {
    title: 'Practice Tests',
    description: 'Try out these practice tests provided by texas deca to help with your test scores in the competitons',
    link: 'https://www.texasdeca.org/practicetesting',
  },
  {
    title: 'Practice Roleplays',
    description: 'Check out these full legnth practice roleplays provided by Texas DECA',
    link: 'https://www.texasdeca.org/roleplayresources',
  },
  {
    title: 'DECA Plus',
    description: 'Everything you need in once place from practice tests to practice roleplays and more, contact our chapter for the login information',
    link: 'https://www.decaplus.org/',
  },

  // Add more resources as needed
];

const ResourcesPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'none',
    borderRadius: '10px',
    padding: '40px',
    marginBottom: '40px',
    boxShadow: '0px 2px 3px rgba(7, 7, 77, 0.05)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#959CB1',
  };

  const linkStyle: React.CSSProperties = {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#4A6CF7',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="resources-container"> {/* Encapsulate the component with a unique class name */}
      <h1 style={{ fontSize: '36px', marginBottom: '40px' }}></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} style={containerStyle}>
            <h2 style={titleStyle}>{resource.title}</h2>
            <p style={descriptionStyle}>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Go to Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
