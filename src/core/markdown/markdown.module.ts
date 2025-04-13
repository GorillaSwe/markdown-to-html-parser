import { Module } from "@nestjs/common";
import { MarkdownController } from "./api/rest/markdown.controller";
import { MarkdownService } from "./usecase/markdown.service";
import { MarkdownParser } from "./domain/markdown-parser";
import { HtmlRenderer } from "./domain/html-renderer";

@Module({
  imports: [],
  controllers: [MarkdownController],
  providers: [MarkdownService, MarkdownParser, HtmlRenderer],
})
export class MarkdownModule {}
