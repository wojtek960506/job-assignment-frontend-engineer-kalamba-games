import { FormEvent, useState } from "react";
import { Input } from "ui/input";
import "./LoginPage.css";
import { Button } from "ui/button";
import { authenticateUser } from "api/users-api";
import { useAuth } from "./context";
import { useQueryClient } from "react-query";

export const LoginPage = (): JSX.Element => {

  // TODO `useForm` with Zod validation might be use
  // to have better control over values provided in login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setAuthToken } = useAuth();
  const queryClient = useQueryClient();

  // TODO save full info about user (not just authToken)
  // which might be used for example for checking authenticated user profile
  // in that case there will be no need to do additional request with another endpoint
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const user = await authenticateUser({ email, password });
      setIsError(false);
      // as there are some public pages which have data which is updated after
      // logging in to avoid flickering of favorited button cached data is cleared
      queryClient.resetQueries();
      queryClient.removeQueries();
      setAuthToken(user.token);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-title">Sign in</h1>
      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          data-testid="email-input"
          disabled={isLoading}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          data-testid="password-input"
          disabled={isLoading}
        />
        {isError && <p className="login-error">Invalid credentials</p>}
        <Button
          type="submit"
          variant="primary"
          className="sign-in-button"
          data-testid="sign-in-button"
          disabled={isLoading}
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}
