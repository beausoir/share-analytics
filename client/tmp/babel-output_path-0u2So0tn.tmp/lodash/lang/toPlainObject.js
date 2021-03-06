define('lodash/lang/toPlainObject', ['exports', 'lodash/internal/baseCopy', 'lodash/object/keysIn'], function (exports, _lodashInternalBaseCopy, _lodashObjectKeysIn) {
  'use strict';

  /**
   * Converts `value` to a plain object flattening inherited enumerable
   * properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return (0, _lodashInternalBaseCopy['default'])(value, (0, _lodashObjectKeysIn['default'])(value));
  }

  exports['default'] = toPlainObject;
});