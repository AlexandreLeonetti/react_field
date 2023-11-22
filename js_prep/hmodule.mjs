foo = 25;

export default function foo(){};

/*
 * hoisting functions first so foo will be assigned the value 
 * 25 last.
 * so this is basically exporting 25
 */


/*
 * export default function foo(){};
 *
 * is transformed into 
 *
 * function foo(){}
 *
 * export {foo as default};
 *
 * the above module is translated into :
 *
 * function foo(){}
 * foo = 25;
 * export {foo as default};
 *
 *
 */

