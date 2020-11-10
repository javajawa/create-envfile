<!--
SPDX-FileCopyrightText: 2020 Benedict Harcourt

SPDX-License-Identifier: BSD-2-Clause
-->

Helper action to crate an env-vars file.
This is a compatible. drop-in replacement for
https://github.com/SpicyPizza/create-envfile
implemented in NodeJS.

```yaml
  - uses: javajawa/create-envfile@v1
    with:
      file_name: app/.env
      envkey_LOG_LEVEL: debug
      envkey_DISABLE_AUTH: false
      envkey_API_KEY: ${{ secrets.THE_API_KEY }}
```
