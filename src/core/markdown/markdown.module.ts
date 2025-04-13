import { Module } from "@nestjs/common";
import { MarkdownController } from "./api/rest/markdown.controller";
import { HtmlRenderer } from "./domain/html-renderer";
import { MarkdownParser } from "./domain/markdown-parser";
import { MarkdownService } from "./usecase/markdown.service";

@Module({
  imports: [],
  controllers: [MarkdownController],
  providers: [MarkdownService, MarkdownParser, HtmlRenderer],
})
export class MarkdownModule {}
