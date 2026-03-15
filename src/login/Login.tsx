import { FormEvent, useState } from "react";
import { Input } from "ui/input";
import "./Login.css";
import { Button } from "ui/button";

export const Login = (): JSX.Element => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log('log in')
    console.log(email);
    console.log(password);
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
