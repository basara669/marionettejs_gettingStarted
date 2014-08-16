var TodoAppManager = new Marionette.Application();
TodoAppManager.addRegions({
    mainRegion:"#main-region",
    addRegion:"#add-region"
});
TodoAppManager.on("initialize:after",function(){
    TodoAppManager.TodoApp.List.Controller.listTodos();
});
