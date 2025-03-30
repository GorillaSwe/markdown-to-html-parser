import { Controller, Get } from "@nestjs/common";
import type { MarkdownService } from "../../usecase/markdown.service";

@Controller()
export class MarkdownController {
  constructor(private readonly markdownService: MarkdownService) {}

  @Get()
  getHello(): string {
    return this.markdownService.getHello();
  }
}
