/* clase OverWorld */
class Overworld {
    /* constructor */
    constructor(config) {
        /* Configuracion del juego */
        this.element = config.element;
        /* Seleccionando por referencia al canvas con clase canvas-juego */
        this.canvas = this.element.querySelector('.canvas-juego');
        /* Asignamos un contexto al canvas */
        this.ctx = this.canvas.getContext('2d');

    }

    /* metodo init */
    init() {

        /* crear un objeto imagen */
        const imagen = new Image();
        imagen.onload = () => {
            /* dibujar la imagen */
            this.ctx.drawImage(imagen, 0, 0);

        };
        /* cargar la imagen */
        imagen.src = '/images/maps/DemoLower.png';

        /* definir dos constantes x y y cuyos valores sean 0 */
        const x = 6;
        const y = 8;

        /* sombras */
        const sombra = new Image();
        sombra.onload = () => {
            this.ctx.drawImage(
                sombra, 
                0, //corte izquierdo
                0, //corte derecho
                32, //ancho 
                32, //alto
                x * 16 - 8, //posicion x
                y * 16 - 18, //posicion y
                32,
                32
                
                );
        };
        sombra.src = '/images/characters/shadow.png';


        /* crear un objeto imagen */
        const heroe = new Image();
        heroe.onload = () => {
            /* dibujar la imagen */
            this.ctx.drawImage(
                heroe,
                0, //corte izquierdo
                0, //corte derecho
                32, //ancho 
                32, //alto
                x * 16 - 8, //posicion x
                y * 16 - 18, //posicion y
                32,
                32
            );
        };
        /* cargar la imagen */
        heroe.src = '/images/characters/people/hero.png';


    }

}