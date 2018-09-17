module.exports = {
  book: {
    assets: './assets',
    css: ['plugin-detail-block.css'],
  },

  blocks: {
    quote: {
      process: function (block) {
        const { kwargs } = block;
        const { credit, href } = kwargs;
        console.log({ block, kwargs });

        return this.renderBlock('markdown', block.body.trim())
          .then(function (renderedBody) {
            console.log({ renderedBody });
            return [
              `<blockquote>`,
              `<div class="block--quote__content">${renderedBody}</div>`
              `<div class="block--quote__credit">— ${credit}</div>`,
              `</blockquote>`,
            ].join('\n');
          });
      },
    },
    detail: {
      process: function (block) {
        const { kwargs } = block;
        const { summary, open } = kwargs;

        return this.renderBlock('markdown', block.body)
          .then(function (renderedBody) {
            return [
              `<details class="block--details">`,
              `  <summary class="block--details__summary">${summary}</summary>`,
              `  <div class="block--details__content">${renderedBody}</div>`,
              `</details>`,
            ].join('\n');
          })
      },
    },
  },
};
