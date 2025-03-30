import { Controller, Get } from "@nestjs/common";
// biome-ignore lint/style/useImportType: 
import { MarkdownService } from "../../usecase/markdown.service";

@Controller()
export class MarkdownController {
  constructor(private readonly markdownService: MarkdownService) {}

  @Get()
  getHello(): string {
    return this.markdownService.getHello();
  }
}
