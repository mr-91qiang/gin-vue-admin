import service from '@/utils/request'
// @Tags Message
// @Summary 创建站内信
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Message true "创建站内信"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /message/createMessage [post]
export const createMessage = (data) => {
  return service({
    url: '/message/createMessage',
    method: 'post',
    data
  })
}

// @Tags Message
// @Summary 删除站内信
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Message true "删除站内信"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /message/deleteMessage [delete]
export const deleteMessage = (params) => {
  return service({
    url: '/message/deleteMessage',
    method: 'delete',
    params
  })
}

// @Tags Message
// @Summary 批量删除站内信
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除站内信"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /message/deleteMessage [delete]
export const deleteMessageByIds = (params) => {
  return service({
    url: '/message/deleteMessageByIds',
    method: 'delete',
    params
  })
}

// @Tags Message
// @Summary 更新站内信
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Message true "更新站内信"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /message/updateMessage [put]
export const updateMessage = (data) => {
  return service({
    url: '/message/updateMessage',
    method: 'put',
    data
  })
}

// @Tags Message
// @Summary 用id查询站内信
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Message true "用id查询站内信"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /message/findMessage [get]
export const findMessage = (params) => {
  return service({
    url: '/message/findMessage',
    method: 'get',
    params
  })
}

// @Tags Message
// @Summary 分页获取站内信列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取站内信列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /message/getMessageList [get]
export const getMessageList = (params) => {
  return service({
    url: '/message/getMessageList',
    method: 'get',
    params
  })
}

// @Tags Message
// @Summary 不需要鉴权的站内信接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.MessageSearch true "分页获取站内信列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /message/getMessagePublic [get]
export const getMessagePublic = () => {
  return service({
    url: '/message/getMessagePublic',
    method: 'get',
  })
}
