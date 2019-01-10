import { fooBeta } from '../foo-module/foo-beta.js';
export function barAlpha() {
	console.log('barAlpha');
	console.log('fooBeta is ', typeof fooBeta);
}
