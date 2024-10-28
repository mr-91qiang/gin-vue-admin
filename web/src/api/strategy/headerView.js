import service from '@/utils/request'
// @Tags HeaderView
// @Summary 创建页面图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HeaderView true "创建页面图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /h/createHeaderView [post]
export const createHeaderView = (data) => {
  return service({
    url: '/h/createHeaderView',
    method: 'post',
    data
  })
}

// @Tags HeaderView
// @Summary 删除页面图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HeaderView true "删除页面图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /h/deleteHeaderView [delete]
export const deleteHeaderView = (params) => {
  return service({
    url: '/h/deleteHeaderView',
    method: 'delete',
    params
  })
}

// @Tags HeaderView
// @Summary 批量删除页面图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除页面图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /h/deleteHeaderView [delete]
export const deleteHeaderViewByIds = (params) => {
  return service({
    url: '/h/deleteHeaderViewByIds',
    method: 'delete',
    params
  })
}

// @Tags HeaderView
// @Summary 更新页面图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HeaderView true "更新页面图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /h/updateHeaderView [put]
export const updateHeaderView = (data) => {
  return service({
    url: '/h/updateHeaderView',
    method: 'put',
    data
  })
}

// @Tags HeaderView
// @Summary 用id查询页面图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.HeaderView true "用id查询页面图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /h/findHeaderView [get]
export const findHeaderView = (params) => {
  return service({
    url: '/h/findHeaderView',
    method: 'get',
    params
  })
}

// @Tags HeaderView
// @Summary 分页获取页面图配置列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取页面图配置列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /h/getHeaderViewList [get]
export const getHeaderViewList = (params) => {
  return service({
    url: '/h/getHeaderViewList',
    method: 'get',
    params
  })
}

// @Tags HeaderView
// @Summary 不需要鉴权的页面图配置接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.HeaderViewSearch true "分页获取页面图配置列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /h/getHeaderViewPublic [get]
export const getHeaderViewPublic = () => {
  return service({
    url: '/h/getHeaderViewPublic',
    method: 'get',
  })
}
