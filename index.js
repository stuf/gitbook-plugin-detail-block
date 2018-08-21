module.exports = {
  book: {
    assets: './assets',
    css: ['plugin-detail-block.css'],
  },

  blocks: {
    detail: {
      process: function (block) {
        const { kwargs } = block;
        const { summary, open } = kwargs;

        return this.renderBlock('markdown', block.body)
          .then(function (renderedBody) {
            return [
              `<details class="block--details">`,
              `  <summary>${summary}</summary>`,
              `  ${renderedBody}`,
              `</details>`,
            ].join('\n');
          })
      },
    },
  },
};