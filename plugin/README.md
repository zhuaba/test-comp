# gsr-webpack-plugin

[@bilibili/gsr-webpack-plugin](http://npm.bilibili.co/package/@bilibili/gsr-webpack-plugin)

支持能力：

- 处理 manifest 生成离线 zip 包
- 配置自动补全并上报配置中心
- 支持 路径通配符匹配 和 字符串匹配 两种模式
- `3.0.0` 版本开始支持项目传入单条或多条GSR规则

## 安装

```bash
npm install -D @bilibili/gsr-webpack-plugin
```

## 接入方式

请查阅 [info 文档](https://info.bilibili.co/pages/viewpage.action?pageId=247422230)

## GSR 规则字段参考

> 即传入 `GSRWebpackPlugin` 的配置下的 `config` 字段内容

### 全局字段

”全局字段“ 指适用于所有 GSR 规则的字段

| Keyword    | Type               | Description                               | Required | Default Value |
| ---------- | ------------------ | ----------------------------------------- | -------- | ------------- |
| `deadline` | `number<timstamp>` | 预加载过期时间（ms），过期后就下线预加载  |          | `''`          |
| `rules`    | `array<object>`    | 启用该字段则允许向该字段传入多个 gsr 配置 |          |               |

<!--隐藏字段：resource, query-->

⚠️ **注意事项**

1. 不要混用多条gsr规则和仅有单条gsr规则时的写法，请见 <u>示例</u> 一节

### 非全局字段

| Keyword                   | Type                    | Description                                        | Required | Default Value                            |
| ------------------------- | ----------------------- | -------------------------------------------------- | -------- | ---------------------------------------- |
| `pv`                      | `string`                | 当前`web`页面的资源在`app`的什么哪个页面开始预加载 | ✅       |                                          |
| `url`                     | `string`、`RouteRegExp` | 当前`web`页面的`url`或`SPA`的项目通配符            | ✅       |                                          |
| `prefetch`                | `array<object>`         | 要预加载的接口列表                                 |          | `[]`                                     |
| `prefetch[].url`          | `string`                | 要预加载的接口的 url                               | ✅       |                                          |
| `prefetch[].entry`        | `array`                 | 要加载接口的入口，当 url 是路由通配符时可填写      |          |                                          |
| `prefetch[].method`       | `string`                | 目前只支持`get`                                    |          |                                          |
| `prefetch[].headers`      | `object`                | 发请求时要携带的`headers`                          |          | `{ 'Content-Type': 'application/json' }` |
| `prefetch[].cookieParams` | `object`                | 发请求时从`cookie`中获取的参数                     |          | `{ csrf: 'bili_jct' }`                   |
| `prefetch[].queryParams`  | `object`                | 发请求时从`urlQuery`中获取的参数                   |          | `{}`                                     |
| `prefetch[].deviceParams` | `object`                | 发请求时从`global.getContainerInfo`中获取的参数    |          | `{}`                                     |
| `prefetch[].sign`         | `number`                | 是否使用客户端签名，`0` 为否，`1` 为是             |          | `0`                                      |

⚠️ **注意事项**

1. `cookieParams`、`queryParams`、`deviceParams`中，`key`为传给接口的字段名，`value`为获取数据时的参数名，如：
   ```javascript
   cookieParams: {
     csrf: 'bili_jct'
   }
   ```
   上面代码代表从`cookie`里拿`bili_jct`的值，然后以`csrf`作为参数传递给接口
2. 如果想要`prefetch`生效，请使用：[@bilibili/bjax](http://fe-mng.bilibili.co/v/harvest/bjax) 这个包
3. `sign`逻辑详见[@bilibili/bjax - auth](http://fe-mng.bilibili.co/v/harvest/bjax) 参数
4. `pv`列表详见：[info 文档](https://info.bilibili.co/pages/viewpage.action?pageId=247422230)
5. `deadline`填入后才会把项目中的图片加入预加载的范围
6. `entry`解释：当你的`url`是通配符时，你若希望所有的子页面访问都请求`A`接口，那么不需要为`A`接口的`prefetch`填写`entry`字段； 如果你希望只有`a`页面才去请求`A`接口，那么`entry`字段就是`a`页面的完整链接

## 插件配置字段参考

| Keyword        | Type     | Description    | Required | Default Value        |
| -------------- | -------- | -------------- | -------- | -------------------- | 
| `filename`     | string   |                |          | `gsr-manifest.json`  |
| `assetsFilter` | Function |                |          | `filepath => !/.(map|ico)$/.test(filepath)` |
| `assetsprefix` | boolean  |                |          | `false`              | 
| `svenPushName` | string   | 项目名称       | ✅       |                      | 
| `config`       | object   | _项目配置参数_ | ✅       |                      |
| `hash`         | `string  | number`        |          |                      | `Date.now()`           | 
| `folderName`   | string   |                |          | `package`            |

## 示例

**多条 GSR 规则写法**

```js
{
  rules: [
    {
      pv: 'tm.recommend.0.0.pv',
      url: 'https://www.bilibili.com/h5/newbie/entry',
      prefetch: [
        {
          url: 'https://api.bilibili.com/x/answer/v4/status'
        }
      ]
    },
    {
      pv: 'tm.recommend.0.0.*',
      url: 'https://www.bilibili.com/h5/newbie/entry',
      prefetch: [
        {
          url: 'https://api.bilibili.com/x/answer/v4/status'
        }
      ]
    }
  ]
}
```

**单条 GSR 规则写法**

```js
{
  pv: 'tm.recommend.0.0.pv',
  url: 'https://www.bilibili.com/h5/newbie/entry',
  prefetch: [
    {
      url: 'https://api.bilibili.com/x/answer/v4/status'
    }
  ]
}
```

## 贡献

如在使用过程中遇到问题，请在企业微信联系 @liulei @lidian