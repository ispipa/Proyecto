/*function response()
{
    window.addEventListener('load', () => {
        fetch('https://ispipa.github.io/Proyecto/supermercados.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //pintarResultado(data);
            //document.querySelector('#resultado').innerHTML = JSON.stringify(data);
        })
    })
}
response();*/
validarDatos();
function validarDatos()
{
    (function () {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('click', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
      })()
}
const supermercados =
    {
        dia :{
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s3.dia.es/medias/productimages/h99/h5d/11102827380766.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
    //cambiar a partir de aqui
        ahorramas : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        mercadona : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        esclat : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        hiperCor : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        elCorteIngles : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        aldi : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        alcampo : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        lidl : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
        carrefour : {
            categorias:{
                platos_preparados:{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    2: {
                        nombre: "pizza jamón y queso envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    3: {
                        nombre: "pizza de pollo envase 410 grs", 
                        url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    4: {
                        nombre: "pizza atún y bacon envase 405 grs", 
                        url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                        precio: "2,89€",
                        categoria:"platos_preparados"
                    },
                    5: {
                        nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                        url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    6: {
                        nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    7: {
                        nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                        url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                        precio: "2,35€",
                        categoria:"platos_preparados"
                    },
                    8: {
                        nombre: "ensalada César tarrina 210 grs", 
                        url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                        precio: "2,19€",
                        categoria:"platos_preparados"
                    },
                    9: {
                        nombre: "croquetas de jamón bandeja 162 gr", 
                        url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                        precio: "2,15€",
                        categoria:"platos_preparados"
                    }
                },
                despensa:{
                    0: {
                        nombre: "arroz redondo paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                        precio: "1,65€",
                        categoria:"despensa"

                    },
                    1: {
                        nombre: "espaguetis paquete 1 Kg", 
                        url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                        precio: "1,25€",
                        categoria:"despensa"
                    },
                    2: {
                        nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                        url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                        precio: "2,97€",
                        categoria:"despensa"
                    },
                    3: {
                        nombre: "fideo cabellín paquete 500 grs", 
                        url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                        precio: "0,87€",
                        categoria:"despensa"
                    },
                    4: {
                        nombre: "cereales corn flakes caja 500 grs", 
                        url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                        precio: "2,70€",
                        categoria:"despensa"
                    },
                    5: {
                        nombre: "leche entera envase 1 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                        precio: "4,50€",
                        categoria:"despensa"
                    },
                    6: {
                        nombre: "cocktail frutos secos bolsa 500 grs", 
                        url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                        precio: "2,05€",
                        categoria:"despensa"
                    },
                    7: {
                        nombre: "aceite de oliva extra virgen botella 750 ml", 
                        url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                        precio: "5,75€",
                        categoria:"despensa"
                    },
                    8: {
                        nombre: "ajo en polvo frasco 65 grs", 
                        url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                        precio: "0,69€",
                        categoria:"despensa"
                    },
                    9: {
                        nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                        url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                        precio: "4,14€",
                        categoria:"despensa"
                    },
                    10: {
                        nombre: "café molido 100% Colombia paquete 250 grs", 
                        url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                        precio: "3,25€",
                        categoria:"despensa"
                    },
                    11: {
                        nombre: "tomate frito envase 350 grs", 
                        url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                        precio: "0,85€",
                        categoria:"despensa"
                    },
                    12: {
                        nombre: "caldo de pollo estuche 24 pastillas", 
                        url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                        precio: "0,97€",
                        categoria:"despensa"
                    },
                    13: {
                        nombre: "pan de molde formato familiar bolsa 700 grs", 
                        url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                        precio: "2,49€",
                        categoria:"despensa"
                    },
                    14: {
                        nombre: "salsa de soja botella 150 ml", 
                        url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                        precio: "1,99€",
                        categoria:"despensa"
                    },
                },
                mascotas:{
                    0: {
                        nombre: "alimento para perros mini bolsa 1,5 kg", 
                        url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                        precio: "6,39€",
                        categoria:"mascotas"
                    },
                    1: {
                        nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                        url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                        precio: "4,65€",
                        categoria:"mascotas"
                    },
                    2: {
                        nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                        url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                        precio: "6,79€",
                        categoria:"mascotas"
                    },
                    3: {
                        nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                        url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                        precio: "5,15€",
                        categoria:"mascotas"
                    },
                    4: {
                        nombre: "barritas con frutas para canarios bolsa 70 grs", 
                        url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                        precio: "1,45€",
                        categoria:"mascotas"
                    },
                    5: {
                        nombre: "One alimento para gatos junior bolsa 450 grs", 
                        url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                        precio: "2,79€",
                        categoria:"mascotas"
                    },
                    6: {
                        nombre: "cepillo raqueta caucho 1 ud", 
                        url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                        precio: "1,99€",
                        categoria:"mascotas"
                    },
                    7: {
                        nombre: "pelota para perros 1 ud", 
                        url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                        precio: "3,85€",
                        categoria:"mascotas"
                    },
                    8: {
                        nombre: "champú para perros pelo negro bote 300 ml", 
                        url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                        precio: "5,29€",
                        categoria:"mascotas"
                    },
                    9: {
                        nombre: "agua de colonia fresca para perros spray 125 ml", 
                        url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                        precio: "4,75€",
                        categoria:"mascotas"
                    },
                },
                bebe:{
                    0: {
                        nombre: "champú infantil clásico bote 750 ml", 
                        url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                        precio: "2,39€",
                        categoria:"bebe"
                    },
                    1: {
                        nombre: "toallitas para bebés envase 80 uds", 
                        url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                        precio: "1,09€",
                        categoria:"bebe"
                    },
                    2: {
                        nombre: "crema protectora de pañal tubo 100 ml", 
                        url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                        precio: "3,69€",
                        categoria:"bebe"
                    },
                    3: {
                        nombre: "jabon liquido infantil lavanda botella 750ml", 
                        url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                        precio: "1,99€",
                        categoria:"bebe"
                    },
                    4: {
                        nombre: "colonia infantil botella 750 ml", 
                        url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                        precio: "1,79€",
                        categoria:"bebe"
                    },
                    5: {
                        nombre: "leche infantil 3 bote 800 grs", 
                        url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                        precio: "14,99€",
                        categoria:"bebe"
                    },
                    6: {
                        nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                        url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                        precio: "14,49€",
                        categoria:"bebe"
                    },
                    7: {
                        nombre: "frutas variadas tarrito 2 x200 gr", 
                        url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                        precio: "1,77€",
                        categoria:"bebe"
                    },
                    8: {
                        nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                        url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                        precio: "4,45€",
                        categoria:"bebe"
                    },
                    9: {
                        nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                        url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                        precio: "3,05€",
                        categoria:"bebe"
                    },
                },
                cuidado_para_el_hogar:{
                    0: {
                        nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                        url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                        precio: "1,15€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    1: {
                        nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                        url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                        precio: "2,39€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    2: {
                        nombre: "palo rojo universal 1 ud", 
                        url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                        precio: "3,95€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    3: {
                        nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                        url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                        precio: "0,97€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    4: {
                        nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    5: {
                        nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                        url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                        precio: "1,59€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    6: {
                        nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                        url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                        precio: "8,49€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    7: {
                        nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                        url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                        precio: "2,69€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    8: {
                        nombre: "cepillo antichoque de escoba 3 en 1", 
                        url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                        precio: "4,65€",
                        categoria:"cuidado_para_el_hogar"
                    },
                    9: {
                        nombre: "tijeras multiusos S/M 1 ud", 
                        url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                        precio: "3,29€",
                        categoria:"cuidado_para_el_hogar"
                    },
                },
                cuidado_personal:{
                    0: {
                        nombre: "enjuague bucal zero 500 ml", "url": 
                        "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                        precio: "5,49€",
                        categoria:"cuidado_personal"
                    },
                    1: {
                        nombre: "compresa super con alas bolsa 12 uds", 
                        url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                        precio: "2,89€",
                        categoria:"cuidado_personal"
                    },
                    2: {
                        nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                        url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                        precio: "4,59€",
                        categoria:"cuidado_personal"
                    },
                    3: {
                        nombre: "Fresh step desodorante para pies spray 150 ml", 
                        url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                        precio: "5,50€",
                        categoria:"cuidado_personal"
                    },
                    4: {
                        nombre: "gel fijador efecto cemento tarro 300 ml", 
                        url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                        precio: "3,79€",
                        categoria:"cuidado_personal"
                    },
                    5: {
                        nombre: "cepillo dental professional medio blíster 1 ud", 
                        url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                        precio: "2,45€",
                        categoria:"cuidado_personal"
                    },
                    6: {
                        nombre: "hojas de afeitar classic blíster 5 uds", 
                        url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                        precio: "2,79€",
                        categoria:"cuidado_personal"
                    },
                    7: {
                        nombre: "desodorante apollo spray 150 ml", 
                        url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                        precio: "3,99€",
                        categoria:"cuidado_personal"
                    },
                    8: {
                        nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                        url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                        precio: "1,49€",
                        categoria:"cuidado_personal"
                    },
                    9: {
                        nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                        url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                        precio: "9,99€",
                        categoria:"cuidado_personal"
                    },
                },
                bebidas:{
                    0: {
                        nombre: "cerveza clásica lata 33 cl", 
                        url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                        precio: "0,50€",
                        categoria:"bebidas"
                    },
                    1: {
                        nombre: "cerveza lata 50 cl", 
                        url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    2: {
                        nombre: "bebida energética lata 25 cl", 
                        url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                        precio: "0,99€",
                        categoria:"bebidas"
                    },
                    3: {
                        nombre: "limón zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    4: {
                        nombre: "sprite botella 2 lts", 
                        url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                        precio: "1,45€",
                        categoria:"bebidas"
                    },
                    5: {
                        nombre: "COCA COLA zero botella 2 lts", 
                        url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                        precio: "1,84€",
                        categoria:"bebidas"
                    },
                    6: {
                        nombre: "sunny delight sabor florida botella 310 ml", 
                        url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                        precio: "0,89€",
                        categoria:"bebidas"
                    },
                    7: {
                        nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                        url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                        precio: "4,49€",
                        categoria:"bebidas"
                    },
                    8: {
                        nombre: "MONSTER bebida energética green lata 50 cl", 
                        url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                    9: {
                        nombre: "FANTA naranja zero botella 2 lts", 
                        url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                        precio: "1,59€",
                        categoria:"bebidas"
                    },
                },
                bodega:{
                    0: {
                        nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                        url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                        precio: "21,69€",
                        categoria:"bodega"
                    },
                    1: {
                        nombre: "BACARDI ron blanco superior botella 70 cl", 
                        url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                        precio: "12,59€",
                        categoria:"bodega"
                    },
                    2: {
                        nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                        url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                        precio: "13,59€",
                        categoria:"bodega"
                    },
                    3: {
                        nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                        url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                        precio: "6,15€",
                        categoria:"bodega"
                    },
                    4: {
                        nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                        url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                        precio: "12,49€",
                        categoria:"bodega"
                    },
                    5: {
                        nombre: "PASSPORT whisky botella 70 cl", 
                        url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                        precio: "9,99€",
                        categoria:"bodega"
                    },
                    6: {
                        nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                        url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                        precio: "3,99€",
                        categoria:"bodega"
                    },
                    7: {
                        nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                        url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                        precio: "5,99€",
                        categoria:"bodega"
                    },
                    8: {
                        nombre: "GORDONS ginebra botella 1 lt", 
                        url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                        precio: "12,99€",
                        categoria:"bodega"
                    },
                    9: {
                        nombre: "ALVINI vermouth rosso botella 1 lt", 
                        url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                        precio: "2,25€",
                        categoria:"bodega"
                    },
                },
                congelados:{
                    0: {
                        nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                        url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                        precio: "6,49€",
                        categoria:"congelados"
                    },
                    1: {
                        nombre: "OREO helado bombón caja 4 uds 260 grs", 
                        url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    2: {
                        nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                        url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                        precio: "4,39€",
                        categoria:"congelados"
                    },
                    3: {
                        nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                        url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                        precio: "3,09€",
                        categoria:"congelados"
                    },
                    4: {
                        nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                        url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                        precio: "1,19€",
                        categoria:"congelados"
                    },
                    5: {
                        nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                        url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                        precio: "0,75€",
                        categoria:"congelados"
                    },
                    6: {
                        nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                        url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    7: {
                        nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                        precio: "3,59€",
                        categoria:"congelados"
                    },
                    8: {
                        nombre: "PESCANOVA calamar limpio envase 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                        precio: "5,55€",
                        categoria:"congelados"
                    },
                    9: {
                        nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                        url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                        precio: "6,25€",
                        categoria:"congelados"
                    },
                },
                refrigerados:{
                    0: {
                        nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                        url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                        precio: "1,59€",
                        categoria:"refrigerados"
                    },
                    1: {
                        nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                        url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                        precio: "2,99€",
                        categoria:"refrigerados"
                    },
                    2: {
                        nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                        url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                        precio: "1,68€",
                        categoria:"refrigerados"
                    },
                    3: {
                        nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                        url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                        precio: "1,95€",
                        categoria:"refrigerados"
                    },
                    4: {
                        nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                        url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                        precio: "1,45€",
                        categoria:"refrigerados"
                    },
                    5: {
                        nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                        url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                        precio: "2,19€",
                        categoria:"refrigerados"
                    },
                    6: {
                        nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                        precio: "2,42€",
                        categoria:"refrigerados"
                    },
                    7: {
                        nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                        url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                        precio: "2,54€",
                        categoria:"refrigerados"
                    },
                    8: {
                        nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                        url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                        precio: "1,28€",
                        categoria:"refrigerados"
                    },
                    9: {
                        nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                        url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                        precio: "1,98€",
                        categoria:"refrigerados"
                    },
                },
                carniceria:{
                    0: {
                        nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                        url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                        precio: "6,93€",
                        categoria:"carnicerias"
                    },
                    1: {
                        nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                        url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                        precio: "6,29€",
                        categoria:"carnicerias"
                    },
                    2: {
                        nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                        url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                        precio: "3,99€",
                        categoria:"carnicerias"
                    },
                    3: {
                        nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                        url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                        precio: "1,99€",
                        categoria:"carnicerias"
                    },
                    4: {
                        nombre: "chistorra pieza 220 grs", 
                        url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg",
                        precio: "1,25€",
                        categoria:"carnicerias"
                    },
                },
                charcuteria:{
                    0: {
                        nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                        url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                        precio: "2,05€",
                        categoria:"charcuteria"
                    },
                    1: {
                        nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                        url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                        precio: "1,69€",
                        categoria:"charcuteria"
                    },
                    2: {
                        nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                        url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                        precio: "125€",
                        categoria:"charcuteria"
                    },
                    3: {
                        nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                        url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                        precio: "2,29€",
                        categoria:"charcuteria"
                    },
                    4: {
                        nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                        url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                        precio: "1,99€",
                        categoria:"charcuteria"
                    },
                },
                pescaderia:{
                    0: {
                        nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                        url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                        precio: "3,19€",
                        categoria:"pescaderia"
                    },
                    1: {
                        nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                        url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                        precio: "2,95€",
                        categoria:"pescaderia"
                    },
                    2: {
                        nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                        url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                        precio: "1,75€",
                        categoria:"pescaderia"
                    },
                    3: {
                        nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                        precio: "4,39€",
                        categoria:"pescaderia"
                    },
                    4: {
                        nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                        url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                        precio: "4,89€",
                        categoria:"pescaderia"
                    },
                },
                frutas_y_verduras:{
                    0: {
                        nombre: "Aguacate bio bandeja 400 grs", 
                        url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                        precio: "2,89€",
                        categoria:"frutas_y_verduras"
                    },
                    1: {
                        nombre: "Kiwi bandeja 700 grs", 
                        url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                        precio: "2,15€",
                        categoria:"frutas_y_verduras"
                    },
                    2: {
                        nombre: "Manzana Yello bandeja 700 grs", 
                        url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                        precio: "2,59€",
                        categoria:"frutas_y_verduras"
                    },
                    3: {
                        nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                        url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                        precio: "0,99€",
                        categoria:"frutas_y_verduras"
                    },
                    4: {
                        nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                        url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                        precio: "2,39€",
                        categoria:"frutas_y_verduras"
                    },
                    5: {
                        nombre: "Ajo BIO malla 200 grs", 
                        url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                        precio: "1,49€",
                        categoria:"frutas_y_verduras"
                    },
                    6: {
                        nombre: "Cilantro 20 grs", 
                        url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    7: {
                        nombre: "Jengibre bandeja 200 grs", 
                        url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                        precio: "1,39€",
                        categoria:"frutas_y_verduras"
                    },
                    8: {
                        nombre: "Champiñón laminado bandeja 250 grs", 
                        url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                        precio: "1,35€",
                        categoria:"frutas_y_verduras"
                    },
                    9: {
                        nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                        url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                        precio: "0,85€",
                        categoria:"frutas_y_verduras"
                    },
                },
            },
        },
    }
//convertir el Objeto a Json javasicript
var json = JSON.stringify(supermercados);
console.log(json);
//contenedor de los datos
var nombre = [];
var categorias_productos_nombre = [];
var categorias_productos_img = [];
var categorias_productos_precio = [];
var categorias_productos = [];
var lista_de_comprar_usuario = [];
//coger los valores del usuario
const formulario = document.querySelector('#validationCustom01');
const resultado = document.querySelector('#resultado')

pintarResultado(supermercados);
function pintarResultado(data)
{
    console.log(data);
    for(let producto of Object.values(data))
    {
            nombre.push(producto);
    }
    console.log(nombre);
}
    /*categorias_productos.push(nombre.map( res => { console.log(res.categorias.platos_preparados[0].nombre); } ))
    console.log(categorias_productos);*/
      const filtrar = ()=>
      {
        for (var i = 0; i < nombre.length; i++) 
        {
            for (var j = 0; j < nombre.length; j++)
                {
                    //nombre del producto
                    categorias_productos_nombre.push(nombre[i].categorias.platos_preparados[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.despensa[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.mascotas[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.bebe[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.cuidado_para_el_hogar[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.cuidado_personal[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.frutas_y_verduras[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.cuidado_para_el_hogar[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.bebidas[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.bodega[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.congelados[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.refrigerados[j].nombre.toLowerCase());
                    //imagen del producto
                    categorias_productos_img.push(nombre[i].categorias.platos_preparados[j].url);
                    categorias_productos_img.push(nombre[i].categorias.despensa[j].url);
                    categorias_productos_img.push(nombre[i].categorias.mascotas[j].url);
                    categorias_productos_img.push(nombre[i].categorias.bebe[j].url);
                    categorias_productos_img.push(nombre[i].categorias.cuidado_para_el_hogar[j].url);
                    categorias_productos_img.push(nombre[i].categorias.cuidado_personal[j].url);
                    categorias_productos_img.push(nombre[i].categorias.frutas_y_verduras[j].url);
                    categorias_productos_img.push(nombre[i].categorias.cuidado_para_el_hogar[j].url);
                    categorias_productos_img.push(nombre[i].categorias.bebidas[j].url);
                    categorias_productos_img.push(nombre[i].categorias.bodega[j].url);
                    categorias_productos_img.push(nombre[i].categorias.congelados[j].url);
                    categorias_productos_img.push(nombre[i].categorias.refrigerados[j].url);
                    //precio del producto
                    categorias_productos_precio.push(nombre[i].categorias.platos_preparados[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.despensa[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.mascotas[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.bebe[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.cuidado_para_el_hogar[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.cuidado_personal[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.frutas_y_verduras[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.cuidado_para_el_hogar[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.bebidas[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.bodega[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.congelados[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.refrigerados[j].precio.toLowerCase());
                    //categoria del producto
                    categorias_productos.push(nombre[i].categorias.platos_preparados[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.despensa[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.mascotas[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.bebe[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.cuidado_para_el_hogar[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.cuidado_personal[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.frutas_y_verduras[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.cuidado_para_el_hogar[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.bebidas[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.bodega[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.congelados[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.refrigerados[j].categoria.toLowerCase());
        
                    if(nombre[i].categorias.carniceria[j] && nombre[i].categorias.charcuteria[j] && nombre[i].categorias.pescaderia[j])
                    {
                        //nombre del producto
                        categorias_productos_nombre.push(nombre[i].categorias.carniceria[j].nombre.toLowerCase());
                        categorias_productos_nombre.push(nombre[i].categorias.charcuteria[j].nombre.toLowerCase());
                        categorias_productos_nombre.push(nombre[i].categorias.pescaderia[j].nombre.toLowerCase());
                        //imagen del producto
                        categorias_productos_img.push(nombre[i].categorias.carniceria[j].url);
                        categorias_productos_img.push(nombre[i].categorias.charcuteria[j].url);
                        categorias_productos_img.push(nombre[i].categorias.pescaderia[j].url);
                        //precio del producto
                        categorias_productos_precio.push(nombre[i].categorias.carniceria[j].precio.toLowerCase());
                        categorias_productos_precio.push(nombre[i].categorias.charcuteria[j].precio.toLowerCase());
                        categorias_productos_precio.push(nombre[i].categorias.pescaderia[j].precio.toLowerCase());
                        //categoria del producto
                        categorias_productos.push(nombre[i].categorias.carniceria[j].categoria.toLowerCase());
                        categorias_productos.push(nombre[i].categorias.charcuteria[j].categoria.toLowerCase());
                        categorias_productos.push(nombre[i].categorias.pescaderia[j].categoria.toLowerCase());
                    }
                }
        }
        cleanArray(categorias_productos_nombre);
        cleanArray(categorias_productos_img);
        cleanArray(categorias_productos_precio);
        cleanArray(categorias_productos);
    }
    filtrar();
    //limpiar el arrray object
    function cleanArray(actual) 
    {
        var newArray = [];
        for (var i = 0; i < actual.length; i++) 
        { 
                if (actual[i]) {
                    newArray.push(actual[i]);
                  }
        }
        console.log(newArray);
        return newArray;
    }
    const buscarDatos = ()=>
    {
        resultado.innerHTML = '';
        const texto = formulario.value.toLowerCase();
        console.log(texto);
        var cont = 0;
        console.log("estoy en buscar datos");
        console.log(categorias_productos_nombre.length);
        for (var i = 0; i < categorias_productos_nombre.length; i++) 
        {
            if((categorias_productos_nombre[i].indexOf(texto)!== -1) && (cont < 6))
            {
                resultado.innerHTML+='<div class="col" id='+categorias_productos[i]+'">'+'<div class="card h-100">'+'<img src='+categorias_productos_img[i]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+categorias_productos_nombre[i]+'</h5>'+'<p class="card-text">'+categorias_productos_precio[i]+ '</p>'+'</div>'+'<div class="card-footer">'+'<a href="#" class="btn btn-primary">'+'Comprar'+'</a>'+'</div>'+'</div>'+'</div>'
                cont++;
                console.log(cont);
            }
        }
        if( resultado.innerHTML === '' )
        {
            resultado.innerHTML+='<h1>Producto no encontrado</h1>'
        }
        else if(!texto)
        {
            resultado.innerHTML = '';
        }
    }
    //boton.addEventListener('click',filtrar)
    formulario.addEventListener('keyup',buscarDatos)

//section coger la lista del usuario
const form_usuario = document.querySelector('.user_list');
const button_add_list = document.querySelector('.user_botton');
const resultado_user_list = document.querySelectorAll('.resultado_user_list');

console.log(resultado_user_list);

//lista de usuario
var list_usuario = [];

const cogerDatosList = () =>
{
    const texto = form_usuario.value.toLowerCase();
    if(texto)
    {
        resultado_user_list[0].innerHTML = '';
        resultado_user_list[1].innerHTML = '';
        list_usuario.push(texto);
        console.log(list_usuario.length);
        for (var i = 0; i < list_usuario.length; i++) 
            {
                    resultado_user_list[1].innerHTML+='<a class="list-group-item list-group-item-action">'+'<input  class= "item_usuario"'+'value='+list_usuario[i]+' disabled>'+'<span class="badge rounded-pill bg-primary float-end"><i class="bi bi-check-lg"></i></span>'+'</a>'+'</div>'
            }
        const list_a = document.getElementsByClassName("item_usuario");
            list_a.addEventListener('click',function()
            {
                console.log(list_a);

                for (let i = 0; i < list_a.length; i++) 
                    {
                        list_a[i].disabled = false
                        console.log(list_a[i].value);
                    }
            });
    }
    else
    {
        alert("añade un producto a tu lista");
        console.log(list_usuario);
       
    }
    cleanArray(list_usuario);
    guardarDatos();
}

const cogerDatosNuevos = () => 
{
    //const list_a = document.getElementsByClassName("item_usuario");
    const texto = "";
    var nuevosDatos=[];
    console.log(list_a.length);

    console.log("pulsando");
        for (let i = 0; i < list_a.length; i++) 
        {
            list_a[i].disabled = false
            console.log(list_a[i].value);
            /*texto = list_a[i].value;
            nuevosDatos.push(texto);
            console.log("texto: " + texto);*/
        }
}
button_add_list.addEventListener('click',cogerDatosList)
function guardarDatos()
{
    localStorage.setItem("list_usuario", list_usuario);
    var miDato = localStorage.getItem("list_usuario");
    console.log(miDato);
}

