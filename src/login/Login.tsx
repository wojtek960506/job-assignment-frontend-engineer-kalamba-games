import { FormEvent, useState } from "react";
import { Input } from "ui/input";
import "./Login.css";
import { Button } from "ui/button";
import { authenticateUser } from "api/usersApi";
import { useAuth } from "./context";

export const Login = (): JSX.Element => {
  
  // alice@example.com I_<3-R0ber7
  // bob@example.com   4L1ce-I5 mY_li3f

  const [email, setEmail] = useState("alice@example.com");
  const [password, setPassword] = useState("I_<3-R0ber7");
  const [isError, setIsError] = useState(false);

  const { setAuthToken } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const user = await authenticateUser({ email, password });
      setAuthToken(user.token);
      setIsError(false);
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
        {isError && <p>Invalid credentials</p>}
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
