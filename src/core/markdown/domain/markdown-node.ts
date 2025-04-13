interface HeadingNode {
  type: "heading";
  level: number;
  content: string;
}

interface ParagraphNode {
  type: "paragraph";
  content: string;
}
interface UnknownNode {
  type: "unknown";
  content: string;
}

export type MarkdownNode = HeadingNode | ParagraphNode | UnknownNode;
