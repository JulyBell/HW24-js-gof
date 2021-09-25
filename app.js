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
    let girlfriendName = 'Rose';
    billyToRose = 'Hello, it is ' + name + '.' + girlfriendName + ', I am busy today. See you another time';

    return{
        sendMessage: function(){
            console.log('Billy sent a massage');
            $.publish(billyToRose);
            return billyToRose;
        },

        subscribe: function(){
            
            $.subscribe(roseToBill, function(e){
                console.log('AAAAAAAA RUN!!!');
            })
        
        }
    }
})();


let jack = (function(){
    let name = 'Jack';
    let girlfriendName = 'Rose';
    jackToRose = 'Hi '+ girlfriendName + 'It is' + name + 'I like you';

    return{
        sendMessage: function(){
            $.publish(jackToRose);
            return jackToRose;
        },

        subscribe: function(){
            $.subscribe(roseToJack, function(e){
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

            $.subscribe(jackToRose, function(e){
                console.log(jackToRose);
                $.publish(roseToJack);
            })

            $.subscribe(billyToRose, function(e){
                console.log(billyToRose);
                $.publish(roseToBill)
            });
        }
    }
})();

console.log(billyToRose , jackToRose, roseToJack, roseToBill);


