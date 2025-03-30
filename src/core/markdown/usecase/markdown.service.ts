import { Injectable } from "@nestjs/common";

@Injectable()
export class MarkdownService {
  getHello(): any {
    return "Hello Test!";
  }
}
