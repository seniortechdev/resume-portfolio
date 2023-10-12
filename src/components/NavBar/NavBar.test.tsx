import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe('NavBar Component', () => {
    beforeEach(() => {
        render(
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        );
      });
  it('should render the component without errors', () => {
    const titleElement = screen.getByText('GODSWIL ONWUCHUKWA');
    expect(titleElement).toBeInTheDocument();

    const projectsElement = screen.getByText('Projects');
    expect(projectsElement).toBeInTheDocument();

    const skillsElement = screen.getByText('Skills');
    expect(skillsElement).toBeInTheDocument();

    const aboutElement = screen.getByText('About');
    expect(aboutElement).toBeInTheDocument();

    const contactElement = screen.getByText('Contact');
    expect(contactElement).toBeInTheDocument();
  });

  it('should show mobile menu on hamburger click', () => {
    const hamburgerButton = screen.getByLabelText('Show menu');
    fireEvent.click(hamburgerButton);

    const mobileMenu = screen.getByLabelText('list');
    expect(mobileMenu).toBeVisible();
  });

  it('should hide mobile menu when hamburger is clicked again', () => {
    const hamburgerButton = screen.getByLabelText('Show menu');
    fireEvent.click(hamburgerButton);

    const mobileMenu = screen.getByLabelText('list');
    expect(mobileMenu).toBeVisible();

    fireEvent.click(hamburgerButton);

    expect(mobileMenu).not.toBeVisible();
  });

  it('should show desktop menu', () => {
    const desktopMenu = screen.getByRole('list', { hidden: true });
    expect(desktopMenu).toBeVisible();
  });
});
