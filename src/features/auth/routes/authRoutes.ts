import { SignIn } from '@auth/countrollers/signin';
import { SignOut } from '@auth/countrollers/signout';
import { Signup } from '@auth/countrollers/signup';
import express, { Router } from 'express';

class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/signup', Signup.prototype.create);
    this.router.post('/signin', SignIn.prototype.read);

    return this.router;
  }

  public signoutRoutes(): Router {
    this.router.get('/signout', SignOut.prototype.update);

    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
