PDS.WiringPoint.prototype.made_graph_obj = function(){
    var node =  new fabric.Circle({ left: this.get_left(),
				    top:  this.get_top(),
				    strokeWidth: PDS.WiringPoint.STYLE.strokeWidth,
				    radius: PDS.WiringPoint.STYLE.radius,
				    fill: PDS.WiringPoint.STYLE.fill,
				    stroke: PDS.WiringPoint.STYLE.stroke
				  });
    node.domain_object = this;
    return node;
}

PDS.PowerSwitch.prototype.made_graph_point = function(x, y){
    return new fabric.Circle({ left: x,
			       top:  y,
			       strokeWidth: PDS.PowerSwitch.STYLE.point_strokeWidth,
			       radius: PDS.PowerSwitch.STYLE.point_radius,
			       fill: PDS.PowerSwitch.STYLE.point_fill,
			       stroke: PDS.PowerSwitch.STYLE.point_stroke
			     });
}

PDS.PowerSwitch.prototype.made_graph_obj = function(){
    var circle1 = this.made_graph_point(-PDS.PowerSwitch.STYLE.width/2, 10);
    var circle2 = this.made_graph_point(PDS.PowerSwitch.STYLE.width/2, 10);
    
    var stick = new fabric.Line( [-PDS.PowerSwitch.STYLE.width/2,10, PDS.PowerSwitch.STYLE.width/2, 0],
				 { strokeWidth: PDS.PowerSwitch.STYLE.stick_strokeWidth,
				   stroke: PDS.PowerSwitch.STYLE.stick_stroke
				 });
    return new fabric.Group([circle1,circle2, stick],
			    { left: this.get_left(), top: this.get_top()}
			   );
    
    group.domain_object = this;
    return group
}

PDS.PowerBus.prototype.made_graph_point = function(pt){
    return new fabric.Circle({ top:  pt.y - this.y ,
			       left: -4,
			       strokeWidth: PDS.WiringPoint.STYLE.strokeWidth,
			       radius: PDS.WiringPoint.STYLE.radius,
			       fill: PDS.WiringPoint.STYLE.fill,
			       stroke: PDS.WiringPoint.STYLE.stroke
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

PDS.PowerLine.prototype.made_graph_obj = function(){
    this.process_a_node();
    this.process_z_node();
    var points = this.create_points_on_line();
    var line = new fabric.Group([]);
    this.add_line_to(line, points);
    
    line.hasControls = false;
    line.selectable = false;
    this.graph_object = line;
    return line;
}

PDS.PowerLine.prototype.add_line_to=function(group, points){
    for (var i=1; i< points.length; i++){
	group.addWithUpdate(new fabric.Line([points[i-1].x ,
				   points[i-1].y,
				   points[i].x ,
					    points[i].y 
					   ],
					   {stroke: '#666',
					    fill: '#ddd'}
					  ));
	
    }
};


PDS.PowerLine.prototype.create_points_on_line = function(){
    var point_a = this.a_node.get_point(this.a_point_label);
    var point_z = this.z_node.get_point(this.z_point_label);
    
    var mid_x = (point_a.x + point_z.x)/2;
    if (mid_x == point_a.x)  mid_x += 40;
    var mid_pt1 = { x: mid_x, y: point_a.y};
    var mid_pt2 = { x: mid_x, y: point_z.y};
    return [point_a, mid_pt1, mid_pt2, point_z];
}


PDS.PowerLine.prototype.adjust_coords = function(){
    var points = this.create_points_on_line();
    var group = this.graph_object;
    var pt = this.get_min_max(points);
    for(var i=0; i< points.length-1; i++){
	group.item(i).x1 = points[i].x ;
	group.item(i).y1 = points[i].y ;
	group.item(i).x2 = points[i+1].x;
	group.item(i).y2 = points[i+1].y;
	group.item(i).setCoords();
	
    }
    

    group.set({left: pt.min_x, top: pt.min_y});
    group._calcBounds();
    group.dirty = true;
    group.setCoords();


}

PDS.PowerLine.prototype.get_min_max = function(points){
    var min_x = 0,
	min_y = 0,
	max_x = 0,
	max_y = 0;
    for(var i=0; i< points.length; i++){
	if (min_x > points[i].x ) min_x = points[i].x;
	if (min_y > points[i].y ) min_y = points[i].y;
	if (max_x < points[i].x ) max_x = points[i].x;
	if (max_y < points[i].x ) max_y = points[i].y;
    }
    return { min_x: min_x, min_y: min_y, max_x: max_x, max_y: max_y };
}













