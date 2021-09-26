
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
    let billyToRose = 'LyingOnTheSofa';

    return{
        sendMessage: function(){
            $.publish(billyToRose);
        },

        subscribe: function(){
            $.subscribe('Go-away!', function(e){
                console.log('Rose to Bill:', 'Go-away!')
                console.log('AAAAAAAA RUN!!!');
            })
        }

    }
})();


let jack = (function(){
    let jackToRose = 'Hi,I-like-you';

    return{
        sendMessage: function(){
            $.publish(jackToRose);
            return jackToRose;
        },

        subscribe: function(){
                $.subscribe('Happy-smile', function(e){
                console.log('Rose to Jack: ', 'Happy-smile');
            })
        }
    }
})();

let rose = (function(){
     let roseToBill = 'Go-away!';
     let roseToJack = 'Happy-smile';

    return{
        subscribe: function(){

            
            $.subscribe('Hi,I-like-you', function(e){
                console.log('Jack to Rose: ', 'Hi,I-like-you');
            }),

            $.subscribe('LyingOnTheSofa', function(e){
                console.log('Billy to Rose: ', 'LyingOnTheSofa');
            });
        },

        sendToBill: function(){
            $.publish(roseToBill);
        },

        sendToJack: function(){
            $.publish(roseToJack);
        }
    }
})();


rose.subscribe();
billy.subscribe(); 
jack.subscribe();
billy.sendMessage();
jack.sendMessage();
rose.sendToBill();
rose.sendToJack();



