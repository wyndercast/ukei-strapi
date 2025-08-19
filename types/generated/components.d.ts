import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionAccordion extends Schema.Component {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    tituloAccordion: Attribute.String;
    textoAccordion: Attribute.RichText;
  };
}

export interface ArticuloArticulo extends Schema.Component {
  collectionName: 'components_articulo_articulos';
  info: {
    displayName: 'articulo';
    description: '';
  };
  attributes: {
    fecha: Attribute.String;
    textoUno: Attribute.RichText;
    imagenUno: Attribute.Media;
    textoDos: Attribute.RichText;
    tituloTres: Attribute.String;
    textoTres: Attribute.RichText;
    imagenTres: Attribute.Media;
    tituloCuatro: Attribute.String;
    textoCuatro: Attribute.RichText;
  };
}

export interface BannerDosBannerDos extends Schema.Component {
  collectionName: 'components_banner_dos_banner_dos';
  info: {
    displayName: 'bannerDos';
  };
  attributes: {
    textBannerUno: Attribute.RichText;
    imageBanner: Attribute.Media;
    textImage: Attribute.String;
    textBannerDos: Attribute.RichText;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    fondo: Attribute.Media;
    content: Attribute.RichText;
    imageFondo: Attribute.Media;
    title: Attribute.RichText;
  };
}

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    icono: Attribute.Media;
    textoBase: Attribute.RichText;
  };
}

export interface CarruselCarrusel extends Schema.Component {
  collectionName: 'components_carrusel_carrusels';
  info: {
    displayName: 'carrusel';
  };
  attributes: {
    titulo: Attribute.String;
    descripcion: Attribute.RichText;
    testimonio: Attribute.Component<'testimonio.testimonio', true>;
  };
}

export interface FormForm extends Schema.Component {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    nombreLabel: Attribute.String;
    icono: Attribute.Media;
    emailLabel: Attribute.String;
    descripcionLabel: Attribute.String;
    placeHolderName: Attribute.String;
    placeHolderEmail: Attribute.String;
    placeHolderDescripcion: Attribute.String;
    tipotramiteLabel: Attribute.String;
  };
}

export interface ItemsItem extends Schema.Component {
  collectionName: 'components_items_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    icono: Attribute.Media;
    itemname: Attribute.String;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    image: Attribute.Media;
    contenido: Attribute.RichText;
  };
}

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    url: Attribute.String;
    icono: Attribute.Media;
  };
}

export interface StepperStepper extends Schema.Component {
  collectionName: 'components_stepper_steppers';
  info: {
    displayName: 'stepper';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleItem: Attribute.String;
    titleIcono: Attribute.Media;
    description: Attribute.RichText;
    item: Attribute.Component<'items.item', true>;
    iconostepper: Attribute.Media;
    subTitle: Attribute.String;
    textSubtitle: Attribute.String;
  };
}

export interface TestimonioTestimonio extends Schema.Component {
  collectionName: 'components_testimonio_testimonios';
  info: {
    displayName: 'testimonio';
  };
  attributes: {
    avatar: Attribute.Media;
    titulo: Attribute.String;
    cargo: Attribute.String;
    testimonio: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.accordion': AccordionAccordion;
      'articulo.articulo': ArticuloArticulo;
      'banner-dos.banner-dos': BannerDosBannerDos;
      'banner.banner': BannerBanner;
      'card.card': CardCard;
      'carrusel.carrusel': CarruselCarrusel;
      'form.form': FormForm;
      'items.item': ItemsItem;
      'menu.menu': MenuMenu;
      'section.section': SectionSection;
      'social.social': SocialSocial;
      'stepper.stepper': StepperStepper;
      'testimonio.testimonio': TestimonioTestimonio;
    }
  }
}
