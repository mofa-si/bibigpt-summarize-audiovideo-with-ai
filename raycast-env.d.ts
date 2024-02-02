/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `summarizemedia` command */
  export type Summarizemedia = ExtensionPreferences & {
  /** API Token URL - 请输入 API Token链接 */
  "apiTokenUrl": string
}
}

declare namespace Arguments {
  /** Arguments passed to the `summarizemedia` command */
  export type Summarizemedia = {}
}

