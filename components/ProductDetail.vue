<template>
    <section class="page page--product-details">
       <div class="page__content-wrapper">
          <aside class="aside-head">
             <ul class="breadcrumb">
                <li class="breadcrumb__item">
                   <a href="/catalog/set-sudoper-i-slavina-40">SET: Sudoper i Slavina</a>
                </li>
                <li class="breadcrumb__item">
                   <span>{{ product.name }}</span>
                </li>
             </ul>
          </aside>
          <section class="page__content" data-section-id="product_summary">
             <section class="product-summary product-summary--product-details">
                <div class="product-summary__images">
                   <div class="product-summary__main-images" style="width: min(100vw,  510px); max-height: 680px;">
                      <div class="product-summary__image-badges product-summary__image-badges--left">
                         <div class="product-summary__badge product-summary__badge--price-discount" title="8%">
                            8%
                         </div>
                      </div>
                      <button data-url="https://www.sudoperi.ba/kupi/set-sudoper-inox-crni-slavina-cesma-andra-dodaci-602" data-title="SET: Sudoper INOX CRNI + SLAVINA ČESMA ANDRA + DODACI" data-share="" class="product-summary__native-share btn btn-icon" style="display: none;">
                         <svg class="icon">
                            <use xlink:href="#icon-share-native" href="#icon-share-native"></use>
                         </svg>
                      </button>
                      <div id="product_summary_images" class="splide splide--slide splide--ltr is-active is-initialized" data-slider="{&quot;per_page&quot;:1,&quot;per_move&quot;:1,&quot;drag&quot;:false,&quot;arrows&quot;:false,&quot;pagination&quot;:false,&quot;gap&quot;:0,&quot;padding&quot;:0,&quot;thumbnails&quot;:&quot;#product_summary_thumbnails&quot;,&quot;lazyLoad&quot;:&quot;nearby&quot;,&quot;breakpoints&quot;:{&quot;992&quot;:{&quot;pagination&quot;:true}}}">
                         <div class="splide__track" id="product_summary_images-track" style="padding-left: 0px; padding-right: 0px;">
                            <ul class="splide__list" id="product_summary_images-list" style="transform: translateX(0px);">
                               <li class="splide__slide is-active is-visible" id="product_summary_images-slide01" style="width: calc(100%);" tabindex="0">
                                  <a href="{{ product.imageUrl }}" data-fancybox="gallery" data-type="image" data-thumb="{{ product.imageUrl }}" data-caption="SET: Sudoper INOX CRNI + SLAVINA ČESMA ANDRA + DODACI - Img 1" data-image="1709" class="product-summary__main-image-wrapper">
                                    <figure :data-zoom-image="product.imageUrl"
                                        :style="{
                                            aspectRatio: '0.75 / 1',
                                            maxWidth: '510px',
                                            backgroundImage: `url(${product.imageUrl})`,
                                            backgroundPosition: '98.2353% 0.147059%',
                                        }"
                                        data-ratio="0.75">
                                        <img :src="product.imageUrl" alt="Product image" class="product-summary__main-image" />
                                    </figure>
                                  </a>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="product-summary__details">
                   <div class="product-summary__top-details">
                      <div class="product-summary__top-details-left">
                         <h1 class="product-summary__heading">{{ product.name }}</h1>
                         <div class="product-summary__info product-summary__info--brand product-summary__info--mobile">
                            <a href="/catalog/brand/sandonna-11000144" rel="external"><img src="https://c.cdnmp.net/438641527/brands/11000144_logo.png" alt="SANDONNA"></a>
                         </div>
                         <div class="product-summary__info product-summary__info--price-row product-summary__info--price-gross-row">
                            <span class="product-summary__info product-summary__info--price-gross">
                            <span>{{ product.price }}&nbsp;<span>KM</span></span>
                            </span>
                            <span class="product-summary__info product-summary__info--old-price-gross">
                            <span>{{ product.oldPrice }}&nbsp;<span>KM</span></span>
                            </span>
                         </div>
                      </div>
                   </div>
                   <form class="product-summary__form" action="https://www.sudoperi.ba/cart/add" method="post" target="_self" data-cart-add="">
                      <input type="hidden" name="items[product][product_id]" value="602">
                      <div class="product-summary__info product-summary__info--free-shipping">
                         <div class="free-shipping-format">
                            <div class="free-shipping-format__item" title="Besplatna dostava">
                               <svg class="icon icon--secondary icon--lg icon--left">
                                  <use xlink:href="#icon-truck" href="#icon-truck"></use>
                               </svg>
                               <div class="free-shipping-format__text">Besplatna dostava</div>
                            </div>
                         </div>
                      </div>
                      <div class="product-summary__info product-summary__info--availability">
                         <div class="product-summary__info product-summary__info--message">
                            Na zalihama
                         </div>
                      </div>
                      <div class="product-summary__info product-summary__info--quantity">
                         <input type="text" name="items[product][qty]" value="1" class="form-control" inputmode="decimal" step="1" pattern="[0-9]+" min="0" max="999" data-digit-grouping="false" data-input-spinner-input="" style="display: none;">
                         <div class="input-group  quantity-spinner input-group input-group-sm" data-quantity-spinner-wrapper="">
                            <button class="quantity-spinner__button quantity-spinner__button--decrement btn-decrement btn btn-light" type="button"><strong data-input-spinner-decrement-button="">−</strong></button>
                            <input type="text" inputmode="decimal" autocomplete="off" placeholder="" class="form-control ">
                            <button class="quantity-spinner__button quantity-spinner__button--increment btn-increment btn btn-light" type="button"><strong data-input-spinner-increment-button="">+</strong></button>
                         </div>
                      </div>
                      <div class="product-summary__info product-summary__info--actions">
                         <div class="product-action product-action--add-to-cart">
                            <button type="submit" class="btn btn-primary">Dodajte u korpu</button>
                         </div>
                         <div class="product-action product-action--add-to-favorites" data-hover-icon="heart-full">
                            <a href="javascript:void(0)" class="product-summary__save-wishlist btn" data-wishlist-toggle="602" data-wishlist-toggle-class="product-summary__save-wishlist--saved" data-wishlist-toggle-label="[data-action-label]" title="Dodajte u favorite">
                               <svg class="icon icon--secondary icon--left">
                                  <use xlink:href="#icon-heart-empty" href="#icon-heart-empty"></use>
                               </svg>
                               <span class="product-summary__save-wishlist-text" data-action-label="">Dodajte u favorite</span>
                            </a>
                         </div>
                      </div>
                   </form>
                   <div id="summary_tabs" class="product-summary__info product-summary__info--tabs">
                      <div class="accordion">
                      </div>
                   </div>
                   <div class="social-share">
                   </div>
                </div>
             </section>
          </section>
       </div>
    </section>
</template> 
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ProductDetail",
  props: {
    product: {
      type: Object as PropType<{
        id: string;
        name: string;
        category: string;
        price: number;
        imageUrl: string;
        discount?: number;
      }>,
      required: true, // Ensure product is passed
    },
  },
});
</script>

<style>
.accordion__button {
    align-items: center;
    background-color: #f3f5f6;
    border: 0;
    border-color: #dee2e6;
    color: #212529;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    overflow-anchor: none;
    padding: 1rem .3215rem;
    position: relative;
    text-align: left;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .accordion__button {
        transition: none
    }
}

.accordion__button:not(.collapsed) {
    border-bottom: 1px solid #dee2e6
}

.accordion__button:not(.collapsed):after {
    background-image: url('data:image/svg+xml, %3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23212529" stroke="%23212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"%3e%3cline x1="5" y1="12" x2="19" y2="12"/%3e%3c/svg%3e');
    transform: rotate(-180deg)
}

.accordion__button:after {
    background-image: url('data:image/svg+xml, %3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23212529" stroke="%23212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"%3e%3cline x1="12" y1="5" x2="12" y2="19"/%3e%3cline x1="5" y1="12" x2="19" y2="12"/%3e%3c/svg%3e');
    background-repeat: no-repeat;
    background-size: 1.25rem;
    content: "";
    flex-shrink: 0;
    height: 1.25rem;
    margin-left: auto;
    transition: transform .2s ease-in-out;
    width: 1.25rem
}

@media(prefers-reduced-motion:reduce) {
    .accordion__button:after {
        transition: none
    }
}

.accordion__button:hover {
    z-index: 2
}

.accordion__button:focus {
    outline: 0;
    z-index: 3
}

.accordion__header {
    margin-bottom: 0
}

.accordion__item {
    background-color: #f3f5f6;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    color: #000
}

.accordion__item:not(:first-of-type) {
    border-top: 0
}

@media(min-width: 992px) {
    .accordion__item--details .accordion__body {
        padding:1rem 0
    }
}

.accordion__body {
    padding: 1rem 0
}

@media(min-width: 992px) {
    .accordion__body {
        padding:1rem .3215rem
    }
}

.accordion--flush .accordion__collapse {
    border-width: 0
}

.accordion--flush .accordion__item {
    border-left: 0;
    border-radius: 0;
    border-right: 0
}

.accordion--flush .accordion__item:first-child {
    border-top: 0
}

.accordion--flush .accordion__item:last-child {
    border-bottom: 0
}

.accordion--flush .accordion__item .accordion__button {
    border-radius: 0
}

@media(min-width: 992px) {
    figure[data-zoom-image] {
        background-position:50% 50%;
        background-repeat: no-repeat;
        cursor: zoom-in;
        margin: 0;
        overflow: hidden;
        position: relative
    }

    figure[data-zoom-image] img {
        display: block;
        transition: opacity .25s;
        width: 100%
    }
}

@media(min-width: 992px)and (prefers-reduced-motion:reduce) {
    figure[data-zoom-image] img {
        transition:none
    }
}

@media(min-width: 992px) {
    figure[data-zoom-image] img:hover {
        opacity:0
    }
}

.variants {
    border-collapse: collapse;
    width: 100%
}

.variants__head {
    background-color: #f8f9fa
}

.variants__item-col-head {
    padding: .625rem
}

.variants__item-col-head--sku {
    text-align: left
}

.variants__item-col-head--quantity {
    text-align: center
}

.variants__item--not-in-stock {
    opacity: .65
}

.variants__item-col {
    padding: .625rem
}

.variants__item-col--quantity {
    text-align: center
}

.variants__item-col .variants-price--price-row {
    margin-bottom: .375rem
}

.variants__item-col .variants-price--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.variants__item-col .variants-price--price-row>:last-of-type {
    margin-right: 0
}

.variants__item-col .variants-price--label-omnibus-price-gross,.variants__item-col .variants-price--label-rrp-price-gross,.variants__item-col .variants-price--omnibus-price-gross,.variants__item-col .variants-price--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.variants__item-col .variants-price--package-price-gross,.variants__item-col .variants-price--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.variants__item-col .variants-price--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.variants__item-col .variants-price--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.variants__item-col .variants-price--price-alert a {
    color: #495057;
    text-decoration: none
}

.variants__item-col .variants-price--price-alert a:hover {
    text-decoration: underline
}

.variants__item-col .variants-price--price-alert .icon--left {
    margin-right: .1875rem
}

.variants .quantity-spinner {
    justify-content: center
}

.variants-responsive {
    align-items: center;
    background: #fff;
    display: grid;
    --scrollbar-bg: transparent;
    --scrollbar-color: #8a8a8a;
    --scrollbar-size: .5rem;
    overflow: hidden;
    overflow-x: auto;
    width: 100%
}

@supports(scrollbar-width:thin) {
    .variants-responsive {
        scrollbar-color: var(--scrollbar-color) var(--scrollbar-bg);
        scrollbar-width: thin
    }
}

@supports not (scrollbar-width:thin) {
    .variants-responsive::-webkit-scrollbar {
        height: var(--scrollbar-size);
        width: var(--scrollbar-size)
    }

    .variants-responsive::-webkit-scrollbar-track {
        background: var(--scrollbar-bg)
    }

    .variants-responsive::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: var(--scrollbar-color);
        border: .125rem solid var(--scrollbar-bg);
        border-radius: var(--scrollbar-size)
    }

    .variants-responsive::-webkit-scrollbar-thumb:hover {
        background-color: #6f6f6f
    }

    .variants-responsive::-webkit-scrollbar-thumb:active {
        background-color: #3e3e3e
    }
}

.variants-responsive__item-head {
    align-items: center;
    background-color: #f8f9fa;
    display: flex;
    font-weight: 600;
    height: 100%
}

.variants-responsive__item,.variants-responsive__item-head {
    padding: .5rem
}

.variants-responsive__item--quantity {
    text-align: center
}

.variants-responsive__item .variants-price--price-row {
    margin-bottom: .375rem
}

.variants-responsive__item .variants-price--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.variants-responsive__item .variants-price--price-row>:last-of-type {
    margin-right: 0
}

.variants-responsive__item .variants-price--label-omnibus-price-gross,.variants-responsive__item .variants-price--label-rrp-price-gross,.variants-responsive__item .variants-price--omnibus-price-gross,.variants-responsive__item .variants-price--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.variants-responsive__item .variants-price--package-price-gross,.variants-responsive__item .variants-price--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.variants-responsive__item .variants-price--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.variants-responsive__item .variants-price--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.variants-responsive__item .variants-price--price-alert a {
    color: #495057;
    text-decoration: none
}

.variants-responsive__item .variants-price--price-alert a:hover {
    text-decoration: underline
}

.variants-responsive__item .variants-price--price-alert .icon--left {
    margin-right: .1875rem
}

.variants-responsive--horizontal {
    grid-auto-flow: column
}

.variants-responsive--horizontal .variants-responsive__item-head {
    left: 0;
    position: -webkit-sticky;
    position: sticky;
    z-index: 10
}

.variants-responsive[data-cols="2"] {
    grid-template-columns: repeat(2,auto)
}

.variants-responsive--horizontal[data-cols="2"] {
    grid-template-columns: none;
    grid-template-rows: repeat(2,auto)
}

.variants-responsive[data-cols="3"] {
    grid-template-columns: repeat(3,auto)
}

.variants-responsive--horizontal[data-cols="3"] {
    grid-template-columns: none;
    grid-template-rows: repeat(3,auto)
}

.variants-responsive[data-cols="4"] {
    grid-template-columns: repeat(4,auto)
}

.variants-responsive--horizontal[data-cols="4"] {
    grid-template-columns: none;
    grid-template-rows: repeat(4,auto)
}

.variants-responsive[data-cols="5"] {
    grid-template-columns: repeat(5,auto)
}

.variants-responsive--horizontal[data-cols="5"] {
    grid-template-columns: none;
    grid-template-rows: repeat(5,auto)
}

.variants-responsive[data-cols="6"] {
    grid-template-columns: repeat(6,auto)
}

.variants-responsive--horizontal[data-cols="6"] {
    grid-template-columns: none;
    grid-template-rows: repeat(6,auto)
}

.variants-responsive[data-cols="7"] {
    grid-template-columns: repeat(7,auto)
}

.variants-responsive--horizontal[data-cols="7"] {
    grid-template-columns: none;
    grid-template-rows: repeat(7,auto)
}

.variants-responsive[data-cols="8"] {
    grid-template-columns: repeat(8,auto)
}

.variants-responsive--horizontal[data-cols="8"] {
    grid-template-columns: none;
    grid-template-rows: repeat(8,auto)
}

.variants-responsive[data-cols="9"] {
    grid-template-columns: repeat(9,auto)
}

.variants-responsive--horizontal[data-cols="9"] {
    grid-template-columns: none;
    grid-template-rows: repeat(9,auto)
}

.variants-responsive[data-cols="10"] {
    grid-template-columns: repeat(10,auto)
}

.variants-responsive--horizontal[data-cols="10"] {
    grid-template-columns: none;
    grid-template-rows: repeat(10,auto)
}

.variants-responsive[data-cols="11"] {
    grid-template-columns: repeat(11,auto)
}

.variants-responsive--horizontal[data-cols="11"] {
    grid-template-columns: none;
    grid-template-rows: repeat(11,auto)
}

.product-attributes {
    margin-bottom: .6875rem
}

.product-attributes__item {
    display: flex;
    gap: .5rem;
    padding: .5rem
}

.product-attributes__item--odd {
    background-color: #fff
}

.product-attributes--invert .product-attributes__item--odd,.product-attributes__item--even {
    background-color: #f8f9fa
}

.product-attributes--invert .product-attributes__item--even {
    background-color: #fff
}

.product-attributes__group {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding: 1.5rem .5rem 0
}

.product-attributes__label {
    flex-shrink: 0;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 150px
}

.product-attributes__label:after {
    content: ":"
}

.product-attributes__value {
    overflow-x: auto
}

.product-attributes__color,.product-attributes__image {
    border: 1px solid #ced4da;
    display: inline-block;
    margin-right: .6875rem;
    padding: 2px;
    vertical-align: top
}

.product-attributes__image {
    height: 3rem;
    width: 3rem
}

.product-attributes__image img {
    aspect-ratio: 1;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

.product-attributes__color {
    height: 1.3125rem;
    width: 1.3125rem
}

.bulk-item__title {
    font-weight: 600;
    margin-bottom: .6875rem
}

.bulk-item__details {
    overflow: auto
}

.bulk-item-table {
    border-collapse: collapse;
    width: 100%
}

.bulk-item-table td,.bulk-item-table th {
    border-right: 1px solid #dee2e6;
    padding: .6875rem
}

.bulk-item-table td:last-of-type,.bulk-item-table th:last-of-type {
    border-right-width: 0
}

.bulk-item-table__data-label,.bulk-item-table__heading-label {
    background: #f8f9fa
}

.bulk-item-table__data-interval,.bulk-item-table__heading-interval {
    text-align: center
}

.bulk-item-table thead th {
    border-bottom: 1px solid #dee2e6
}

.bundle-format__title {
    font-weight: 600;
    margin-bottom: .625rem
}

.bundle-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    padding: .325rem 0
}

@media(min-width: 768px) {
    .bundle-item {
        flex-wrap:nowrap
    }
}

.bundle-item__image-container {
    flex: 0 0 60px;
    margin-right: .6875rem;
    max-width: 60px
}

.bundle-item__details {
    flex-grow: 1;
    font-size: .875rem
}

.bundle-item__actions {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 200px
}

@media(min-width: 768px) {
    .bundle-item__actions {
        margin-left:.6875rem
    }
}

.bundle-item__info {
    width: 100%
}

.bundle-item__info--name {
    margin-bottom: .325rem
}

.bundle-item__info--price-row .bundle-item__info {
    margin-bottom: 0
}

.bundle-item__info--price-row {
    margin-bottom: .375rem
}

.bundle-item__info--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.bundle-item__info--price-row>:last-of-type {
    margin-right: 0
}

.bundle-item__info--label-omnibus-price-gross,.bundle-item__info--label-rrp-price-gross,.bundle-item__info--omnibus-price-gross,.bundle-item__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.bundle-item__info--package-price-gross,.bundle-item__info--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.bundle-item__info--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.bundle-item__info--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.bundle-item__info--price-alert a {
    color: #495057;
    text-decoration: none
}

.bundle-item__info--price-alert a:hover {
    text-decoration: underline
}

.bundle-item__info--price-alert .icon--left {
    margin-right: .1875rem
}

.bundle-item__info--price-gross {
    font-size: 1rem
}

.bundle-item__info--variant-attributes {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap
}

.bogo-format {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    gap: 1rem;
    text-align: center
}

.bogo-format__item {
    align-items: center;
    background-color: #f3f7ff;
    border: 1px dashed #b2ccf7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem
}

.bogo-format__expiration {
    font-size: .875rem
}

@media(min-width: 576px) {
    .bogo-format {
        grid-template-columns:repeat(2,1fr)
    }
}

@media(min-width: 992px) {
    .bogo-format {
        grid-template-columns:1fr
    }
}

@media(min-width: 1200px) {
    .bogo-format {
        grid-template-columns:repeat(2,1fr)
    }
}

.bogo-format--single-item {
    grid-template-columns: 1fr
}

.product-compact {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem
}

.product-compact .product-summary__info--rating,.product-compact__info {
    margin-bottom: 0
}

.product-compact__info--name {
    font-size: 1.25rem
}

.product-compact__info--price-row {
    margin-bottom: .375rem
}

.product-compact__info--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.product-compact__info--price-row>:last-of-type {
    margin-right: 0
}

.product-compact__info--label-omnibus-price-gross,.product-compact__info--label-rrp-price-gross,.product-compact__info--omnibus-price-gross,.product-compact__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.product-compact__info--package-price-gross,.product-compact__info--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.product-compact__info--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.product-compact__info--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.product-compact__info--price-alert a {
    color: #495057;
    text-decoration: none
}

.product-compact__info--price-alert a:hover {
    text-decoration: underline
}

.product-compact__info--price-alert .icon--left {
    margin-right: .1875rem
}

.product-compact__info .variant-attribute {
    margin-bottom: .625rem
}

.product-compact__info .variant-attribute--select select {
    width: auto
}

.product-compact__info .product__rating {
    color: #e9ecef;
    display: inline-block;
    font-size: 1rem;
    font-size: 2rem;
    line-height: 1;
    margin: .25rem 0 .375rem;
    position: relative;
    vertical-align: middle;
    white-space: nowrap
}

.product-compact__info .product__rating:before {
    content: "★★★★★";
    vertical-align: text-top
}

.product-compact__info .product__rating-fill {
    color: #e5a54b;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1
}

.product-compact__info .product__rating-fill:before {
    content: "★★★★★";
    vertical-align: text-top
}

.product-compact__info .product__rating-fill--0-5 {
    width: 10%
}

.product-compact__info .product__rating-fill--1 {
    width: 20%
}

.product-compact__info .product__rating-fill--1-5 {
    width: 30%
}

.product-compact__info .product__rating-fill--2 {
    width: 40%
}

.product-compact__info .product__rating-fill--2-5 {
    width: 50%
}

.product-compact__info .product__rating-fill--3 {
    width: 60%
}

.product-compact__info .product__rating-fill--3-5 {
    width: 70%
}

.product-compact__info .product__rating-fill--4 {
    width: 80%
}

.product-compact__info .product__rating-fill--4-5 {
    width: 90%
}

.product-compact__info .product__rating-fill--5 {
    width: 100%
}

.product-compact__info .product__rating-count {
    color: #6c757d;
    display: inline-block;
    vertical-align: middle
}

@media(min-width: 992px) {
    .product-compact {
        flex-direction:row;
        justify-content: space-between;
        margin-bottom: 2rem
    }

    .product-compact__images {
        margin-right: 1.375rem;
        width: 100px
    }

    .product-compact__details {
        flex-grow: 1
    }
}

.free-shipping-format {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    gap: 1rem;
    text-align: center
}

.free-shipping-format__item {
    align-items: center;
    background-color: #f3f7ff;
    border: 1px dashed #b2ccf7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem
}

.free-shipping-format__expiration {
    font-size: .875rem
}

.free-shipping-format__item,.gift-item {
    flex-direction: row
}

.gift-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    padding: .325rem 0
}

@media(min-width: 768px) {
    .gift-item {
        flex-wrap:nowrap
    }
}

.gift-item__image-container {
    flex: 0 0 60px;
    margin-right: .6875rem;
    max-width: 60px
}

.gift-item__details {
    flex-grow: 1;
    font-size: .875rem
}

.gift-item__actions {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 200px
}

@media(min-width: 768px) {
    .gift-item__actions {
        margin-left:.6875rem
    }
}

.gift-item__info {
    width: 100%
}

.gift-item__info--name {
    margin-bottom: .325rem
}

.gift-item__info--price-row .gift-item__info {
    margin-bottom: 0
}

.gift-item__info--price-row {
    margin-bottom: .375rem
}

.gift-item__info--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.gift-item__info--price-row>:last-of-type {
    margin-right: 0
}

.gift-item__info--label-omnibus-price-gross,.gift-item__info--label-rrp-price-gross,.gift-item__info--omnibus-price-gross,.gift-item__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.gift-item__info--package-price-gross,.gift-item__info--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.gift-item__info--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.gift-item__info--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.gift-item__info--price-alert a {
    color: #495057;
    text-decoration: none
}

.gift-item__info--price-alert a:hover {
    text-decoration: underline
}

.gift-item__info--price-alert .icon--left {
    margin-right: .1875rem
}

.gift-item__info--price-gross {
    font-size: 1rem
}

.gift-item__info--variant-attributes {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap
}

.gift-selection {
    margin-bottom: .6875rem
}

.gift-selection__title {
    align-items: center;
    display: flex;
    font-weight: 600;
    margin-bottom: .6875rem
}

.gift-selection__expiration {
    font-weight: 400
}

.line-products {
    display: grid;
    grid-gap: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill,minmax(60px,1fr))
}

.line-products__item {
    border: 1px solid #dee2e6;
    cursor: pointer;
    padding: .125rem
}

.line-products__item--active {
    border: 1px solid #adb5bd
}

.line-products__item-image {
    aspect-ratio: 1;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

.product-meta-fields {
    margin-bottom: .6875rem
}

.product-meta-fields__item {
    display: flex;
    gap: .5rem;
    padding: .5rem
}

.product-meta-fields__item--odd {
    background-color: #fff
}

.product-meta-fields--invert .product-meta-fields__item--odd,.product-meta-fields__item--even {
    background-color: #f8f9fa
}

.product-meta-fields--invert .product-meta-fields__item--even {
    background-color: #fff
}

.product-meta-fields__group {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding: 1.5rem .5rem 0
}

.product-meta-fields__label {
    flex-shrink: 0;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 150px
}

.product-meta-fields__label:after {
    content: ":"
}

.product-meta-fields__value {
    overflow-x: auto
}

.product-meta-fields__color,.product-meta-fields__image {
    border: 1px solid #ced4da;
    display: inline-block;
    margin-right: .6875rem;
    padding: 2px;
    vertical-align: top
}

.product-meta-fields__image {
    height: 3rem;
    width: 3rem
}

.product-meta-fields__image img {
    aspect-ratio: 1;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

.product-meta-fields__color {
    height: 1.3125rem;
    width: 1.3125rem
}

.product-meta-fields [data-input-expand] {
    opacity: 0;
    pointer-events: none;
    position: absolute
}

.product-meta-fields [data-button-expand] {
    color: #495057
}

.product-meta-fields [data-button-expand]:before {
    background-image: url("data:image/svg+xml;utf-8,%3csvg fill='%23495057' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3e%3cpath d='M47.511,140.253l194.628,194.628c8.974,8.974,18.562,9.16,27.722,0l194.628-194.628c0,0,11.493-11.919,22.365-0.715 c10.304,10.618-1.427,22.203-1.427,22.203L291.074,356.095c-28.134,28.134-41.836,28.312-70.149,0L26.572,161.741 c0,0-11.731-11.586-1.427-22.203C36.018,128.335,47.511,140.253,47.511,140.253z'/%3e%3c/svg%3e");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: inline-block;
    height: .625rem;
    margin-right: .625rem;
    width: .625rem
}

.product-meta-fields [data-content-expand] {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden
}

.product-meta-fields [data-input-expand]:focus~[data-button-expand] {
    outline: 5px auto -webkit-focus-ring-color
}

.product-meta-fields [data-input-expand]:checked+[data-content-expand] {
    -webkit-line-clamp: unset
}

.product-meta-fields [data-input-expand]:checked~[data-button-expand] {
    display: none
}

.promo-format {
    border: 1px solid #dee2e6;
    padding: 1rem
}

.promo-format__title {
    font-weight: 600;
    margin-bottom: .6875rem
}

.promo-format__expiration {
    font-size: .875rem
}

.promo-grid {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.promo-grid>* {
    min-height: 0;
    min-width: 0
}

.promo-grid[data-cols-m="1"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.promo-grid[data-cols-m="1"]>* {
    min-height: 0;
    min-width: 0
}

.promo-grid[data-cols-m="2"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.promo-grid[data-cols-m="2"]>* {
    min-height: 0;
    min-width: 0
}

.promo-grid[data-cols-m="3"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.promo-grid[data-cols-m="3"]>* {
    min-height: 0;
    min-width: 0
}

.promo-grid[data-cols-m="4"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.promo-grid[data-cols-m="4"]>* {
    min-height: 0;
    min-width: 0
}

@media(min-width: 768px) {
    .promo-grid {
        align-items:stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="1"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="1"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="2"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="2"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="3"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="3"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="4"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="4"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="5"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="5"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="6"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="6"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="7"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="7"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-t="8"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-t="8"]>* {
        min-height: 0;
        min-width: 0
    }
}

@media(min-width: 992px) {
    .promo-grid {
        align-items:stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="1"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="1"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="2"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="2"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="3"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="3"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="4"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="4"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="5"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="5"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="6"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="6"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="7"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="7"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="8"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="8"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="9"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(9,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="9"]>* {
        min-height: 0;
        min-width: 0
    }

    .promo-grid[data-cols-d="10"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .promo-grid[data-cols-d="10"]>* {
        min-height: 0;
        min-width: 0
    }
}

.promo-grid .promo-item,.promo-grid .promo-totals {
    position: relative
}

.promo-grid .promo-item:last-child:before,.promo-grid .promo-item:not(:last-child):after,.promo-grid .promo-totals:last-child:before,.promo-grid .promo-totals:not(:last-child):after {
    color: #adb5bd;
    display: inline-block;
    font-size: 30px;
    position: absolute;
    transform: translate(50%,-25%)
}

.promo-grid .promo-item:not(:last-child):after,.promo-grid .promo-totals:not(:last-child):after {
    content: "+";
    right: 50%;
    top: 100%
}

.promo-grid .promo-item:last-child:after,.promo-grid .promo-item:nth-last-child(2):after {
    display: none
}

.promo-grid .promo-totals:before {
    content: "=";
    position: absolute;
    right: 50%;
    top: -1rem
}

.promo-grid .promo-totals {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center
}

.promo-grid .promo-totals .promo-total {
    margin-bottom: .34375rem
}

.promo-grid .promo-totals .promo-total--price-gross {
    font-size: 1rem;
    font-weight: 600
}

.promo-grid .promo-totals .promo-total--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

@media(min-width: 768px) {
    .promo-format {
        border:none
    }

    .promo-grid .promo-item .product {
        flex-direction: column
    }

    .promo-grid .promo-item .product .product__data {
        align-items: center
    }

    .promo-grid .promo-item .product .product__name {
        text-align: center;
        line-clamp: 2;
        -webkit-line-clamp: 2
    }

    .promo-grid .promo-item:not(:last-child):after {
        right: -1rem;
        top: 50%
    }

    .promo-grid .promo-totals:before {
        left: -1rem;
        right: auto;
        top: 50%
    }
}

.promo-item .product {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    flex-grow: 1;
    height: 100%;
    max-width: 100%
}

.promo-item .product .product__data {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center
}

.promo-item .product .product__category,.promo-item .product .product__name {
    text-decoration: none
}

.promo-item .product .product__name {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: .9375rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    color: currentColor;
    line-height: 1.5;
    margin: .25rem 0;
    min-height: 2.8125rem;
    overflow: hidden;
    overflow-wrap: anywhere
}

.promo-item .product .product__save-comparer {
    font-size: .9375rem
}

.promo-item .product .product__rating {
    color: #e9ecef;
    display: inline-block;
    font-size: 1rem;
    line-height: 1;
    margin: .25rem 0 .375rem;
    position: relative;
    vertical-align: middle;
    white-space: nowrap
}

.promo-item .product .product__rating:before {
    content: "★★★★★";
    vertical-align: text-top
}

.promo-item .product .product__rating-fill {
    color: #e5a54b;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1
}

.promo-item .product .product__rating-fill:before {
    content: "★★★★★";
    vertical-align: text-top
}

.promo-item .product .product__rating-fill--0-5 {
    width: 10%
}

.promo-item .product .product__rating-fill--1 {
    width: 20%
}

.promo-item .product .product__rating-fill--1-5 {
    width: 30%
}

.promo-item .product .product__rating-fill--2 {
    width: 40%
}

.promo-item .product .product__rating-fill--2-5 {
    width: 50%
}

.promo-item .product .product__rating-fill--3 {
    width: 60%
}

.promo-item .product .product__rating-fill--3-5 {
    width: 70%
}

.promo-item .product .product__rating-fill--4 {
    width: 80%
}

.promo-item .product .product__rating-fill--4-5 {
    width: 90%
}

.promo-item .product .product__rating-fill--5 {
    width: 100%
}

.promo-item .product .product__rating-count {
    color: #6c757d;
    display: inline-block;
    vertical-align: middle
}

.promo-item .product .product__category {
    color: #1a1e21;
    font-size: .875rem;
    margin: .25rem 0;
    text-transform: uppercase
}

.promo-item .product .product__description {
    color: #1a1e21;
    font-size: .8125rem;
    margin: .25rem 0 auto;
    padding-bottom: .25rem
}

.promo-item .product .product__sku,.promo-item .product .product__stock {
    margin-bottom: .34375rem
}

.promo-item .product .product__info--price-row {
    margin-bottom: .375rem
}

.promo-item .product .product__info--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.promo-item .product .product__info--price-row>:last-of-type {
    margin-right: 0
}

.promo-item .product .product__info--label-omnibus-price-gross,.promo-item .product .product__info--label-rrp-price-gross,.promo-item .product .product__info--omnibus-price-gross,.promo-item .product .product__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.promo-item .product .product__info--package-price-gross,.promo-item .product .product__info--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.promo-item .product .product__info--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.promo-item .product .product__info--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.promo-item .product .product__info--price-alert a {
    color: #495057;
    text-decoration: none
}

.promo-item .product .product__info--price-alert a:hover {
    text-decoration: underline
}

.promo-item .product .product__info--price-alert .icon--left {
    margin-right: .1875rem
}

.promo-item .product .product__attributes,.promo-item .product .product__line-options {
    display: flex;
    flex-direction: column;
    max-width: 100%
}

.promo-item .product .product__attributes [data-input-expand],.promo-item .product .product__line-options [data-input-expand] {
    opacity: 0;
    pointer-events: none;
    position: absolute
}

.promo-item .product .product__attributes [data-input-expand]:checked+[data-content-expand],.promo-item .product .product__line-options [data-input-expand]:checked+[data-content-expand] {
    white-space: normal
}

.promo-item .product .product__attribute,.promo-item .product .product__line-option {
    cursor: pointer;
    display: inline-block;
    line-height: 20px;
    max-width: 100%;
    overflow: hidden;
    padding: 1px;
    text-overflow: ellipsis;
    white-space: nowrap
}

.promo-item .product .product__attribute-name,.promo-item .product .product__line-option-name {
    color: #6c757d;
    display: inline-block;
    font-size: .875rem;
    font-weight: 600
}

.promo-item .product .product__attribute-name:after,.promo-item .product .product__line-option-name:after {
    content: ":"
}

.promo-item .product .product__attribute-link,.promo-item .product .product__line-option-link {
    color: #6c757d;
    display: inline-block;
    font-size: .875rem;
    text-decoration: none
}

.promo-item .product .product__attribute-link:hover,.promo-item .product .product__line-option-link:hover {
    color: #343a40;
    text-decoration: underline
}

.promo-item .product .product__attribute-link--color span,.promo-item .product .product__attribute-link--image span,.promo-item .product .product__line-option-link--color span,.promo-item .product .product__line-option-link--image span {
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0 0 0 1px #ced4da;
    display: inline-block;
    height: 18px;
    width: 18px
}

.promo-item .product .product__attribute-link--color:hover span,.promo-item .product .product__attribute-link--image:hover span,.promo-item .product .product__line-option-link--color:hover span,.promo-item .product .product__line-option-link--image:hover span {
    box-shadow: 0 0 0 1px #343a40
}

.promo-item .product .product__attribute-link--color img,.promo-item .product .product__attribute-link--image img,.promo-item .product .product__line-option-link--color img,.promo-item .product .product__line-option-link--image img {
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    vertical-align: top
}

.promo-item .product .product__attribute-link--image span,.promo-item .product .product__line-option-link--image span {
    width: auto
}

.promo-item .product .product__actions {
    margin-top: auto
}

.promo-item .product .product__data {
    align-items: flex-start;
    justify-content: space-between
}

.promo-item .product .product__name {
    text-align: left;
    -webkit-line-clamp: 1;
    line-clamp: 1
}

.promo-item .product .compact-image {
    flex: 0 0 max(100px,15%);
    margin-left: 0
}

.promo-item .product>*+* {
    margin-left: 1.5rem
}

.promo-item .variant-attribute {
    margin-bottom: .34375rem
}

.product-selection__heading {
    border-bottom: 1px solid #dee2e6;
    font-size: 1.25rem;
    padding: 0 0 1rem
}

.product-selection__info {
    margin-bottom: 1rem
}

.product-selection__info--price-row .product-selection__info {
    margin-bottom: 0
}

.product-selection__info--price-row {
    margin-bottom: .375rem
}

.product-selection__info--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.product-selection__info--price-row>:last-of-type {
    margin-right: 0
}

.product-selection__info--label-omnibus-price-gross,.product-selection__info--label-rrp-price-gross,.product-selection__info--omnibus-price-gross,.product-selection__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.product-selection__info--package-price-gross,.product-selection__info--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.product-selection__info--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.product-selection__info--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.product-selection__info--price-alert a {
    color: #495057;
    text-decoration: none
}

.product-selection__info--price-alert a:hover {
    text-decoration: underline
}

.product-selection__info--price-alert .icon--left {
    margin-right: .1875rem
}

.product-selection__info .variant-attribute {
    margin-bottom: .625rem
}

.product-selection__info .variant-attribute--select select {
    width: 100%
}

.product-selection__info .variant-attribute--tag .variant-attribute__name {
    font-weight: 600;
    margin-bottom: .34375rem
}

.product-selection__info .variant-attribute--radio label {
    cursor: pointer
}

.product-selection__info .variant-attribute--tag .variant-attribute__price {
    color: #6c757d;
    font-size: .875rem
}

.product-selection__info .variant-attribute--tag {
    margin-bottom: -.6875rem;
    margin-top: .6875rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__color {
    display: inline-block;
    height: 1.3125rem;
    vertical-align: top;
    width: 1.3125rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image>* {
    min-height: 0;
    min-width: 0
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="1"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="1"]>* {
    min-height: 0;
    min-width: 0
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="2"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="2"]>* {
    min-height: 0;
    min-width: 0
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="3"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="3"]>* {
    min-height: 0;
    min-width: 0
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="4"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="4"]>* {
    min-height: 0;
    min-width: 0
}

@media(min-width: 768px) {
    .product-selection__info .variant-attribute--tag .variant-attribute__values--image {
        align-items:stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="1"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="1"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="2"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="2"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="3"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="3"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="4"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="4"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="5"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="5"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="6"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="6"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="7"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="7"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="8"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="8"]>* {
        min-height: 0;
        min-width: 0
    }
}

@media(min-width: 992px) {
    .product-selection__info .variant-attribute--tag .variant-attribute__values--image {
        align-items:stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="1"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="1"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="2"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="2"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="3"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="3"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="4"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="4"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="5"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="5"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="6"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="6"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="7"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="7"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="8"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="8"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="9"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(9,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="9"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="10"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-selection__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="10"]>* {
        min-height: 0;
        min-width: 0
    }
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value label {
    align-items: center;
    background-color: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    padding: .125rem
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value label img {
    aspect-ratio: 1;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

.product-selection__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value label:hover,.product-selection__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value.variant-attribute__value--selected label {
    background-color: #fff;
    border: 1px solid #adb5bd;
    color: #495057
}

.product-selection__info .variant-attribute--tag .variant-attribute__value {
    display: inline-block
}

.product-selection__info .variant-attribute--tag .variant-attribute__value input {
    display: none
}

.product-selection__info .variant-attribute--tag .variant-attribute__value label {
    background-color: #fff;
    border: 1px solid #ced4da;
    color: #495057;
    cursor: pointer;
    display: inline-block;
    font-size: .875rem;
    margin-bottom: .6875rem;
    margin-right: .6875rem;
    padding: 2px .4583333333rem;
    position: relative
}

.product-selection__info .variant-attribute--tag .variant-attribute__value label a,.product-selection__info .variant-attribute--tag .variant-attribute__value label a:active,.product-selection__info .variant-attribute--tag .variant-attribute__value label a:hover {
    color: #495057;
    text-decoration: none
}

.product-selection__info .variant-attribute--tag .variant-attribute__value :checked+label,.product-selection__info .variant-attribute--tag .variant-attribute__value label:hover {
    border-color: #212529
}

.product-selection__info .variant-attribute--tag .variant-attribute__value--color label {
    padding: 2px
}

.product-selection__info .variant-attribute--tag .variant-attribute__value--disabled:not(.product-selection__info .variant-attribute--tag .variant-attribute__value--selected) label {
    border-color: #e9ecef;
    color: #ced4da;
    cursor: default
}

.product-selection__info .variant-attribute--tag .variant-attribute__value--disabled:not(.product-selection__info .variant-attribute--tag .variant-attribute__value--selected) label:hover {
    border-color: #e9ecef;
    color: #ced4da
}

.product-selection__info .variant-attribute--tag .variant-attribute__value--disabled label:after {
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='gainsboro' stroke-width='3'/><path d='M0 0 L100 100 ' stroke='gainsboro' stroke-width='3'/></svg>") no-repeat 50% 50%/100% 100%;
    bottom: 0;
    content: "";
    display: inline-block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.product-selection__info .variant-attribute--tag .variant-attribute__selected-value {
    font-weight: 400
}

.product-selection__info-title {
    font-weight: 600;
    margin-bottom: .34375rem
}

.product-selection__info--save-selection {
    margin-bottom: 0
}

.product-summary {
    display: flex;
    flex-direction: column
}

.product-summary--product-details {
    background-color: #fff;
    border: 1px solid #dee2e6;
    min-width: 0;
    padding: 1rem;
    word-wrap: break-word;
    border-radius: .25rem
}

@media(min-width: 768px) {
    .product-summary--product-details {
        padding:1.5rem
    }
}

.product-summary__heading {
    font-size: 1.375rem;
    margin-bottom: .75rem
}

.product-summary__native-share {
    align-items: center;
    border: 0;
    display: flex;
    justify-content: center;
    padding: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 3
}

.product-summary__native-share:before {
    background-color: #dee2e6;
    border-radius: 50%;
    content: "";
    display: block;
    height: 2rem;
    left: 50%;
    opacity: .5;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: opacity .1s ease-in-out;
    width: 2rem
}

.product-summary__native-share:hover:before {
    opacity: .75
}

.product-summary__native-share svg {
    height: 1rem;
    width: 1rem
}

.product-summary__native-share:before {
    height: 3rem;
    width: 3rem
}

@media(min-width: 768px) {
    .product-summary__native-share {
        display:none
    }
}

.product-summary__image-badges {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    z-index: 1
}

.product-summary__image-badges>*+* {
    margin-top: 4px
}

.product-summary__image-badges>* {
    background: #f16805;
    color: #fff;
    font-size: .875rem;
    font-weight: 600;
    padding: 3px .65em
}

.product-summary__image-badges .divider {
    font-size: .6875rem;
    padding: 0
}

.product-summary__image-badges--right {
    right: 0
}

.product-summary__image-badges--left {
    align-items: flex-start;
    left: 0
}

.product-summary .stock-alert {
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    padding: .5rem
}

.product-summary__images {
    display: flex;
    justify-content: center;
    position: relative
}

@media(min-width: 768px) {
    .product-summary__images--ttb.product-summary__images {
        align-items:flex-start;
        display: flex;
        flex-direction: row
    }

    .product-summary__images--ttb.product-summary__images>*+* {
        margin-right: 1rem;
        order: -1
    }
}

.product-summary__main-images {
    margin-bottom: 1rem;
    position: relative
}

@media(min-width: 768px) {
    .product-summary__main-images {
        margin-bottom:0
    }
}

.product-summary__main-images .splide__slide {
    align-items: center;
    width: 100%
}

.product-summary__main-images .splide__slide figure {
    margin: 0;
    max-height: 100%
}

.product-summary__main-image-wrapper {
    display: inline-block;
    width: 100%
}

.product-summary__thumbnails .splide__slide {
    border: 1px solid #dee2e6;
    height: 80px;
    margin-right: 1rem;
    padding: .125rem;
    width: auto
}

.product-summary__thumbnails--ttb .splide__slide {
    height: auto;
    margin-bottom: 1rem;
    margin-right: 0;
    width: 80px
}

.product-summary__thumb-image-wrapper {
    height: 100%;
    width: 100%
}

.product-summary__details {
    min-width: 0
}

.product-summary__top-details {
    align-items: flex-start;
    display: flex
}

.product-summary__top-details-left {
    flex-grow: 1
}

.product-summary__info--variants {
    grid-area: variants
}

.product-summary__info--stock {
    grid-area: stock
}

.product-summary__info--messages {
    grid-area: messages
}

.product-summary__info--variant-attributes {
    grid-area: variant-attributes
}

.product-summary__info--user-fields {
    grid-area: user-fields
}

.product-summary__info--subscriptions {
    grid-area: subscriptions
}

.product-summary__info--bogo {
    grid-area: bogo
}

.product-summary__info--free-shipping {
    grid-area: free-shipping
}

.product-summary__info--bundle {
    grid-area: bundle
}

.product-summary__info--gift {
    grid-area: gift
}

.product-summary__info--bulk {
    grid-area: bulk
}

.product-summary__info--sku {
    grid-area: sku
}

.product-summary__info--ean {
    grid-area: ean
}

.product-summary__info--availability {
    grid-area: availability
}

.product-summary__info--quantity {
    grid-area: quantity
}

.product-summary__info--actions {
    grid-area: actions
}

.product-summary__info--tabs ol,.product-summary__info--tabs ul {
    list-style: disc none outside;
    margin: 1em 0;
    padding: 0 0 0 2rem
}

.product-summary__info--tabs ol {
    list-style-type: decimal
}

.product-summary__info--tabs li {
    display: list-item
}

.product-summary__info--tabs ol ul,.product-summary__info--tabs ul ul {
    list-style-type: circle
}

.product-summary__info--tabs ol ol,.product-summary__info--tabs ul ol {
    list-style-type: lower-latin
}

.product-summary__info--tabs table,.product-summary__info--tabs tbody,.product-summary__info--tabs td,.product-summary__info--tabs tfoot,.product-summary__info--tabs th,.product-summary__info--tabs thead,.product-summary__info--tabs tr {
    border-style: inherit;
    border-width: 1px
}

.product-summary__form {
    display: grid;
    grid-template-areas: "variants" "stock" "variant-attributes" "user-fields" "subscriptions" "bogo" "free-shipping" "bundle" "gift" "bulk" "sku" "ean" "messages" "availability" "quantity" "actions";
    grid-template-columns: minmax(0,1fr)
}

.product-summary .nophoto {
    background-image: url("data:image/svg+xml;utf-8,%3csvg fill='%23adb5bd' xmlns='http://www.w3.org/2000/svg' id='Capa_1' enable-background='new 0 0 450.824 450.824' height='512' viewBox='0 0 450.824 450.824' width='512'%3e%3cpath d='m390.345 116.833c5.502 5.502 5.502 14.422 0 19.924s-14.422 5.502-19.924 0-5.502-14.422 0-19.924 14.422-5.502 19.924 0'/%3e%3cpath d='m408.559 56.354h-72.849c-5.82-16.4-21.49-28.176-39.857-28.176h-140.882c-18.102 0-33.492 11.491-39.506 27.523l22.668 22.668c1.603-2.287 2.75-4.919 2.75-7.926 0-7.773 6.315-14.088 14.088-14.088h140.882c7.773 0 14.088 6.315 14.088 14.088 0 7.787 6.301 14.088 14.088 14.088h84.529c7.773 0 14.088 6.315 14.088 14.088v253.588c0 3.003-1.151 5.634-2.755 7.921l20.082 20.082c6.669-7.474 10.85-17.22 10.85-28.003v-253.589c0-23.306-18.958-42.264-42.264-42.264z'/%3e%3cpath d='m329.161 269.397c5.756-13.524 8.956-28.385 8.956-43.985 0-62.145-50.561-112.706-112.706-112.706-15.6 0-30.46 3.2-43.985 8.956l22.371 22.371c6.941-1.849 14.097-3.151 21.614-3.151 46.612 0 84.529 37.917 84.529 84.529 0 7.517-1.302 14.673-3.151 21.614.001.001 22.372 22.372 22.372 22.372z'/%3e%3cpath d='m0 19.923 36.966 36.966c-20.785 2.638-36.966 20.238-36.966 41.73v253.588c0 23.306 18.959 42.265 42.265 42.265h332.285l56.353 56.353 19.922-19.922-430.903-430.903zm42.265 346.373c-7.773 0-14.088-6.315-14.088-14.088v-253.589c0-7.773 6.315-14.088 14.088-14.088h22.343l72.397 72.397c-14.876 19.038-24.298 42.507-24.298 68.486 0 62.145 50.561 112.706 112.706 112.706 25.982 0 49.51-9.357 68.558-24.226l52.403 52.403zm114.738-189.369 116.971 116.971c-13.772 9.882-30.35 16.045-48.562 16.045-46.612 0-84.529-37.917-84.529-84.529-.001-18.208 6.235-34.722 16.12-48.487z'/%3e%3c/svg%3e");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    height: 9rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 3rem;
    width: 9rem
}

.product-summary__thumbnails {
    margin-top: 1rem
}

.product-summary__thumbnails img {
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

.product-summary__thumbnails--ttb {
    margin-bottom: 0;
    margin-top: 0
}

.product-summary__thumbnails--ttb .splide__list {
    display: flex;
    flex-direction: column
}

@media(max-width: 767.98px) {
    .product-summary__thumbnails {
        display:none
    }
}

.product-summary__badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2rem
}

@media(min-width: 768px) {
    .product-summary__badges {
        flex-direction:column;
        flex-wrap: nowrap;
        float: right;
        margin-bottom: .6875rem;
        margin-left: .6875rem
    }
}

.product-summary__badges>*+* {
    margin-left: .6875rem;
    margin-top: .6875rem
}

@media(min-width: 768px) {
    .product-summary__badges>*+* {
        margin-left:0
    }
}

.product-summary__badge--brand {
    width: 100px
}

.product-summary__badge--promo-bogo,.product-summary__badge--promo-free-shipping {
    align-self: flex-start;
    background: #b8201b;
    border-radius: 50%;
    color: #fff;
    height: 100px;
    position: relative;
    width: 100px
}

.product-summary__badge--promo-bogo .product-summary__badge-text,.product-summary__badge--promo-free-shipping .product-summary__badge-text {
    display: inline-block;
    font-size: .875rem;
    font-weight: 600;
    left: 50%;
    padding: .6875rem;
    position: relative;
    text-align: center;
    top: 50%;
    transform: translate(-50%,-50%)
}

@media(min-width: 768px) {
    .product-summary__badge--promo-bogo,.product-summary__badge--promo-free-shipping {
        align-self:flex-end
    }
}

.product-summary__info {
    margin-bottom: .625rem
}

.product-summary__info--variants {
    overflow-x: auto
}

.product-summary__info--rating>a {
    display: inline-block;
    text-decoration: none
}

.product-summary__info--brand {
    flex-shrink: 0;
    width: 100px
}

@media(min-width: 768px) {
    .product-summary__info--brand {
        margin-left:1rem
    }
}

.product-summary__info--brand img {
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

@media(max-width: 767.98px) {
    .product-summary__info--brand.product-summary__info--desktop {
        display:none
    }
}

@media(min-width: 768px) {
    .product-summary__info--brand.product-summary__info--mobile {
        display:none
    }
}

.product-summary__info--price-row .product-summary__info {
    margin-bottom: 0
}

.product-summary__info--price-row {
    margin-bottom: .375rem
}

.product-summary__info--price-row>* {
    display: inline-block;
    margin-right: .325rem
}

.product-summary__info--price-row>:last-of-type {
    margin-right: 0
}

.product-summary__info--label-omnibus-price-gross,.product-summary__info--label-rrp-price-gross,.product-summary__info--omnibus-price-gross,.product-summary__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.product-summary__info--package-price-gross,.product-summary__info--price-gross {
    color: #212529;
    font-size: 1rem;
    font-weight: 600
}

.product-summary__info--old-price-gross {
    color: #6c757d;
    font-size: .875rem;
    text-decoration: line-through
}

.product-summary__info--price-alert {
    font-size: .9em;
    margin-bottom: .375rem
}

.product-summary__info--price-alert a {
    color: #495057;
    text-decoration: none
}

.product-summary__info--price-alert a:hover {
    text-decoration: underline
}

.product-summary__info--price-alert .icon--left {
    margin-right: .1875rem
}

.product-summary__info--icon-rrp-price-gross,.product-summary__info--label-rrp-price-gross,.product-summary__info--rrp-price-gross {
    font-size: .75rem;
    font-weight: 400
}

.product-summary__info--shipping {
    font-weight: 600
}

.product-summary__info--tabs .accordion {
    background-color: #fff;
    border: 1px solid #dee2e6;
    min-width: 0;
    padding: 1rem;
    word-wrap: break-word;
    border-radius: .25rem
}

@media(min-width: 768px) {
    .product-summary__info--tabs .accordion {
        padding:1.5rem
    }
}

.product-summary__info--tabs .accordion.accordion {
    padding: 0
}

.product-summary__info--tabs .accordion.accordion__body {
    padding: 1rem 1.25rem
}

.product-summary__info--tabs .accordion__item {
    background-color: transparent;
    border-top-width: 0
}

.product-summary__info--tabs .accordion__item:last-child {
    border-bottom-width: 0
}

.product-summary__info--tabs .accordion__button {
    background-color: transparent;
    padding-bottom: .75rem;
    padding-right: .75rem;
    padding-top: .75rem
}

.product-summary__info--tabs .accordion__button:not(.collapsed) {
    font-weight: 600
}

.product-summary__info .variant-attribute {
    margin-bottom: .625rem
}

.product-summary__info .variant-attribute--select:last-child {
    margin-bottom: 0
}

.product-summary__info .variant-attribute--select select {
    width: 100%
}

.product-summary__info .variant-attribute--tag .variant-attribute__name {
    font-weight: 600;
    margin-bottom: .34375rem
}

.product-summary__info .variant-attribute--radio label {
    cursor: pointer
}

.product-summary__info .variant-attribute--tag .variant-attribute__price {
    color: #6c757d;
    font-size: .875rem
}

.product-summary__info .variant-attribute--tag {
    margin-bottom: -.6875rem;
    margin-top: .6875rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__color {
    display: inline-block;
    height: 1.3125rem;
    vertical-align: top;
    width: 1.3125rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__value {
    display: inline-block
}

.product-summary__info .variant-attribute--tag .variant-attribute__value input {
    display: none
}

.product-summary__info .variant-attribute--tag .variant-attribute__value label {
    background-color: #fff;
    border: 1px solid #ced4da;
    color: #495057;
    cursor: pointer;
    display: inline-block;
    font-size: .875rem;
    margin-bottom: .6875rem;
    margin-right: .6875rem;
    padding: 2px .4583333333rem;
    position: relative
}

.product-summary__info .variant-attribute--tag .variant-attribute__value label a,.product-summary__info .variant-attribute--tag .variant-attribute__value label a:active,.product-summary__info .variant-attribute--tag .variant-attribute__value label a:hover {
    color: #495057;
    text-decoration: none
}

.product-summary__info .variant-attribute--tag .variant-attribute__value :checked+label,.product-summary__info .variant-attribute--tag .variant-attribute__value label:hover {
    border-color: #212529
}

.product-summary__info .variant-attribute--tag .variant-attribute__value--color label,.product-summary__info .variant-attribute--tag .variant-attribute__value--image label {
    padding: 2px
}

.product-summary__info .variant-attribute--tag .variant-attribute__value--disabled:not(.product-summary__info .variant-attribute--tag .variant-attribute__value--selected) label {
    border-color: #e9ecef;
    color: #ced4da;
    transition: all .2s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .product-summary__info .variant-attribute--tag .variant-attribute__value--disabled:not(.product-summary__info .variant-attribute--tag .variant-attribute__value--selected) label {
        transition: none
    }
}

.product-summary__info .variant-attribute--tag .variant-attribute__value--disabled:not(.product-summary__info .variant-attribute--tag .variant-attribute__value--selected) label:hover {
    border-color: #ced4da;
    color: #6c757d;
    transition: all .2s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .product-summary__info .variant-attribute--tag .variant-attribute__value--disabled:not(.product-summary__info .variant-attribute--tag .variant-attribute__value--selected) label:hover {
        transition: none
    }
}

.product-summary__info .variant-attribute--tag .variant-attribute__value--disabled label:after {
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='gainsboro' stroke-width='3'/><path d='M0 0 L100 100 ' stroke='gainsboro' stroke-width='3'/></svg>") no-repeat 50% 50%/100% 100%;
    bottom: 0;
    content: "";
    display: inline-block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    gap: 1.5rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image>* {
    min-height: 0;
    min-width: 0
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="1"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="1"]>* {
    min-height: 0;
    min-width: 0
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="2"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="2"]>* {
    min-height: 0;
    min-width: 0
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="3"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="3"]>* {
    min-height: 0;
    min-width: 0
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="4"] {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto;
    grid-gap: .6875rem;
    gap: .6875rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-m="4"]>* {
    min-height: 0;
    min-width: 0
}

@media(min-width: 768px) {
    .product-summary__info .variant-attribute--tag .variant-attribute__values--image {
        align-items:stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="1"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="1"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="2"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="2"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="3"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="3"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="4"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="4"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="5"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="5"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="6"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="6"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="7"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="7"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="8"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-t="8"]>* {
        min-height: 0;
        min-width: 0
    }
}

@media(min-width: 992px) {
    .product-summary__info .variant-attribute--tag .variant-attribute__values--image {
        align-items:stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: 1.5rem;
        gap: 1.5rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="1"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="1"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="2"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="2"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="3"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="3"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="4"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="4"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="5"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="5"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="6"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="6"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="7"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="7"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="8"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="8"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="9"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(9,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="9"]>* {
        min-height: 0;
        min-width: 0
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="10"] {
        align-items: stretch;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: auto;
        grid-gap: .6875rem;
        gap: .6875rem
    }

    .product-summary__info .variant-attribute--tag .variant-attribute__values--image[data-cols-d="10"]>* {
        min-height: 0;
        min-width: 0
    }
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value label {
    align-items: center;
    background-color: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    padding: .125rem
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value label img {
    aspect-ratio: 1;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%
}

.product-summary__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value label:hover,.product-summary__info .variant-attribute--tag .variant-attribute__values--image .variant-attribute__value--selected label {
    background-color: #fff;
    border: 1px solid #adb5bd;
    color: #495057
}

.product-summary__info .variant-attribute--tag .variant-attribute__selected-value {
    font-weight: 400
}

.product-summary__info .product__rating {
    color: #e9ecef;
    display: inline-block;
    font-size: 1rem;
    font-size: 1.5rem;
    line-height: 1;
    margin: .25rem 0 .375rem;
    position: relative;
    vertical-align: middle;
    white-space: nowrap
}

.product-summary__info .product__rating:before {
    content: "★★★★★";
    vertical-align: text-top
}

.product-summary__info .product__rating-fill {
    color: #e5a54b;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1
}

.product-summary__info .product__rating-fill:before {
    content: "★★★★★";
    vertical-align: text-top
}

.product-summary__info .product__rating-fill--0-5 {
    width: 10%
}

.product-summary__info .product__rating-fill--1 {
    width: 20%
}

.product-summary__info .product__rating-fill--1-5 {
    width: 30%
}

.product-summary__info .product__rating-fill--2 {
    width: 40%
}

.product-summary__info .product__rating-fill--2-5 {
    width: 50%
}

.product-summary__info .product__rating-fill--3 {
    width: 60%
}

.product-summary__info .product__rating-fill--3-5 {
    width: 70%
}

.product-summary__info .product__rating-fill--4 {
    width: 80%
}

.product-summary__info .product__rating-fill--4-5 {
    width: 90%
}

.product-summary__info .product__rating-fill--5 {
    width: 100%
}

.product-summary__info .product__rating-count {
    color: #6c757d;
    display: inline-block;
    vertical-align: middle
}

.product-summary__info-title {
    font-weight: 600;
    margin-bottom: .34375rem
}

.product-summary__info--unavailable {
    color: #b8201b
}

.product-summary__info--limited {
    color: #e5a54b
}

.product-summary__info--available {
    color: #4bbf73
}

.product-summary__info--subscriptions select {
    width: auto
}

.product-summary__info--messages>* {
    margin-bottom: 0;
    padding: .6875rem
}

.product-summary__info--messages>*+* {
    margin-top: .6875rem
}

.product-summary__info--quantity .quantity-spinner {
    margin: 0
}

.product-summary__info--batch-quantity .quantity-spinner {
    max-width: 200px
}

.product-summary__info--actions {
    display: flex;
    flex-direction: column
}

.product-summary__info--actions .product-action {
    margin-bottom: .6875rem
}

@media(min-width: 768px) {
    .product-summary__info--actions {
        flex-direction:row
    }

    .product-summary__info--actions .product-action {
        margin-bottom: 0;
        margin-right: .6875rem
    }
}

.product-summary__info--contact a {
    color: #495057;
    font-size: .875rem;
    text-decoration: none
}

.product-summary__info--contact a:hover {
    color: #212529
}

.product-summary__info--contact svg {
    height: 1em;
    margin-right: .6875rem;
    vertical-align: -.175em;
    width: 1em
}

.product-summary--quick-view .product-summary__info--actions {
    flex-direction: column
}

.product-summary--quick-view .product-summary__info--actions .product-action {
    margin-bottom: .6875rem;
    margin-right: 0
}

.product-summary .info-label:after {
    content: ":"
}

@media(min-width: 768px) {
    .product-summary__images {
        align-items:center;
        flex-direction: column;
        justify-content: flex-start
    }
}

@media(min-width: 992px) {
    .product-summary {
        flex-direction:row
    }

    .product-summary>*+* {
        flex-grow: 1;
        margin-left: 2rem
    }
}

.product-summary__save-comparer,.product-summary__save-wishlist {
    padding-left: 0;
    padding-right: 0
}

.product-user-fields .product-multipicker {
    margin-bottom: 1rem
}

.product-user-fields .product-multipicker__label {
    font-weight: 600;
    margin-bottom: .34375rem
}

.product-user-fields .product-multipicker__items>*+* {
    margin-top: .5rem
}

.product-user-fields .product-multipicker__item {
    border: 1px solid #ced4da;
    border-radius: .25rem;
    display: flex;
    font-size: .9em;
    padding: .3125rem 1rem
}

.product-user-fields .product-multipicker__item>*+* {
    margin-left: .6875rem
}

.product-user-fields .product-multipicker__checkbox {
    align-items: center;
    display: flex;
    flex: 0 0 auto
}

.product-user-fields .product-multipicker__checkbox input {
    border-color: #ced4da;
    border-radius: .25rem;
    cursor: pointer;
    height: 1.125rem;
    margin: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 1.125rem
}

@media(prefers-reduced-motion:reduce) {
    .product-user-fields .product-multipicker__checkbox input {
        transition: none
    }
}

.product-user-fields .product-multipicker__checkbox input:before {
    border-color: #212529
}

.product-user-fields .product-multipicker__checkbox input:checked {
    background-color: #f16805;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .product-user-fields .product-multipicker__checkbox input:checked {
        transition: none
    }
}

.product-user-fields .product-multipicker__checkbox input:checked:before {
    border-color: #fff
}

.product-user-fields .product-multipicker__data {
    align-items: center;
    display: flex;
    flex: 1 1 65%
}

.product-user-fields .product-multipicker__data label {
    align-items: center;
    cursor: pointer;
    display: flex;
    text-align: left
}

.product-user-fields .product-multipicker__data img {
    aspect-ratio: 1;
    display: none;
    height: 3.5rem;
    -o-object-fit: contain;
    object-fit: contain;
    width: 3.5rem
}

@media(min-width: 576px) {
    .product-user-fields .product-multipicker__data img {
        display:inline-block
    }
}

.product-user-fields .product-multipicker__label-text {
    margin-left: .6875rem
}

.product-user-fields .product-multipicker__price {
    align-items: center;
    display: flex;
    flex: 0 0 20%;
    justify-content: flex-end
}

.product-user-fields .product-multipicker__price>span {
    font-weight: 600
}

.page--product-details.page .page__content-wrapper {
    grid-template-areas: "aside-head" "content" "product-content";
    grid-template-columns: minmax(0,1fr);
    grid-template-rows: auto auto minmax(0,1fr)
}

.page--product-details.page .page__content-wrapper .aside-head {
    grid-area: aside-head
}

@media(min-width: 992px) {
    .page--product-details.page .page__content-wrapper .product-summary {
        grid-template-columns:-webkit-min-content auto;
        grid-template-columns: min-content auto
    }
}

.page--product-details.page .page__content-wrapper .product-content__block-heading {
    border-bottom: 1px solid #e9ecef;
    margin-bottom: .75rem;
    padding-bottom: .75rem
}

@media(min-width: 768px) {
    .page--product-details.page .page__content-wrapper .product-content__tabs {
        display:flex
    }
}

@media(min-width: 992px) {
    .page--product-details.page .page__content-wrapper .product-content__tabs {
        margin-bottom:1.5rem;
        margin-top: 0;
        top: 8rem
    }
}

.page--product-details.page .page__content-wrapper .product-content .nav-item:first-child .nav-link {
    border-left: 0
}

.page--product-details.page .page__content-wrapper .product-content .nav-link {
    color: currentColor
}

.page--product-details.page .page__content-wrapper .product-content .nav-link.active,.page--product-details.page .page__content-wrapper .product-content .nav-link:hover {
    color: #f16805
}

.page--product-details.page .page__content-wrapper .product-content .nav-link.active {
    background-color: transparent;
    border-bottom-color: #f16805
}

.page--product-details.page .page__content-wrapper .product-content__block {
    background-color: #fff;
    border: 1px solid #dee2e6;
    min-width: 0;
    padding: 1rem;
    word-wrap: break-word;
    border-radius: .25rem;
    margin: 1rem 0
}

@media(min-width: 768px) {
    .page--product-details.page .page__content-wrapper .product-content__block {
        padding:1.5rem
    }
}

.page--product-details.page .page__content-wrapper .product-content__block:last-of-type {
    margin-bottom: 0
}

.page--product-details.page .page__content-wrapper .product-content__block ol,.page--product-details.page .page__content-wrapper .product-content__block ul {
    list-style: disc none outside;
    margin: 1em 0;
    padding: 0 0 0 2rem
}

.page--product-details.page .page__content-wrapper .product-content__block ol {
    list-style-type: decimal
}

.page--product-details.page .page__content-wrapper .product-content__block li {
    display: list-item
}

.page--product-details.page .page__content-wrapper .product-content__block ol ul,.page--product-details.page .page__content-wrapper .product-content__block ul ul {
    list-style-type: circle
}

.page--product-details.page .page__content-wrapper .product-content__block ol ol,.page--product-details.page .page__content-wrapper .product-content__block ul ol {
    list-style-type: lower-latin
}

.page--product-details.page .page__content-wrapper .product-content__block table,.page--product-details.page .page__content-wrapper .product-content__block tbody,.page--product-details.page .page__content-wrapper .product-content__block td,.page--product-details.page .page__content-wrapper .product-content__block tfoot,.page--product-details.page .page__content-wrapper .product-content__block th,.page--product-details.page .page__content-wrapper .product-content__block thead,.page--product-details.page .page__content-wrapper .product-content__block tr {
    border-style: inherit;
    border-width: 1px
}

.page--product-details.page .page__content-wrapper .product-tags {
    background-color: #fff;
    display: flex;
    margin-bottom: .6875rem;
    padding: .5rem
}

.page--product-details.page .page__content-wrapper .product-tags--invert {
    background-color: #f8f9fa
}

.page--product-details.page .page__content-wrapper .product-tags__name {
    flex-shrink: 0;
    width: 150px
}

.page--product-details.page .page__content-wrapper .product-tags__name:after {
    content: ":"
}

.page--product-details.page .page__content-wrapper .product-tags__value {
    background-color: #e9ecef;
    border-radius: 2rem;
    cursor: pointer;
    display: inline-block;
    font-size: .9rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    max-width: 150px;
    overflow: hidden;
    padding: .625rem;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap
}

.page--product-details.page .page__content-wrapper .product-tags__value:hover {
    background-color: #dadfe4
}

.page--product-details.page .page__content-wrapper .product-tags__value a,.page--product-details.page .page__content-wrapper .product-tags__value a:active,.page--product-details.page .page__content-wrapper .product-tags__value a:hover {
    color: #212529;
    text-decoration: none
}

.page--product-details.page .page__content-wrapper .product-tags__value :last-of-type {
    margin-right: 0
}

.breadcrumb {
    display: flex;
    font-size: .875rem;
    margin-bottom: 0;
    overflow-x: auto;
    padding-left: 0
}

.breadcrumb__item {
    align-items: center;
    display: flex;
    white-space: nowrap
}

.breadcrumb__item>a {
    text-decoration: none
}

.breadcrumb__item:not(:last-of-type):after {
    background-image: url(data:image/svg+xml;utf-8;base64,PHN2ZyBmaWxsPScjMDAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7JyB4bWw6c3BhY2U9J3ByZXNlcnZlJz48cGF0aCBkPSdNMTQwLjI1Myw0NjQuNDg5bDE5NC42MjgtMTk0LjYyOGM4Ljk3NC04Ljk3NCw5LjE2LTE4LjU2MiwwLTI3LjcyMkwxNDAuMjUzLDQ3LjUxMWMwLDAtMTEuOTE5LTExLjQ5My0wLjcxNS0yMi4zNjUgYzEwLjYxOC0xMC4zMDQsMjIuMjAzLDEuNDI3LDIyLjIwMywxLjQyN2wxOTQuMzUzLDE5NC4zNTNjMjguMTM0LDI4LjEzNCwyOC4zMTIsNDEuODM2LDAsNzAuMTQ5TDE2MS43NDEsNDg1LjQyOCBjMCwwLTExLjU4NiwxMS43MzEtMjIuMjAzLDEuNDI3QzEyOC4zMzUsNDc1Ljk4MiwxNDAuMjUzLDQ2NC40ODksMTQwLjI1Myw0NjQuNDg5eicvPjwvc3ZnPg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: 100%;
    margin: 0 .625rem;
    width: .625rem
}

@media(min-width: 768px) {
    .breadcrumb {
        overflow-x:visible;
        overflow-x: initial
    }

    .breadcrumb__item:last-child {
        min-width: 0
    }

    .breadcrumb__item:last-child span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
}

@media(min-width: 1200px) {
    .breadcrumb {
        margin-bottom:0
    }
}
</style>   