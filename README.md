# vue-ts

> using typesciprt in vue project by vue-cli@2.9.3.

## If you want to play the same way, follow beflow steps:

``` bash
# create dir
mkdir text-dir && cd text-dir
# create file by vue-cli
npx vue-cli -- init vuejs-templates/webpack .

# serve with hot reload at localhost:8080
npm run dev

```

you can also see some error in [issue](https://github.com/baixiaoji/vue-ts/issues?q=is%3Aissue+is%3Aclosed), and you can see the solve in [commit](https://github.com/baixiaoji/vue-ts/commits/master).

# 如何使用「老」脚手架搭建 TS 的 vue 项目

## 为什么是「老」脚手架？

因为一直没有关心过脚手架的版本问题(实际不知道脚手架已更换)，上次掘金看到别人用新的脚手架（@vue/cli）搭建TS的项目，看上去真的很简单，但是作者好像还在整理项目地址所以并没提供对应的地址。

查看了对应的 npm 包，发现两个包最新的版本都是 3.0.5 (2018-10-23)，而因为笔者的从安装起就没有更新过脚手架，而笔者的版本停留在`2.9.6`。

而使用新的脚手架的可以快速生成 TS 项目，因为使用 `vue create  <project_name>`的时候，会有对应的选择项让用户去自定义项目要安装什么，是不是很方便。对应上文提到的掘金文章。[飞机票](https://juejin.im/post/5ba75b355188255c5e66e4d3)

## 为什么要使用TS ?

这里就不粘贴官方介绍了。

我司代码是有一定的代码规范的，是使用 eslint 去规范大家的代码，但是其实个人项目中还是会出现一些规范反而约束了开发者。就比如：我司后台的代码规范和移动端的代码规范是不同的，所以在切换的时候，会造成一定的不适，而且 webstorm 居然一条一条的红线看着都心疼自己。

我司是有后台数据返回格式是有对应规范的，但是后台部门中又会出现 2-3 套的返回数据规范，导致你原本和之前的业务线的后台人员磨合好了数据返回格式，但是来了一个新的后台人员，而不巧的是新的后台人员返回数据格式就是第二套规范，导致你有要心态自己一下，去修改所有的接口格式。

还能在代码编译阶段，提醒自己，防止自己犯一些低级错误，比如请求的方法写错了，有一次看接口名字就应该是一个 get 请求的接口，然后自己在浏览器跑的时候发现一直报404的错误，然后找了好久才发现，这是一个 post 的请求。

最重要的就是「重构」。大多数后台项目都是为了快速满足需求而搭建起来的，当然会留下一些隐患。但是需求不断的变更的时候，如果你一个人开发还好，可以慢慢的理清楚对应的逻辑；若多人以上开发这就是一个比较头疼的问题，要具体去看清楚别人的代码逻辑才可以。当然你可以说，那就一个人开发就好咯，但是业务中往往并没有那么多自由的时间让你去重构，并且当你看着一个函数都上百行的代码，如果还有点注释还行若什么都没用，真的是心疼自己在这个基础上还怎么加需求。

## 授之以渔

### webpack 一系列问题
原本以为只是将 webpack 的入口改成了 ts ，在加上处理 ts 文件的loader就能运行项目了，但导致了 webpack 一堆的报错信息。

主要错误信息是升级 webpack@4 ，一旦升级完成，就会导致 webpack 其余的 loader 就要同样升级，大概的记录，可以查看对应的 [commit](https://github.com/baixiaoji/vue-ts/commit/cc718be83cb79440aeaf64c5e6efa7b6eb75fe51)。

之后大多数依旧是 webpack 问题，比如：

```bash
ERROR in /Users/future/test-place/aaa/src/router/index.ts(11,27)
      TS2304: Cannot find name 'require'.
```

改写路由的时候遇到此类的问题，结果是因为 TS 无法解读 webpack 的内置函数，所以只有需要安装 `@types/webpack-env` 包就可以解决此类的问题了。

更多的问题，可以查看[close-issue-list](https://github.com/baixiaoji/vue-ts/issues?q=is%3Aissue+is%3Aclosed)

而整体的组件写法以类为主，可以使用官方推荐的`vue-property-decorator`包去帮助开发者书写代码。




