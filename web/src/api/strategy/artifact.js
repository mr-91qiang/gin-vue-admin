import service from '@/utils/request'
// @Tags Artifact
// @Summary 创建神器
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Artifact true "创建神器"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /a/createArtifact [post]
export const createArtifact = (data) => {
  return service({
    url: '/a/createArtifact',
    method: 'post',
    data
  })
}

// @Tags Artifact
// @Summary 删除神器
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Artifact true "删除神器"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /a/deleteArtifact [delete]
export const deleteArtifact = (params) => {
  return service({
    url: '/a/deleteArtifact',
    method: 'delete',
    params
  })
}

// @Tags Artifact
// @Summary 批量删除神器
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除神器"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /a/deleteArtifact [delete]
export const deleteArtifactByIds = (params) => {
  return service({
    url: '/a/deleteArtifactByIds',
    method: 'delete',
    params
  })
}

// @Tags Artifact
// @Summary 更新神器
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Artifact true "更新神器"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /a/updateArtifact [put]
export const updateArtifact = (data) => {
  return service({
    url: '/a/updateArtifact',
    method: 'put',
    data
  })
}

// @Tags Artifact
// @Summary 用id查询神器
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Artifact true "用id查询神器"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /a/findArtifact [get]
export const findArtifact = (params) => {
  return service({
    url: '/a/findArtifact',
    method: 'get',
    params
  })
}

// @Tags Artifact
// @Summary 分页获取神器列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取神器列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /a/getArtifactList [get]
export const getArtifactList = (params) => {
  return service({
    url: '/a/getArtifactList',
    method: 'get',
    params
  })
}

// @Tags Artifact
// @Summary 不需要鉴权的神器接口
// @accept application/json
// @Produce application/json
// @Param data query strategyReq.ArtifactSearch true "分页获取神器列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /a/getArtifactPublic [get]
export const getArtifactPublic = () => {
  return service({
    url: '/a/getArtifactPublic',
    method: 'get',
  })
}
