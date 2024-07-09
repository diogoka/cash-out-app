import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='flex justify-center items-center text-slate-900 min-h-10 rounded-lg mt-6'>
      <h5>
        Created by{' '}
        <a
          href='https://diogoka-dev.onrender.com'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          diogo
        </a>
      </h5>
    </div>
  );
};

export default Footer;
