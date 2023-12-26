import { AnyZodObject, ZodError } from 'zod';
import { BadRequest } from '../errors/bad-request';
import { Request } from 'express';

export function validateRequestData<T extends AnyZodObject>(schema: T, req: Request) {
  try {
    return schema.parse(req);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new BadRequest(error.message);
    }

    throw new BadRequest(JSON.stringify(error));
  }
}