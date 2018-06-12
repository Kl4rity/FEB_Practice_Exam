function initEventListeners(){
    // TODO 
}

$(document).ready(function(){
    initEventListeners();
    queryManager.fetchProjectList();
    viewManager.initViewManager();
    viewManager.showProjectOverview();
});