import service from '@/utils/request'
// @Tags Banner
// @Summary 创建banner图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Banner true "创建banner图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /b/createBanner [post]
export const createBanner = (data) => {
  return service({
    url: '/b/createBanner',
    method: 'post',
    data
  })
}

// @Tags Banner
// @Summary 删除banner图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Banner true "删除banner图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /b/deleteBanner [delete]
export const deleteBanner = (params) => {
  return service({
    url: '/b/deleteBanner',
    method: 'delete',
    params
  })
}

// @Tags Banner
// @Summary 批量删除banner图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除banner图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /b/deleteBanner [delete]
export const deleteBannerByIds = (params) => {
  return service({
    url: '/b/deleteBannerByIds',
    method: 'delete',
    params
  })
}

// @Tags Banner
// @Summary 更新banner图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Banner true "更新banner图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /b/updateBanner [put]
export const updateBanner = (data) => {
  return service({
    url: '/b/updateBanner',
    method: 'put',
    data
  })
}

// @Tags Banner
// @Summary 用id查询banner图配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Banner true "用id查询banner图配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /b/findBanner [get]
export const findBanner = (params) => {
  return service({
    url: '/b/findBanner',
    method: 'get',
    params
  })
}

// @Tags Banner
// @Summary 分页获取banner图配置列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取banner图配置列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /b/getBannerList [get]
export const getBannerList = (params) => {
  return service({
    url: '/b/getBannerList',
    method: 'get',
    params
  })
}

// @Tags Banner
// @Summary 不需要鉴权的banner图配置接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.BannerSearch true "分页获取banner图配置列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /b/getBannerPublic [get]
export const getBannerPublic = () => {
  return service({
    url: '/b/getBannerPublic',
    method: 'get',
  })
}
