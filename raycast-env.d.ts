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
  /** API Token URL - Please enter the API Token URL */
  "apiTokenUrl": string,
  /** Output Language - Please slelect the language for the summary */
  "outputLanguage": "en-US" | "zh-CN" | "zh-TW" | "ja-JP" | "it-IT" | "de-DE" | "es-ES" | "fr-FR" | "nl-NL" | "ko-KR" | "km-KH" | "hi-IN"
}
}

declare namespace Arguments {
  /** Arguments passed to the `summarizemedia` command */
  export type Summarizemedia = {}
}

