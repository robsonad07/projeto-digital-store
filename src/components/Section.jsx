import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="bg-gray-50 p-4">
      <div className={`flex justify-between items-center mb-4 ${titleAlign === 'center' ? 'text-center' : ''}`}>
        <h2 className="text-dark-gray-2 text-2xl font-bold" style={{ textAlign: titleAlign }}>
          {title}
        </h2>
        {link && (
          <a href={link.href} className="text-primary text-pink-700 text-md hover:underline">
            {link.text}
          </a>
        )}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;
