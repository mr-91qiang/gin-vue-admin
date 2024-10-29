import service from '@/utils/request'
// @Tags GameLevel
// @Summary 创建游戏关卡
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.GameLevel true "创建游戏关卡"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /gameLevel/createGameLevel [post]
export const createGameLevel = (data) => {
  return service({
    url: '/gameLevel/createGameLevel',
    method: 'post',
    data
  })
}

// @Tags GameLevel
// @Summary 删除游戏关卡
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.GameLevel true "删除游戏关卡"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /gameLevel/deleteGameLevel [delete]
export const deleteGameLevel = (params) => {
  return service({
    url: '/gameLevel/deleteGameLevel',
    method: 'delete',
    params
  })
}

// @Tags GameLevel
// @Summary 批量删除游戏关卡
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除游戏关卡"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /gameLevel/deleteGameLevel [delete]
export const deleteGameLevelByIds = (params) => {
  return service({
    url: '/gameLevel/deleteGameLevelByIds',
    method: 'delete',
    params
  })
}

// @Tags GameLevel
// @Summary 更新游戏关卡
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.GameLevel true "更新游戏关卡"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /gameLevel/updateGameLevel [put]
export const updateGameLevel = (data) => {
  return service({
    url: '/gameLevel/updateGameLevel',
    method: 'put',
    data
  })
}

// @Tags GameLevel
// @Summary 用id查询游戏关卡
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.GameLevel true "用id查询游戏关卡"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /gameLevel/findGameLevel [get]
export const findGameLevel = (params) => {
  return service({
    url: '/gameLevel/findGameLevel',
    method: 'get',
    params
  })
}

// @Tags GameLevel
// @Summary 分页获取游戏关卡列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取游戏关卡列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /gameLevel/getGameLevelList [get]
export const getGameLevelList = (params) => {
  return service({
    url: '/gameLevel/getGameLevelList',
    method: 'get',
    params
  })
}

// @Tags GameLevel
// @Summary 不需要鉴权的游戏关卡接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.GameLevelSearch true "分页获取游戏关卡列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /gameLevel/getGameLevelPublic [get]
export const getGameLevelPublic = () => {
  return service({
    url: '/gameLevel/getGameLevelPublic',
    method: 'get',
  })
}
