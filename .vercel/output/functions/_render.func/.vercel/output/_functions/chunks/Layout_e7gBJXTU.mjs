import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent, f as renderHead, g as renderSlot } from './astro/server_BfSrewWf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { useState, useEffect } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/node_modules/.pnpm/astro@4.15.1_rollup@4.21.2_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const servicios = [{
  id: 1,
  name: "Diseño y Fabricación de Muebles a Medida",
  description: "Creamos muebles personalizados que se adaptan a cualquier espacio y necesidad.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651249/MueblesProfesionales/Services/small/service_1_small_wkaetx.webp"
}, {
  id: 2,
  name: "Restauración y Renovación de Muebles Antiguos",
  description: "Devolvemos la vida a tus muebles antiguos con acabados de alta calidad.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651249/MueblesProfesionales/Services/small/service_2_small_yr1yn9.webp"
}, {
  id: 3,
  name: "Construcción de Mini-Casas y Cabañas en Madera",
  description: "Diseñamos y construimos mini-casas y cabañas acogedoras y funcionales.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_3_small_n0e4jx.webp"
}, {
  id: 4,
  name: "Instalación de Pisos de Cemento Pulido",
  description: "Instalamos pisos de cemento con un acabado moderno y duradero.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_4_small_lqhvye.webp"
}, {
  id: 5,
  name: "Pintura y Acabado de Madera para Interiores y Exteriores",
  description: "Ofrecemos servicios de pintura y acabado de alta calidad para cualquier superficie de madera.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_5_small_jrfyzw.webp"
}, {
  id: 6,
  name: "Fabricación e Instalación de Puertas y Ventanas de Madera",
  description: "Creamos puertas y ventanas de madera con diseños personalizados y duraderos.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_6_small_uwjgmb.webp"
}, {
  id: 7,
  name: "Diseño e Instalación de Cocinas Integrales",
  description: "Diseñamos cocinas que combinan funcionalidad y estilo, optimizando tu espacio.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_7_small_duvczi.webp"
}, {
  id: 8,
  name: "Construcción de Pérgolas y Estructuras de Jardín",
  description: "Creamos pérgolas y estructuras en madera para mejorar tus espacios exteriores.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_8_small_cteacl.webp"
}, {
  id: 9,
  name: "Asesoría y Diseño de Interiores en Madera",
  description: "Ofrecemos asesoría para diseñar ambientes únicos y acogedores con madera.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651248/MueblesProfesionales/Services/small/service_9_small_cgqrbx.webp"
}, {
  id: 10,
  name: "Fabricación de Closets y Alacenas Personalizadas",
  description: "Diseñamos closets y alacenas a medida para maximizar el almacenamiento.",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724651247/MueblesProfesionales/Services/small/service_10_small_apibq4.webp"
}];

const projects = [{
  id: 1,
  title: "Mesa de Comedor Personalizada",
  description: "Diseño y fabricación de una mesa de comedor a medida, combinando elegancia y funcionalidad. Ideal para cualquier estilo de hogar.",
  materials: ["Madera de roble", "Barniz natural"],
  services: ["Diseño y fabricación", "Acabado personalizado"],
  testimonial: {
    name: "Carlos Martínez",
    feedback: "La mesa es impresionante, hecha con gran detalle y calidad. Superó nuestras expectativas."
  },
  imageUrls: ["https://example.com/images/project1-1.jpg", "https://example.com/images/project1-2.jpg"],
  featureImage: "https://example.com/images/project1-main.jpg"
}, {
  id: 2,
  title: "Restauración de Silla Antigua",
  description: "Restauración completa de una silla antigua, manteniendo su valor histórico y funcionalidad. Acabado en madera oscura con tapizado nuevo.",
  materials: ["Madera de caoba", "Tela de lino"],
  services: ["Restauración", "Tapizado"],
  testimonial: {
    name: "Ana Rodríguez",
    feedback: "El trabajo de restauración fue excelente. La silla parece nueva, pero con el encanto antiguo que buscábamos."
  },
  imageUrls: ["https://example.com/images/project2-1.jpg", "https://example.com/images/project2-2.jpg"],
  featureImage: "https://example.com/images/project2-main.jpg"
}, {
  id: 3,
  title: "Construcción de Mini-Casa",
  description: "Construcción de una mini-casa en madera para un espacio exterior. Diseñada para ofrecer comodidad y estilo en un espacio compacto.",
  materials: ["Madera de pino", "Teja de cerámica"],
  services: ["Construcción", "Diseño personalizado"],
  testimonial: {
    name: "José Pérez",
    feedback: "La mini-casa es perfecta para nuestro jardín. La calidad de la construcción y el diseño superaron nuestras expectativas."
  },
  imageUrls: ["https://example.com/images/project3-1.jpg", "https://example.com/images/project3-2.jpg"],
  featureImage: "https://example.com/images/project3-main.jpg"
}, {
  id: 4,
  title: "Instalación de Piso de Cemento Pulido",
  description: "Instalación profesional de piso de cemento pulido en una sala de estar. Proporciona un acabado moderno y duradero.",
  materials: ["Cemento pulido", "Sellador"],
  services: ["Instalación de piso", "Acabado y sellado"],
  testimonial: {
    name: "Luis Gómez",
    feedback: "El piso de cemento pulido transformó completamente la sala. Excelente trabajo y acabado duradero."
  },
  imageUrls: ["https://example.com/images/project4-1.jpg", "https://example.com/images/project4-2.jpg"],
  featureImage: "https://example.com/images/project4-main.jpg"
}, {
  id: 5,
  title: "Diseño e Instalación de Cocina Integral",
  description: "Diseño y instalación de una cocina integral que combina funcionalidad y estilo. Incluye muebles a medida y acabados de alta calidad.",
  materials: ["Madera contrachapada", "Granito para encimeras"],
  services: ["Diseño de cocina", "Instalación y ajuste"],
  testimonial: {
    name: "María Fernández",
    feedback: "La nueva cocina es increíble. El diseño es perfecto para nuestro espacio y la instalación fue impecable."
  },
  imageUrls: ["https://example.com/images/project5-1.jpg", "https://example.com/images/project5-2.jpg"],
  featureImage: "https://example.com/images/project5-main.jpg"
}];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white py-10 mt-20"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> <div> <h4 class="font-semibold text-lg mb-4 text-gray-300">Sobre nosotros</h4> <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Horizontal_Logo.png" alt="Logo" class="mb-4 w-48"> <p>Estamos aquí para ayudar a los clientes a lograr el éxito.</p> </div> <div> <h4 class="font-semibold text-lg mb-4 text-gray-300">Proyectos</h4> <ul class="space-y-2"> ${projects.slice(0, 3).map(({ title }) => renderTemplate`<li> <a href="#" class="text-gray-400 hover:text-white">${title}</a> </li>`)} </ul> </div> <div> <h4 class="font-semibold text-lg mb-4 text-gray-300">Servicios</h4> <ul class="space-y-2"> ${servicios.slice(0, 3).map(({ name }) => renderTemplate`<li> <a href="#" class="text-gray-400 hover:text-white">${name}</a> </li>`)} </ul> </div> <div> <h4 class="font-semibold text-lg mb-4 text-gray-300">Contáctanos</h4> <ul class="space-y-2"> <li class="text-gray-400">support@brainwave.io</li> <li class="text-gray-400">+133-394-3439-1435</li> </ul> </div> </div> <div class="flex flex-col md:flex-row justify-between items-center mt-10 text-center border-t border-gray-700 pt-6 text-sm text-gray-400"> <p>
© 2024, Todos los derechos reservados. Creado por <span class="font-semibold">Manuel Huaman</span> </p> <div class="mt-4 md:mt-0 space-x-4 text-lg"> <a href="https://facebook.com" target="_blank" class="text-blue-500 hover:text-blue-400"> <i class="fa-brands fa-facebook"></i> </a> <a href="https://twitter.com" target="_blank" class="text-blue-400 hover:text-blue-300"> <i class="fa-brands fa-x-twitter"></i> </a> <a href="https://linkedin.com" target="_blank" class="text-blue-600 hover:text-blue-500"> <i class="fa-brands fa-linkedin"></i> </a> <a href="https://instagram.com" target="_blank" class="text-pink-500 hover:text-pink-400"> <i class="fa-brands fa-instagram"></i> </a> </div> </div> </div> </footer>`;
}, "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/Footer.astro", void 0);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return jsx("header", {
    class: `fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-colors duration-300 ease-in-out ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`,
    children: jsxs("div", {
      class: "max-w-4xl xl:max-w-5xl mx-auto flex items-center justify-between",
      children: [jsx("a", {
        href: "/",
        class: "flex items-center",
        children: jsx("img", {
          class: `w-32 h-auto transition-transform duration-300 ${isScrolled ? "scale-90" : "scale-100"}`,
          src: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Horizontal_Logo.png",
          alt: "Logo"
        })
      }), jsxs("nav", {
        class: "hidden md:flex space-x-8",
        children: [jsx("a", {
          href: "/",
          class: "nav-link",
          children: "Hogar"
        }), jsx("a", {
          href: "/about",
          class: "nav-link",
          children: "Acerca"
        }), jsx("a", {
          href: "/services",
          class: "nav-link",
          children: "Servicios"
        }), jsx("a", {
          href: "/contact",
          class: "nav-link",
          children: "Contactar"
        }), jsx("a", {
          href: "/question",
          class: "nav-link",
          children: "FAQ"
        }), jsx("a", {
          href: "/projects",
          class: "nav-link",
          children: "Proyectos"
        })]
      }), jsx("button", {
        id: "menu-toggle",
        class: "md:hidden flex items-center focus:outline-none",
        onClick: toggleMenu,
        children: jsx("i", {
          class: "fa-solid fa-bars text-3xl text-gray-700"
        })
      }), isMenuOpen && jsxs("div", {
        id: "mobile-menu",
        class: `fixed inset-0 bg-white shadow-lg py-4 px-6 flex flex-col items-center space-y-4 transition-transform duration-300 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`,
        children: [jsx("a", {
          href: "/",
          class: "nav-link",
          onClick: () => setIsMenuOpen(false),
          children: "Hogar"
        }), jsx("a", {
          href: "/about",
          class: "nav-link",
          onClick: () => setIsMenuOpen(false),
          children: "Acerca"
        }), jsx("a", {
          href: "/services",
          class: "nav-link",
          onClick: () => setIsMenuOpen(false),
          children: "Servicios"
        }), jsx("a", {
          href: "/contact",
          class: "nav-link",
          onClick: () => setIsMenuOpen(false),
          children: "Contactar"
        }), jsx("a", {
          href: "/question",
          class: "nav-link",
          onClick: () => setIsMenuOpen(false),
          children: "FAQ"
        }), jsx("a", {
          href: "/projects",
          class: "nav-link",
          onClick: () => setIsMenuOpen(false),
          children: "Proyectos"
        })]
      })]
    })
  });
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout = null;
  const handleScroll = () => {
    setIsVisible(false);
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };
  const scrollToTop = () => {
    console.log("Hola");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return jsx("div", {
    children: isVisible && jsx("button", {
      type: "button",
      onClick: () => scrollToTop,
      className: "fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
      "aria-label": "Scroll to top",
      children: jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        width: "28px",
        height: "28px",
        children: jsx("path", {
          d: "M12 4.5c-.4 0-.8.2-1.1.6l-7 8c-.5.6-.4 1.5.2 2s1.5.4 2-.2l5.9-6.7 5.9 6.7c.3.4.8.6 1.2.6.3 0 .7-.1 1-.3.6-.5.7-1.4.2-2l-7-8c-.3-.4-.7-.6-1.1-.6z"
        })
      })
    })
  });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer"><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/Header", "client:component-export": "default" })} <main class="mt-36"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ScrollToTop", ScrollToTop, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/ScrollToTop", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/layouts/Layout.astro", void 0);

export { $$Layout as $, projects as p, servicios as s };
