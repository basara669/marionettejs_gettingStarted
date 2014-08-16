/**
 * Created by KyoheiMorimoto on 2014/04/28.
 */
TodoAppManager.module("TodoApp.List",function(List,TodoAppManager,Backbone,Marionette,$,_){
    List.TodoItemView = Marionette.ItemView.extend({
        tagName:"li",
        template:"#task-template",
        events:{
            "click .js-delete":"deleteClicked"
        },
        deleteClicked:function(e){
            e.stopPropagation();
//            this.model.collection.remove(this.model);
            this.trigger("todo:delete",this.model);
        }
    });
    List.TodosView = Marionette.CollectionView.extend({
        tagName:"ul",
        itemView :List.TodoItemView,
        collectionEvents:{
            "add":'addNew',
        },
        addNew:function(task){
            var taskView = new List.TodoItemView({model:task});
            this.$el.append(taskView);
        }
    });

});
