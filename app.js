
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
            console.log('Billy sent a massage');
            $.publish(billyToRose);
            return billyToRose;
        },

        subscribe: function(){
            $.subscribe(rose.sendToBill(), function(e){
                console.log(rose.sendToBill());
                console.log('AAAAAAAA RUN!!!');
            })
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
            return $.subscribe(rose.sendToBill(), function(e){
                console.log('roseToJack', rose.sendToBill());
            })
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
                console.log('jackToRose', jack.sendMessage());
            }),

            $.subscribe(billy.sendMessage(), function(e){
                console.log('billyToRose', billy.sendMessage());
                
            });
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

rose.sendToBill(); 
rose.sendToJack(); 
rose.subscribe();
billy.subscribe(); 
jack.sendMessage();


