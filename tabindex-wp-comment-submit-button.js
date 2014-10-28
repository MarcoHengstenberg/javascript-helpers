/**
 * This snippet adds a tabindex to the comment reply submit button
 * because there is none. Also see https://core.trac.wordpress.org/ticket/19930
 * for more information
 *
 * Author: Thomas Herzog
 */
var comment_respond_form = document.querySelector( '#respond' );
if ( comment_respond_form !== null ) {
  var attribute = document.createAttribute( 'tabindex' );
  attribute.value = '4';
  comment_respond_form.querySelector( '#submit' ).setAttributeNode( attribute );
}