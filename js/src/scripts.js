var PRODUCTO = {
    data: null,
    carousel: null,
    tabs: null,
    form: document.getElementById('comprar'),
    ejercicio: $('button.ch-btn[property]'),
    init: function(){
        this.setTabs();
        this.actions();
    },
    setCarousel: function(){
        this.carousel = $('#carousel').carousel({pagination:true});
    },
    setTabs: function(){
        this.tabs = $('#tabs').tabs();
    },
    actions: function(){
        var self = this;
        self.form.addEventListener('submit',function(e){
            e.preventDefault();
            var statusBuy = $('.ch-box-ok[property]');
            statusBuy.html('Gracias por comprar un <b>'+ statusBuy.attr('property').toUpperCase().replace(new RegExp('-'),' ')+'</b> en MercadoLibre');
            statusBuy.fadeIn(function(){
                setTimeout(function(){
                    statusBuy.fadeOut();
                },500);
            });
        });

        self.ejercicio.on('click tap',function(e){
            e.preventDefault();
            var target = $(this).attr('property');
            $(target).fadeIn(function () {
                self.setCarousel();
            });
        })
    }
};

PRODUCTO.init();
