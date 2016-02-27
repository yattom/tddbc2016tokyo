'use strict';

var assert = require('chai').assert;
var Foo = require('../libs/foo').Foo;

describe('座標のオブジェクト', function() {
  var point;
  before(function() {
    point = Foo.create_point(4, 7);
  });

  it('x座標が取れる', function() {
    assert.equal( point.x, 4 );
  });

  it('y座標が取れる', function() {
    assert.equal( point.y, 7 );
  });

  it('座標ノ文字列が取れる', function() {
    assert.equal( point.str, "(4,7)");
  });

  describe('数値のバリエーション', function() {
    it('マイナスの場合', function() {
      var point = Foo.create_point(-1, -2);
      assert.equal(point.x, -1);
      assert.equal(point.y, -2);
      assert.equal( point.str, "(-1,-2)");
    });

    it('小数点数の場合(結果は未定義)', function() {
      var point = Foo.create_point(0.5, 6.666666);
      // 小数を渡されてもエラーにはならないが、結果は未定義
    });

  });
});

describe('座標の比較', function() {
  it("等しい", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(4, 7);
    var is_equal = Foo.is_equal_point(pointA, pointB);
    assert.equal(is_equal, true);
  });

  it("異なる", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(3, 8);
    var is_equal = Foo.is_equal_point(pointA, pointB);
    assert.equal(is_equal, false);
  });

  it("上に隣接", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(4, 8);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, true);
  });

  it("下に隣接", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(4, 6);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, true);
  });

  it("左に隣接", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(3, 7);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, true);
  });

  it("右に隣接", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(5, 7);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, true);
  });

  it("右上で隣接しない", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(5, 8);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, false);
  });

  it("右下で隣接しない", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(5, 6);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, false);
  });

  it("左上で隣接しない", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(3, 8);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, false);
  });

  it("座標が等しいときは隣接しない", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(4, 7);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, false);
  });

  it("左に2離れている座標は隣接しない", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(2, 7);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, false);
  });

  it("右に2上に2離れている座標は隣接しない", function() {
    var pointA = Foo.create_point(4, 7);
    var pointB = Foo.create_point(6, 9);
    var is_neighbor = Foo.is_neighbor(pointA, pointB);
    assert.equal(is_neighbor, false);
  });
});

describe('格子点集合', function() {
  var pointA = Foo.create_point(4,7);
  var pointB = Foo.create_point(3,8);

//  var point_set = Foo.create_point_set(pointA.pointB);
//  var is_contain = Foo.is_contain();
//  var is_contain = point_set.is_contain();


});
