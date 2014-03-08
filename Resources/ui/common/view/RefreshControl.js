/**
 * Copyright(c)2013,zhangchunsheng,www.zhangchunsheng.com.cn
 * Version: 1.0
 * Author: zhangchunsheng
 * Date: 2014-03-08
 * Description: refreshControl
 * Modification:
 *      甲、乙、丙、丁、戊、己、庚、辛、壬、癸 甲（jiǎ）、乙（yǐ）、丙（bǐng）、丁（dīng）、戊（wù）、己（jǐ）、庚（gēng）、辛（xīn）、壬（rén）、癸（guǐ）
 *      子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥 子（zǐ）、丑（chǒu）、寅（yín）、卯（mǎo）、辰（chén）、巳（sì）、午（wǔ）、未（wèi）、申（shēn）、酉（yǒu）、戌（xū）、亥（hài）
 *      甲午年（马年）丁卯月戊寅日 农历二月初八
 */
function RefreshControl(opts) {
    var section = Ti.UI.createListSection();
    section.setItems(genData());
    var control = Ti.UI.createRefreshControl({
        tintColor: 'red'
    });
    var listView = Ti.UI.createListView({
        sections: [section],
        refreshControl: control
    });
    control.addEventListener('refreshstart', function(e) {
        Ti.API.info('refreshstart');
        setTimeout(function() {
            Ti.API.debug('Timeout');
            section.appendItems(genData());
            control.endRefreshing();
        }, 2000);
    });
    
    this.listView = listView;
};

var counter = 0;
function genData() {
    var data = [];
    var i = 1;
    for(i = 1 ; i <= 3; i++) {
        data.push({properties:{title:'ROW: ' + (counter + 1)}});
    }
    counter += 3;
    return data;
}

RefreshControl.prototype.addEventListener = function(name, callback) {
    
};

/**
 * show
 */
RefreshControl.prototype.show = function() {
    
};

/**
 * hide
 */
RefreshControl.prototype.hide = function() {
    
};

module.exports = RefreshControl;