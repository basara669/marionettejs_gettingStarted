/**
 * Created by KyoheiMorimoto on 2014/04/28.
 */
TodoAppManager.module("TodoApp.List",function(List,TodoAppManager,Backbone,Marionette,$,_){
    List.Controller = {
        listTodos : function(){
        var todos = TodoAppManager.request("todo:TodoModel");
        var todosView = new List.TodosView({
            collection:todos
        });

        todosView.on("itemview:todo:delete", function(childView,model){
           todos.remove(model);
        });
        TodoAppManager.mainRegion.show(todosView);
        }
    }
});