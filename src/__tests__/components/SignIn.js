import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const credentials = {
        username: 'kalle',
        password: 'password',
      };
      const onSubmit = jest.fn();
      render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Username'),
        credentials.username,
      );
      fireEvent.changeText(
        screen.getByPlaceholderText('Password'),
        credentials.password,
      );
      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: credentials.username,
          password: credentials.password,
        });
      });
    });
  });
});
