import { Injectable } from "@nestjs/common";
// biome-ignore lint/style/useImportType: Required for NestJS DI
import { HtmlRenderer } from "../domain/html-renderer";
// biome-ignore lint/style/useImportType: Required for NestJS DI
import { MarkdownParser } from "../domain/markdown-parser";

@Injectable()
export class MarkdownService {
  constructor(
    private readonly parser: MarkdownParser,
    private readonly renderer: HtmlRenderer,
  ) {}
  renderMarkdown(markdown: string): string {
    const lines: string[] = markdown.split(/\r?\n/);
    const astList = lines.map((line) => this.parser.parse(line));
    const htmlLines = astList.map((ast) => this.renderer.render(ast));
    const html = htmlLines.join("\n");

    return html;
  }
}
