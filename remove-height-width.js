/**
 * This snippet gets all img tags and removes the
 * height and width attributes
 *
 * Author: Thomas Herzog
 */
for ( var i = 0; i < document.querySelectorAll( 'img' ).length; i++ ) {
  document.querySelectorAll( 'img' )[i].removeAttribute( 'height' );
  document.querySelectorAll( 'img' )[i].removeAttribute( 'width' );
}