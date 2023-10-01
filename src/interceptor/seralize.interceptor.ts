import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

interface classConstructer {
  new(...args: any[]): {};
}

export function seralize(dtos: classConstructer) {
  return UseInterceptors(new SerializeInterceptor(dtos));
}

export class SerializeInterceptor implements NestInterceptor {

  constructor(private dtos: classConstructer) { }

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dtos, data, {
          excludeExtraneousValues: true
        });
      }),
    );
  }
}
