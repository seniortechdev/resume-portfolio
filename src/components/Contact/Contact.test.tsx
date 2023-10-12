import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';
import "@testing-library/jest-dom";

describe('Contact component', () => {
  it('should show validation errors when form is submitted with empty fields', async () => {
    render(<Contact />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Wait for async validation to complete
    await waitFor(() => {});

    // Assert validation errors are displayed
    expect(screen.getByText('Please input your name')).toBeInTheDocument();
    expect(screen.getByText('Please input a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Please input a message')).toBeInTheDocument();
  });

  it('should show validation errors when invalid email is entered', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const messageInput = screen.getByLabelText('Project:');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Smith' } });
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });

    fireEvent.click(submitButton);

    // Wait for async validation to complete
    await waitFor(() => {});

    // Assert validation errors are displayed
    expect(screen.queryByText('Please input your name')).toBeNull();
    expect(screen.getByText('Please input a valid email address')).toBeInTheDocument();
    expect(screen.queryByText('Please input a message')).toBeNull();
  });

  // You can write similar tests to cover other scenarios, like valid form submission
});
