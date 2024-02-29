import { render, screen } from '@testing-library/react';
import App from './App';
//import { mockAuthService } from './mocks'; // Mock auth service

jest.mock('./authContext', () => ({
  // Mock auth context for testing without provider
  useAuth: jest.fn().mockReturnValue({ isLoggedIn: true }),
}));

describe('App', () => {
  it('renders dashboard component when logged in', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders login component when not logged in', async () => {
    jest.mock('./authContext', () => ({
      useAuth: jest.fn().mockReturnValue({ isLoggedIn: false }),
    }));
    await render(<App />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});