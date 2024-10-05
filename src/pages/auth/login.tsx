import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button/button";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

function Login(): JSX.Element {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              placeholder="m@example.com"
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <Input required id="password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full" variant="outline">
            Login with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Login;
