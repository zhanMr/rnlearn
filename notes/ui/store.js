import {observable, computed, autorun, action} from 'mobx';
// class Store{
//     //可观察的状态
//     @observable title = "";
//     @observable todoList = [
//         {key: 1, value: 'Hello World'}
//     ];
//     @computed get newTodoList(){
//         return this.todoList.filter(list => list.key > 1)
//     }
//
// }
//另外一种写法
let Store = observable({
    title: '',
    tick: 1,
    todoList: [{key: 1, value: 'Hello World'}],
    get newTodoList(){
        return this.todoList.filter(list => list.key > 1)
    },
    increment: action.bound(function () {
        this.tick++;
    }),
    changeTitle: action.bound(function (title) {
        this.title = title;
    })

});

//观察状态改变的函数
autorun(function () {
    //console.log('completed %d items', Store.todoList.length);
    //console.log('title %d', Store.todoList);
})

export default Store;