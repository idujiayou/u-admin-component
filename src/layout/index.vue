<template>
  <a-layout class="app-layout" >
    <a-layout-sider 
      class="app-layout-sider" 
      :trigger="null"
      v-model:collapsed="collapsed"
      collapsible>
      <div class="avatar-wrapper">
        <a-avatar 
          :src="avatar"
          shape="circle" 
          :size="avatarWidth"/>
        <div class="avatar-name">
          张大鹏
        </div>
      </div>
      <div class="app-nav-wrapper">
        <app-nav/>
      </div>
    </a-layout-sider>
    <a-layout 
      class="app-layout-content"
      :class="{
        'app-layout-content-collapsed': collapsed
      }">
      <a-layout-header class="app-layout-header">
        <div class="app-layout-header-top">
          <div class="flex-l flex-1">
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            <u-breadcrumb />
          </div>
          <div class="flex-r">
            <u-screenfull style="font-size: 1.2em;"/>
            <a-dropdown>
              <a-avatar 
                style="cursor: pointer;"
                :src="avatar"
                shape="circle"/>
              <template v-slot:overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">首页</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">修改密码</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">退出登录</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <app-tags-view/>
      </a-layout-header>
      <a-layout-content class="app-layout-body">
        <app-body></app-body>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ref, computed } from 'vue'
import appBody from './components/app-body'
import appNav from './components/app-nav'
import appTagsView from './components/app-tags-view'
import UScreenfull from '@/components/u-screenfull'
import UBreadcrumb from '@/components/u-breadcrumb'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

export default {
  name: 'Layout',
  components: {
    appBody,
    appNav,
    appTagsView,
    UScreenfull,
    UBreadcrumb,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const collapsed = ref(false)
    const avatarWidth = computed(() => collapsed.value ? 60 : 80 )
    const avatar = computed(() => 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584979051&di=f6306064ea907879a0e5fa8a6523e27c&src=http://c3.haibao.cn/img/600_0_100_0/1474603002.7212/4436c26958f3b21476deb1dd9fdab812.jpg') 

    return {
      collapsed,
      avatarWidth,
      avatar
    }
  }
}
</script>

<style lang="less">
  @layoutHeaderHeight: 84px;
  @layoutSiderWidth: 200px;
  @layoutSiderWidthCollapsed:  80px;

  .app-layout {
    height: 100vh;

    .app-layout-sider {
       overflow: auto;
       height: 100vh;
       width: 100%;

       .ant-layout-sider-children {
         display: flex;
         width: 100%;
         height: 100%;
         flex-direction: column;
       }
       
       .avatar-wrapper {
         text-align: center;
         color: rgba(250,250,250,0.5);
         padding: 20px 0;

         .avatar-name {
           padding: 10px 0;
           overflow: hidden;
         }
       }
    }

    .app-layout-content {
      padding-top: @layoutHeaderHeight;
      min-height: calc(100vh - @layoutHeaderHeight);
      background: #fff;

      &.app-layout-content-collapsed {
        .app-layout-header {
          left: @layoutSiderWidthCollapsed;
        }
      }
    }

    .app-layout-header-top {
      display: flex;
      height: 50px;
      
      .flex-1 {
        flex: 1
      }

      .flex-r {
        display: flex;
        align-items: center;

        & > * {
          margin-left: 10px;
        }
      }

      .flex-l {
        display: flex;
        align-items: center;

        & > * {
          margin-right: 10px;
        }
      }
    }

    .app-layout-header {
      height: @layoutHeaderHeight;
      position: fixed;
      top: 0;
      left: @layoutSiderWidth;
      right: 0;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,0.08);
      transition: all 0.2s;
      padding: 0 20px;
      z-index: 1000;
    }

    .app-layout-body {
      margin: 24px 16px 0;
      overflow: initial; 
    }

    .app-nav-wrapper {
      flex: 1;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }
  }
</style>


