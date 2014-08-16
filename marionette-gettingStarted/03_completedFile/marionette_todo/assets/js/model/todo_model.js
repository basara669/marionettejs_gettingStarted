/**
 * Created by KyoheiMorimoto on 2014/04/28.
 */
TodoAppManager.module('TodoModel',function(TodoModel, TodoAppManager,Backbone,Marionette, $ ,_){
    TodoModel.Todo = Backbone.Model.extend({});
    TodoModel.TodoCollection = Backbone.Collection.extend({
        model:TodoModel.Todo
    });
    var todos;
    var initializeTodos = function(){
        todos = new TodoModel.TodoCollection([
            {
                title:"task1",
                completed:true
            },
            {
                title:"task2",
                completed:false
            },
            {
                title:"task3",
                completed:false
            }
        ]);
    };

    var API = {
        getTodos:function(){
            if(todos === undefined){
                initializeTodos();
            }
            return todos;
        }
    };
    TodoAppManager.reqres.setHandler("todo:TodoModel",function(){
       return API.getTodos();
    });
});


