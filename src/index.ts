
/* IMPORT */

import {get} from './utils';
import {parseAngle, parseLength, parseTime} from './utils';
import {resolveAngle, resolveLength, resolveTime} from './utils';

/* MAIN */

//TODO: Implement, getFrequency, but are frequencies used in any property?
//TODO: Implement, getResolution, but are resolutions used in any property?

const Eval = {

  /* API */

  get: ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): string => {

    return get ( property, target );

  },

  getAngle: ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): number => {

    return parseAngle ( resolveAngle ( get ( property, target ), target ) );

  },

  getLength: ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): number => {

    return parseLength ( resolveLength ( get ( property, target ), target ) );

  },

  getTime: ( property: string, target: HTMLElement | SVGElement | MathMLElement = document.body ): number => {

    return parseTime ( resolveTime ( get ( property, target ), target ) );

  }

};

/* EXPORT */

export default Eval;
