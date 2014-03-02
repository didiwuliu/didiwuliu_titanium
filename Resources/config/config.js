/**
 * Copyright(c)2013,zhangchunsheng,www.zhangchunsheng.com.cn
 * Version: 1.0
 * Author: zhangchunsheng
 * Date: 2014-02-12
 * Description: 配置文件
 */
var config = {};
config.menus = [
    {
        "code": "001",
        "icon": "/images/tabs/KS_nav_mashup.png",
        "name": "service",
        "showName": "物流服务"
    },
    {
        "code": "002",
        "icon": "/images/tabs/KS_nav_phone.png",
        "name": "company",
        "showName": "物流企业"
    },
    {
        "code": "003",
        "icon": "/images/tabs/KS_nav_platform.png",
        "name": "garden",
        "showName": "园区"
    },
    {
        "code": "004",
        "icon": "/images/tabs/KS_nav_ui.png",
        "name": "information",
        "showName": "资讯"
    },
    {
        "code": "005",
        "icon": "/images/tabs/KS_nav_views.png",
        "name": "myLogistics",
        "showName": "我的物流"
    }
];
exports.config = config;
exports.menus = config.menus;