import service from '@/utils/request'
// @Tags Hero
// @Summary 创建英雄
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Hero true "创建英雄"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /h/createHero [post]
export const createHero = (data) => {
  return service({
    url: '/h/createHero',
    method: 'post',
    data
  })
}

// @Tags Hero
// @Summary 删除英雄
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Hero true "删除英雄"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /h/deleteHero [delete]
export const deleteHero = (params) => {
  return service({
    url: '/h/deleteHero',
    method: 'delete',
    params
  })
}

// @Tags Hero
// @Summary 批量删除英雄
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除英雄"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /h/deleteHero [delete]
export const deleteHeroByIds = (params) => {
  return service({
    url: '/h/deleteHeroByIds',
    method: 'delete',
    params
  })
}

// @Tags Hero
// @Summary 更新英雄
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Hero true "更新英雄"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /h/updateHero [put]
export const updateHero = (data) => {
  return service({
    url: '/h/updateHero',
    method: 'put',
    data
  })
}

// @Tags Hero
// @Summary 用id查询英雄
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Hero true "用id查询英雄"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /h/findHero [get]
export const findHero = (params) => {
  return service({
    url: '/h/findHero',
    method: 'get',
    params
  })
}

// @Tags Hero
// @Summary 分页获取英雄列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取英雄列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /h/getHeroList [get]
export const getHeroList = (params) => {
  return service({
    url: '/h/getHeroList',
    method: 'get',
    params
  })
}

// @Tags Hero
// @Summary 不需要鉴权的英雄接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.HeroSearch true "分页获取英雄列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /h/getHeroPublic [get]
export const getHeroPublic = () => {
  return service({
    url: '/h/getHeroPublic',
    method: 'get',
  })
}
