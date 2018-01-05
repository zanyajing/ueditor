UE.registerUI('button',function(editor,uiName){
 //注册按钮执行时的command命令，使用命令默认就会带有回退操作
 editor.registerCommand(uiName,{
 execCommand:function(){
 alert('execCommand:' + uiName)
 }
 });

//创建一个button
 var btn = new UE.ui.Button({
 //按钮的名字
 name:uiName,
 //提示
 title:uiName,
 //需要添加的额外样式，指定icon图标，这里默认使用一个重复的icon
 cssRules :'background-position: -500px 0;',
 //点击时执行的命令
 onclick:function () {
 //这里可以不用执行命令,做你自己的操作也可 具体需要什么api也可以查手册
 editor.execCommand('inserthtml', 'hello!');
 editor.execCommand(uiName);
 editor.execCommand('bold'); //加粗
 editor.execCommand('italic'); //加斜线
 editor.execCommand('subscript'); //设置上标
 editor.execCommand('supscript'); //设置下标
 editor.execCommand('forecolor', '#FF0000'); //设置字体颜色
 editor.execCommand('backcolor', '#0000FF'); //设置字体背景颜色
 }
 });

//当点到编辑内容上时，按钮要做的状态反射
 editor.addListener('selectionchange', function () {
 var state = editor.queryCommandState(uiName);
 if (state == -1) {
 btn.setDisabled(true);
 btn.setChecked(false);
 } else {
 btn.setDisabled(false);
 btn.setChecked(state);
 }
 });

//因为你是添加button,所以需要返回这个button
 return btn;
 });