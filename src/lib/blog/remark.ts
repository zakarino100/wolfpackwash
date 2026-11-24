type MdNode = {
  type: string;
  value?: string;
  name?: string;
  attributes?: unknown[];
  children?: MdNode[];
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
};

function isContentBlock(node: MdNode): boolean {
  return node.type === "paragraph" || node.type === "list" || node.type === "blockquote" || node.type === "heading" || node.type === "code" || node.type === "table";
}

/** Turns `> [!note]` / `> [!tip]` into an aside. Other blockquotes stay pull quotes. */
export function remarkCallouts() {
  return (tree: MdNode) => {
    for (const node of tree.children ?? []) {
      if (node.type !== "blockquote") continue;
      const paragraph = node.children?.[0];
      if (!paragraph || paragraph.type !== "paragraph") continue;
      const textNode = paragraph.children?.find((child) => child.type === "text" && typeof child.value === "string");
      if (!textNode?.value) continue;
      const match = /^\[!(note|tip)]\s*/.exec(textNode.value);
      if (!match) continue;
      textNode.value = textNode.value.slice(match[0].length);
      if (!textNode.value) {
        paragraph.children = paragraph.children?.filter((child) => child !== textNode);
        const next = paragraph.children?.[0];
        if (next?.type === "break") {
          paragraph.children = paragraph.children?.slice(1);
        }
      }
      node.data = {
        hName: "aside",
        hProperties: { className: ["blog-callout", `is-${match[1]}`] },
      };
    }
  };
}

/** Inserts a server-rendered quote band once, after the midpoint of the post. */
export function remarkMidPostCta() {
  return (tree: MdNode) => {
    const children = tree.children ?? [];
    if (children.some((node) => node.name === "MidPostCta")) return;
    const blocks = children
      .map((node, index) => (isContentBlock(node) ? index : -1))
      .filter((index) => index >= 0);
    if (blocks.length < 2) return;
    const midpoint = blocks[Math.floor((blocks.length - 1) / 2)];
    children.splice(midpoint + 1, 0, {
      type: "mdxJsxFlowElement",
      name: "MidPostCta",
      attributes: [],
      children: [],
    });
  };
}
