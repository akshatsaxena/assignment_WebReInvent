import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';
import { trylogginIn } from '../services/auth'; // Mock service for testing

jest.mock('../services/auth', () => ({
  trylogginIn: jest.fn().mockResolvedValue({ token: 'mock-token' }),
}));

describe('SignIn', () => {
  it('shows error message on empty email', async () => {
    render(<SignIn />);
    await screen.findByText('Log in');

    const emailInput = screen.getByLabelText('Email address');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.click(screen.getByText('Log in'));

    expect(screen.getByText('Email address is required')).toBeInTheDocument();
  });

  it('calls trylogginIn and redirects on successful login', async () => {
    jest.spyOn(window.location, 'pathname', 'get').mockReturnValue('/dashboard'); // Optional mock

    render(<SignIn />);

    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Log in');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(trylogginIn).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
    expect(window.location.pathname).toBe('/dashboard');
  });
});
