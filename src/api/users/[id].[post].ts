import { z } from 'zod';
import { validateRequestData } from '../../validations/request-data.validation';
import type { Request, Response } from 'express';

const userSchema = z.object({
  body: z.object({
    fullName: z.string({
      required_error: 'Full name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Not a valid email'),
  }),
});

export default function UsersPost(req: Request, res: Response) {
  validateRequestData(userSchema, req);

  res.setHeader('Content-Type', 'application/json');
  res.end('success');
}
