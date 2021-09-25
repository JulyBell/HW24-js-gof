
(function( $ ) {
    var o = $( {} );

    $.each({
        trigger: 'publish',
        on: 'subscribe',
        off: 'unsubscribe'
    }, function( key, val ) {
        jQuery[val] = function() {
            o[key].apply( o, arguments );
        };
    });
})( jQuery );


let billy = (function(){
    let name = 'Billy';
    let girlfriendName = 'Rose';
    let billyToRose = 'Hello, it is ' + name + '.' + girlfriendName + ', I am busy today. See you another time';

    return{
        sendMessage: function(){
            $.publish(billyToRose);
            return billyToRose;
        },

        subscribe: function(){
            $.subscribe(rose.sendToBill(), function(e){
                console.log('Rose to Bill: ', rose.sendToBill());
                console.log('AAAAAAAA RUN!!!');
            }())
        }

    }
})();


let jack = (function(){
    let name = 'Jack';
    let girlfriendName = 'Rose';
    let jackToRose = 'Hi, '+ girlfriendName + ' It is ' + name + '. I like you';

    return{
        sendMessage: function(){
            $.publish(jackToRose);
            return jackToRose;
        },

        subscribe: function(){
                $.subscribe(rose.sendToJack(), function(e){
                console.log('Rose to Jack: ', rose.sendToJack());
            }())
        }
    }
})();

let rose = (function(){
    let name = 'Rose';
     let roseToBill = 'There is a great grizzly over there! It is gonna ohm-nom-nom you!:)))';
     let roseToJack = 'Happy smile';

    return{
        subscribe: function(){

            
            $.subscribe(jack.sendMessage(), function(e){
                console.log('Jack to Rose: ', jack.sendMessage());
            }()),

            $.subscribe(billy.sendMessage(), function(e){
                console.log('Billy to Rose: ', billy.sendMessage());
            }());
        },

        sendToBill: function(){
            $.publish(roseToBill);
            return roseToBill;
        },

        sendToJack: function(){
            $.publish(roseToJack);
            return roseToJack;
        }
    }
})();


rose.subscribe();
billy.subscribe(); 
jack.subscribe();



