addSubDomain({
  description: 'For my personal project',
  domain: 'is-an.app',
  subdomain: 'wx',
  owner: {
    email: 'wxxxcxx@gmail.com',
  },
  record: {
    CNAME: 'bytestream.eu.org',
  },
  proxy: false,
  nested: [
    {
      subdomain: 'mango',
      record: {
        CNAME: 'mango.bytestream.eu.org',
      },
      proxy: false,
    }
  ]
})
