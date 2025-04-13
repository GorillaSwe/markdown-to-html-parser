import { Injectable } from "@nestjs/common";
import type { MarkdownNode } from "./markdown-node";

@Injectable()
export class MarkdownParser {
  parse(line: string): MarkdownNode {
    if (line.startsWith("# ")) {
      return {
        type: "heading",
        level: 1,
        content: line.slice(2).trim(),
      };
    }
    return {
      type: "unknown",
      content: line,
    };
  }
}
