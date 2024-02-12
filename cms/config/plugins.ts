// ./config/plugins.js`
'use strict';

module.exports = {
  menus: {
    config: {
      layouts: {
        menuItem: {
          link: [ 
            {
                input: {
                    label: 'Page Relation',
                    name: 'page_relation',
                    type: 'relation',
                  },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
};