/**
 * This script searches for the tables with the class 'toggletable'
 * so that every second td-element in those tables can act like an accordeon
 *
 * Author: Thomas Herzog
 */
for ( var i = 0; i < document.querySelectorAll( '.toggletable' ).length; i++ ) {

  // get the id of the current table
  var table_id = document.querySelectorAll( '.toggletable' )[i].id;

  // walk through the tr elements
  for ( var tri = 0; tri < document.querySelectorAll( '#' + table_id + ' tr' ).length; tri++ ) {

    // the element
    var element = document.querySelectorAll( '#' + table_id + ' tr' )[tri];

    // check if tri is even or odd
    if ( tri % 2 == 0 && tri != 0 ) {
      // hide all elements exept the first
      element.style.display = 'none';
    } else {
      // add the odd classes to the odd elements
      var element_classes = element.className;
      element.className = element.className + ' odd';

      // set the onclick event on the tr element
      // to expand the next tr with the infotext
      // for this chapter
      element.onclick = function() {

        // get the sibling
        var sibling = this.nextSibling;
        while ( sibling && sibling.nodeName != 'TR' )
          sibling = sibling.nextSibling

        // toggle view
        if ( sibling.style.display == 'none' )
          sibling.style.display = 'table-row';
        else
          sibling.style.display = 'none';

        // change arrow
        var arrow = this.querySelector( '.arrow' );
        var arrow_classes = arrow.className;
        if ( arrow_classes.indexOf( 'up' ) == -1 )
          arrow.className = arrow_classes + ' up';
        else
          arrow.className = arrow_classes.replace( 'up', '' );
      }
    }
  }
};