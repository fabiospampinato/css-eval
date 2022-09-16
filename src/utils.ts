
/* CONSTANTS */

const DUMMY = document.createElement ( 'span' );

/* GET HELPERS */

const get = ( property: string, target: Element ): string => {

  return getComputedStyle ( target ).getPropertyValue ( property ) || '';

};

/* PARSE HELPERS */

const parseNumber = ( value: string ): number => {

  return parseFloat ( value ) || 0;

};

const parseAngle = ( value: string ): number => {

  return parseNumber ( value );

};

const parseLength = ( value: string ): number => {

  return parseNumber ( value );

};

const parseTime = ( value: string ): number => {

  return parseNumber ( value ) * 1000;

};

/* RESOLVE HELPERS */

const resolve = ( property: string, value: string, target: HTMLElement | SVGElement | MathMLElement ): string => {

  if ( value.includes ( '(' ) ) { // Something to actually resolve //TODO: Always use custom registered properties instead, once they become widely supported (https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty)

    target.appendChild ( DUMMY );

    DUMMY.style[property] = value;

    const valueResolved = ( property === 'min-width' ) ? get ( property, DUMMY ) : `${DUMMY.clientWidth}px`; // Forcing "min-width" to be measured in pixels

    DUMMY.style[property] = '';

    target.removeChild ( DUMMY );

    return valueResolved;

  } else { // Nothing to actually resolve

    return value;

  }

};

const resolveAngle = ( value: string, target: HTMLElement | SVGElement | MathMLElement ): string => {

  return resolve ( 'rotate', value, target );

};

const resolveLength = ( value: string, target: HTMLElement | SVGElement | MathMLElement ): string => {

  return resolve ( 'min-width', value, target );

};

const resolveTime = ( value: string, target: HTMLElement | SVGElement | MathMLElement ): string => {

  return resolve ( 'transition-duration', value, target );

};

/* EXPORT */

export {get};
export {parseNumber, parseAngle, parseLength, parseTime};
export {resolve, resolveAngle, resolveLength, resolveTime};
