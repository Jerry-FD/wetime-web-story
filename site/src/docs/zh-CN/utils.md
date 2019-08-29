# Utils 组件
小时光，趣种草Toast组件

## 1. transformCommNum
> 小时光、趣种草通用数量处理函数，规则：小于等于9999不做转化，大于9999，向下取两位小数，末尾加"万"
### Arguments
  - number(number): 需要转化的数字
### Returns
  - output(string): 转化后的数字
```
import { Utils } from '@bbt.wetime/wetime-mobile'
Utils.transformCommNum(129994)   // 1.2万
```

## 2. getParam
> 小时光、趣种草通用获取url参数函数
### Arguments
  - url(string): 需要提取参数的url
### Returns
  - key(string): 需要提取的key
```
import { Utils } from '@bbt.wetime/wetime-mobile';
Utils.getParam("http://wetime.com?id=1232", 'id')   // http//wetime.babytree.com
```
## 3. getWetimeHost
> 根据APP里所处环境返回对应的wetime-web域名
### Arguments
  - env(string): php/java/web 服务语言区分
  - app(string): 应用名称，当env时php时，对应的不同业务场景有不同的app名称
### Returns
  - host(string): 对应环境的host

```
import { Utils } from '@bbt.wetime/wetime-mobile';
Utils.getWetimeHost()   //  http//wetime.babytree.com
```

## 4. getFancylifeHost
> 根据APP里所处环境返回对应的fe-fancylife域名
### Arguments
    无
### Returns
  - host(string): 对应环境的host

```
import { Utils } from '@bbt.wetime/wetime-mobile';
Utils.getFancylifeHost()
```

## 5. getMapiHost
> 根据APP里所处环境返回对应的maip域名
### Arguments
    无
### Returns
  - host(string): 对应环境的host

```
import { Utils } from '@bbt.wetime/wetime-mobile';
Utils.getMapiHost()
```

## 6. getMeitunHost
> 根据APP里所处环境返回对应的meitun域名
### Arguments
    无
### Returns
  - host(string): 对应环境的host

```
import { Utils } from '@bbt.wetime/wetime-mobile';
Utils.getMeitunHost()
```

## 7. formatMiniutes
> 把时间转化成 MM:SS 格式，此函数需要升级，来支持更通用的场景

### Arguments
    time(Date)：需要转化的时间
### Returns
  - time(string): 转化后的时间

```
import { Utils } from '@bbt.wetime/wetime-mobile';
Utils.formatMiniutes(new Date())
```
