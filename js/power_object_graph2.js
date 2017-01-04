PDS.WiringPoint.prototype.made_graph_obj = function(){
    var node =  new fabric.Circle({ left: this.x,
				    top:  this.y,
				    strokeWidth: PDS.WiringPoint.STYLE.strokeWidth,
				    radius: PDS.WiringPoint.STYLE.radius,
				    fill: this.color,
				    stroke: PDS.WiringPoint.STYLE.stroke,
				    originX: 'center',
				    originY: 'center',
				  });
    node.domain_object = this;
    node.hasControls = false;   
 	return node;
}

PDS.WiringText.prototype.made_graph_text = function(){
 	var label = new fabric.Text(this.label, {left: this.x, top: this.y, fontSize: 15, fill: this.color});	
 	return label;
}

PDS.WiringImg.prototype.made_graph_img = function(){
	var left=this.x;
	var top=this.y;
	var height=this.h;
	var width=this.w;
	fabric.Image.fromURL(this.imgUrl, function(img) {
		img.left=left,
		img.top=top,
		img.height=height,
		img.width=width,
		img.lockMovementY=true,
		img.lockMovementX=true 
		canvas.add(img);
	});
}


PDS.PowerSwitch.prototype.made_graph_point = function(x, y){
    return new fabric.Circle({ left: x,
			       top:  y,
			       strokeWidth: PDS.PowerSwitch.STYLE.point_strokeWidth,
			       radius: PDS.PowerSwitch.STYLE.point_radius,
			       fill: this.color,
			       stroke: PDS.PowerSwitch.STYLE.point_stroke,
			       originX: 'center',
			       originY: 'center',
			     });
}

PDS.PowerSwitch.prototype.made_graph_obj = function(){
    var circle1 = this.made_graph_point(-PDS.PowerSwitch.STYLE.width/2 + PDS.PowerSwitch.STYLE.point_radius , 0);
    var circle2 = this.made_graph_point( PDS.PowerSwitch.STYLE.width/2 - PDS.PowerSwitch.STYLE.point_radius,  0 );
    
    var stick = new fabric.Line( [-PDS.PowerSwitch.STYLE.width/2 + PDS.PowerSwitch.STYLE.point_radius,
				  - PDS.PowerSwitch.STYLE.point_radius,
				  PDS.PowerSwitch.STYLE.width/2 - PDS.PowerSwitch.STYLE.point_radius,
				  -PDS.PowerSwitch.STYLE.height/2],
				 { strokeWidth: PDS.PowerSwitch.STYLE.stick_strokeWidth,
				   stroke: this.stroke
				 });
    var group =  new fabric.Group([circle1,circle2, stick],
			    { left: this.get_left(), top: this.get_top()}
			   );
    
    group.domain_object = this;
    group.hasControls = false;
    return group
}

PDS.PowerBus.prototype.made_graph_point = function(pt){
    return new fabric.Circle({ left: 0,
			       top:  pt.y - this.height/2 , 
			       strokeWidth: PDS.WiringPoint.STYLE.strokeWidth,
			       radius: PDS.WiringPoint.STYLE.radius,
			       fill: pt.color,
			       stroke: PDS.WiringPoint.STYLE.stroke,
			       originX: 'center',
			       originY: 'center'
			     });
}

PDS.PowerBus.prototype.made_graph_obj = function(){
    var group = new fabric.Group([ new fabric.Rect({fill: PDS.PowerBus.STYLE.fill,
						    width: PDS.PowerBus.STYLE.width,
						    height: this.height,
						    strokeWidth: PDS.PowerBus.STYLE.strokeWidth
						   })],
				 { left: this.get_left(), top: this.get_top()});
    for(var i=0; i < this.points.length; i++){
    	group.add( this.made_graph_point(this.points[i]));
    }
    group.domain_object = this;
    group.hasControls = false;
    return group;
}


// --------------------------------------------------------------------------------------------
fabric.MultiLine = fabric.util.createClass(fabric.Object, {
    type: 'multiline',
    initialize: function(points,options) {
	options = options || {}
	this.callSuper('initialize', options);
	
	this.points = points || []
	this._setWidthHeight();
  },
    _get_min_max: function(){
	var min_x = 1024000,
	    min_y = 1024000,
	    max_x = 0,
	    max_y = 0;
	for(var i=0; i< this.points.length; i++){
	    if (min_x > this.points[i].x ) min_x = this.points[i].x;
	    if (min_y > this.points[i].y ) min_y = this.points[i].y;
	    if (max_x < this.points[i].x ) max_x = this.points[i].x;
	    if (max_y < this.points[i].y ) max_y = this.points[i].y;
	}
	return { min_x: min_x, min_y: min_y, max_x: max_x, max_y: max_y };
    },
    
    
    _setWidthHeight: function(){
	var coords = this._get_min_max();
	this.left = coords.min_x;
	this.top = coords.min_y;
	this.width = coords.max_x - coords.min_x;
	this.height = coords.max_y - coords.min_y ;
    },
  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      points: this.points
    });
  },

  _render: function(ctx) {
      if (this.points.length ==0) return;
      var coords = this._get_min_max();
      this.setLeft(coords.min_x);
      this.setTop(coords.min_y);
      this._setWidthHeight();

      var pt = { x:(coords.min_x + coords.max_x)/2,  y:(coords.min_y + coords.max_y)/2};
      ctx.beginPath();
      if (!this.strokeDashArray || this.strokeDashArray && supportsLineDash) {
        // move from center (of virtual box) to its left/top corner
        // we can't assume x1, y1 is top left and x2, y2 is bottom right
	  ctx.moveTo(this.points[0].x - pt.x, this.points[0].y - pt.y);
	  for(var i=1; i< this.points.length; i++){
	      ctx.lineTo(this.points[i].x - pt.x, this.points[i].y - pt.y);
	  }
      }
      ctx.lineWidth = this.strokeWidth;
      var origStrokeStyle = ctx.strokeStyle;
      ctx.strokeStyle = this.stroke || ctx.fillStyle;
      this.stroke && this._renderStroke(ctx);
      ctx.strokeStyle = origStrokeStyle;
      
  }
});




PDS.PowerLine.prototype.made_graph_obj = function(){
    this.process_a_node();
    this.process_z_node();
    var points = this.create_points_on_line();
    var line = new fabric.MultiLine(points,  {stroke: this.color,
					      strokeWidth: 2,
					      fill: '#ddd'}
				   );
     
    line.hasControls = false;
    line.selectable = false;
    this.graph_object = line;
    return line;
}

PDS.PowerLine.prototype.create_points_on_line = function(){
    var point_a = this.a_node.get_point(this.a_point_label);
    var point_z = this.z_node.get_point(this.z_point_label);
    
    var mid_x = (point_a.x + point_z.x)/2;

    if (mid_x <= point_a.x)  mid_x += 40;
    var mid_pt1 = { x: mid_x, y: point_a.y};
    var mid_pt2 = { x: mid_x, y: point_z.y};
    return [point_a, mid_pt1, mid_pt2, point_z];
}


PDS.PowerLine.prototype.adjust_coords = function(){
    var points = this.create_points_on_line();
    var line = this.graph_object;
    line.points= points;
    line.dirty = true;
}














