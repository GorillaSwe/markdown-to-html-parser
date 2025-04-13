import { Body, Controller, Post } from "@nestjs/common";
// biome-ignore lint/style/useImportType: Required for injection
import { MarkdownService } from "../../usecase/markdown.service";
// biome-ignore lint/style/useImportType: Required for injection
import { RenderMarkdownDto } from "../../dto/render-markdown.dto";

@Controller()
export class MarkdownController {
  constructor(private readonly markdownService: MarkdownService) {}

  @Post()
  markdownToHtml(@Body() body: RenderMarkdownDto): string {
    return this.markdownService.renderMarkdown(body.markdown);
  }
}
