let billyToRose = '';
let jackToRose = '';
let roseToBill = '';
let roseToJack = '';


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
    let girlfriendName = 'Rose'
    billyToRose = 'Hello, it is ' + name + '.' + girlfriendName + ', I am busy today. See you another time';

    return{
        sendMessage: function(){
            console.log('Billy sent a massage');
           return $.publish(billyToRose);
        },

        subscribe: function(){
            
            $.subscribe(roseToBill, function(){
                console.log('rose to bill: ', roseToBill);
                console.log('AAAAAAAA RUN!!!');
            })
        
        }
    }
})();


let jack = (function(){
    let name = 'Jack';
    let girlfriendName = 'Rose'
    jackToRose = 'Hi '+ girlfriendName + 'It is' + name + 'I like you';

    return{
        sendMessage: function(){
            return $.publish(jackToRose);
        },

        subscribe: function(){
            $.subscribe(roseToJack, function(){
                console.log('roseToJack', roseToJack);
            })
        }
    }
})();

let rose = (function(){
    let name = 'Rose';
     roseToBill = 'There is a great grizzly over there! It is gonna ohm-nom-nom you!:)))';
     roseToJack = 'Happy smile';

    return{
        subscribe: function(){

            $.subscribe(jackToRose, function(){
                console.log(jackToRose);
                return $.publish(roseToJack);
            })

            $.subscribe(billyToRose, function(){
                console.log(billyToRose);
                return $.publish(roseToBill)
            });
        }
    }
})();

console.log(billyToRose , jackToRose, roseToJack, roseToBill);
billy.subscribe();
jack.subscribe();
rose.subscribe();

