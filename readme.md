# CSS Eval

Tiny library for fully evaluating CSS properties and variables on a target element.

## Install

```sh
npm install --save css-eval
```

## Usage

The following functions are provided:

```ts
function get ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): string;
function getAngle ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): number;
function getLength ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): number;
function getTime ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): number;
```

They can be used like this:

```ts
import Eval from 'css-eval';

// Getting a custom target node, otherwise it'll be "document.body" if one is not manually provided

const target = document.querySelector ( '#foo' );

// Reading an unresolved style property or variable

Eval.get ( 'width' );
Eval.get ( 'width', target );
Eval.get ( '--custom' );
Eval.get ( '--custom', target );

// Reading a resolved angle property or variable, the number of "deg" will be returned

Eval.getAngle ( 'rotate' );
Eval.getAngle ( 'rotate', target );
Eval.getAngle ( '--custom' );
Eval.getAngle ( '--custom', target );

// Reading a resolved length property or variable, the number of "px" will be returned

Eval.getLength ( 'width' );
Eval.getLength ( 'width', target );
Eval.getLength ( '--custom' );
Eval.getLength ( '--custom', target );

// Reading a resolved time property or variable, the number of "ms" will be returned

Eval.getTime ( 'transition-duration' );
Eval.getTime ( 'transition-duration', target );
Eval.getTime ( '--custom' );
Eval.getTime ( '--custom', target );
```

## License

MIT © Fabio Spampinato
