export default class Helper {
  static convertFormatDate(dateFromBD) {
    let date = new Date(dateFromBD.split(".").reverse().join("-"));
    return date;
  }
  static getFullDate(date) {
    return this.convertFormatDate(date).toISOString().substring(0, 10);
  }
  static getMonthYear(date) {
    return this.convertFormatDate(date).toISOString().substring(0, 7);
  }
  static getFieldsName(dataList) {
    return Object.getOwnPropertyNames(...dataList);
  }
}
