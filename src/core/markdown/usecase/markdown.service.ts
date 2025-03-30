import { Injectable } from '@nestjs/common';

@Injectable()
export class MarkdownService {
  getHello(): string {
    return 'Hello World!';
  }
}
