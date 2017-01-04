var PDS = {
    wiring_point_all: [],
    power_switch_all: [],
    power_bus_all: [],
    power_line_all: [],
    wiring_img_all: [],
}
// ---------------- WiringText -----------------
PDS.WiringText = function(label,x, y, color){
    this.x = x;
    this.y = y;
    this.label = label;
   	this.color = color || '#000000';
}
PDS.WiringText.add = function(point){
    var pt = new PDS.WiringText(point.label,point.x, point.y ,point.color);
    return pt;
}

// ---------------- WiringImg -----------------
PDS.WiringImg = function(label,x, y, w, h, imgUrl){
	this.label=label;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imgUrl = imgUrl;
    this.originated_lines = [];
    this.terminated_lines = [];
}
PDS.WiringImg.add = function(point){
    var pt = new PDS.WiringImg(point.label,point.x, point.y ,point.w,point.h,point.imgUrl);
    PDS.wiring_img_all.push(pt);
    return pt;
}

// ---------------- WiringPoint -----------------
PDS.WiringPoint = function(x, y, label, color){
    this.x = x;
    this.y = y;
    this.color=color;
    this.label = label;
    this.originated_lines = [];
    this.terminated_lines = [];
}
PDS.WiringPoint.STYLE = { stroke: '#666',
			  color: '#fff',
			  strokeWidth: 2,
			  radius: 4
			};
PDS.WiringPoint.prototype.get_left = function(){
    return this.x - PDS.WiringPoint.STYLE.radius;
}

PDS.WiringPoint.prototype.set_left = function(left){
    this.x = left + PDS.WiringPoint.STYLE.radius;
}
PDS.WiringPoint.prototype.set_top = function(top){
    this.y = top + PDS.WiringPoint.STYLE.radius;
}
PDS.WiringPoint.prototype.get_top = function(){
    return this.y - PDS.WiringPoint.STYLE.radius;
}
PDS.WiringPoint.add = function(point){
    var pt = new PDS.WiringPoint(point.x, point.y, point.label, point.color);
    PDS.wiring_point_all.push(pt);
    return pt;
}

PDS.WiringPoint.find = function(label){
    for(var i = 0; i < PDS.wiring_point_all.length; i++){
	if (label == PDS.wiring_point_all[i].label) return PDS.wiring_point_all[i];
    }
    throw "WiringPoint not existed: " + label;
}

PDS.WiringPoint.prototype.get_point = function(label){
    return { x: this.x, y: this.y };
}

// ----------------- PowerSwitch -----------------
PDS.PowerSwitch = function(x, y, label ,color,stroke){
    this.x = x;
    this.y = y;
    this.label = label;
    this.color=(color==undefined?'#fff':color);
    this.stroke = stroke;
    this.originated_lines = [];
    this.terminated_lines = [];
}
PDS.PowerSwitch.STYLE = { width: 40,
			  height: 30,
			  point_radius: 4,
			  point_strokeWidth: 2,
			  point_stroke: '#666',
			  point_fill: '#fff',
			  stick_strokeWidth: 2,
			  stick_stroke: '#666',
			  stick_angle: -28
			};

PDS.PowerSwitch.prototype.get_left = function(){
    return this.x - PDS.PowerSwitch.STYLE.width/2;
}
PDS.PowerSwitch.prototype.get_top = function(){
    return this.y - PDS.PowerSwitch.STYLE.height/2 ;
}

PDS.PowerSwitch.prototype.set_left = function(left){
    this.x = left + PDS.PowerSwitch.STYLE.width/2;
}
PDS.PowerSwitch.prototype.set_top = function(top){
    this.y = top + PDS.PowerSwitch.STYLE.height/2;
}


PDS.PowerSwitch.prototype.get_a_point = function() {
    return new PDS.WiringPoint(this.get_left() + PDS.PowerSwitch.STYLE.point_radius ,
			   this.y,
			   'a');
}
PDS.PowerSwitch.prototype.get_z_point = function() {
    return new PDS.WiringPoint(this.get_left() + PDS.PowerSwitch.STYLE.width- PDS.PowerSwitch.STYLE.point_radius,
			   this.y,
			   'z');
}
PDS.PowerSwitch.prototype.get_point = function(point_label){
    var pt;
    if (point_label == 'a') pt = this.get_a_point();
    else pt = this.get_z_point();
    return { x: pt.x, y: pt.y };
}


PDS.PowerSwitch.add = function(point,stroke){
    var node = new PDS.PowerSwitch(point.x, point.y, point.label, point.color, stroke==undefined?"#666":"#fff");
    PDS.power_switch_all.push(node);
    return node;
}

PDS.PowerSwitch.find = function(label){
    for(var i = 0; i < PDS.power_switch_all.length; i++){
	if (label == PDS.power_switch_all[i].label) return PDS.power_switch_all[i];
    }
    throw "PowerSwitch not existed: "+ label;
}



// ------------------ PowerBus -----------------------
PDS.PowerBus = function(x, y, label, color){
    this.x = x;
    this.y = y;
    this.color = color || '#fff';
    this.label = label;
    this.points = [];
    this.height= PDS.PowerBus.STYLE.height;
    this.originated_lines = [];
    this.terminated_lines = [];
}
PDS.PowerBus.STYLE = { width: 12,
		       height:20,
		       strokeWidth: 2,
		       fill: '#999'
		     };
PDS.PowerBus.prototype.get_left = function(){
    return this.x;
}
PDS.PowerBus.prototype.get_top = function(){
    return this.y;
}

PDS.PowerBus.prototype.set_left = function(x){
    this.x = x ;
}
PDS.PowerBus.prototype.set_top = function(y){
    this.y =  y;
}



PDS.PowerBus.prototype.get_point = function(point_label){
    var pt;
    for(var j=0; j < this.points.length; j++) {
	if (point_label == this.points[j].label){
	    pt = this.points[j];
	}
    }
    return { x: pt.x + this.x, y: pt.y + this.y };
}

PDS.PowerBus.prototype.add_point = function(a_label){
    this.points.push(new PDS.WiringPoint(PDS.PowerBus.STYLE.width/2, 20*(1 + this.points.length), a_label,this.color));
    this.height += 20;
}

PDS.PowerBus.add = function(point){
    var node = new PDS.PowerBus(point.x, point.y, point.label, point.color);
    PDS.power_bus_all.push(node);
    return node;
}

PDS.PowerBus.find = function(label){
    for(var i = 0; i < PDS.power_bus_all.length; i++){
	if (label == PDS.power_bus_all[i].label) return PDS.power_bus_all[i];
    }
    throw "PowerBus not existed: "+ label;
}



// ---------------------- PowerLine --------------------
PDS.PowerLine = function(a_label, z_label, color){
    this.a_label = a_label;
    this.z_label = z_label;
    this.color = color || '#666';
}

PDS.PowerLine.STYLE = { strokeWidth: 1 };

PDS.PowerLine.locate_node = function(composite_label) {
    var parts = composite_label.split("::");
    var node_type = parts[0],
	label = parts[1];
    
    switch(node_type){
    case "WiringPoint":
	var node = PDS.WiringPoint.find(label);
	return [node, ''];
	break;
    case "PowerSwitch":
	var node = PDS.PowerSwitch.find(label);
	return [node, parts[2]];
	break;
    case "PowerBus":
	var node = PDS.PowerBus.find(label);
	return [node, parts[2]];
	break;
    default:
	throw "Not supported type: " + node_type
    }
}

PDS.PowerLine.prototype.process_a_node = function(){
    var node_and_point = PDS.PowerLine.locate_node(this.a_label);
    this.a_node = node_and_point[0];
    this.a_point_label = node_and_point[1];

    this.a_node.originated_lines.push(this);
}

PDS.PowerLine.prototype.process_z_node = function(){
    var node_and_point = PDS.PowerLine.locate_node(this.z_label);
    this.z_node = node_and_point[0];
    this.z_point_label = node_and_point[1];

    this.z_node.terminated_lines.push(this);
}

// --------------------------------------
PDS.WiringPoint.prototype.update_lines =  PDS.PowerSwitch.prototype.update_lines = PDS.PowerBus.prototype.update_lines = function(left, top){
	this.set_left(left);
	this.set_top(top);
	
	for(var i = 0; i < this.originated_lines.length; i++){
	    this.originated_lines[i].adjust_coords();
	}
	for(var i = 0; i < this.terminated_lines.length; i++){
	    this.terminated_lines[i].adjust_coords();
	}

    };
    
    


//var scenarios = [{label: "no1", power_switch_states:[{label: "kaiguan1", "closed"},
 //                                                     {label: "kaiguan2", "open",}}}
                                                      
                                                      
                                                      
//var power_input_object = [{"Wiriingpoint: xijinxian001"}, {"PowerGenerator: No1"}];

//setHighlight(this.color == green;)
//setUnHighlight(this.color == STYLE.default_color;)