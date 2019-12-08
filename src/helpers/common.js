import { MAP_URL } from "../data/config";

/**
 * Преобразует дробное число, представляющее из себя количество километров в строку вида "%x км. %y м."
 * @param {Float} path - Число, представляющее из себя количество километров
 */
export const formatPath = number => {
  const formattedStr = number.toFixed(3).toString();
  const splitterData = formattedStr.split(".");
  const km = splitterData[0] === "0" ? "" : splitterData[0];
  const m = splitterData[1];

  return `${km} км. ${m} м.`;
};

/**
 * Возвращает ссылку на страницу с построенным маршрутом между точками
 * @param {Float} lang
 * @param {Float} latt
 */
export const getMapUrl = (startLat, startLon, endLat, endLon) => {
  return `${MAP_URL}${startLat},${startLon}~${endLat},${endLon}&rtt=auto&ruri=~&z=10`;
};
