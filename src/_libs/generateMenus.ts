import 'server-only';
import fs from 'fs';
import path from 'path';

const PATH = {
  PERFIX: '/sequel/',
  PAGE: '/page.tsx'
};
const REGEXP = {
  title: createCommonRegexp('title'),
  image: createCommonRegexp('image')
};

/**
 *
 * @description 创建匹配正则
 * @param {string} tag
 * @returns {RegExp}
 */
function createCommonRegexp(tag: string) {
  return new RegExp(`(?<=\\/\\/\\s*--${tag}:\\s*).+(?=\\s*--)`);
}

/**
 *
 * @description 提取匹配字符串
 * @param {string} source
 * @param {RegExp} flag
 */
function match(source: string, flag: RegExp) {
  return source.match(flag);
}

/**
 *
 * @description 提取 title, 必须提供
 * @param {string} source
 */
function getTitle(source: string) {
  return match(source, REGEXP.title);
}

/**
 *
 * @description 提取图片信息, 可选
 * @param {string} source
 */
function getImage(source: string) {
  return match(source, REGEXP.image);
}

/**
 *
 * @description 判断是否是路由文件夹
 * @param name
 * @returns
 */
function isRoute(name: string) {
  if (name.length === 0) return false;

  const firstChar = name[0];
  return firstChar !== '_' && /\w/.test(firstChar);
}

const directory = path.join(process.cwd(), '/src/app' + PATH.PERFIX);

export function getAllMenu() {
  const catalog = fs.readdirSync(directory);

  return catalog
    .filter(
      (name) => isRoute(name) && fs.lstatSync(directory + name).isDirectory()
    )
    .map((name) => {
      const text = fs.readFileSync(directory + name + PATH.PAGE, 'utf-8');

      return {
        path: PATH.PERFIX + name,
        title: getTitle(text)?.[0].trim() || ''
      };
    });
}
