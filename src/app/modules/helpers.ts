/**
 * Create an object with values equal to its key names with dublicate checking
 */

export function keyMirror(obj: Object): Object {
    const output = {};
  
    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(output, key)) {
        output[key] = key;
      }
    }
  
    return output;
}