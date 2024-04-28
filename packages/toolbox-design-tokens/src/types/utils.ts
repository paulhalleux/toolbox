import { DesignTokenKind } from "./tokens";

export type FlattenTokenKeys<
  T extends Record<string, unknown>,
  Kind extends DesignTokenKind = DesignTokenKind,
  Key = keyof T,
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? T[Key] extends { $kind: Kind }
      ? `${Key}`
      : T[Key] extends { $kind: DesignTokenKind }
        ? never
        : `${Key}.${FlattenTokenKeys<T[Key], Kind>}`
    : `${Key}`
  : never;

type Idx<T, K extends string> = K extends keyof T ? T[K] : never;
type DeepIndex<T, K extends string> = T extends object
  ? K extends `${infer F}.${infer R}`
    ? DeepIndex<Idx<T, F>, R>
    : Idx<T, K>
  : never;

export type FlattenTokenValues<T extends Record<string, unknown>> = {
  [K in FlattenTokenKeys<T>]: DeepIndex<T, K>;
};
