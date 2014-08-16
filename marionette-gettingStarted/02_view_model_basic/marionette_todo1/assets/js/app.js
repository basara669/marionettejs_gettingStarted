var TodoAppManager = new Marionette.Application();
TodoAppManager.addRegions({
    mainRegion:"#main-region"
});
TodoAppManager.on("initialize:after",function(){
    TodoAppManager.TodoApp.List.Controller.listTodos();
});
