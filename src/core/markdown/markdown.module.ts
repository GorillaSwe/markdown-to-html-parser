import { Module } from "@nestjs/common";
import { MarkdownController } from "./api/rest/markdown.controller";
import { MarkdownService } from "./usecase/markdown.service";

@Module({
  imports: [],
  controllers: [MarkdownController],
  providers: [MarkdownService],
})
export class MarkdownModule {}
