/**
 * Represents a menu item.
 * @constructor
 * @param {string} name - 메뉴 이름
 * @param {integer} price - 메뉴 가격
 * @param {integer} quantity - 메뉴 개수
 */
const MenuItem = {
  name: "",
  price: 0,
  quantity: 0,
};

/**
 * Represents a vending machine
 * @constructor
 * @param {Array} menuItems - 자판기에 추가할 메뉴들
 */
class VendingMachine {
  constructor(menuItems) {}

  /**
   * 가격으로 아이템의 정보를 가져온다.
   * @abstract
   * @return {MenuItem}
   */
  getPriceReturnsItem(price) {}

  /**
   * 아이템을 구매한 결과를 알려준다.
   * @abstract
   * @return {String}
   */
  getItem(price) {}
}
