import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the logo and navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check for logo alt text
    expect(screen.getByAltText('Zyn Care Logo')).toBeInTheDocument();

    // Check for some navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Find Doctors')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});
