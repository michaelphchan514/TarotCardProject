(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"backsidemotion3_atlas_1", frames: [[0,0,1024,1536]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(ss["backsidemotion3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.0781,0.0716);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,80,110), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(40,55,1,1,0,0,0,40,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,80,110), null);


// stage content:
(lib.backsidemotion3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_13
	this.instance = new lib.Symbol2();
	this.instance.setTransform(287.2,129.4,1,1,0,0,0,40,55);
	this.instance.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.6875,x:286,y:129.45,alpha:0.6162},0).wait(1).to({rotation:-7.375,x:284.85,alpha:0.6325},0).wait(1).to({rotation:-11.0626,x:283.7,y:129.5,alpha:0.6488},0).wait(1).to({rotation:-14.7501,x:282.55,y:129.55,alpha:0.665},0).wait(1).to({rotation:-18.4376,x:281.4,y:129.6,alpha:0.6812},0).wait(1).to({rotation:-22.1251,x:280.2,y:129.65,alpha:0.6975},0).wait(1).to({rotation:-25.8126,x:279.1,y:129.7,alpha:0.7138},0).wait(1).to({rotation:-29.5002,x:277.95,alpha:0.73},0).wait(1).to({rotation:-33.1877,x:276.75,y:129.8,alpha:0.7462},0).wait(1).to({rotation:-36.8752,x:275.6,alpha:0.7625},0).wait(1).to({rotation:-40.5627,x:274.45,y:129.9,alpha:0.7788},0).wait(1).to({rotation:-44.2502,x:273.35,alpha:0.795},0).wait(1).to({rotation:-47.9378,x:272.2,y:129.95,alpha:0.8112},0).wait(1).to({rotation:-51.6253,x:271,y:130,alpha:0.8275},0).wait(1).to({rotation:-55.3128,x:269.8,alpha:0.8438},0).wait(1).to({rotation:-59.0003,x:268.7,y:130.1,alpha:0.86},0).wait(1).to({rotation:-62.6879,x:267.5,alpha:0.8763},0).wait(1).to({rotation:-66.3754,x:266.4,y:130.15,alpha:0.8925},0).wait(1).to({rotation:-70.0629,x:265.25,y:130.2,alpha:0.9088},0).wait(1).to({rotation:-73.7504,x:264.1,y:130.25,alpha:0.925},0).wait(1).to({rotation:-77.4379,x:262.95,alpha:0.9413},0).wait(1).to({rotation:-81.1255,x:261.75,y:130.35,alpha:0.9575},0).wait(1).to({rotation:-84.813,x:260.55,alpha:0.9738},0).wait(1).to({rotation:-88.5005,x:259.45,y:130.4,alpha:0.99},0).wait(1).to({rotation:-92.188,x:258.25,y:130.5},0).wait(1).to({rotation:-95.8755,x:257.1},0).wait(1).to({rotation:-99.5631,x:256,y:130.55},0).wait(1).to({rotation:-103.2506,x:254.85,y:130.6},0).wait(1).to({rotation:-106.9381,x:253.65,y:130.7},0).wait(1).to({rotation:-110.6256,x:252.5},0).wait(1).to({rotation:-114.3131,x:251.35,y:130.75},0).wait(1).to({rotation:-118.0007,x:250.2,y:130.8},0).wait(1).to({rotation:-121.6882,x:249.05},0).wait(1).to({rotation:-125.3757,x:247.9,y:130.85},0).wait(1).to({rotation:-129.0632,x:246.75,y:130.9},0).wait(1).to({rotation:-132.7507,x:245.6,y:130.95},0).wait(1).to({rotation:-136.4383,x:244.4,y:131},0).wait(1).to({rotation:-140.1258,x:243.25,y:131.05},0).wait(1).to({rotation:-143.8133,x:242.1,y:131.1},0).wait(1).to({rotation:-147.5008,x:240.95},0).wait(1).to({rotation:-151.1884,x:239.8,y:131.15},0).wait(1).to({rotation:-154.8759,x:238.65,y:131.2},0).wait(1).to({rotation:-158.5634,x:237.5,y:131.25},0).wait(1).to({rotation:-162.2509,x:236.35,y:131.3},0).wait(1).to({rotation:-165.9384,x:235.2,y:131.35},0).wait(1).to({rotation:-169.626,x:234.05,y:131.4},0).wait(1).to({rotation:-173.3135,x:232.85},0).wait(1).to({rotation:-177.001,x:231.75,y:131.5},0).wait(1));

	// Layer_12
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:2.7917,x:266.55,y:64.85,alpha:0.6162},0).wait(1).to({rotation:5.5833,x:265.2,y:66.65,alpha:0.6325},0).wait(1).to({rotation:8.375,x:263.8,y:68.5,alpha:0.6488},0).wait(1).to({rotation:11.1667,x:262.45,y:70.3,alpha:0.665},0).wait(1).to({rotation:13.9583,x:261.05,y:72.2,alpha:0.6812},0).wait(1).to({rotation:16.75,x:259.65,y:74,alpha:0.6975},0).wait(1).to({rotation:19.5417,x:258.3,y:75.85,alpha:0.7138},0).wait(1).to({rotation:22.3333,x:256.9,y:77.65,alpha:0.73},0).wait(1).to({rotation:25.125,x:255.5,y:79.5,alpha:0.7462},0).wait(1).to({rotation:27.9167,x:254.15,y:81.35,alpha:0.7625},0).wait(1).to({rotation:30.7083,x:252.75,y:83.2,alpha:0.7788},0).wait(1).to({rotation:33.5,x:251.35,y:85,alpha:0.795},0).wait(1).to({rotation:36.2917,x:250,y:86.9,alpha:0.8112},0).wait(1).to({rotation:39.0833,x:248.6,y:88.65,alpha:0.8275},0).wait(1).to({rotation:41.875,x:247.25,y:90.5,alpha:0.8438},0).wait(1).to({rotation:44.6667,x:245.85,y:92.3,alpha:0.86},0).wait(1).to({rotation:47.4583,x:244.45,y:94.15,alpha:0.8763},0).wait(1).to({rotation:50.25,x:243.05,y:96,alpha:0.8925},0).wait(1).to({rotation:53.0417,x:241.65,y:97.8,alpha:0.9088},0).wait(1).to({rotation:55.8333,x:240.3,y:99.7,alpha:0.925},0).wait(1).to({rotation:58.625,x:238.95,y:101.55,alpha:0.9413},0).wait(1).to({rotation:61.4167,x:237.55,y:103.3,alpha:0.9575},0).wait(1).to({rotation:64.2083,x:236.15,y:105.2,alpha:0.9738},0).wait(1).to({rotation:67,x:234.75,y:107,alpha:0.99},0).wait(1).to({rotation:69.7917,x:233.35,y:108.85},0).wait(1).to({rotation:72.5833,x:231.95,y:110.65},0).wait(1).to({rotation:75.375,x:230.6,y:112.55},0).wait(1).to({rotation:78.1667,x:229.2,y:114.4},0).wait(1).to({rotation:80.9583,x:227.85,y:116.2},0).wait(1).to({rotation:83.75,x:226.45,y:118.05},0).wait(1).to({rotation:86.5417,x:225.05,y:119.9},0).wait(1).to({rotation:89.3333,x:223.65,y:121.7},0).wait(1).to({rotation:92.125,x:222.3,y:123.5},0).wait(1).to({rotation:94.9167,x:220.9,y:125.4},0).wait(1).to({rotation:97.7083,x:219.55,y:127.2},0).wait(1).to({rotation:100.5,x:218.1,y:129.1},0).wait(1).to({rotation:103.2917,x:216.75,y:130.9},0).wait(1).to({rotation:106.0833,x:215.35,y:132.7},0).wait(1).to({rotation:108.875,x:213.95,y:134.55},0).wait(1).to({rotation:111.6667,x:212.65,y:136.35},0).wait(1).to({rotation:114.4583,x:211.25,y:138.25},0).wait(1).to({rotation:117.25,x:209.85,y:140.05},0).wait(1).to({rotation:120.0417,x:208.45,y:141.9},0).wait(1).to({rotation:122.8333,x:207.05,y:143.75},0).wait(1).to({rotation:125.625,x:205.7,y:145.55},0).wait(1).to({rotation:128.4167,x:204.3,y:147.4},0).wait(1).to({rotation:131.2083,x:202.9,y:149.25},0).wait(1).to({rotation:134,x:201.55,y:151.05},0).wait(1));

	// Layer_11
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_2.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:2.375,x:266.4,y:65.3,alpha:0.6162},0).wait(1).to({rotation:4.75,x:264.9,y:67.65,alpha:0.6325},0).wait(1).to({rotation:7.125,x:263.4,y:70,alpha:0.6488},0).wait(1).to({rotation:9.5,x:261.8,y:72.4,alpha:0.665},0).wait(1).to({rotation:11.875,x:260.3,y:74.75,alpha:0.6812},0).wait(1).to({rotation:14.25,x:258.7,y:77.1,alpha:0.6975},0).wait(1).to({rotation:16.625,x:257.2,y:79.45,alpha:0.7138},0).wait(1).to({rotation:19,x:255.6,y:81.75,alpha:0.73},0).wait(1).to({rotation:21.375,x:254.1,y:84.15,alpha:0.7462},0).wait(1).to({rotation:23.75,x:252.55,y:86.5,alpha:0.7625},0).wait(1).to({rotation:26.125,x:251,y:88.85,alpha:0.7788},0).wait(1).to({rotation:28.5,x:249.45,y:91.2,alpha:0.795},0).wait(1).to({rotation:30.875,x:247.95,y:93.55,alpha:0.8112},0).wait(1).to({rotation:33.25,x:246.4,y:95.9,alpha:0.8275},0).wait(1).to({rotation:35.625,x:244.8,y:98.25,alpha:0.8438},0).wait(1).to({rotation:38,x:243.3,y:100.6,alpha:0.86},0).wait(1).to({rotation:40.375,x:241.7,y:102.95,alpha:0.8763},0).wait(1).to({rotation:42.75,x:240.15,y:105.3,alpha:0.8925},0).wait(1).to({rotation:45.125,x:238.65,y:107.65,alpha:0.9088},0).wait(1).to({rotation:47.5,x:237.1,y:110,alpha:0.925},0).wait(1).to({rotation:49.875,x:235.6,y:112.35,alpha:0.9413},0).wait(1).to({rotation:52.25,x:234.05,y:114.7,alpha:0.9575},0).wait(1).to({rotation:54.625,x:232.5,y:117.05,alpha:0.9738},0).wait(1).to({rotation:57,x:230.95,y:119.4,alpha:0.99},0).wait(1).to({rotation:59.375,x:229.4,y:121.7},0).wait(1).to({rotation:61.75,x:227.9,y:124.15},0).wait(1).to({rotation:64.125,x:226.3,y:126.45},0).wait(1).to({rotation:66.5,x:224.75,y:128.85},0).wait(1).to({rotation:68.875,x:223.2,y:131.1},0).wait(1).to({rotation:71.25,x:221.65,y:133.55},0).wait(1).to({rotation:73.625,x:220.2,y:135.85},0).wait(1).to({rotation:76,x:218.65,y:138.2},0).wait(1).to({rotation:78.375,x:217.1,y:140.6},0).wait(1).to({rotation:80.75,x:215.55,y:142.95},0).wait(1).to({rotation:83.125,x:214,y:145.25},0).wait(1).to({rotation:85.5,x:212.45,y:147.6},0).wait(1).to({rotation:87.875,x:210.9,y:149.95},0).wait(1).to({rotation:90.25,x:209.4,y:152.3},0).wait(1).to({rotation:92.625,x:207.8,y:154.7},0).wait(1).to({rotation:95,x:206.25,y:157},0).wait(1).to({rotation:97.375,x:204.7,y:159.35},0).wait(1).to({rotation:99.75,x:203.2,y:161.7},0).wait(1).to({rotation:102.125,x:201.65,y:164.05},0).wait(1).to({rotation:104.5,x:200.1,y:166.45},0).wait(1).to({rotation:106.875,x:198.55,y:168.8},0).wait(1).to({rotation:109.25,x:197,y:171.1},0).wait(1).to({rotation:111.625,x:195.45,y:173.5},0).wait(1).to({rotation:114,x:193.95,y:175.85},0).wait(1));

	// Layer_10
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(266.95,74.9,1,1,0,0,0,40,55);
	this.instance_3.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-2.7708,x:265.2,y:77.7,alpha:0.6162},0).wait(1).to({rotation:-5.5417,x:263.45,y:80.6,alpha:0.6325},0).wait(1).to({rotation:-8.3125,x:261.75,y:83.35,alpha:0.6488},0).wait(1).to({rotation:-11.0833,x:260,y:86.2,alpha:0.665},0).wait(1).to({rotation:-13.8542,x:258.3,y:89.1,alpha:0.6812},0).wait(1).to({rotation:-16.625,x:256.6,y:91.95,alpha:0.6975},0).wait(1).to({rotation:-19.3958,x:254.85,y:94.8,alpha:0.7138},0).wait(1).to({rotation:-22.1667,x:253.15,y:97.65,alpha:0.73},0).wait(1).to({rotation:-24.9375,x:251.4,y:100.5,alpha:0.7462},0).wait(1).to({rotation:-27.7083,x:249.65,y:103.35,alpha:0.7625},0).wait(1).to({rotation:-30.4792,x:247.95,y:106.15,alpha:0.7788},0).wait(1).to({rotation:-33.25,x:246.2,y:109,alpha:0.795},0).wait(1).to({rotation:-36.0208,x:244.5,y:111.9,alpha:0.8112},0).wait(1).to({rotation:-38.7917,x:242.8,y:114.7,alpha:0.8275},0).wait(1).to({rotation:-41.5625,x:241.1,y:117.55,alpha:0.8438},0).wait(1).to({rotation:-44.3333,x:239.35,y:120.4,alpha:0.86},0).wait(1).to({rotation:-47.1042,x:237.65,y:123.25,alpha:0.8763},0).wait(1).to({rotation:-49.875,x:235.9,y:126.1,alpha:0.8925},0).wait(1).to({rotation:-52.6458,x:234.1,y:128.9,alpha:0.9088},0).wait(1).to({rotation:-55.4167,x:232.45,y:131.75,alpha:0.925},0).wait(1).to({rotation:-58.1875,x:230.75,y:134.65,alpha:0.9413},0).wait(1).to({rotation:-60.9583,x:228.95,y:137.5,alpha:0.9575},0).wait(1).to({rotation:-63.7292,x:227.25,y:140.35,alpha:0.9738},0).wait(1).to({rotation:-66.5,x:225.55,y:143.2,alpha:0.99},0).wait(1).to({rotation:-69.2708,x:223.8,y:146},0).wait(1).to({rotation:-72.0417,x:222.05,y:148.85},0).wait(1).to({rotation:-74.8125,x:220.4,y:151.7},0).wait(1).to({rotation:-77.5833,x:218.6,y:154.6},0).wait(1).to({rotation:-80.3542,x:216.9,y:157.35},0).wait(1).to({rotation:-83.125,x:215.2,y:160.3},0).wait(1).to({rotation:-85.8958,x:213.45,y:163.1},0).wait(1).to({rotation:-88.6667,x:211.75,y:165.95},0).wait(1).to({rotation:-91.4375,x:210,y:168.75},0).wait(1).to({rotation:-94.2083,x:208.25,y:171.6},0).wait(1).to({rotation:-96.9792,x:206.55,y:174.45},0).wait(1).to({rotation:-99.75,x:204.85,y:177.35},0).wait(1).to({rotation:-102.5208,x:203.15,y:180.2},0).wait(1).to({rotation:-105.2917,x:201.35,y:183},0).wait(1).to({rotation:-108.0625,x:199.65,y:185.85},0).wait(1).to({rotation:-110.8333,x:197.9,y:188.7},0).wait(1).to({rotation:-113.6042,x:196.2,y:191.6},0).wait(1).to({rotation:-116.375,x:194.45,y:194.35},0).wait(1).to({rotation:-119.1458,x:192.75,y:197.2},0).wait(1).to({rotation:-121.9167,x:191.05,y:200.05},0).wait(1).to({rotation:-124.6875,x:189.3,y:202.95},0).wait(1).to({rotation:-127.4583,x:187.55,y:205.8},0).wait(1).to({rotation:-130.2292,x:185.85,y:208.65},0).wait(1).to({rotation:-133,x:184.1,y:211.5},0).wait(1));

	// Layer_9
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_4.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-3.4897,x:266.95,y:66.7,alpha:0.6162},0).wait(1).to({rotation:-6.9794,x:265.9,y:70.5,alpha:0.6325},0).wait(1).to({rotation:-10.4691,x:264.85,y:74.25,alpha:0.6488},0).wait(1).to({rotation:-13.9588,x:263.75,y:78,alpha:0.665},0).wait(1).to({rotation:-17.4485,x:262.75,y:81.7,alpha:0.6812},0).wait(1).to({rotation:-20.9382,x:261.7,y:85.45,alpha:0.6975},0).wait(1).to({rotation:-24.428,x:260.65,y:89.2,alpha:0.7138},0).wait(1).to({rotation:-27.9177,x:259.65,y:92.9,alpha:0.73},0).wait(1).to({rotation:-31.4074,x:258.6,y:96.7,alpha:0.7462},0).wait(1).to({rotation:-34.8971,x:257.55,y:100.4,alpha:0.7625},0).wait(1).to({rotation:-38.3868,x:256.5,y:104.15,alpha:0.7788},0).wait(1).to({rotation:-41.8765,x:255.5,y:107.9,alpha:0.795},0).wait(1).to({rotation:-45.3662,x:254.45,y:111.7,alpha:0.8112},0).wait(1).to({rotation:-48.8559,x:253.35,y:115.45,alpha:0.8275},0).wait(1).to({rotation:-52.3456,x:252.35,y:119.2,alpha:0.8438},0).wait(1).to({rotation:-55.8353,x:251.3,y:122.9,alpha:0.86},0).wait(1).to({rotation:-59.325,x:250.25,y:126.65,alpha:0.8763},0).wait(1).to({rotation:-62.8147,x:249.2,y:130.4,alpha:0.8925},0).wait(1).to({rotation:-66.3045,x:248.15,y:134.1,alpha:0.9088},0).wait(1).to({rotation:-69.7942,x:247.1,y:137.9,alpha:0.925},0).wait(1).to({rotation:-73.2839,x:246.1,y:141.65,alpha:0.9413},0).wait(1).to({rotation:-76.7736,x:245.05,y:145.4,alpha:0.9575},0).wait(1).to({rotation:-80.2633,x:244,y:149.15,alpha:0.9738},0).wait(1).to({rotation:-83.753,x:242.95,y:152.9,alpha:0.99},0).wait(1).to({rotation:-87.2427,x:241.9,y:156.65},0).wait(1).to({rotation:-90.7324,x:240.9,y:160.35},0).wait(1).to({rotation:-94.2221,x:239.85,y:164.1},0).wait(1).to({rotation:-97.7118,x:238.8,y:167.85},0).wait(1).to({rotation:-101.2015,x:237.8,y:171.6},0).wait(1).to({rotation:-104.6912,x:236.7,y:175.35},0).wait(1).to({rotation:-108.181,x:235.65,y:179.1},0).wait(1).to({rotation:-111.6707,x:234.65,y:182.85},0).wait(1).to({rotation:-115.1604,x:233.6,y:186.6},0).wait(1).to({rotation:-118.6501,x:232.5,y:190.35},0).wait(1).to({rotation:-122.1398,x:231.45,y:194.1},0).wait(1).to({rotation:-125.6295,x:230.45,y:197.85},0).wait(1).to({rotation:-129.1192,x:229.4,y:201.55},0).wait(1).to({rotation:-132.6089,x:228.4,y:205.3},0).wait(1).to({rotation:-136.0986,x:227.4,y:209.05},0).wait(1).to({rotation:-139.5883,x:226.3,y:212.75},0).wait(1).to({rotation:-143.078,x:225.25,y:216.55},0).wait(1).to({rotation:-146.5677,x:224.2,y:220.3},0).wait(1).to({rotation:-150.0575,x:223.2,y:224.05},0).wait(1).to({rotation:-153.5472,x:222.15,y:227.8},0).wait(1).to({rotation:-157.0369,x:221.05,y:231.55},0).wait(1).to({rotation:-160.5266,x:220.1,y:235.25},0).wait(1).to({rotation:-164.0163,x:219.05,y:239.05},0).wait(1).to({rotation:-167.506,x:218,y:242.8},0).wait(1));

	// Layer_8
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_5.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:3.75,x:267.15,y:66.8,alpha:0.6162},0).wait(1).to({rotation:7.5,x:266.3,y:70.65,alpha:0.6325},0).wait(1).to({rotation:11.25,x:265.5,y:74.5,alpha:0.6488},0).wait(1).to({rotation:15,x:264.7,y:78.35,alpha:0.665},0).wait(1).to({rotation:18.75,x:263.9,y:82.2,alpha:0.6812},0).wait(1).to({rotation:22.5,x:263.05,y:86,alpha:0.6975},0).wait(1).to({rotation:26.25,x:262.2,y:89.9,alpha:0.7138},0).wait(1).to({rotation:30,x:261.45,y:93.7,alpha:0.73},0).wait(1).to({rotation:33.75,x:260.6,y:97.55,alpha:0.7462},0).wait(1).to({rotation:37.5,x:259.8,y:101.4,alpha:0.7625},0).wait(1).to({rotation:41.25,x:259,y:105.2,alpha:0.7788},0).wait(1).to({rotation:45,x:258.2,y:109.05,alpha:0.795},0).wait(1).to({rotation:48.75,x:257.35,y:112.85,alpha:0.8112},0).wait(1).to({rotation:52.5,x:256.55,y:116.75,alpha:0.8275},0).wait(1).to({rotation:56.25,x:255.7,y:120.55,alpha:0.8438},0).wait(1).to({rotation:60,x:254.9,y:124.4,alpha:0.86},0).wait(1).to({rotation:63.75,x:254.1,y:128.25,alpha:0.8763},0).wait(1).to({rotation:67.5,x:253.3,y:132.1,alpha:0.8925},0).wait(1).to({rotation:71.25,x:252.45,y:135.95,alpha:0.9088},0).wait(1).to({rotation:75,x:251.6,y:139.8,alpha:0.925},0).wait(1).to({rotation:78.75,x:250.8,y:143.65,alpha:0.9413},0).wait(1).to({rotation:82.5,x:249.95,y:147.45,alpha:0.9575},0).wait(1).to({rotation:86.25,x:249.15,y:151.25,alpha:0.9738},0).wait(1).to({rotation:90,x:248.4,y:155.15,alpha:0.99},0).wait(1).to({rotation:93.75,x:247.55,y:158.95},0).wait(1).to({rotation:97.5,x:246.75,y:162.8},0).wait(1).to({rotation:101.25,x:245.9,y:166.65},0).wait(1).to({rotation:105,x:245.1,y:170.5},0).wait(1).to({rotation:108.75,x:244.3,y:174.3},0).wait(1).to({rotation:112.5,x:243.5,y:178.15},0).wait(1).to({rotation:116.25,x:242.65,y:181.95},0).wait(1).to({rotation:120,x:241.8,y:185.85},0).wait(1).to({rotation:123.75,x:241.05,y:189.7},0).wait(1).to({rotation:127.5,x:240.2,y:193.5},0).wait(1).to({rotation:131.25,x:239.4,y:197.35},0).wait(1).to({rotation:135,x:238.55,y:201.2},0).wait(1).to({rotation:138.75,x:237.8,y:205},0).wait(1).to({rotation:142.5,x:236.9,y:208.85},0).wait(1).to({rotation:146.25,x:236.15,y:212.7},0).wait(1).to({rotation:150,x:235.3,y:216.55},0).wait(1).to({rotation:153.75,x:234.5,y:220.4},0).wait(1).to({rotation:157.5,x:233.7,y:224.25},0).wait(1).to({rotation:161.25,x:232.8,y:228.05},0).wait(1).to({rotation:165,x:232,y:231.9},0).wait(1).to({rotation:168.75,x:231.2,y:235.75},0).wait(1).to({rotation:172.5,x:230.4,y:239.55},0).wait(1).to({rotation:176.25,x:229.6,y:243.4},0).wait(1).to({rotation:180,x:228.8,y:247.3},0).wait(1));

	// Layer_7
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_6.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:3.2142,x:267.55,y:66.8,alpha:0.6162},0).wait(1).to({rotation:6.4285,x:267.2,y:70.65,alpha:0.6325},0).wait(1).to({rotation:9.6427,x:266.8,y:74.45,alpha:0.6488},0).wait(1).to({rotation:12.8569,x:266.35,y:78.3,alpha:0.665},0).wait(1).to({rotation:16.0711,x:265.95,y:82.15,alpha:0.6812},0).wait(1).to({rotation:19.2854,x:265.6,y:86,alpha:0.6975},0).wait(1).to({rotation:22.4996,x:265.15,y:89.85,alpha:0.7138},0).wait(1).to({rotation:25.7138,x:264.8,y:93.7,alpha:0.73},0).wait(1).to({rotation:28.9281,x:264.35,y:97.55,alpha:0.7462},0).wait(1).to({rotation:32.1423,x:263.95,y:101.35,alpha:0.7625},0).wait(1).to({rotation:35.3565,x:263.55,y:105.2,alpha:0.7788},0).wait(1).to({rotation:38.5707,x:263.15,y:109.05,alpha:0.795},0).wait(1).to({rotation:41.785,x:262.8,y:112.9,alpha:0.8112},0).wait(1).to({rotation:44.9992,x:262.4,y:116.75,alpha:0.8275},0).wait(1).to({rotation:48.2134,x:262,y:120.55,alpha:0.8438},0).wait(1).to({rotation:51.4277,x:261.6,y:124.4,alpha:0.86},0).wait(1).to({rotation:54.6419,x:261.2,y:128.25,alpha:0.8763},0).wait(1).to({rotation:57.8561,x:260.8,y:132.05,alpha:0.8925},0).wait(1).to({rotation:61.0704,x:260.35,y:135.9,alpha:0.9088},0).wait(1).to({rotation:64.2846,x:259.95,y:139.75,alpha:0.925},0).wait(1).to({rotation:67.4988,x:259.6,y:143.6,alpha:0.9413},0).wait(1).to({rotation:70.713,x:259.2,y:147.4,alpha:0.9575},0).wait(1).to({rotation:73.9273,x:258.75,y:151.3,alpha:0.9738},0).wait(1).to({rotation:77.1415,x:258.4,y:155.15,alpha:0.99},0).wait(1).to({rotation:80.3557,x:258,y:158.95},0).wait(1).to({rotation:83.57,x:257.6,y:162.8},0).wait(1).to({rotation:86.7842,x:257.2,y:166.65},0).wait(1).to({rotation:89.9984,x:256.75,y:170.5},0).wait(1).to({rotation:93.2126,x:256.4,y:174.3},0).wait(1).to({rotation:96.4269,x:255.95,y:178.15},0).wait(1).to({rotation:99.6411,x:255.6,y:182.05},0).wait(1).to({rotation:102.8553,x:255.2,y:185.85},0).wait(1).to({rotation:106.0696,x:254.8,y:189.7},0).wait(1).to({rotation:109.2838,x:254.4,y:193.55},0).wait(1).to({rotation:112.498,x:254,y:197.35},0).wait(1).to({rotation:115.7123,x:253.6,y:201.2},0).wait(1).to({rotation:118.9265,x:253.15,y:205.05},0).wait(1).to({rotation:122.1407,x:252.8,y:208.85},0).wait(1).to({rotation:125.3549,x:252.4,y:212.7},0).wait(1).to({rotation:128.5692,x:251.95,y:216.5},0).wait(1).to({rotation:131.7834,x:251.6,y:220.4},0).wait(1).to({rotation:134.9976,x:251.15,y:224.25},0).wait(1).to({rotation:138.2119,x:250.8,y:228.1},0).wait(1).to({rotation:141.4261,x:250.4,y:231.9},0).wait(1).to({rotation:144.6403,x:250,y:235.75},0).wait(1).to({rotation:147.8545,x:249.6,y:239.65},0).wait(1).to({rotation:151.0688,x:249.2,y:243.4},0).wait(1).to({rotation:154.283,x:248.8,y:247.25},0).wait(1));

	// Layer_6
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_7.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({rotation:2.6523,x:268.1,y:66.7,alpha:0.6162},0).wait(1).to({rotation:5.3045,x:268.3,y:70.4,alpha:0.6325},0).wait(1).to({rotation:7.9568,x:268.45,y:74.1,alpha:0.6488},0).wait(1).to({rotation:10.609,x:268.55,y:77.85,alpha:0.665},0).wait(1).to({rotation:13.2613,x:268.8,y:81.6,alpha:0.6812},0).wait(1).to({rotation:15.9135,x:268.9,y:85.3,alpha:0.6975},0).wait(1).to({rotation:18.5658,x:269.1,y:89.05,alpha:0.7138},0).wait(1).to({rotation:21.218,x:269.25,y:92.75,alpha:0.73},0).wait(1).to({rotation:23.8703,x:269.45,y:96.45,alpha:0.7462},0).wait(1).to({rotation:26.5225,x:269.6,y:100.15,alpha:0.7625},0).wait(1).to({rotation:29.1748,x:269.7,y:103.85,alpha:0.7788},0).wait(1).to({rotation:31.827,x:269.9,y:107.65,alpha:0.795},0).wait(1).to({rotation:34.4793,x:270,y:111.35,alpha:0.8112},0).wait(1).to({rotation:37.1315,x:270.2,y:115.05,alpha:0.8275},0).wait(1).to({rotation:39.7838,x:270.35,y:118.75,alpha:0.8438},0).wait(1).to({rotation:42.436,x:270.5,y:122.5,alpha:0.86},0).wait(1).to({rotation:45.0883,x:270.7,y:126.25,alpha:0.8763},0).wait(1).to({rotation:47.7405,x:270.85,y:129.9,alpha:0.8925},0).wait(1).to({rotation:50.3928,x:271,y:133.6,alpha:0.9088},0).wait(1).to({rotation:53.045,x:271.15,y:137.3,alpha:0.925},0).wait(1).to({rotation:55.6973,x:271.3,y:141.1,alpha:0.9413},0).wait(1).to({rotation:58.3495,x:271.5,y:144.8,alpha:0.9575},0).wait(1).to({rotation:61.0018,x:271.65,y:148.5,alpha:0.9738},0).wait(1).to({rotation:63.654,x:271.75,y:152.2,alpha:0.99},0).wait(1).to({rotation:66.3063,x:271.9,y:155.95},0).wait(1).to({rotation:68.9585,x:272.05,y:159.7},0).wait(1).to({rotation:71.6108,x:272.2,y:163.35},0).wait(1).to({rotation:74.263,x:272.4,y:167.1},0).wait(1).to({rotation:76.9153,x:272.6,y:170.8},0).wait(1).to({rotation:79.5675,x:272.7,y:174.55},0).wait(1).to({rotation:82.2198,x:272.85,y:178.3},0).wait(1).to({rotation:84.872,x:273,y:181.95},0).wait(1).to({rotation:87.5243,x:273.2,y:185.7},0).wait(1).to({rotation:90.1765,x:273.4,y:189.45},0).wait(1).to({rotation:92.8288,x:273.5,y:193.15},0).wait(1).to({rotation:95.481,x:273.7,y:196.85},0).wait(1).to({rotation:98.1333,x:273.85,y:200.55},0).wait(1).to({rotation:100.7855,x:273.95,y:204.3},0).wait(1).to({rotation:103.4377,x:274.15,y:208},0).wait(1).to({rotation:106.09,x:274.3,y:211.75},0).wait(1).to({rotation:108.7423,x:274.45,y:215.5},0).wait(1).to({rotation:111.3945,x:274.65,y:219.2},0).wait(1).to({rotation:114.0468,x:274.75,y:222.9},0).wait(1).to({rotation:116.699,x:274.95,y:226.65},0).wait(1).to({rotation:119.3513,x:275.1,y:230.3},0).wait(1).to({rotation:122.0035,x:275.25,y:234},0).wait(1).to({rotation:124.6558,x:275.4,y:237.8},0).wait(1).to({rotation:127.308,x:275.55,y:241.45},0).wait(1));

	// Layer_5
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_8.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:2.1875,x:268.55,y:66.45,alpha:0.6162},0).wait(1).to({rotation:4.375,x:269.25,y:69.9,alpha:0.6325},0).wait(1).to({rotation:6.5624,x:269.85,y:73.35,alpha:0.6488},0).wait(1).to({rotation:8.7499,x:270.5,y:76.85,alpha:0.665},0).wait(1).to({rotation:10.9374,x:271.05,y:80.3,alpha:0.6812},0).wait(1).to({rotation:13.1249,x:271.7,y:83.75,alpha:0.6975},0).wait(1).to({rotation:15.3124,x:272.35,y:87.2,alpha:0.7138},0).wait(1).to({rotation:17.4998,x:272.95,y:90.7,alpha:0.73},0).wait(1).to({rotation:19.6873,x:273.55,y:94.2,alpha:0.7462},0).wait(1).to({rotation:21.8748,x:274.15,y:97.6,alpha:0.7625},0).wait(1).to({rotation:24.0623,x:274.8,y:101.05,alpha:0.7788},0).wait(1).to({rotation:26.2498,x:275.4,y:104.55,alpha:0.795},0).wait(1).to({rotation:28.4372,x:276,y:108,alpha:0.8112},0).wait(1).to({rotation:30.6247,x:276.65,y:111.5,alpha:0.8275},0).wait(1).to({rotation:32.8122,x:277.25,y:114.9,alpha:0.8438},0).wait(1).to({rotation:34.9997,x:277.9,y:118.4,alpha:0.86},0).wait(1).to({rotation:37.1871,x:278.5,y:121.85,alpha:0.8763},0).wait(1).to({rotation:39.3746,x:279.1,y:125.3,alpha:0.8925},0).wait(1).to({rotation:41.5621,x:279.8,y:128.75,alpha:0.9088},0).wait(1).to({rotation:43.7496,x:280.4,y:132.25,alpha:0.925},0).wait(1).to({rotation:45.9371,x:281,y:135.7,alpha:0.9413},0).wait(1).to({rotation:48.1245,x:281.65,y:139.15,alpha:0.9575},0).wait(1).to({rotation:50.312,x:282.3,y:142.6,alpha:0.9738},0).wait(1).to({rotation:52.4995,x:282.85,y:146.1,alpha:0.99},0).wait(1).to({rotation:54.687,x:283.45,y:149.55},0).wait(1).to({rotation:56.8745,x:284.1,y:153},0).wait(1).to({rotation:59.0619,x:284.75,y:156.5},0).wait(1).to({rotation:61.2494,x:285.4,y:159.9},0).wait(1).to({rotation:63.4369,x:286,y:163.4},0).wait(1).to({rotation:65.6244,x:286.6,y:166.85},0).wait(1).to({rotation:67.8119,x:287.2,y:170.3},0).wait(1).to({rotation:69.9993,x:287.85,y:173.8},0).wait(1).to({rotation:72.1868,x:288.5,y:177.25},0).wait(1).to({rotation:74.3743,x:289.1,y:180.65},0).wait(1).to({rotation:76.5618,x:289.7,y:184.2},0).wait(1).to({rotation:78.7493,x:290.3,y:187.65},0).wait(1).to({rotation:80.9367,x:290.95,y:191.05},0).wait(1).to({rotation:83.1242,x:291.6,y:194.55},0).wait(1).to({rotation:85.3117,x:292.2,y:198},0).wait(1).to({rotation:87.4992,x:292.8,y:201.45},0).wait(1).to({rotation:89.6866,x:293.4,y:204.95},0).wait(1).to({rotation:91.8741,x:294.1,y:208.4},0).wait(1).to({rotation:94.0616,x:294.65,y:211.85},0).wait(1).to({rotation:96.2491,x:295.3,y:215.3},0).wait(1).to({rotation:98.4366,x:295.95,y:218.8},0).wait(1).to({rotation:100.624,x:296.55,y:222.25},0).wait(1).to({rotation:102.8115,x:297.15,y:225.7},0).wait(1).to({rotation:104.999,x:297.75,y:229.15},0).wait(1));

	// Layer_4
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_9.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:1.7232,x:269,y:65.95,alpha:0.6162},0).wait(1).to({rotation:3.4463,x:270,y:69,alpha:0.6325},0).wait(1).to({rotation:5.1695,x:271,y:72.05,alpha:0.6488},0).wait(1).to({rotation:6.8927,x:271.95,y:75.05,alpha:0.665},0).wait(1).to({rotation:8.6159,x:273,y:78.1,alpha:0.6812},0).wait(1).to({rotation:10.339,x:274,y:81.1,alpha:0.6975},0).wait(1).to({rotation:12.0622,x:274.95,y:84.1,alpha:0.7138},0).wait(1).to({rotation:13.7854,x:276,y:87.1,alpha:0.73},0).wait(1).to({rotation:15.5086,x:277,y:90.15,alpha:0.7462},0).wait(1).to({rotation:17.2317,x:278,y:93.15,alpha:0.7625},0).wait(1).to({rotation:18.9549,x:279.05,y:96.15,alpha:0.7788},0).wait(1).to({rotation:20.6781,x:280,y:99.15,alpha:0.795},0).wait(1).to({rotation:22.4012,x:281.05,y:102.2,alpha:0.8112},0).wait(1).to({rotation:24.1244,x:282,y:105.2,alpha:0.8275},0).wait(1).to({rotation:25.8476,x:283,y:108.25,alpha:0.8438},0).wait(1).to({rotation:27.5708,x:284,y:111.2,alpha:0.86},0).wait(1).to({rotation:29.2939,x:285.05,y:114.2,alpha:0.8763},0).wait(1).to({rotation:31.0171,x:286,y:117.3,alpha:0.8925},0).wait(1).to({rotation:32.7403,x:287,y:120.3,alpha:0.9088},0).wait(1).to({rotation:34.4635,x:288.05,y:123.35,alpha:0.925},0).wait(1).to({rotation:36.1866,x:289.05,y:126.3,alpha:0.9413},0).wait(1).to({rotation:37.9098,x:290,y:129.35,alpha:0.9575},0).wait(1).to({rotation:39.633,x:291,y:132.35,alpha:0.9738},0).wait(1).to({rotation:41.3562,x:292,y:135.4,alpha:0.99},0).wait(1).to({rotation:43.0793,x:293.05,y:138.35},0).wait(1).to({rotation:44.8025,x:294.05,y:141.4},0).wait(1).to({rotation:46.5257,x:295,y:144.45},0).wait(1).to({rotation:48.2488,x:296.05,y:147.45},0).wait(1).to({rotation:49.972,x:297.05,y:150.45},0).wait(1).to({rotation:51.6952,x:298.05,y:153.5},0).wait(1).to({rotation:53.4184,x:299.05,y:156.5},0).wait(1).to({rotation:55.1415,x:300,y:159.5},0).wait(1).to({rotation:56.8647,x:301.05,y:162.5},0).wait(1).to({rotation:58.5879,x:302.05,y:165.55},0).wait(1).to({rotation:60.3111,x:303,y:168.55},0).wait(1).to({rotation:62.0342,x:304,y:171.6},0).wait(1).to({rotation:63.7574,x:305.05,y:174.6},0).wait(1).to({rotation:65.4806,x:306.05,y:177.6},0).wait(1).to({rotation:67.2037,x:307.05,y:180.65},0).wait(1).to({rotation:68.9269,x:308.1,y:183.65},0).wait(1).to({rotation:70.6501,x:309.05,y:186.65},0).wait(1).to({rotation:72.3733,x:310.05,y:189.65},0).wait(1).to({rotation:74.0964,x:311.05,y:192.65},0).wait(1).to({rotation:75.8196,x:312.1,y:195.7},0).wait(1).to({rotation:77.5428,x:313.1,y:198.7},0).wait(1).to({rotation:79.266,x:314.05,y:201.75},0).wait(1).to({rotation:80.9891,x:315.1,y:204.75},0).wait(1).to({rotation:82.7123,x:316.05,y:207.8},0).wait(1));

	// Layer_3
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_10.alpha = 0.6094;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:1.25,x:269.05,y:65.4,alpha:0.6258},0).wait(1).to({rotation:2.5,x:270.1,y:67.8,alpha:0.6417},0).wait(1).to({rotation:3.75,x:271.15,y:70.25,alpha:0.6575},0).wait(1).to({rotation:5,x:272.25,y:72.65,alpha:0.6733},0).wait(1).to({rotation:6.2499,x:273.3,y:75.05,alpha:0.6892},0).wait(1).to({rotation:7.4999,x:274.35,y:77.45,alpha:0.705},0).wait(1).to({rotation:8.7499,x:275.45,y:79.9,alpha:0.7208},0).wait(1).to({rotation:9.9999,x:276.5,y:82.3,alpha:0.7367},0).wait(1).to({rotation:11.2499,x:277.55,y:84.75,alpha:0.7525},0).wait(1).to({rotation:12.4999,x:278.65,y:87.15,alpha:0.7683},0).wait(1).to({rotation:13.7499,x:279.75,y:89.55,alpha:0.7842},0).wait(1).to({rotation:14.9999,x:280.75,y:92,alpha:0.8},0).wait(1).to({rotation:16.2499,x:281.85,y:94.4,alpha:0.8158},0).wait(1).to({rotation:17.4999,x:282.9,y:96.85,alpha:0.8317},0).wait(1).to({rotation:18.7498,x:284,y:99.25,alpha:0.8475},0).wait(1).to({rotation:19.9998,x:285.05,y:101.7,alpha:0.8633},0).wait(1).to({rotation:21.2498,x:286.1,y:104.05,alpha:0.8792},0).wait(1).to({rotation:22.4998,x:287.15,y:106.45,alpha:0.895},0).wait(1).to({rotation:23.7498,x:288.25,y:108.9,alpha:0.9108},0).wait(1).to({rotation:24.9998,x:289.3,y:111.3,alpha:0.9267},0).wait(1).to({rotation:26.2498,x:290.35,y:113.75,alpha:0.9425},0).wait(1).to({rotation:27.4998,x:291.45,y:116.15,alpha:0.9583},0).wait(1).to({rotation:28.7498,x:292.5,y:118.55,alpha:0.9742},0).wait(1).to({rotation:29.9998,x:293.6,y:121,alpha:0.99},0).wait(1).to({rotation:31.2497,x:294.65,y:123.35},0).wait(1).to({rotation:32.4997,x:295.7,y:125.85},0).wait(1).to({rotation:33.7497,x:296.75,y:128.2},0).wait(1).to({rotation:34.9997,x:297.8,y:130.65},0).wait(1).to({rotation:36.2497,x:298.9,y:133.05},0).wait(1).to({rotation:37.4997,x:299.95,y:135.5},0).wait(1).to({rotation:38.7497,x:301,y:137.9},0).wait(1).to({rotation:39.9997,x:302.1,y:140.3},0).wait(1).to({rotation:41.2497,x:303.15,y:142.7},0).wait(1).to({rotation:42.4996,x:304.25,y:145.1},0).wait(1).to({rotation:43.7496,x:305.3,y:147.55},0).wait(1).to({rotation:44.9996,x:306.4,y:150},0).wait(1).to({rotation:46.2496,x:307.4,y:152.4},0).wait(1).to({rotation:47.4996,x:308.5,y:154.8},0).wait(1).to({rotation:48.7496,x:309.55,y:157.2},0).wait(1).to({rotation:49.9996,x:310.6,y:159.65},0).wait(1).to({rotation:51.2496,x:311.7,y:162.1},0).wait(1).to({rotation:52.4996,x:312.75,y:164.5},0).wait(1).to({rotation:53.7496,x:313.85,y:166.85},0).wait(1).to({rotation:54.9995,x:314.9,y:169.3},0).wait(1).to({rotation:56.2495,x:315.95,y:171.7},0).wait(1).to({rotation:57.4995,x:317.05,y:174.15},0).wait(1).to({rotation:58.7495,x:318.15,y:176.6},0).wait(1).to({rotation:59.9995,x:319.15,y:179},0).wait(1));

	// Layer_2
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_11.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:0.8333,x:268.9,y:64.8,alpha:0.5979},0).wait(1).to({rotation:1.6667,x:269.85,y:66.6,alpha:0.5958},0).wait(1).to({rotation:2.5,x:270.75,y:68.45,alpha:0.5938},0).wait(1).to({rotation:3.3333,x:271.75,y:70.25,alpha:0.5917},0).wait(1).to({rotation:4.1667,x:272.65,y:72.05,alpha:0.5896},0).wait(1).to({rotation:5,x:273.6,y:73.9,alpha:0.5875},0).wait(1).to({rotation:5.8333,x:274.5,y:75.65,alpha:0.5854},0).wait(1).to({rotation:6.6667,x:275.45,y:77.55,alpha:0.5833},0).wait(1).to({rotation:7.5,x:276.35,y:79.35,alpha:0.5813},0).wait(1).to({rotation:8.3333,x:277.35,y:81.15,alpha:0.5792},0).wait(1).to({rotation:9.1667,x:278.3,y:82.95,alpha:0.5771},0).wait(1).to({rotation:10,x:279.2,y:84.8,alpha:0.575},0).wait(1).to({rotation:10.8333,x:280.15,y:86.55,alpha:0.5729},0).wait(1).to({rotation:11.6667,x:281.05,y:88.4,alpha:0.5708},0).wait(1).to({rotation:12.5,x:282,y:90.25,alpha:0.5688},0).wait(1).to({rotation:13.3333,x:282.9,y:92,alpha:0.5667},0).wait(1).to({rotation:14.1667,x:283.9,y:93.9,alpha:0.5646},0).wait(1).to({rotation:15,x:284.8,y:95.7,alpha:0.5625},0).wait(1).to({rotation:15.8333,x:285.75,y:97.5,alpha:0.5604},0).wait(1).to({rotation:16.6667,x:286.7,y:99.3,alpha:0.5583},0).wait(1).to({rotation:17.5,x:287.6,y:101.15,alpha:0.5562},0).wait(1).to({rotation:18.3333,x:288.55,y:102.95,alpha:0.5542},0).wait(1).to({rotation:19.1667,x:289.5,y:104.8,alpha:0.5521},0).wait(1).to({rotation:20,x:290.45,y:106.65,alpha:0.55},0).wait(1).to({rotation:20.8333,x:291.4,y:108.45,alpha:0.5683},0).wait(1).to({rotation:21.6667,x:292.3,y:110.2,alpha:0.5867},0).wait(1).to({rotation:22.5,x:293.2,y:112.05,alpha:0.605},0).wait(1).to({rotation:23.3333,x:294.15,y:113.9,alpha:0.6233},0).wait(1).to({rotation:24.1667,x:295.1,y:115.75,alpha:0.6417},0).wait(1).to({rotation:25,x:296.05,y:117.5,alpha:0.66},0).wait(1).to({rotation:25.8333,x:297,y:119.35,alpha:0.6783},0).wait(1).to({rotation:26.6667,x:297.9,y:121.15,alpha:0.6967},0).wait(1).to({rotation:27.5,x:298.85,y:122.95,alpha:0.715},0).wait(1).to({rotation:28.3333,x:299.75,y:124.8,alpha:0.7333},0).wait(1).to({rotation:29.1667,x:300.75,y:126.6,alpha:0.7517},0).wait(1).to({rotation:30,x:301.65,y:128.45,alpha:0.77},0).wait(1).to({rotation:30.8333,x:302.6,y:130.25,alpha:0.7883},0).wait(1).to({rotation:31.6667,x:303.55,y:132.05,alpha:0.8067},0).wait(1).to({rotation:32.5,x:304.45,y:133.9,alpha:0.825},0).wait(1).to({rotation:33.3333,x:305.4,y:135.7,alpha:0.8433},0).wait(1).to({rotation:34.1667,x:306.3,y:137.5,alpha:0.8617},0).wait(1).to({rotation:35,x:307.25,y:139.3,alpha:0.88},0).wait(1).to({rotation:35.8333,x:308.2,y:141.15,alpha:0.8983},0).wait(1).to({rotation:36.6667,x:309.15,y:142.95,alpha:0.9167},0).wait(1).to({rotation:37.5,x:310.05,y:144.8,alpha:0.935},0).wait(1).to({rotation:38.3333,x:311.05,y:146.6,alpha:0.9533},0).wait(1).to({rotation:39.1667,x:311.9,y:148.4,alpha:0.9717},0).wait(1).to({rotation:40,x:312.9,y:150.25,alpha:0.99},0).wait(1));

	// Layer_1
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(268,63,1,1,0,0,0,40,55);
	this.instance_12.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:268.4,y:64.35,alpha:0.6081},0).wait(1).to({x:268.8,y:65.75,alpha:0.6162},0).wait(1).to({x:269.2,y:67.15,alpha:0.6244},0).wait(1).to({x:269.6,y:68.5,alpha:0.6325},0).wait(1).to({x:270,y:69.9,alpha:0.6406},0).wait(1).to({x:270.4,y:71.3,alpha:0.6488},0).wait(1).to({x:270.8,y:72.65,alpha:0.6569},0).wait(1).to({x:271.2,y:74.05,alpha:0.665},0).wait(1).to({x:271.6,y:75.45,alpha:0.6731},0).wait(1).to({x:272,y:76.8,alpha:0.6812},0).wait(1).to({x:272.4,y:78.2,alpha:0.6894},0).wait(1).to({x:272.8,y:79.6,alpha:0.6975},0).wait(1).to({x:273.2,y:80.95,alpha:0.7056},0).wait(1).to({x:273.6,y:82.35,alpha:0.7138},0).wait(1).to({x:274,y:83.75,alpha:0.7219},0).wait(1).to({x:274.4,y:85.1,alpha:0.73},0).wait(1).to({x:274.8,y:86.5,alpha:0.7381},0).wait(1).to({x:275.2,y:87.9,alpha:0.7462},0).wait(1).to({x:275.6,y:89.25,alpha:0.7544},0).wait(1).to({x:276,y:90.65,alpha:0.7625},0).wait(1).to({x:276.4,y:92.05,alpha:0.7706},0).wait(1).to({x:276.8,y:93.4,alpha:0.7788},0).wait(1).to({x:277.2,y:94.8,alpha:0.7869},0).wait(1).to({x:277.6,y:96.2,alpha:0.795},0).wait(1).to({x:278,y:97.55,alpha:0.8031},0).wait(1).to({x:278.4,y:98.95,alpha:0.8112},0).wait(1).to({x:278.8,y:100.35,alpha:0.8194},0).wait(1).to({x:279.2,y:101.7,alpha:0.8275},0).wait(1).to({x:279.6,y:103.1,alpha:0.8356},0).wait(1).to({x:280,y:104.5,alpha:0.8438},0).wait(1).to({x:280.4,y:105.85,alpha:0.8519},0).wait(1).to({x:280.8,y:107.25,alpha:0.86},0).wait(1).to({x:281.2,y:108.65,alpha:0.8681},0).wait(1).to({x:281.6,y:110,alpha:0.8763},0).wait(1).to({x:282,y:111.4,alpha:0.8844},0).wait(1).to({x:282.4,y:112.8,alpha:0.8925},0).wait(1).to({x:282.8,y:114.15,alpha:0.9006},0).wait(1).to({x:283.2,y:115.55,alpha:0.9088},0).wait(1).to({x:283.6,y:116.95,alpha:0.9169},0).wait(1).to({x:284,y:118.3,alpha:0.925},0).wait(1).to({x:284.4,y:119.7,alpha:0.9331},0).wait(1).to({x:284.8,y:121.1,alpha:0.9413},0).wait(1).to({x:285.2,y:122.45,alpha:0.9494},0).wait(1).to({x:285.6,y:123.85,alpha:0.9575},0).wait(1).to({x:286,y:125.25,alpha:0.9656},0).wait(1).to({x:286.4,y:126.6,alpha:0.9738},0).wait(1).to({x:286.8,y:128,alpha:0.9819},0).wait(1).to({x:287.2,y:129.4,alpha:0.99},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(391.6,207.9,-4.7000000000000455,106.29999999999998);
// library properties:
lib.properties = {
	id: '3B31FDE7CF7E24408768B37AB8267869',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/backsidemotion3_atlas_1.png?1764039652076", id:"backsidemotion3_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3B31FDE7CF7E24408768B37AB8267869'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;