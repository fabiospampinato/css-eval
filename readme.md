# CSS Eval

Tiny function for fully evaluating CSS properties and variables on a target element.

## Install

```sh
npm install --save css-eval
```

## Usage

```ts
import Eval from 'css-eval';

// Reading an unresolved style property or variable

Eval.get ( 'width' );
Eval.get ( '--custom' );

// Reading a resolved angle property or variable, the number of "deg" will be returned

Eval.getAngle ( 'rotate' );
Eval.getAngle ( '--custom' );

// Reading a resolved length property or variable, the number of "px" will be returned

Eval.getLength ( 'width' );
Eval.getLength ( '--custom' );

// Reading a resolved time property or variable, the number of "ms" will be returned

Eval.getTime ( 'transition-duration' );
Eval.getTime ( '--custom' );

// Explicitly setting a target element, otherwise will it be "document.body" by default

Eval.getLength ( '--custom', document.querySelector ( '#foo' ) );
```

## License

MIT © Fabio Spampinato
