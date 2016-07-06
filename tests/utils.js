/**
 * Created by casperlai on 2016/7/6.
 */
/**
 * Mock event helper
 */

export function trigger(target, event, process) {
  const e = document.createEvent('HTMLEvents');
  e.initEvent(event, true, true);
  if (process) process(e);
  target.dispatchEvent(e);
}
