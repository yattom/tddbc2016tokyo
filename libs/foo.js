'use strict';

(function(exports) {
  var create_point = function( x,  y) {
    return {
      x: x ,
      y: y,
      str : "(" + x + ","  + y +")"
    };
  };

  var is_equal_point = function(point_a, point_b) {
    return ( (point_a.x == point_b.x) && (point_a.y == point_b.y) );
  };


  function is_upper_side(point_a, point_b) {
    return (point_a.y === (point_b.y - 1) && point_a.x === point_b.x);
  }

  function is_lower_side(point_a, point_b) {
    return (point_a.y === (point_b.y + 1) && point_a.x === point_b.x);
  }

  function is_left_side(point_a, point_b) {
    return (point_a.x === (point_b.x + 1) && point_a.y === point_b.y);
  }

  function is_right_side(point_a, point_b) {
    return (point_a.x === (point_b.x - 1)) && point_a.y === point_b.y;
  }

  var is_neighbor = function(point_a, point_b) {
    return (
      is_upper_side(point_a, point_b) ||
      is_lower_side(point_a, point_b)  ||
      is_left_side(point_a, point_b) ||
      is_right_side(point_a, point_b)
    );
    // return Math.abs(point_a.x - point_b.x) + Math.abs(point_a.y - point_b.y) == 1
  };

  exports.Foo = {
    foo: true,
    create_point: create_point,
    is_equal_point: is_equal_point,
    is_neighbor: is_neighbor,
  }
}(this));
