/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
  verifyCode: string;
  verifyUUID: string;
}

export interface VerifyResultModel {
  verifyCodeImg: string;
  verifyUUID: string;
}

export interface UserInfo {
  // 用户id
  id: string;
  // 用户名
  username: string;
  // 真实名字
  realname: string;
  // 昵称
  nickname: string;
  // 头像
  avatar: string;
  // 手机号
  phone: string;
  // 邮箱
  email: string;
  // 角色id集合
  roleIds: string[];
  // 部门信息
  dept: DeptInfo;
  // 部门id
  deptId: string;
  // 账号状态
  status: number;
  // 删除标识
  deleted: number;
}

export interface DeptInfo {
  id: string;
  parentId: string;
  deptName: string;
  deptCode: string;
  level: number;
  levelCode: string;
  sort: number;
  status: number;
}

export interface RoleInfo {
  id: string;
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  browser: string;
  engine: string;
  engineVersion: string;
  expireTime: string;
  ip: string;
  loginTime: string;
  loginType: string;
  mobile: boolean;
  platform: string;
  os: string;
  osVersion: string;
  version: string;
  permissions: string[];
  token: string;
  roles: RoleInfo[];
  // 用户id
  user: UserInfo;
}
