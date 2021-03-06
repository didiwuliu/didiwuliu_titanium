/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.
 * A starting point for tab-based application with multiple top-level windows.
 * Requires Titanium Mobile SDK 1.8.0+.
 *
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *
 */
/**
 * Copyright(c)2014,zhangchunsheng,www.zhangchunsheng.com.cn
 * Version: 1.0
 * Author: zhangchunsheng
 * Date: 2014-02-12
 * Description: 应用程序入口
 */
//bootstrap and check dependencies
if (Ti.version < 1.8) {
    alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function () {
    //determine platform and form factor and render approproate components
    var osname = Ti.Platform.osname,
        version = Ti.Platform.version,
        height = Ti.Platform.displayCaps.platformHeight,
        width = Ti.Platform.displayCaps.platformWidth,
        dpi = Ti.Platform.displayCaps.dpi;

    function checkTablet() {
        var platform = Ti.Platform.osname;

        switch (platform) {
        case 'ipad':
            return true;
        case 'android':
            var psc = Ti.Platform.Android.physicalSizeCategory;
            var tiAndroid = Ti.Platform.Android;
            return psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_LARGE || psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_XLARGE;
        default:
            return Math.min(
                Ti.Platform.displayCaps.platformHeight,
                Ti.Platform.displayCaps.platformWidth
            ) >= 400;
        }
    }
    
    var DiDi = {};

    var config = require('config/config');
    Ti.App.menus = config.menus; //global

    var isTablet = checkTablet();

    var Window;
    if (isTablet) {
        Window = require('ui/tablet/ApplicationWindow');
    } else {
        Window = require('ui/handheld/ios/ApplicationWindow');
    }

    var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
    new ApplicationTabGroup(Window).open();
})();