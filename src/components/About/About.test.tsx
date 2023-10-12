import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';
import { BrowserRouter } from 'react-router-dom';

describe('About Component', () => {
    beforeEach(() => {
        render(
          <BrowserRouter>
            <About />
          </BrowserRouter>
        );
      });
  it('renders the "About Me" heading', () => {
    const aboutMeHeading = screen.getByText('ABOUT ME');
    expect(aboutMeHeading).toBeInTheDocument();
  });

  it('renders the "My Expertise" heading', () => {
    const expertiseHeading = screen.getByText('My Expertise');
    expect(expertiseHeading).toBeInTheDocument();
  });

  it('renders the "Professional Journey" heading', () => {
    const journeyHeading = screen.getByText('Professional Journey');
    expect(journeyHeading).toBeInTheDocument();
  });

  it('renders the "My Approach" heading', () => {
    const approachHeading = screen.getByText('My Approach');
    expect(approachHeading).toBeInTheDocument();
  });

  it('renders the "Continued Growth" heading', () => {
    const growthHeading = screen.getByText('Continued Growth');
    expect(growthHeading).toBeInTheDocument();
  });

  it('renders the "Get in Touch" heading', () => {
    const touchHeading = screen.getByText('Get in Touch');
    expect(touchHeading).toBeInTheDocument();
  });

  it('renders the "Download CV" link', () => {
    const downloadLink = screen.getByText('Download CV');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute(
      'href',
      'src/assets/GodsWilOnwuchekwaResumeUpdated.v3.pdf'
    );
    expect(downloadLink).toHaveAttribute('download', 'Godwil Onwuchekwa CV');
  });
});
