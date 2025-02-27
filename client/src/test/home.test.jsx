import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import React from 'react';
import Home from '/Users/Khalia/Desktop/lrnr-app-team-2-Khalia/client/src/pages/Home.jsx';

describe('Home', () => {
    it('renders the correct greeting', () => {
        render(<MemoryRouter><Home /></MemoryRouter>)
        const greetingElement = screen.getByText('Your guided path to programming enlightenment');
        expect(greetingElement).toBeInTheDocument();
    });

    it('renders the main heading', () => {
        render(<MemoryRouter><Home /></MemoryRouter>)
        const headingElement = screen.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the button', () => {
        render(<MemoryRouter><Home /></MemoryRouter>)
        const buttonElement = screen.getByRole('button', { name: 'Begin Journey' });
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders the card headings', () => {
        render(<MemoryRouter><Home /></MemoryRouter>)
        const cardHeadingElements = screen.getAllByRole('heading', { level: 3 });
        expect(cardHeadingElements[0]).toHaveTextContent('Personalized Quizzes');
        expect(cardHeadingElements[1]).toHaveTextContent('Rewarding');
        expect(cardHeadingElements[2]).toHaveTextContent('Personal SME');
    });
    



});