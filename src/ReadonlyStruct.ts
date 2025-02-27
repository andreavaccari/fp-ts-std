/**
 * This module targets readonly objects in the sense of product types. For
 * readonly objects in the sense of maps see the `Record` module.
 *
 * @since 0.14.0
 */

import { pipe } from "fp-ts/function"
import * as RR from "fp-ts/ReadonlyRecord"
import * as RA from "fp-ts/ReadonlyArray"

/**
 * Merge two records together. For merging many identical records, instead
 * consider defining a semigroup.
 *
 * @example
 * import { merge } from 'fp-ts-std/ReadonlyStruct';
 *
 * assert.deepStrictEqual(merge({ a: 1, b: 2 })({ b: 'two', c: true }), { a: 1, b: 'two', c: true });
 *
 * @since 0.14.0
 */
export const merge =
  <A>(x: A) =>
  <B>(y: B): A & B => ({ ...x, ...y })

/**
 * Pick a set of keys from a `Record`. The value-level equivalent of the `Pick`
 * type.
 *
 * @example
 * import { pick } from 'fp-ts-std/ReadonlyStruct';
 * import { pipe } from 'fp-ts/function'
 *
 * const picked = pipe(
 *   { a: 1, b: 'two', c: [true] },
 *   pick(['a', 'c'])
 * );
 *
 * assert.deepStrictEqual(picked, { a: 1, c: [true] });
 *
 * @since 0.14.0
 */
export const pick =
  <A, K extends keyof A>(ks: ReadonlyArray<K>) =>
  (x: A): Pick<A, K> =>
    // I don't believe there's any reasonable way to model this sort of
    // transformation in the type system without an assertion - at least here
    // it's in a single reused place
    pipe(
      ks,
      RA.reduce({} as Pick<A, K>, (ys, k) =>
        merge(ys)(k in x ? { [k]: x[k] } : {}),
      ),
    )

//   {
//   const o = {} as Pick<A, K>
//
//   /* eslint-disable */
//   for (const k of ks) {
//     o[k] = x[k]
//   }
//   /* eslint-enable */
//
//   return o
// }

/**
 * Like `pick`, but allows you to specify the input record upfront.
 *
 * @example
 * import { pickFrom } from 'fp-ts-std/ReadonlyStruct';
 *
 * type MyType = { a: number; b: string; c: ReadonlyArray<boolean> };
 * const picked = pickFrom<MyType>()(['a', 'c']);
 *
 * assert.deepStrictEqual(picked({ a: 1, b: 'two', c: [true] }), { a: 1, c: [true] });
 *
 * @since 0.14.0
 */
export const pickFrom = <A>(): (<K extends keyof A>(
  ks: ReadonlyArray<K>,
) => (x: A) => Pick<A, K>) => pick

/**
 * Omit a set of keys from a `Record`. The value-level equivalent of the `Omit`
 * type.
 *
 * @example
 * import { omit } from 'fp-ts-std/ReadonlyStruct';
 *
 * const sansB = omit(['b']);
 *
 * assert.deepStrictEqual(sansB({ a: 1, b: 'two', c: [true] }), { a: 1, c: [true] });
 *
 * @since 0.14.0
 */
export const omit =
  <K extends string>(ks: ReadonlyArray<K>) =>
  <V, A extends RR.ReadonlyRecord<K, V>>(x: Partial<A>): Omit<A, K> => {
    const y = { ...x }

    /* eslint-disable */
    for (const k of ks) {
      delete y[k]
    }
    /* eslint-enable */

    return y as Omit<A, K>
  }
