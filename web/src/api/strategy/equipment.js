import service from '@/utils/request'
// @Tags Equipment
// @Summary 创建装备
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Equipment true "创建装备"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /e/createEquipment [post]
export const createEquipment = (data) => {
  return service({
    url: '/e/createEquipment',
    method: 'post',
    data
  })
}

// @Tags Equipment
// @Summary 删除装备
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Equipment true "删除装备"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /e/deleteEquipment [delete]
export const deleteEquipment = (params) => {
  return service({
    url: '/e/deleteEquipment',
    method: 'delete',
    params
  })
}

// @Tags Equipment
// @Summary 批量删除装备
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除装备"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /e/deleteEquipment [delete]
export const deleteEquipmentByIds = (params) => {
  return service({
    url: '/e/deleteEquipmentByIds',
    method: 'delete',
    params
  })
}

// @Tags Equipment
// @Summary 更新装备
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Equipment true "更新装备"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /e/updateEquipment [put]
export const updateEquipment = (data) => {
  return service({
    url: '/e/updateEquipment',
    method: 'put',
    data
  })
}

// @Tags Equipment
// @Summary 用id查询装备
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Equipment true "用id查询装备"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /e/findEquipment [get]
export const findEquipment = (params) => {
  return service({
    url: '/e/findEquipment',
    method: 'get',
    params
  })
}

// @Tags Equipment
// @Summary 分页获取装备列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取装备列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /e/getEquipmentList [get]
export const getEquipmentList = (params) => {
  return service({
    url: '/e/getEquipmentList',
    method: 'get',
    params
  })
}

// @Tags Equipment
// @Summary 不需要鉴权的装备接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.EquipmentSearch true "分页获取装备列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /e/getEquipmentPublic [get]
export const getEquipmentPublic = () => {
  return service({
    url: '/e/getEquipmentPublic',
    method: 'get',
  })
}
