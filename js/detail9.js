(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 40,
	color: "#000000",
	manifest: [
		{src:"images/detail9/Bitmap1.png", id:"Bitmap1"},
		{src:"images/detail9/Bitmap1_1.png", id:"Bitmap1_1"},
		{src:"images/detail9/Bitmap1_2.png", id:"Bitmap1_2"},
		{src:"images/detail9/Bitmap1copy.png", id:"Bitmap1copy"},
		{src:"images/detail9/Bitmap2.png", id:"Bitmap2"},
		{src:"images/detail9/Bitmap2_1.png", id:"Bitmap2_1"},
		{src:"images/detail9/Bitmap2_2.png", id:"Bitmap2_2"},
		{src:"images/detail9/Bitmap2copy.png", id:"Bitmap2copy"},
		{src:"images/detail9/Bitmap3.png", id:"Bitmap3"},
		{src:"images/detail9/Bitmap3copy.png", id:"Bitmap3copy"},
		{src:"images/detail9/Bitmap4.png", id:"Bitmap4"},
		{src:"images/detail9/Bitmap4_1.png", id:"Bitmap4_1"},
		{src:"images/detail9/cadenas2.jpg", id:"cadenas2"},
		{src:"images/detail9/cadenas3.jpg", id:"cadenas3"},
		{src:"images/detail9/charms1.png", id:"charms1"},
		{src:"images/detail9/charms2.png", id:"charms2"},
		{src:"images/detail9/fish1.jpg", id:"fish1"},
		{src:"images/detail9/fish2.png", id:"fish2"},
		{src:"images/detail9/fish3.jpg", id:"fish3"},
		{src:"images/detail9/fish4.png", id:"fish4"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,87);


(lib.Bitmap1_1 = function() {
	this.initialize(img.Bitmap1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,44);


(lib.Bitmap1_2 = function() {
	this.initialize(img.Bitmap1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,125);


(lib.Bitmap1copy = function() {
	this.initialize(img.Bitmap1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,57);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,57);


(lib.Bitmap2_1 = function() {
	this.initialize(img.Bitmap2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,36);


(lib.Bitmap2_2 = function() {
	this.initialize(img.Bitmap2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,44);


(lib.Bitmap2copy = function() {
	this.initialize(img.Bitmap2copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,57);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,36);


(lib.Bitmap3copy = function() {
	this.initialize(img.Bitmap3copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,57);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,57);


(lib.Bitmap4_1 = function() {
	this.initialize(img.Bitmap4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,44);


(lib.cadenas2 = function() {
	this.initialize(img.cadenas2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,800);


(lib.cadenas3 = function() {
	this.initialize(img.cadenas3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,600);


(lib.charms1 = function() {
	this.initialize(img.charms1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,550);


(lib.charms2 = function() {
	this.initialize(img.charms2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,432);


(lib.fish1 = function() {
	this.initialize(img.fish1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,412);


(lib.fish2 = function() {
	this.initialize(img.fish2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,944);


(lib.fish3 = function() {
	this.initialize(img.fish3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,999);


(lib.fish4 = function() {
	this.initialize(img.fish4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,411);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fish4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,700,411);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,389,125);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,158,44);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fish2();
	this.instance.setTransform(189,238,0.7,0.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(189,238,490,660.8);


(lib.Symbol2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap1copy();
	this.instance_1.setTransform(12,0);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12,0,248,57);


(lib.Symbol1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap1();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,323,87);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,289,36);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265,36);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,236,44);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,285,44);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.charms2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,349,432);


(lib.Symbol4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.charms1();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,326,550);


(lib.Symbol3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap2();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,422,57);


(lib.Symbol2copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,384,57);


(lib.Symbol2_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap4();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185,57);


(lib.Symbol1copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cadenas3();
	this.instance.setTransform(0,6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,6,550,600);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cadenas2();
	this.instance.setTransform(94,22,0.72,0.72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(94,22,432,576);


(lib.Symbol1_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap3copy();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,308,57);


(lib.MC_opening = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{open:1});

	// timeline functions:
	this.frame_1 = function() {
		this.dispatchEvent('opened');
	}
	this.frame_149 = function() {
		this.dispatchEvent('closed');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(148).call(this.frame_149).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag+AAIB9AA");
	this.shape.setTransform(320,533.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhwAAIDhAA");
	this.shape_1.setTransform(320,533.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AihAAIFDAA");
	this.shape_2.setTransform(320,533.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjSAAIGlAA");
	this.shape_3.setTransform(320,533.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkEAAIIJAA");
	this.shape_4.setTransform(320,533.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak1AAIJrAA");
	this.shape_5.setTransform(320,533.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlmAAILNAA");
	this.shape_6.setTransform(320,533.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmXAAIMvAA");
	this.shape_7.setTransform(320,533.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnJAAIOTAA");
	this.shape_8.setTransform(320,533.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("An6AAIP1AA");
	this.shape_9.setTransform(320,533.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AorAAIRXAA");
	this.shape_10.setTransform(320,533.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApdAAIS7AA");
	this.shape_11.setTransform(320,533.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqOAAIUdAA");
	this.shape_12.setTransform(320,533.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aq/AAIV/AA");
	this.shape_13.setTransform(320,533.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArwAAIXhAA");
	this.shape_14.setTransform(320,533.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsiAAIZFAA");
	this.shape_15.setTransform(320,533.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtTAAIanAA");
	this.shape_16.setTransform(320,533.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AuEAAIcJAA");
	this.shape_17.setTransform(320,533.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("Au1AAIdrAA");
	this.shape_18.setTransform(320,533.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AvnAAIfPAA");
	this.shape_19.setTransform(320,533.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AwYAAMAgxAAA");
	this.shape_20.setTransform(320,533.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxJAAMAiTAAA");
	this.shape_21.setTransform(320,533.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ax7AAMAj3AAA");
	this.shape_22.setTransform(320,533.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AysAAMAlZAAA");
	this.shape_23.setTransform(320,533.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzdAAMAm7AAA");
	this.shape_24.setTransform(320,533.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("A0OAAMAodAAA");
	this.shape_25.setTransform(320,533.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1AAAMAqBAAA");
	this.shape_26.setTransform(320,533.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1xAAMArjAAA");
	this.shape_27.setTransform(320,533.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("A2iAAMAtFAAA");
	this.shape_28.setTransform(320,533.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3TAAMAunAAA");
	this.shape_29.setTransform(320,533.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("A4FAAMAwLAAA");
	this.shape_30.setTransform(320,533.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("A42AAMAxtAAA");
	this.shape_31.setTransform(320,533.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("A5nAAMAzPAAA");
	this.shape_32.setTransform(320,533.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("A6YAAMA0xAAA");
	this.shape_33.setTransform(320,533.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("A7KAAMA2UAAA");
	this.shape_34.setTransform(320,533.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("A77AAMA33AAA");
	this.shape_35.setTransform(320,533.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("A8sAAMA5ZAAA");
	this.shape_36.setTransform(320,533.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,1,1).p("A9dAAMA67AAA");
	this.shape_37.setTransform(320,533.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("A+PAAMA8fAAA");
	this.shape_38.setTransform(320,533.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,1,1).p("A/AAAMA+BAAA");
	this.shape_39.setTransform(320,533.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("A/xAAMA/jAAA");
	this.shape_40.setTransform(320,533.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,1,1).p("EggjAAAMBBHAAA");
	this.shape_41.setTransform(320,533.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("EghUAAAMBCpAAA");
	this.shape_42.setTransform(320,533.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgiFAAAMBELAAA");
	this.shape_43.setTransform(320,533.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egi2AAAMBFtAAA");
	this.shape_44.setTransform(320,533.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgjoAAAMBHRAAA");
	this.shape_45.setTransform(320,533.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgkZAAAMBIzAAA");
	this.shape_46.setTransform(320,533.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(1,1,1).p("EglKAAAMBKVAAA");
	this.shape_47.setTransform(320,533.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egl7AAAMBL3AAA");
	this.shape_48.setTransform(320,533.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgmtAAAMBNbAAA");
	this.shape_49.setTransform(320,533.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgneAAAMBO9AAA");
	this.shape_50.setTransform(320,533.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgoPAAAMBQfAAA");
	this.shape_51.setTransform(320,533.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgpAAAAMBSBAAA");
	this.shape_52.setTransform(320,533.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgpyAAAMBTlAAA");
	this.shape_53.setTransform(320,533.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgqjAAAMBVHAAA");
	this.shape_54.setTransform(320,533.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgrUAAAMBWpAAA");
	this.shape_55.setTransform(320,533.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgsFAAAMBYLAAA");
	this.shape_56.setTransform(320,533.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egs3AAAMBZvAAA");
	this.shape_57.setTransform(320,533.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgtoAAAMBbRAAA");
	this.shape_58.setTransform(320,533.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_59.setTransform(320,533.7);
	this.shape_59._off = true;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.973)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_60.setTransform(320,533.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,255,255,0.949)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_61.setTransform(320,533.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.922)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_62.setTransform(320,533.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,255,255,0.898)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_63.setTransform(320,533.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.871)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_64.setTransform(320,533.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,255,255,0.847)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_65.setTransform(320,533.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.82)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_66.setTransform(320,533.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,255,255,0.796)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_67.setTransform(320,533.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.769)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_68.setTransform(320,533.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(255,255,255,0.745)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_69.setTransform(320,533.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.718)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_70.setTransform(320,533.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(255,255,255,0.694)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_71.setTransform(320,533.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_72.setTransform(320,533.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(255,255,255,0.639)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_73.setTransform(320,533.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.616)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_74.setTransform(320,533.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,255,255,0.588)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_75.setTransform(320,533.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.565)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_76.setTransform(320,533.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(255,255,255,0.537)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_77.setTransform(320,533.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.514)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_78.setTransform(320,533.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0.486)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_79.setTransform(320,533.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0.463)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_80.setTransform(320,533.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(255,255,255,0.435)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_81.setTransform(320,533.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(255,255,255,0.412)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_82.setTransform(320,533.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(255,255,255,0.384)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_83.setTransform(320,533.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(255,255,255,0.361)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_84.setTransform(320,533.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_85.setTransform(320,533.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(255,255,255,0.306)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_86.setTransform(320,533.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(255,255,255,0.282)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_87.setTransform(320,533.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(255,255,255,0.255)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_88.setTransform(320,533.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(255,255,255,0.231)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_89.setTransform(320,533.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(255,255,255,0.204)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_90.setTransform(320,533.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(255,255,255,0.18)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_91.setTransform(320,533.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(255,255,255,0.153)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_92.setTransform(320,533.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(255,255,255,0.129)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_93.setTransform(320,533.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(255,255,255,0.102)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_94.setTransform(320,533.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(255,255,255,0.078)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_95.setTransform(320,533.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(255,255,255,0.051)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_96.setTransform(320,533.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(255,255,255,0.027)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_97.setTransform(320,533.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("EguZAAAMBczAAA");
	this.shape_98.setTransform(320,533.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(59).to({_off:false},0).wait(51).to({_off:true},1).wait(39));

	// cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/AMoIAA5OMBj+AAAIAAZOg");
	mask.setTransform(320,448.9);

	// logo
	this.instance = new lib.Symbol2_1();
	this.instance.setTransform(320,554.7,1,1,0,0,0,137,35.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:136,regY:28.5,x:319,y:546.3},0).wait(1).to({y:545},0).wait(1).to({y:543.6},0).wait(1).to({y:542.3},0).wait(1).to({y:540.9},0).wait(1).to({y:539.6},0).wait(1).to({y:538.2},0).wait(1).to({y:536.9},0).wait(1).to({y:535.5},0).wait(1).to({y:534.1},0).wait(1).to({y:532.8},0).wait(1).to({y:531.4},0).wait(1).to({y:530.1},0).wait(1).to({y:528.7},0).wait(1).to({y:527.4},0).wait(1).to({y:526},0).wait(1).to({y:524.6},0).wait(1).to({y:523.3},0).wait(1).to({y:521.9},0).wait(1).to({y:520.6},0).wait(1).to({y:519.2},0).wait(1).to({y:517.9},0).wait(1).to({y:516.5},0).wait(1).to({y:515.2},0).wait(1).to({y:513.8},0).wait(1).to({y:512.4},0).wait(1).to({y:511.1},0).wait(1).to({y:509.7},0).wait(1).to({y:508.4},0).wait(1).to({y:507},0).wait(1).to({y:505.7},0).wait(1).to({y:504.3},0).wait(1).to({y:503},0).wait(1).to({y:501.6},0).wait(1).to({y:500.2},0).wait(1).to({y:498.9},0).wait(1).to({y:497.5},0).wait(1).to({y:496.2},0).wait(1).to({y:494.8},0).wait(1).to({y:493.5},0).wait(1).to({y:492.1},0).wait(1).to({y:490.8},0).wait(1).to({y:489.4},0).wait(1).to({y:488},0).wait(1).to({y:486.7},0).wait(1).to({y:485.3},0).wait(1).to({y:484},0).wait(1).to({y:482.6},0).wait(1).to({y:481.3},0).wait(1).to({y:479.9},0).wait(1).to({y:478.5},0).wait(1).to({y:477.2},0).wait(1).to({y:475.8},0).wait(1).to({y:474.5},0).wait(1).to({y:473.1},0).wait(1).to({y:471.8},0).wait(1).to({y:470.4},0).wait(1).to({y:469.1},0).wait(1).to({y:467.7},0).wait(51).to({alpha:0.975},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0},0).wait(1));

	// cover2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egx/AMNIAA4ZMBj+AAAIAAYZg");
	mask_1.setTransform(320,610);

	// text
	this.instance_1 = new lib.Symbol1_1();
	this.instance_1.setTransform(320,513.7,1,1,0,0,0,157,23.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:161.5,regY:43.5,x:324.5,y:535.3},0).wait(1).to({y:536.8},0).wait(1).to({y:538.4},0).wait(1).to({y:540},0).wait(1).to({y:541.6},0).wait(1).to({y:543.1},0).wait(1).to({y:544.7},0).wait(1).to({y:546.3},0).wait(1).to({y:547.9},0).wait(1).to({y:549.4},0).wait(1).to({y:551},0).wait(1).to({y:552.6},0).wait(1).to({y:554.1},0).wait(1).to({y:555.7},0).wait(1).to({y:557.3},0).wait(1).to({y:558.9},0).wait(1).to({y:560.4},0).wait(1).to({y:562},0).wait(1).to({y:563.6},0).wait(1).to({y:565.2},0).wait(1).to({y:566.7},0).wait(1).to({y:568.3},0).wait(1).to({y:569.9},0).wait(1).to({y:571.4},0).wait(1).to({y:573},0).wait(1).to({y:574.6},0).wait(1).to({y:576.2},0).wait(1).to({y:577.7},0).wait(1).to({y:579.3},0).wait(1).to({y:580.9},0).wait(1).to({y:582.5},0).wait(1).to({y:584},0).wait(1).to({y:585.6},0).wait(1).to({y:587.2},0).wait(1).to({y:588.8},0).wait(1).to({y:590.3},0).wait(1).to({y:591.9},0).wait(1).to({y:593.5},0).wait(1).to({y:595},0).wait(1).to({y:596.6},0).wait(1).to({y:598.2},0).wait(1).to({y:599.8},0).wait(1).to({y:601.3},0).wait(1).to({y:602.9},0).wait(1).to({y:604.5},0).wait(1).to({y:606.1},0).wait(1).to({y:607.6},0).wait(1).to({y:609.2},0).wait(1).to({y:610.8},0).wait(1).to({y:612.3},0).wait(1).to({y:613.9},0).wait(1).to({y:615.5},0).wait(1).to({y:617.1},0).wait(1).to({y:618.6},0).wait(1).to({y:620.2},0).wait(1).to({y:621.8},0).wait(1).to({y:623.4},0).wait(1).to({y:624.9},0).wait(1).to({y:626.5},0).wait(51).to({alpha:0.975},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163,519.2,323,58);


(lib.MC_enchanted = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opened:1,closed:199});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_199 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(1));

	// Layer 4
	this.instance = new lib.Symbol6();
	this.instance.setTransform(192.5,152.1,1,1,0,0,0,142.5,22);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({x:192.2,y:152,alpha:0.013},0).wait(1).to({x:192,alpha:0.026},0).wait(1).to({x:191.7,alpha:0.04},0).wait(1).to({x:191.5,alpha:0.053},0).wait(1).to({x:191.2,alpha:0.066},0).wait(1).to({x:191,alpha:0.079},0).wait(1).to({x:190.7,alpha:0.092},0).wait(1).to({x:190.4,alpha:0.106},0).wait(1).to({x:190.2,alpha:0.119},0).wait(1).to({x:189.9,alpha:0.132},0).wait(1).to({x:189.7,alpha:0.145},0).wait(1).to({x:189.4,alpha:0.158},0).wait(1).to({x:189.2,alpha:0.172},0).wait(1).to({x:188.9,alpha:0.185},0).wait(1).to({x:188.6,alpha:0.198},0).wait(1).to({x:188.4,alpha:0.211},0).wait(1).to({x:188.1,alpha:0.224},0).wait(1).to({x:187.9,alpha:0.238},0).wait(1).to({x:187.6,alpha:0.251},0).wait(1).to({x:187.4,alpha:0.264},0).wait(1).to({x:187.1,alpha:0.277},0).wait(1).to({x:186.8,alpha:0.29},0).wait(1).to({x:186.6,alpha:0.304},0).wait(1).to({x:186.3,alpha:0.317},0).wait(1).to({x:186.1,alpha:0.33},0).wait(1).to({x:185.8,alpha:0.343},0).wait(1).to({x:185.6,alpha:0.356},0).wait(1).to({x:185.3,alpha:0.37},0).wait(1).to({x:185,alpha:0.383},0).wait(1).to({x:184.8,alpha:0.396},0).wait(1).to({x:184.5,alpha:0.409},0).wait(1).to({x:184.3,alpha:0.422},0).wait(1).to({x:184,alpha:0.436},0).wait(1).to({x:183.7,alpha:0.449},0).wait(1).to({x:183.5,alpha:0.462},0).wait(1).to({x:183.2,alpha:0.475},0).wait(1).to({x:183,alpha:0.488},0).wait(1).to({x:182.7,alpha:0.502},0).wait(1).to({x:182.5,alpha:0.515},0).wait(1).to({x:182.2,alpha:0.528},0).wait(1).to({x:181.9,alpha:0.541},0).wait(1).to({x:181.7,alpha:0.554},0).wait(1).to({x:181.4,alpha:0.568},0).wait(1).to({x:181.2,alpha:0.581},0).wait(1).to({x:180.9,alpha:0.594},0).wait(1).to({x:180.7,alpha:0.607},0).wait(1).to({x:180.4,alpha:0.62},0).wait(1).to({x:180.1,alpha:0.634},0).wait(1).to({x:179.9,alpha:0.647},0).wait(1).to({x:179.6,alpha:0.66},0).wait(1).to({x:179.4,alpha:0.673},0).wait(1).to({x:179.1,alpha:0.686},0).wait(1).to({x:178.9,alpha:0.7},0).wait(1).to({x:178.6,alpha:0.713},0).wait(1).to({x:178.3,alpha:0.726},0).wait(1).to({x:178.1,alpha:0.739},0).wait(1).to({x:177.8,alpha:0.752},0).wait(1).to({x:177.6,alpha:0.766},0).wait(1).to({x:177.3,alpha:0.779},0).wait(1).to({x:177.1,alpha:0.792},0).wait(1).to({x:176.8,alpha:0.805},0).wait(1).to({x:176.5,alpha:0.818},0).wait(1).to({x:176.3,alpha:0.832},0).wait(1).to({x:176,alpha:0.845},0).wait(1).to({x:175.8,alpha:0.858},0).wait(1).to({x:175.5,alpha:0.871},0).wait(1).to({x:175.3,alpha:0.884},0).wait(1).to({x:175,alpha:0.898},0).wait(1).to({x:174.7,alpha:0.911},0).wait(1).to({x:174.5,alpha:0.924},0).wait(1).to({x:174.2,alpha:0.937},0).wait(1).to({x:174,alpha:0.95},0).wait(1).to({x:173.7,alpha:0.964},0).wait(1).to({x:173.5,alpha:0.977},0).wait(1).to({x:173.2,alpha:0.99},0).wait(1).to({x:173,y:152.1,alpha:0.977},0).wait(1).to({x:172.9,alpha:0.964},0).wait(1).to({x:172.7,alpha:0.95},0).wait(1).to({x:172.5,alpha:0.937},0).wait(1).to({x:172.4,y:152.2,alpha:0.924},0).wait(1).to({x:172.2,alpha:0.911},0).wait(1).to({x:172,alpha:0.898},0).wait(1).to({x:171.8,alpha:0.884},0).wait(1).to({x:171.7,y:152.3,alpha:0.871},0).wait(1).to({x:171.5,alpha:0.858},0).wait(1).to({x:171.3,alpha:0.845},0).wait(1).to({x:171.2,alpha:0.832},0).wait(1).to({x:171,alpha:0.818},0).wait(1).to({x:170.8,y:152.4,alpha:0.805},0).wait(1).to({x:170.7,alpha:0.792},0).wait(1).to({x:170.5,alpha:0.779},0).wait(1).to({x:170.3,alpha:0.766},0).wait(1).to({x:170.2,y:152.5,alpha:0.752},0).wait(1).to({x:170,alpha:0.739},0).wait(1).to({x:169.8,alpha:0.726},0).wait(1).to({x:169.6,alpha:0.713},0).wait(1).to({x:169.5,alpha:0.7},0).wait(1).to({x:169.3,y:152.6,alpha:0.686},0).wait(1).to({x:169.1,alpha:0.673},0).wait(1).to({x:169,alpha:0.66},0).wait(1).to({x:168.8,alpha:0.647},0).wait(1).to({x:168.6,y:152.7,alpha:0.634},0).wait(1).to({x:168.5,alpha:0.62},0).wait(1).to({x:168.3,alpha:0.607},0).wait(1).to({x:168.1,alpha:0.594},0).wait(1).to({x:168,y:152.8,alpha:0.581},0).wait(1).to({x:167.8,alpha:0.568},0).wait(1).to({x:167.6,alpha:0.554},0).wait(1).to({x:167.4,alpha:0.541},0).wait(1).to({x:167.3,alpha:0.528},0).wait(1).to({x:167.1,y:152.9,alpha:0.515},0).wait(1).to({x:166.9,alpha:0.502},0).wait(1).to({x:166.8,alpha:0.488},0).wait(1).to({x:166.6,alpha:0.475},0).wait(1).to({x:166.4,y:153,alpha:0.462},0).wait(1).to({x:166.3,alpha:0.449},0).wait(1).to({x:166.1,alpha:0.436},0).wait(1).to({x:165.9,alpha:0.422},0).wait(1).to({x:165.8,alpha:0.409},0).wait(1).to({x:165.6,y:153.1,alpha:0.396},0).wait(1).to({x:165.4,alpha:0.383},0).wait(1).to({x:165.2,alpha:0.37},0).wait(1).to({x:165.1,alpha:0.356},0).wait(1).to({x:164.9,y:153.2,alpha:0.343},0).wait(1).to({x:164.7,alpha:0.33},0).wait(1).to({x:164.6,alpha:0.317},0).wait(1).to({x:164.4,alpha:0.304},0).wait(1).to({x:164.2,y:153.3,alpha:0.29},0).wait(1).to({x:164.1,alpha:0.277},0).wait(1).to({x:163.9,alpha:0.264},0).wait(1).to({x:163.7,alpha:0.251},0).wait(1).to({x:163.6,alpha:0.238},0).wait(1).to({x:163.4,y:153.4,alpha:0.224},0).wait(1).to({x:163.2,alpha:0.211},0).wait(1).to({x:163,alpha:0.198},0).wait(1).to({x:162.9,alpha:0.185},0).wait(1).to({x:162.7,y:153.5,alpha:0.172},0).wait(1).to({x:162.5,alpha:0.158},0).wait(1).to({x:162.4,alpha:0.145},0).wait(1).to({x:162.2,alpha:0.132},0).wait(1).to({x:162,alpha:0.119},0).wait(1).to({x:161.9,y:153.6,alpha:0.106},0).wait(1).to({x:161.7,alpha:0.092},0).wait(1).to({x:161.5,alpha:0.079},0).wait(1).to({x:161.4,alpha:0.066},0).wait(1).to({x:161.2,y:153.7,alpha:0.053},0).wait(1).to({x:161,alpha:0.04},0).wait(1).to({x:160.8,alpha:0.026},0).wait(1).to({x:160.7,alpha:0.013},0).wait(1).to({x:160.5,y:153.8,alpha:0},0).to({_off:true},1).wait(36));

	// Layer 5
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(168.9,204.1,1,1,0,0,0,118,22);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(1).to({x:168.6,y:204,alpha:0.014},0).wait(1).to({x:168.4,alpha:0.027},0).wait(1).to({x:168.1,alpha:0.041},0).wait(1).to({x:167.8,alpha:0.054},0).wait(1).to({x:167.6,alpha:0.068},0).wait(1).to({x:167.3,alpha:0.081},0).wait(1).to({x:167,alpha:0.095},0).wait(1).to({x:166.8,alpha:0.108},0).wait(1).to({x:166.5,alpha:0.122},0).wait(1).to({x:166.3,alpha:0.136},0).wait(1).to({x:166,alpha:0.149},0).wait(1).to({x:165.7,alpha:0.163},0).wait(1).to({x:165.5,alpha:0.176},0).wait(1).to({x:165.2,alpha:0.19},0).wait(1).to({x:164.9,alpha:0.203},0).wait(1).to({x:164.7,alpha:0.217},0).wait(1).to({x:164.4,alpha:0.231},0).wait(1).to({x:164.1,alpha:0.244},0).wait(1).to({x:163.9,alpha:0.258},0).wait(1).to({x:163.6,alpha:0.271},0).wait(1).to({x:163.3,alpha:0.285},0).wait(1).to({x:163.1,alpha:0.298},0).wait(1).to({x:162.8,alpha:0.312},0).wait(1).to({x:162.6,alpha:0.325},0).wait(1).to({x:162.3,alpha:0.339},0).wait(1).to({x:162,alpha:0.353},0).wait(1).to({x:161.8,alpha:0.366},0).wait(1).to({x:161.5,alpha:0.38},0).wait(1).to({x:161.2,alpha:0.393},0).wait(1).to({x:161,alpha:0.407},0).wait(1).to({x:160.7,alpha:0.42},0).wait(1).to({x:160.4,alpha:0.434},0).wait(1).to({x:160.2,alpha:0.448},0).wait(1).to({x:159.9,alpha:0.461},0).wait(1).to({x:159.6,alpha:0.475},0).wait(1).to({x:159.4,alpha:0.488},0).wait(1).to({x:159.1,alpha:0.502},0).wait(1).to({x:158.9,alpha:0.515},0).wait(1).to({x:158.6,alpha:0.529},0).wait(1).to({x:158.3,alpha:0.542},0).wait(1).to({x:158.1,alpha:0.556},0).wait(1).to({x:157.8,alpha:0.57},0).wait(1).to({x:157.5,alpha:0.583},0).wait(1).to({x:157.3,alpha:0.597},0).wait(1).to({x:157,alpha:0.61},0).wait(1).to({x:156.7,alpha:0.624},0).wait(1).to({x:156.5,alpha:0.637},0).wait(1).to({x:156.2,alpha:0.651},0).wait(1).to({x:155.9,alpha:0.665},0).wait(1).to({x:155.7,alpha:0.678},0).wait(1).to({x:155.4,alpha:0.692},0).wait(1).to({x:155.1,alpha:0.705},0).wait(1).to({x:154.9,alpha:0.719},0).wait(1).to({x:154.6,alpha:0.732},0).wait(1).to({x:154.4,alpha:0.746},0).wait(1).to({x:154.1,alpha:0.759},0).wait(1).to({x:153.8,alpha:0.773},0).wait(1).to({x:153.6,alpha:0.787},0).wait(1).to({x:153.3,alpha:0.8},0).wait(1).to({x:153,alpha:0.814},0).wait(1).to({x:152.8,alpha:0.827},0).wait(1).to({x:152.5,alpha:0.841},0).wait(1).to({x:152.2,alpha:0.854},0).wait(1).to({x:152,alpha:0.868},0).wait(1).to({x:151.7,alpha:0.882},0).wait(1).to({x:151.4,alpha:0.895},0).wait(1).to({x:151.2,alpha:0.909},0).wait(1).to({x:150.9,alpha:0.922},0).wait(1).to({x:150.7,alpha:0.936},0).wait(1).to({x:150.4,alpha:0.949},0).wait(1).to({x:150.1,alpha:0.963},0).wait(1).to({x:149.9,alpha:0.976},0).wait(1).to({x:149.6,alpha:0.99},0).wait(1).to({x:149.4,y:204.1,alpha:0.977},0).wait(1).to({x:149.3,alpha:0.963},0).wait(1).to({x:149.1,alpha:0.95},0).wait(1).to({x:148.9,alpha:0.936},0).wait(1).to({x:148.7,y:204.2,alpha:0.923},0).wait(1).to({x:148.6,alpha:0.91},0).wait(1).to({x:148.4,alpha:0.896},0).wait(1).to({x:148.2,alpha:0.883},0).wait(1).to({x:148.1,y:204.3,alpha:0.87},0).wait(1).to({x:147.9,alpha:0.856},0).wait(1).to({x:147.7,alpha:0.843},0).wait(1).to({x:147.5,alpha:0.829},0).wait(1).to({x:147.4,alpha:0.816},0).wait(1).to({x:147.2,y:204.4,alpha:0.803},0).wait(1).to({x:147,alpha:0.789},0).wait(1).to({x:146.9,alpha:0.776},0).wait(1).to({x:146.7,alpha:0.763},0).wait(1).to({x:146.5,y:204.5,alpha:0.749},0).wait(1).to({x:146.3,alpha:0.736},0).wait(1).to({x:146.2,alpha:0.722},0).wait(1).to({x:146,alpha:0.709},0).wait(1).to({x:145.8,y:204.6,alpha:0.696},0).wait(1).to({x:145.7,alpha:0.682},0).wait(1).to({x:145.5,alpha:0.669},0).wait(1).to({x:145.3,alpha:0.656},0).wait(1).to({x:145.1,alpha:0.642},0).wait(1).to({x:145,y:204.7,alpha:0.629},0).wait(1).to({x:144.8,alpha:0.615},0).wait(1).to({x:144.6,alpha:0.602},0).wait(1).to({x:144.5,alpha:0.589},0).wait(1).to({x:144.3,y:204.8,alpha:0.575},0).wait(1).to({x:144.1,alpha:0.562},0).wait(1).to({x:143.9,alpha:0.549},0).wait(1).to({x:143.8,alpha:0.535},0).wait(1).to({x:143.6,y:204.9,alpha:0.522},0).wait(1).to({x:143.4,alpha:0.508},0).wait(1).to({x:143.3,alpha:0.495},0).wait(1).to({x:143.1,alpha:0.482},0).wait(1).to({x:142.9,alpha:0.468},0).wait(1).to({x:142.7,y:205,alpha:0.455},0).wait(1).to({x:142.6,alpha:0.441},0).wait(1).to({x:142.4,alpha:0.428},0).wait(1).to({x:142.2,alpha:0.415},0).wait(1).to({x:142.1,y:205.1,alpha:0.401},0).wait(1).to({x:141.9,alpha:0.388},0).wait(1).to({x:141.7,alpha:0.375},0).wait(1).to({x:141.5,alpha:0.361},0).wait(1).to({x:141.4,y:205.2,alpha:0.348},0).wait(1).to({x:141.2,alpha:0.334},0).wait(1).to({x:141,alpha:0.321},0).wait(1).to({x:140.9,alpha:0.308},0).wait(1).to({x:140.7,alpha:0.294},0).wait(1).to({x:140.5,y:205.3,alpha:0.281},0).wait(1).to({x:140.3,alpha:0.268},0).wait(1).to({x:140.2,alpha:0.254},0).wait(1).to({x:140,alpha:0.241},0).wait(1).to({x:139.8,y:205.4,alpha:0.227},0).wait(1).to({x:139.7,alpha:0.214},0).wait(1).to({x:139.5,alpha:0.201},0).wait(1).to({x:139.3,alpha:0.187},0).wait(1).to({x:139.1,y:205.5,alpha:0.174},0).wait(1).to({x:139,alpha:0.161},0).wait(1).to({x:138.8,alpha:0.147},0).wait(1).to({x:138.6,alpha:0.134},0).wait(1).to({x:138.4,alpha:0.12},0).wait(1).to({x:138.3,y:205.6,alpha:0.107},0).wait(1).to({x:138.1,alpha:0.094},0).wait(1).to({x:137.9,alpha:0.08},0).wait(1).to({x:137.8,alpha:0.067},0).wait(1).to({x:137.6,y:205.7,alpha:0.054},0).wait(1).to({x:137.4,alpha:0.04},0).wait(1).to({x:137.2,alpha:0.027},0).wait(1).to({x:137.1,alpha:0.013},0).wait(1).to({x:136.9,y:205.8,alpha:0},0).to({_off:true},1).wait(36));

	// Layer 8
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(182.5,254.4,1,1,0,0,0,132.5,18);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(1).to({x:182.2,alpha:0.014},0).wait(1).to({x:182,alpha:0.028},0).wait(1).to({x:181.7,alpha:0.042},0).wait(1).to({x:181.4,alpha:0.056},0).wait(1).to({x:181.1,alpha:0.07},0).wait(1).to({x:180.9,alpha:0.084},0).wait(1).to({x:180.6,alpha:0.098},0).wait(1).to({x:180.3,alpha:0.112},0).wait(1).to({x:180.1,alpha:0.125},0).wait(1).to({x:179.8,alpha:0.139},0).wait(1).to({x:179.5,alpha:0.153},0).wait(1).to({x:179.2,alpha:0.167},0).wait(1).to({x:179,alpha:0.181},0).wait(1).to({x:178.7,alpha:0.195},0).wait(1).to({x:178.4,alpha:0.209},0).wait(1).to({x:178.2,alpha:0.223},0).wait(1).to({x:177.9,alpha:0.237},0).wait(1).to({x:177.6,alpha:0.251},0).wait(1).to({x:177.3,alpha:0.265},0).wait(1).to({x:177.1,alpha:0.279},0).wait(1).to({x:176.8,alpha:0.293},0).wait(1).to({x:176.5,alpha:0.307},0).wait(1).to({x:176.2,alpha:0.321},0).wait(1).to({x:176,alpha:0.335},0).wait(1).to({x:175.7,alpha:0.349},0).wait(1).to({x:175.4,alpha:0.363},0).wait(1).to({x:175.2,alpha:0.376},0).wait(1).to({x:174.9,alpha:0.39},0).wait(1).to({x:174.6,alpha:0.404},0).wait(1).to({x:174.3,alpha:0.418},0).wait(1).to({x:174.1,alpha:0.432},0).wait(1).to({x:173.8,alpha:0.446},0).wait(1).to({x:173.5,alpha:0.46},0).wait(1).to({x:173.3,alpha:0.474},0).wait(1).to({x:173,alpha:0.488},0).wait(1).to({x:172.7,alpha:0.502},0).wait(1).to({x:172.4,alpha:0.516},0).wait(1).to({x:172.2,alpha:0.53},0).wait(1).to({x:171.9,alpha:0.544},0).wait(1).to({x:171.6,alpha:0.558},0).wait(1).to({x:171.4,alpha:0.572},0).wait(1).to({x:171.1,alpha:0.586},0).wait(1).to({x:170.8,alpha:0.6},0).wait(1).to({x:170.5,alpha:0.614},0).wait(1).to({x:170.3,alpha:0.627},0).wait(1).to({x:170,alpha:0.641},0).wait(1).to({x:169.7,alpha:0.655},0).wait(1).to({x:169.4,alpha:0.669},0).wait(1).to({x:169.2,alpha:0.683},0).wait(1).to({x:168.9,alpha:0.697},0).wait(1).to({x:168.6,alpha:0.711},0).wait(1).to({x:168.4,alpha:0.725},0).wait(1).to({x:168.1,alpha:0.739},0).wait(1).to({x:167.8,alpha:0.753},0).wait(1).to({x:167.5,alpha:0.767},0).wait(1).to({x:167.3,alpha:0.781},0).wait(1).to({x:167,alpha:0.795},0).wait(1).to({x:166.7,alpha:0.809},0).wait(1).to({x:166.5,alpha:0.823},0).wait(1).to({x:166.2,alpha:0.837},0).wait(1).to({x:165.9,alpha:0.851},0).wait(1).to({x:165.6,alpha:0.865},0).wait(1).to({x:165.4,alpha:0.878},0).wait(1).to({x:165.1,alpha:0.892},0).wait(1).to({x:164.8,alpha:0.906},0).wait(1).to({x:164.6,alpha:0.92},0).wait(1).to({x:164.3,alpha:0.934},0).wait(1).to({x:164,alpha:0.948},0).wait(1).to({x:163.7,alpha:0.962},0).wait(1).to({x:163.5,alpha:0.976},0).wait(1).to({x:163.2,alpha:0.99},0).wait(1).to({x:163,alpha:0.976},0).wait(1).to({x:162.8,alpha:0.962},0).wait(1).to({x:162.7,y:254.5,alpha:0.948},0).wait(1).to({x:162.5,alpha:0.934},0).wait(1).to({x:162.3,alpha:0.92},0).wait(1).to({x:162.1,alpha:0.906},0).wait(1).to({x:161.9,y:254.6,alpha:0.892},0).wait(1).to({x:161.8,alpha:0.878},0).wait(1).to({x:161.6,alpha:0.865},0).wait(1).to({x:161.4,alpha:0.851},0).wait(1).to({x:161.2,y:254.7,alpha:0.837},0).wait(1).to({x:161.1,alpha:0.823},0).wait(1).to({x:160.9,alpha:0.809},0).wait(1).to({x:160.7,alpha:0.795},0).wait(1).to({x:160.5,y:254.8,alpha:0.781},0).wait(1).to({x:160.3,alpha:0.767},0).wait(1).to({x:160.2,alpha:0.753},0).wait(1).to({x:160,alpha:0.739},0).wait(1).to({x:159.8,y:254.9,alpha:0.725},0).wait(1).to({x:159.6,alpha:0.711},0).wait(1).to({x:159.4,alpha:0.697},0).wait(1).to({x:159.3,alpha:0.683},0).wait(1).to({x:159.1,y:255,alpha:0.669},0).wait(1).to({x:158.9,alpha:0.655},0).wait(1).to({x:158.7,alpha:0.641},0).wait(1).to({x:158.5,alpha:0.627},0).wait(1).to({x:158.4,alpha:0.614},0).wait(1).to({x:158.2,y:255.1,alpha:0.6},0).wait(1).to({x:158,alpha:0.586},0).wait(1).to({x:157.8,alpha:0.572},0).wait(1).to({x:157.7,alpha:0.558},0).wait(1).to({x:157.5,y:255.2,alpha:0.544},0).wait(1).to({x:157.3,alpha:0.53},0).wait(1).to({x:157.1,alpha:0.516},0).wait(1).to({x:156.9,alpha:0.502},0).wait(1).to({x:156.8,y:255.3,alpha:0.488},0).wait(1).to({x:156.6,alpha:0.474},0).wait(1).to({x:156.4,alpha:0.46},0).wait(1).to({x:156.2,alpha:0.446},0).wait(1).to({x:156,y:255.4,alpha:0.432},0).wait(1).to({x:155.9,alpha:0.418},0).wait(1).to({x:155.7,alpha:0.404},0).wait(1).to({x:155.5,alpha:0.39},0).wait(1).to({x:155.3,y:255.5,alpha:0.376},0).wait(1).to({x:155.2,alpha:0.363},0).wait(1).to({x:155,alpha:0.349},0).wait(1).to({x:154.8,alpha:0.335},0).wait(1).to({x:154.6,alpha:0.321},0).wait(1).to({x:154.4,y:255.6,alpha:0.307},0).wait(1).to({x:154.3,alpha:0.293},0).wait(1).to({x:154.1,alpha:0.279},0).wait(1).to({x:153.9,alpha:0.265},0).wait(1).to({x:153.7,y:255.7,alpha:0.251},0).wait(1).to({x:153.5,alpha:0.237},0).wait(1).to({x:153.4,alpha:0.223},0).wait(1).to({x:153.2,alpha:0.209},0).wait(1).to({x:153,y:255.8,alpha:0.195},0).wait(1).to({x:152.8,alpha:0.181},0).wait(1).to({x:152.7,alpha:0.167},0).wait(1).to({x:152.5,alpha:0.153},0).wait(1).to({x:152.3,y:255.9,alpha:0.139},0).wait(1).to({x:152.1,alpha:0.125},0).wait(1).to({x:151.9,alpha:0.112},0).wait(1).to({x:151.8,alpha:0.098},0).wait(1).to({x:151.6,y:256,alpha:0.084},0).wait(1).to({x:151.4,alpha:0.07},0).wait(1).to({x:151.2,alpha:0.056},0).wait(1).to({x:151,alpha:0.042},0).wait(1).to({x:150.9,y:256.1,alpha:0.028},0).wait(1).to({x:150.7,alpha:0.014},0).wait(1).to({x:150.5,alpha:0},0).to({_off:true},1).wait(36));

	// Layer 7
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(192.5,305.2,1,1,0,0,0,144.5,18);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(1).to({x:192.2,y:305.1,alpha:0.015},0).wait(1).to({x:191.9,alpha:0.029},0).wait(1).to({x:191.6,alpha:0.044},0).wait(1).to({x:191.4,alpha:0.058},0).wait(1).to({x:191.1,alpha:0.073},0).wait(1).to({x:190.8,alpha:0.087},0).wait(1).to({x:190.5,alpha:0.102},0).wait(1).to({x:190.2,alpha:0.116},0).wait(1).to({x:189.9,alpha:0.131},0).wait(1).to({x:189.7,alpha:0.146},0).wait(1).to({x:189.4,alpha:0.16},0).wait(1).to({x:189.1,alpha:0.175},0).wait(1).to({x:188.8,alpha:0.189},0).wait(1).to({x:188.5,alpha:0.204},0).wait(1).to({x:188.2,alpha:0.218},0).wait(1).to({x:188,alpha:0.233},0).wait(1).to({x:187.7,alpha:0.248},0).wait(1).to({x:187.4,alpha:0.262},0).wait(1).to({x:187.1,alpha:0.277},0).wait(1).to({x:186.8,alpha:0.291},0).wait(1).to({x:186.5,alpha:0.306},0).wait(1).to({x:186.3,alpha:0.32},0).wait(1).to({x:186,alpha:0.335},0).wait(1).to({x:185.7,alpha:0.349},0).wait(1).to({x:185.4,alpha:0.364},0).wait(1).to({x:185.1,alpha:0.379},0).wait(1).to({x:184.8,alpha:0.393},0).wait(1).to({x:184.6,alpha:0.408},0).wait(1).to({x:184.3,alpha:0.422},0).wait(1).to({x:184,alpha:0.437},0).wait(1).to({x:183.7,alpha:0.451},0).wait(1).to({x:183.4,alpha:0.466},0).wait(1).to({x:183.1,alpha:0.48},0).wait(1).to({x:182.8,alpha:0.495},0).wait(1).to({x:182.6,alpha:0.51},0).wait(1).to({x:182.3,alpha:0.524},0).wait(1).to({x:182,alpha:0.539},0).wait(1).to({x:181.7,alpha:0.553},0).wait(1).to({x:181.4,alpha:0.568},0).wait(1).to({x:181.1,alpha:0.582},0).wait(1).to({x:180.9,alpha:0.597},0).wait(1).to({x:180.6,alpha:0.611},0).wait(1).to({x:180.3,alpha:0.626},0).wait(1).to({x:180,alpha:0.641},0).wait(1).to({x:179.7,alpha:0.655},0).wait(1).to({x:179.4,alpha:0.67},0).wait(1).to({x:179.2,alpha:0.684},0).wait(1).to({x:178.9,alpha:0.699},0).wait(1).to({x:178.6,alpha:0.713},0).wait(1).to({x:178.3,alpha:0.728},0).wait(1).to({x:178,alpha:0.743},0).wait(1).to({x:177.7,alpha:0.757},0).wait(1).to({x:177.5,alpha:0.772},0).wait(1).to({x:177.2,alpha:0.786},0).wait(1).to({x:176.9,alpha:0.801},0).wait(1).to({x:176.6,alpha:0.815},0).wait(1).to({x:176.3,alpha:0.83},0).wait(1).to({x:176,alpha:0.844},0).wait(1).to({x:175.8,alpha:0.859},0).wait(1).to({x:175.5,alpha:0.874},0).wait(1).to({x:175.2,alpha:0.888},0).wait(1).to({x:174.9,alpha:0.903},0).wait(1).to({x:174.6,alpha:0.917},0).wait(1).to({x:174.3,alpha:0.932},0).wait(1).to({x:174,alpha:0.946},0).wait(1).to({x:173.8,alpha:0.961},0).wait(1).to({x:173.5,alpha:0.975},0).wait(1).to({x:173.2,alpha:0.99},0).wait(1).to({x:173,y:305.2,alpha:0.976},0).wait(1).to({x:172.8,alpha:0.961},0).wait(1).to({x:172.6,alpha:0.947},0).wait(1).to({x:172.5,alpha:0.933},0).wait(1).to({x:172.3,y:305.3,alpha:0.918},0).wait(1).to({x:172.1,alpha:0.904},0).wait(1).to({x:171.9,alpha:0.89},0).wait(1).to({x:171.7,alpha:0.875},0).wait(1).to({x:171.5,y:305.4,alpha:0.861},0).wait(1).to({x:171.4,alpha:0.847},0).wait(1).to({x:171.2,alpha:0.832},0).wait(1).to({x:171,alpha:0.818},0).wait(1).to({x:170.8,y:305.5,alpha:0.803},0).wait(1).to({x:170.6,alpha:0.789},0).wait(1).to({x:170.4,alpha:0.775},0).wait(1).to({x:170.3,alpha:0.76},0).wait(1).to({x:170.1,y:305.6,alpha:0.746},0).wait(1).to({x:169.9,alpha:0.732},0).wait(1).to({x:169.7,alpha:0.717},0).wait(1).to({x:169.5,alpha:0.703},0).wait(1).to({x:169.3,y:305.7,alpha:0.689},0).wait(1).to({x:169.2,alpha:0.674},0).wait(1).to({x:169,alpha:0.66},0).wait(1).to({x:168.8,alpha:0.646},0).wait(1).to({x:168.6,y:305.8,alpha:0.631},0).wait(1).to({x:168.4,alpha:0.617},0).wait(1).to({x:168.2,alpha:0.603},0).wait(1).to({x:168,alpha:0.588},0).wait(1).to({x:167.9,y:305.9,alpha:0.574},0).wait(1).to({x:167.7,alpha:0.56},0).wait(1).to({x:167.5,alpha:0.545},0).wait(1).to({x:167.3,alpha:0.531},0).wait(1).to({x:167.1,y:306,alpha:0.517},0).wait(1).to({x:166.9,alpha:0.502},0).wait(1).to({x:166.8,alpha:0.488},0).wait(1).to({x:166.6,alpha:0.473},0).wait(1).to({x:166.4,y:306.1,alpha:0.459},0).wait(1).to({x:166.2,alpha:0.445},0).wait(1).to({x:166,alpha:0.43},0).wait(1).to({x:165.8,alpha:0.416},0).wait(1).to({x:165.7,y:306.2,alpha:0.402},0).wait(1).to({x:165.5,alpha:0.387},0).wait(1).to({x:165.3,alpha:0.373},0).wait(1).to({x:165.1,alpha:0.359},0).wait(1).to({x:164.9,y:306.3,alpha:0.344},0).wait(1).to({x:164.7,alpha:0.33},0).wait(1).to({x:164.6,alpha:0.316},0).wait(1).to({x:164.4,alpha:0.301},0).wait(1).to({x:164.2,y:306.4,alpha:0.287},0).wait(1).to({x:164,alpha:0.273},0).wait(1).to({x:163.8,alpha:0.258},0).wait(1).to({x:163.6,alpha:0.244},0).wait(1).to({x:163.4,y:306.5,alpha:0.23},0).wait(1).to({x:163.3,alpha:0.215},0).wait(1).to({x:163.1,alpha:0.201},0).wait(1).to({x:162.9,alpha:0.187},0).wait(1).to({x:162.7,y:306.6,alpha:0.172},0).wait(1).to({x:162.5,alpha:0.158},0).wait(1).to({x:162.3,alpha:0.143},0).wait(1).to({x:162.2,alpha:0.129},0).wait(1).to({x:162,y:306.7,alpha:0.115},0).wait(1).to({x:161.8,alpha:0.1},0).wait(1).to({x:161.6,alpha:0.086},0).wait(1).to({x:161.4,alpha:0.072},0).wait(1).to({x:161.2,y:306.8,alpha:0.057},0).wait(1).to({x:161.1,alpha:0.043},0).wait(1).to({x:160.9,alpha:0.029},0).wait(1).to({x:160.7,alpha:0.014},0).wait(1).to({x:160.5,y:306.9,alpha:0},0).to({_off:true},1).wait(36));

	// Layer 1
	this.instance_4 = new lib.Symbol4_1();
	this.instance_4.setTransform(156.8,652.2,1,1,0,0,0,156.8,212.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:163,regY:275,x:163.5,y:715,alpha:0.014},0).wait(1).to({x:164,alpha:0.027},0).wait(1).to({x:164.5,alpha:0.041},0).wait(1).to({x:165,alpha:0.054},0).wait(1).to({x:165.5,alpha:0.068},0).wait(1).to({x:166,alpha:0.081},0).wait(1).to({x:166.5,alpha:0.095},0).wait(1).to({x:167,alpha:0.108},0).wait(1).to({x:167.5,alpha:0.122},0).wait(1).to({x:168,alpha:0.135},0).wait(1).to({x:168.5,alpha:0.149},0).wait(1).to({x:169,alpha:0.162},0).wait(1).to({x:169.5,alpha:0.176},0).wait(1).to({x:170,alpha:0.189},0).wait(1).to({x:170.5,alpha:0.203},0).wait(1).to({x:171,alpha:0.216},0).wait(1).to({x:171.5,alpha:0.23},0).wait(1).to({x:172,alpha:0.243},0).wait(1).to({x:172.5,alpha:0.257},0).wait(1).to({x:173.1,alpha:0.27},0).wait(1).to({x:173.6,alpha:0.284},0).wait(1).to({x:174.1,alpha:0.297},0).wait(1).to({x:174.6,alpha:0.311},0).wait(1).to({x:175.1,alpha:0.324},0).wait(1).to({x:175.6,alpha:0.338},0).wait(1).to({x:176.1,alpha:0.351},0).wait(1).to({x:176.6,alpha:0.365},0).wait(1).to({x:177.1,alpha:0.378},0).wait(1).to({x:177.6,alpha:0.392},0).wait(1).to({x:178.1,alpha:0.405},0).wait(1).to({x:178.6,alpha:0.419},0).wait(1).to({x:179.1,alpha:0.432},0).wait(1).to({x:179.6,alpha:0.446},0).wait(1).to({x:180.1,alpha:0.459},0).wait(1).to({x:180.6,alpha:0.473},0).wait(1).to({x:181.1,alpha:0.486},0).wait(1).to({x:181.6,alpha:0.5},0).wait(1).to({x:182.1,alpha:0.514},0).wait(1).to({x:182.6,alpha:0.527},0).wait(1).to({x:183.1,alpha:0.541},0).wait(1).to({x:183.6,alpha:0.554},0).wait(1).to({x:184.1,alpha:0.568},0).wait(1).to({x:184.6,alpha:0.581},0).wait(1).to({x:185.1,alpha:0.595},0).wait(1).to({x:185.6,alpha:0.608},0).wait(1).to({x:186.1,alpha:0.622},0).wait(1).to({x:186.6,alpha:0.635},0).wait(1).to({x:187.1,alpha:0.649},0).wait(1).to({x:187.6,alpha:0.662},0).wait(1).to({x:188.1,alpha:0.676},0).wait(1).to({x:188.6,alpha:0.689},0).wait(1).to({x:189.1,alpha:0.703},0).wait(1).to({x:189.6,alpha:0.716},0).wait(1).to({x:190.1,alpha:0.73},0).wait(1).to({x:190.6,alpha:0.743},0).wait(1).to({x:191.1,alpha:0.757},0).wait(1).to({x:191.6,alpha:0.77},0).wait(1).to({x:192.1,alpha:0.784},0).wait(1).to({x:192.6,alpha:0.797},0).wait(1).to({x:193.2,alpha:0.811},0).wait(1).to({x:193.7,alpha:0.824},0).wait(1).to({x:194.2,alpha:0.838},0).wait(1).to({x:194.7,alpha:0.851},0).wait(1).to({x:195.2,alpha:0.865},0).wait(1).to({x:195.7,alpha:0.878},0).wait(1).to({x:196.2,alpha:0.892},0).wait(1).to({x:196.7,alpha:0.905},0).wait(1).to({x:197.2,alpha:0.919},0).wait(1).to({x:197.7,alpha:0.932},0).wait(1).to({x:198.2,alpha:0.946},0).wait(1).to({x:198.7,alpha:0.959},0).wait(1).to({x:199.2,alpha:0.973},0).wait(1).to({x:199.7,alpha:0.986},0).wait(1).to({x:200.2,alpha:1},0).wait(1).to({x:200.7},0).wait(1).to({x:201.2},0).wait(1).to({x:201.7},0).wait(1).to({x:202.2},0).wait(1).to({x:202.7},0).wait(1).to({x:203.2},0).wait(1).to({x:203.7},0).wait(1).to({x:204.2},0).wait(1).to({x:204.7},0).wait(1).to({x:205.2},0).wait(1).to({x:205.7},0).wait(1).to({x:206.2},0).wait(1).to({x:206.7},0).wait(1).to({x:207.2},0).wait(1).to({x:207.7},0).wait(1).to({x:208.2},0).wait(1).to({x:208.7},0).wait(1).to({x:209.2},0).wait(1).to({x:209.7},0).wait(1).to({x:210.2},0).wait(1).to({x:210.7},0).wait(1).to({x:211.2},0).wait(1).to({x:211.7},0).wait(1).to({x:212.2},0).wait(1).to({x:212.7},0).wait(1).to({x:213.3},0).wait(1).to({x:213.8},0).wait(1).to({x:214.3},0).wait(1).to({x:214.8},0).wait(1).to({x:215.3},0).wait(1).to({x:215.8},0).wait(1).to({x:216.3},0).wait(1).to({x:216.8},0).wait(1).to({x:217.3},0).wait(1).to({x:217.8},0).wait(1).to({x:218.3},0).wait(1).to({x:218.8},0).wait(1).to({x:219.3},0).wait(1).to({x:219.8},0).wait(1).to({x:220.3},0).wait(1).to({x:220.8},0).wait(1).to({x:221.3},0).wait(1).to({x:221.8},0).wait(1).to({x:222.3},0).wait(1).to({x:222.8},0).wait(1).to({x:223.3},0).wait(1).to({x:223.8},0).wait(1).to({x:224.3},0).wait(1).to({x:224.8},0).wait(1).to({x:225.3},0).wait(1).to({x:225.8},0).wait(1).to({x:226.3},0).wait(1).to({x:226.8},0).wait(1).to({x:227.3},0).wait(1).to({x:227.8},0).wait(1).to({x:228.3},0).wait(1).to({x:228.8},0).wait(1).to({x:229.3},0).wait(1).to({x:229.8},0).wait(1).to({x:230.3},0).wait(1).to({x:230.8},0).wait(1).to({x:231.3},0).wait(1).to({x:231.8},0).wait(1).to({x:232.3},0).wait(1).to({x:232.8},0).wait(1).to({x:233.4},0).wait(1).to({x:233.9,alpha:0.983},0).wait(1).to({x:234.4,alpha:0.966},0).wait(1).to({x:234.9,alpha:0.949},0).wait(1).to({x:235.4,alpha:0.932},0).wait(1).to({x:235.9,alpha:0.915},0).wait(1).to({x:236.4,alpha:0.898},0).wait(1).to({x:236.9,alpha:0.881},0).wait(1).to({x:237.4,alpha:0.864},0).wait(1).to({x:237.9,alpha:0.847},0).wait(1).to({x:238.4,alpha:0.831},0).wait(1).to({x:238.9,alpha:0.814},0).wait(1).to({x:239.4,alpha:0.797},0).wait(1).to({x:239.9,alpha:0.78},0).wait(1).to({x:240.4,alpha:0.763},0).wait(1).to({x:240.9,alpha:0.746},0).wait(1).to({x:241.4,alpha:0.729},0).wait(1).to({x:241.9,alpha:0.712},0).wait(1).to({x:242.4,alpha:0.695},0).wait(1).to({x:242.9,alpha:0.678},0).wait(1).to({x:243.4,alpha:0.661},0).wait(1).to({x:243.9,alpha:0.644},0).wait(1).to({x:244.4,alpha:0.627},0).wait(1).to({x:244.9,alpha:0.61},0).wait(1).to({x:245.4,alpha:0.593},0).wait(1).to({x:245.9,alpha:0.576},0).wait(1).to({x:246.4,alpha:0.559},0).wait(1).to({x:246.9,alpha:0.542},0).wait(1).to({x:247.4,alpha:0.525},0).wait(1).to({x:247.9,alpha:0.508},0).wait(1).to({x:248.4,alpha:0.492},0).wait(1).to({x:248.9,alpha:0.475},0).wait(1).to({x:249.4,alpha:0.458},0).wait(1).to({x:249.9,alpha:0.441},0).wait(1).to({x:250.4,alpha:0.424},0).wait(1).to({x:250.9,alpha:0.407},0).wait(1).to({x:251.4,alpha:0.39},0).wait(1).to({x:251.9,alpha:0.373},0).wait(1).to({x:252.4,alpha:0.356},0).wait(1).to({x:252.9,alpha:0.339},0).wait(1).to({x:253.5,alpha:0.322},0).wait(1).to({x:254,alpha:0.305},0).wait(1).to({x:254.5,alpha:0.288},0).wait(1).to({x:255,alpha:0.271},0).wait(1).to({x:255.5,alpha:0.254},0).wait(1).to({x:256,alpha:0.237},0).wait(1).to({x:256.5,alpha:0.22},0).wait(1).to({x:257,alpha:0.203},0).wait(1).to({x:257.5,alpha:0.186},0).wait(1).to({x:258,alpha:0.169},0).wait(1).to({x:258.5,alpha:0.153},0).wait(1).to({x:259,alpha:0.136},0).wait(1).to({x:259.5,alpha:0.119},0).wait(1).to({x:260,alpha:0.102},0).wait(1).to({x:260.5,alpha:0.085},0).wait(1).to({x:261,alpha:0.068},0).wait(1).to({x:261.5,alpha:0.051},0).wait(1).to({x:262,alpha:0.034},0).wait(1).to({x:262.5,alpha:0.017},0).wait(1).to({x:263,alpha:0},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(556.1,200.1,1,1,0,0,0,200.6,144);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:174.5,regY:216,x:529.5,y:272.1,alpha:0.014},0).wait(1).to({x:529.1,alpha:0.027},0).wait(1).to({x:528.6,alpha:0.041},0).wait(1).to({x:528.2,alpha:0.054},0).wait(1).to({x:527.7,alpha:0.068},0).wait(1).to({x:527.2,alpha:0.081},0).wait(1).to({x:526.8,alpha:0.095},0).wait(1).to({x:526.3,alpha:0.108},0).wait(1).to({x:525.8,alpha:0.122},0).wait(1).to({x:525.4,alpha:0.135},0).wait(1).to({x:524.9,alpha:0.149},0).wait(1).to({x:524.5,alpha:0.162},0).wait(1).to({x:524,alpha:0.176},0).wait(1).to({x:523.5,alpha:0.189},0).wait(1).to({x:523.1,alpha:0.203},0).wait(1).to({x:522.6,alpha:0.216},0).wait(1).to({x:522.1,alpha:0.23},0).wait(1).to({x:521.7,alpha:0.243},0).wait(1).to({x:521.2,alpha:0.257},0).wait(1).to({x:520.8,alpha:0.27},0).wait(1).to({x:520.3,alpha:0.284},0).wait(1).to({x:519.8,alpha:0.297},0).wait(1).to({x:519.4,alpha:0.311},0).wait(1).to({x:518.9,alpha:0.324},0).wait(1).to({x:518.4,alpha:0.338},0).wait(1).to({x:518,alpha:0.351},0).wait(1).to({x:517.5,alpha:0.365},0).wait(1).to({x:517.1,alpha:0.378},0).wait(1).to({x:516.6,alpha:0.392},0).wait(1).to({x:516.1,alpha:0.405},0).wait(1).to({x:515.7,alpha:0.419},0).wait(1).to({x:515.2,alpha:0.432},0).wait(1).to({x:514.7,alpha:0.446},0).wait(1).to({x:514.3,alpha:0.459},0).wait(1).to({x:513.8,alpha:0.473},0).wait(1).to({x:513.4,alpha:0.486},0).wait(1).to({x:512.9,alpha:0.5},0).wait(1).to({x:512.4,alpha:0.514},0).wait(1).to({x:512,alpha:0.527},0).wait(1).to({x:511.5,alpha:0.541},0).wait(1).to({x:511,alpha:0.554},0).wait(1).to({x:510.6,alpha:0.568},0).wait(1).to({x:510.1,alpha:0.581},0).wait(1).to({x:509.7,alpha:0.595},0).wait(1).to({x:509.2,alpha:0.608},0).wait(1).to({x:508.7,alpha:0.622},0).wait(1).to({x:508.3,alpha:0.635},0).wait(1).to({x:507.8,alpha:0.649},0).wait(1).to({x:507.3,alpha:0.662},0).wait(1).to({x:506.9,alpha:0.676},0).wait(1).to({x:506.4,alpha:0.689},0).wait(1).to({x:506,alpha:0.703},0).wait(1).to({x:505.5,alpha:0.716},0).wait(1).to({x:505,alpha:0.73},0).wait(1).to({x:504.6,alpha:0.743},0).wait(1).to({x:504.1,alpha:0.757},0).wait(1).to({x:503.6,alpha:0.77},0).wait(1).to({x:503.2,alpha:0.784},0).wait(1).to({x:502.7,alpha:0.797},0).wait(1).to({x:502.3,alpha:0.811},0).wait(1).to({x:501.8,alpha:0.824},0).wait(1).to({x:501.3,alpha:0.838},0).wait(1).to({x:500.9,alpha:0.851},0).wait(1).to({x:500.4,alpha:0.865},0).wait(1).to({x:499.9,alpha:0.878},0).wait(1).to({x:499.5,alpha:0.892},0).wait(1).to({x:499,alpha:0.905},0).wait(1).to({x:498.6,alpha:0.919},0).wait(1).to({x:498.1,alpha:0.932},0).wait(1).to({x:497.6,alpha:0.946},0).wait(1).to({x:497.2,alpha:0.959},0).wait(1).to({x:496.7,alpha:0.973},0).wait(1).to({x:496.3,alpha:0.986},0).wait(1).to({x:495.8,alpha:1},0).wait(1).to({x:495.3},0).wait(1).to({x:494.9},0).wait(1).to({x:494.4},0).wait(1).to({x:493.9},0).wait(1).to({x:493.5},0).wait(1).to({x:493},0).wait(1).to({x:492.6},0).wait(1).to({x:492.1},0).wait(1).to({x:491.6},0).wait(1).to({x:491.2},0).wait(1).to({x:490.7},0).wait(1).to({x:490.2},0).wait(1).to({x:489.8},0).wait(1).to({x:489.3},0).wait(1).to({x:488.9},0).wait(1).to({x:488.4},0).wait(1).to({x:487.9},0).wait(1).to({x:487.5},0).wait(1).to({x:487},0).wait(1).to({x:486.5},0).wait(1).to({x:486.1},0).wait(1).to({x:485.6},0).wait(1).to({x:485.2},0).wait(1).to({x:484.7},0).wait(1).to({x:484.2},0).wait(1).to({x:483.8},0).wait(1).to({x:483.3},0).wait(1).to({x:482.8},0).wait(1).to({x:482.4},0).wait(1).to({x:481.9},0).wait(1).to({x:481.5},0).wait(1).to({x:481},0).wait(1).to({x:480.5},0).wait(1).to({x:480.1},0).wait(1).to({x:479.6},0).wait(1).to({x:479.1},0).wait(1).to({x:478.7},0).wait(1).to({x:478.2},0).wait(1).to({x:477.8},0).wait(1).to({x:477.3},0).wait(1).to({x:476.8},0).wait(1).to({x:476.4},0).wait(1).to({x:475.9},0).wait(1).to({x:475.4},0).wait(1).to({x:475},0).wait(1).to({x:474.5},0).wait(1).to({x:474.1},0).wait(1).to({x:473.6},0).wait(1).to({x:473.1},0).wait(1).to({x:472.7},0).wait(1).to({x:472.2},0).wait(1).to({x:471.7},0).wait(1).to({x:471.3},0).wait(1).to({x:470.8},0).wait(1).to({x:470.4},0).wait(1).to({x:469.9},0).wait(1).to({x:469.4},0).wait(1).to({x:469},0).wait(1).to({x:468.5},0).wait(1).to({x:468.1},0).wait(1).to({x:467.6},0).wait(1).to({x:467.1},0).wait(1).to({x:466.7},0).wait(1).to({x:466.2},0).wait(1).to({x:465.7},0).wait(1).to({x:465.3},0).wait(1).to({x:464.8,alpha:0.983},0).wait(1).to({x:464.4,alpha:0.966},0).wait(1).to({x:463.9,alpha:0.949},0).wait(1).to({x:463.4,alpha:0.932},0).wait(1).to({x:463,alpha:0.915},0).wait(1).to({x:462.5,alpha:0.898},0).wait(1).to({x:462,alpha:0.881},0).wait(1).to({x:461.6,alpha:0.864},0).wait(1).to({x:461.1,alpha:0.847},0).wait(1).to({x:460.7,alpha:0.831},0).wait(1).to({x:460.2,alpha:0.814},0).wait(1).to({x:459.7,alpha:0.797},0).wait(1).to({x:459.3,alpha:0.78},0).wait(1).to({x:458.8,alpha:0.763},0).wait(1).to({x:458.3,alpha:0.746},0).wait(1).to({x:457.9,alpha:0.729},0).wait(1).to({x:457.4,alpha:0.712},0).wait(1).to({x:457,alpha:0.695},0).wait(1).to({x:456.5,alpha:0.678},0).wait(1).to({x:456,alpha:0.661},0).wait(1).to({x:455.6,alpha:0.644},0).wait(1).to({x:455.1,alpha:0.627},0).wait(1).to({x:454.6,alpha:0.61},0).wait(1).to({x:454.2,alpha:0.593},0).wait(1).to({x:453.7,alpha:0.576},0).wait(1).to({x:453.3,alpha:0.559},0).wait(1).to({x:452.8,alpha:0.542},0).wait(1).to({x:452.3,alpha:0.525},0).wait(1).to({x:451.9,alpha:0.508},0).wait(1).to({x:451.4,alpha:0.492},0).wait(1).to({x:450.9,alpha:0.475},0).wait(1).to({x:450.5,alpha:0.458},0).wait(1).to({x:450,alpha:0.441},0).wait(1).to({x:449.6,alpha:0.424},0).wait(1).to({x:449.1,alpha:0.407},0).wait(1).to({x:448.6,alpha:0.39},0).wait(1).to({x:448.2,alpha:0.373},0).wait(1).to({x:447.7,alpha:0.356},0).wait(1).to({x:447.2,alpha:0.339},0).wait(1).to({x:446.8,alpha:0.322},0).wait(1).to({x:446.3,alpha:0.305},0).wait(1).to({x:445.9,alpha:0.288},0).wait(1).to({x:445.4,alpha:0.271},0).wait(1).to({x:444.9,alpha:0.254},0).wait(1).to({x:444.5,alpha:0.237},0).wait(1).to({x:444,alpha:0.22},0).wait(1).to({x:443.5,alpha:0.203},0).wait(1).to({x:443.1,alpha:0.186},0).wait(1).to({x:442.6,alpha:0.169},0).wait(1).to({x:442.2,alpha:0.153},0).wait(1).to({x:441.7,alpha:0.136},0).wait(1).to({x:441.2,alpha:0.119},0).wait(1).to({x:440.8,alpha:0.102},0).wait(1).to({x:440.3,alpha:0.085},0).wait(1).to({x:439.8,alpha:0.068},0).wait(1).to({x:439.4,alpha:0.051},0).wait(1).to({x:438.9,alpha:0.034},0).wait(1).to({x:438.5,alpha:0.017},0).wait(1).to({x:438,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,56.1,704.5,934);


(lib.MC_carpe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"opened":1,"closed":199});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_199 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(1));

	// fullimage
	this.instance = new lib.Symbol1();
	this.instance.setTransform(428.4,599,1.74,1.74,0,0,0,433.9,585);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:434,regY:568.4,x:426.8,y:570.1,alpha:0.01},0).wait(1).to({x:424.9,alpha:0.02},0).wait(1).to({x:423.1,alpha:0.03},0).wait(1).to({x:421.2,alpha:0.04},0).wait(1).to({x:419.4,alpha:0.05},0).wait(1).to({x:417.5,alpha:0.059},0).wait(1).to({x:415.7,alpha:0.069},0).wait(1).to({x:413.8,alpha:0.079},0).wait(1).to({x:412,alpha:0.089},0).wait(1).to({x:410.1,alpha:0.099},0).wait(1).to({x:408.3,alpha:0.109},0).wait(1).to({x:406.4,alpha:0.119},0).wait(1).to({x:404.6,alpha:0.129},0).wait(1).to({x:402.7,alpha:0.139},0).wait(1).to({x:400.9,alpha:0.149},0).wait(1).to({x:399,alpha:0.158},0).wait(1).to({x:397.2,alpha:0.168},0).wait(1).to({x:395.3,alpha:0.178},0).wait(1).to({x:393.5,alpha:0.188},0).wait(1).to({x:391.6,alpha:0.198},0).wait(1).to({x:389.8,alpha:0.208},0).wait(1).to({x:387.9,alpha:0.218},0).wait(1).to({x:386.1,alpha:0.228},0).wait(1).to({x:384.3,alpha:0.238},0).wait(1).to({x:382.4,alpha:0.248},0).wait(1).to({x:380.6,alpha:0.257},0).wait(1).to({x:378.7,alpha:0.267},0).wait(1).to({x:376.9,alpha:0.277},0).wait(1).to({x:375,alpha:0.287},0).wait(1).to({x:373.2,alpha:0.297},0).wait(1).to({x:371.3,alpha:0.307},0).wait(1).to({x:369.5,alpha:0.317},0).wait(1).to({x:367.6,alpha:0.327},0).wait(1).to({x:365.8,alpha:0.337},0).wait(1).to({x:363.9,alpha:0.347},0).wait(1).to({x:362.1,alpha:0.356},0).wait(1).to({x:360.2,alpha:0.366},0).wait(1).to({x:358.4,alpha:0.376},0).wait(1).to({x:356.5,alpha:0.386},0).wait(1).to({x:354.7,alpha:0.396},0).wait(1).to({x:352.8,alpha:0.406},0).wait(1).to({x:351,alpha:0.416},0).wait(1).to({x:349.1,alpha:0.426},0).wait(1).to({x:347.3,alpha:0.436},0).wait(1).to({x:345.5,alpha:0.446},0).wait(1).to({x:343.6,alpha:0.455},0).wait(1).to({x:341.8,alpha:0.465},0).wait(1).to({x:339.9,alpha:0.475},0).wait(1).to({x:338.1,alpha:0.485},0).wait(1).to({x:336.2,alpha:0.495},0).wait(1).to({x:334.4,alpha:0.505},0).wait(1).to({x:332.5,alpha:0.515},0).wait(1).to({x:330.7,alpha:0.525},0).wait(1).to({x:328.8,alpha:0.535},0).wait(1).to({x:327,alpha:0.545},0).wait(1).to({x:325.1,alpha:0.554},0).wait(1).to({x:323.3,alpha:0.564},0).wait(1).to({x:321.4,alpha:0.574},0).wait(1).to({x:319.6,alpha:0.584},0).wait(1).to({x:317.7,alpha:0.594},0).wait(1).to({x:315.9,alpha:0.604},0).wait(1).to({x:314,alpha:0.614},0).wait(1).to({x:312.2,alpha:0.624},0).wait(1).to({x:310.3,alpha:0.634},0).wait(1).to({x:308.5,alpha:0.644},0).wait(1).to({x:306.6,alpha:0.653},0).wait(1).to({x:304.8,alpha:0.663},0).wait(1).to({x:303,alpha:0.673},0).wait(1).to({x:301.1,alpha:0.683},0).wait(1).to({x:299.3,alpha:0.693},0).wait(1).to({x:297.4,alpha:0.703},0).wait(1).to({x:295.6,alpha:0.713},0).wait(1).to({x:293.7,alpha:0.723},0).wait(1).to({x:291.9,alpha:0.733},0).wait(1).to({x:290,alpha:0.743},0).wait(1).to({x:288.2,alpha:0.752},0).wait(1).to({x:286.3,alpha:0.762},0).wait(1).to({x:284.5,alpha:0.772},0).wait(1).to({x:282.6,alpha:0.782},0).wait(1).to({x:280.8,alpha:0.792},0).wait(1).to({x:278.9,alpha:0.802},0).wait(1).to({x:277.1,alpha:0.812},0).wait(1).to({x:275.2,alpha:0.822},0).wait(1).to({x:273.4,alpha:0.832},0).wait(1).to({x:271.5,alpha:0.842},0).wait(1).to({x:269.7,alpha:0.851},0).wait(1).to({x:267.8,alpha:0.861},0).wait(1).to({x:266,alpha:0.871},0).wait(1).to({x:264.1,alpha:0.881},0).wait(1).to({x:262.3,alpha:0.891},0).wait(1).to({x:260.5,alpha:0.901},0).wait(1).to({x:258.6,alpha:0.911},0).wait(1).to({x:256.8,alpha:0.921},0).wait(1).to({x:254.9,alpha:0.931},0).wait(1).to({x:253.1,alpha:0.941},0).wait(1).to({x:251.2,alpha:0.95},0).wait(1).to({x:249.4,alpha:0.96},0).wait(1).to({x:247.5,alpha:0.97},0).wait(1).to({x:245.7,alpha:0.98},0).wait(1).to({x:243.8,alpha:0.99},0).wait(1).to({x:242,alpha:1},0).wait(1).to({x:240.2,alpha:0.99},0).wait(1).to({x:238.4,alpha:0.98},0).wait(1).to({x:236.6,alpha:0.969},0).wait(1).to({x:234.8,alpha:0.959},0).wait(1).to({x:233,alpha:0.949},0).wait(1).to({x:231.2,alpha:0.939},0).wait(1).to({x:229.4,alpha:0.929},0).wait(1).to({x:227.7,alpha:0.918},0).wait(1).to({x:225.9,alpha:0.908},0).wait(1).to({x:224.1,alpha:0.898},0).wait(1).to({x:222.3,alpha:0.888},0).wait(1).to({x:220.5,alpha:0.878},0).wait(1).to({x:218.7,alpha:0.867},0).wait(1).to({x:216.9,alpha:0.857},0).wait(1).to({x:215.1,alpha:0.847},0).wait(1).to({x:213.3,alpha:0.837},0).wait(1).to({x:211.6,alpha:0.827},0).wait(1).to({x:209.8,alpha:0.816},0).wait(1).to({x:208,alpha:0.806},0).wait(1).to({x:206.2,alpha:0.796},0).wait(1).to({x:204.4,alpha:0.786},0).wait(1).to({x:202.6,alpha:0.776},0).wait(1).to({x:200.8,alpha:0.765},0).wait(1).to({x:199,alpha:0.755},0).wait(1).to({x:197.2,alpha:0.745},0).wait(1).to({x:195.4,alpha:0.735},0).wait(1).to({x:193.7,alpha:0.724},0).wait(1).to({x:191.9,alpha:0.714},0).wait(1).to({x:190.1,alpha:0.704},0).wait(1).to({x:188.3,alpha:0.694},0).wait(1).to({x:186.5,alpha:0.684},0).wait(1).to({x:184.7,alpha:0.673},0).wait(1).to({x:182.9,alpha:0.663},0).wait(1).to({x:181.1,alpha:0.653},0).wait(1).to({x:179.3,alpha:0.643},0).wait(1).to({x:177.6,alpha:0.633},0).wait(1).to({x:175.8,alpha:0.622},0).wait(1).to({x:174,alpha:0.612},0).wait(1).to({x:172.2,alpha:0.602},0).wait(1).to({x:170.4,alpha:0.592},0).wait(1).to({x:168.6,alpha:0.582},0).wait(1).to({x:166.8,alpha:0.571},0).wait(1).to({x:165,alpha:0.561},0).wait(1).to({x:163.2,alpha:0.551},0).wait(1).to({x:161.4,alpha:0.541},0).wait(1).to({x:159.7,alpha:0.531},0).wait(1).to({x:157.9,alpha:0.52},0).wait(1).to({x:156.1,alpha:0.51},0).wait(1).to({x:154.3,alpha:0.5},0).wait(1).to({x:152.5,alpha:0.49},0).wait(1).to({x:150.7,alpha:0.48},0).wait(1).to({x:148.9,alpha:0.469},0).wait(1).to({x:147.1,alpha:0.459},0).wait(1).to({x:145.3,alpha:0.449},0).wait(1).to({x:143.6,alpha:0.439},0).wait(1).to({x:141.8,alpha:0.429},0).wait(1).to({x:140,alpha:0.418},0).wait(1).to({x:138.2,alpha:0.408},0).wait(1).to({x:136.4,alpha:0.398},0).wait(1).to({x:134.6,alpha:0.388},0).wait(1).to({x:132.8,alpha:0.378},0).wait(1).to({x:131,alpha:0.367},0).wait(1).to({x:129.2,alpha:0.357},0).wait(1).to({x:127.4,alpha:0.347},0).wait(1).to({x:125.7,alpha:0.337},0).wait(1).to({x:123.9,alpha:0.327},0).wait(1).to({x:122.1,alpha:0.316},0).wait(1).to({x:120.3,alpha:0.306},0).wait(1).to({x:118.5,alpha:0.296},0).wait(1).to({x:116.7,alpha:0.286},0).wait(1).to({x:114.9,alpha:0.276},0).wait(1).to({x:113.1,alpha:0.265},0).wait(1).to({x:111.3,alpha:0.255},0).wait(1).to({x:109.5,alpha:0.245},0).wait(1).to({x:107.8,alpha:0.235},0).wait(1).to({x:106,alpha:0.224},0).wait(1).to({x:104.2,alpha:0.214},0).wait(1).to({x:102.4,alpha:0.204},0).wait(1).to({x:100.6,alpha:0.194},0).wait(1).to({x:98.8,alpha:0.184},0).wait(1).to({x:97,alpha:0.173},0).wait(1).to({x:95.2,alpha:0.163},0).wait(1).to({x:93.4,alpha:0.153},0).wait(1).to({x:91.7,alpha:0.143},0).wait(1).to({x:89.9,alpha:0.133},0).wait(1).to({x:88.1,alpha:0.122},0).wait(1).to({x:86.3,alpha:0.112},0).wait(1).to({x:84.5,alpha:0.102},0).wait(1).to({x:82.7,alpha:0.092},0).wait(1).to({x:80.9,alpha:0.082},0).wait(1).to({x:79.1,alpha:0.071},0).wait(1).to({x:77.3,alpha:0.061},0).wait(1).to({x:75.5,alpha:0.051},0).wait(1).to({x:73.8,alpha:0.041},0).wait(1).to({x:72,alpha:0.031},0).wait(1).to({x:70.2,alpha:0.02},0).wait(1).to({x:68.4,alpha:0.01},0).wait(1).to({x:66.6,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,-4.8,852.6,1149.8);


(lib.MC_carpe = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":199});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_199 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(1));

	// text
	this.instance = new lib.Symbol3();
	this.instance.setTransform(278.1,553.2,1,1,0,0,0,187.1,48.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:194.5,regY:62.5,x:286,y:567.5,alpha:0.014},0).wait(1).to({x:286.5,alpha:0.027},0).wait(1).to({x:287,alpha:0.041},0).wait(1).to({x:287.5,alpha:0.054},0).wait(1).to({x:288,alpha:0.068},0).wait(1).to({x:288.5,alpha:0.081},0).wait(1).to({x:289,alpha:0.095},0).wait(1).to({x:289.5,alpha:0.108},0).wait(1).to({x:290,alpha:0.122},0).wait(1).to({x:290.5,alpha:0.135},0).wait(1).to({x:291,alpha:0.149},0).wait(1).to({x:291.5,alpha:0.162},0).wait(1).to({x:292,alpha:0.176},0).wait(1).to({x:292.5,alpha:0.189},0).wait(1).to({x:293,alpha:0.203},0).wait(1).to({x:293.5,alpha:0.216},0).wait(1).to({x:294,alpha:0.23},0).wait(1).to({x:294.5,alpha:0.243},0).wait(1).to({x:295,alpha:0.257},0).wait(1).to({x:295.6,alpha:0.27},0).wait(1).to({x:296.1,alpha:0.284},0).wait(1).to({x:296.6,alpha:0.297},0).wait(1).to({x:297.1,alpha:0.311},0).wait(1).to({x:297.6,alpha:0.324},0).wait(1).to({x:298.1,alpha:0.338},0).wait(1).to({x:298.6,alpha:0.351},0).wait(1).to({x:299.1,alpha:0.365},0).wait(1).to({x:299.6,alpha:0.378},0).wait(1).to({x:300.1,alpha:0.392},0).wait(1).to({x:300.6,alpha:0.405},0).wait(1).to({x:301.1,alpha:0.419},0).wait(1).to({x:301.6,alpha:0.432},0).wait(1).to({x:302.1,alpha:0.446},0).wait(1).to({x:302.6,alpha:0.459},0).wait(1).to({x:303.1,alpha:0.473},0).wait(1).to({x:303.6,alpha:0.486},0).wait(1).to({x:304.1,alpha:0.5},0).wait(1).to({x:304.6,alpha:0.514},0).wait(1).to({x:305.1,alpha:0.527},0).wait(1).to({x:305.6,alpha:0.541},0).wait(1).to({x:306.1,alpha:0.554},0).wait(1).to({x:306.6,alpha:0.568},0).wait(1).to({x:307.1,alpha:0.581},0).wait(1).to({x:307.6,alpha:0.595},0).wait(1).to({x:308.1,alpha:0.608},0).wait(1).to({x:308.6,alpha:0.622},0).wait(1).to({x:309.1,alpha:0.635},0).wait(1).to({x:309.6,alpha:0.649},0).wait(1).to({x:310.1,alpha:0.662},0).wait(1).to({x:310.6,alpha:0.676},0).wait(1).to({x:311.1,alpha:0.689},0).wait(1).to({x:311.6,alpha:0.703},0).wait(1).to({x:312.1,alpha:0.716},0).wait(1).to({x:312.6,alpha:0.73},0).wait(1).to({x:313.1,alpha:0.743},0).wait(1).to({x:313.6,alpha:0.757},0).wait(1).to({x:314.1,alpha:0.77},0).wait(1).to({x:314.6,alpha:0.784},0).wait(1).to({x:315.1,alpha:0.797},0).wait(1).to({x:315.7,alpha:0.811},0).wait(1).to({x:316.2,alpha:0.824},0).wait(1).to({x:316.7,alpha:0.838},0).wait(1).to({x:317.2,alpha:0.851},0).wait(1).to({x:317.7,alpha:0.865},0).wait(1).to({x:318.2,alpha:0.878},0).wait(1).to({x:318.7,alpha:0.892},0).wait(1).to({x:319.2,alpha:0.905},0).wait(1).to({x:319.7,alpha:0.919},0).wait(1).to({x:320.2,alpha:0.932},0).wait(1).to({x:320.7,alpha:0.946},0).wait(1).to({x:321.2,alpha:0.959},0).wait(1).to({x:321.7,alpha:0.973},0).wait(1).to({x:322.2,alpha:0.986},0).wait(1).to({x:322.7,alpha:1},0).wait(1).to({x:323.2},0).wait(1).to({x:323.7},0).wait(1).to({x:324.2},0).wait(1).to({x:324.7},0).wait(1).to({x:325.2},0).wait(1).to({x:325.7},0).wait(1).to({x:326.2},0).wait(1).to({x:326.7},0).wait(1).to({x:327.2},0).wait(1).to({x:327.7},0).wait(1).to({x:328.2},0).wait(1).to({x:328.7},0).wait(1).to({x:329.2},0).wait(1).to({x:329.7},0).wait(1).to({x:330.2},0).wait(1).to({x:330.7},0).wait(1).to({x:331.2},0).wait(1).to({x:331.7},0).wait(1).to({x:332.2},0).wait(1).to({x:332.7},0).wait(1).to({x:333.2},0).wait(1).to({x:333.7},0).wait(1).to({x:334.2},0).wait(1).to({x:334.7},0).wait(1).to({x:335.2},0).wait(1).to({x:335.8},0).wait(1).to({x:336.3},0).wait(1).to({x:336.8},0).wait(1).to({x:337.3},0).wait(1).to({x:337.8},0).wait(1).to({x:338.3},0).wait(1).to({x:338.8},0).wait(1).to({x:339.3},0).wait(1).to({x:339.8},0).wait(1).to({x:340.3},0).wait(1).to({x:340.8},0).wait(1).to({x:341.3},0).wait(1).to({x:341.8},0).wait(1).to({x:342.3},0).wait(1).to({x:342.8},0).wait(1).to({x:343.3},0).wait(1).to({x:343.8},0).wait(1).to({x:344.3},0).wait(1).to({x:344.8},0).wait(1).to({x:345.3},0).wait(1).to({x:345.8},0).wait(1).to({x:346.3},0).wait(1).to({x:346.8},0).wait(1).to({x:347.3},0).wait(1).to({x:347.8},0).wait(1).to({x:348.3},0).wait(1).to({x:348.8},0).wait(1).to({x:349.3},0).wait(1).to({x:349.8},0).wait(1).to({x:350.3},0).wait(1).to({x:350.8},0).wait(1).to({x:351.3},0).wait(1).to({x:351.8},0).wait(1).to({x:352.3},0).wait(1).to({x:352.8},0).wait(1).to({x:353.3},0).wait(1).to({x:353.8},0).wait(1).to({x:354.3},0).wait(1).to({x:354.8},0).wait(1).to({x:355.3},0).wait(1).to({x:355.9},0).wait(1).to({x:356.4,alpha:0.983},0).wait(1).to({x:356.9,alpha:0.966},0).wait(1).to({x:357.4,alpha:0.949},0).wait(1).to({x:357.9,alpha:0.932},0).wait(1).to({x:358.4,alpha:0.915},0).wait(1).to({x:358.9,alpha:0.898},0).wait(1).to({x:359.4,alpha:0.881},0).wait(1).to({x:359.9,alpha:0.864},0).wait(1).to({x:360.4,alpha:0.847},0).wait(1).to({x:360.9,alpha:0.831},0).wait(1).to({x:361.4,alpha:0.814},0).wait(1).to({x:361.9,alpha:0.797},0).wait(1).to({x:362.4,alpha:0.78},0).wait(1).to({x:362.9,alpha:0.763},0).wait(1).to({x:363.4,alpha:0.746},0).wait(1).to({x:363.9,alpha:0.729},0).wait(1).to({x:364.4,alpha:0.712},0).wait(1).to({x:364.9,alpha:0.695},0).wait(1).to({x:365.4,alpha:0.678},0).wait(1).to({x:365.9,alpha:0.661},0).wait(1).to({x:366.4,alpha:0.644},0).wait(1).to({x:366.9,alpha:0.627},0).wait(1).to({x:367.4,alpha:0.61},0).wait(1).to({x:367.9,alpha:0.593},0).wait(1).to({x:368.4,alpha:0.576},0).wait(1).to({x:368.9,alpha:0.559},0).wait(1).to({x:369.4,alpha:0.542},0).wait(1).to({x:369.9,alpha:0.525},0).wait(1).to({x:370.4,alpha:0.508},0).wait(1).to({x:370.9,alpha:0.492},0).wait(1).to({x:371.4,alpha:0.475},0).wait(1).to({x:371.9,alpha:0.458},0).wait(1).to({x:372.4,alpha:0.441},0).wait(1).to({x:372.9,alpha:0.424},0).wait(1).to({x:373.4,alpha:0.407},0).wait(1).to({x:373.9,alpha:0.39},0).wait(1).to({x:374.4,alpha:0.373},0).wait(1).to({x:374.9,alpha:0.356},0).wait(1).to({x:375.4,alpha:0.339},0).wait(1).to({x:376,alpha:0.322},0).wait(1).to({x:376.5,alpha:0.305},0).wait(1).to({x:377,alpha:0.288},0).wait(1).to({x:377.5,alpha:0.271},0).wait(1).to({x:378,alpha:0.254},0).wait(1).to({x:378.5,alpha:0.237},0).wait(1).to({x:379,alpha:0.22},0).wait(1).to({x:379.5,alpha:0.203},0).wait(1).to({x:380,alpha:0.186},0).wait(1).to({x:380.5,alpha:0.169},0).wait(1).to({x:381,alpha:0.153},0).wait(1).to({x:381.5,alpha:0.136},0).wait(1).to({x:382,alpha:0.119},0).wait(1).to({x:382.5,alpha:0.102},0).wait(1).to({x:383,alpha:0.085},0).wait(1).to({x:383.5,alpha:0.068},0).wait(1).to({x:384,alpha:0.051},0).wait(1).to({x:384.5,alpha:0.034},0).wait(1).to({x:385,alpha:0.017},0).wait(1).to({x:385.5,alpha:0},0).wait(1));

	// text
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(260.8,456.6,1,1,0,0,0,90.8,14.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:79,regY:22,x:248.5,y:463.9,alpha:0.014},0).wait(1).to({x:248.1,alpha:0.027},0).wait(1).to({x:247.6,alpha:0.041},0).wait(1).to({x:247.2,alpha:0.054},0).wait(1).to({x:246.7,alpha:0.068},0).wait(1).to({x:246.2,alpha:0.081},0).wait(1).to({x:245.8,alpha:0.095},0).wait(1).to({x:245.3,alpha:0.108},0).wait(1).to({x:244.8,alpha:0.122},0).wait(1).to({x:244.4,alpha:0.135},0).wait(1).to({x:243.9,alpha:0.149},0).wait(1).to({x:243.5,alpha:0.162},0).wait(1).to({x:243,alpha:0.176},0).wait(1).to({x:242.5,alpha:0.189},0).wait(1).to({x:242.1,alpha:0.203},0).wait(1).to({x:241.6,alpha:0.216},0).wait(1).to({x:241.1,alpha:0.23},0).wait(1).to({x:240.7,alpha:0.243},0).wait(1).to({x:240.2,alpha:0.257},0).wait(1).to({x:239.8,alpha:0.27},0).wait(1).to({x:239.3,alpha:0.284},0).wait(1).to({x:238.8,alpha:0.297},0).wait(1).to({x:238.4,alpha:0.311},0).wait(1).to({x:237.9,alpha:0.324},0).wait(1).to({x:237.4,alpha:0.338},0).wait(1).to({x:237,alpha:0.351},0).wait(1).to({x:236.5,alpha:0.365},0).wait(1).to({x:236.1,alpha:0.378},0).wait(1).to({x:235.6,alpha:0.392},0).wait(1).to({x:235.1,alpha:0.405},0).wait(1).to({x:234.7,alpha:0.419},0).wait(1).to({x:234.2,alpha:0.432},0).wait(1).to({x:233.7,alpha:0.446},0).wait(1).to({x:233.3,alpha:0.459},0).wait(1).to({x:232.8,alpha:0.473},0).wait(1).to({x:232.4,alpha:0.486},0).wait(1).to({x:231.9,alpha:0.5},0).wait(1).to({x:231.4,alpha:0.514},0).wait(1).to({x:231,alpha:0.527},0).wait(1).to({x:230.5,alpha:0.541},0).wait(1).to({x:230,alpha:0.554},0).wait(1).to({x:229.6,alpha:0.568},0).wait(1).to({x:229.1,alpha:0.581},0).wait(1).to({x:228.7,alpha:0.595},0).wait(1).to({x:228.2,alpha:0.608},0).wait(1).to({x:227.7,alpha:0.622},0).wait(1).to({x:227.3,alpha:0.635},0).wait(1).to({x:226.8,alpha:0.649},0).wait(1).to({x:226.3,alpha:0.662},0).wait(1).to({x:225.9,alpha:0.676},0).wait(1).to({x:225.4,alpha:0.689},0).wait(1).to({x:225,alpha:0.703},0).wait(1).to({x:224.5,alpha:0.716},0).wait(1).to({x:224,alpha:0.73},0).wait(1).to({x:223.6,alpha:0.743},0).wait(1).to({x:223.1,alpha:0.757},0).wait(1).to({x:222.6,alpha:0.77},0).wait(1).to({x:222.2,alpha:0.784},0).wait(1).to({x:221.7,alpha:0.797},0).wait(1).to({x:221.3,alpha:0.811},0).wait(1).to({x:220.8,alpha:0.824},0).wait(1).to({x:220.3,alpha:0.838},0).wait(1).to({x:219.9,alpha:0.851},0).wait(1).to({x:219.4,alpha:0.865},0).wait(1).to({x:218.9,alpha:0.878},0).wait(1).to({x:218.5,alpha:0.892},0).wait(1).to({x:218,alpha:0.905},0).wait(1).to({x:217.6,alpha:0.919},0).wait(1).to({x:217.1,alpha:0.932},0).wait(1).to({x:216.6,alpha:0.946},0).wait(1).to({x:216.2,alpha:0.959},0).wait(1).to({x:215.7,alpha:0.973},0).wait(1).to({x:215.3,alpha:0.986},0).wait(1).to({x:214.8,alpha:1},0).wait(1).to({x:214.3},0).wait(1).to({x:213.9},0).wait(1).to({x:213.4},0).wait(1).to({x:212.9},0).wait(1).to({x:212.5},0).wait(1).to({x:212},0).wait(1).to({x:211.6},0).wait(1).to({x:211.1},0).wait(1).to({x:210.6},0).wait(1).to({x:210.2},0).wait(1).to({x:209.7},0).wait(1).to({x:209.2},0).wait(1).to({x:208.8},0).wait(1).to({x:208.3},0).wait(1).to({x:207.9},0).wait(1).to({x:207.4},0).wait(1).to({x:206.9},0).wait(1).to({x:206.5},0).wait(1).to({x:206},0).wait(1).to({x:205.5},0).wait(1).to({x:205.1},0).wait(1).to({x:204.6},0).wait(1).to({x:204.2},0).wait(1).to({x:203.7},0).wait(1).to({x:203.2},0).wait(1).to({x:202.8},0).wait(1).to({x:202.3},0).wait(1).to({x:201.8},0).wait(1).to({x:201.4},0).wait(1).to({x:200.9},0).wait(1).to({x:200.5},0).wait(1).to({x:200},0).wait(1).to({x:199.5},0).wait(1).to({x:199.1},0).wait(1).to({x:198.6},0).wait(1).to({x:198.1},0).wait(1).to({x:197.7},0).wait(1).to({x:197.2},0).wait(1).to({x:196.8},0).wait(1).to({x:196.3},0).wait(1).to({x:195.8},0).wait(1).to({x:195.4},0).wait(1).to({x:194.9},0).wait(1).to({x:194.4},0).wait(1).to({x:194},0).wait(1).to({x:193.5},0).wait(1).to({x:193.1},0).wait(1).to({x:192.6},0).wait(1).to({x:192.1},0).wait(1).to({x:191.7},0).wait(1).to({x:191.2},0).wait(1).to({x:190.7},0).wait(1).to({x:190.3},0).wait(1).to({x:189.8},0).wait(1).to({x:189.4},0).wait(1).to({x:188.9},0).wait(1).to({x:188.4},0).wait(1).to({x:188},0).wait(1).to({x:187.5},0).wait(1).to({x:187.1},0).wait(1).to({x:186.6},0).wait(1).to({x:186.1},0).wait(1).to({x:185.7},0).wait(1).to({x:185.2},0).wait(1).to({x:184.7},0).wait(1).to({x:184.3},0).wait(1).to({x:183.8,alpha:0.983},0).wait(1).to({x:183.4,alpha:0.966},0).wait(1).to({x:182.9,alpha:0.949},0).wait(1).to({x:182.4,alpha:0.932},0).wait(1).to({x:182,alpha:0.915},0).wait(1).to({x:181.5,alpha:0.898},0).wait(1).to({x:181,alpha:0.881},0).wait(1).to({x:180.6,alpha:0.864},0).wait(1).to({x:180.1,alpha:0.847},0).wait(1).to({x:179.7,alpha:0.831},0).wait(1).to({x:179.2,alpha:0.814},0).wait(1).to({x:178.7,alpha:0.797},0).wait(1).to({x:178.3,alpha:0.78},0).wait(1).to({x:177.8,alpha:0.763},0).wait(1).to({x:177.3,alpha:0.746},0).wait(1).to({x:176.9,alpha:0.729},0).wait(1).to({x:176.4,alpha:0.712},0).wait(1).to({x:176,alpha:0.695},0).wait(1).to({x:175.5,alpha:0.678},0).wait(1).to({x:175,alpha:0.661},0).wait(1).to({x:174.6,alpha:0.644},0).wait(1).to({x:174.1,alpha:0.627},0).wait(1).to({x:173.6,alpha:0.61},0).wait(1).to({x:173.2,alpha:0.593},0).wait(1).to({x:172.7,alpha:0.576},0).wait(1).to({x:172.3,alpha:0.559},0).wait(1).to({x:171.8,alpha:0.542},0).wait(1).to({x:171.3,alpha:0.525},0).wait(1).to({x:170.9,alpha:0.508},0).wait(1).to({x:170.4,alpha:0.492},0).wait(1).to({x:169.9,alpha:0.475},0).wait(1).to({x:169.5,alpha:0.458},0).wait(1).to({x:169,alpha:0.441},0).wait(1).to({x:168.6,alpha:0.424},0).wait(1).to({x:168.1,alpha:0.407},0).wait(1).to({x:167.6,alpha:0.39},0).wait(1).to({x:167.2,alpha:0.373},0).wait(1).to({x:166.7,alpha:0.356},0).wait(1).to({x:166.2,alpha:0.339},0).wait(1).to({x:165.8,alpha:0.322},0).wait(1).to({x:165.3,alpha:0.305},0).wait(1).to({x:164.9,alpha:0.288},0).wait(1).to({x:164.4,alpha:0.271},0).wait(1).to({x:163.9,alpha:0.254},0).wait(1).to({x:163.5,alpha:0.237},0).wait(1).to({x:163,alpha:0.22},0).wait(1).to({x:162.5,alpha:0.203},0).wait(1).to({x:162.1,alpha:0.186},0).wait(1).to({x:161.6,alpha:0.169},0).wait(1).to({x:161.2,alpha:0.153},0).wait(1).to({x:160.7,alpha:0.136},0).wait(1).to({x:160.2,alpha:0.119},0).wait(1).to({x:159.8,alpha:0.102},0).wait(1).to({x:159.3,alpha:0.085},0).wait(1).to({x:158.8,alpha:0.068},0).wait(1).to({x:158.4,alpha:0.051},0).wait(1).to({x:157.9,alpha:0.034},0).wait(1).to({x:157.5,alpha:0.017},0).wait(1).to({x:157,alpha:0},0).wait(1));

	// image
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(224.9,293,0.998,0.998,-39.9,0,0,348.3,206.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:350,regY:205.5,scaleX:1,scaleY:1,rotation:-39.7,x:225.5,y:290.9,alpha:0.016},0).wait(1).to({rotation:-39.4,y:290.8,alpha:0.032},0).wait(1).to({rotation:-39.2,y:290.9,alpha:0.048},0).wait(1).to({rotation:-38.9,alpha:0.063},0).wait(1).to({rotation:-38.6,alpha:0.079},0).wait(1).to({rotation:-38.4,alpha:0.095},0).wait(1).to({rotation:-38.1,alpha:0.111},0).wait(1).to({rotation:-37.9,alpha:0.127},0).wait(1).to({rotation:-37.6,x:225.6,alpha:0.143},0).wait(1).to({rotation:-37.3,alpha:0.159},0).wait(1).to({rotation:-37.1,alpha:0.175},0).wait(1).to({rotation:-36.8,alpha:0.19},0).wait(1).to({rotation:-36.6,alpha:0.206},0).wait(1).to({rotation:-36.3,alpha:0.222},0).wait(1).to({rotation:-36,alpha:0.238},0).wait(1).to({rotation:-35.8,alpha:0.254},0).wait(1).to({rotation:-35.5,alpha:0.27},0).wait(1).to({rotation:-35.2,alpha:0.286},0).wait(1).to({rotation:-35,alpha:0.302},0).wait(1).to({rotation:-34.7,x:225.7,alpha:0.317},0).wait(1).to({rotation:-34.5,x:225.6,alpha:0.333},0).wait(1).to({rotation:-34.2,x:225.7,alpha:0.349},0).wait(1).to({rotation:-33.9,alpha:0.365},0).wait(1).to({rotation:-33.7,alpha:0.381},0).wait(1).to({rotation:-33.4,y:291,alpha:0.397},0).wait(1).to({rotation:-33.1,y:290.9,alpha:0.413},0).wait(1).to({rotation:-32.9,alpha:0.429},0).wait(1).to({rotation:-32.6,alpha:0.444},0).wait(1).to({rotation:-32.4,y:291,alpha:0.46},0).wait(1).to({rotation:-32.1,alpha:0.476},0).wait(1).to({rotation:-31.8,alpha:0.492},0).wait(1).to({rotation:-31.6,y:290.9,alpha:0.508},0).wait(1).to({rotation:-31.3,y:291,alpha:0.524},0).wait(1).to({rotation:-31.1,x:225.8,alpha:0.54},0).wait(1).to({rotation:-30.8,alpha:0.556},0).wait(1).to({rotation:-30.5,alpha:0.571},0).wait(1).to({rotation:-30.3,alpha:0.587},0).wait(1).to({rotation:-30,alpha:0.603},0).wait(1).to({rotation:-29.7,alpha:0.619},0).wait(1).to({rotation:-29.5,alpha:0.635},0).wait(1).to({rotation:-29.2,alpha:0.651},0).wait(1).to({rotation:-29,alpha:0.667},0).wait(1).to({rotation:-28.7,x:225.9,alpha:0.683},0).wait(1).to({rotation:-28.4,x:225.8,alpha:0.698},0).wait(1).to({rotation:-28.2,x:225.9,alpha:0.714},0).wait(1).to({rotation:-27.9,alpha:0.73},0).wait(1).to({rotation:-27.7,alpha:0.746},0).wait(1).to({rotation:-27.4,alpha:0.762},0).wait(1).to({rotation:-27.1,alpha:0.778},0).wait(1).to({rotation:-26.9,alpha:0.794},0).wait(1).to({rotation:-26.6,alpha:0.81},0).wait(1).to({rotation:-26.3,alpha:0.825},0).wait(1).to({rotation:-26.1,alpha:0.841},0).wait(1).to({rotation:-25.8,alpha:0.857},0).wait(1).to({rotation:-25.6,alpha:0.873},0).wait(1).to({rotation:-25.3,x:226,y:291.1,alpha:0.889},0).wait(1).to({rotation:-25,x:225.9,alpha:0.905},0).wait(1).to({rotation:-24.8,x:226,alpha:0.921},0).wait(1).to({rotation:-24.5,alpha:0.937},0).wait(1).to({rotation:-24.2,y:291,alpha:0.952},0).wait(1).to({rotation:-24,y:291.1,alpha:0.968},0).wait(1).to({rotation:-23.7,alpha:0.984},0).wait(1).to({rotation:-23.5,alpha:1},0).wait(1).to({rotation:-23.2},0).wait(1).to({rotation:-22.9},0).wait(1).to({rotation:-22.7},0).wait(1).to({rotation:-22.4,x:226.1},0).wait(1).to({rotation:-22.1,x:226},0).wait(1).to({rotation:-21.9},0).wait(1).to({rotation:-21.6,x:226.1},0).wait(1).to({rotation:-21.3},0).wait(1).to({rotation:-21.1},0).wait(1).to({rotation:-20.8},0).wait(1).to({rotation:-20.5},0).wait(1).to({rotation:-20.3,y:291.2},0).wait(1).to({rotation:-20,y:291.1},0).wait(1).to({rotation:-19.7,y:291.2},0).wait(1).to({rotation:-19.5},0).wait(1).to({rotation:-19.2,y:291.1},0).wait(1).to({rotation:-18.9,y:291.2},0).wait(1).to({rotation:-18.7,x:226.2},0).wait(1).to({rotation:-18.4},0).wait(1).to({rotation:-18.1},0).wait(1).to({rotation:-17.9},0).wait(1).to({rotation:-17.6,x:226.1},0).wait(1).to({rotation:-17.3,x:226.2},0).wait(1).to({rotation:-17.1},0).wait(1).to({rotation:-16.8},0).wait(1).to({rotation:-16.5},0).wait(1).to({rotation:-16.3,y:291.3},0).wait(1).to({rotation:-16,x:226.3},0).wait(1).to({rotation:-15.7,x:226.2,y:291.2},0).wait(1).to({rotation:-15.5,x:226.3,y:291.3},0).wait(1).to({rotation:-15.2,x:226.2,y:291.2},0).wait(1).to({rotation:-14.9,x:226.3},0).wait(1).to({rotation:-14.7,y:291.3},0).wait(1).to({rotation:-14.4},0).wait(1).to({rotation:-14.1},0).wait(1).to({rotation:-13.9},0).wait(1).to({rotation:-13.6},0).wait(1).to({rotation:-13.3},0).wait(1).to({rotation:-13.1},0).wait(1).to({rotation:-12.8},0).wait(1).to({rotation:-12.5},0).wait(1).to({rotation:-12.3},0).wait(1).to({rotation:-12,alpha:0.979},0).wait(1).to({rotation:-11.7,x:226.4,alpha:0.958},0).wait(1).to({rotation:-11.5,y:291.4,alpha:0.936},0).wait(1).to({rotation:-11.2,alpha:0.915},0).wait(1).to({rotation:-10.9,alpha:0.894},0).wait(1).to({rotation:-10.7,alpha:0.873},0).wait(1).to({rotation:-10.4,alpha:0.851},0).wait(1).to({rotation:-10.1,alpha:0.83},0).wait(1).to({rotation:-9.9,alpha:0.809},0).wait(1).to({rotation:-9.6,alpha:0.788},0).wait(1).to({rotation:-9.3,alpha:0.767},0).wait(1).to({rotation:-9.1,x:226.5,alpha:0.745},0).wait(1).to({rotation:-8.8,alpha:0.724},0).wait(1).to({rotation:-8.5,x:226.4,alpha:0.703},0).wait(1).to({rotation:-8.3,x:226.5,alpha:0.682},0).wait(1).to({rotation:-8,alpha:0.66},0).wait(1).to({rotation:-7.7,y:291.5,alpha:0.639},0).wait(1).to({rotation:-7.5,alpha:0.618},0).wait(1).to({rotation:-7.2,alpha:0.597},0).wait(1).to({rotation:-6.9,alpha:0.576},0).wait(1).to({rotation:-6.7,y:291.4,alpha:0.554},0).wait(1).to({rotation:-6.4,y:291.5,alpha:0.533},0).wait(1).to({rotation:-6.1,alpha:0.512},0).wait(1).to({rotation:-5.9,alpha:0.491},0).wait(1).to({rotation:-5.6,alpha:0.469},0).wait(1).to({rotation:-5.3,alpha:0.448},0).wait(1).to({rotation:-5.1,x:226.6,alpha:0.427},0).wait(1).to({rotation:-4.8,x:226.5,alpha:0.406},0).wait(1).to({rotation:-4.5,x:226.6,alpha:0.385},0).wait(1).to({rotation:-4.3,alpha:0.363},0).wait(1).to({rotation:-4,y:291.6,alpha:0.342},0).wait(1).to({rotation:-3.7,y:291.5,alpha:0.321},0).wait(1).to({rotation:-3.5,x:226.5,alpha:0.3},0).wait(1).to({rotation:-3.2,x:226.6,y:291.6,alpha:0.278},0).wait(1).to({rotation:-2.9,alpha:0.257},0).wait(1).to({rotation:-2.7,alpha:0.236},0).wait(1).to({rotation:-2.4,alpha:0.215},0).wait(1).to({rotation:-2.1,alpha:0.194},0).wait(1).to({rotation:-1.9,alpha:0.172},0).wait(1).to({rotation:-1.6,alpha:0.151},0).wait(1).to({rotation:-1.3,alpha:0.13},0).wait(1).to({rotation:-1.1,alpha:0.109},0).wait(1).to({rotation:-0.8,alpha:0.087},0).wait(1).to({rotation:-0.5,y:291.7,alpha:0.066},0).wait(1).to({rotation:-0.3,alpha:0.045},0).wait(1).to({rotation:0,x:226.7,alpha:0.024},0).to({_off:true},1).wait(48));

	// Layer 9
	this.instance_3 = new lib.fish3();
	this.instance_3.setTransform(2200,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(199));

	// Layer 1
	this.instance_4 = new lib.fish1();
	this.instance_4.setTransform(1520,232.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.3,-90.6,3074.3,1122.7);


(lib.MC_cadenas2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"opened":1,"closed":199});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_199 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(1));

	// Layer 5
	this.instance = new lib.Symbol2copy();
	this.instance.setTransform(456,186.9,1,1,0,0,0,220.7,18.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:192,regY:28.5,x:426.8,y:196.5,alpha:0.014},0).wait(1).to({x:426.4,alpha:0.027},0).wait(1).to({x:425.9,alpha:0.041},0).wait(1).to({x:425.5,alpha:0.054},0).wait(1).to({x:425,alpha:0.068},0).wait(1).to({x:424.5,alpha:0.081},0).wait(1).to({x:424.1,alpha:0.095},0).wait(1).to({x:423.6,alpha:0.108},0).wait(1).to({x:423.1,alpha:0.122},0).wait(1).to({x:422.7,alpha:0.135},0).wait(1).to({x:422.2,alpha:0.149},0).wait(1).to({x:421.8,alpha:0.162},0).wait(1).to({x:421.3,alpha:0.176},0).wait(1).to({x:420.8,alpha:0.189},0).wait(1).to({x:420.4,alpha:0.203},0).wait(1).to({x:419.9,alpha:0.216},0).wait(1).to({x:419.4,alpha:0.23},0).wait(1).to({x:419,alpha:0.243},0).wait(1).to({x:418.5,alpha:0.257},0).wait(1).to({x:418.1,alpha:0.27},0).wait(1).to({x:417.6,alpha:0.284},0).wait(1).to({x:417.1,alpha:0.297},0).wait(1).to({x:416.7,alpha:0.311},0).wait(1).to({x:416.2,alpha:0.324},0).wait(1).to({x:415.7,alpha:0.338},0).wait(1).to({x:415.3,alpha:0.351},0).wait(1).to({x:414.8,alpha:0.365},0).wait(1).to({x:414.4,alpha:0.378},0).wait(1).to({x:413.9,alpha:0.392},0).wait(1).to({x:413.4,alpha:0.405},0).wait(1).to({x:413,alpha:0.419},0).wait(1).to({x:412.5,alpha:0.432},0).wait(1).to({x:412,alpha:0.446},0).wait(1).to({x:411.6,alpha:0.459},0).wait(1).to({x:411.1,alpha:0.473},0).wait(1).to({x:410.7,alpha:0.486},0).wait(1).to({x:410.2,alpha:0.5},0).wait(1).to({x:409.7,alpha:0.514},0).wait(1).to({x:409.3,alpha:0.527},0).wait(1).to({x:408.8,alpha:0.541},0).wait(1).to({x:408.3,alpha:0.554},0).wait(1).to({x:407.9,alpha:0.568},0).wait(1).to({x:407.4,alpha:0.581},0).wait(1).to({x:407,alpha:0.595},0).wait(1).to({x:406.5,alpha:0.608},0).wait(1).to({x:406,alpha:0.622},0).wait(1).to({x:405.6,alpha:0.635},0).wait(1).to({x:405.1,alpha:0.649},0).wait(1).to({x:404.6,alpha:0.662},0).wait(1).to({x:404.2,alpha:0.676},0).wait(1).to({x:403.7,alpha:0.689},0).wait(1).to({x:403.3,alpha:0.703},0).wait(1).to({x:402.8,alpha:0.716},0).wait(1).to({x:402.3,alpha:0.73},0).wait(1).to({x:401.9,alpha:0.743},0).wait(1).to({x:401.4,alpha:0.757},0).wait(1).to({x:400.9,alpha:0.77},0).wait(1).to({x:400.5,alpha:0.784},0).wait(1).to({x:400,alpha:0.797},0).wait(1).to({x:399.6,alpha:0.811},0).wait(1).to({x:399.1,alpha:0.824},0).wait(1).to({x:398.6,alpha:0.838},0).wait(1).to({x:398.2,alpha:0.851},0).wait(1).to({x:397.7,alpha:0.865},0).wait(1).to({x:397.2,alpha:0.878},0).wait(1).to({x:396.8,alpha:0.892},0).wait(1).to({x:396.3,alpha:0.905},0).wait(1).to({x:395.9,alpha:0.919},0).wait(1).to({x:395.4,alpha:0.932},0).wait(1).to({x:394.9,alpha:0.946},0).wait(1).to({x:394.5,alpha:0.959},0).wait(1).to({x:394,alpha:0.973},0).wait(1).to({x:393.6,alpha:0.986},0).wait(1).to({x:393.1,alpha:1},0).wait(1).to({x:392.6},0).wait(1).to({x:392.2},0).wait(1).to({x:391.7},0).wait(1).to({x:391.2},0).wait(1).to({x:390.8},0).wait(1).to({x:390.3},0).wait(1).to({x:389.9},0).wait(1).to({x:389.4},0).wait(1).to({x:388.9},0).wait(1).to({x:388.5},0).wait(1).to({x:388},0).wait(1).to({x:387.5},0).wait(1).to({x:387.1},0).wait(1).to({x:386.6},0).wait(1).to({x:386.2},0).wait(1).to({x:385.7},0).wait(1).to({x:385.2},0).wait(1).to({x:384.8},0).wait(1).to({x:384.3},0).wait(1).to({x:383.8},0).wait(1).to({x:383.4},0).wait(1).to({x:382.9},0).wait(1).to({x:382.5},0).wait(1).to({x:382},0).wait(1).to({x:381.5},0).wait(1).to({x:381.1},0).wait(1).to({x:380.6},0).wait(1).to({x:380.1},0).wait(1).to({x:379.7},0).wait(1).to({x:379.2},0).wait(1).to({x:378.8},0).wait(1).to({x:378.3},0).wait(1).to({x:377.8},0).wait(1).to({x:377.4},0).wait(1).to({x:376.9},0).wait(1).to({x:376.4},0).wait(1).to({x:376},0).wait(1).to({x:375.5},0).wait(1).to({x:375.1},0).wait(1).to({x:374.6},0).wait(1).to({x:374.1},0).wait(1).to({x:373.7},0).wait(1).to({x:373.2},0).wait(1).to({x:372.7},0).wait(1).to({x:372.3},0).wait(1).to({x:371.8},0).wait(1).to({x:371.4},0).wait(1).to({x:370.9},0).wait(1).to({x:370.4},0).wait(1).to({x:370},0).wait(1).to({x:369.5},0).wait(1).to({x:369},0).wait(1).to({x:368.6},0).wait(1).to({x:368.1},0).wait(1).to({x:367.7},0).wait(1).to({x:367.2},0).wait(1).to({x:366.7},0).wait(1).to({x:366.3},0).wait(1).to({x:365.8},0).wait(1).to({x:365.4},0).wait(1).to({x:364.9},0).wait(1).to({x:364.4},0).wait(1).to({x:364},0).wait(1).to({x:363.5},0).wait(1).to({x:363},0).wait(1).to({x:362.6},0).wait(1).to({x:362.1,alpha:0.983},0).wait(1).to({x:361.7,alpha:0.966},0).wait(1).to({x:361.2,alpha:0.949},0).wait(1).to({x:360.7,alpha:0.932},0).wait(1).to({x:360.3,alpha:0.915},0).wait(1).to({x:359.8,alpha:0.898},0).wait(1).to({x:359.3,alpha:0.881},0).wait(1).to({x:358.9,alpha:0.864},0).wait(1).to({x:358.4,alpha:0.847},0).wait(1).to({x:358,alpha:0.831},0).wait(1).to({x:357.5,alpha:0.814},0).wait(1).to({x:357,alpha:0.797},0).wait(1).to({x:356.6,alpha:0.78},0).wait(1).to({x:356.1,alpha:0.763},0).wait(1).to({x:355.6,alpha:0.746},0).wait(1).to({x:355.2,alpha:0.729},0).wait(1).to({x:354.7,alpha:0.712},0).wait(1).to({x:354.3,alpha:0.695},0).wait(1).to({x:353.8,alpha:0.678},0).wait(1).to({x:353.3,alpha:0.661},0).wait(1).to({x:352.9,alpha:0.644},0).wait(1).to({x:352.4,alpha:0.627},0).wait(1).to({x:351.9,alpha:0.61},0).wait(1).to({x:351.5,alpha:0.593},0).wait(1).to({x:351,alpha:0.576},0).wait(1).to({x:350.6,alpha:0.559},0).wait(1).to({x:350.1,alpha:0.542},0).wait(1).to({x:349.6,alpha:0.525},0).wait(1).to({x:349.2,alpha:0.508},0).wait(1).to({x:348.7,alpha:0.492},0).wait(1).to({x:348.2,alpha:0.475},0).wait(1).to({x:347.8,alpha:0.458},0).wait(1).to({x:347.3,alpha:0.441},0).wait(1).to({x:346.9,alpha:0.424},0).wait(1).to({x:346.4,alpha:0.407},0).wait(1).to({x:345.9,alpha:0.39},0).wait(1).to({x:345.5,alpha:0.373},0).wait(1).to({x:345,alpha:0.356},0).wait(1).to({x:344.5,alpha:0.339},0).wait(1).to({x:344.1,alpha:0.322},0).wait(1).to({x:343.6,alpha:0.305},0).wait(1).to({x:343.2,alpha:0.288},0).wait(1).to({x:342.7,alpha:0.271},0).wait(1).to({x:342.2,alpha:0.254},0).wait(1).to({x:341.8,alpha:0.237},0).wait(1).to({x:341.3,alpha:0.22},0).wait(1).to({x:340.8,alpha:0.203},0).wait(1).to({x:340.4,alpha:0.186},0).wait(1).to({x:339.9,alpha:0.169},0).wait(1).to({x:339.5,alpha:0.153},0).wait(1).to({x:339,alpha:0.136},0).wait(1).to({x:338.5,alpha:0.119},0).wait(1).to({x:338.1,alpha:0.102},0).wait(1).to({x:337.6,alpha:0.085},0).wait(1).to({x:337.1,alpha:0.068},0).wait(1).to({x:336.7,alpha:0.051},0).wait(1).to({x:336.2,alpha:0.034},0).wait(1).to({x:335.8,alpha:0.017},0).wait(1).to({x:335.3,alpha:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol3_1();
	this.instance_1.setTransform(250.5,113.1,1,1,0,0,0,203,22);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:211,regY:28.5,x:259,y:119.6,alpha:0.014},0).wait(1).to({x:259.5,alpha:0.027},0).wait(1).to({x:260,alpha:0.041},0).wait(1).to({x:260.5,alpha:0.054},0).wait(1).to({x:261,alpha:0.068},0).wait(1).to({x:261.5,alpha:0.081},0).wait(1).to({x:262,alpha:0.095},0).wait(1).to({x:262.5,alpha:0.108},0).wait(1).to({x:263,alpha:0.122},0).wait(1).to({x:263.5,alpha:0.135},0).wait(1).to({x:264,alpha:0.149},0).wait(1).to({x:264.5,alpha:0.162},0).wait(1).to({x:265,alpha:0.176},0).wait(1).to({x:265.5,alpha:0.189},0).wait(1).to({x:266,alpha:0.203},0).wait(1).to({x:266.5,alpha:0.216},0).wait(1).to({x:267,alpha:0.23},0).wait(1).to({x:267.5,alpha:0.243},0).wait(1).to({x:268,alpha:0.257},0).wait(1).to({x:268.6,alpha:0.27},0).wait(1).to({x:269.1,alpha:0.284},0).wait(1).to({x:269.6,alpha:0.297},0).wait(1).to({x:270.1,alpha:0.311},0).wait(1).to({x:270.6,alpha:0.324},0).wait(1).to({x:271.1,alpha:0.338},0).wait(1).to({x:271.6,alpha:0.351},0).wait(1).to({x:272.1,alpha:0.365},0).wait(1).to({x:272.6,alpha:0.378},0).wait(1).to({x:273.1,alpha:0.392},0).wait(1).to({x:273.6,alpha:0.405},0).wait(1).to({x:274.1,alpha:0.419},0).wait(1).to({x:274.6,alpha:0.432},0).wait(1).to({x:275.1,alpha:0.446},0).wait(1).to({x:275.6,alpha:0.459},0).wait(1).to({x:276.1,alpha:0.473},0).wait(1).to({x:276.6,alpha:0.486},0).wait(1).to({x:277.1,alpha:0.5},0).wait(1).to({x:277.6,alpha:0.514},0).wait(1).to({x:278.1,alpha:0.527},0).wait(1).to({x:278.6,alpha:0.541},0).wait(1).to({x:279.1,alpha:0.554},0).wait(1).to({x:279.6,alpha:0.568},0).wait(1).to({x:280.1,alpha:0.581},0).wait(1).to({x:280.6,alpha:0.595},0).wait(1).to({x:281.1,alpha:0.608},0).wait(1).to({x:281.6,alpha:0.622},0).wait(1).to({x:282.1,alpha:0.635},0).wait(1).to({x:282.6,alpha:0.649},0).wait(1).to({x:283.1,alpha:0.662},0).wait(1).to({x:283.6,alpha:0.676},0).wait(1).to({x:284.1,alpha:0.689},0).wait(1).to({x:284.6,alpha:0.703},0).wait(1).to({x:285.1,alpha:0.716},0).wait(1).to({x:285.6,alpha:0.73},0).wait(1).to({x:286.1,alpha:0.743},0).wait(1).to({x:286.6,alpha:0.757},0).wait(1).to({x:287.1,alpha:0.77},0).wait(1).to({x:287.6,alpha:0.784},0).wait(1).to({x:288.1,alpha:0.797},0).wait(1).to({x:288.7,alpha:0.811},0).wait(1).to({x:289.2,alpha:0.824},0).wait(1).to({x:289.7,alpha:0.838},0).wait(1).to({x:290.2,alpha:0.851},0).wait(1).to({x:290.7,alpha:0.865},0).wait(1).to({x:291.2,alpha:0.878},0).wait(1).to({x:291.7,alpha:0.892},0).wait(1).to({x:292.2,alpha:0.905},0).wait(1).to({x:292.7,alpha:0.919},0).wait(1).to({x:293.2,alpha:0.932},0).wait(1).to({x:293.7,alpha:0.946},0).wait(1).to({x:294.2,alpha:0.959},0).wait(1).to({x:294.7,alpha:0.973},0).wait(1).to({x:295.2,alpha:0.986},0).wait(1).to({x:295.7,alpha:1},0).wait(1).to({x:296.2},0).wait(1).to({x:296.7},0).wait(1).to({x:297.2},0).wait(1).to({x:297.7},0).wait(1).to({x:298.2},0).wait(1).to({x:298.7},0).wait(1).to({x:299.2},0).wait(1).to({x:299.7},0).wait(1).to({x:300.2},0).wait(1).to({x:300.7},0).wait(1).to({x:301.2},0).wait(1).to({x:301.7},0).wait(1).to({x:302.2},0).wait(1).to({x:302.7},0).wait(1).to({x:303.2},0).wait(1).to({x:303.7},0).wait(1).to({x:304.2},0).wait(1).to({x:304.7},0).wait(1).to({x:305.2},0).wait(1).to({x:305.7},0).wait(1).to({x:306.2},0).wait(1).to({x:306.7},0).wait(1).to({x:307.2},0).wait(1).to({x:307.7},0).wait(1).to({x:308.2},0).wait(1).to({x:308.8},0).wait(1).to({x:309.3},0).wait(1).to({x:309.8},0).wait(1).to({x:310.3},0).wait(1).to({x:310.8},0).wait(1).to({x:311.3},0).wait(1).to({x:311.8},0).wait(1).to({x:312.3},0).wait(1).to({x:312.8},0).wait(1).to({x:313.3},0).wait(1).to({x:313.8},0).wait(1).to({x:314.3},0).wait(1).to({x:314.8},0).wait(1).to({x:315.3},0).wait(1).to({x:315.8},0).wait(1).to({x:316.3},0).wait(1).to({x:316.8},0).wait(1).to({x:317.3},0).wait(1).to({x:317.8},0).wait(1).to({x:318.3},0).wait(1).to({x:318.8},0).wait(1).to({x:319.3},0).wait(1).to({x:319.8},0).wait(1).to({x:320.3},0).wait(1).to({x:320.8},0).wait(1).to({x:321.3},0).wait(1).to({x:321.8},0).wait(1).to({x:322.3},0).wait(1).to({x:322.8},0).wait(1).to({x:323.3},0).wait(1).to({x:323.8},0).wait(1).to({x:324.3},0).wait(1).to({x:324.8},0).wait(1).to({x:325.3},0).wait(1).to({x:325.8},0).wait(1).to({x:326.3},0).wait(1).to({x:326.8},0).wait(1).to({x:327.3},0).wait(1).to({x:327.8},0).wait(1).to({x:328.3},0).wait(1).to({x:328.9},0).wait(1).to({x:329.4,alpha:0.983},0).wait(1).to({x:329.9,alpha:0.966},0).wait(1).to({x:330.4,alpha:0.949},0).wait(1).to({x:330.9,alpha:0.932},0).wait(1).to({x:331.4,alpha:0.915},0).wait(1).to({x:331.9,alpha:0.898},0).wait(1).to({x:332.4,alpha:0.881},0).wait(1).to({x:332.9,alpha:0.864},0).wait(1).to({x:333.4,alpha:0.847},0).wait(1).to({x:333.9,alpha:0.831},0).wait(1).to({x:334.4,alpha:0.814},0).wait(1).to({x:334.9,alpha:0.797},0).wait(1).to({x:335.4,alpha:0.78},0).wait(1).to({x:335.9,alpha:0.763},0).wait(1).to({x:336.4,alpha:0.746},0).wait(1).to({x:336.9,alpha:0.729},0).wait(1).to({x:337.4,alpha:0.712},0).wait(1).to({x:337.9,alpha:0.695},0).wait(1).to({x:338.4,alpha:0.678},0).wait(1).to({x:338.9,alpha:0.661},0).wait(1).to({x:339.4,alpha:0.644},0).wait(1).to({x:339.9,alpha:0.627},0).wait(1).to({x:340.4,alpha:0.61},0).wait(1).to({x:340.9,alpha:0.593},0).wait(1).to({x:341.4,alpha:0.576},0).wait(1).to({x:341.9,alpha:0.559},0).wait(1).to({x:342.4,alpha:0.542},0).wait(1).to({x:342.9,alpha:0.525},0).wait(1).to({x:343.4,alpha:0.508},0).wait(1).to({x:343.9,alpha:0.492},0).wait(1).to({x:344.4,alpha:0.475},0).wait(1).to({x:344.9,alpha:0.458},0).wait(1).to({x:345.4,alpha:0.441},0).wait(1).to({x:345.9,alpha:0.424},0).wait(1).to({x:346.4,alpha:0.407},0).wait(1).to({x:346.9,alpha:0.39},0).wait(1).to({x:347.4,alpha:0.373},0).wait(1).to({x:347.9,alpha:0.356},0).wait(1).to({x:348.4,alpha:0.339},0).wait(1).to({x:349,alpha:0.322},0).wait(1).to({x:349.5,alpha:0.305},0).wait(1).to({x:350,alpha:0.288},0).wait(1).to({x:350.5,alpha:0.271},0).wait(1).to({x:351,alpha:0.254},0).wait(1).to({x:351.5,alpha:0.237},0).wait(1).to({x:352,alpha:0.22},0).wait(1).to({x:352.5,alpha:0.203},0).wait(1).to({x:353,alpha:0.186},0).wait(1).to({x:353.5,alpha:0.169},0).wait(1).to({x:354,alpha:0.153},0).wait(1).to({x:354.5,alpha:0.136},0).wait(1).to({x:355,alpha:0.119},0).wait(1).to({x:355.5,alpha:0.102},0).wait(1).to({x:356,alpha:0.085},0).wait(1).to({x:356.5,alpha:0.068},0).wait(1).to({x:357,alpha:0.051},0).wait(1).to({x:357.5,alpha:0.034},0).wait(1).to({x:358,alpha:0.017},0).wait(1).to({x:358.5,alpha:0},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol1copy();
	this.instance_2.setTransform(339.6,428.7,1,1,0,0,0,329.6,208.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:310,regY:310,x:320,y:530.5,alpha:0.014},0).wait(1).to({x:320.1,y:531,alpha:0.027},0).wait(1).to({y:531.5,alpha:0.041},0).wait(1).to({y:532.1,alpha:0.054},0).wait(1).to({x:320.2,y:532.6,alpha:0.068},0).wait(1).to({y:533.1,alpha:0.081},0).wait(1).to({x:320.3,y:533.6,alpha:0.095},0).wait(1).to({y:534.1,alpha:0.108},0).wait(1).to({y:534.6,alpha:0.122},0).wait(1).to({x:320.4,y:535.1,alpha:0.135},0).wait(1).to({y:535.6,alpha:0.149},0).wait(1).to({y:536.2,alpha:0.162},0).wait(1).to({x:320.5,y:536.7,alpha:0.176},0).wait(1).to({y:537.2,alpha:0.189},0).wait(1).to({x:320.6,y:537.7,alpha:0.203},0).wait(1).to({y:538.2,alpha:0.216},0).wait(1).to({y:538.7,alpha:0.23},0).wait(1).to({x:320.7,y:539.2,alpha:0.243},0).wait(1).to({y:539.8,alpha:0.257},0).wait(1).to({y:540.3,alpha:0.27},0).wait(1).to({x:320.8,y:540.8,alpha:0.284},0).wait(1).to({y:541.3,alpha:0.297},0).wait(1).to({x:320.9,y:541.8,alpha:0.311},0).wait(1).to({y:542.3,alpha:0.324},0).wait(1).to({y:542.8,alpha:0.338},0).wait(1).to({x:321,y:543.3,alpha:0.351},0).wait(1).to({y:543.9,alpha:0.365},0).wait(1).to({y:544.4,alpha:0.378},0).wait(1).to({x:321.1,y:544.9,alpha:0.392},0).wait(1).to({y:545.4,alpha:0.405},0).wait(1).to({y:545.9,alpha:0.419},0).wait(1).to({x:321.2,y:546.4,alpha:0.432},0).wait(1).to({y:546.9,alpha:0.446},0).wait(1).to({x:321.3,y:547.5,alpha:0.459},0).wait(1).to({y:548,alpha:0.473},0).wait(1).to({y:548.5,alpha:0.486},0).wait(1).to({x:321.4,y:549,alpha:0.5},0).wait(1).to({y:549.5,alpha:0.514},0).wait(1).to({y:550,alpha:0.527},0).wait(1).to({x:321.5,y:550.5,alpha:0.541},0).wait(1).to({y:551,alpha:0.554},0).wait(1).to({x:321.6,y:551.6,alpha:0.568},0).wait(1).to({y:552.1,alpha:0.581},0).wait(1).to({y:552.6,alpha:0.595},0).wait(1).to({x:321.7,y:553.1,alpha:0.608},0).wait(1).to({y:553.6,alpha:0.622},0).wait(1).to({y:554.1,alpha:0.635},0).wait(1).to({x:321.8,y:554.6,alpha:0.649},0).wait(1).to({y:555.2,alpha:0.662},0).wait(1).to({x:321.9,y:555.7,alpha:0.676},0).wait(1).to({y:556.2,alpha:0.689},0).wait(1).to({y:556.7,alpha:0.703},0).wait(1).to({x:322,y:557.2,alpha:0.716},0).wait(1).to({y:557.7,alpha:0.73},0).wait(1).to({y:558.2,alpha:0.743},0).wait(1).to({x:322.1,y:558.7,alpha:0.757},0).wait(1).to({y:559.3,alpha:0.77},0).wait(1).to({x:322.2,y:559.8,alpha:0.784},0).wait(1).to({y:560.3,alpha:0.797},0).wait(1).to({y:560.8,alpha:0.811},0).wait(1).to({x:322.3,y:561.3,alpha:0.824},0).wait(1).to({y:561.8,alpha:0.838},0).wait(1).to({y:562.3,alpha:0.851},0).wait(1).to({x:322.4,y:562.9,alpha:0.865},0).wait(1).to({y:563.4,alpha:0.878},0).wait(1).to({y:563.9,alpha:0.892},0).wait(1).to({x:322.5,y:564.4,alpha:0.905},0).wait(1).to({y:564.9,alpha:0.919},0).wait(1).to({x:322.6,y:565.4,alpha:0.932},0).wait(1).to({y:565.9,alpha:0.946},0).wait(1).to({y:566.4,alpha:0.959},0).wait(1).to({x:322.7,y:567,alpha:0.973},0).wait(1).to({y:567.5,alpha:0.986},0).wait(1).to({y:568,alpha:1},0).wait(1).to({y:568.6},0).wait(1).to({y:569.1},0).wait(1).to({y:569.7},0).wait(1).to({y:570.3},0).wait(1).to({x:322.6,y:570.9},0).wait(1).to({y:571.4},0).wait(1).to({y:572},0).wait(1).to({y:572.6},0).wait(1).to({y:573.1},0).wait(1).to({x:322.5,y:573.7},0).wait(1).to({y:574.3},0).wait(1).to({y:574.9},0).wait(1).to({y:575.4},0).wait(1).to({y:576},0).wait(1).to({x:322.4,y:576.6},0).wait(1).to({y:577.2},0).wait(1).to({y:577.7},0).wait(1).to({y:578.3},0).wait(1).to({y:578.9},0).wait(1).to({x:322.3,y:579.5},0).wait(1).to({y:580},0).wait(1).to({y:580.6},0).wait(1).to({y:581.2},0).wait(1).to({y:581.7},0).wait(1).to({x:322.2,y:582.3},0).wait(1).to({y:582.9},0).wait(1).to({y:583.5},0).wait(1).to({y:584},0).wait(1).to({y:584.6},0).wait(1).to({x:322.1,y:585.2},0).wait(1).to({y:585.8},0).wait(1).to({y:586.3},0).wait(1).to({y:586.9},0).wait(1).to({y:587.5},0).wait(1).to({x:322,y:588},0).wait(1).to({y:588.6},0).wait(1).to({y:589.2},0).wait(1).to({y:589.8},0).wait(1).to({y:590.3},0).wait(1).to({x:321.9,y:590.9},0).wait(1).to({y:591.5},0).wait(1).to({y:592.1},0).wait(1).to({y:592.6},0).wait(1).to({y:593.2},0).wait(1).to({x:321.8,y:593.8},0).wait(1).to({y:594.4},0).wait(1).to({y:594.9},0).wait(1).to({y:595.5},0).wait(1).to({y:596.1},0).wait(1).to({x:321.7,y:596.6},0).wait(1).to({y:597.2},0).wait(1).to({y:597.8},0).wait(1).to({y:598.4},0).wait(1).to({y:598.9},0).wait(1).to({x:321.6,y:599.5},0).wait(1).to({y:600.1},0).wait(1).to({y:600.7},0).wait(1).to({y:601.2},0).wait(1).to({x:321.5,y:601.8},0).wait(1).to({y:602.4},0).wait(1).to({y:602.9},0).wait(1).to({y:603.5},0).wait(1).to({y:604.1},0).wait(1).to({x:321.4,y:604.7},0).wait(1).to({y:605.2},0).wait(1).to({y:605.8},0).wait(1).to({y:606.1,alpha:0.983},0).wait(1).to({y:606.3,alpha:0.966},0).wait(1).to({y:606.5,alpha:0.949},0).wait(1).to({y:606.8,alpha:0.932},0).wait(1).to({x:321.5,y:607,alpha:0.915},0).wait(1).to({y:607.2,alpha:0.898},0).wait(1).to({y:607.5,alpha:0.881},0).wait(1).to({y:607.7,alpha:0.864},0).wait(1).to({y:607.9,alpha:0.847},0).wait(1).to({y:608.2,alpha:0.831},0).wait(1).to({y:608.4,alpha:0.814},0).wait(1).to({y:608.6,alpha:0.797},0).wait(1).to({y:608.9,alpha:0.78},0).wait(1).to({y:609.1,alpha:0.763},0).wait(1).to({x:321.6,y:609.4,alpha:0.746},0).wait(1).to({y:609.6,alpha:0.729},0).wait(1).to({y:609.8,alpha:0.712},0).wait(1).to({y:610.1,alpha:0.695},0).wait(1).to({y:610.3,alpha:0.678},0).wait(1).to({y:610.5,alpha:0.661},0).wait(1).to({y:610.8,alpha:0.644},0).wait(1).to({y:611,alpha:0.627},0).wait(1).to({y:611.2,alpha:0.61},0).wait(1).to({y:611.5,alpha:0.593},0).wait(1).to({x:321.7,y:611.7,alpha:0.576},0).wait(1).to({y:612,alpha:0.559},0).wait(1).to({y:612.2,alpha:0.542},0).wait(1).to({y:612.4,alpha:0.525},0).wait(1).to({y:612.7,alpha:0.508},0).wait(1).to({y:612.9,alpha:0.492},0).wait(1).to({y:613.1,alpha:0.475},0).wait(1).to({y:613.4,alpha:0.458},0).wait(1).to({y:613.6,alpha:0.441},0).wait(1).to({y:613.8,alpha:0.424},0).wait(1).to({x:321.8,y:614.1,alpha:0.407},0).wait(1).to({y:614.3,alpha:0.39},0).wait(1).to({y:614.6,alpha:0.373},0).wait(1).to({y:614.8,alpha:0.356},0).wait(1).to({y:615,alpha:0.339},0).wait(1).to({y:615.3,alpha:0.322},0).wait(1).to({y:615.5,alpha:0.305},0).wait(1).to({y:615.7,alpha:0.288},0).wait(1).to({y:616,alpha:0.271},0).wait(1).to({y:616.2,alpha:0.254},0).wait(1).to({x:321.9,y:616.4,alpha:0.237},0).wait(1).to({y:616.7,alpha:0.22},0).wait(1).to({y:616.9,alpha:0.203},0).wait(1).to({y:617.2,alpha:0.186},0).wait(1).to({y:617.4,alpha:0.169},0).wait(1).to({y:617.6,alpha:0.153},0).wait(1).to({y:617.9,alpha:0.136},0).wait(1).to({y:618.1,alpha:0.119},0).wait(1).to({y:618.3,alpha:0.102},0).wait(1).to({y:618.6,alpha:0.085},0).wait(1).to({x:322,y:618.8,alpha:0.068},0).wait(1).to({y:619,alpha:0.051},0).wait(1).to({y:619.3,alpha:0.034},0).wait(1).to({y:619.5,alpha:0.017},0).wait(1).to({y:619.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.5,91.1,571.8,727);


(lib.MC_cadenas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"opened":1,"closed":199});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.dispatchEvent("opened");
	}
	this.frame_199 = function() {
		this.dispatchEvent("closed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(1));

	// text
	this.instance = new lib.Symbol2_2();
	this.instance.setTransform(211,180,1,1,0,0,0,89,22);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:92.5,regY:28.5,x:215,y:186.5,alpha:0.014},0).wait(1).to({x:215.5,alpha:0.027},0).wait(1).to({x:216,alpha:0.041},0).wait(1).to({x:216.5,alpha:0.054},0).wait(1).to({x:217,alpha:0.068},0).wait(1).to({x:217.5,alpha:0.081},0).wait(1).to({x:218,alpha:0.095},0).wait(1).to({x:218.5,alpha:0.108},0).wait(1).to({x:219,alpha:0.122},0).wait(1).to({x:219.5,alpha:0.135},0).wait(1).to({x:220,alpha:0.149},0).wait(1).to({x:220.5,alpha:0.162},0).wait(1).to({x:221,alpha:0.176},0).wait(1).to({x:221.5,alpha:0.189},0).wait(1).to({x:222,alpha:0.203},0).wait(1).to({x:222.5,alpha:0.216},0).wait(1).to({x:223,alpha:0.23},0).wait(1).to({x:223.5,alpha:0.243},0).wait(1).to({x:224,alpha:0.257},0).wait(1).to({x:224.6,alpha:0.27},0).wait(1).to({x:225.1,alpha:0.284},0).wait(1).to({x:225.6,alpha:0.297},0).wait(1).to({x:226.1,alpha:0.311},0).wait(1).to({x:226.6,alpha:0.324},0).wait(1).to({x:227.1,alpha:0.338},0).wait(1).to({x:227.6,alpha:0.351},0).wait(1).to({x:228.1,alpha:0.365},0).wait(1).to({x:228.6,alpha:0.378},0).wait(1).to({x:229.1,alpha:0.392},0).wait(1).to({x:229.6,alpha:0.405},0).wait(1).to({x:230.1,alpha:0.419},0).wait(1).to({x:230.6,alpha:0.432},0).wait(1).to({x:231.1,alpha:0.446},0).wait(1).to({x:231.6,alpha:0.459},0).wait(1).to({x:232.1,alpha:0.473},0).wait(1).to({x:232.6,alpha:0.486},0).wait(1).to({x:233.1,alpha:0.5},0).wait(1).to({x:233.6,alpha:0.514},0).wait(1).to({x:234.1,alpha:0.527},0).wait(1).to({x:234.6,alpha:0.541},0).wait(1).to({x:235.1,alpha:0.554},0).wait(1).to({x:235.6,alpha:0.568},0).wait(1).to({x:236.1,alpha:0.581},0).wait(1).to({x:236.6,alpha:0.595},0).wait(1).to({x:237.1,alpha:0.608},0).wait(1).to({x:237.6,alpha:0.622},0).wait(1).to({x:238.1,alpha:0.635},0).wait(1).to({x:238.6,alpha:0.649},0).wait(1).to({x:239.1,alpha:0.662},0).wait(1).to({x:239.6,alpha:0.676},0).wait(1).to({x:240.1,alpha:0.689},0).wait(1).to({x:240.6,alpha:0.703},0).wait(1).to({x:241.1,alpha:0.716},0).wait(1).to({x:241.6,alpha:0.73},0).wait(1).to({x:242.1,alpha:0.743},0).wait(1).to({x:242.6,alpha:0.757},0).wait(1).to({x:243.1,alpha:0.77},0).wait(1).to({x:243.6,alpha:0.784},0).wait(1).to({x:244.1,alpha:0.797},0).wait(1).to({x:244.7,alpha:0.811},0).wait(1).to({x:245.2,alpha:0.824},0).wait(1).to({x:245.7,alpha:0.838},0).wait(1).to({x:246.2,alpha:0.851},0).wait(1).to({x:246.7,alpha:0.865},0).wait(1).to({x:247.2,alpha:0.878},0).wait(1).to({x:247.7,alpha:0.892},0).wait(1).to({x:248.2,alpha:0.905},0).wait(1).to({x:248.7,alpha:0.919},0).wait(1).to({x:249.2,alpha:0.932},0).wait(1).to({x:249.7,alpha:0.946},0).wait(1).to({x:250.2,alpha:0.959},0).wait(1).to({x:250.7,alpha:0.973},0).wait(1).to({x:251.2,alpha:0.986},0).wait(1).to({x:251.7,alpha:1},0).wait(1).to({x:252.2},0).wait(1).to({x:252.7},0).wait(1).to({x:253.2},0).wait(1).to({x:253.7},0).wait(1).to({x:254.2},0).wait(1).to({x:254.7},0).wait(1).to({x:255.2},0).wait(1).to({x:255.7},0).wait(1).to({x:256.2},0).wait(1).to({x:256.7},0).wait(1).to({x:257.2},0).wait(1).to({x:257.7},0).wait(1).to({x:258.2},0).wait(1).to({x:258.7},0).wait(1).to({x:259.2},0).wait(1).to({x:259.7},0).wait(1).to({x:260.2},0).wait(1).to({x:260.7},0).wait(1).to({x:261.2},0).wait(1).to({x:261.7},0).wait(1).to({x:262.2},0).wait(1).to({x:262.7},0).wait(1).to({x:263.2},0).wait(1).to({x:263.7},0).wait(1).to({x:264.2},0).wait(1).to({x:264.8},0).wait(1).to({x:265.3},0).wait(1).to({x:265.8},0).wait(1).to({x:266.3},0).wait(1).to({x:266.8},0).wait(1).to({x:267.3},0).wait(1).to({x:267.8},0).wait(1).to({x:268.3},0).wait(1).to({x:268.8},0).wait(1).to({x:269.3},0).wait(1).to({x:269.8},0).wait(1).to({x:270.3},0).wait(1).to({x:270.8},0).wait(1).to({x:271.3},0).wait(1).to({x:271.8},0).wait(1).to({x:272.3},0).wait(1).to({x:272.8},0).wait(1).to({x:273.3},0).wait(1).to({x:273.8},0).wait(1).to({x:274.3},0).wait(1).to({x:274.8},0).wait(1).to({x:275.3},0).wait(1).to({x:275.8},0).wait(1).to({x:276.3},0).wait(1).to({x:276.8},0).wait(1).to({x:277.3},0).wait(1).to({x:277.8},0).wait(1).to({x:278.3},0).wait(1).to({x:278.8},0).wait(1).to({x:279.3},0).wait(1).to({x:279.8},0).wait(1).to({x:280.3},0).wait(1).to({x:280.8},0).wait(1).to({x:281.3},0).wait(1).to({x:281.8},0).wait(1).to({x:282.3},0).wait(1).to({x:282.8},0).wait(1).to({x:283.3},0).wait(1).to({x:283.8},0).wait(1).to({x:284.3},0).wait(1).to({x:284.9},0).wait(1).to({x:285.4,alpha:0.983},0).wait(1).to({x:285.9,alpha:0.966},0).wait(1).to({x:286.4,alpha:0.949},0).wait(1).to({x:286.9,alpha:0.932},0).wait(1).to({x:287.4,alpha:0.915},0).wait(1).to({x:287.9,alpha:0.898},0).wait(1).to({x:288.4,alpha:0.881},0).wait(1).to({x:288.9,alpha:0.864},0).wait(1).to({x:289.4,alpha:0.847},0).wait(1).to({x:289.9,alpha:0.831},0).wait(1).to({x:290.4,alpha:0.814},0).wait(1).to({x:290.9,alpha:0.797},0).wait(1).to({x:291.4,alpha:0.78},0).wait(1).to({x:291.9,alpha:0.763},0).wait(1).to({x:292.4,alpha:0.746},0).wait(1).to({x:292.9,alpha:0.729},0).wait(1).to({x:293.4,alpha:0.712},0).wait(1).to({x:293.9,alpha:0.695},0).wait(1).to({x:294.4,alpha:0.678},0).wait(1).to({x:294.9,alpha:0.661},0).wait(1).to({x:295.4,alpha:0.644},0).wait(1).to({x:295.9,alpha:0.627},0).wait(1).to({x:296.4,alpha:0.61},0).wait(1).to({x:296.9,alpha:0.593},0).wait(1).to({x:297.4,alpha:0.576},0).wait(1).to({x:297.9,alpha:0.559},0).wait(1).to({x:298.4,alpha:0.542},0).wait(1).to({x:298.9,alpha:0.525},0).wait(1).to({x:299.4,alpha:0.508},0).wait(1).to({x:299.9,alpha:0.492},0).wait(1).to({x:300.4,alpha:0.475},0).wait(1).to({x:300.9,alpha:0.458},0).wait(1).to({x:301.4,alpha:0.441},0).wait(1).to({x:301.9,alpha:0.424},0).wait(1).to({x:302.4,alpha:0.407},0).wait(1).to({x:302.9,alpha:0.39},0).wait(1).to({x:303.4,alpha:0.373},0).wait(1).to({x:303.9,alpha:0.356},0).wait(1).to({x:304.4,alpha:0.339},0).wait(1).to({x:305,alpha:0.322},0).wait(1).to({x:305.5,alpha:0.305},0).wait(1).to({x:306,alpha:0.288},0).wait(1).to({x:306.5,alpha:0.271},0).wait(1).to({x:307,alpha:0.254},0).wait(1).to({x:307.5,alpha:0.237},0).wait(1).to({x:308,alpha:0.22},0).wait(1).to({x:308.5,alpha:0.203},0).wait(1).to({x:309,alpha:0.186},0).wait(1).to({x:309.5,alpha:0.169},0).wait(1).to({x:310,alpha:0.153},0).wait(1).to({x:310.5,alpha:0.136},0).wait(1).to({x:311,alpha:0.119},0).wait(1).to({x:311.5,alpha:0.102},0).wait(1).to({x:312,alpha:0.085},0).wait(1).to({x:312.5,alpha:0.068},0).wait(1).to({x:313,alpha:0.051},0).wait(1).to({x:313.5,alpha:0.034},0).wait(1).to({x:314,alpha:0.017},0).wait(1).to({x:314.5,alpha:0},0).wait(1));

	// text2
	this.instance_1 = new lib.Symbol1_2();
	this.instance_1.setTransform(413,230,1,1,0,0,0,177,19);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:154,regY:28.5,x:389.5,y:239.5,alpha:0.014},0).wait(1).to({x:389.1,alpha:0.027},0).wait(1).to({x:388.6,alpha:0.041},0).wait(1).to({x:388.2,alpha:0.054},0).wait(1).to({x:387.7,alpha:0.068},0).wait(1).to({x:387.2,alpha:0.081},0).wait(1).to({x:386.8,alpha:0.095},0).wait(1).to({x:386.3,alpha:0.108},0).wait(1).to({x:385.8,alpha:0.122},0).wait(1).to({x:385.4,alpha:0.135},0).wait(1).to({x:384.9,alpha:0.149},0).wait(1).to({x:384.5,alpha:0.162},0).wait(1).to({x:384,alpha:0.176},0).wait(1).to({x:383.5,alpha:0.189},0).wait(1).to({x:383.1,alpha:0.203},0).wait(1).to({x:382.6,alpha:0.216},0).wait(1).to({x:382.1,alpha:0.23},0).wait(1).to({x:381.7,alpha:0.243},0).wait(1).to({x:381.2,alpha:0.257},0).wait(1).to({x:380.8,alpha:0.27},0).wait(1).to({x:380.3,alpha:0.284},0).wait(1).to({x:379.8,alpha:0.297},0).wait(1).to({x:379.4,alpha:0.311},0).wait(1).to({x:378.9,alpha:0.324},0).wait(1).to({x:378.4,alpha:0.338},0).wait(1).to({x:378,alpha:0.351},0).wait(1).to({x:377.5,alpha:0.365},0).wait(1).to({x:377.1,alpha:0.378},0).wait(1).to({x:376.6,alpha:0.392},0).wait(1).to({x:376.1,alpha:0.405},0).wait(1).to({x:375.7,alpha:0.419},0).wait(1).to({x:375.2,alpha:0.432},0).wait(1).to({x:374.7,alpha:0.446},0).wait(1).to({x:374.3,alpha:0.459},0).wait(1).to({x:373.8,alpha:0.473},0).wait(1).to({x:373.4,alpha:0.486},0).wait(1).to({x:372.9,alpha:0.5},0).wait(1).to({x:372.4,alpha:0.514},0).wait(1).to({x:372,alpha:0.527},0).wait(1).to({x:371.5,alpha:0.541},0).wait(1).to({x:371,alpha:0.554},0).wait(1).to({x:370.6,alpha:0.568},0).wait(1).to({x:370.1,alpha:0.581},0).wait(1).to({x:369.7,alpha:0.595},0).wait(1).to({x:369.2,alpha:0.608},0).wait(1).to({x:368.7,alpha:0.622},0).wait(1).to({x:368.3,alpha:0.635},0).wait(1).to({x:367.8,alpha:0.649},0).wait(1).to({x:367.3,alpha:0.662},0).wait(1).to({x:366.9,alpha:0.676},0).wait(1).to({x:366.4,alpha:0.689},0).wait(1).to({x:366,alpha:0.703},0).wait(1).to({x:365.5,alpha:0.716},0).wait(1).to({x:365,alpha:0.73},0).wait(1).to({x:364.6,alpha:0.743},0).wait(1).to({x:364.1,alpha:0.757},0).wait(1).to({x:363.6,alpha:0.77},0).wait(1).to({x:363.2,alpha:0.784},0).wait(1).to({x:362.7,alpha:0.797},0).wait(1).to({x:362.3,alpha:0.811},0).wait(1).to({x:361.8,alpha:0.824},0).wait(1).to({x:361.3,alpha:0.838},0).wait(1).to({x:360.9,alpha:0.851},0).wait(1).to({x:360.4,alpha:0.865},0).wait(1).to({x:359.9,alpha:0.878},0).wait(1).to({x:359.5,alpha:0.892},0).wait(1).to({x:359,alpha:0.905},0).wait(1).to({x:358.6,alpha:0.919},0).wait(1).to({x:358.1,alpha:0.932},0).wait(1).to({x:357.6,alpha:0.946},0).wait(1).to({x:357.2,alpha:0.959},0).wait(1).to({x:356.7,alpha:0.973},0).wait(1).to({x:356.3,alpha:0.986},0).wait(1).to({x:355.8,alpha:1},0).wait(1).to({x:355.3},0).wait(1).to({x:354.9},0).wait(1).to({x:354.4},0).wait(1).to({x:353.9},0).wait(1).to({x:353.5},0).wait(1).to({x:353},0).wait(1).to({x:352.6},0).wait(1).to({x:352.1},0).wait(1).to({x:351.6},0).wait(1).to({x:351.2},0).wait(1).to({x:350.7},0).wait(1).to({x:350.2},0).wait(1).to({x:349.8},0).wait(1).to({x:349.3},0).wait(1).to({x:348.9},0).wait(1).to({x:348.4},0).wait(1).to({x:347.9},0).wait(1).to({x:347.5},0).wait(1).to({x:347},0).wait(1).to({x:346.5},0).wait(1).to({x:346.1},0).wait(1).to({x:345.6},0).wait(1).to({x:345.2},0).wait(1).to({x:344.7},0).wait(1).to({x:344.2},0).wait(1).to({x:343.8},0).wait(1).to({x:343.3},0).wait(1).to({x:342.8},0).wait(1).to({x:342.4},0).wait(1).to({x:341.9},0).wait(1).to({x:341.5},0).wait(1).to({x:341},0).wait(1).to({x:340.5},0).wait(1).to({x:340.1},0).wait(1).to({x:339.6},0).wait(1).to({x:339.1},0).wait(1).to({x:338.7},0).wait(1).to({x:338.2},0).wait(1).to({x:337.8},0).wait(1).to({x:337.3},0).wait(1).to({x:336.8},0).wait(1).to({x:336.4},0).wait(1).to({x:335.9},0).wait(1).to({x:335.4},0).wait(1).to({x:335},0).wait(1).to({x:334.5},0).wait(1).to({x:334.1},0).wait(1).to({x:333.6},0).wait(1).to({x:333.1},0).wait(1).to({x:332.7},0).wait(1).to({x:332.2},0).wait(1).to({x:331.7},0).wait(1).to({x:331.3},0).wait(1).to({x:330.8},0).wait(1).to({x:330.4},0).wait(1).to({x:329.9},0).wait(1).to({x:329.4},0).wait(1).to({x:329},0).wait(1).to({x:328.5},0).wait(1).to({x:328.1},0).wait(1).to({x:327.6},0).wait(1).to({x:327.1},0).wait(1).to({x:326.7},0).wait(1).to({x:326.2},0).wait(1).to({x:325.7},0).wait(1).to({x:325.3},0).wait(1).to({x:324.8,alpha:0.983},0).wait(1).to({x:324.4,alpha:0.966},0).wait(1).to({x:323.9,alpha:0.949},0).wait(1).to({x:323.4,alpha:0.932},0).wait(1).to({x:323,alpha:0.915},0).wait(1).to({x:322.5,alpha:0.898},0).wait(1).to({x:322,alpha:0.881},0).wait(1).to({x:321.6,alpha:0.864},0).wait(1).to({x:321.1,alpha:0.847},0).wait(1).to({x:320.7,alpha:0.831},0).wait(1).to({x:320.2,alpha:0.814},0).wait(1).to({x:319.7,alpha:0.797},0).wait(1).to({x:319.3,alpha:0.78},0).wait(1).to({x:318.8,alpha:0.763},0).wait(1).to({x:318.3,alpha:0.746},0).wait(1).to({x:317.9,alpha:0.729},0).wait(1).to({x:317.4,alpha:0.712},0).wait(1).to({x:317,alpha:0.695},0).wait(1).to({x:316.5,alpha:0.678},0).wait(1).to({x:316,alpha:0.661},0).wait(1).to({x:315.6,alpha:0.644},0).wait(1).to({x:315.1,alpha:0.627},0).wait(1).to({x:314.6,alpha:0.61},0).wait(1).to({x:314.2,alpha:0.593},0).wait(1).to({x:313.7,alpha:0.576},0).wait(1).to({x:313.3,alpha:0.559},0).wait(1).to({x:312.8,alpha:0.542},0).wait(1).to({x:312.3,alpha:0.525},0).wait(1).to({x:311.9,alpha:0.508},0).wait(1).to({x:311.4,alpha:0.492},0).wait(1).to({x:310.9,alpha:0.475},0).wait(1).to({x:310.5,alpha:0.458},0).wait(1).to({x:310,alpha:0.441},0).wait(1).to({x:309.6,alpha:0.424},0).wait(1).to({x:309.1,alpha:0.407},0).wait(1).to({x:308.6,alpha:0.39},0).wait(1).to({x:308.2,alpha:0.373},0).wait(1).to({x:307.7,alpha:0.356},0).wait(1).to({x:307.2,alpha:0.339},0).wait(1).to({x:306.8,alpha:0.322},0).wait(1).to({x:306.3,alpha:0.305},0).wait(1).to({x:305.9,alpha:0.288},0).wait(1).to({x:305.4,alpha:0.271},0).wait(1).to({x:304.9,alpha:0.254},0).wait(1).to({x:304.5,alpha:0.237},0).wait(1).to({x:304,alpha:0.22},0).wait(1).to({x:303.5,alpha:0.203},0).wait(1).to({x:303.1,alpha:0.186},0).wait(1).to({x:302.6,alpha:0.169},0).wait(1).to({x:302.2,alpha:0.153},0).wait(1).to({x:301.7,alpha:0.136},0).wait(1).to({x:301.2,alpha:0.119},0).wait(1).to({x:300.8,alpha:0.102},0).wait(1).to({x:300.3,alpha:0.085},0).wait(1).to({x:299.8,alpha:0.068},0).wait(1).to({x:299.4,alpha:0.051},0).wait(1).to({x:298.9,alpha:0.034},0).wait(1).to({x:298.5,alpha:0.017},0).wait(1).to({x:298,alpha:0},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol1copy3();
	this.instance_2.setTransform(298,452.4,1,1,0,0,0,300,200.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:275,regY:306,x:273.1,y:558.4,alpha:0.014},0).wait(1).to({y:558.9,alpha:0.027},0).wait(1).to({x:273.2,y:559.4,alpha:0.041},0).wait(1).to({y:560,alpha:0.054},0).wait(1).to({y:560.5,alpha:0.068},0).wait(1).to({x:273.3,y:561,alpha:0.081},0).wait(1).to({y:561.5,alpha:0.095},0).wait(1).to({y:562,alpha:0.108},0).wait(1).to({x:273.4,y:562.5,alpha:0.122},0).wait(1).to({y:563,alpha:0.135},0).wait(1).to({x:273.5,y:563.5,alpha:0.149},0).wait(1).to({y:564.1,alpha:0.162},0).wait(1).to({y:564.6,alpha:0.176},0).wait(1).to({x:273.6,y:565.1,alpha:0.189},0).wait(1).to({y:565.6,alpha:0.203},0).wait(1).to({y:566.1,alpha:0.216},0).wait(1).to({x:273.7,y:566.6,alpha:0.23},0).wait(1).to({y:567.1,alpha:0.243},0).wait(1).to({x:273.8,y:567.7,alpha:0.257},0).wait(1).to({y:568.2,alpha:0.27},0).wait(1).to({y:568.7,alpha:0.284},0).wait(1).to({x:273.9,y:569.2,alpha:0.297},0).wait(1).to({y:569.7,alpha:0.311},0).wait(1).to({y:570.2,alpha:0.324},0).wait(1).to({x:274,y:570.7,alpha:0.338},0).wait(1).to({y:571.2,alpha:0.351},0).wait(1).to({x:274.1,y:571.8,alpha:0.365},0).wait(1).to({y:572.3,alpha:0.378},0).wait(1).to({y:572.8,alpha:0.392},0).wait(1).to({x:274.2,y:573.3,alpha:0.405},0).wait(1).to({y:573.8,alpha:0.419},0).wait(1).to({y:574.3,alpha:0.432},0).wait(1).to({x:274.3,y:574.8,alpha:0.446},0).wait(1).to({y:575.4,alpha:0.459},0).wait(1).to({y:575.9,alpha:0.473},0).wait(1).to({x:274.4,y:576.4,alpha:0.486},0).wait(1).to({y:576.9,alpha:0.5},0).wait(1).to({x:274.5,y:577.4,alpha:0.514},0).wait(1).to({y:577.9,alpha:0.527},0).wait(1).to({y:578.4,alpha:0.541},0).wait(1).to({x:274.6,y:578.9,alpha:0.554},0).wait(1).to({y:579.5,alpha:0.568},0).wait(1).to({y:580,alpha:0.581},0).wait(1).to({x:274.7,y:580.5,alpha:0.595},0).wait(1).to({y:581,alpha:0.608},0).wait(1).to({x:274.8,y:581.5,alpha:0.622},0).wait(1).to({y:582,alpha:0.635},0).wait(1).to({y:582.5,alpha:0.649},0).wait(1).to({x:274.9,y:583.1,alpha:0.662},0).wait(1).to({y:583.6,alpha:0.676},0).wait(1).to({y:584.1,alpha:0.689},0).wait(1).to({x:275,y:584.6,alpha:0.703},0).wait(1).to({y:585.1,alpha:0.716},0).wait(1).to({y:585.6,alpha:0.73},0).wait(1).to({y:586.1,alpha:0.743},0).wait(1).to({x:275.1,y:586.6,alpha:0.757},0).wait(1).to({y:587.2,alpha:0.77},0).wait(1).to({x:275.2,y:587.7,alpha:0.784},0).wait(1).to({y:588.2,alpha:0.797},0).wait(1).to({y:588.7,alpha:0.811},0).wait(1).to({x:275.3,y:589.2,alpha:0.824},0).wait(1).to({y:589.7,alpha:0.838},0).wait(1).to({y:590.2,alpha:0.851},0).wait(1).to({x:275.4,y:590.8,alpha:0.865},0).wait(1).to({y:591.3,alpha:0.878},0).wait(1).to({y:591.8,alpha:0.892},0).wait(1).to({x:275.5,y:592.3,alpha:0.905},0).wait(1).to({y:592.8,alpha:0.919},0).wait(1).to({x:275.6,y:593.3,alpha:0.932},0).wait(1).to({y:593.8,alpha:0.946},0).wait(1).to({y:594.3,alpha:0.959},0).wait(1).to({x:275.7,y:594.9,alpha:0.973},0).wait(1).to({y:595.4,alpha:0.986},0).wait(1).to({y:595.9,alpha:1},0).wait(1).to({y:596.5},0).wait(1).to({y:597},0).wait(1).to({y:597.6},0).wait(1).to({y:598.2},0).wait(1).to({x:275.6,y:598.8},0).wait(1).to({y:599.3},0).wait(1).to({y:599.9},0).wait(1).to({y:600.5},0).wait(1).to({y:601},0).wait(1).to({x:275.5,y:601.6},0).wait(1).to({y:602.2},0).wait(1).to({y:602.8},0).wait(1).to({y:603.3},0).wait(1).to({y:603.9},0).wait(1).to({x:275.4,y:604.5},0).wait(1).to({y:605.1},0).wait(1).to({y:605.6},0).wait(1).to({y:606.2},0).wait(1).to({y:606.8},0).wait(1).to({x:275.3,y:607.4},0).wait(1).to({y:607.9},0).wait(1).to({y:608.5},0).wait(1).to({y:609.1},0).wait(1).to({y:609.6},0).wait(1).to({x:275.2,y:610.2},0).wait(1).to({y:610.8},0).wait(1).to({y:611.4},0).wait(1).to({y:611.9},0).wait(1).to({y:612.5},0).wait(1).to({x:275.1,y:613.1},0).wait(1).to({y:613.7},0).wait(1).to({y:614.2},0).wait(1).to({y:614.8},0).wait(1).to({y:615.4},0).wait(1).to({x:275,y:615.9},0).wait(1).to({y:616.5},0).wait(1).to({y:617.1},0).wait(1).to({y:617.7},0).wait(1).to({y:618.2},0).wait(1).to({y:618.8},0).wait(1).to({y:619.4},0).wait(1).to({x:274.9,y:620},0).wait(1).to({y:620.5},0).wait(1).to({y:621.1},0).wait(1).to({y:621.7},0).wait(1).to({y:622.3},0).wait(1).to({x:274.8,y:622.8},0).wait(1).to({y:623.4},0).wait(1).to({y:624},0).wait(1).to({y:624.5},0).wait(1).to({y:625.1},0).wait(1).to({x:274.7,y:625.7},0).wait(1).to({y:626.3},0).wait(1).to({y:626.8},0).wait(1).to({y:627.4},0).wait(1).to({y:628},0).wait(1).to({x:274.6,y:628.6},0).wait(1).to({y:629.1},0).wait(1).to({y:629.7},0).wait(1).to({y:630.3},0).wait(1).to({y:630.8},0).wait(1).to({x:274.5,y:631.4},0).wait(1).to({y:632},0).wait(1).to({y:632.6},0).wait(1).to({y:633.1},0).wait(1).to({y:633.7},0).wait(1).to({y:634,alpha:0.983},0).wait(1).to({y:634.2,alpha:0.966},0).wait(1).to({y:634.4,alpha:0.949},0).wait(1).to({y:634.7,alpha:0.932},0).wait(1).to({y:634.9,alpha:0.915},0).wait(1).to({y:635.1,alpha:0.898},0).wait(1).to({y:635.4,alpha:0.881},0).wait(1).to({y:635.6,alpha:0.864},0).wait(1).to({y:635.8,alpha:0.847},0).wait(1).to({x:274.6,y:636.1,alpha:0.831},0).wait(1).to({y:636.3,alpha:0.814},0).wait(1).to({y:636.5,alpha:0.797},0).wait(1).to({y:636.8,alpha:0.78},0).wait(1).to({y:637,alpha:0.763},0).wait(1).to({y:637.3,alpha:0.746},0).wait(1).to({y:637.5,alpha:0.729},0).wait(1).to({y:637.7,alpha:0.712},0).wait(1).to({y:638,alpha:0.695},0).wait(1).to({y:638.2,alpha:0.678},0).wait(1).to({x:274.7,y:638.4,alpha:0.661},0).wait(1).to({y:638.7,alpha:0.644},0).wait(1).to({y:638.9,alpha:0.627},0).wait(1).to({y:639.1,alpha:0.61},0).wait(1).to({y:639.4,alpha:0.593},0).wait(1).to({y:639.6,alpha:0.576},0).wait(1).to({y:639.9,alpha:0.559},0).wait(1).to({y:640.1,alpha:0.542},0).wait(1).to({y:640.3,alpha:0.525},0).wait(1).to({y:640.6,alpha:0.508},0).wait(1).to({x:274.8,y:640.8,alpha:0.492},0).wait(1).to({y:641,alpha:0.475},0).wait(1).to({y:641.3,alpha:0.458},0).wait(1).to({y:641.5,alpha:0.441},0).wait(1).to({y:641.7,alpha:0.424},0).wait(1).to({y:642,alpha:0.407},0).wait(1).to({y:642.2,alpha:0.39},0).wait(1).to({y:642.5,alpha:0.373},0).wait(1).to({y:642.7,alpha:0.356},0).wait(1).to({y:642.9,alpha:0.339},0).wait(1).to({x:274.9,y:643.2,alpha:0.322},0).wait(1).to({y:643.4,alpha:0.305},0).wait(1).to({y:643.6,alpha:0.288},0).wait(1).to({y:643.9,alpha:0.271},0).wait(1).to({y:644.1,alpha:0.254},0).wait(1).to({y:644.3,alpha:0.237},0).wait(1).to({y:644.6,alpha:0.22},0).wait(1).to({y:644.8,alpha:0.203},0).wait(1).to({y:645.1,alpha:0.186},0).wait(1).to({y:645.3,alpha:0.169},0).wait(1).to({x:275,y:645.5,alpha:0.153},0).wait(1).to({y:645.8,alpha:0.136},0).wait(1).to({y:646,alpha:0.119},0).wait(1).to({y:646.2,alpha:0.102},0).wait(1).to({y:646.5,alpha:0.085},0).wait(1).to({y:646.7,alpha:0.068},0).wait(1).to({y:646.9,alpha:0.051},0).wait(1).to({y:647.2,alpha:0.034},0).wait(1).to({y:647.4,alpha:0.017},0).wait(1).to({y:647.7,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,158,550,699.9);


// stage content:



(lib.detail9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{onWhite:1,openedOnWhite:90,onBlack:91,openedOnBlack:178});

	// timeline functions:
	this.frame_0 = function() {
		root = this;
		debug = true;
		this.stop();
		
		var playBGcolor = ["init", "onWhite","init","init","onBlack","init"];
		var playList = ["opening", "cadenas","cadenas2","enchanted","carpe","carpe2"];
		var playIndex = 0;
		var playInstance;
		
		var playClip = function () {
		
			var name = playList[playIndex];
			var mc = lib["MC_" + name];
		
			playInstance = new mc();
		
			//when instance play at the end, run the callback
			playInstance.on("closed", playNextMC);
		
			//put instance into the canvas
			root.addChild(playInstance);
		
		
			//canvas run the open animation
			playInstance.gotoAndPlay("opened");
			
			//console.log(playIndex);
		
		}
		
		var detail = function () {
		
			if (playBGcolor[playIndex] == "init") {
				root.stop();
				playClip();
			}
		
			//if need play on white background
			if (playBGcolor[playIndex] == "onWhite") {
				root.gotoAndPlay("onWhite");
				root.on("onWhite", playClip);
			}
		
			//if need play on black background
			if (playBGcolor[playIndex] == "onBlack") {
				root.gotoAndPlay("onBlack");
				root.on("onBlack", playClip);
			}
		
		}
		
		var playNextMC = function () {
				playIndex++;
		
			//index add 1
			if (playIndex < playList.length) {
		
		
				//again
				detail();
			}  
			else if (playIndex >= playList.length) {
				listBrandE();
			}
		
		
		}
		
		
		var playPrevMC = function(){
				playIndex--;
			if (playIndex<0){
					playIndex = 0;
		
				}
					detail();
		
			}
		
		detail();
			
		$('.next').on('click touchstart',function(){
			//clean the previous instance on root
			root.removeChild(playInstance);
			playNextMC();
		});
		$('.prev').on('click touchstart',function(){
			//clean the previous instance on root
			root.removeChild(playInstance);
			playPrevMC();
		});
	}
	this.frame_90 = function() {
		this.stop();
		this.dispatchEvent("onWhite");
	}
	this.frame_178 = function() {
		this.stop();
		this.dispatchEvent("onBlack");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(88).call(this.frame_178).wait(1));

	// start
	this.instance = new lib.MC_opening();
	this.instance.setTransform(-8,4.9,1,1,0,0,0,-10,4.9);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(178));

	// cadenas
	this.instance_1 = new lib.MC_cadenas();
	this.instance_1.setTransform(300,414,1,1,0,0,0,298,415.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({_off:true},1).wait(88));

	// cadenas2
	this.instance_2 = new lib.MC_cadenas2();
	this.instance_2.setTransform(371.1,563.5,1,1,0,0,0,369,562.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({_off:true},1).wait(88));

	// enchanted
	this.instance_3 = new lib.MC_enchanted();
	this.instance_3.setTransform(10,10);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({_off:true},1).wait(88));

	// carpe
	this.instance_4 = new lib.MC_carpe();
	this.instance_4.setTransform(12,16);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(178).to({_off:false},0).wait(1));

	// carpe2
	this.instance_5 = new lib.MC_carpe2();
	this.instance_5.setTransform(428.6,577.2,1,1,0,0,0,428.6,576.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(178).to({_off:false},0).wait(1));

	// onWhite
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030303").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_1.setTransform(320,568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#060606").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_2.setTransform(320,568);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090909").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_3.setTransform(320,568);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0B0B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_4.setTransform(320,568);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0E0E0E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_5.setTransform(320,568);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_6.setTransform(320,568);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#141414").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_7.setTransform(320,568);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#171717").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_8.setTransform(320,568);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_9.setTransform(320,568);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_10.setTransform(320,568);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_11.setTransform(320,568);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#222222").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_12.setTransform(320,568);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#252525").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_13.setTransform(320,568);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#282828").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_14.setTransform(320,568);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_15.setTransform(320,568);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E2E2E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_16.setTransform(320,568);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#313131").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_17.setTransform(320,568);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#343434").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_18.setTransform(320,568);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#363636").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_19.setTransform(320,568);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#393939").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_20.setTransform(320,568);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C3C3C").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_21.setTransform(320,568);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3F3F3F").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_22.setTransform(320,568);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#424242").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_23.setTransform(320,568);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454545").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_24.setTransform(320,568);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#484848").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_25.setTransform(320,568);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A4A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_26.setTransform(320,568);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D4D4D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_27.setTransform(320,568);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#505050").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_28.setTransform(320,568);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#535353").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_29.setTransform(320,568);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#565656").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_30.setTransform(320,568);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#595959").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_31.setTransform(320,568);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5C5C5C").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_32.setTransform(320,568);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5F5F5F").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_33.setTransform(320,568);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#616161").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_34.setTransform(320,568);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#646464").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_35.setTransform(320,568);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#676767").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_36.setTransform(320,568);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6A6A6A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_37.setTransform(320,568);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D6D6D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_38.setTransform(320,568);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#707070").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_39.setTransform(320,568);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#737373").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_40.setTransform(320,568);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#757575").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_41.setTransform(320,568);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#787878").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_42.setTransform(320,568);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7B7B7B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_43.setTransform(320,568);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7E7E7E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_44.setTransform(320,568);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#818181").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_45.setTransform(320,568);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#848484").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_46.setTransform(320,568);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#878787").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_47.setTransform(320,568);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8A8A8A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_48.setTransform(320,568);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8C8C8C").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_49.setTransform(320,568);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8F8F8F").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_50.setTransform(320,568);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#929292").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_51.setTransform(320,568);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#959595").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_52.setTransform(320,568);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#989898").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_53.setTransform(320,568);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9B9B9B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_54.setTransform(320,568);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9E9E9E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_55.setTransform(320,568);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A0A0A0").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_56.setTransform(320,568);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A3A3A3").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_57.setTransform(320,568);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A6A6A6").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_58.setTransform(320,568);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A9A9A9").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_59.setTransform(320,568);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#ACACAC").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_60.setTransform(320,568);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AFAFAF").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_61.setTransform(320,568);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B2B2B2").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_62.setTransform(320,568);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B5B5B5").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_63.setTransform(320,568);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B7B7B7").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_64.setTransform(320,568);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BABABA").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_65.setTransform(320,568);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BDBDBD").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_66.setTransform(320,568);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C0C0C0").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_67.setTransform(320,568);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C3C3C3").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_68.setTransform(320,568);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C6C6C6").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_69.setTransform(320,568);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C9C9C9").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_70.setTransform(320,568);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CBCBCB").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_71.setTransform(320,568);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CECECE").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_72.setTransform(320,568);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D1D1D1").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_73.setTransform(320,568);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D4D4D4").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_74.setTransform(320,568);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D7D7D7").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_75.setTransform(320,568);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DADADA").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_76.setTransform(320,568);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DDDDDD").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_77.setTransform(320,568);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DFDFDF").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_78.setTransform(320,568);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E2E2E2").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_79.setTransform(320,568);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E5E5E5").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_80.setTransform(320,568);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E8E8E8").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_81.setTransform(320,568);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EBEBEB").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_82.setTransform(320,568);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EEEEEE").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_83.setTransform(320,568);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F1F1F1").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_84.setTransform(320,568);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F4F4F4").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_85.setTransform(320,568);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F6F6F6").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_86.setTransform(320,568);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F9F9F9").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_87.setTransform(320,568);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FCFCFC").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_88.setTransform(320,568);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_89.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[]},1).wait(88));

	// onBlack
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_90.setTransform(320,568);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FCFCFC").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_91.setTransform(320,568);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F9F9F9").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_92.setTransform(320,568);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F6F6F6").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_93.setTransform(320,568);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F3F3F3").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_94.setTransform(320,568);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1F1F1").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_95.setTransform(320,568);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEEEE").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_96.setTransform(320,568);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EBEBEB").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_97.setTransform(320,568);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E8E8E8").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_98.setTransform(320,568);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E5E5E5").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_99.setTransform(320,568);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E2E2E2").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_100.setTransform(320,568);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DFDFDF").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_101.setTransform(320,568);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DCDCDC").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_102.setTransform(320,568);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9D9D9").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_103.setTransform(320,568);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D6D6D6").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_104.setTransform(320,568);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D4D4D4").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_105.setTransform(320,568);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D1D1D1").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_106.setTransform(320,568);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CECECE").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_107.setTransform(320,568);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CBCBCB").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_108.setTransform(320,568);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C8C8C8").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_109.setTransform(320,568);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C5C5C5").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_110.setTransform(320,568);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C2C2C2").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_111.setTransform(320,568);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BFBFBF").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_112.setTransform(320,568);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BCBCBC").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_113.setTransform(320,568);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B9B9B9").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_114.setTransform(320,568);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B7B7B7").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_115.setTransform(320,568);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B4B4B4").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_116.setTransform(320,568);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B1B1B1").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_117.setTransform(320,568);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#AEAEAE").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_118.setTransform(320,568);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ABABAB").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_119.setTransform(320,568);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A8A8A8").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_120.setTransform(320,568);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A5A5A5").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_121.setTransform(320,568);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A2A2A2").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_122.setTransform(320,568);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9F9F9F").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_123.setTransform(320,568);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9C9C9C").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_124.setTransform(320,568);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9A9A9A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_125.setTransform(320,568);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#979797").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_126.setTransform(320,568);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#949494").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_127.setTransform(320,568);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#919191").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_128.setTransform(320,568);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8E8E8E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_129.setTransform(320,568);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8B8B8B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_130.setTransform(320,568);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#888888").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_131.setTransform(320,568);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#858585").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_132.setTransform(320,568);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#828282").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_133.setTransform(320,568);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#808080").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_134.setTransform(320,568);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7D7D7D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_135.setTransform(320,568);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7A7A7A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_136.setTransform(320,568);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#777777").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_137.setTransform(320,568);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#747474").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_138.setTransform(320,568);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#717171").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_139.setTransform(320,568);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6E6E6E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_140.setTransform(320,568);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6B6B6B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_141.setTransform(320,568);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#686868").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_142.setTransform(320,568);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#656565").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_143.setTransform(320,568);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#636363").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_144.setTransform(320,568);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#606060").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_145.setTransform(320,568);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5D5D5D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_146.setTransform(320,568);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#5A5A5A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_147.setTransform(320,568);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#575757").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_148.setTransform(320,568);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#545454").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_149.setTransform(320,568);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#515151").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_150.setTransform(320,568);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4E4E4E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_151.setTransform(320,568);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#4B4B4B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_152.setTransform(320,568);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#484848").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_153.setTransform(320,568);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#464646").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_154.setTransform(320,568);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#434343").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_155.setTransform(320,568);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#404040").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_156.setTransform(320,568);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3D3D3D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_157.setTransform(320,568);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3A3A3A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_158.setTransform(320,568);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373737").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_159.setTransform(320,568);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#343434").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_160.setTransform(320,568);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#313131").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_161.setTransform(320,568);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#2E2E2E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_162.setTransform(320,568);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2B2B2B").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_163.setTransform(320,568);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#292929").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_164.setTransform(320,568);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#262626").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_165.setTransform(320,568);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#232323").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_166.setTransform(320,568);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#202020").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_167.setTransform(320,568);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#1D1D1D").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_168.setTransform(320,568);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1A1A1A").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_169.setTransform(320,568);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#171717").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_170.setTransform(320,568);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#141414").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_171.setTransform(320,568);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_172.setTransform(320,568);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0E0E0E").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_173.setTransform(320,568);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0C0C0C").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_174.setTransform(320,568);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#090909").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_175.setTransform(320,568);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#060606").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_176.setTransform(320,568);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#030303").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_177.setTransform(320,568);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Eg1GBasMAAAi1XMBqNAAAMAAAC1Xg");
	this.shape_178.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},90).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322,936.1,640,320);

})(lib_detail9 = lib_detail9||{}, images = images||{}, createjs = createjs||{});
var lib_detail9, images, createjs;