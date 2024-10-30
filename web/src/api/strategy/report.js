import service from '@/utils/request'
// @Tags Report
// @Summary 创建举报反馈
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Report true "创建举报反馈"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /report/createReport [post]
export const createReport = (data) => {
  return service({
    url: '/report/createReport',
    method: 'post',
    data
  })
}

// @Tags Report
// @Summary 删除举报反馈
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Report true "删除举报反馈"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /report/deleteReport [delete]
export const deleteReport = (params) => {
  return service({
    url: '/report/deleteReport',
    method: 'delete',
    params
  })
}

// @Tags Report
// @Summary 批量删除举报反馈
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除举报反馈"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /report/deleteReport [delete]
export const deleteReportByIds = (params) => {
  return service({
    url: '/report/deleteReportByIds',
    method: 'delete',
    params
  })
}

// @Tags Report
// @Summary 更新举报反馈
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Report true "更新举报反馈"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /report/updateReport [put]
export const updateReport = (data) => {
  return service({
    url: '/report/updateReport',
    method: 'put',
    data
  })
}

// @Tags Report
// @Summary 用id查询举报反馈
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Report true "用id查询举报反馈"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /report/findReport [get]
export const findReport = (params) => {
  return service({
    url: '/report/findReport',
    method: 'get',
    params
  })
}

// @Tags Report
// @Summary 分页获取举报反馈列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取举报反馈列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /report/getReportList [get]
export const getReportList = (params) => {
  return service({
    url: '/report/getReportList',
    method: 'get',
    params
  })
}

// @Tags Report
// @Summary 不需要鉴权的举报反馈接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.ReportSearch true "分页获取举报反馈列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /report/getReportPublic [get]
export const getReportPublic = () => {
  return service({
    url: '/report/getReportPublic',
    method: 'get',
  })
}
