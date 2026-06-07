import { Mark, mergeAttributes } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    footnote: {
      setFootnote: (note: string) => ReturnType;
      updateFootnote: (note: string) => ReturnType;
      unsetFootnote: () => ReturnType;
    };
  }
}

export const Footnote = Mark.create({
  name: 'footnote',

  addAttributes() {
    return {
      note: {
        default: '',
        parseHTML: (el) => el.getAttribute('data-note') ?? '',
        renderHTML: (attrs) => ({ 'data-note': attrs.note }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'span.footnote-mark' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes({ class: 'footnote-mark' }, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setFootnote:
        (note) =>
        ({ commands }) =>
          commands.setMark(this.name, { note }),

      updateFootnote:
        (note) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { note }),

      unsetFootnote:
        () =>
        ({ commands }) =>
          commands.unsetMark(this.name, { extendEmptyMarkRange: true }),
    };
  },
});
