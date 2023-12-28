# whmcs-node

A Typescript ESM API wrapper for WHMCS 8.0.

### Installation
Install and save to dependencies  
`npm i -S @pulsar-networks/whmcs`

### Example use
```ts
import WhmcsApi from '@pulsar-networks/whmcs';

const whmcsApi = new WhmcsApi({
  identifier: "",
  secret: "",
  apiUrl: "https://example.com/billing/includes/api.php"
});

whmcsApi.tickets.getTicketCounts({})
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
```
