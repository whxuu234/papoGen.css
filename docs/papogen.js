/*!
 * # papoGen 0.0.1 - papogen.js
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
//require('../js/state');

// button

function inherit () {
  for (let type of ['buttons', 'labels']) {
    for (let i = 0; i < $(`.${type}`).length; i++) {
      let curr = $(`.${type}`)[i]
      let curr_class = curr.classList.value
      let child_class = curr_class.replace('horizontal', '')
                                  .replace('vertical', '')
                                  .replace(type, '')
                                  .trim().replace(/  +/g, ' ')
      // add child class
      $(curr.children).addClass(child_class)

      // remove child class from parent
      for (let name of child_class.split(' ')) {
        $(curr).removeClass(name)
      }
    }
  }
}

$(document).ready(() => {
  inherit()
})
