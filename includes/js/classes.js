/* Class Movie */

var Movie = class {
    constructor(title, id, x, y, z){
        this.movieID = id;
        this.title = title;
        this.x = x;
        this.y = y;
        this.z = z;
    }
};

var MovieV2 = class {
    constructor(rank, score, color, title, id, x, y, z){
        this.rank = rank;
        this.score = score;
        this.movieID = id;
        this.title = title;
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = new THREE.Color( color );
        this.vec = new THREE.Vector3(x, y, z);
//        this.textbox = new TextboxV2(this.title);
    }
};


/* Text above points */ 

var Textbox = class {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'text-label';
        this.element.style.position = 'absolute';
        this.element.style.width = 100;
        this.element.style.height = 100;
        this.element.innerHTML = "";
        this.element.style.top = -1000;
        this.element.style.left = -1000;
        this.element.style.fontSize = "10px";
    };
    
    setParent(threejsobj) {
        this.parent = threejsobj;
        this.position = threejsobj.position;
    };

    updatePosition(cam, dist) {        
        var vector = new THREE.Vector3();
        this.parent.localToWorld( vector );

        vector.project( camera );

        vector.x = (+vector.x + 1)/2 * window.innerWidth;
        vector.y = (-vector.y + 1)/2 * window.innerHeight;
        this.element.style.left = vector.x + 'px';
        this.element.style.top = vector.y + 'px';
        this.element.style.fontSize = 10 + "px";
        this.update_fontsize(dist);
    };
    
    update_fontsize( dist ){
        let alpha = (params.font_close - params.font_far) / params.text_depth;
        let s = - alpha * dist + params.font_close + alpha;
        this.element.style.fontSize = s + "px";
    }

    setHTML(txt){
        this.element.innerHTML = txt;
    };
    
    hide(){
        this.element.style.display = "none";
    };
    
    show(){
        this.element.style.display = "block";
    };
    
};

var TextboxV2 = class {
    constructor(text) {
        this.element = document.createElement('div');
        this.element.className = 'text-label';
        this.element.style.position = 'absolute';
        this.element.style.width = 100;
        this.element.style.height = 100;
        this.element.innerHTML = text;
        this.element.style.top = -1000;
        this.element.style.left = -1000;
        this.element.style.fontSize = "10px";
    };
    
    updatePosition(cam, point) {     
        var vector = point.clone();
            vector.project(camera);

        vector.x = (+vector.x + 1)/2 * window.innerWidth;
        vector.y = (-vector.y + 1)/2 * window.innerHeight;
        this.element.style.left = vector.x + 'px';
        this.element.style.top = vector.y + 'px';
    };
    
};