# 国和接口文档

编写人：q
<br/>
更新时间：2019-05-07

---

### 首页

> GET http://172.168.10.21:3001/api/guohe/main

**返回值**
```json
{
    "code": 0,
    "msg": "成功",
    "data": {
        "recommendations": [
            {
                "id": "5ccf8cd3453e14324c6cc9e9",
                "hot": false,
                "name": "塑料膜",
                "feature": "性价比高",
                "price": "价格面谈",
                "image": "http://172.168.10.21:3001/media/201905/5ccf962b453e14324c6cc9f8/77c6a7efce1b9d1675d150fdf4deb48f8c54641c.jpg",
                "phone": 13212345678
            },
            {...},
            {...},
            {...},
            {...}
        ],
        "productions": {
            "list": [
                {
                    "id": "5ccf8cd3453e14324c6cc9e9",
                    "hot": false,
                    "name": "塑料膜",
                    "feature": "性价比高",
                    "image": "http://172.168.10.21:3001/media/201905/5ccf962b453e14324c6cc9f8/77c6a7efce1b9d1675d150fdf4deb48f8c54641c.jpg",
                    "phone": 13212345678
                },
                {...},
                {...},
                {...},
                {...}
            ]
        },
        "company": {
            "name": "重庆国和塑胶制造有限公司",
            "description": "重庆三星塑膜制品厂是一家股份合作制企业，始建于1997年4月，位于重庆市南岸区鸡冠石镇，是一家生产塑料包装类产品的企业，现已成为重庆市汽车IT摩托车行业塑料包装类产品的专业生产厂家，年产各类塑料袋、气泡袋五千万套，与多家大中型汽车生产企业（如：长安、长安福特、宗申、力帆、隆鑫、银翔等），长期建立有好的合作配套网络。产品随各大主机厂家出口到欧美、东南亚、中东等国际市场。本厂主要生产塑料、气垫膜、气泡袋、塑料袋。年生产能力已达1500吨。工厂古地面积六千平方米，现有固定资产300万元，员工100余人，其中工程师3人，技术员8人，检验员5人，公司下设营销部、管理部、生产部、品管部及为之配套的机构。我厂现有各类生产检测设备50余台，并与2005年通过ISO2000-2001质量认证。 \n     \n我厂为进一步拓展国内外市场将继续加大对新产品、新工艺的投资及研发，不断完善摩托车的包装类产品，让三星包装服务于大众。     \n \n顾客满意是我厂的最高宗旨，现竭诚欢迎国内外客商来我厂考察、指导。",
            "image": "http://172.168.10.21:3001/media/201905/5ccfa65274bc384ae8525a8a/123.jpg"
        },
        "contact": {
            "phones": [
                {
                    "phoneNumber": 13212345678,
                    "type": {
                        "code": "2",
                        "name": "手机"
                    }
                },
                {...}
            ],
            "address": "重庆市北碚区歇马镇卫星村梁家湾组"
        }
    }
}
```

* code：返回码
* msg：返回文本信息
* data：返回的数据包
    * recommendations：产品推荐
        * id：产品ID
        * hot：是否热销
        * name：产品名称
        * image：产品缩略图
        * price：产品价格
        * feature：产品特点
    * productions：产品中心
        * list：产品信息
            * id：产品ID
            * hot：是否热销
            * name：产品名称
            * feature：产品特点
            * image：产品缩略图
    * company：公司介绍
        * name：公司名称
        * description：公司介绍
        * image：公司缩略图
    * contact：联系方式
        * phones：电话列表
            * phoneNumber：电话号码
            * type：号码类型
                * code：类型代码
                * name：类型名称
        * address：公司地址

---

### 产品中心

> GET localhost:3001/api/guohe/products

**参数**

* page：页码，从1开始。每页返回10条数据
* type：商品类型

type | 说明
-----|------
1    |  全部
2    |  气泡
3    |  气垫
4    |  塑料
5    |  其他

**返回值**
```json
{
    "code": 0,
    "msg": "成功",
    "data": [
        {
            "id": "5ccf926b453e14324c6cc9f6",
            "hot": true,
            "name": "气垫膜",
            "feature": "价格优惠",
            "price": "价格面谈",
            "image": "http://172.168.10.21:3001/media/201905/5ccf9238453e14324c6cc9f4/5243fbf2b2119313ee0aca2d62380cd790238de5.jpg",
            "phone": "13212345678"
        },
        {...},
        {...},
        {...},
        {...}
    ]
}
```

* code：返回码
* msg：返回文本信息
* data：返回的数据包 
    * id：产品ID
    * hot：是否热销
    * name：产品名称
    * image：产品缩略图
    * price：产品价格
    * feature：产品特点

---

### 公司介绍

> GET http://172.168.10.21:3001/api/guohe/company

**返回值**
```json
{
    "code": 0,
    "msg": "成功",
    "data": {
        "company": {
            "name": "重庆国和塑胶制造有限公司",
            "description": "重庆三星塑膜制品厂是一家股份合作制企业，始建于1997年4月，位于重庆市南岸区鸡冠石镇，是一家生产塑料包装类产品的企业，现已成为重庆市汽车IT摩托车行业塑料包装类产品的专业生产厂家，年产各类塑料袋、气泡袋五千万套，与多家大中型汽车生产企业（如：长安、长安福特、宗申、力帆、隆鑫、银翔等），长期建立有好的合作配套网络。产品随各大主机厂家出口到欧美、东南亚、中东等国际市场。本厂主要生产塑料、气垫膜、气泡袋、塑料袋。年生产能力已达1500吨。工厂古地面积六千平方米，现有固定资产300万元，员工100余人，其中工程师3人，技术员8人，检验员5人，公司下设营销部、管理部、生产部、品管部及为之配套的机构。我厂现有各类生产检测设备50余台，并与2005年通过ISO2000-2001质量认证。 \n     \n我厂为进一步拓展国内外市场将继续加大对新产品、新工艺的投资及研发，不断完善摩托车的包装类产品，让三星包装服务于大众。     \n \n顾客满意是我厂的最高宗旨，现竭诚欢迎国内外客商来我厂考察、指导。",
            "image": "http://172.168.10.21:3001/media/201905/5ccfa65274bc384ae8525a8a/123.jpg"
        },
        "contact": {
            "phones": [
                {
                    "phoneNumber": 13212345678,
                    "type": {
                        "code": "2",
                        "name": "手机"
                    }
                },
                {
                    "phoneNumber": 13212345679,
                    "type": {
                        "code": "2",
                        "name": "手机"
                    }
                }
            ],
            "address": "重庆市北碚区歇马镇卫星村梁家湾组"
        }
    }
}
```

* code：返回码
* msg：返回文本信息
* data：返回的数据包
    - company：公司介绍
        * name：公司名称
        * description：公司介绍
        * image：公司缩略图
    - contact：联系方式
        - phones：电话列表
            - phoneNumber：电话号码
            - type：号码类型
                - code：类型代码
                - name：类型名称
        - address：公司地址


---

### 联系我们

> GET http://172.168.10.21:3001/api/guohe/contact

**返回值**

```json
{
    "code": 0,
    "msg": "成功",
    "data": {
        "contact": {
            "phones": [
                {
                    "phoneNumber": 13212345678,
                    "type": {
                        "code": "2",
                        "name": "手机"
                    }
                },
                {
                    "phoneNumber": 13212345679,
                    "type": {
                        "code": "2",
                        "name": "手机"
                    }
                }
            ],
            "address": "重庆市北碚区歇马镇卫星村梁家湾组"
        }
    }
}
```

* code：返回码
* msg：返回文本信息
* data：返回的数据包
    - contact：联系方式
        - phones：电话列表
            - phoneNumber：电话号码
            - type：号码类型
                - code：类型代码
                - name：类型名称
        - address：公司地址

---

### 产品详情

> GET http://172.168.10.21:3001/api/guohe/product

**参数**

* id：产品代码

**返回值**

```json
{
    "code": 0,
    "msg": "成功",
    "data": {
        "product": {
            "id": "5ccf8cd3453e14324c6cc9e9",
            "name": "塑料膜",
            "content": "该产品的属性参数、产品介绍、价格、售后服务等详细信息，可通过以下方式进行咨询，我们将竭诚为您服务。",
            "pictures": [
                "http://172.168.10.21:3001/media/201905/5ccf9019453e14324c6cc9ef/77c6a7efce1b9d1675d150fdf4deb48f8c54641c.jpg"
            ]
        },
        "contact": {
            "phones": [
                {
                    "phoneNumber": 13212345678,
                    "type": {
                        "code": "2",
                        "name": "手机"
                    }
                },
                {...}
            ],
            "address": "重庆市北碚区歇马镇卫星村梁家湾组"
        },
        "company": {
            "name": "重庆国和塑胶制造有限公司",
            "description": "重庆三星塑膜制品厂是一家股份合作制企业，始建于1997年4月，位于重庆市南岸区鸡冠石镇，是一家生产塑料包装类产品的企业，现已成为重庆市汽车IT摩托车行业塑料包装类产品的专业生产厂家，年产各类塑料袋、气泡袋五千万套，与多家大中型汽车生产企业（如：长安、长安福特、宗申、力帆、隆鑫、银翔等），长期建立有好的合作配套网络。产品随各大主机厂家出口到欧美、东南亚、中东等国际市场。本厂主要生产塑料、气垫膜、气泡袋、塑料袋。年生产能力已达1500吨。工厂古地面积六千平方米，现有固定资产300万元，员工100余人，其中工程师3人，技术员8人，检验员5人，公司下设营销部、管理部、生产部、品管部及为之配套的机构。我厂现有各类生产检测设备50余台，并与2005年通过ISO2000-2001质量认证。 \n     \n我厂为进一步拓展国内外市场将继续加大对新产品、新工艺的投资及研发，不断完善摩托车的包装类产品，让三星包装服务于大众。     \n \n顾客满意是我厂的最高宗旨，现竭诚欢迎国内外客商来我厂考察、指导。",
            "website": "guohesujiao.cn",
            "image": "http://172.168.10.21:3001/media/201905/5ccfa65274bc384ae8525a8a/123.jpg"
        },
        "recommendation": [
            {
                "id": "5ccf926b453e14324c6cc9f6",
                "hot": true,
                "name": "气垫膜",
                "feature": "价格优惠",
                "price": "价格面谈",
                "image": "http://172.168.10.21:3001/media/201905/5ccf9238453e14324c6cc9f4/5243fbf2b2119313ee0aca2d62380cd790238de5.jpg",
                "phone": 13212345678
            },
            {...},
            {...},
            {...},
            {...}
        ]
    }
}
```

* code：返回码
* msg：返回文本信息
* data：返回的数据包
    - product：产品数据包
        + id：产品代码
        + name：产品名称
        + content：产品
        + pictures：Array 图片列表
    - contact：联系方式
        + phones：电话列表
            * phoneNumber：电话号码
            * type：号码类型
                - code：类型代码
                - name：类型名称 1 座机 2 手机
        + address：地址
    - company：公司信息
        + name：公司名字
        + description：公司介绍
        + website：公司网址
        + image：公司缩略图
    - recommendation：产品推荐
        + id：产品代码
        + hot：是否热门
        + name：产品名字
        + feature：产品特点
        + price：产品价格
        + image：产品图片
        + phone：联系电话

---

### 获取电话号码

> GET http://172.168.10.21:3001/api/guohe/phone

**返回值**

```json
{
    "code": 0,
    "msg": "成功",
    "data": 13212345678
}
```

* code：返回码
* msg：返回信息
* data：电话号码