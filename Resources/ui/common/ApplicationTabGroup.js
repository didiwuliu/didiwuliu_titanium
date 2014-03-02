/**
 * Copyright(c)2014,zhangchunsheng,www.zhangchunsheng.com.cn
 * Version: 1.0
 * Author: zhangchunsheng
 * Date: 2014-02-12
 * Description: 创建tabGroup，window等，应用程序由此开始执行
 */
function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window(L('service')),
		win2 = new Window(L('company'));

	var tab1 = Ti.UI.createTab({
		title: L('service'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('company'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
