# prop-drilling

This is a companion repo to the blog post [Repeat yourself a little less:
Strategies for mitigating prop drilling with React and TypeScript][blog]. It demonstrates the problem of prop drilling in React+TypeScript, then shows several possible approaches for mitigating it.

Here's what the demo app looks like:

![The demo app](/app-fully-threaded.gif)

Here are the variations on the theme:

|Technique|Demo|Lines|Notes|
|---------|-------|-----|-----|
|[Initial Example](/src/00a-initial.tsx)|[codepen][00a-initial]|64|Starter app with two synchronized counters|
|[Fully Threaded](/src/00b-fully-threaded.tsx)|[codepen][00b-fully-threaded]|99|Going up to three counters illustrates the problem of prop drilling.|
|[Fewer Components](/src/01-fewer-components.tsx)|[codepen][01-fewer-components]|46|By inlining separate components, we dramatically reduce the amount of code.|
|[Single Object](/src/02-single-object.tsx)|[codepen][02-single-object]|88|Merging related props into a single object eliminates intermediate components' need to know the details of that object.|
|[Use Children](/src/03-use-children.tsx)|[codepen][03-use-children]|72|By passing `children` to a container component, we free it from having to understand its children's props.|
|[Context API](/src/04-context-api.tsx)|[codepen][04-context-api]|91|React's [Context API][context-api] provides a built-in way to do dependency injection.|
|[Pick Props](/src/05-pick-props.tsx)|[codepen][05-pick-props]|93|A TypeScript-friendly way to have one component "pick" props from another, both for types and at runtime.|

Do you have another way you like to deal with prop drilling? Send a PR to add it!

## Development

    yarn
    yarn type-check

[blog]: https://blog.logrocket.com/mitigating-prop-drilling-with-react-and-typescript/

[00a-initial]: https://codesandbox.io/s/green-pond-kpv82?file=/src/App.tsx
[00b-fully-threaded]: https://codesandbox.io/s/hungry-solomon-29f8l?file=/src/App.tsx
[01-fewer-components]: https://codesandbox.io/s/nostalgic-framework-erkfd?file=/src/App.tsx
[02-single-object]: https://codesandbox.io/s/friendly-gates-38xdq?file=/src/App.tsx:0-2023
[02b-single-object-abc]: https://codesandbox.io/s/gallant-turing-w1hn4?file=/src/App.tsx
[03-use-children]: https://codesandbox.io/s/sparkling-wood-o8lry?file=/src/App.tsx
[04-context-api]: https://codesandbox.io/s/distracted-kepler-71vpz?file=/src/App.tsx
[05-pick-props]: https://codesandbox.io/s/stoic-snow-upjv2?file=/src/App.tsx
[context-api]: https://reactjs.org/docs/context.html
