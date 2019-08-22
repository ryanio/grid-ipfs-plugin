let osFilter;
switch (process.platform) {
  case 'win32':
    osFilter = 'windows';
    break;
  case 'darwin':
    osFilter = 'darwin-amd64';
    break;
  default:
    osFilter = process.platfrorm;
}

module.exports = {
  type: 'storage',
  order: 3,
  displayName: 'IPFS',
  name: 'ipfs',
  repository: 'https://github.com/ipfs/go-ipfs',
  binaryName: process.platform === 'win32' ? 'ipfs.exe' : 'ipfs',
  beforeStart: {
    execute: [['init']]
  },
  prefix: osFilter,
  filter: {
    name: {
      excludes: ['rc']
    }
  },
  settings: [
    {
      id: 'daemon',
      default: 'enabled',
      label: 'Daemon Mode',
      options: [
        { value: 'enabled', label: 'Enabled', flag: 'daemon' },
        { value: 'disabled', label: 'Disabled', flag: '' }
      ]
    }
  ],
  about: {
    description:
      'IPFS is a protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing hypermedia in a distributed file system.',
    apps: [
      {
        name: 'IPFS Web UI',
        url: 'http://127.0.0.1:5001/webui'
      }
    ],
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ipfs/ipfs'
      }
    ],
    docs: [
      {
        name: 'IPFS Docs',
        url: 'https://docs.ipfs.io/'
      }
    ],
    community: [
      {
        name: 'IPFS Forum',
        url: 'https://discuss.ipfs.io/'
      }
    ]
  }
};
