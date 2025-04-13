import { Injectable } from "@nestjs/common";
import type { MarkdownNode } from "./markdown-node";

@Injectable()
export class HtmlRenderer {
  render(node: MarkdownNode): string {
    switch (node.type) {
      case "heading":
        return `<h${node.level}>${node.content}<h${node.level}>`;
      case "paragraph":
        return `<p>${node.content}</p>`;
      default:
        return `${node.content}`;
    }
  }
}
