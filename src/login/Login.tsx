import { FormEvent, useState } from "react";
import { Input } from "ui/input";
import "./Login.css";
import { Button } from "ui/button";
import { authenticateUser } from "api/users-api";
import { useAuth } from "./context";
import { useQueryClient } from "react-query";

export const Login = (): JSX.Element => {
  
  // alice@example.com I_<3-R0ber7
  // bob@example.com   4L1ce-I5 mY_li3f

  // `useForm` with Zod validation might be use
  // to have better control over values provided in login form
  const [email, setEmail] = useState("alice@example.com");
  const [password, setPassword] = useState("I_<3-R0ber7");
  const [isError, setIsError] = useState(false);

  const { setAuthToken } = useAuth();
  const queryClient = useQueryClient();

  // TODO save full info about user (not just authToken)
  // which might be used for example for checking authenticated user profile
  // in that case there will be no need to do additional request with another endpoint
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const user = await authenticateUser({ email, password });
      setIsError(false);
      // as we have some public pages which have data which is updated after logging in
      // to avoid flickering of favorited button I clear cached data
      queryClient.resetQueries();
      queryClient.removeQueries();
      setAuthToken(user.token);
    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <div className="login">
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
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"  
        />
        {isError && <p className="login-error">Invalid credentials</p>}
        <Button
          type="submit"
          variant="primary"
          className="sign-in-button"
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}
