const permissionList = [               // 权限列表
    { index: 0, name: '登记挂号', weight: 1 },
    // { index: 1, name: '门诊售药', weight: 1 * 2 },
    { index: 2, name: '医生工作站', weight: 1 * 2 * 2 },
    { index: 3, name: '门诊收费', weight: (1 * 2 * 2 * 2) + (1 * 2) },
    { index: 4, name: '门诊药房', weight: 1 * 2 * 2 * 2 * 2 },
    { index: 5, name: '药品进销存', weight: 1 * 2 * 2 * 2 * 2 * 2 },
    { index: 6, name: '模板', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 },
    { index: 7, name: '客户档案', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 },
    { index: 8, name: '随访', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 },
    { index: 9, name: '统计', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 },
    { index: 10, name: '诊所管理', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 },
    // { index: 11, name: '管理员管理', weight: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 },
];

export function hasPermission(index, permission) {
  const rightItem = permissionList.find((item) => {
    return item.index === index;
  });
  if (!rightItem) {
    return false;
  }
  return (rightItem.weight & permission) !== 0;
}

export default {};
