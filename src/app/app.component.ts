import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationTopbarComponent } from './navigation-topbar/navigation-topbar.component';
import { PageTopComponent } from './page-top/page-top.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { CookiesNotificationComponent } from './cookies-notification/cookies-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationTopbarComponent,
    PageTopComponent,
    ContentBlockComponent,
    BottomFooterComponent,
    CookiesNotificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AngularWeb';

  constructor() { }

  ngOnInit(): void { }

  blocks = [
    { title: 'Comida', 
    description: 
    `
    Con nuestra aplicación de recuento de calorías diarias, llevar un seguimiento de tu ingesta calórica nunca ha sido tan fácil y efectivo. Diseñada con una interfaz intuitiva y amigable, nuestra aplicación te permite registrar tus comidas y bebidas de forma rápida y sencilla, proporcionándote información detallada sobre tu consumo calórico diario. Desde desayunos energéticos hasta cenas reconfortantes, puedes registrar cada elemento con precisión y recibir un desglose completo de tu ingesta de calorías, grasas, carbohidratos y proteínas.
    
    Además de monitorizar tu alimentación, nuestra aplicación te ofrece herramientas para establecer objetivos personalizados y realizar un seguimiento de tu progreso a lo largo del tiempo. Ya sea que estés buscando perder peso, mantener un estilo de vida saludable o alcanzar tus metas fitness, nuestra aplicación te brinda la información y la motivación necesarias para tomar decisiones informadas sobre tu dieta y estilo de vida. Con el apoyo de nuestra comunidad integrada, encontrarás el respaldo y la inspiración necesarios para alcanzar tus objetivos de salud y bienestar.
    `, 
    src: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image' },
    { title: 'Ejercicio', description: 
    `
    Nuestra aplicación es tu compañero perfecto para registrar y rastrear tu actividad física diaria de manera eficiente y sin complicaciones. Con una interfaz intuitiva y fácil de usar, podrás crear un diario detallado de tus entrenamientos, ya sea que estés corriendo, haciendo yoga, levantando pesas o practicando cualquier otra actividad. Registra la duración de tu ejercicio, la distancia recorrida, las calorías quemadas y más, todo en un solo lugar organizado. Además, podrás establecer metas personalizadas y recibir recordatorios para mantenerte motivado y comprometido con tu rutina de ejercicio.

    Nuestra aplicación también te permite realizar un seguimiento de tu progreso a lo largo del tiempo, ofreciéndote gráficos y estadísticas claras para que puedas ver tus mejoras y ajustar tus objetivos en consecuencia. Ya sea que seas un atleta experimentado o simplemente quieras mantenerte activo, nuestra aplicación te brinda las herramientas necesarias para llevar un registro completo y efectivo de tu actividad física, ayudándote a alcanzar tus metas de salud y bienestar de manera constante y sostenible.
    `, 
    src: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Imagen de Ejercicio' },
    { title: 'Kanban', description:
    `
    Una aplicación de Kanban es una herramienta digital diseñada para organizar y gestionar proyectos de manera eficiente y visual. Con una interfaz intuitiva y fácil de usar, esta aplicación permite a los equipos crear tableros personalizados donde pueden dividir el trabajo en columnas representativas de diferentes etapas del proceso, como "pendiente", "en progreso" y "completado". Los usuarios pueden arrastrar y soltar tareas entre las columnas, asignarlas a miembros del equipo, establecer fechas límite y agregar comentarios para una comunicación transparente y colaborativa.

    Además de su capacidad para facilitar la visualización del flujo de trabajo, una aplicación de Kanban ofrece funciones adicionales como la generación de informes de progreso, la integración con otras herramientas de gestión de proyectos y la personalización de notificaciones para mantener a los equipos informados y comprometidos. Al proporcionar una forma estructurada de organizar las tareas y prioridades, esta aplicación fomenta la productividad, la transparencia y la colaboración dentro de cualquier equipo, ya sea en un entorno empresarial, educativo o personal.
    `, 
    src: 'https://media.istockphoto.com/id/1056990556/es/foto/equipo-del-dise%C3%B1ador-de-ux-creativa-planificaci%C3%B3n-aplicaci%C3%B3n-para-desarrollo-web-m%C3%B3vil.webp?s=2048x2048&w=is&k=20&c=zOUlGCM05gMeIwqGWatx0_YE4d_x0oKV2xhiSkieoHc=', alt: 'Image' },
    { title: 'Notas', description:
    `
    Esta aplicación de toma de notas ofrece una plataforma intuitiva y eficiente para capturar y organizar tus ideas, tareas y recordatorios en un solo lugar. Con una interfaz limpia y fácil de usar, te permite tomar notas rápidamente, ya sea mediante texto, imágenes o grabaciones de voz, garantizando que no se te escape ningún detalle importante. Además, su función de sincronización automática te permite acceder a tus notas desde cualquier dispositivo, manteniendo tus pensamientos al alcance de tu mano en todo momento.

    Con características de personalización, como la capacidad de crear etiquetas y categorías personalizadas, esta aplicación se adapta a tus necesidades individuales, facilitando la organización y búsqueda de información específica cuando la necesites. Ya sea para planificar proyectos, hacer listas de compras o simplemente tomar notas durante reuniones, esta aplicación se convierte en tu aliada confiable para mantener tus pensamientos organizados y tu vida más productiva.
    `, 
    src: 'https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image' }
  ];

}
