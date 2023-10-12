import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe('LandingPage Component', () => {
    beforeEach(() => {
        render(
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
        );
    });
  it('should render the welcome text', () => {
    const welcomeText = screen.getByRole("text");
    expect(welcomeText).toBeInTheDocument();
  });

  it('should render the project description text', () => {
    const expectedDescriptionText =
      "I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.";
    const descriptionElement = screen.getByTestId("welcome-paragraph");
    expect(descriptionElement.textContent?.trim()).toBe(expectedDescriptionText);
  });
  

  it('should render social media icons with correct links', () => {
    const githubIcon = screen.getByTestId('github-icon');
    const linkedinIcon = screen.getByTestId('linkedin-icon');

    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();

    // Check the href attributes of the anchor elements
    expect(githubIcon.getAttribute('href')).toBe(
      'https://github.com/seniortechdev'
    );
    expect(linkedinIcon.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/godswill-o-221730257/'
    );

    // Check the target and rel attributes of the anchor elements
    expect(githubIcon.getAttribute('target')).toBe('_blank');
    expect(githubIcon.getAttribute('rel')).toBe('noopener noreferrer');
    expect(linkedinIcon.getAttribute('target')).toBe('_blank');
    expect(linkedinIcon.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
