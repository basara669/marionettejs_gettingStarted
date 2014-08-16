/**
 * Created by KyoheiMorimoto on 2014/04/29.
 */
TodoAppManager.module("TodoApp.Add",function(Add,TodoAppManager,Backbone,Marionette,$,_){
    Add.AddTodoView = Marionette.ItemView.extend({
        template:"#add-template",
        events:{
            'submit':'submit'
        },
        submit:function(e){
            e.preventDefault();
            var todos = TodoAppManager.request("todo:TodoModel");
            todos.add({title:$('#title').val()});
        }
    });
    var addTodoView = new Add.AddTodoView({});
    TodoAppManager.addRegion.show(addTodoView);
});