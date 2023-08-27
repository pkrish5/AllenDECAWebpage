import React from 'react';

interface Resource {
  title: string;
  description: string;
  link: string;
}

const resources: Resource[] = [
  {
    title: 'Allen Deca Bootcamp Slides ',
    description: 'These are the slides that were presented at the Allen Deca Bootcamp',
    link: 'https://drive.google.com/drive/folders/1AbvARcxXCn2Wxo9aFCxuxUZbd-D6FZzK?usp=sharing',
  },
  {
  {
    title: 'The Official DECA Site ',
    description: 'This website has everything you need to know about DECA and is one of the best resources out there for DECA',
    link: 'https://www.deca.org/',
  },
  {
    title: 'Texas Deca Website',
    description: 'Here are some resources directly from Texas DECA that help with all aspects of competition',
    link: 'https://www.texasdeca.org/competition-resources',
  },
  {
    title: 'Competitive Events',
    description: 'Find the right event for you',
    link: 'https://www.deca.org/compete',
  },
  {
    title: 'Performance Indicators',
    description: 'Scroll down to the "Search Here" button and type "Performance Indicators" and find your cluster',
    link: 'https://www.deca.org/resources',
  },
  {
    title: 'Practice Tests',
    description: 'Try out these practice tests provided by Texas DECA to help you out with your test scores in the competition',
    link: 'https://www.texasdeca.org/practicetesting',
  },
  {
    title: 'Practice Roleplays',
    description: 'Check out these full length practice roleplays provided by Texas DECA',
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
