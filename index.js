const platform = process.platform === 'win32' ? 'windows' : process.platform;

module.exports = {
  type: 'storage',
  order: 3,
  displayName: 'IPFS',
  name: 'ipfs',
  repository: 'https://github.com/ipfs/go-ipfs',
  binaryName: process.platform === 'win32' ? 'ipfs.exe' : 'ipfs',
  beforeStart: {
    execute: [
      ['init'],
      [
        'config',
        '--json',
        'API.HTTPHeaders.Access-Control-Allow-Origin',
        '["*"]'
      ],
      [
        'config',
        '--json',
        'API.HTTPHeaders.Access-Control-Allow-Methods',
        '["PUT", "GET", "POST"]'
      ]
    ]
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
  ]
};
