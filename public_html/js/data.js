
var data = {};

data.hero = {
    "tileSize" : 16,
    "row" : 4,
    "col" : 5,
    "health" : 100,
    "type" : 'HERO',
    "img" : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRElEQVQ4T42Sr47CQBDGp29AqqtOVCEuCBQ5wRNcKk5tEOimmiAQ5HI5daIPgCCoEw1PgLigEJcTqOrqpm+w5Jvct1lo+TNm6bLfb2a+mUD+o65rG4ZhgM9X82P740iOu0pwvk+f9L4r3B8E+OLt5iX4XRs7mGweA0yzo2ZE5vHwr5Uwy7IW6KyCr22jYmTO89xeEu4CWAF6BqAoCsdIkkTuAmAiPPArAARihDHGAWl4y0S+YAsEQFwtlw4QLRYCiHOZU6DrDwOAhIhojAzi3eFZr6Let1TNm6zyvlaAzDy1AjxiNpqUpqmN41gBAGGkV1sgYNQ7yL4ZSlmWKiSAld0EsA1/47r2gBAaCN3VFUUb6J3he8ER3gQUs5FNPve6F3g4ieayrj7OlhP70lkBxHgJAE5AAEBcQloAin0Afvv3hKCCE4hs1H4zr/zrAAAAAElFTkSuQmCC'
};


data.enemies = {
    "dark" : {
        "map": "middle",
        "tileSize" : 16,
        "row" : 4,
        "col" : 5,
        "health" : 100,
        "level" : 1,
        "alive" : true,
        "img" : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAk0lEQVQ4T6WT4RKAIAiD4/0fuqS7cXMOq4tfpfA5GcY54vgR4QARcTiuW18AXTFE6v5WQSYjUlGrwCV2bQGoFKEHDMlNTdT/ykkApHWQtnhcceqBAnbuwqUb8KVQoaUAkCKTA+xEfnPuosDdl0+1Lrw5vVNRCnh0dz3RvAWgQ8Uj7FQ82tj1ZLJRHwoPFr8BXc+6C/LWruYtO9QLAAAAAElFTkSuQmCC'
    }  
};

data.tile = {
    "size" : 16,
    "img" : 'data:image/png;base64,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',
    "map" : {"0":{"type":"floor"},"1":{"type":"wall"},"2":{"type":"wall"},"3":{"type":"wall"},"4":{"type":"wall"},"5":{"type":"wall"},"6":{"type":"floor"},"7":{"type":"wall"},"16":{"type":"wall"},"17":{"type":"wall"},"18":{"type":"wall"},"19":{"type":"wall"},"20":{"type":"wall"},"21":{"type":"wall"},"22":{"type":"sign"},"23":{"type":"wall"},"32":{"type":"wall"},"33":{"type":"wall"},"34":{"type":"wall"},"35":{"type":"wall"},"36":{"type":"wall"},"37":{"type":"wall"},"38":{"type":"wall"},"39":{"type":"wall"},"48":{"type":"wall"},"49":{"type":"wall"},"50":{"type":"wall"},"51":{"type":"wall"},"52":{"type":"wall"},"53":{"type":"wall"},"54":{"type":"wall"},"55":{"type":"wall"},"64":{"type":"wall"},"65":{"type":"wall"},"66":{"type":"wall"},"67":{"type":"wall"},"68":{"type":"floor"},"69":{"type":"wall"},"70":{"type":"wall"},"71":{"type":"wall"},"80":{"type":"wall"},"81":{"type":"wall"},"82":{"type":"wall"},"83":{"type":"wall"},"84":{"type":"enemy"},"85":{"type":"switch"},"86":{"type":"switch"},"87":{"type":"item"},"96":{"type":"wall"},"97":{"type":"lock"},"98":{"type":"door"},"99":{"type":"wall"},"100":{"type":"wall"},"101":{"type":"door"},"102":{"type":"door"},"103":{"type":"door"},"112":{"type":"wall"},"113":{"type":"wall"},"114":{"type":"wall"},"115":{"type":"wall"},"116":{"type":"wall"},"117":{"type":"wall"},"118":{"type":"wall"},"119":{"type":"wall"},"128":{"type":"wall"},"129":{"type":"wall"},"130":{"type":"wall"},"131":{"type":"wall"},"132":{"type":"wall"},"133":{"type":"floor"},"134":{"type":"wall"},"135":{"type":"wall"},"144":{"type":"wall"},"145":{"type":"wall"},"146":{"type":"wall"},"147":{"type":"wall"},"148":{"type":"wall"},"149":{"type":"wall"},"150":{"type":"sign"},"151":{"type":"wall"},"160":{"type":"wall"},"161":{"type":"wall"},"162":{"type":"wall"},"163":{"type":"wall"},"164":{"type":"wall"},"165":{"type":"wall"},"166":{"type":"enemy"},"167":{"type":"wall"},"176":{"type":"wall"},"177":{"type":"wall"},"178":{"type":"wall"},"179":{"type":"enemy"},"180":{"type":"wall"},"181":{"type":"enemy"},"182":{"type":"wall"},"183":{"type":"wall"},"192":{"type":"wall"},"193":{"type":"wall"},"194":{"type":"wall"},"195":{"type":"wall"},"196":{"type":"wall"},"197":{"type":"enemy"},"198":{"type":"wall"},"199":{"type":"wall"},"208":{"type":"wall"},"209":{"type":"wall"},"210":{"type":"wall"},"211":{"type":"wall"},"212":{"type":"wall"},"213":{"type":"wall"},"214":{"type":"wall"},"215":{"type":"wall"},"224":{"type":"wall"},"225":{"type":"wall"},"226":{"type":"door"},"227":{"type":"wall"},"228":{"type":"wall"},"229":{"type":"wall"},"230":{"type":"wall"},"231":{"type":"wall"},"240":{"type":"wall"},"241":{"type":"wall"},"242":{"type":"wall"},"243":{"type":"wall"},"244":{"type":"wall"},"245":{"type":"wall"},"246":{"type":"wall"},"247":{"type":"wall"}}
};

data.game = {
    "width" : 256,
    "height" : 256,
    "map": "middle",
    "world" : {}   
};

data.game.world = {"top":{"exits":{"top":"","bottom":"middle","left":"","right":""},"map":[[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],[4,"0","0","0",3,98,3,"0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4],[4,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",4]],"config":{"37":{"exit":"stuck","switch":"","msg":"","enemy":"","chest":"","item":""}}},"middle":{"exits":{"top":"top","bottom":"bottom","left":"left","right":"middleright"},"map":[[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0",6,6,6,"0","0","0","0","0","0"],["0","0","0","0","0","0",6,22,6,"0","0","0","0","0","0"],["0","0","0","0","0","0",6,6,6,"0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2]],"config":{"119":{"exit":"","switch":"","msg":"Hello","enemy":"","chest":"","item":""},"229":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""}}},"left":{"exits":{"top":"","bottom":"","left":"","right":"middle"},"map":[[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]],"config":{"37":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""}}},"right":{"exits":{"top":"","bottom":"","left":"middleright","right":""},"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"config":{"37":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""},"229":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""}}},"bottom":{"exits":{"top":"middle","bottom":"","left":"","right":""},"map":[[69,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0",68,"0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0",68,"0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0","0","0","0",68,"0","0","0","0","0","0",69],[69,"0","0","0","0","0","0","0","0","0","0","0","0",68,"0",69],[69,"0","0",68,"0","0","0","0","0","0","0",68,"0","0","0",69],[69,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",69],[69,"0","0","0","0","0","0",68,"0","0","0","0","0","0","0",69],[69,0,"0","0","0","0","0","0","0","0","0","0","0","0",183,69],[69,71,"0","0",68,"0","0","0","0","0","0","0",68,"0",70,69],[69,53,53,53,53,53,53,53,53,53,53,53,53,53,53,69],[198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198]],"config":{"37":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""}}},"stuck":{"exits":{"top":"","bottom":"","left":"","right":""},"map":[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",3],[3,"0","0","0",3,98,3,"0","0","0","0","0","0","0","0",3],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],"config":{"229":{"exit":"middle","switch":"","msg":"","enemy":"","chest":"","item":""}}},"middleright":{"exits":{"top":"middlerighttop","bottom":"","left":"middle","right":"right"},"map":[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],"config":{"14":{"exit":"middlerighttop","switch":"","msg":"","enemy":"","chest":"","item":""},"119":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""},"189":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""}}},"middlerighttop":{"exits":{"top":"","bottom":"middleright","left":"","right":"right"},"map":[[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,"0","0","0","0","0","0","0","0","0","0","0","0","0","0",2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,"0",2]],"config":{"189":{"exit":"","switch":"","msg":"","enemy":"","chest":"","item":""}}}};


