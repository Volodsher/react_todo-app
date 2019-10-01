(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,o){e.exports=o(27)},17:function(e,t,o){},18:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(10),c=o.n(l),r=(o(17),o(18),o(2)),s=o(8),i=o(3),u=o(4),m=o(6),d=o(5),p=o(7),f=o(11),h=o.n(f),g=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={text:""},o.handleChange=function(e){o.setState(Object(r.a)({},e.target.name,e.target.value))},o.handleSubmit=function(e){e.preventDefault(),o.props.onSubmit({id:h.a.generate(),text:o.state.text,complete:!1}),o.setState({text:""})},o}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("h1",null,"todos"),a.a.createElement("input",{name:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChange,value:this.state.text}))}}]),t}(a.a.Component);function b(e){return a.a.createElement("li",{className:"",style:{textDecoration:e.todo.complete?"line-through":"",color:e.todo.complete?"#e4e4e4":""}},a.a.createElement("div",{className:"view"},a.a.createElement("input",{name:"status",type:"checkbox",className:"toggle",id:e.todo.id,onChange:e.toggleComplete,checked:e.todo.complete?"checked":""}),a.a.createElement("label",{htmlFor:"todo-1"},e.text),a.a.createElement("button",{type:"button",className:"destroy",onClick:e.toDelete})))}function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(o,!0).forEach(function(t){Object(r.a)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var O=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],todosToShow:"all"},o.addTodo=function(e){""!==e.text.trim()&&o.setState(function(t){return{todos:[e].concat(Object(s.a)(t.todos))}})},o.handleDelete=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.toggleComplete=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?E({},t,{complete:!t.complete}):t})}})},o.updateTodoToShow=function(e){o.setState({todosToShow:e})},o.clearAllComplete=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.complete})}})},o.lengthOfTodos=function(){return o.state.todos.filter(function(e){return!1===e.complete}).length},o.toggleAllComplete=function(){o.setState(function(e){return{todos:e.todos.map(function(t){return E({},t,{complete:!e.toggleAllComplete})}),toggleAllComplete:!e.toggleAllComplete}}),console.log("here you go")},o}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=[];return"all"===this.state.todosToShow?t=Object(s.a)(this.state.todos):"active"===this.state.todosToShow?t=this.state.todos.filter(function(e){return!e.complete}):"complete"===this.state.todosToShow&&(t=this.state.todos.filter(function(e){return e.complete})),0===this.state.todos.length?a.a.createElement("section",{className:"todoapp"},a.a.createElement(g,{className:"header",onSubmit:this.addTodo})):a.a.createElement("section",{className:"todoapp"},a.a.createElement(g,{className:"header",onSubmit:this.addTodo}),a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{onClick:this.toggleAllComplete,type:"checkbox",id:"toggle-all",name:"toggleAll",className:"toggle-all"}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},t.map(function(o){return a.a.createElement(b,{todos:t,todo:o,key:o.id,text:o.text,toDelete:function(){return e.handleDelete(o.id)},toggleComplete:function(){return e.toggleComplete(o.id)}})}))),a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},"".concat(this.lengthOfTodos()," items left")),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"selected",onClick:function(){return e.updateTodoToShow("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",onClick:function(){return e.updateTodoToShow("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",onClick:function(){return e.updateTodoToShow("complete")}},"Completed"))),a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:this.clearAllComplete},"Clear all complete")))}}]),t}(a.a.Component);var w=function(){return a.a.createElement(O,null)};c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.adab2cfb.chunk.js.map