
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task-DigitalBond/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6364, hash: '48fc78d1c0f8466522f7a7fd43ee29a96d76eaf4f04deb6c833b017a747fa263', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: 'be46a43ca357bf2fed0e566e2f97512215abb8753e0ba46aa3be48a9fe62e002', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PDUPYZHC.css': {size: 353804, hash: 'hcZyWkOJtQo', text: () => import('./assets-chunks/styles-PDUPYZHC_css.mjs').then(m => m.default)}
  },
};
