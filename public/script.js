var json;
var canvas = new fabric.Canvas('canvas');

	            document.getElementById('file').addEventListener("change", function (e) {
				var file = e.target.files[0];
				var reader = new FileReader();
                console.log("reader   " + reader);
                reader.onload = function (f) {
                    var data = f.target.result;
					
                    fabric.Image.fromURL(data, function (img) {
						//alert(img.width);
                        var oImg = img.set({left: 70,  top: 100, width: img.width, height: img.height, angle: 0}).scale(0.15);
                        canvas.add(oImg).renderAll();
                        var a = canvas.setActiveObject(oImg);
                        var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
                    });
                };
                reader.readAsDataURL(file);
            });
            document.querySelector('#txt').onclick = function (e) {
                e.preventDefault();
                canvas.deactivateAll().renderAll();
                document.querySelector('#preview').src = canvas.toDataURL();
				
            };

document.querySelectorAll('.add-text-btn')[0].addEventListener('click', function(){

    var textToAdd = new fabric.Text(document.querySelectorAll('.add-text')[0].value, {
       fontFamily: 'arial',
		fontSize : '12'
    });

    canvas.add(textToAdd);	
	
	
	});
	
	// delete selection
	delBtn = document.getElementById('delete');
	// Rmove the active object on clicking the delete button
delBtn.addEventListener('click', e => {
  canvas.remove(canvas.getActiveObject())
});
	var gridsize = 5;
for(var x=1;x<(canvas.width/gridsize);x++)
                        {
                            canvas.add(new fabric.Line([20*x, 0, 20*x, 1000],{ stroke: "#ddd", strokeWidth: 1, selectable:false, strokeDashArray: [5, 5]}));
                            canvas.add(new fabric.Line([0, 40*x, 1000, 40*x],{ stroke: "#ddd", strokeWidth: 1, selectable:false, strokeDashArray: [5, 5]}));
                    }	
$('#size').change(function(){
if($('#size').val()=='size1')
{
canvas.setDimensions({width:500, height:300});
}
else if($('#size').val()=='size2')
{
canvas.setDimensions({width:300, height:500});
}
else if($('#size').val()=='size3')
{
canvas.setDimensions({width:300, height:600});
}
}); 
	
	canvas.on('object:moving', function (e) {
        var obj = e.target;
         // if object is too big ignore
        if(obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width){
            return;
        }        
        obj.setCoords();        
        // top-left  corner
        if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
            obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
            obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
        }
        // bot-right corner
        if(obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width){
            obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
            obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
        }
});

    var left1 = 0;
    var top1 = 0 ;
    var scale1x = 0 ;    
    var scale1y = 0 ;    
    var width1 = 0 ;    
    var height1 = 0 ;
  canvas.on('object:scaling', function (e){
    var obj = e.target;
    obj.setCoords();
    var brNew = obj.getBoundingRect();
    
    if (((brNew.width+brNew.left)>=obj.canvas.width) || ((brNew.height+brNew.top)>=obj.canvas.height) || ((brNew.left<0) || (brNew.top<0))) {
    obj.left = left1;
    obj.top=top1;
    obj.scaleX=scale1x;
    obj.scaleY=scale1y;
    obj.width=width1;
    obj.height=height1;
  }
    else{    
      left1 =obj.left;
      top1 =obj.top;
      scale1x = obj.scaleX;
      scale1y=obj.scaleY;
      width1=obj.width;
      height1=obj.height;
    }
 });
$('.click_text').click(function(){
$('.text').toggle();
$('.img').hide();
$('.text1').hide();
});
$('.click_template').click(function(){
$('.text').hide();
$('.img').hide();
$('.text1').toggle();
});
$('.click_img').click(function(){
$('.text').hide();
$('.img').toggle();
$('.text1').hide();
});
$('.close').click(function(){
$('.text').hide();
$('.img').hide();
$('.text1').hide();
});
	
$('.save').click(function(){
json = canvas.toJSON();
alert('saved successfully');
});
$('.clear').click(function(){
canvas.clear();
});
$('.restore').click(function(){
canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
});
