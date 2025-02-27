---
title: As compared to Ramda
nav_order: 3
permalink: /ramda
---

# As compared to Ramda

fp-ts-std attempts to bridge the gap between [fp-ts](https://gcanti.github.io/fp-ts/modules/), a highly abstract library, and libraries like [Ramda](https://ramdajs.com/), which are focused on providing utility functions.

Here's the status of all of Ramda's functions (as of Ramda v0.27.0) being potentially implemented in fp-ts-std.

Note that some functions are not one-to-one replacements, but rather bequeath a better pattern in code. For example, the Ramda function [hasIn](https://ramdajs.com/docs/#hasIn) is distinct from [has](https://ramdajs.com/docs/#has) only insofar as it checks the input object's prototype for the specified key, too. Prototypal code isn't functional and not something this library intends to support; instead, look for functional alternatives.

- ~~[ ] \_\_~~ Use currying and potentially [fp-ts-std/Function::flip](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#flip) instead.
- [x] add - [fp-ts-std/Number::add](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#add)/[fp-ts/Field](https://gcanti.github.io/fp-ts/modules/Field.ts.html)
- [x] addIndex - [fp-ts-std/Function::withIndex](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#addindex)
- [x] adjust - [fp-ts/Array::modifyAt](https://gcanti.github.io/fp-ts/modules/Array.ts.html#modifyat)
- [x] all - [fp-ts/Array::every](https://gcanti.github.io/fp-ts/modules/Array.ts.html#every)
- [x] allPass - [fp-ts-std/Boolean::allPass](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#allpass)
- [x] always - [fp-ts/function::constant](https://gcanti.github.io/fp-ts/modules/function.ts.html#constant)
- [x] and - [fp-ts-std/Boolean::and](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#and)/[fp-ts/Semigroup::semigroupAll](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html#semigroupall)
- [x] andThen - [fp-ts/Task::map](https://gcanti.github.io/fp-ts/modules/Task.ts.html#map)
- [x] any - [fp-ts/Array::some](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#some)
- [x] anyPass - [fp-ts-std/Boolean::anyPass](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#anypass)
- [x] ap - [fp-ts/Array::ap](https://gcanti.github.io/fp-ts/modules/Array.ts.html#ap)
- [x] aperture - [fp-ts-std/Array::aperture](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#aperture)
- [x] append - [fp-ts/Array::snoc](https://gcanti.github.io/fp-ts/modules/Array.ts.html#snoc)
- [x] apply - [fp-ts-std/Function::unary](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#unary)
- [x] applySpec - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] applyTo - [fp-ts/function::apply](https://gcanti.github.io/fp-ts/modules/function.ts.html#apply)
- [x] ascend - [fp-ts/Ord::contramap](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#contramap)
- [x] assoc - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] assocPath - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- ~~[ ] binary~~ Use currying and potentially [fp-ts-std/Function::unary](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#unary) instead.
- ~~[ ] bind~~ Do not use `this`.
- [x] both - [fp-ts-std/Boolean::both](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#both)/[fp-ts/Option::apFirst](https://gcanti.github.io/fp-ts/modules/Option.ts.html#apfirst)
- ~~[ ] call~~ Use currying.
- [x] chain - [fp-ts/Array::chain](https://gcanti.github.io/fp-ts/modules/Array.ts.html#chain)
- [x] clamp - [fp-ts/Ord::clamp](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#clamp)
- ~~[ ] clone~~ Avoid mutation.
- [x] comparator - [fp-ts/Ord::fromCompare](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#fromcompare)
- [x] complement - [fp-ts/Predicate::not](https://gcanti.github.io/fp-ts/modules/Predicate.ts.html#not)
- [ ] compose
- [ ] composeK
- [ ] composeP
- ~~[ ] composeWith~~ Utilise functors like [fp-ts/Option](https://gcanti.github.io/fp-ts/modules/Option.ts.html) instead.
- [x] concat - [fp-ts/Array::getMonoid](https://gcanti.github.io/fp-ts/modules/Array.ts.html#getmonoid)/[fp-ts-std/String::concat](https://samhh.github.io/fp-ts-std/modules/String.ts.html#concat)
- [x] cond - [fp-ts-std/Function::guard](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#guard)
- [x] construct - [fp-ts-std/Function::construct](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#construct)
- [x] constructN - [fp-ts-std/Function::construct](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#construct) w/ [fp-ts-std/Function::curry2T](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#curry2t) through [fp-ts-std/Function::curry5T](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#curry5t)
- [x] contains - [fp-ts/Array::elem](https://gcanti.github.io/fp-ts/modules/Array.ts.html#elem)/[fp-ts/string::includes](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#includes)
- [x] converge - [fp-ts-std/Function::converge](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#converge)
- [x] countBy - [fp-ts-std/Array::countBy](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#countby)
- [x] curry - [fp-ts-std/Function::curry2](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#curry2) through [fp-ts-std/Function::curry5](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#curry5)
- [x] curryN - [fp-ts-std/Function::curry2](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#curry2) through [fp-ts-std/Function::curry5](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#curry5)
- [x] dec - [fp-ts-std/Number::decrement](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#decrement)/[fp-ts/function::decrement](https://gcanti.github.io/fp-ts/modules/function.ts.html#decrement]
- [x] defaultTo - [fp-ts/Option::getOrElse](https://gcanti.github.io/fp-ts/modules/Option.ts.html#getorelse)
- [x] descend - [fp-ts/Ord::ordNumber](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#ordnumber)/[fp-ts/Ord::getDualOrd](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#getdualord)
- [x] difference - [fp-ts/Array::difference](https://gcanti.github.io/fp-ts/modules/Array.ts.html#difference)
- [x] differenceWith - [fp-ts/Array::difference](https://gcanti.github.io/fp-ts/modules/Array.ts.html#difference)
- [x] dissoc - [fp-ts-std/Record::omit](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#omit)
- [ ] dissocPath
- [x] divide - [fp-ts-std/Number::divide](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#divide)/[fp-ts/Field](https://gcanti.github.io/fp-ts/modules/Field.ts.html)
- [x] drop - [fp-ts/Array::dropLeft](https://gcanti.github.io/fp-ts/modules/Array.ts.html#dropleft)/[fp-ts-std/String::dropLeft](https://samhh.github.io/fp-ts-std/modules/String.ts.html#dropleft)
- [x] dropLast - [fp-ts/Array::dropRight](https://gcanti.github.io/fp-ts/modules/Array.ts.html#dropright)/[fp-ts-std/String::dropRight](https://samhh.github.io/fp-ts-std/modules/String.ts.html#dropright)
- [x] dropLastWhile - [fp-ts-std/Array::dropRightWhile](https://samhh.github.io/fp-ts/modules/Array.ts.html#droprightwhile)/[fp-ts-std/String::dropRightWhile](https://samhh.github.io/fp-ts/modules/String.ts.html#droprightwhile)
- [x] dropRepeats - [fp-ts-std/Array::dropRepeats](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#droprepeats)
- [x] dropRepeatsWith - [fp-ts-std/Array::dropRepeats](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#droprepeats)
- [x] dropWhile - [fp-ts/Array::dropLeftWhile](https://gcanti.github.io/fp-ts/modules/Array.ts.html#dropleftwhile)/[fp-ts-std/String::dropLeftWhile](https://samhh.github.io/fp-ts-std/modules/String.ts.html#dropleftwhile)
- [x] either - [fp-ts-std/Boolean::either](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#either)/[fp-ts/Option::alt](https://gcanti.github.io/fp-ts/modules/Option.ts.html#alt)
- [x] empty - [fp-ts/Array::empty](https://gcanti.github.io/fp-ts/modules/Array.ts.html#empty)/[fp-ts/Record::empty](https://gcanti.github.io/fp-ts/modules/Record.ts.html#empty)/[fp-ts/Option::empty]/[fp-ts/string::empty](https://gcanti.github.io/fp-ts/modules/string.ts.html#empty)
- [x] endsWith - [fp-ts-std/Array::endsWith](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#endswith)/[fp-ts/string::endsWith](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#endswith)
- [x] eqBy - [fp-ts/Eq::contramap](https://gcanti.github.io/fp-ts/modules/Eq.ts.html#contramap)
- [x] eqProps - [fp-ts/Eq::contramap](https://gcanti.github.io/fp-ts/modules/Eq.ts.html#contramap)
- [x] equals - [fp-ts/Eq](https://gcanti.github.io/fp-ts/modules/Eq.ts.html)
- [x] evolve - [fp-ts/struct::evolve](https://gcanti.github.io/fp-ts/modules/struct.ts.html#evolve)
- [x] F - [fp-ts/function::constFalse](https://gcanti.github.io/fp-ts/modules/function.ts.html#constfalse)
- [x] filter - [fp-ts/Array::filter](https://gcanti.github.io/fp-ts/modules/Array.ts.html#filter)/[fp-ts/Record::filter](https://gcanti.github.io/fp-ts/modules/Record.ts.html#filter)
- [x] find - [fp-ts/Array::findFirst](https://gcanti.github.io/fp-ts/modules/Array.ts.html#findfirst)
- [x] findIndex - [fp-ts/Array::findIndex](https://gcanti.github.io/fp-ts/modules/Array.ts.html#findindex)
- [x] findLast - [fp-ts/Array::findLast](https://gcanti.github.io/fp-ts/modules/Array.ts.html#findlast)
- [x] findLastIndex - [fp-ts/Array::findLastIndex](https://gcanti.github.io/fp-ts/modules/Array.ts.html#findlastindex)
- [x] flatten - [fp-ts/Array::flatten](https://gcanti.github.io/fp-ts/modules/Array.ts.html#flatten)
- [x] flip - [fp-ts-std/Function::flip](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#flip)
- ~~[ ] forEach~~ Use functor `map` instead.
- ~~[ ] forEachObjIndexed~~ Use functor `map` instead.
- [x] fromPairs - [fp-ts/Record::fromFoldable](https://gcanti.github.io/fp-ts/modules/Record.ts.html#fromfoldable)
- [x] groupBy - [fp-ts/NonEmptyArray::groupBy](https://gcanti.github.io/fp-ts/modules/NonEmptyArray.ts.html#groupby)
- [x] groupWith - [fp-ts/NonEmptyArray::group](https://gcanti.github.io/fp-ts/modules/NonEmptyArray.ts.html#group)
- [x] gt - [fp-ts/Ord::gt](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#gt)
- [x] gte - [fp-ts/Ord::geq](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#geq)
- [x] has - [fp-ts/Record::hasOwnProperty](https://gcanti.github.io/fp-ts/modules/Record.ts.html#hasownproperty-function)
- [x] hasIn - [fp-ts/Record::hasOwnProperty](https://gcanti.github.io/fp-ts/modules/Record.ts.html#hasownproperty-function)
- [x] hasPath - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] head - [fp-ts/Array::head](https://gcanti.github.io/fp-ts/modules/Array.ts.html#head) / [fp-ts-std/String::head](https://samhh.github.io/fp-ts-std/modules/String.ts.html#head)
- [x] identical - [fp-ts/Eq::eqStrict](https://gcanti.github.io/fp-ts/modules/Eq.ts.html#eqstrict)
- [x] identity - [fp-ts/function::identity](https://gcanti.github.io/fp-ts/modules/function.ts.html#identity)
- [x] ifElse - [fp-ts-std/Function::ifElse](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#ifelse)
- [x] inc - [fp-ts-std/Number::increment](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#increment)/[fp-ts/function::increment](https://gcanti.github.io/fp-ts/modules/function.ts.html#increment]
- [x] includes - [fp-ts-std/Array::contains](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#contains)
- [x] indexBy - [fp-ts/NonEmptyArray::groupBy](https://gcanti.github.io/fp-ts/modules/NonEmptyArray.ts.html#groupby)
- [x] indexOf - [fp-ts/Array::indexOf](https://gcanti.github.io/fp-ts/modules/Array.ts.html#findindex)
- [x] init - [fp-ts/Array::init](https://gcanti.github.io/fp-ts/modules/Array.ts.html#init)/[fp-ts-std/String::init](https://samhh.github.io/fp-ts/modules/String.ts.html#init)
- ~~[ ] innerJoin~~ This function has a [misleading name](https://github.com/ramda/ramda/issues/2449). It can be trivially rewritten with `A.some` inside `A.filter` with each acting upon different arrays.
- [x] insert - [fp-ts/Array::insertAt](https://gcanti.github.io/fp-ts/modules/Array.ts.html#insertat)
- [x] insertAll - [fp-ts-std/Array::insertMany](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#insertmany)
- [x] intersection - [fp-ts/Array::intersection](https://gcanti.github.io/fp-ts/modules/Array.ts.html#intersection)
- [x] intersperse - [fp-ts/Array::intersperse](https://gcanti.github.io/fp-ts/modules/Array.ts.html#intersperse)
- [ ] into
- [x] invert - [fp-ts-std/Record::invertAll](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#invertall)
- [x] invertObj - [fp-ts-std/Record::invertLast](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#invertlast)
- [x] invoker - [fp-ts-std/Function::invoke](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#invoke)
- [x] is - [io-ts](https://gcanti.github.io/io-ts/) / [fp-ts-std/Function::is](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#is)
- [x] isEmpty - [fp-ts/Array::isEmpty](https://gcanti.github.io/fp-ts/modules/Array.ts.html#isempty)/[fp-ts/Record::isEmpty](https://gcanti.github.io/fp-ts/modules/Record.ts.html#isempty)/[fp-ts/string::isEmpty](https://gcanti.github.io/fp-ts/modules/string.ts.html#isempty)
- ~~[ ] isNil~~ Prefer `Option` type. Failing that, create `Eq` instances for `null` and `undefined`.
- [x] join - [fp-ts-std/Array::join](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#join)
- [x] juxt - [fp-ts-std/Function::fork](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#fork)
- [x] keys - [fp-ts/Record::keys](https://gcanti.github.io/fp-ts/modules/Record.ts.html#keys)
- [x] keysIn - [fp-ts/Record::keys](https://gcanti.github.io/fp-ts/modules/Record.ts.html#keys)
- [x] last - [fp-ts/Array::last](https://gcanti.github.io/fp-ts/modules/Array.ts.html#last)/[fp-ts-std/String::last](https://samhh.github.io/fp-ts-std/modules/String.ts.html#last)
- [x] lastIndexOf - [fp-ts/Array::lastIndexOf](https://gcanti.github.io/fp-ts/modules/Array.ts.html#findlastindex)
- [x] length - [fp-ts/Array::size](https://gcanti.github.io/fp-ts/modules/Array.ts.html#size)
- [x] lens - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] lensIndex - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] lensPath - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] lensProp - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] lift - [fp-ts/Array::ap](https://gcanti.github.io/fp-ts/modules/Array.ts.html#ap)
- [x] liftN - [fp-ts/Array::ap](https://gcanti.github.io/fp-ts/modules/Array.ts.html#ap)
- [x] lt - [fp-ts/Ord::lt](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#lt)
- [x] lte - [fp-ts/Ord::leq](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#leq)
- [x] map - [fp-ts/Array::map](https://gcanti.github.io/fp-ts/modules/Array.ts.html#map)
- [x] mapAccum - [fp-ts/Array::scanLeft](https://gcanti.github.io/fp-ts/modules/Array.ts.html#scanleft)
- [x] mapAccumRight - [fp-ts/Array::scanRight](https://gcanti.github.io/fp-ts/modules/Array.ts.html#scanright)
- [x] mapObjIndexed - [fp-ts/Record::mapWithIndex](https://gcanti.github.io/fp-ts/modules/Record.ts.html#mapwithindex)
- [x] match - [fp-ts-std/String::match](https://samhh.github.io/fp-ts-std/modules/String.ts.html#match)/[fp-ts-contrib/RegExp::match](https://gcanti.github.io/fp-ts-contrib/modules/RegExp.ts.html#match)
- [x] mathMod - [fp-ts-std/Number::mod](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#mod)
- [x] max - [fp-ts/Ord::max](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#max)
- [x] maxBy - [fp-ts/Ord::max](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#max) w/ [fp-ts/Ord::contramap](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#contramap)
- [x] mean - [fp-ts-std/Array::mean](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#mean)
- [x] median - [fp-ts-std/Array::median](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#median)
- [x] memoizeWith - [fp-ts-std/Function::memoize](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#memoize)
- [x] merge - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeAll - [fp-ts-std/Record::merge](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#merge)/[fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeDeepLeft - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeDeepRight - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeDeepWith - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeDeepWithKey - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeLeft - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeRight - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeWith - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] mergeWithKey - [fp-ts/Record::getMonoid](https://gcanti.github.io/fp-ts/modules/Record.ts.html#getmonoid)
- [x] min - [fp-ts/Ord::min](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#min)
- [x] minBy - [fp-ts/Ord::min](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#min) w/ [fp-ts/Ord::contramap](https://gcanti.github.io/fp-ts/modules/Ord.ts.html#contramap)
- [x] modulo - [fp-ts-std/Number::rem](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#rem)/[fp-ts/Field](https://gcanti.github.io/fp-ts/modules/Field.ts.html)
- [x] move - [fp-ts-std/Array::moveFrom](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#movefrom)/[fp-ts/Array::rotate](https://gcanti.github.io/fp-ts/modules/Array.ts.html#rotate)
- [x] multiply - [fp-ts-std/Number::multiply](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#multiply)/[fp-ts/Field](https://gcanti.github.io/fp-ts/modules/Field.ts.html)
- ~~[ ] nAry~~ Use curried functions and avoid `undefined`.
- [x] negate - [fp-ts-std/Number::negate](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#negate)/[fp-ts/Ring::negate](https://gcanti.github.io/fp-ts/modules/Ring.ts.html#negate)
- [x] none - [fp-ts-std/Array::none](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#none)
- [x] not - [fp-ts-std/Boolean::invert](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#invert)
- [x] nth - [fp-ts/Array::lookup](https://gcanti.github.io/fp-ts/modules/Array.ts.html#lookup)/[fp-ts-std/String::lookup](https://samhh.github.io/fp-ts-std/modules/String.ts.html#lookup)
- ~~[ ] nthArg~~ Use curried functions and [constant](https://gcanti.github.io/fp-ts/modules/function.ts.html#constant) instead.
- ~~[ ] o~~ Use [flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) instead.
- [x] objOf - [fp-ts/Record::singleton](https://gcanti.github.io/fp-ts/modules/Record.ts.html#singleton)
- [x] of - [fp-ts/Array::of](https://gcanti.github.io/fp-ts/modules/Array.ts.html#of)
- [x] omit - [fp-ts-std/Record::omit](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#omit)
- [x] once - [fp-ts-std/IO::once](https://samhh.github.io/fp-ts-std/modules/IO.ts.html#once)
- [x] or - [fp-ts-std/Boolean::or](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#or)/[fp-ts/Semigroup::semigroupAny](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html#semigroupall)
- [x] otherwise - [fp-ts/Either::getOrElse](https://gcanti.github.io/fp-ts/modules/Either.ts.html#getorelse) w/ [fp-ts/TaskEither](https://gcanti.github.io/fp-ts/modules/TaskEither.ts.html)
- [x] over - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] pair - [fp-ts/function::tuple](https://gcanti.github.io/fp-ts/modules/function.ts.html#tuple)
- ~~[ ] partial~~ Use currying instead.
- ~~[ ] partialRight~~ Use currying and potentially [fp-ts-std/Function::flip](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#flip) instead.
- [x] partition - [fp-ts/Array::partition](https://gcanti.github.io/fp-ts/modules/Array.ts.html#partition)
- [x] path - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] pathEq - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] pathOr - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] paths - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] pathSatisfies - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] pick - [fp-ts-std/Record::pick](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#pick)
- [ ] pickAll
- [x] pickBy - [fp-ts/Record::filterWithIndex](https://gcanti.github.io/fp-ts/modules/Record.ts.html#filterwithindex)
- [x] pipe - [fp-ts/function::flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow)
- [x] pipeK - [fp-ts/function::flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) w/ "K"-appended fp-ts functions such as [fp-ts/TaskEither::chainEitherK](https://gcanti.github.io/fp-ts/modules/TaskEither.ts.html#chaineitherk)
- [x] pipeP - [fp-ts/function::flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) w/ [fp-ts/Task](https://gcanti.github.io/fp-ts/modules/Task.ts.html)
- [x] pipeWith - [fp-ts/function::flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) w/ monads
- [x] pluck - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] prepend - [fp-ts/Array::cons](https://gcanti.github.io/fp-ts/modules/Array.ts.html#cons)
- [x] product - [fp-ts-std/Array::product](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#product)
- ~~[ ] project~~ Use [fp-ts-std/Record::pick](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#pick) in array map instead.
- [x] prop - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] propEq - [monocle-ts](https://gcanti.github.io/monocle-ts/) & [fp-ts/Eq](https://gcanti.github.io/fp-ts/modules/Eq.ts.html)
- [x] propIs - [io-ts](https://gcanti.github.io/io-ts/) & [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] propOr - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] props - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] propSatisfies - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] range - [fp-ts/NonEmptyArray::range](https://gcanti.github.io/fp-ts/modules/NonEmptyArray.ts.html#range)
- [x] reduce - [fp-ts/Array::reduce](https://gcanti.github.io/fp-ts/modules/Array.ts.html#reduce)
- [x] reduceBy - [fp-ts/Record::fromFoldableMap](https://gcanti.github.io/fp-ts/modules/Record.ts.html#fromfoldablemap)
- ~~[ ] reduced~~ Use less generalised functions or recursion instead.
- [x] reduceRight - [fp-ts/Array::reduceRight](https://gcanti.github.io/fp-ts/modules/Array.ts.html#reduceright)
- [x] reduceWhile - [fp-ts-std/Array::reduceWhile](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#reducewhile)
- [x] reject - [fp-ts-std/Array::reject](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#reject)/[fp-ts-std/Record::reject](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#reject)
- [x] remove - [fp-ts-std/Array::dropAt](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#dropat)
- [x] repeat - [fp-ts/Array::replicate](https://gcanti.github.io/fp-ts/modules/Array.ts.html#replicate)
- [x] replace - [fp-ts/string::replace](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#replace)
- [x] reverse - [fp-ts/Array::reverse](https://gcanti.github.io/fp-ts/modules/Array.ts.html#reverse)/[fp-ts-std/String::reverse](https://samhh.github.io/fp-ts-std/modules/String.ts.html#reverse)
- [x] scan - [fp-ts/Array::scanLeft](https://gcanti.github.io/fp-ts/modules/Array.ts.html#scanleft)
- [x] sequence - [fp-ts/Array::sequence](https://gcanti.github.io/fp-ts/modules/Array.ts.html#sequence)
- [x] set - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] slice - [fp-ts-std/Array::slice](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#slice)/[fp-ts/string::slice](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#slice)
- [x] sort - [fp-ts/Array::sort](https://gcanti.github.io/fp-ts/modules/Array.ts.html#sort)
- [x] sortBy - [fp-ts/Array::sort](https://gcanti.github.io/fp-ts/modules/Array.ts.html#sort)
- [x] sortWith - [fp-ts/Array::sortBy](https://gcanti.github.io/fp-ts/modules/Array.ts.html#sortBy)
- [x] split - [fp-ts/string::split](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#split)
- [x] splitAt - [fp-ts/Array::splitAt](https://gcanti.github.io/fp-ts/modules/Array.ts.html#splitat)/[fp-ts-std/String::splitAt](https://samhh.github.io/fp-ts-std/modules/String.ts.html#splitat)
- [x] splitEvery - [fp-ts/Array::chunksOf](https://gcanti.github.io/fp-ts/modules/Array.ts.html#chunksof)
- [x] splitWhen - [fp-ts/Array:spanLeft](https://gcanti.github.io/fp-ts/modules/Array.ts.html#spanleft)
- [x] startsWith - [fp-ts-std/Array::startsWith](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#startswith)/[fp-ts/string::startsWith](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#startswith)
- [x] subtract - [fp-ts-std/Number::subtract](https://samhh.github.io/fp-ts-std/modules/Number.ts.html#subtract)/[fp-ts/Field](https://gcanti.github.io/fp-ts/modules/Field.ts.html)
- [x] sum - [fp-ts-std/Array::sum](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#sum)
- [x] symmetricDifference - [fp-ts-std/Array::symmetricDifference](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#symmetricdifference)
- [x] symmetricDifferenceWith - [fp-ts-std/Array::symmetricDifference](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#symmetricdifference)
- [x] T - [fp-ts/function::constTrue](https://gcanti.github.io/fp-ts/modules/function.ts.html#consttrue)
- [x] tail - [fp-ts/Array::tail](https://gcanti.github.io/fp-ts/modules/Array.ts.html#tail)/[fp-ts-std/String::tail](https://samhh.github.io/fp-ts/modules/String.ts.html#tail)
- [x] take - [fp-ts/Array::takeLeft](https://gcanti.github.io/fp-ts/modules/Array.ts.html#takeleft)/[fp-ts-std/String::takeLeft](https://samhh.github.io/fp-ts-std/modules/String.ts.html#takeleft)
- [x] takeLast - [fp-ts/Array::takeRight](https://gcanti.github.io/fp-ts/modules/Array.ts.html#takeright)/[fp-ts-std/String::takeLast](https://samhh.github.io/fp-ts-std/modules/String.ts.html#takeright)
- [x] takeLastWhile - [fp-ts-std/Array::takeRightWhile](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#takerightwhile)/[fp-ts-std/String::takeRightWhile](https://samhh.github.io/fp-ts-std/modules/String.ts.html#takerightwhile)
- [x] takeWhile - [fp-ts/Array::takeLeftWhile](https://gcanti.github.io/fp-ts/modules/Array.ts.html#takeleftwhile)/[fp-ts-std/String::takeLeftWhile](https://samhh.github.io/fp-ts-std/modules/String.ts.html#takeleftwhile)
- [x] tap - [fp-ts-std/IO::tap](https://samhh.github.io/fp-ts-std/modules/IO.ts.html#tap)
- [x] test - [fp-ts-std/String::test](https://samhh.github.io/fp-ts-std/modules/String.ts.html#test)/[fp-ts-contrib/RegExp::test](https://gcanti.github.io/fp-ts-contrib/modules/RegExp.ts.html#test)
- [x] thunkify - [fp-ts/function::constant](https://gcanti.github.io/fp-ts/modules/function.ts.html#constant)
- [x] times - [fp-ts/Array::makeBy](https://gcanti.github.io/fp-ts/modules/Array.ts.html#makeby)
- [x] toLower - [fp-ts/string::toLowerCase](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#tolowercase)
- [x] toPairs - [fp-ts/Record::collect](https://gcanti.github.io/fp-ts/modules/Record.ts.html#collect)
- [x] toPairsIn - [fp-ts/Record::collect](https://gcanti.github.io/fp-ts/modules/Record.ts.html#collect)
- [x] toString - [fp-ts-std/String::fromNumber](https://samhh.github.io/fp-ts-std/modules/String.ts.html#fromnumber)
- [x] toUpper - [fp-ts/string::toUpperCase](https://gcanti.github.io/fp-ts-std/modules/string.ts.html#touppercase)
- [ ] transduce
- [x] transpose - [fp-ts-std/Array::transpose](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#transpose)
- [x] traverse - [fp-ts/Array::traverse](https://gcanti.github.io/fp-ts/modules/Array.ts.html#traverse)
- [x] trim - [fp-ts/string::trim](https://gcanti.github.io/fp-ts/modules/string.ts.html#trim)
- [x] tryCatch - [fp-ts/Either::tryCatch](https://gcanti.github.io/fp-ts/modules/Either.ts.html#trycatch)
- [x] type - [io-ts](https://gcanti.github.io/io-ts/)
- ~~[ ] unapply~~ Use currying or tuples instead.
- ~~[ ] unary~~ Use currying and potentially [fp-ts-std/Function::unary](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#unary) instead.
- [x] uncurryN - [fp-ts-std/Function::uncurry2](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#uncurry2) through [fp-ts-std/Function::uncurry5](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#uncurry5)
- [x] unfold - [fp-ts/Array::unfold](https://gcanti.github.io/fp-ts/modules/Array.ts.html#unfold)
- [x] union - [fp-ts/Array::union](https://gcanti.github.io/fp-ts/modules/Array.ts.html#union)
- [x] unionWith - [fp-ts/Array::union](https://gcanti.github.io/fp-ts/modules/Array.ts.html#union)
- [x] uniq - [fp-ts/Array::uniq](https://gcanti.github.io/fp-ts/modules/Array.ts.html#uniq)
- [x] uniqBy - [fp-ts/Array::uniq](https://gcanti.github.io/fp-ts/modules/Array.ts.html#uniq)
- [x] uniqWith - [fp-ts/Array::uniq](https://gcanti.github.io/fp-ts/modules/Array.ts.html#uniq)
- [x] unless - [fp-ts-std/Function::unless](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#unless)
- [x] unnest - [fp-ts/Array::flatten](https://gcanti.github.io/fp-ts/modules/Array.ts.html#flatten)
- [x] until - [fp-ts-std/Function::until](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#until)
- [x] update - [fp-ts/Array::updateAt](https://gcanti.github.io/fp-ts/modules/Array.ts.html#updateat)
- [ ] useWith
- [x] values - [fp-ts-std/Record::values](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#values)
- [x] valuesIn - [fp-ts-std/Record::values](https://samhh.github.io/fp-ts-std/modules/Record.ts.html#values)
- [x] view - [monocle-ts](https://gcanti.github.io/monocle-ts/)
- [x] when - [fp-ts-std/Function::when](https://samhh.github.io/fp-ts-std/modules/Function.ts.html#when)
- [x] where - [fp-ts/Eq](https://gcanti.github.io/fp-ts/modules/Eq.ts.html)
- [x] whereEq - [fp-ts/Eq](https://gcanti.github.io/fp-ts/modules/Eq.ts.html)
- [x] without - [fp-ts-std/Array::without](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#without)
- [x] xor - [fp-ts-std/Boolean::xor](https://samhh.github.io/fp-ts-std/modules/Boolean.ts.html#xor)
- [x] xprod - [fp-ts-std/Array::cartesian](https://samhh.github.io/fp-ts-std/modules/Array.ts.html#cartesian)
- [x] zip - [fp-ts/Array::zip](https://gcanti.github.io/fp-ts/modules/Array.ts.html#zip)
- [x] zipObj - [fp-ts/Record::fromFoldable](https://gcanti.github.io/fp-ts/modules/Record.ts.html#fromfoldable)
- [x] zipWith - [fp-ts/Array::zipWith](https://gcanti.github.io/fp-ts/modules/Array.ts.html#zipwith)

