export function priceLimit(value) {   // 控制输入价格
  const regStrs = [
    ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
    ['[^\\d\\.]+', ''], // 禁止录入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'], // 禁止录入两个以上的点
    ['^(\\d+\\.\\d{2}).+', '$1'], // 禁止录入小数点后两位以上
  ];
  regStrs.forEach((item) => {
    const reg = new RegExp(item[0]);
    value = value.replace(reg, item[1]);
  });
  return value;
}

export function priceLimit2(value) {   // 控制输入价格
  const regStrs = [
    ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
    ['[^\\d\\.]+', ''], // 禁止录入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'], // 禁止录入两个以上的点
    ['^(\\d+\\.\\d{3}).+', '$1'], // 禁止录入小数点后三位以上
  ];
  regStrs.forEach((item) => {
    const reg = new RegExp(item[0]);
    value = value.replace(reg, item[1]);
  });
  return value;
}

export function numberLimit(value) {      // 控制只能输入正整数
  const regStrs = [
    ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
    ['[^\\d]+', ''], // 禁止录入任何非数字
  ];

  regStrs.forEach((item) => {
    const reg = new RegExp(item[0]);
    value = value.replace(reg, item[1]);
  });
  return value;
}

export default {};
