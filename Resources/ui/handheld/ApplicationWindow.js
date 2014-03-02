/**
 * Copyright(c)2014,zhangchunsheng,www.zhangchunsheng.com.cn
 * Version: 1.0
 * Author: zhangchunsheng
 * Date: 2014-02-12
 * Description: 应用程序主窗口
 */
function ApplicationWindow(opts) {
	var config = {
		
	};
	
	var self = Ti.UI.createWindow({
		title:L(opts.name),
		backgroundColor:'white'
	});

	if(opts.name == 'service') {
		// create table view data object
		var data = [];
		var ts1 = new Date().getTime();
		
		function rightButtonClickHandler(e) {
			Ti.API.info("button click on row. index = " + e.index + ", row = " + e.source.row + ", section = " + e.source.section + ", rightButton = " + rightButton);
		}
		
		function rowClickHandler(e) {
			Ti.API.info("row click on row. index = " + e.index + ", row = " + e.row + ", section = " + e.section + ", source = " + e.source);
		}
		
		function sectionClickHandler(e) {
			Ti.API.info("row click on section. index = " + e.index + ", row = " + e.row + ", section = " + e.section + ", source = " + e.source);
		}
		
		var titles = ["车源，货源"];
		for(var i = 0 ; i < 2 ; i++) {
			data[i] = Ti.UI.createTableViewSection({headerTitle: titles[i]});
			for(var j = 0 ; j < 2 ; j++) {
				var label = Ti.UI.createLabel({
					text: '车牌号：京A111111，名称：大众\n所在地：北京市\n用途：普通运输，车种：单车，厢形：平板\n长：1米 宽：1米 高：1米\n最大载重：1吨，无GPS，有保险\n运输线路：固定路线',
					height: 'auto',
					width: 'auto',
					left: 10
				});
				var rightButton = Ti.UI.createButton({
					style: Ti.UI.iPhone.SystemButton.INFO_DARK,
					right: 10,
					row: j,
					section: i
				});
				rightButton.addEventListener('click', rightButtonClickHandler);
				var row = Ti.UI.createTableViewRow({
					height: 'auto',
					className: 'row'
				});
				row.add(label);
				row.add(rightButton);
				data[i].add(row);
				row.addEventListener('click', rowClickHandler);
			}
			data[i].addEventListener('click', sectionClickHandler);
		}
		var ts2 = new Date().getTime();
		
		// create table view
		var tableview = Ti.UI.createTableView({
			data: data,
			style: Ti.UI.iPhone.TableViewStyle.GROUPED,
			//rowHeight: 80,
			minRowHeight: 80,
			//maxRowHeight: 500
		});
		
		// create table view event listener
		tableview.addEventListener('click', function(e) {
			Ti.API.info("row click on table view. index = " + e.index + ", row = " + e.row + ", section = " + e.section + ", source = " + e.source);
			
			// event data
			var index = e.index;
			var section = e.section;
			var row = e.row;
			var rowdata = e.rowData;
			Ti.UI.createAlertDialog({
				title: 'Table View',
				message: '车牌号：京A111111，名称：大众\n所在地：北京市\n用途：普通运输，车种：单车，厢形：平板\n长：1米 宽：1米 高：1米\n最大载重：1吨，无GPS，有保险\n运输线路：固定路线' 
			}).show();
		});
		
		self.add(tableview);
	}
	
	if(opts.name == 'company') {
		var button = Ti.UI.createButton({
			height:44,
			width:200,
			title:L('openWindow'),
			top:20
		});
		self.add(button);
	
		button.addEventListener('click', function() {
			//containingTab attribute must be set by parent tab group on
			//the window for this work
			self.containingTab.open(Ti.UI.createWindow({
				title: L('newWindow'),
				backgroundColor: 'white'
			}));
		});
	}

	return self;
};

module.exports = ApplicationWindow;
