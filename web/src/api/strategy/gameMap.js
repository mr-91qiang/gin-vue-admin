import service from '@/utils/request'
// @Tags GameMap
// @Summary 创建游戏地图
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.GameMap true "创建游戏地图"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /gameMap/createGameMap [post]
export const createGameMap = (data) => {
  return service({
    url: '/gameMap/createGameMap',
    method: 'post',
    data
  })
}

// @Tags GameMap
// @Summary 删除游戏地图
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.GameMap true "删除游戏地图"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /gameMap/deleteGameMap [delete]
export const deleteGameMap = (params) => {
  return service({
    url: '/gameMap/deleteGameMap',
    method: 'delete',
    params
  })
}

// @Tags GameMap
// @Summary 批量删除游戏地图
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除游戏地图"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /gameMap/deleteGameMap [delete]
export const deleteGameMapByIds = (params) => {
  return service({
    url: '/gameMap/deleteGameMapByIds',
    method: 'delete',
    params
  })
}

// @Tags GameMap
// @Summary 更新游戏地图
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.GameMap true "更新游戏地图"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /gameMap/updateGameMap [put]
export const updateGameMap = (data) => {
  return service({
    url: '/gameMap/updateGameMap',
    method: 'put',
    data
  })
}

// @Tags GameMap
// @Summary 用id查询游戏地图
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.GameMap true "用id查询游戏地图"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /gameMap/findGameMap [get]
export const findGameMap = (params) => {
  return service({
    url: '/gameMap/findGameMap',
    method: 'get',
    params
  })
}

// @Tags GameMap
// @Summary 分页获取游戏地图列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取游戏地图列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /gameMap/getGameMapList [get]
export const getGameMapList = (params) => {
  return service({
    url: '/gameMap/getGameMapList',
    method: 'get',
    params
  })
}

// @Tags GameMap
// @Summary 不需要鉴权的游戏地图接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.GameMapSearch true "分页获取游戏地图列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /gameMap/getGameMapPublic [get]
export const getGameMapPublic = () => {
  return service({
    url: '/gameMap/getGameMapPublic',
    method: 'get',
  })
}
