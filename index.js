let osFilter
switch (process.platform) {
    case 'win32': 
        osFilter = 'windows'
        break
    case 'darwin': 
        osFilter = 'darwin-amd64'
        break
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
