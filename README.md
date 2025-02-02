# @bronti/bitfield

[![JSR](https://jsr.io/badges/@bronti/bitfield)](https://jsr.io/@bronti/bitfield)
[![JSR Score](https://jsr.io/badges/@bronti/bitfield/score)](https://jsr.io/@bronti/bitfield)

```ts
import { Bitfield } from "@bronti/bitfield"
import { assert } from "jsr:@std/assert"

enum UserCapabilities {
	CREATE,
	READ,
	UPDATE,
	DELETE,
}

class UserCapabilitesBitfield extends Bitfield<UserCapabilities> {}

const capabilities = new UserCapabilitesBitfield()
capabilities.set(UserCapabilities.CREATE, true)

assert(capabilities.get(UserCapabilities.CREATE) === true)

const bitfield = UserCapabilitesBitfield.fromValue(0)
db.save({
	id: "userID",
	username: "mavdotj",
	capabilities: capabilities.value,
})
```
