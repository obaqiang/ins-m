import { asyncRouterMap, sysRouterMap, constantRouterMap } from '@/config/router.config'
import cloneDeep from 'lodash.clonedeep'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission(authorities, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = authorities.length; i < len; i++) {
      flag = route.meta.permission.includes(authorities[i])
      if (flag) {
        return true
      }
    }

    return false
  }
  return true
}

function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(['qks', ...roles.authorities], route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    pgAddRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.pgAddRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { pgInfo } = data
        const routerMap = cloneDeep([...asyncRouterMap, ...sysRouterMap])
        const accessedRouters = filterAsyncRouter(routerMap, pgInfo)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
